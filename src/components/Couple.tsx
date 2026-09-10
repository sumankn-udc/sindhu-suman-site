import { copy, couple, family, placeholders } from '../content'
import { useLang } from '../LangContext'
import { AnimatedPhoto } from './AnimatedPhoto'
import { Divider } from './Divider'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

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
    <section className="section couple-section" id="couple">
      <Reveal variant="fade-up" className="couple-heading">
        <p className="section-eyebrow">{t(copy.theCouple)}</p>
        <Divider />
      </Reveal>

      <RevealGroup className="couple-portraits" stagger={140}>
        <RevealItem variant="pop" index={0}>
          <Portrait
            src={placeholders.bride}
            name={t(couple.bride)}
            parents={t(family.bride.parents)}
            motion="float"
          />
        </RevealItem>
        <RevealItem variant="pop" index={1}>
          <Portrait
            src={placeholders.groom}
            name={t(couple.groom)}
            parents={t(family.groom.parents)}
            motion="kenburns"
          />
        </RevealItem>
        <RevealItem variant="pop" index={2}>
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
        </RevealItem>
        <RevealItem variant="pop" index={3}>
          <figure className="caricature-card">
            <img
              className="caricature-img"
              src={placeholders.caricature}
              alt={t({
                en: 'Anime wedding portrait of Sindhu & Suman',
                kn: 'ಸಿಂಧು ಮತ್ತು ಸುಮನ್ ಅವರ ಅನಿಮೆ ವಿವಾಹ ಚಿತ್ರ',
              })}
              loading="lazy"
            />
            <figcaption className="caricature-caption">
              {t({
                en: 'Drawn with love — same spark.',
                kn: 'ಪ್ರೀತಿಯಿಂದ ಚಿತ್ರಿಸಿದ್ದು — ಅದೇ ಕಾಂತಿ.',
              })}
            </figcaption>
          </figure>
        </RevealItem>
      </RevealGroup>

      <Reveal variant="fade-up" delay={80} className={`celebrate ${lang === 'kn' ? 'kn' : ''}`}>
        <p>{t(copy.celebrateWith)}</p>
        <p className="celebrate-us">{t(copy.us)}</p>
        <Divider />
      </Reveal>
    </section>
  )
}
