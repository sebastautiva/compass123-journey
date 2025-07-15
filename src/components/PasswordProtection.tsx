import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, MapPin } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CORRECT_PASSWORD = 'BuenCamino2025';
const STORAGE_KEY = 'camino-app-authenticated';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export const PasswordProtection: React.FC<PasswordProtectionProps> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const storedAuth = localStorage.getItem(STORAGE_KEY);
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-camino-gradient flex items-center justify-center p-4">
        <Card className="w-full max-w-md hover-lift">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="h-12 w-12 text-camino-gold" />
            </div>
            <CardTitle className="text-2xl font-playfair">
              Camino Companion
            </CardTitle>
            <p className="text-muted-foreground">
              Private Access Required
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter access code"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center text-lg py-6"
                  autoFocus
                />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full bg-camino-gold hover:bg-camino-gold/90 text-camino-gold-foreground text-lg py-6">
                Enter Camino Companion
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>This is a private application for authorized users only.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};