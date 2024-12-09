import { rest } from 'msw';

// Type for HubSpot API request body
type HubSpotContactProperties = {
  properties: {
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    company?: string;
    how_did_you_hear_about_us?: string;
    project_description?: string;
  };
};

export const handlers = [
  rest.post('https://api.hubapi.com/crm/v3/objects/contacts', async (req, res, ctx) => {
    try {
      const body = (await req.json()) as HubSpotContactProperties;

      // Validate required fields in the mock
      const { properties } = body;
      if (!properties.firstname || !properties.lastname || !properties.email) {
        return res(
          ctx.status(400),
          ctx.json({
            message: 'Bad Request - Missing required fields'
          })
        );
      }

      return res(
        ctx.status(200),
        ctx.json({
          id: '123',
          properties: {
            firstname: properties.firstname,
            lastname: properties.lastname,
            email: properties.email,
            phone: properties.phone || '',
            company: properties.company || '',
            how_did_you_hear_about_us: properties.how_did_you_hear_about_us || '',
            project_description: properties.project_description || '',
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        })
      );
    } catch (error) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'Bad Request - Invalid JSON'
        })
      );
    }
  }),
];
