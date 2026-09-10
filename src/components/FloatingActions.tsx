import { useState } from 'react'
import { venue } from '../content'
import { useLang } from '../LangContext'

export function FloatingActions() {
  const { t } = useLang()
  const [musicOn, setMusicOn] = useState(false)

  return (
    <div className="fab-row">
      <button
        type="button"
        className={`fab ${musicOn ? 'is-on' : ''}`}
        aria-label={t({ en: 'Toggle music', kn: 'ಸಂಗೀತ' })}
        aria-pressed={musicOn}
        onClick={() => setMusicOn((v) => !v)}
        title={t({ en: 'Music', kn: 'ಸಂಗೀತ' })}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"
          />
        </svg>
      </button>
      <a
        className="fab"
        href={venue.mapsUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={t({ en: 'Open venue map', kn: 'ನಕ್ಷೆ ತೆರೆಯಿರಿ' })}
        title={t({ en: 'Location', kn: 'ಸ್ಥಳ' })}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
          />
        </svg>
      </a>
    </div>
  )
}
