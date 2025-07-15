import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  MapPin, 
  Home, 
  Map, 
  Calendar, 
  BookOpen, 
  HelpCircle, 
  LogOut,
  Route,
  Notebook
} from 'lucide-react';

const STORAGE_KEY = 'camino-app-authenticated';

const navigationItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/routes', icon: Map, label: 'Routes' },
  { path: '/planner', icon: Calendar, label: 'My Planner' },
  { path: '/passport', icon: BookOpen, label: 'Passport' },
  { path: '/tips', icon: Notebook, label: 'Tips & Guide' },
  { path: '/support', icon: HelpCircle, label: 'Support' },
];

export const Navigation: React.FC = () => {
  const location = useLocation();
  
  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-camino-gold" />
            <span className="text-xl font-playfair font-semibold">
              Camino Companion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`flex items-center space-x-2 text-senior ${
                      isActive 
                        ? 'bg-camino-gold text-camino-gold-foreground' 
                        : 'hover:bg-secondary'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="ml-4 text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-border">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start text-senior ${
                    isActive 
                      ? 'bg-camino-gold text-camino-gold-foreground' 
                      : 'hover:bg-secondary'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};