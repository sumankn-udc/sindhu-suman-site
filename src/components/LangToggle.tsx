import { useLang } from '../LangContext'

export function LangToggle() {
  const { lang, setLang } = useLang()
  return (
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
  )
}
