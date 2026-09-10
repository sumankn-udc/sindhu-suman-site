import { useEffect, useRef, useState } from 'react'

type UseInViewOptions = {
  /** Fraction of element visibility required (0–1). Default 0.12 */
  threshold?: number
  rootMargin?: string
  /** Fire once then stay visible. Default true */
  once?: boolean
}

/**
 * Observe visibility inside `.invite-scroll` when present (phone card),
 * otherwise the viewport. Transform/opacity-friendly scroll reveals.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.12,
  rootMargin = '0px 0px -6% 0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const root = el.closest('.invite-scroll') as Element | null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { root: root ?? null, threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
