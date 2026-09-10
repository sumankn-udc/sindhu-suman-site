import { useEffect } from 'react'

const FRAMES = [
  '/favicon-frames/f0.png',
  '/favicon-frames/f1.png',
  '/favicon-frames/f2.png',
  '/favicon-frames/f3.png',
  '/favicon-frames/f4.png',
  '/favicon-frames/f3.png',
  '/favicon-frames/f1.png',
]

/**
 * Cycles caricature face frames in the document favicon so the tab
 * shows a joyful expression animation matching the couple.
 */
export function AnimatedFavicon() {
  useEffect(() => {
    let index = 0
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon'][data-animated='true']")
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/png'
      link.dataset.animated = 'true'
      document.head.appendChild(link)
    }

    const tick = () => {
      if (!link) return
      link.href = `${FRAMES[index % FRAMES.length]}?v=${index}`
      index += 1
    }

    tick()
    const id = window.setInterval(tick, 380)
    return () => window.clearInterval(id)
  }, [])

  return null
}
