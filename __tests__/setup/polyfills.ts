import { TextEncoder, TextDecoder } from 'util';
import nodeFetch, { Request as NodeRequest, Response as NodeResponse, Headers as NodeHeaders } from 'node-fetch';
import { webcrypto, randomUUID } from 'node:crypto';

// Setup polyfills
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
(global as any).fetch = nodeFetch;
(global as any).Request = NodeRequest;
(global as any).Response = NodeResponse;
(global as any).Headers = NodeHeaders;

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

  postMessage(message: any) {
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

(global as any).BroadcastChannel = MockBroadcastChannel;
