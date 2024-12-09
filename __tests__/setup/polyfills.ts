import { TextEncoder, TextDecoder } from 'util';
import nodeFetch, { Request as NodeRequest, Response as NodeResponse, Headers as NodeHeaders } from 'node-fetch';

// Setup polyfills
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
(global as any).fetch = nodeFetch;
(global as any).Request = NodeRequest;
(global as any).Response = NodeResponse;
(global as any).Headers = NodeHeaders;

// Mock BroadcastChannel for MSW
class MockBroadcastChannel {
  constructor(channel: string) {}
  postMessage(message: any) {}
  addEventListener(type: string, listener: EventListener) {}
  removeEventListener(type: string, listener: EventListener) {}
  close() {}
}

(global as any).BroadcastChannel = MockBroadcastChannel;
