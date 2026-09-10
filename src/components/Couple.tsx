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

      <figure className="caricature-card">
        <img
          className="caricature-img"
          src="/photos/caricature.png"
          alt={t({
            en: 'Joyful caricature of Sindhu & Suman in wedding attire',
            kn: 'ಸಿಂಧು ಮತ್ತು ಸುಮನ್ ಅವರ ಸಂತೋಷದ ವಿವಾಹ ವೇಷದ ಚಿತ್ರ',
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
