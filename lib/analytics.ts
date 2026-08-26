'use client';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, parameters: Record<string, unknown> = {}) {
  window.gtag?.('event', name, parameters);
}
