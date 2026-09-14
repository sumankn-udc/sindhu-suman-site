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
 * Alternate invite at /future — Monsoon garden look
 * (soft moss, charcoal ink, parchment wash, lotus blush CTAs),
 * distinct from classic charcoal-gold and prior neon / lagoon / royal / atelier themes.
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
    <div className="garden-root">
      <div className="garden-mist" aria-hidden="true" />
      <div className="garden-mist garden-mist-b" aria-hidden="true" />

      <header className="garden-top">
        <a className="garden-chip" href="/">
          ← Classic invite
        </a>
        <button
          type="button"
          className="garden-chip"
          onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
        >
          {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
        </button>
      </header>

      {/* Full-bleed cover — brand first, one headline, one line, one CTA */}
      <section className="garden-cover">
        <div className="garden-cover-photo" aria-hidden="true">
          <img src={placeholders.cover} alt="" />
        </div>
        <div className="garden-cover-veil" aria-hidden="true" />
        <div className="garden-cover-inner">
          <h1 className={`garden-brand ${lang === 'kn' ? 'kn' : ''}`}>
            <span>{t(couple.bride)}</span>
            <span className="garden-amp">{t(copy.and)}</span>
            <span>{t(couple.groom)}</span>
          </h1>
          <p className="garden-headline">
            {lang === 'kn'
              ? 'ಮಳೆಗಾಲದ ತೋಟದಂತೆ ಮೃದುವಾದ ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ಸ್ವಾಗತ'
              : 'Welcome to our monsoon garden celebration'}
          </p>
          <p className="garden-support">{t(copy.weddingDate)}</p>
          <a className="garden-cta" href="#garden-countdown">
            {lang === 'kn' ? 'ಆಮಂತ್ರಣವನ್ನು ನೋಡಿ' : 'Explore the invite'}
          </a>
        </div>
      </section>

      <main className="garden-shell">
        <div className="garden-ornament garden-reveal" aria-hidden="true" />
        <p className="garden-lede garden-reveal">
          {lang === 'kn'
            ? 'ಪ್ರೀತಿಯಿಂದ ನಿಮ್ಮನ್ನು ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ಆಹ್ವಾನಿಸುತ್ತೇವೆ'
            : 'With affection, we invite you to celebrate our wedding'}
        </p>
        <p className="garden-where garden-reveal">{t(venue.short)}</p>

        <section
          className="garden-section garden-reveal"
          id="garden-countdown"
        >
          <h2>{t(copy.countdownTitle)}</h2>
          <div className="garden-timer">
            {(
              [
                [cd.days, t(copy.days)],
                [cd.hours, t(copy.hours)],
                [cd.minutes, t(copy.minutes)],
                [cd.seconds, t(copy.seconds)],
              ] as const
            ).map(([value, label]) => (
              <div key={label} className="garden-tick">
                <strong>{String(value).padStart(2, '0')}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="garden-section garden-reveal">
          <h2>{t(copy.events)}</h2>
          <ol className="garden-timeline">
            {events.map((event) => (
              <li key={event.id}>
                <div className="garden-event-body">
                  <strong>{t(event.title)}</strong>
                  <span>{t(event.when)}</span>
                </div>
                <div className="garden-event-actions">
                  <button
                    type="button"
                    className="garden-link-btn"
                    onClick={() => downloadEventIcs(event, lang)}
                  >
                    {t(rsvpCopy.addCalendar)}
                  </button>
                  <a
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="garden-link-btn"
                  >
                    {t(rsvpCopy.getDirections)}
                  </a>
                </div>
              </li>
            ))}
          </ol>
          <p className="garden-address">
            {t(venue.name)}
            <br />
            {t(venue.address)}
          </p>
        </section>

        <section className="garden-section garden-reveal">
          <h2>{t(copy.theCouple)}</h2>
          <div className="garden-kin">
            <article>
              <h3 className={lang === 'kn' ? 'kn' : ''}>{t(couple.bride)}</h3>
              <p>{t(family.bride.parents)}</p>
            </article>
            <article>
              <h3 className={lang === 'kn' ? 'kn' : ''}>{t(couple.groom)}</h3>
              <p>{t(family.groom.parents)}</p>
            </article>
          </div>
          <p className="garden-hosts">{t(family.hosts)}</p>
        </section>

        <section className="garden-section garden-reveal" id="guest-info">
          <p className="garden-eyebrow">{t(guestInfo.eyebrow)}</p>
          <h2>{t(guestInfo.title)}</h2>
          <div className="garden-notes">
            {GUEST_NOTES.map((key) => {
              const note = guestInfo[key]
              return (
                <div key={key} className="garden-note">
                  <h3>{t(note.label)}</h3>
                  <p>{t(note.body)}</p>
                  {key === 'stay' ? (
                    <a
                      className="garden-link-btn"
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

        <section className="garden-section garden-reveal" id="rsvp">
          <p className="garden-eyebrow">{t(rsvpCopy.eyebrow)}</p>
          <h2>{t(rsvpCopy.title)}</h2>
          <p className="garden-sub">{t(rsvpCopy.sub)}</p>
          <form className="garden-form" onSubmit={onRsvpSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t(copy.yourName)}
              value={rsvpName}
              onChange={(e) => setRsvpName(e.target.value)}
              required
            />
            <div className="garden-choice" role="group" aria-label={t(rsvpCopy.title)}>
              <button
                type="button"
                className={`garden-choice-btn${attendance === 'yes' ? ' is-active' : ''}`}
                onClick={() => setAttendance('yes')}
              >
                {t(rsvpCopy.attending)}
              </button>
              <button
                type="button"
                className={`garden-choice-btn${attendance === 'no' ? ' is-active' : ''}`}
                onClick={() => setAttendance('no')}
              >
                {t(rsvpCopy.notAttending)}
              </button>
            </div>
            {attendance === 'yes' ? (
              <label className="garden-guests">
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
            <button type="submit" className="garden-btn">
              {t(rsvpCopy.sendRsvp)}
            </button>
          </form>
        </section>

        <section className="garden-section garden-reveal" id="wishes">
          <h2>{t(copy.wishesTitle)}</h2>
          <p className="garden-sub">{t(copy.wishesSub)}</p>
          <form className="garden-form" onSubmit={onWishSubmit}>
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
            <button type="submit" className="garden-btn">
              {t(copy.sendWishes)}
            </button>
          </form>
        </section>

        <section className="garden-section garden-reveal" id="share">
          <p className="garden-eyebrow">{t(shareInvite.eyebrow)}</p>
          <h2>{t(shareInvite.title)}</h2>
          <p className="garden-sub">{t(shareInvite.sub)}</p>
          <div className="garden-share-actions">
            <button type="button" className="garden-btn" onClick={onShare}>
              {t(shareInvite.shareBtn)}
            </button>
            <button
              type="button"
              className="garden-btn garden-btn-ghost"
              onClick={onCopyInvite}
            >
              {copied ? t(copy.copied) : t(copy.copyInvite)}
            </button>
          </div>
        </section>

        <p className="garden-closing garden-reveal">{t(copy.closing)}</p>
        <p className="garden-signoff garden-reveal">{t(copy.withLove)}</p>
      </main>
    </div>
  )
}
