import './polyfills';

describe('Polyfills', () => {
  it('should define TextEncoder', () => {
    expect(global.TextEncoder).toBeDefined();
  });

  it('should define TextDecoder', () => {
    expect(global.TextDecoder).toBeDefined();
  });
});
