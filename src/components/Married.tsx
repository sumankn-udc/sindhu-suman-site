import { copy } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'
import { Reveal } from './Reveal'

/** Replaces the pre-wedding countdown with a married milestone badge. */
export function Married() {
  const { t, lang } = useLang()
  return (
    <section className="section married-section" id="married">
      <div className="sparkles" aria-hidden="true" />
      <Reveal variant="fade-up">
        <p className="section-eyebrow">{t(copy.marriedEyebrow)}</p>
        <Divider />
        <p className={`married-badge ${lang === 'kn' ? 'kn' : ''}`}>
          {t(copy.marriedBadge)}
        </p>
        <p className="married-sub">{t(copy.marriedSub)}</p>
      </Reveal>
    </section>
  )
}
