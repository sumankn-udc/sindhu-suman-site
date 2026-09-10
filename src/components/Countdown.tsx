import { useEffect, useState } from 'react'
import { copy, muhurthamAt } from '../content'
import { useLang } from '../LangContext'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function Countdown() {
  const { t } = useLang()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const diff = Math.max(0, muhurthamAt.getTime() - now)
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  const minutes = Math.floor((diff % 3_600_000) / 60_000)
  const seconds = Math.floor((diff % 60_000) / 1000)

  const units = [
    { label: t(copy.days), value: pad(days) },
    { label: t(copy.hours), value: pad(hours) },
    { label: t(copy.minutes), value: pad(minutes) },
    { label: t(copy.seconds), value: pad(seconds) },
  ]

  return (
    <div className="countdown">
      <p className="countdown-label">{t(copy.countdownLabel)}</p>
      <div className="countdown-grid">
        {units.map((u) => (
          <div key={u.label} className="countdown-unit">
            <span className="countdown-value">{u.value}</span>
            <span className="countdown-unit-label">{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
