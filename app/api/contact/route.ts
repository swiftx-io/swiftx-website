import { NextResponse } from 'next/server';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  companyName?: string;
  howDidYouHear: string;
  projectDescription: string;
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactFormData;

    // Validate required fields
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.howDidYouHear ||
      !data.projectDescription
    ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        properties: {
          firstname: data.firstName,
          lastname: data.lastName,
          email: data.email,
          phone: data.phoneNumber || '',
          company: data.companyName || '',
          how_did_you_hear_about_us: data.howDidYouHear,
          project_description: data.projectDescription,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Hubspot API error:', errorData);
      throw new Error('Failed to submit to Hubspot');
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit form',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
