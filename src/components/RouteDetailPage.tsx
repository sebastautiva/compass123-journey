import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { caminoRoutes } from '../data/camino-routes';
import { 
  MapPin, 
  Clock, 
  TrendingUp, 
  Mountain,
  Calendar,
  ArrowLeft,
  Users,
  Bed,
  AlertTriangle,
  Camera,
  Quote
} from 'lucide-react';

interface RouteStage {
  id: string;
  route_id: string;
  stage_number: number;
  name: string;
  description: string;
  detailed_description: string;
  distance: number;
  estimated_time: string;
  difficulty: string;
  terrain_type: string;
  elevation_gain: number;
  elevation_loss: number;
  start_point: string;
  end_point: string;
  points_of_interest: string[];
  accommodations: any;
  services: any;
  warnings: string[];
  images: string[];
  map_url: string;
}

const difficultyColors = {
  'Easy': 'bg-green-500',
  'Moderate': 'bg-yellow-500',
  'Challenging': 'bg-orange-500',
  'Difficult': 'bg-red-500'
};

export const RouteDetailPage: React.FC = () => {
  const { routeId } = useParams<{ routeId: string }>();
  const navigate = useNavigate();
  const [route, setRoute] = useState<any>(null);
  const [stages, setStages] = useState<RouteStage[]>([]);
  const [loading, setLoading] = useState(true);
  const [quotationOpen, setQuotationOpen] = useState(false);
  const [quotationData, setQuotationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    numberOfPeople: 1,
    accommodationPreference: '',
    specialRequirements: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    if (routeId) {
      // Find route from camino routes data
      const foundRoute = caminoRoutes.find(r => r.id === routeId);
      setRoute(foundRoute);
      
      // Fetch stages from database
      fetchStages();
    }
  }, [routeId]);

  const fetchStages = async () => {
    try {
      const { data, error } = await supabase
        .from('route_stages')
        .select('*')
        .eq('route_id', routeId)
        .order('stage_number');

      if (error) throw error;

      setStages(data || []);
    } catch (error) {
      console.error('Error fetching stages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuotationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user is authenticated
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to request a quotation",
        variant: "destructive"
      });
      navigate('/auth');
      return;
    }

    try {
      const { error } = await supabase
        .from('quotations')
        .insert([{
          user_id: user.id,
          route_id: routeId,
          full_name: quotationData.fullName,
          email: quotationData.email,
          phone: quotationData.phone,
          start_date: quotationData.startDate,
          end_date: quotationData.endDate,
          number_of_people: quotationData.numberOfPeople,
          accommodation_preference: quotationData.accommodationPreference,
          special_requirements: quotationData.specialRequirements
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Your quotation request has been submitted!"
      });
      
      setQuotationOpen(false);
      setQuotationData({
        fullName: '',
        email: '',
        phone: '',
        startDate: '',
        endDate: '',
        numberOfPeople: 1,
        accommodationPreference: '',
        specialRequirements: ''
      });
    } catch (error) {
      console.error('Error submitting quotation:', error);
      toast({
        title: "Error",
        description: "Failed to submit quotation request",
        variant: "destructive"
      });
    }
  };

  if (!route) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Route not found</h1>
          <Button onClick={() => navigate('/routes')} className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Routes
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => navigate('/routes')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Routes
        </Button>
        
        <Dialog open={quotationOpen} onOpenChange={setQuotationOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Quote className="mr-2 h-4 w-4" />
              Request Quotation
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Request Quotation for {route.name}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleQuotationSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={quotationData.fullName}
                    onChange={(e) => setQuotationData(prev => ({ ...prev, fullName: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={quotationData.email}
                    onChange={(e) => setQuotationData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={quotationData.phone}
                    onChange={(e) => setQuotationData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date *</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={quotationData.startDate}
                      onChange={(e) => setQuotationData(prev => ({ ...prev, startDate: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="endDate">End Date *</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={quotationData.endDate}
                      onChange={(e) => setQuotationData(prev => ({ ...prev, endDate: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="numberOfPeople">Number of People *</Label>
                  <Input
                    id="numberOfPeople"
                    type="number"
                    min="1"
                    value={quotationData.numberOfPeople}
                    onChange={(e) => setQuotationData(prev => ({ ...prev, numberOfPeople: parseInt(e.target.value) }))}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="accommodation">Accommodation Preference</Label>
                  <Select
                    value={quotationData.accommodationPreference}
                    onValueChange={(value) => setQuotationData(prev => ({ ...prev, accommodationPreference: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select accommodation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="albergue">Albergue (Budget)</SelectItem>
                      <SelectItem value="hostal">Hostal (Mid-range)</SelectItem>
                      <SelectItem value="hotel">Hotel (Premium)</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="specialRequirements">Special Requirements</Label>
                  <Textarea
                    id="specialRequirements"
                    value={quotationData.specialRequirements}
                    onChange={(e) => setQuotationData(prev => ({ ...prev, specialRequirements: e.target.value }))}
                    placeholder="Any special needs, dietary restrictions, mobility concerns, etc."
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full">
                Submit Quotation Request
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Route Header */}
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-playfair font-bold">{route.name}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {route.description}
          </p>
        </div>

        {/* Route Overview */}
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
                <p className="font-semibold">{route.distance}km</p>
                <p className="text-sm text-muted-foreground">Total Distance</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
                <p className="font-semibold">{route.estimatedDays} days</p>
                <p className="text-sm text-muted-foreground">Estimated Time</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto text-primary mb-2" />
                <Badge className={`${difficultyColors[route.difficulty]} text-white`}>
                  {route.difficulty}
                </Badge>
                <p className="text-sm text-muted-foreground mt-1">Difficulty</p>
              </div>
              <div className="text-center">
                <Mountain className="h-8 w-8 mx-auto text-primary mb-2" />
                <p className="font-semibold">{route.startLocation}</p>
                <p className="text-sm text-muted-foreground">Starting Point</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stages">Stages ({stages.length})</TabsTrigger>
          <TabsTrigger value="practical">Practical Info</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Route Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {route.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Time to Walk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {route.bestMonths.map((month: string) => (
                  <Badge key={month} variant="secondary">
                    {month}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stages" className="space-y-4">
          {loading ? (
            <div className="text-center py-8">Loading stages...</div>
          ) : stages.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Mountain className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Detailed stages coming soon</h3>
                <p className="text-muted-foreground">
                  We're working on adding detailed stage information for this route.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {stages.map((stage) => (
                <Card key={stage.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          Stage {stage.stage_number}: {stage.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {stage.start_point} → {stage.end_point}
                        </p>
                      </div>
                      <Badge className={`${difficultyColors[stage.difficulty]} text-white`}>
                        {stage.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{stage.detailed_description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Distance:</span> {stage.distance}km
                      </div>
                      <div>
                        <span className="font-semibold">Time:</span> {stage.estimated_time}
                      </div>
                      <div>
                        <span className="font-semibold">Ascent:</span> +{stage.elevation_gain}m
                      </div>
                      <div>
                        <span className="font-semibold">Descent:</span> -{stage.elevation_loss}m
                      </div>
                    </div>

                    {stage.points_of_interest && stage.points_of_interest.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Points of Interest:</h4>
                        <ul className="text-sm space-y-1">
                          {stage.points_of_interest.map((poi, index) => (
                            <li key={index} className="flex items-start">
                              <Camera className="h-4 w-4 mr-2 text-primary mt-0.5" />
                              {poi}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {stage.warnings && stage.warnings.length > 0 && (
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-2 text-yellow-600" />
                          Important Notes:
                        </h4>
                        <ul className="text-sm space-y-1">
                          {stage.warnings.map((warning, index) => (
                            <li key={index}>• {warning}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="practical" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Planning Your Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The {route.name} is a {route.difficulty.toLowerCase()} route covering {route.distance}km 
                over approximately {route.estimatedDays} days. This route starts in {route.startLocation} 
                and ends in {route.endLocation}.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">💡 Planning Tips:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Book accommodations in advance during peak season</li>
                  <li>• Carry sufficient water and snacks</li>
                  <li>• Check weather conditions before starting each stage</li>
                  <li>• Consider rest days in major towns</li>
                  <li>• Ensure your travel insurance covers hiking activities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What We Can Arrange</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Bed className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <span className="font-semibold">Accommodation Booking:</span>
                    <p className="text-sm text-muted-foreground">From budget albergues to luxury hotels</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <span className="font-semibold">Group Organization:</span>
                    <p className="text-sm text-muted-foreground">Coordinated travel for groups of any size</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <span className="font-semibold">Flexible Scheduling:</span>
                    <p className="text-sm text-muted-foreground">Customized itineraries to match your pace</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};