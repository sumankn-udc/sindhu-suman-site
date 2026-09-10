import { copy, couple, venue } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'

export function Cover({
  onOpen,
  showCta = false,
}: {
  onOpen?: () => void
  showCta?: boolean
}) {
  const { t, lang } = useLang()

  return (
    <section className={`cover ${showCta ? 'is-intro' : ''}`}>
      <div
        className="cover-photo"
        style={{ backgroundImage: "url('/photos/couple-cover.jpg')" }}
        role="img"
        aria-label={`${couple.bride.en} and ${couple.groom.en}`}
      />
      <div className="cover-veil" />
      <div className="cover-inner">
        <p className="cover-kicker">{t(copy.together)}</p>
        <h1 className={`cover-name ${lang === 'kn' ? 'kn' : ''}`}>
          {t(couple.bride)}
        </h1>
        <p className="cover-and">{t(copy.and)}</p>
        <h1 className={`cover-name ${lang === 'kn' ? 'kn' : ''}`}>
          {t(couple.groom)}
        </h1>
        <Divider />
        <p className="cover-date">{t(copy.weddingDate)}</p>
        <p className="cover-venue">{t(venue.short)}</p>
        {showCta && onOpen ? (
          <button type="button" className="btn-outline cover-cta" onClick={onOpen}>
            {t(copy.openInvite)}
          </button>
        ) : null}
      </div>
    </section>
  )
}
