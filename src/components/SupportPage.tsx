import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { HelpCircle, Mail, MessageSquare, Users, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const SupportPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast({
      title: 'Message Sent!',
      description: 'Thank you for your question. We\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-playfair font-bold">Support & Contact</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Get personalized help planning your Camino journey
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-camino-gold" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-camino-gold hover:bg-camino-gold/90 text-camino-gold-foreground">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-camino-gold" />
                Community Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Facebook Groups</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Camino de Santiago - American Pilgrims
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Women's Camino
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Recommended Travel Agencies</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      CaminoWays.com
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center text-blue-600 hover:underline">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Fresco Tours
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-camino-gold" />
                Common Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What's the best time to walk?</h4>
                  <p className="text-sm text-muted-foreground">April-June and September-October offer the best weather and fewer crowds.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How fit do I need to be?</h4>
                  <p className="text-sm text-muted-foreground">Basic fitness is sufficient. Start training 3-6 months before your trip.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Do I need to book accommodation?</h4>
                  <p className="text-sm text-muted-foreground">For comfort-level stays, booking 1-2 days ahead is recommended.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};