import { copy, couple, family, placeholders } from '../content'
import { useLang } from '../LangContext'
import { AnimatedPhoto } from './AnimatedPhoto'
import { Divider } from './Divider'

function Portrait({
  src,
  name,
  parents,
  motion,
}: {
  src: string
  name: string
  parents: string
  motion: 'float' | 'kenburns' | 'kenburns-out'
}) {
  return (
    <figure className="portrait">
      <div className="portrait-frame">
        <AnimatedPhoto
          src={src}
          alt={name}
          motion={motion}
          imgClassName="portrait-img"
        />
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
        motion="float"
      />
      <Portrait
        src={placeholders.groom}
        name={t(couple.groom)}
        parents={t(family.groom.parents)}
        motion="kenburns"
      />

      <figure className="portrait portrait-featured">
        <div className="portrait-frame">
          <AnimatedPhoto
            src={placeholders.couple}
            alt={`${couple.bride.en} & ${couple.groom.en}`}
            motion="kenburns-out"
            imgClassName="portrait-img"
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
            en: 'Same smiles. Same spark.',
            kn: 'ಅದೇ ನಗು. ಅದೇ ಕಾಂತಿ.',
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
