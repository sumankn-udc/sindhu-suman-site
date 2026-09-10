import { copy, rituals } from '../content'
import { useLang } from '../LangContext'

export function Rituals() {
  const { t } = useLang()

  return (
    <section className="section rituals" id="rituals">
      <div className="section-head">
        <p className="eyebrow">✦</p>
        <h2>{t(copy.ritualsTitle)}</h2>
        <p className="section-sub">{t(copy.ritualsSub)}</p>
      </div>
      <ul className="ritual-grid">
        {rituals.map((r, i) => (
          <li key={r.en} className="ritual-item" style={{ animationDelay: `${i * 80}ms` }}>
            <span className="ritual-mark" aria-hidden="true">
              {i + 1}
            </span>
            <span className="ritual-name">{t(r)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
