import { guestInfo, rsvpWhatsApp } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

const NOTES = ['dress', 'travel', 'stay', 'gift'] as const

export function GuestInfo() {
  const { t } = useLang()
  return (
    <section className="section guest-section" id="guest-info">
      <Reveal variant="fade-up">
        <p className="section-eyebrow">{t(guestInfo.eyebrow)}</p>
        <h2 className="section-title guest-title">{t(guestInfo.title)}</h2>
        <Divider />
      </Reveal>

      <RevealGroup className="guest-notes" stagger={100}>
        {NOTES.map((key, i) => {
          const note = guestInfo[key]
          const stayCta = key === 'stay' ? guestInfo.stay : null
          return (
            <RevealItem key={key} variant="fade-up" index={i} className="guest-note">
              <h3>{t(note.label)}</h3>
              <p>{t(note.body)}</p>
              {stayCta ? (
                <a
                  className="guest-stay-cta"
                  href={`https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(t(stayCta.message))}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t(stayCta.cta)}
                </a>
              ) : null}
            </RevealItem>
          )
        })}
      </RevealGroup>
    </section>
  )
}
