import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the contact form submission in a database
    // 3. Send a confirmation email to the user

    // For now, we'll just log it and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // Here's where you would integrate with an email service
    // Example with a placeholder:
    // await sendEmail({
    //   to: 'info@lossless.space',
    //   subject: `New Contact Form Submission from ${name}`,
    //   body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json({ message: 'Contact form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
