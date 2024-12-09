import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

// Temporarily comment out MSW setup while testing utils
// import './__tests__/mocks/setup-msw';
