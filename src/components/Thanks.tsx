import { copy, couple, rsvpWhatsApp } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'
import { Reveal } from './Reveal'

export function Thanks() {
  const { t, lang } = useLang()

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
        <a
          className="btn-outline thanks-cta"
          href={memoryHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(copy.shareMemory)}
        </a>
        <p className="thanks-hint">{t(copy.shareMemoryHint)}</p>
      </Reveal>
    </section>
  )
}
