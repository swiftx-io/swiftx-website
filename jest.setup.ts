import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

// Import MSW setup (after TextEncoder/TextDecoder are defined)
import './__tests__/mocks/setup-msw';
