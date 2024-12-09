import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('https://api.hubapi.com/crm/v3/objects/contacts', async () => {
    return HttpResponse.json(
      {
        id: '123',
        properties: {
          firstname: 'Test',
          lastname: 'User',
          email: 'test@example.com',
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  }),
];
