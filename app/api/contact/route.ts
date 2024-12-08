import { NextResponse } from 'next/server';
import { formSchema, type FormData } from '../../../lib/hubspot';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = formSchema.parse(body);

    const portalId = "48329133";
    const formId = "1c205d24-eded-40d3-a6aa-b8d76fd9fb77";
    const url = `https://api.hubapi.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    if (!process.env.HUBSPOT_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'Hubspot configuration is incomplete' },
        { status: 500 }
      );
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: validatedData.firstName },
          { name: 'lastname', value: validatedData.lastName },
          { name: 'email', value: validatedData.email },
          { name: 'phone', value: validatedData.phone || '' },
          { name: 'company', value: validatedData.company || '' },
          { name: 'how_did_you_hear_about_us', value: validatedData.source },
          { name: 'project_details', value: validatedData.projectDetails }
        ],
        context: {
          pageUri: request.headers.get('Referer') || '',
          pageName: 'Contact Form Submission'
        }
      })
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.message || 'Failed to submit form' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Invalid form data' },
      { status: 400 }
    );
  }
}
