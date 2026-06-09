import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, plan, projectType, message } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Full name, email, and message are required.' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your preferred email provider (Resend, SendGrid, etc.)
    // or save to a database.
    console.log('Contact form submission received:', {
      fullName,
      email,
      phone,
      plan,
      projectType,
      message,
    });

    // Simulate network request processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
