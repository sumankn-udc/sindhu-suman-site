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
 * Alternate invite at /future — Royal chamber look
 * (deep maroon / burgundy, antique gold, ivory), distinct from
 * classic charcoal-gold and prior lagoon / neon / atelier themes.
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
    <div className="royal-root">
      <div className="royal-glow" aria-hidden="true" />
      <div className="royal-glow royal-glow-b" aria-hidden="true" />

      <header className="royal-top">
        <a className="royal-chip" href="/">
          ← Classic invite
        </a>
        <button
          type="button"
          className="royal-chip"
          onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
        >
          {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
        </button>
      </header>

      {/* Full-bleed cover — brand first, one headline, one line, one CTA */}
      <section className="royal-cover">
        <div className="royal-cover-photo" aria-hidden="true">
          <img src={placeholders.cover} alt="" />
        </div>
        <div className="royal-cover-veil" aria-hidden="true" />
        <div className="royal-cover-inner">
          <h1 className={`royal-brand ${lang === 'kn' ? 'kn' : ''}`}>
            <span>{t(couple.bride)}</span>
            <span className="royal-amp">{t(copy.and)}</span>
            <span>{t(couple.groom)}</span>
          </h1>
          <p className="royal-headline">
            {lang === 'kn'
              ? 'ರಾಜಸಂಭ್ರಮದೊಂದಿಗೆ ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ಸ್ವಾಗತ'
              : 'Welcome to our royal celebration of love'}
          </p>
          <p className="royal-support">{t(copy.weddingDate)}</p>
          <a className="royal-cta" href="#royal-countdown">
            {lang === 'kn' ? 'ಆಮಂತ್ರಣವನ್ನು ನೋಡಿ' : 'Explore the invite'}
          </a>
        </div>
      </section>

      <main className="royal-shell">
        <div className="royal-ornament royal-reveal" aria-hidden="true" />
        <p className="royal-lede royal-reveal">
          {lang === 'kn'
            ? 'ಪ್ರೀತಿಯಿಂದ ನಿಮ್ಮನ್ನು ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ಆಹ್ವಾನಿಸುತ್ತೇವೆ'
            : 'With affection, we invite you to celebrate our wedding'}
        </p>
        <p className="royal-where royal-reveal">{t(venue.short)}</p>

        <section
          className="royal-section royal-reveal"
          id="royal-countdown"
        >
          <h2>{t(copy.countdownTitle)}</h2>
          <div className="royal-timer">
            {(
              [
                [cd.days, t(copy.days)],
                [cd.hours, t(copy.hours)],
                [cd.minutes, t(copy.minutes)],
                [cd.seconds, t(copy.seconds)],
              ] as const
            ).map(([value, label]) => (
              <div key={label} className="royal-tick">
                <strong>{String(value).padStart(2, '0')}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="royal-section royal-reveal">
          <h2>{t(copy.events)}</h2>
          <ol className="royal-timeline">
            {events.map((event) => (
              <li key={event.id}>
                <div className="royal-event-body">
                  <strong>{t(event.title)}</strong>
                  <span>{t(event.when)}</span>
                </div>
                <div className="royal-event-actions">
                  <button
                    type="button"
                    className="royal-link-btn"
                    onClick={() => downloadEventIcs(event, lang)}
                  >
                    {t(rsvpCopy.addCalendar)}
                  </button>
                  <a
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="royal-link-btn"
                  >
                    {t(rsvpCopy.getDirections)}
                  </a>
                </div>
              </li>
            ))}
          </ol>
          <p className="royal-address">
            {t(venue.name)}
            <br />
            {t(venue.address)}
          </p>
        </section>

        <section className="royal-section royal-reveal">
          <h2>{t(copy.theCouple)}</h2>
          <div className="royal-kin">
            <article>
              <h3 className={lang === 'kn' ? 'kn' : ''}>{t(couple.bride)}</h3>
              <p>{t(family.bride.parents)}</p>
            </article>
            <article>
              <h3 className={lang === 'kn' ? 'kn' : ''}>{t(couple.groom)}</h3>
              <p>{t(family.groom.parents)}</p>
            </article>
          </div>
          <p className="royal-hosts">{t(family.hosts)}</p>
        </section>

        <section className="royal-section royal-reveal" id="guest-info">
          <p className="royal-eyebrow">{t(guestInfo.eyebrow)}</p>
          <h2>{t(guestInfo.title)}</h2>
          <div className="royal-notes">
            {GUEST_NOTES.map((key) => {
              const note = guestInfo[key]
              return (
                <div key={key} className="royal-note">
                  <h3>{t(note.label)}</h3>
                  <p>{t(note.body)}</p>
                  {key === 'stay' ? (
                    <a
                      className="royal-link-btn"
                      href={`https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(t(guestInfo.stay.message))}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t(guestInfo.stay.cta)}
                    </a>
                  ) : null}
                </div>
              )
            })}
          </div>
        </section>

        <section className="royal-section royal-reveal" id="rsvp">
          <p className="royal-eyebrow">{t(rsvpCopy.eyebrow)}</p>
          <h2>{t(rsvpCopy.title)}</h2>
          <p className="royal-sub">{t(rsvpCopy.sub)}</p>
          <form className="royal-form" onSubmit={onRsvpSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t(copy.yourName)}
              value={rsvpName}
              onChange={(e) => setRsvpName(e.target.value)}
              required
            />
            <div className="royal-choice" role="group" aria-label={t(rsvpCopy.title)}>
              <button
                type="button"
                className={`royal-choice-btn${attendance === 'yes' ? ' is-active' : ''}`}
                onClick={() => setAttendance('yes')}
              >
                {t(rsvpCopy.attending)}
              </button>
              <button
                type="button"
                className={`royal-choice-btn${attendance === 'no' ? ' is-active' : ''}`}
                onClick={() => setAttendance('no')}
              >
                {t(rsvpCopy.notAttending)}
              </button>
            </div>
            {attendance === 'yes' ? (
              <label className="royal-guests">
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
            <button type="submit" className="royal-btn">
              {t(rsvpCopy.sendRsvp)}
            </button>
          </form>
        </section>

        <section className="royal-section royal-reveal" id="wishes">
          <h2>{t(copy.wishesTitle)}</h2>
          <p className="royal-sub">{t(copy.wishesSub)}</p>
          <form className="royal-form" onSubmit={onWishSubmit}>
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
            <button type="submit" className="royal-btn">
              {t(copy.sendWishes)}
            </button>
          </form>
        </section>

        <section className="royal-section royal-reveal" id="share">
          <p className="royal-eyebrow">{t(shareInvite.eyebrow)}</p>
          <h2>{t(shareInvite.title)}</h2>
          <p className="royal-sub">{t(shareInvite.sub)}</p>
          <div className="royal-share-actions">
            <button type="button" className="royal-btn" onClick={onShare}>
              {t(shareInvite.shareBtn)}
            </button>
            <button
              type="button"
              className="royal-btn royal-btn-ghost"
              onClick={onCopyInvite}
            >
              {copied ? t(copy.copied) : t(copy.copyInvite)}
            </button>
          </div>
        </section>

        <p className="royal-closing royal-reveal">{t(copy.closing)}</p>
        <p className="royal-signoff royal-reveal">{t(copy.withLove)}</p>
      </main>
    </div>
  )
}
