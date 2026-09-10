import { useEffect, useId, useState } from 'react'
import { copy, events, venue } from '../content'
import { useLang } from '../LangContext'

function PinIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
      />
    </svg>
  )
}

export function FloatingActions() {
  const { t } = useLang()
  const [musicOn, setMusicOn] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)
  const titleId = useId()

  useEffect(() => {
    if (!locationOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLocationOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [locationOpen])

  return (
    <>
      <div className="fab-row">
        <button
          type="button"
          className={`fab ${musicOn ? 'is-on' : ''}`}
          aria-label={t({ en: 'Toggle music', kn: 'ಸಂಗೀತ' })}
          aria-pressed={musicOn}
          onClick={() => setMusicOn((v) => !v)}
          title={t(copy.music)}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"
            />
          </svg>
        </button>
        <button
          type="button"
          className="fab"
          aria-label={t(copy.selectLocation)}
          aria-haspopup="dialog"
          aria-expanded={locationOpen}
          onClick={() => setLocationOpen(true)}
          title={t(copy.location)}
        >
          <PinIcon />
        </button>
      </div>

      {locationOpen ? (
        <div
          className="location-overlay"
          role="presentation"
          onClick={() => setLocationOpen(false)}
        >
          <div
            className="location-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="location-modal-head">
              <h2 id={titleId}>{t(copy.selectLocation)}</h2>
              <button
                type="button"
                className="location-close"
                aria-label={t(copy.close)}
                onClick={() => setLocationOpen(false)}
              >
                ×
              </button>
            </div>
            <ul className="location-list">
              {events.map((event) => (
                <li key={event.id}>
                  <a
                    className="location-item"
                    href={venue.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setLocationOpen(false)}
                  >
                    <span className="location-item-icon">
                      <PinIcon />
                    </span>
                    <span className="location-item-text">
                      <span className="location-item-title">{t(event.title)}</span>
                      <span className="location-item-when">{t(event.when)}</span>
                      <span className="location-item-place">{t(venue.short)}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  )
}
