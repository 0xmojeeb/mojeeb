import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string;
  email: string;
  project?: string;
  message: string;
  collaborationTypes?: string[];
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, email, project, message, collaborationTypes }: ContactFormData = await req.json()

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Prepare email content
    const emailSubject = `New Contact Form Submission from ${name}`
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${project ? `<p><strong>Project/Company:</strong> ${project}</p>` : ''}
      ${collaborationTypes && collaborationTypes.length > 0 ? 
        `<p><strong>Collaboration Types:</strong> ${collaborationTypes.join(', ')}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>This message was sent from your portfolio contact form.</small></p>
    `

    // Here you would integrate with an email service like Resend
    // For now, we'll log the email and return success
    console.log('Email to send:', {
      to: 'mojeeb.eth@gmail.com',
      subject: emailSubject,
      html: emailBody
    })

    // You can integrate with email services like:
    // - Resend
    // - SendGrid
    // - Mailgun
    // - AWS SES
    
    // For demonstration, we'll return success
    // In production, you'd actually send the email here
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully' 
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})