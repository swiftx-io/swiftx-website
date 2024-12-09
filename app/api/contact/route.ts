import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas/contact-form';

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

    // Validate using Zod schema
    const result = contactFormSchema.safeParse(data);
    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: result.error.issues
        },
        { status: 400 }
      );
    }

    if (!process.env.HUBSPOT_ACCESS_TOKEN) {
      return NextResponse.json(
        {
          error: 'Failed to submit form',
          message: 'HUBSPOT_ACCESS_TOKEN is not configured',
        },
        { status: 500 }
      );
    }

    const hubspotResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
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
          phone: data.phoneNumber ?? '',
          company: data.companyName ?? '',
          how_did_you_hear_about_us: data.howDidYouHear,
          project_description: data.projectDescription,
        },
      }),
    });

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.json();
      console.error('Hubspot API error:', errorData);
      return NextResponse.json(
        {
          error: 'Failed to submit form',
          message: 'Failed to submit to Hubspot',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
      },
      { status: 200 }
    );
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
