import { copy, couple, rsvpWhatsApp } from '../content'
import { useLang } from '../LangContext'

export function Rsvp() {
  const { t, lang } = useLang()
  const message =
    lang === 'kn'
      ? `ನಮಸ್ಕಾರ, ನಾನು ${t(couple.bride)} & ${t(couple.groom)} ಅವರ ವಿವಾಹಕ್ಕೆ RSVP ಮಾಡುತ್ತಿದ್ದೇನೆ.`
      : `Hello! I'd like to RSVP for ${couple.bride.en} & ${couple.groom.en}'s wedding.`

  const href = `https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(message)}`

  return (
    <section className="section rsvp" id="rsvp">
      <div className="section-head">
        <p className="eyebrow">♡</p>
        <h2>{t(copy.rsvpTitle)}</h2>
        <p className="section-sub">{t(copy.rsvpSub)}</p>
      </div>
      <a className="btn btn-primary btn-lg" href={href} target="_blank" rel="noreferrer">
        {t(copy.rsvpCta)}
      </a>
    </section>
  )
}
