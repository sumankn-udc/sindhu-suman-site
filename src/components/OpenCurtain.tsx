import { useEffect, useState } from 'react'

/** Gold envelope / curtain wipe played once when the invite opens. */
export function OpenCurtain({ onDone }: { onDone?: () => void }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(false)
      onDone?.()
      return
    }

    const end = window.setTimeout(() => {
      setVisible(false)
      onDone?.()
    }, 1400)
    return () => window.clearTimeout(end)
  }, [onDone])

  if (!visible) return null

  return (
    <div className="open-curtain" aria-hidden="true">
      <div className="open-curtain-panel open-curtain-panel--left" />
      <div className="open-curtain-panel open-curtain-panel--right" />
      <div className="open-curtain-burst">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <p className="open-curtain-seal">S &amp; S</p>
    </div>
  )
}
