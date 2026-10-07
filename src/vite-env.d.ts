/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX). Set in Netlify env. */
  readonly VITE_GA_MEASUREMENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  // GA queues Arguments objects here (see analytics.ts).
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}
