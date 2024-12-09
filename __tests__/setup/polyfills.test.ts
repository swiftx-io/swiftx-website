import './polyfills';

describe('Polyfills', () => {
  it('should define TextEncoder', () => {
    expect(global.TextEncoder).toBeDefined();
  });

  it('should define TextDecoder', () => {
    expect(global.TextDecoder).toBeDefined();
  });

  describe('crypto polyfill', () => {
    it('should define crypto globally', () => {
      expect(global.crypto).toBeDefined();
    });

    it('should expose crypto.randomUUID function', () => {
      expect(crypto.randomUUID).toBeDefined();
      expect(typeof crypto.randomUUID).toBe('function');
    });

    it('should generate valid UUIDs', () => {
      const uuid = crypto.randomUUID();
      expect(typeof uuid).toBe('string');
      expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });

    it('should generate unique UUIDs', () => {
      const uuid1 = crypto.randomUUID();
      const uuid2 = crypto.randomUUID();
      expect(uuid1).not.toBe(uuid2);
    });
  });
});
