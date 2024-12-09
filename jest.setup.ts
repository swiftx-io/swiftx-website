import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Import MSW setup
import './__tests__/mocks/setup-msw';

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
