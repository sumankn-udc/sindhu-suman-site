import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type FormEvent,
} from 'react'
import {
  copy,
  couple,
  events,
  family,
  guestInfo,
  muhurthamAt,
  photoSets,
  type PhotoSetId,
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
const PHOTO_SET_IDS = Object.keys(photoSets) as PhotoSetId[]

const CHAPTERS = [
  { id: 'story-cover', en: 'Cover', kn: 'ಕವರ್' },
  { id: 'story-when', en: 'When', kn: 'ಯಾವಾಗ' },
  { id: 'story-events', en: 'Events', kn: 'ಕಾರ್ಯ' },
  { id: 'story-photos', en: 'Photos', kn: 'ಫೋಟೋ' },
  { id: 'story-us', en: 'Us', kn: 'ನಾವು' },
  { id: 'story-guests', en: 'Guests', kn: 'ಅತಿಥಿ' },
  { id: 'story-rsvp', en: 'RSVP', kn: 'RSVP' },
  { id: 'story-wishes', en: 'Wish', kn: 'ಆಶಿ' },
] as const

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

function readSavedPhotoSet(): PhotoSetId {
  try {
    const raw = localStorage.getItem('future-photo-set')
    if (raw && raw in photoSets) return raw as PhotoSetId
  } catch {
    /* ignore */
  }
  return 'photos'
}

/**
 * Alternate invite at /future — vertical story-reel format (snap chapters,
 * horizontal event strip, photo-pack switcher). Distinct layout from the
 * classic stacked phone invite.
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
  const [photoSet, setPhotoSet] = useState<PhotoSetId>(readSavedPhotoSet)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [activeChapter, setActiveChapter] = useState(0)
  const [coverIndex, setCoverIndex] = useState(0)

  const pack = photoSets[photoSet]
  const coverStack = useMemo(
    () => [pack.cover, pack.couple, pack.bride, pack.groom],
    [pack],
  )

  useEffect(() => {
    setCoverIndex(0)
    try {
      localStorage.setItem('future-photo-set', photoSet)
    } catch {
      /* ignore */
    }
  }, [photoSet])

  useEffect(() => {
    const nodes = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      Boolean,
    ) as HTMLElement[]
    if (!nodes.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const idx = CHAPTERS.findIndex((c) => c.id === visible.target.id)
        if (idx >= 0) setActiveChapter(idx)
      },
      { threshold: [0.45, 0.6] },
    )
    nodes.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [])

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
    <div className="reel-root">
      <div className="reel-grain" aria-hidden="true" />

      <header className="reel-chrome">
        <a className="reel-chip" href="/">
          ← Classic
        </a>
        <div
          className="reel-photo-switch"
          role="group"
          aria-label={lang === 'kn' ? 'ಫೋಟೋ ಆಯ್ಕೆ' : 'Photo options'}
        >
          {PHOTO_SET_IDS.map((id) => (
            <button
              key={id}
              type="button"
              className={`reel-photo-opt${photoSet === id ? ' is-on' : ''}`}
              onClick={() => setPhotoSet(id)}
              aria-pressed={photoSet === id}
            >
              {t(photoSets[id].label)}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="reel-chip"
          onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
        >
          {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
        </button>
      </header>

      <nav className="reel-rail" aria-label="Chapters">
        {CHAPTERS.map((ch, i) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className={`reel-dot${activeChapter === i ? ' is-on' : ''}`}
            aria-label={lang === 'kn' ? ch.kn : ch.en}
            title={lang === 'kn' ? ch.kn : ch.en}
          />
        ))}
      </nav>

      <div className="reel-scroller">
        {/* Chapter 1 — Cover story */}
        <section className="reel-slide reel-cover" id="story-cover">
          <div className="reel-cover-stack">
            {coverStack.map((src, i) => (
              <button
                key={`${photoSet}-${src}-${i}`}
                type="button"
                className={`reel-cover-frame${coverIndex === i ? ' is-front' : ''}`}
                style={{ '--i': i } as CSSProperties}
                onClick={() => {
                  setCoverIndex(i)
                  setLightbox(src)
                }}
                aria-label={lang === 'kn' ? 'ಫೋಟೋ ತೆರೆ' : 'Open photo'}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
          <div className="reel-cover-copy">
            <p className="reel-kicker">{t(photoSets[photoSet].hint)}</p>
            <h1 className={`reel-brand ${lang === 'kn' ? 'kn' : ''}`}>
              <span>{t(couple.bride)}</span>
              <span className="reel-amp">{t(copy.amp)}</span>
              <span>{t(couple.groom)}</span>
            </h1>
            <p className="reel-date">{t(copy.weddingDate)}</p>
            <p className="reel-line">{t(venue.short)}</p>
            <div className="reel-cover-thumbs" role="tablist">
              {coverStack.map((src, i) => (
                <button
                  key={`thumb-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={coverIndex === i}
                  className={`reel-thumb${coverIndex === i ? ' is-on' : ''}`}
                  onClick={() => setCoverIndex(i)}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
            <a className="reel-cta" href="#story-when">
              {lang === 'kn' ? 'ಸ್ವೈಪ್ ಮಾಡಿ →' : 'Swipe the story →'}
            </a>
          </div>
        </section>

        {/* Chapter 2 — Countdown */}
        <section className="reel-slide reel-when" id="story-when">
          <p className="reel-kicker">{t(copy.countdownTitle)}</p>
          <h2 className="reel-big">
            {lang === 'kn' ? 'ಮುಹೂರ್ತಕ್ಕೆ' : 'Until muhurtham'}
          </h2>
          <div className="reel-timer">
            {(
              [
                [cd.days, t(copy.days)],
                [cd.hours, t(copy.hours)],
                [cd.minutes, t(copy.minutes)],
                [cd.seconds, t(copy.seconds)],
              ] as const
            ).map(([value, label]) => (
              <div key={label} className="reel-tick">
                <strong>{String(value).padStart(2, '0')}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="reel-support">{t(copy.together)}</p>
        </section>

        {/* Chapter 3 — Horizontal events strip */}
        <section className="reel-slide reel-events" id="story-events">
          <p className="reel-kicker">{t(copy.events)}</p>
          <h2 className="reel-big">
            {lang === 'kn' ? 'ಹಬ್ಬದ ರೀಲ್' : 'Celebration reel'}
          </h2>
          <div className="reel-hstrip" tabIndex={0}>
            {events.map((event, i) => (
              <article key={event.id} className="reel-event-card">
                <span className="reel-event-num">0{i + 1}</span>
                <strong>{t(event.title)}</strong>
                <span>{t(event.when)}</span>
                <div className="reel-event-actions">
                  <button
                    type="button"
                    className="reel-link"
                    onClick={() => downloadEventIcs(event, lang)}
                  >
                    {t(rsvpCopy.addCalendar)}
                  </button>
                  <a
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="reel-link"
                  >
                    {t(rsvpCopy.getDirections)}
                  </a>
                </div>
              </article>
            ))}
            <article className="reel-event-card reel-event-venue">
              <strong>{t(venue.name)}</strong>
              <span>{t(venue.address)}</span>
            </article>
          </div>
          <p className="reel-hint">
            {lang === 'kn' ? '← ಸ್ಲೈಡ್ ಮಾಡಿ →' : '← slide for more →'}
          </p>
        </section>

        {/* Chapter 4 — Bento photos */}
        <section className="reel-slide reel-photos" id="story-photos">
          <div className="reel-photos-head">
            <div>
              <p className="reel-kicker">{t(copy.ourGallery)}</p>
              <h2 className="reel-big">{t(copy.galleryTitle)}</h2>
            </div>
            <p className="reel-pack-label">{t(photoSets[photoSet].hint)}</p>
          </div>
          <div className="reel-bento">
            <button
              type="button"
              className="reel-bento-hero"
              onClick={() => setLightbox(pack.couple)}
            >
              <img src={pack.couple} alt="" />
            </button>
            {pack.gallery.map((item, i) => (
              <button
                key={`${photoSet}-g-${i}`}
                type="button"
                className={`reel-bento-cell reel-bento-${i + 1}`}
                onClick={() => setLightbox(item.src)}
              >
                <img src={item.src} alt={item.alt} />
              </button>
            ))}
          </div>
        </section>

        {/* Chapter 5 — Couple */}
        <section className="reel-slide reel-us" id="story-us">
          <p className="reel-kicker">{t(copy.theCouple)}</p>
          <div className="reel-pair">
            <article>
              <button type="button" onClick={() => setLightbox(pack.bride)}>
                <img src={pack.bride} alt="" />
              </button>
              <h3 className={lang === 'kn' ? 'kn' : ''}>{t(couple.bride)}</h3>
              <p>{t(family.bride.parents)}</p>
            </article>
            <article>
              <button type="button" onClick={() => setLightbox(pack.groom)}>
                <img src={pack.groom} alt="" />
              </button>
              <h3 className={lang === 'kn' ? 'kn' : ''}>{t(couple.groom)}</h3>
              <p>{t(family.groom.parents)}</p>
            </article>
          </div>
          <p className="reel-hosts">{t(family.hosts)}</p>
        </section>

        {/* Chapter 6 — Guest notes */}
        <section className="reel-slide reel-guests" id="story-guests">
          <p className="reel-kicker">{t(guestInfo.eyebrow)}</p>
          <h2 className="reel-big">{t(guestInfo.title)}</h2>
          <div className="reel-notes">
            {GUEST_NOTES.map((key) => {
              const note = guestInfo[key]
              return (
                <div key={key} className="reel-note">
                  <h3>{t(note.label)}</h3>
                  <p>{t(note.body)}</p>
                  {key === 'stay' ? (
                    <a
                      className="reel-link"
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

        {/* Chapter 7 — RSVP */}
        <section className="reel-slide reel-form-slide" id="story-rsvp">
          <p className="reel-kicker">{t(rsvpCopy.eyebrow)}</p>
          <h2 className="reel-big">{t(rsvpCopy.title)}</h2>
          <p className="reel-support">{t(rsvpCopy.sub)}</p>
          <form className="reel-form" onSubmit={onRsvpSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t(copy.yourName)}
              value={rsvpName}
              onChange={(e) => setRsvpName(e.target.value)}
              required
            />
            <div className="reel-choice" role="group">
              <button
                type="button"
                className={`reel-choice-btn${attendance === 'yes' ? ' is-active' : ''}`}
                onClick={() => setAttendance('yes')}
              >
                {t(rsvpCopy.attending)}
              </button>
              <button
                type="button"
                className={`reel-choice-btn${attendance === 'no' ? ' is-active' : ''}`}
                onClick={() => setAttendance('no')}
              >
                {t(rsvpCopy.notAttending)}
              </button>
            </div>
            {attendance === 'yes' ? (
              <label className="reel-guests-count">
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
            <button type="submit" className="reel-cta solid">
              {t(rsvpCopy.sendRsvp)}
            </button>
          </form>
        </section>

        {/* Chapter 8 — Wishes + share */}
        <section className="reel-slide reel-form-slide" id="story-wishes">
          <p className="reel-kicker">{t(copy.wishesTitle)}</p>
          <h2 className="reel-big">{t(copy.withLove)}</h2>
          <p className="reel-support">{t(copy.wishesSub)}</p>
          <form className="reel-form" onSubmit={onWishSubmit}>
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
              rows={3}
              value={wishMessage}
              onChange={(e) => setWishMessage(e.target.value)}
              required
            />
            <button type="submit" className="reel-cta solid">
              {t(copy.sendWishes)}
            </button>
          </form>
          <div className="reel-share-row">
            <button type="button" className="reel-link" onClick={onShare}>
              {t(shareInvite.shareBtn)}
            </button>
            <button type="button" className="reel-link" onClick={onCopyInvite}>
              {copied ? t(copy.copied) : t(copy.copyInvite)}
            </button>
          </div>
          <p className="reel-closing">{t(copy.closing)}</p>
        </section>
      </div>

      {lightbox ? (
        <div
          className="reel-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="reel-lightbox-close"
            onClick={() => setLightbox(null)}
          >
            {t(copy.close)}
          </button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      ) : null}
    </div>
  )
}
