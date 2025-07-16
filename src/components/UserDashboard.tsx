import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';
import { LogOut, User as UserIcon, FileText, Settings } from 'lucide-react';

interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

interface Quotation {
  id: string;
  route_id: string;
  full_name: string;
  email: string;
  phone: string;
  start_date: string;
  end_date: string;
  number_of_people: number;
  accommodation_preference: string;
  special_requirements: string;
  status: string;
  admin_notes: string;
  quote_details: string;
  total_price: number;
  created_at: string;
  updated_at: string;
}

const statusColors = {
  'OPEN_FOR_QUOTATION': 'bg-yellow-500',
  'QUOTED': 'bg-blue-500',
  'ACCEPTED': 'bg-green-500',
  'REJECTED': 'bg-red-500',
  'COMPLETED': 'bg-gray-500'
};

export const UserDashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate('/auth');
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchQuotations();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchQuotations = async () => {
    try {
      const { data, error } = await supabase
        .from('quotations')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setQuotations(data || []);
    } catch (error) {
      console.error('Error fetching quotations:', error);
      toast({
        title: "Error",
        description: "Failed to load your quotations",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive"
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-playfair font-bold">Welcome back, {profile?.full_name || user.email}</h1>
          <p className="text-muted-foreground">Manage your Camino journey</p>
        </div>
        <Button variant="outline" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>

      <Tabs defaultValue="quotations" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="quotations">
            <FileText className="mr-2 h-4 w-4" />
            My Quotations
          </TabsTrigger>
          <TabsTrigger value="profile">
            <UserIcon className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="quotations" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Your Quotations</h2>
            <Button onClick={() => navigate('/routes')}>
              Request New Quote
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading your quotations...</div>
          ) : quotations.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No quotations yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start planning your Camino journey by requesting a quote for one of our routes.
                </p>
                <Button onClick={() => navigate('/routes')}>
                  Browse Routes
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {quotations.map((quotation) => (
                <Card key={quotation.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="capitalize">
                          {quotation.route_id.replace('-', ' ')}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {new Date(quotation.start_date).toLocaleDateString()} - {new Date(quotation.end_date).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className={`${statusColors[quotation.status as keyof typeof statusColors]} text-white`}>
                        {quotation.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">People:</span> {quotation.number_of_people}
                      </div>
                      <div>
                        <span className="font-medium">Accommodation:</span> {quotation.accommodation_preference}
                      </div>
                    </div>
                    
                    {quotation.special_requirements && (
                      <div className="text-sm">
                        <span className="font-medium">Special Requirements:</span>
                        <p className="text-muted-foreground mt-1">{quotation.special_requirements}</p>
                      </div>
                    )}
                    
                    {quotation.quote_details && (
                      <div className="text-sm">
                        <span className="font-medium">Quote Details:</span>
                        <p className="text-muted-foreground mt-1">{quotation.quote_details}</p>
                      </div>
                    )}
                    
                    {quotation.total_price && (
                      <div className="text-lg font-semibold text-primary">
                        Total: €{quotation.total_price}
                      </div>
                    )}
                    
                    {quotation.admin_notes && (
                      <div className="text-sm">
                        <span className="font-medium">Notes:</span>
                        <p className="text-muted-foreground mt-1">{quotation.admin_notes}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <p className="text-muted-foreground">{profile?.full_name || 'Not set'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <p className="text-muted-foreground">{profile?.phone || 'Not set'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Member Since</label>
                  <p className="text-muted-foreground">
                    {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'Unknown'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Account settings will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};