import { useEffect, useState } from 'react'
import {
  copy,
  couple,
  events,
  family,
  muhurthamAt,
  placeholders,
  rsvpWhatsApp,
  siteUrl,
  venue,
} from '../content'
import { useLang } from '../LangContext'
import './FutureInvite.css'

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])
  const diff = Math.max(0, target.getTime() - now)
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  }
}

/** Neon / glass futuristic alternate invite at /future */
export function FutureInvite() {
  const { t, lang, setLang } = useLang()
  const cd = useCountdown(muhurthamAt)

  return (
    <div className="future-root">
      <div className="future-bg" aria-hidden="true" />
      <div className="future-grid" aria-hidden="true" />

      <header className="future-top">
        <a className="future-back" href="/">
          ← Classic invite
        </a>
        <button
          type="button"
          className="future-lang"
          onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
        >
          {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
        </button>
      </header>

      <main className="future-shell">
        <p className="future-kicker">LIVE TRANSMISSION · OCT 2026</p>
        <div className="future-logo">S × S</div>
        <h1 className={`future-names ${lang === 'kn' ? 'kn' : ''}`}>
          <span>{t(couple.bride)}</span>
          <span className="future-and">{t(copy.and)}</span>
          <span>{t(couple.groom)}</span>
        </h1>
        <p className="future-tag">
          {lang === 'kn'
            ? 'ಹೊಸ ಅಧ್ಯಾಯ ಪ್ರಾರಂಭ — ಭವಿಷ್ಯದ ಆಮಂತ್ರಣ, ನಿಜವಾದ ಹೃದಯಗಳು.'
            : 'A new chapter begins — futuristic invite, real hearts.'}
        </p>

        <div className="future-hero">
          <img src={placeholders.cover} alt="" />
          <div className="future-hero-glow" />
        </div>

        <section className="future-panel">
          <p className="future-panel-label">COUNTDOWN TO MUHURTHAM</p>
          <div className="future-digits">
            {(
              [
                [cd.days, t(copy.days)],
                [cd.hours, t(copy.hours)],
                [cd.minutes, t(copy.minutes)],
                [cd.seconds, t(copy.seconds)],
              ] as const
            ).map(([value, label]) => (
              <div key={label} className="future-digit">
                <strong>{String(value).padStart(2, '0')}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="future-panel">
          <p className="future-panel-label">SIGNAL · EVENTS</p>
          <ul className="future-events">
            {events.map((event) => (
              <li key={event.id}>
                <div>
                  <strong>{t(event.title)}</strong>
                  <span>{t(event.when)}</span>
                </div>
                <a href={venue.mapsUrl} target="_blank" rel="noreferrer">
                  NAV
                </a>
              </li>
            ))}
          </ul>
          <p className="future-venue">
            {t(venue.name)}
            <br />
            {t(venue.address)}
          </p>
        </section>

        <section className="future-panel future-family">
          <p className="future-panel-label">ORIGIN</p>
          <p>
            {t(couple.bride)} — {t(family.bride.parents)}
          </p>
          <p>
            {t(couple.groom)} — {t(family.groom.parents)}
          </p>
        </section>

        <div className="future-cta-row">
          <a
            className="future-cta"
            href={`https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(
              `RSVP — ${couple.bride.en} & ${couple.groom.en}`,
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            RSVP · WhatsApp
          </a>
          <a
            className="future-cta future-cta-ghost"
            href={`https://wa.me/?text=${encodeURIComponent(
              `We're getting Married ✨💍.\n\nYou are warmly invited.\n\n${siteUrl}/future`,
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Share neon invite
          </a>
        </div>

        <p className="future-foot">{t(copy.closing)}</p>
      </main>
    </div>
  )
}
