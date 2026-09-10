import { copy, couple, family, placeholders } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'

function Portrait({
  src,
  name,
  parents,
}: {
  src: string
  name: string
  parents: string
}) {
  return (
    <figure className="portrait">
      <div className="portrait-frame">
        <img className="portrait-img" src={src} alt={name} loading="lazy" />
      </div>
      <figcaption>
        <p className="portrait-name">{name}</p>
        <p className="portrait-parents">{parents}</p>
      </figcaption>
    </figure>
  )
}

export function Couple() {
  const { t, lang } = useLang()
  return (
    <section className="section couple-section">
      <p className="section-eyebrow">{t(copy.theCouple)}</p>
      <Divider />

      <Portrait
        src={placeholders.bride}
        name={t(couple.bride)}
        parents={t(family.bride.parents)}
      />
      <Portrait
        src={placeholders.groom}
        name={t(couple.groom)}
        parents={t(family.groom.parents)}
      />

      <figure className="portrait portrait-featured">
        <div className="portrait-frame">
          <img
            className="portrait-img"
            src={placeholders.couple}
            alt={`${couple.bride.en} & ${couple.groom.en}`}
            loading="lazy"
          />
        </div>
        <figcaption>
          <p className="portrait-name">
            {t(couple.bride)} & {t(couple.groom)}
          </p>
          <p className="portrait-parents">{t(family.hosts)}</p>
        </figcaption>
      </figure>

      <figure className="caricature-card">
        <img
          className="caricature-img"
          src={placeholders.caricature}
          alt={t({
            en: 'Joyful caricature of Sindhu & Suman',
            kn: 'ಸಿಂಧು ಮತ್ತು ಸುಮನ್ ಅವರ ಸಂತೋಷದ ಚಿತ್ರ',
          })}
          loading="lazy"
        />
        <figcaption className="caricature-caption">
          {t({
            en: 'Animated placeholders for reference',
            kn: 'ಉಲ್ಲೇಖಕ್ಕಾಗಿ ಆನಿಮೇಟೆಡ್ ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್',
          })}
        </figcaption>
      </figure>

      <div className={`celebrate ${lang === 'kn' ? 'kn' : ''}`}>
        <p>{t(copy.celebrateWith)}</p>
        <p className="celebrate-us">{t(copy.us)}</p>
        <Divider />
      </div>
    </section>
  )
}
