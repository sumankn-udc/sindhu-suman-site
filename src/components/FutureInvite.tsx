import { useCallback, useEffect, useState, type FormEvent } from 'react'
import {
  copy,
  couple,
  events,
  family,
  guestInfo,
  muhurthamAt,
  placeholders,
  rsvpCopy,
  rsvpWhatsApp,
  shareInvite,
  siteUrl,
  venue,
} from '../content'
import { useLang } from '../LangContext'
import { downloadEventIcs } from '../lib/calendar'
import './FutureInvite.css'

const GUEST_NOTES = ['dress', 'travel', 'stay', 'gift'] as const

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
 * Alternate invite at /future — Lagoon dusk look
 * (deep teal / ink / coral-rose), distinct from classic dark-gold
 * and prior neon / royal / atelier themes.
 */
export function FutureInvite() {
  const { t, lang, setLang } = useLang()
  const cd = useCountdown(muhurthamAt)
  const [wishName, setWishName] = useState('')
  const [wishMessage, setWishMessage] = useState('')
  const [rsvpName, setRsvpName] = useState('')
  const [attendance, setAttendance] = useState<'yes' | 'no'>('yes')
  const [guests, setGuests] = useState(1)
  const [copied, setCopied] = useState(false)

  const futureUrl = `${siteUrl.replace(/\/$/, '')}/future`

  const shareText = useCallback(() => {
    const headline = t(shareInvite.headline)
    const body = t(shareInvite.body)
    return [headline, '', body, '', futureUrl].join('\n')
  }, [t, futureUrl])

  function onWishSubmit(e: FormEvent) {
    e.preventDefault()
    const text =
      lang === 'kn'
        ? `ಶುಭಾಶಯ — ${wishName || 'Guest'}\n${wishMessage}\n\n(${t(couple.bride)} & ${t(couple.groom)} ವಿವಾಹ)`
        : `Wedding wishes from ${wishName || 'Guest'}\n${wishMessage}\n\n(${couple.bride.en} & ${couple.groom.en})`
    window.open(
      `https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  function onRsvpSubmit(e: FormEvent) {
    e.preventDefault()
    const status =
      attendance === 'yes'
        ? lang === 'kn'
          ? 'ಹಾಜರಿ: ಹೌದು'
          : 'Attending: Yes'
        : lang === 'kn'
          ? 'ಹಾಜರಿ: ಬರಲಾಗುವುದಿಲ್ಲ'
          : 'Attending: No'

    const guestLine =
      attendance === 'yes'
        ? lang === 'kn'
          ? `ಅತಿಥಿಗಳು: ${guests}`
          : `Guests: ${guests}`
        : null

    const text = [
      lang === 'kn' ? 'RSVP — ವಿವಾಹ' : 'Wedding RSVP',
      `${lang === 'kn' ? 'ಹೆಸರು' : 'Name'}: ${rsvpName || 'Guest'}`,
      status,
      guestLine,
      '',
      `(${couple.bride.en} & ${couple.groom.en})`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  function onShare() {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareText())}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  async function onCopyInvite() {
    const text = shareText()
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt(t(copy.copyInvite), text)
    }
  }

  return (
    <div className="lagoon-root">
      <div className="lagoon-mist" aria-hidden="true" />
      <div className="lagoon-mist lagoon-mist-b" aria-hidden="true" />

      <header className="lagoon-top">
        <a className="lagoon-chip" href="/">
          ← Classic invite
        </a>
        <button
          type="button"
          className="lagoon-chip"
          onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
        >
          {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
        </button>
      </header>

      {/* Full-bleed cover — brand first, one headline, one line, one CTA */}
      <section className="lagoon-cover">
        <div className="lagoon-cover-photo" aria-hidden="true">
          <img src={placeholders.cover} alt="" />
        </div>
        <div className="lagoon-cover-veil" aria-hidden="true" />
        <div className="lagoon-cover-inner">
          <h1 className={`lagoon-brand ${lang === 'kn' ? 'kn' : ''}`}>
            <span>{t(couple.bride)}</span>
            <span className="lagoon-amp">{t(copy.and)}</span>
            <span>{t(couple.groom)}</span>
          </h1>
          <p className="lagoon-headline">
            {lang === 'kn'
              ? 'ಸಂಜೆಯ ಲಗೂನ್ ಬೆಳಕಿನಲ್ಲಿ ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ಸ್ವಾಗತ'
              : 'Join us at dusk by the lagoon of love'}
          </p>
          <p className="lagoon-support">{t(copy.weddingDate)}</p>
          <a className="lagoon-cta" href="#lagoon-countdown">
            {lang === 'kn' ? 'ಆಮಂತ್ರಣವನ್ನು ನೋಡಿ' : 'Explore the invite'}
          </a>
        </div>
      </section>

      <main className="lagoon-shell">
        <p className="lagoon-lede lagoon-reveal">
          {lang === 'kn'
            ? 'ಪ್ರೀತಿಯಿಂದ ನಿಮ್ಮನ್ನು ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ಆಹ್ವಾನಿಸುತ್ತೇವೆ'
            : 'With affection, we invite you to celebrate our wedding'}
        </p>
        <p className="lagoon-where lagoon-reveal">{t(venue.short)}</p>

        <section
          className="lagoon-section lagoon-reveal"
          id="lagoon-countdown"
        >
          <h2>{t(copy.countdownTitle)}</h2>
          <div className="lagoon-timer">
            {(
              [
                [cd.days, t(copy.days)],
                [cd.hours, t(copy.hours)],
                [cd.minutes, t(copy.minutes)],
                [cd.seconds, t(copy.seconds)],
              ] as const
            ).map(([value, label]) => (
              <div key={label} className="lagoon-tick">
                <strong>{String(value).padStart(2, '0')}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="lagoon-section lagoon-reveal">
          <h2>{t(copy.events)}</h2>
          <ol className="lagoon-timeline">
            {events.map((event) => (
              <li key={event.id}>
                <div className="lagoon-event-body">
                  <strong>{t(event.title)}</strong>
                  <span>{t(event.when)}</span>
                </div>
                <div className="lagoon-event-actions">
                  <button
                    type="button"
                    className="lagoon-link-btn"
                    onClick={() => downloadEventIcs(event, lang)}
                  >
                    {t(rsvpCopy.addCalendar)}
                  </button>
                  <a
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="lagoon-link-btn"
                  >
                    {t(rsvpCopy.getDirections)}
                  </a>
                </div>
              </li>
            ))}
          </ol>
          <p className="lagoon-address">
            {t(venue.name)}
            <br />
            {t(venue.address)}
          </p>
        </section>

        <section className="lagoon-section lagoon-reveal">
          <h2>{t(copy.theCouple)}</h2>
          <div className="lagoon-kin">
            <article>
              <h3 className={lang === 'kn' ? 'kn' : ''}>{t(couple.bride)}</h3>
              <p>{t(family.bride.parents)}</p>
            </article>
            <article>
              <h3 className={lang === 'kn' ? 'kn' : ''}>{t(couple.groom)}</h3>
              <p>{t(family.groom.parents)}</p>
            </article>
          </div>
          <p className="lagoon-hosts">{t(family.hosts)}</p>
        </section>

        <section className="lagoon-section lagoon-reveal" id="guest-info">
          <p className="lagoon-eyebrow">{t(guestInfo.eyebrow)}</p>
          <h2>{t(guestInfo.title)}</h2>
          <div className="lagoon-notes">
            {GUEST_NOTES.map((key) => {
              const note = guestInfo[key]
              return (
                <div key={key} className="lagoon-note">
                  <h3>{t(note.label)}</h3>
                  <p>{t(note.body)}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="lagoon-section lagoon-reveal" id="rsvp">
          <p className="lagoon-eyebrow">{t(rsvpCopy.eyebrow)}</p>
          <h2>{t(rsvpCopy.title)}</h2>
          <p className="lagoon-sub">{t(rsvpCopy.sub)}</p>
          <form className="lagoon-form" onSubmit={onRsvpSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t(copy.yourName)}
              value={rsvpName}
              onChange={(e) => setRsvpName(e.target.value)}
              required
            />
            <div className="lagoon-choice" role="group" aria-label={t(rsvpCopy.title)}>
              <button
                type="button"
                className={`lagoon-choice-btn${attendance === 'yes' ? ' is-active' : ''}`}
                onClick={() => setAttendance('yes')}
              >
                {t(rsvpCopy.attending)}
              </button>
              <button
                type="button"
                className={`lagoon-choice-btn${attendance === 'no' ? ' is-active' : ''}`}
                onClick={() => setAttendance('no')}
              >
                {t(rsvpCopy.notAttending)}
              </button>
            </div>
            {attendance === 'yes' ? (
              <label className="lagoon-guests">
                <span>{t(rsvpCopy.guests)}</span>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value) || 1)}
                  required
                />
              </label>
            ) : null}
            <button type="submit" className="lagoon-btn">
              {t(rsvpCopy.sendRsvp)}
            </button>
          </form>
        </section>

        <section className="lagoon-section lagoon-reveal" id="wishes">
          <h2>{t(copy.wishesTitle)}</h2>
          <p className="lagoon-sub">{t(copy.wishesSub)}</p>
          <form className="lagoon-form" onSubmit={onWishSubmit}>
            <input
              type="text"
              name="wish-name"
              placeholder={t(copy.yourName)}
              value={wishName}
              onChange={(e) => setWishName(e.target.value)}
              required
            />
            <textarea
              name="wish-message"
              placeholder={t(copy.yourMessage)}
              rows={4}
              value={wishMessage}
              onChange={(e) => setWishMessage(e.target.value)}
              required
            />
            <button type="submit" className="lagoon-btn">
              {t(copy.sendWishes)}
            </button>
          </form>
        </section>

        <section className="lagoon-section lagoon-reveal" id="share">
          <p className="lagoon-eyebrow">{t(shareInvite.eyebrow)}</p>
          <h2>{t(shareInvite.title)}</h2>
          <p className="lagoon-sub">{t(shareInvite.sub)}</p>
          <div className="lagoon-share-actions">
            <button type="button" className="lagoon-btn" onClick={onShare}>
              {t(shareInvite.shareBtn)}
            </button>
            <button
              type="button"
              className="lagoon-btn lagoon-btn-ghost"
              onClick={onCopyInvite}
            >
              {copied ? t(copy.copied) : t(copy.copyInvite)}
            </button>
          </div>
        </section>

        <p className="lagoon-note lagoon-reveal">{t(copy.closing)}</p>
        <p className="lagoon-signoff lagoon-reveal">{t(copy.withLove)}</p>
      </main>
    </div>
  )
}
