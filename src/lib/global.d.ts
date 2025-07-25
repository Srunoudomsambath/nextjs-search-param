// lib/gtag.d.ts or types/global.d.ts
export {};

declare global {
  interface Window {
    gtag: (...args: [command: string, targetIdOrEventName: string, config?: object]) => void;
  }
}

