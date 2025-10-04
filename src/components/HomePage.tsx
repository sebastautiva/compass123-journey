import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  ArrowRight,
  Star,
  Mountain,
  Compass,
  Navigation,
  Shield,
  Sun,
  CloudRain
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: MapPin,
      title: t('home.features.planning.title'),
      description: t('home.features.planning.description'),
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Flexible Pacing',
      description: 'Customize te amo journey with rest days and comfortable daily distances that suit your needs.',
      color: 'text-amber-600'
    },
    {
      icon: Users,
      title: 'Senior-Friendly Focus',
      description: 'Specially designed for travelers aged 50+ with comfort-focused accommodations and tips.',
      color: 'text-purple-600'
    },
    {
      icon: Heart,
      title: t('home.features.support.title'),
      description: t('home.features.support.description'),
      color: 'text-red-600'
    }
  ];

  const routes = [
    {
      id: 'camino-frances',
      name: 'Camino Francés',
      description: 'The classic route from France through northern Spain. Most popular with excellent infrastructure.',
      distance: '764km',
      stages: 33,
      difficulty: 'Moderate',
      difficultyColor: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      icon: Mountain,
      highlights: ['Historic towns', 'Best infrastructure', 'Most social'],
      bestFor: 'First-time pilgrims',
      season: 'Apr-Oct',
      gradient: 'from-amber-50 to-orange-50'
    },
    {
      id: 'camino-portugues',
      name: 'Camino Português',
      description: 'Beautiful coastal route from Porto through charming Portuguese villages and towns.',
      distance: '620km',
      stages: 27,
      difficulty: 'Easy',
      difficultyColor: 'bg-green-100 text-green-800 border-green-300',
      icon: Compass,
      highlights: ['Coastal views', 'Gentle terrain', 'Portuguese cuisine'],
      bestFor: 'Relaxed pace seekers',
      season: 'Mar-Nov',
      gradient: 'from-blue-50 to-cyan-50'
    },
    {
      id: 'camino-del-norte',
      name: 'Camino del Norte',
      description: 'Spectacular coastal route along Spain\'s northern coast with breathtaking ocean views.',
      distance: '815km',
      stages: 33,
      difficulty: 'Challenging',
      difficultyColor: 'bg-red-100 text-red-800 border-red-300',
      icon: Navigation,
      highlights: ['Ocean views', 'Pristine beaches', 'Less crowded'],
      bestFor: 'Adventure seekers',
      season: 'May-Sep',
      gradient: 'from-slate-50 to-blue-50'
    },
    {
      id: 'camino-primitivo',
      name: 'Camino Primitivo',
      description: 'The original pilgrimage route from Oviedo with mountainous terrain and stunning landscapes.',
      distance: '320km',
      stages: 14,
      difficulty: 'Difficult',
      difficultyColor: 'bg-red-100 text-red-800 border-red-300',
      icon: Mountain,
      highlights: ['Mountain scenery', 'Authentic experience', 'Historical significance'],
      bestFor: 'Experienced hikers',
      season: 'May-Sep',
      gradient: 'from-emerald-50 to-teal-50'
    }
  ];

  const testimonials = [
    {
      name: 'Margaret Thompson',
      age: 67,
      location: 'San Francisco, CA',
      text: 'This app made planning my Camino so much easier. The senior-friendly tips were invaluable, and I felt confident every step of the way.',
      rating: 5,
      route: 'Camino Francés',
      year: '2024'
    },
    {
      name: 'Robert Chen',
      age: 59,
      location: 'Austin, TX',
      text: 'Perfect pacing suggestions and comfortable accommodations. Exactly what I needed for my first pilgrimage.',
      rating: 5,
      route: 'Camino Português',
      year: '2023'
    },
    {
      name: 'Linda Martinez',
      age: 62,
      location: 'Miami, FL',
      text: 'The detailed stage information helped me prepare mentally and physically. A life-changing experience!',
      rating: 5,
      route: 'Camino del Norte',
      year: '2024'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Pilgrims' },
    { number: '4', label: 'Historic Routes' },
    { number: '107', label: 'Total Stages' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section with Parallax Effect */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 opacity-60" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        
        <div className="relative text-center space-y-10 py-20 px-4">
          <div className="animate-fade-in space-y-6">
            <div className="flex justify-center mb-6">
              <Badge className="bg-camino-gold text-white px-6 py-2 text-sm font-medium">
                ✨ Your Journey Begins Here
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
          </div>
          
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/routes">
              <Button 
                size="lg" 
                className="bg-camino-gold hover:bg-camino-gold/90 text-white text-xl px-10 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('home.hero.cta')}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/planner">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-10 py-7 rounded-full hover:scale-105 transition-all duration-300"
              >
                Plan Your Journey
              </Button>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-camino-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            Choose Your Path
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Four historic routes await, each offering unique experiences and challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {routes.map((route, index) => (
            <Link key={route.id} to={`/routes/${route.id}`}>
              <Card 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-camino-gold cursor-pointer h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${route.gradient}`} />
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center text-2xl font-bold group-hover:text-camino-gold transition-colors">
                      <route.icon className="h-7 w-7 mr-3" />
                      {route.name}
                    </CardTitle>
                    <Badge className={`${route.difficultyColor} border`}>
                      {route.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {route.description}
                  </p>
                  
                  {/* Key Stats */}
                  <div className="flex items-center gap-4 text-sm font-medium pt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-camino-gold" />
                      <span>{route.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Navigation className="h-4 w-4 text-camino-gold" />
                      <span>{route.stages} stages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sun className="h-4 w-4 text-camino-gold" />
                      <span>{route.season}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {route.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Best For */}
                  <div className="pt-3 border-t">
                    <span className="text-xs text-muted-foreground">Best for: </span>
                    <span className="text-sm font-semibold text-camino-gold">{route.bestFor}</span>
                  </div>

                  <Button 
                    className="w-full mt-4 group-hover:bg-camino-gold group-hover:text-white transition-all"
                    variant="outline"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            Why Choose Camino Companion?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed specifically for mature travelers seeking a meaningful pilgrimage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-camino-gold group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold">
            What Fellow Pilgrims Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from real pilgrims
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t space-y-1">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age} • {testimonial.location}</p>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.route} • {testimonial.year}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
        
        <div className="relative text-center p-12 md:p-16 space-y-8">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of pilgrims who have discovered the transformative power of the Camino de Santiago
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/routes">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-amber-700 font-bold text-lg px-10 py-7 rounded-full hover:scale-105 transition-all shadow-lg"
              >
                Explore Routes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/planner">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-10 py-7 rounded-full hover:scale-105 transition-all"
              >
                Start Planning
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
