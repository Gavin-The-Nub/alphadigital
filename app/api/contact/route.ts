import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      businessName,
      website,
      socialMedia,
      email,
      aboutBusiness,
      biggestChallenge,
      goals,
      services
    } = body;

    // Validate required fields
    if (!businessName || !email || !aboutBusiness) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
New Get Started Form Submission

Business Information:
- Business Name: ${businessName}
- Email: ${email}
- Website: ${website || 'Not provided'}
- Social Media: ${socialMedia || 'Not provided'}

About Business:
${aboutBusiness}

Biggest Challenge:
${biggestChallenge || 'Not provided'}

Goals (3-6 months):
${goals || 'Not provided'}

Services Interested In:
${Object.entries(services)
  .filter(([key, value]) => key !== 'others' && value === true)
  .map(([key]) => `- ${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}`)
  .join('\n')}
${services.others ? `- Others: ${services.others}` : ''}

---
This form was submitted from your website's Get Started page.
    `.trim();

    // For now, we'll just log the submission
    // In production, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with Gmail/SMTP
    
    console.log('New form submission:', {
      businessName,
      email,
      aboutBusiness,
      biggestChallenge,
      goals,
      services
    });

    // TODO: Replace this with actual email sending
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'your-email@example.com', // Your email address
      from: 'noreply@yourdomain.com', // Verified sender
      subject: `New Get Started Form: ${businessName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    };
    
    await sgMail.send(msg);
    */

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 