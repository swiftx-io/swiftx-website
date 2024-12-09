import { server } from './setup-msw';

describe('MSW Setup', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterAll(() => server.close());

  it('should have a server instance', () => {
    expect(server).toBeDefined();
  });
});
