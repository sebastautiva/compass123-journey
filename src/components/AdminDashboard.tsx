import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  FileText, 
  Users, 
  DollarSign, 
  Calendar,
  Mail,
  Phone,
  Edit,
  Check,
  X
} from 'lucide-react';

interface Quotation {
  id: string;
  user_id: string;
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
  quoted_at: string;
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

export const AdminDashboard: React.FC = () => {
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuotation, setSelectedQuotation] = useState<Quotation | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [updateData, setUpdateData] = useState({
    status: '',
    quote_details: '',
    total_price: '',
    admin_notes: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchQuotations();
  }, []);

  const fetchQuotations = async () => {
    try {
      const { data, error } = await supabase
        .from('quotations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setQuotations(data || []);
    } catch (error) {
      console.error('Error fetching quotations:', error);
      toast({
        title: "Error",
        description: "Failed to load quotations",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditQuotation = (quotation: Quotation) => {
    setSelectedQuotation(quotation);
    setUpdateData({
      status: quotation.status,
      quote_details: quotation.quote_details || '',
      total_price: quotation.total_price?.toString() || '',
      admin_notes: quotation.admin_notes || ''
    });
    setEditOpen(true);
  };

  const handleUpdateQuotation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedQuotation) return;

    try {
      const updatePayload: any = {
        status: updateData.status,
        quote_details: updateData.quote_details,
        admin_notes: updateData.admin_notes,
        updated_at: new Date().toISOString()
      };

      if (updateData.total_price) {
        updatePayload.total_price = parseFloat(updateData.total_price);
      }

      if (updateData.status === 'QUOTED') {
        updatePayload.quoted_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('quotations')
        .update(updatePayload)
        .eq('id', selectedQuotation.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Quotation updated successfully!"
      });

      setEditOpen(false);
      fetchQuotations();

      // TODO: Send email notification if status changed to QUOTED
      if (updateData.status === 'QUOTED') {
        // This would trigger an email notification to the customer
        console.log('Should send email notification to:', selectedQuotation.email);
      }
    } catch (error) {
      console.error('Error updating quotation:', error);
      toast({
        title: "Error",
        description: "Failed to update quotation",
        variant: "destructive"
      });
    }
  };

  const getQuotationStats = () => {
    const stats = {
      total: quotations.length,
      open: quotations.filter(q => q.status === 'OPEN_FOR_QUOTATION').length,
      quoted: quotations.filter(q => q.status === 'QUOTED').length,
      accepted: quotations.filter(q => q.status === 'ACCEPTED').length
    };
    return stats;
  };

  const stats = getQuotationStats();

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center py-8">Loading admin dashboard...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-playfair font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage quotations and customer requests</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Quotations</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">{stats.open}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Quoted</p>
                <p className="text-2xl font-bold">{stats.quoted}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Check className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Accepted</p>
                <p className="text-2xl font-bold">{stats.accepted}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quotations List */}
      <Card>
        <CardHeader>
          <CardTitle>Quotation Requests</CardTitle>
        </CardHeader>
        <CardContent>
          {quotations.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No quotations yet</h3>
              <p className="text-muted-foreground">
                Quotation requests will appear here when customers submit them.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {quotations.map((quotation) => (
                <Card key={quotation.id} className="border-l-4 border-l-primary/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold capitalize">
                          {quotation.route_id.replace('-', ' ')}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Request #{quotation.id.substring(0, 8)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`${statusColors[quotation.status as keyof typeof statusColors]} text-white`}>
                          {quotation.status.replace('_', ' ')}
                        </Badge>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditQuotation(quotation)}
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Customer Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                            {quotation.full_name}
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                            {quotation.email}
                          </div>
                          {quotation.phone && (
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                              {quotation.phone}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Trip Details</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">Dates:</span> {new Date(quotation.start_date).toLocaleDateString()} - {new Date(quotation.end_date).toLocaleDateString()}
                          </div>
                          <div>
                            <span className="font-medium">People:</span> {quotation.number_of_people}
                          </div>
                          <div>
                            <span className="font-medium">Accommodation:</span> {quotation.accommodation_preference || 'Not specified'}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Status & Pricing</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">Created:</span> {new Date(quotation.created_at).toLocaleDateString()}
                          </div>
                          {quotation.total_price && (
                            <div className="text-lg font-semibold text-primary">
                              Total: €{quotation.total_price}
                            </div>
                          )}
                          {quotation.quoted_at && (
                            <div>
                              <span className="font-medium">Quoted:</span> {new Date(quotation.quoted_at).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {quotation.special_requirements && (
                      <div className="mt-4 p-3 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Special Requirements:</h4>
                        <p className="text-sm">{quotation.special_requirements}</p>
                      </div>
                    )}

                    {quotation.quote_details && (
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Quote Details:</h4>
                        <p className="text-sm">{quotation.quote_details}</p>
                      </div>
                    )}

                    {quotation.admin_notes && (
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Admin Notes:</h4>
                        <p className="text-sm">{quotation.admin_notes}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Quotation Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Update Quotation - {selectedQuotation?.full_name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedQuotation && (
            <form onSubmit={handleUpdateQuotation} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={updateData.status}
                    onValueChange={(value) => setUpdateData(prev => ({ ...prev, status: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="OPEN_FOR_QUOTATION">Open for Quotation</SelectItem>
                      <SelectItem value="QUOTED">Quoted</SelectItem>
                      <SelectItem value="ACCEPTED">Accepted</SelectItem>
                      <SelectItem value="REJECTED">Rejected</SelectItem>
                      <SelectItem value="COMPLETED">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="totalPrice">Total Price (€)</Label>
                  <Input
                    id="totalPrice"
                    type="number"
                    step="0.01"
                    value={updateData.total_price}
                    onChange={(e) => setUpdateData(prev => ({ ...prev, total_price: e.target.value }))}
                    placeholder="Enter total price"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="quoteDetails">Quote Details</Label>
                <Textarea
                  id="quoteDetails"
                  value={updateData.quote_details}
                  onChange={(e) => setUpdateData(prev => ({ ...prev, quote_details: e.target.value }))}
                  placeholder="Enter detailed quote information for the customer..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="adminNotes">Admin Notes (Internal)</Label>
                <Textarea
                  id="adminNotes"
                  value={updateData.admin_notes}
                  onChange={(e) => setUpdateData(prev => ({ ...prev, admin_notes: e.target.value }))}
                  placeholder="Internal notes (not visible to customer)..."
                  rows={3}
                />
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setEditOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Update Quotation
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};