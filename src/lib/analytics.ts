const measurementId = (import.meta.env.VITE_GA_MEASUREMENT_ID ?? '').trim()

let initialized = false

/**
 * Load GA4 when `VITE_GA_MEASUREMENT_ID` is set (Netlify / local `.env`).
 *
 * Important: Google's snippet must push the `arguments` object into
 * `dataLayer` — not a rest-parameter array — or hits never register.
 */
export function initAnalytics() {
  if (initialized || !measurementId || typeof document === 'undefined') return
  initialized = true

  const w = window
  w.dataLayer = w.dataLayer || []

  // Match Google's bootstrap exactly (non-arrow so `arguments` exists).
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments)
  }

  w.gtag('js', new Date())
  w.gtag('config', measurementId, {
    send_page_view: true,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (!measurementId || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

/** Site / invite page open (page_view is also sent by gtag config). */
export function trackInviteOpen() {
  trackEvent('invite_open', { engagement_type: 'open' })
}

/** Click on the WhatsApp share preview image. */
export function trackShareImageClick() {
  trackEvent('share_image_click', {
    image: 'og-share',
    engagement_type: 'click',
  })
}

export function trackShareWhatsApp() {
  trackEvent('share_whatsapp', { method: 'whatsapp' })
}

export function isAnalyticsEnabled() {
  return Boolean(measurementId)
}
