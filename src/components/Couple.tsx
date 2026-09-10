import { copy, couple } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'

export function Couple() {
  const { t, lang } = useLang()
  return (
    <section className="section couple-section">
      <p className="section-eyebrow">{t(copy.theCouple)}</p>
      <Divider />
      <figure className="portrait portrait-featured">
        <div className="portrait-frame">
          <img
            className="portrait-img"
            src="/photos/couple.jpg"
            alt={`${couple.bride.en} & ${couple.groom.en}`}
            loading="lazy"
          />
        </div>
        <figcaption>
          <p className="portrait-name">
            {t(couple.bride)} & {t(couple.groom)}
          </p>
          <p className="portrait-parents">
            {t({
              en: 'With love from both families',
              kn: 'ಎರಡೂ ಕುಟುಂಬಗಳ ಪ್ರೀತಿಯೊಂದಿಗೆ',
            })}
          </p>
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
