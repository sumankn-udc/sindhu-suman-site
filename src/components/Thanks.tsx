import { copy, couple, photoAlbum, rsvpWhatsApp } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'
import { Reveal } from './Reveal'

export function Thanks() {
  const { t, lang } = useLang()
  const hasAlbum = Boolean(photoAlbum.url.trim())

  const memoryHref = (() => {
    const text =
      lang === 'kn'
        ? `ಶುಭಾಶಯ / ನೆನಪು — ${t(couple.bride)} & ${t(couple.groom)}\n\n`
        : `A memory / wish for ${couple.bride.en} & ${couple.groom.en}\n\n`
    return `https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(text)}`
  })()

  return (
    <section className="section thanks-section" id="thanks">
      <Reveal variant="fade-up">
        <p className="section-eyebrow">{t(copy.thanksEyebrow)}</p>
        <h2 className="thanks-title">{t(copy.thanksTitle)}</h2>
        <Divider />
        <p className="thanks-body">{t(copy.thanksBody)}</p>
        <div className="thanks-actions">
          <a className="btn-outline thanks-cta" href="#gallery">
            {t(copy.browseMoments)}
          </a>
          {hasAlbum ? (
            <a
              className="btn-outline thanks-cta"
              href={photoAlbum.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(photoAlbum.label)}
            </a>
          ) : null}
          <a
            className="btn-outline thanks-cta"
            href={memoryHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(copy.shareMemory)}
          </a>
        </div>
        <p className="thanks-hint">
          {hasAlbum ? t(photoAlbum.hint) : t(copy.shareMemoryHint)}
        </p>
      </Reveal>
    </section>
  )
}
