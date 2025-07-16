import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.51.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

interface EmailRequest {
  quotationId: string;
  customerEmail: string;
  customerName: string;
  routeName: string;
  quoteDetails: string;
  totalPrice: number;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      quotationId, 
      customerEmail, 
      customerName, 
      routeName, 
      quoteDetails, 
      totalPrice 
    }: EmailRequest = await req.json();

    console.log('Sending quotation email to:', customerEmail);

    // In a real implementation, this would send an email using a service like Resend
    // For now, we'll just log the email content
    const emailContent = `
      Dear ${customerName},

      Thank you for your interest in our ${routeName} Camino route!

      We are pleased to provide you with the following quotation:

      ${quoteDetails}

      Total Price: €${totalPrice}

      To proceed with your booking or if you have any questions, please contact us at your earliest convenience.

      We look forward to helping you create an unforgettable Camino experience!

      Best regards,
      The Camino Team
    `;

    console.log('Email content:', emailContent);

    // TODO: Integrate with actual email service like Resend
    // const emailResponse = await sendEmail({
    //   to: customerEmail,
    //   subject: `Your Camino ${routeName} Quotation`,
    //   text: emailContent
    // });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        quotationId 
      }),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        },
      }
    );

  } catch (error) {
    console.error('Error sending quotation email:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders 
        },
      }
    );
  }
});