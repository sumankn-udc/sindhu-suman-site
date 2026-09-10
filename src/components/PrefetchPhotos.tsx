import { useEffect } from 'react'
import { placeholders } from '../content'

/** Warm the browser cache for hero images before the invite opens. */
export function PrefetchPhotos() {
  useEffect(() => {
    const urls = [
      placeholders.cover,
      placeholders.bride,
      placeholders.groom,
      placeholders.couple,
      placeholders.caricature,
      ...placeholders.gallery.map((g) => g.src),
    ]
    const links: HTMLLinkElement[] = []
    for (const href of urls) {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.as = 'image'
      link.href = href
      document.head.appendChild(link)
      links.push(link)
    }
    return () => {
      links.forEach((l) => l.remove())
    }
  }, [])

  return null
}
