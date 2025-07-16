-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create enhanced route stages table
CREATE TABLE public.route_stages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  route_id TEXT NOT NULL,
  stage_number INTEGER NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  detailed_description TEXT,
  distance DECIMAL NOT NULL,
  estimated_time TEXT,
  difficulty TEXT NOT NULL,
  terrain_type TEXT,
  elevation_gain INTEGER,
  elevation_loss INTEGER,
  start_point TEXT NOT NULL,
  end_point TEXT NOT NULL,
  points_of_interest TEXT[],
  accommodations JSONB,
  services JSONB,
  warnings TEXT[],
  images TEXT[],
  map_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create quotations table
CREATE TABLE public.quotations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  route_id TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  start_date DATE,
  end_date DATE,
  number_of_people INTEGER NOT NULL,
  accommodation_preference TEXT,
  special_requirements TEXT,
  status TEXT NOT NULL DEFAULT 'OPEN_FOR_QUOTATION',
  admin_notes TEXT,
  quote_details TEXT,
  total_price DECIMAL,
  quoted_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.route_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quotations ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Route stages policies (public read)
CREATE POLICY "Anyone can view route stages" 
ON public.route_stages 
FOR SELECT 
USING (true);

-- Quotations policies
CREATE POLICY "Users can view their own quotations" 
ON public.quotations 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own quotations" 
ON public.quotations 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quotations" 
ON public.quotations 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_route_stages_updated_at
  BEFORE UPDATE ON public.route_stages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_quotations_updated_at
  BEFORE UPDATE ON public.quotations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Insert sample route stages data
INSERT INTO public.route_stages (route_id, stage_number, name, description, detailed_description, distance, estimated_time, difficulty, terrain_type, elevation_gain, elevation_loss, start_point, end_point, points_of_interest, accommodations, services, warnings) VALUES
('camino-frances', 1, 'Saint-Jean-Pied-de-Port to Roncesvalles', 'The first and most challenging stage crossing the Pyrenees', 'This legendary first stage of the Camino Francés crosses the Pyrenees mountains through the Napoleon Route (Route de Napoléon) when weather permits, or via the Valcarlos route in winter. The path takes pilgrims through beautiful Pyrenean landscapes, ancient forests, and pastoral meadows before arriving at the historic monastery of Roncesvalles.', 25.1, '7-8 hours', 'Difficult', 'Mountain paths, forest trails', 1200, 400, 'Saint-Jean-Pied-de-Port', 'Roncesvalles', ARRAY['Pyrenees mountain views', 'Bentarte peak', 'Lepoeder pass', 'Roncesvalles monastery'], '{"albergues": [{"name": "Albergue de Roncesvalles", "capacity": 183, "price": 12}], "hotels": [{"name": "Hotel Roncesvalles", "price": 65}]}', '{"restaurants": 2, "shops": 1, "medical": 1}', ARRAY['Weather dependent route', 'Steep ascents and descents', 'Limited shelter on mountain sections']),
('camino-frances', 2, 'Roncesvalles to Zubiri', 'Descent through Navarre forests', 'A gentler stage after the challenging Pyrenees crossing, this route descends through the beautiful beech and oak forests of Navarre. The path passes through small villages and follows ancient Roman roads, offering a more relaxed walking experience with excellent opportunities to meet fellow pilgrims.', 21.5, '5-6 hours', 'Moderate', 'Forest paths, country roads', 200, 600, 'Roncesvalles', 'Zubiri', ARRAY['Espinal village', 'Alto de Mezkiritz', 'Larrasoaña bridge', 'Magnet bridge in Zubiri'], '{"albergues": [{"name": "Albergue Zaldiko", "capacity": 24, "price": 12}, {"name": "Albergue Suseia", "capacity": 18, "price": 15}]}', '{"restaurants": 3, "shops": 2, "pharmacy": 1}', ARRAY['Wet conditions possible', 'Traffic on road sections near Zubiri']),
('camino-portugues', 1, 'Porto to Vilarinho', 'Starting from Porto Cathedral', 'Begin your Portuguese Camino journey from the magnificent Porto Cathedral, walking through the historic center and then following the coastal route. This stage offers urban walking initially, then transitions to beautiful coastal paths with stunning ocean views and charming fishing villages.', 27.2, '6-7 hours', 'Moderate', 'Urban paths, coastal trails', 350, 200, 'Porto', 'Vilarinho', ARRAY['Porto Cathedral', 'Matosinhos beach', 'Vila do Conde', 'Coastal lighthouse'], '{"albergues": [{"name": "Albergue de Vilarinho", "capacity": 30, "price": 10}], "hotels": [{"name": "Hotel Vila do Conde", "price": 45}]}', '{"restaurants": 5, "shops": 3, "medical": 1}', ARRAY['Urban traffic in Porto', 'Coastal weather changes']);

-- Create user roles enum and table for admin functionality
CREATE TYPE public.user_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role user_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- User roles policies
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role user_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
    AND role = _role
  )
$$;

-- Admin policies for quotations (admins can see all)
CREATE POLICY "Admins can view all quotations" 
ON public.quotations 
FOR SELECT 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update all quotations" 
ON public.quotations 
FOR UPDATE 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));