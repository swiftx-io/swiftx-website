import { TextEncoder, TextDecoder } from 'util';
import nodeFetch, { Request as NodeRequest, Response as NodeResponse, Headers as NodeHeaders } from 'node-fetch';
import { webcrypto, randomUUID } from 'node:crypto';

// Setup polyfills
(global as unknown as { TextEncoder: typeof TextEncoder }).TextEncoder = TextEncoder;
(global as unknown as { TextDecoder: typeof TextDecoder }).TextDecoder = TextDecoder;
(global as unknown as { fetch: typeof nodeFetch }).fetch = nodeFetch;
(global as unknown as { Request: typeof NodeRequest }).Request = NodeRequest;
(global as unknown as { Response: typeof NodeResponse }).Response = NodeResponse;
(global as unknown as { Headers: typeof NodeHeaders }).Headers = NodeHeaders;

// Setup crypto with randomUUID
const cryptoWithUUID = {
  ...webcrypto,
  randomUUID: randomUUID
};

Object.defineProperty(global, 'crypto', {
  value: cryptoWithUUID,
  writable: true,
  configurable: true,
});

// Mock BroadcastChannel for MSW
class MockBroadcastChannel {
  private readonly channel: string;
  private readonly listeners: Map<string, Set<EventListener>>;
  private closed: boolean;

  constructor(channel: string) {
    this.channel = channel;
    this.listeners = new Map();
    this.closed = false;
  }

  postMessage(message: MessageEvent['data']) {
    if (this.closed) return;

    const event = new MessageEvent('message', {
      data: message,
      origin: location.origin,
    });

    const messageListeners = this.listeners.get('message');
    messageListeners?.forEach(listener => listener(event));
  }

  addEventListener(type: string, listener: EventListener) {
    if (this.closed) return;

    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }
    this.listeners.get(type)?.add(listener);
  }

  removeEventListener(type: string, listener: EventListener) {
    if (this.closed) return;
    this.listeners.get(type)?.delete(listener);
  }

  close() {
    this.closed = true;
    this.listeners.clear();
  }
}

(global as unknown as { BroadcastChannel: typeof MockBroadcastChannel }).BroadcastChannel = MockBroadcastChannel;
