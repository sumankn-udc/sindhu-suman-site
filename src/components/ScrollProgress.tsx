import { useEffect, useState, type RefObject } from 'react'

export function ScrollProgress({
  scrollerRef,
}: {
  scrollerRef: RefObject<HTMLElement | null>
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const update = () => {
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    return () => el.removeEventListener('scroll', update)
  }, [scrollerRef])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div
        className="scroll-progress-fill"
        style={{ transform: `scaleY(${progress})` }}
      />
    </div>
  )
}
