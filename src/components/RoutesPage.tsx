import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  TrendingUp, 
  Calendar, 
  ArrowRight,
  Mountain,
  Waves,
  TreePine,
  Church
} from 'lucide-react';
import { caminoRoutes } from '../data/camino-routes';

const routeIcons = {
  'camino-frances': Mountain,
  'camino-portugues': Waves,
  'camino-del-norte': TreePine,
  'camino-primitivo': Church
};

const difficultyColors = {
  'Easy': 'bg-green-500',
  'Moderate': 'bg-yellow-500',
  'Challenging': 'bg-orange-500',
  'Difficult': 'bg-red-500'
};

export const RoutesPage: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-playfair font-bold">
          Choose Your Camino Route
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Each route offers unique experiences, landscapes, and challenges. 
          Select the one that speaks to your heart and fits your abilities.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {caminoRoutes.map((route) => {
          const Icon = routeIcons[route.id as keyof typeof routeIcons] || Mountain;
          const isSelected = selectedRoute === route.id;
          
          return (
            <Card 
              key={route.id} 
              className={`hover-lift cursor-pointer transition-all ${
                isSelected ? 'ring-2 ring-camino-gold' : ''
              }`}
              onClick={() => setSelectedRoute(route.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-2xl">
                    <Icon className="h-6 w-6 mr-3 text-camino-gold" />
                    {route.name}
                  </CardTitle>
                  <Badge 
                    variant="secondary" 
                    className={`${difficultyColors[route.difficulty]} text-white`}
                  >
                    {route.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-senior">
                  {route.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-camino-gold" />
                    <span>{route.distance}km</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-camino-gold" />
                    <span>{route.estimatedDays} days</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-camino-gold" />
                    <span>{route.startLocation}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-camino-gold" />
                    <span>{route.bestMonths.slice(0, 2).join(', ')}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Highlights:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {route.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-camino-gold mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Link to={`/routes/${route.id}`} className="flex-1">
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-secondary"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Link to={`/routes/${route.id}`} className="flex-1">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-playfair font-semibold mb-4">
          Need Help Choosing?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">For First-Time Pilgrims</h3>
            <p className="text-muted-foreground text-senior">
              The <strong>Camino Francés</strong> is recommended for its excellent infrastructure, 
              international community, and well-marked paths.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">For Coastal Lovers</h3>
            <p className="text-muted-foreground text-senior">
              The <strong>Camino Português</strong> offers beautiful coastal sections 
              and charming Portuguese culture with easier terrain.
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link to="/support">
            <Button variant="outline" className="text-senior">
              Get Personal Recommendations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};