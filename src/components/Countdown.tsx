import { useEffect, useState } from 'react'
import { copy, muhurthamAt } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

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
  const units = [
    { label: t(copy.days), value: pad(Math.floor(diff / 86_400_000)) },
    {
      label: t(copy.hours),
      value: pad(Math.floor((diff % 86_400_000) / 3_600_000)),
    },
    {
      label: t(copy.minutes),
      value: pad(Math.floor((diff % 3_600_000) / 60_000)),
    },
    {
      label: t(copy.seconds),
      value: pad(Math.floor((diff % 60_000) / 1000)),
    },
  ]

  return (
    <section className="section countdown-section">
      <div className="sparkles" aria-hidden="true" />
      <Reveal variant="fade-up">
        <p className="section-eyebrow">{t(copy.countdownTitle)}</p>
        <Divider />
      </Reveal>
      <RevealGroup className="countdown-grid" stagger={85}>
        {units.map((u, i) => (
          <RevealItem key={u.label} variant="pop" index={i} className="count-box">
            <span className="count-value">{u.value}</span>
            <span className="count-label">{u.label}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
