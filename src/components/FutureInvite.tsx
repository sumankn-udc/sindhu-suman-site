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

/**
 * Alternate invite at /future — light editorial atelier look
 * (ivory / indigo / terracotta), distinct from the classic dark-gold theme.
 */
export function FutureInvite() {
  const { t, lang, setLang } = useLang()
  const cd = useCountdown(muhurthamAt)

  return (
    <div className="atelier-root">
      <div className="atelier-wash" aria-hidden="true" />
      <div className="atelier-grain" aria-hidden="true" />

      <header className="atelier-top">
        <a className="atelier-chip" href="/">
          ← Classic invite
        </a>
        <button
          type="button"
          className="atelier-chip"
          onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
        >
          {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
        </button>
      </header>

      <main className="atelier-shell">
        <p className="atelier-eyebrow">
          {lang === 'kn' ? 'ಒಂದು ಹೊಸ ಆಮಂತ್ರಣ ಲುಕ್' : 'An atelier wedding card'}
        </p>

        <div className="atelier-mark" aria-hidden="true">
          <span>S</span>
          <em>×</em>
          <span>S</span>
        </div>

        <p className="atelier-lede">
          {lang === 'kn'
            ? 'ಪ್ರೀತಿಯಿಂದ ನಿಮ್ಮನ್ನು ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ಆಹ್ವಾನಿಸುತ್ತೇವೆ'
            : 'With affection, we invite you to celebrate our wedding'}
        </p>

        <h1 className={`atelier-names ${lang === 'kn' ? 'kn' : ''}`}>
          <span>{t(couple.bride)}</span>
          <span className="atelier-amp">{t(copy.and)}</span>
          <span>{t(couple.groom)}</span>
        </h1>

        <p className="atelier-when">{t(copy.weddingDate)}</p>
        <p className="atelier-where">{t(venue.short)}</p>

        <figure className="atelier-photo">
          <img src={placeholders.cover} alt="" />
          <figcaption>{t(copy.theCouple)}</figcaption>
        </figure>

        <section className="atelier-block">
          <h2>{t(copy.countdownTitle)}</h2>
          <div className="atelier-timer">
            {(
              [
                [cd.days, t(copy.days)],
                [cd.hours, t(copy.hours)],
                [cd.minutes, t(copy.minutes)],
                [cd.seconds, t(copy.seconds)],
              ] as const
            ).map(([value, label]) => (
              <div key={label} className="atelier-tick">
                <strong>{String(value).padStart(2, '0')}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="atelier-block">
          <h2>{t(copy.events)}</h2>
          <ol className="atelier-timeline">
            {events.map((event, i) => (
              <li key={event.id}>
                <span className="atelier-step">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{t(event.title)}</strong>
                  <span>{t(event.when)}</span>
                </div>
                <a href={venue.mapsUrl} target="_blank" rel="noreferrer">
                  {t(copy.openMaps)}
                </a>
              </li>
            ))}
          </ol>
          <p className="atelier-address">
            {t(venue.name)}
            <br />
            {t(venue.address)}
          </p>
        </section>

        <section className="atelier-block atelier-kin">
          <h2>{t(copy.theCouple)}</h2>
          <div className="atelier-kin-grid">
            <article>
              <h3>{t(couple.bride)}</h3>
              <p>{t(family.bride.parents)}</p>
            </article>
            <article>
              <h3>{t(couple.groom)}</h3>
              <p>{t(family.groom.parents)}</p>
            </article>
          </div>
        </section>

        <div className="atelier-cta">
          <a
            className="atelier-btn"
            href={`https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(
              `RSVP — ${couple.bride.en} & ${couple.groom.en}`,
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            RSVP on WhatsApp
          </a>
          <a
            className="atelier-btn atelier-btn-ghost"
            href={`https://wa.me/?text=${encodeURIComponent(
              `We're getting Married ✨💍.\n\nYou are warmly invited.\n\n${siteUrl}/future`,
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Share atelier invite
          </a>
        </div>

        <p className="atelier-note">{t(copy.closing)}</p>
        <p className="atelier-signoff">{t(copy.withLove)}</p>
      </main>
    </div>
  )
}
