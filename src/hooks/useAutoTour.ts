import { useEffect, useRef, type RefObject } from 'react'

const TOUR_STOPS = [
  '#cover',
  '#couple',
  '#gallery',
  '#countdown',
  '#events',
  '#guest-info',
  '#rsvp',
  '#wishes',
  '#share',
  '#closing',
] as const

type Options = {
  /** When true, start the guided tour */
  enabled: boolean
  /** Scroll container (invite-scroll) */
  scrollerRef: RefObject<HTMLElement | null>
  /** Delay before first move after enable */
  startDelayMs?: number
  /** Pause at each section */
  dwellMs?: number
}

/**
 * Soft guided auto-scroll through invite sections.
 * Stops immediately on any user scroll / touch / wheel.
 */
export function useAutoTour({
  enabled,
  scrollerRef,
  startDelayMs = 1100,
  dwellMs = 1600,
}: Options) {
  const cancelled = useRef(false)

  useEffect(() => {
    if (!enabled) return
    const scroller = scrollerRef.current
    if (!scroller) return

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    cancelled.current = false
    const timers: number[] = []

    const stop = () => {
      cancelled.current = true
      timers.forEach((id) => window.clearTimeout(id))
    }

    const onUser = () => stop()
    scroller.addEventListener('wheel', onUser, { passive: true })
    scroller.addEventListener('touchstart', onUser, { passive: true })
    scroller.addEventListener('pointerdown', onUser, { passive: true })

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms))
      })

    void (async () => {
      await wait(startDelayMs)
      if (cancelled.current) return

      for (const sel of TOUR_STOPS) {
        if (cancelled.current) return
        const el = scroller.querySelector(sel)
        if (!el) continue
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        await wait(dwellMs)
      }
    })()

    return () => {
      stop()
      scroller.removeEventListener('wheel', onUser)
      scroller.removeEventListener('touchstart', onUser)
      scroller.removeEventListener('pointerdown', onUser)
    }
  }, [enabled, scrollerRef, startDelayMs, dwellMs])
}
