import { copy, couple, placeholders, venue } from '../content'
import { useLang } from '../LangContext'
import { AnimatedPhoto } from './AnimatedPhoto'
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
      <AnimatedPhoto
        src={placeholders.cover}
        alt=""
        motion="kenburns"
        className="cover-photo cover-photo-anim"
        imgClassName="cover-photo-img"
      />
      <div className="cover-veil" />
      <div className="cover-inner">
        <img
          className="cover-logo"
          src="/ss-logo.png"
          alt=""
          width={64}
          height={64}
          decoding="async"
        />
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
