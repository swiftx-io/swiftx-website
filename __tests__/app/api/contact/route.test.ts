import { NextRequest } from 'next/server';
import { POST } from '../../../../app/api/contact/route';
import { contactFormSchema } from '../../../../lib/schemas/contact-form';
import { server } from '../../../mocks/setup-msw';

describe('Contact API Route', () => {
  const validFormData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    howDidYouHear: 'Google',
    projectDescription: 'Test project',
    phoneNumber: '1234567890',
    companyName: 'Test Company',
  };

  beforeAll(() => {
    server.listen();
    process.env.HUBSPOT_ACCESS_TOKEN = 'test-token';
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
    delete process.env.HUBSPOT_ACCESS_TOKEN;
  });

  it('should handle valid form submission', async () => {
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify(validFormData),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data.success).toBe(true);
    expect(data.message).toBe('Form submitted successfully');
  });

  it('should validate required fields', async () => {
    const invalidFormData = {
      firstName: 'John',
    };

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify(invalidFormData),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);

    const data = await response.json();
    expect(data.error).toBe('Invalid form data');
    expect(data.details).toBeDefined();
  });

  it('should handle invalid email format', async () => {
    const invalidFormData = {
      ...validFormData,
      email: 'invalid-email',
    };

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify(invalidFormData),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);

    const data = await response.json();
    expect(data.error).toBe('Invalid form data');
    expect(data.details).toBeDefined();
    expect(data.details.some((issue: any) => issue.path.includes('email'))).toBe(true);
  });

  it('should handle HubSpot API errors', async () => {
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify(validFormData),
    });

    const token = process.env.HUBSPOT_ACCESS_TOKEN;
    process.env.HUBSPOT_ACCESS_TOKEN = 'invalid-token';

    const response = await POST(request);
    expect(response.status).toBe(500);

    const data = await response.json();
    expect(data.error).toBe('Failed to submit form');
    expect(data.message).toBe('Failed to submit to Hubspot');

    process.env.HUBSPOT_ACCESS_TOKEN = token;
  });

  it('should handle malformed JSON in request', async () => {
    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: 'invalid-json',
    });

    const response = await POST(request);
    expect(response.status).toBe(500);

    const data = await response.json();
    expect(data.error).toBe('Failed to submit form');
  });

  it('should handle missing HUBSPOT_ACCESS_TOKEN', async () => {
    const token = process.env.HUBSPOT_ACCESS_TOKEN;
    delete process.env.HUBSPOT_ACCESS_TOKEN;

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: JSON.stringify(validFormData),
    });

    const response = await POST(request);
    expect(response.status).toBe(500);

    const data = await response.json();
    expect(data.error).toBe('Failed to submit form');
    expect(data.message).toBe('HUBSPOT_ACCESS_TOKEN is not configured');

    process.env.HUBSPOT_ACCESS_TOKEN = token;
  });
});