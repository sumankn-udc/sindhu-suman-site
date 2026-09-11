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

/** Traditional rich / royal alternate invite at /future */
export function FutureInvite() {
  const { t, lang, setLang } = useLang()
  const cd = useCountdown(muhurthamAt)

  return (
    <div className="royal-root">
      <div className="royal-bg" aria-hidden="true" />

      <header className="royal-top">
        <a className="royal-back" href="/">
          ← Main invite
        </a>
        <button
          type="button"
          className="royal-lang"
          onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
        >
          {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
        </button>
      </header>

      <main className="royal-shell">
        <div className="royal-frame">
          <p className="royal-kicker">{t(copy.weddingLabel)}</p>
          <div className="royal-monogram" aria-hidden="true">
            <span>S</span>
            <i>&</i>
            <span>S</span>
          </div>

          <p className="royal-invite-line">
            {lang === 'kn'
              ? 'ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದದೊಂದಿಗೆ ನಿಮ್ಮನ್ನು ಆಮಂತ್ರಿಸುತ್ತೇವೆ'
              : 'With love and blessings, we invite you'}
          </p>

          <h1 className={`royal-names ${lang === 'kn' ? 'kn' : ''}`}>
            <span>{t(couple.bride)}</span>
            <span className="royal-and">{t(copy.and)}</span>
            <span>{t(couple.groom)}</span>
          </h1>

          <p className="royal-date">{t(copy.weddingDate)}</p>
          <p className="royal-venue-short">{t(venue.short)}</p>

          <div className="royal-ornament" aria-hidden="true">
            <span />
            <em>◆</em>
            <span />
          </div>

          <figure className="royal-portrait">
            <img src={placeholders.cover} alt="" />
          </figure>

          <section className="royal-section">
            <h2>{t(copy.countdownTitle)}</h2>
            <div className="royal-countdown">
              {(
                [
                  [cd.days, t(copy.days)],
                  [cd.hours, t(copy.hours)],
                  [cd.minutes, t(copy.minutes)],
                  [cd.seconds, t(copy.seconds)],
                ] as const
              ).map(([value, label]) => (
                <div key={label} className="royal-count-box">
                  <strong>{String(value).padStart(2, '0')}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="royal-section">
            <h2>{t(copy.events)}</h2>
            <ul className="royal-events">
              {events.map((event) => (
                <li key={event.id}>
                  <div>
                    <strong>{t(event.title)}</strong>
                    <span>{t(event.when)}</span>
                  </div>
                  <a href={venue.mapsUrl} target="_blank" rel="noreferrer">
                    {t(copy.openMaps)}
                  </a>
                </li>
              ))}
            </ul>
            <p className="royal-address">
              {t(venue.name)}
              <br />
              {t(venue.address)}
            </p>
          </section>

          <section className="royal-section royal-family">
            <h2>{t(copy.theCouple)}</h2>
            <p>
              {t(couple.bride)}
              <br />
              <small>{t(family.bride.parents)}</small>
            </p>
            <p>
              {t(couple.groom)}
              <br />
              <small>{t(family.groom.parents)}</small>
            </p>
          </section>

          <div className="royal-actions">
            <a
              className="royal-btn"
              href={`https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(
                `RSVP — ${couple.bride.en} & ${couple.groom.en}`,
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              RSVP · WhatsApp
            </a>
            <a
              className="royal-btn royal-btn-outline"
              href={`https://wa.me/?text=${encodeURIComponent(
                `We're getting Married ✨💍.\n\nYou are warmly invited.\n\n${siteUrl}/future`,
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Share this invite
            </a>
          </div>

          <p className="royal-closing">{t(copy.closing)}</p>
          <p className="royal-seal">{t(copy.withLove)}</p>
        </div>
      </main>
    </div>
  )
}
