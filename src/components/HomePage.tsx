import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  ArrowRight,
  Star,
  Mountain,
  Compass
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: MapPin,
      title: t('home.features.planning.title'),
      description: t('home.features.planning.description')
    },
    {
      icon: Clock,
      title: 'Flexible Pacing',
      description: 'Customize your journey with rest days and comfortable daily distances that suit your needs.'
    },
    {
      icon: Users,
      title: 'Senior-Friendly Focus',
      description: 'Specially designed for travelers aged 50+ with comfort-focused accommodations and tips.'
    },
    {
      icon: Heart,
      title: t('home.features.support.title'),
      description: t('home.features.support.description')
    }
  ];

  const testimonials = [
    {
      name: 'Margaret Thompson',
      age: 67,
      location: 'San Francisco, CA',
      text: 'This app made planning my Camino so much easier. The senior-friendly tips were invaluable.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      age: 59,
      location: 'Austin, TX',
      text: 'Perfect pacing suggestions and comfortable accommodations. Exactly what I needed.',
      rating: 5
    }
  ];
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
        </div>
        
        <div className="animate-slide-up">
          <Link to="/routes">
            <Button 
              size="lg" 
              className="bg-camino-gold hover:bg-camino-gold/90 text-camino-gold-foreground text-xl px-8 py-6 rounded-full hover-lift"
            >
              {t('home.hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-semibold mb-4">
            Choose Your Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four historic routes await, each offering unique experiences and challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Mountain className="h-5 w-5 mr-2 text-camino-gold" />
                Camino Francés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The classic route from France through northern Spain. 
                Most popular with excellent infrastructure.
              </p>
              <div className="flex items-center justify-between text-sm mb-3">
                <span>764km • 33 stages</span>
                <span className="text-yellow-600">Moderate</span>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>Stage 1: Saint-Jean-Pied-de-Port → Roncesvalles (24.2km)</div>
                <div>Stage 2: Roncesvalles → Zubiri (21.4km)</div>
                <div>Stage 3: Zubiri → Pamplona (20.4km)</div>
                <div className="text-camino-gold">+ 30 more stages...</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Compass className="h-5 w-5 mr-2 text-camino-gold" />
                Camino Português
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Beautiful coastal route from Porto through charming 
                Portuguese villages and towns.
              </p>
              <div className="flex items-center justify-between text-sm mb-3">
                <span>620km • 27 stages</span>
                <span className="text-green-600">Easy</span>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>Stage 1: Lisboa → Alpriate (21.7km)</div>
                <div>Stage 2: Alpriate → Vila Franca (18.8km)</div>
                <div>Stage 3: Vila Franca → Azambuja (20km)</div>
                <div className="text-camino-gold">+ 24 more stages...</div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Mountain className="h-5 w-5 mr-2 text-camino-gold" />
                Camino del Norte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Spectacular coastal route along Spain's northern coast.
                Challenging terrain with breathtaking ocean views.
              </p>
              <div className="flex items-center justify-between text-sm mb-3">
                <span>815km • 33 stages</span>
                <span className="text-red-600">Challenging</span>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>Stage 1: Irún → San Sebastián (27.5km)</div>
                <div>Stage 2: San Sebastián → Zarautz (20.5km)</div>
                <div>Stage 3: Zarautz → Deba (22km)</div>
                <div className="text-camino-gold">+ 30 more stages...</div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Mountain className="h-5 w-5 mr-2 text-camino-gold" />
                Camino Primitivo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The original pilgrimage route from Oviedo. 
                Mountainous terrain with stunning landscapes.
              </p>
              <div className="flex items-center justify-between text-sm mb-3">
                <span>320km • 14 stages</span>
                <span className="text-red-600">Difficult</span>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>Stage 1: Oviedo → Grado (25.2km)</div>
                <div>Stage 2: Grado → Salas (22.1km)</div>
                <div>Stage 3: Salas → Tineo (19.8km)</div>
                <div className="text-camino-gold">+ 11 more stages...</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-semibold mb-4">
            Why Choose Camino Companion?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed specifically for mature travelers seeking a meaningful pilgrimage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-lift">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-camino-gold" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 rounded-lg p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-semibold mb-4">
            What Fellow Pilgrims Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-camino-gold text-camino-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.name}, {testimonial.age}</p>
                  <p className="text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-camino-gradient rounded-lg p-12 space-y-6">
        <h2 className="text-3xl font-playfair font-semibold text-secondary-foreground">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
          Join thousands of pilgrims who have discovered the transformative power of the Camino
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/routes">
            <Button 
              size="lg" 
              className="bg-camino-gold hover:bg-camino-gold/90 text-camino-gold-foreground text-lg px-8 py-6"
            >
              Explore Routes
            </Button>
          </Link>
          <Link to="/planner">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background/90 text-lg px-8 py-6"
            >
              Start Planning
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};