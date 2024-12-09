import { rest } from 'msw';
import { server } from './setup-msw';
import { handlers } from './handlers';

describe('MSW Handlers', () => {
  const validContactData = {
    properties: {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      company: 'Test Co',
      how_did_you_hear_about_us: 'Google',
      project_description: 'Test project'
    }
  };

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should handle successful contact creation', async () => {
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer test-token',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(validContactData)
    });

    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.id).toBe('123');
    expect(data.properties.firstname).toBe(validContactData.properties.firstname);
  });

  it('should handle invalid access token', async () => {
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer invalid-token',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(validContactData)
    });

    const data = await response.json();
    expect(response.status).toBe(500);
    expect(data.status).toBe('error');
    expect(data.message).toBe('Invalid access token');
  });

  it('should handle missing required fields', async () => {
    const invalidData = {
      properties: {
        email: 'test@example.com' // Missing firstname and lastname
      }
    };

    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer test-token',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invalidData)
    });

    const data = await response.json();
    expect(response.status).toBe(400);
    expect(data.message).toBe('Bad Request - Missing required fields');
  });

  it('should handle invalid JSON', async () => {
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer test-token',
        'Content-Type': 'application/json'
      },
      body: 'invalid-json'
    });

    const data = await response.json();
    expect(response.status).toBe(400);
    expect(data.message).toBe('Bad Request - Invalid JSON');
  });
});
