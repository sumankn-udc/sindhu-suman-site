import { useLang } from '../LangContext'

const links = [
  { href: '#events', en: 'Events', kn: 'ಸಂಭ್ರಮ' },
  { href: '#vows', en: 'Vows', kn: 'ಸಪ್ತಪದಿ' },
  { href: '#venue', en: 'Venue', kn: 'ಸ್ಥಳ' },
  { href: '#rsvp', en: 'RSVP', kn: 'RSVP' },
]

export function TopBar() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="topbar">
      <nav className="topnav" aria-label="Primary">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {t(l)}
          </a>
        ))}
      </nav>
      <div className="lang-toggle" role="group" aria-label="Language">
        <button
          type="button"
          className={lang === 'en' ? 'active' : ''}
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={lang === 'kn' ? 'active' : ''}
          onClick={() => setLang('kn')}
        >
          ಕನ್ನಡ
        </button>
      </div>
    </div>
  )
}
