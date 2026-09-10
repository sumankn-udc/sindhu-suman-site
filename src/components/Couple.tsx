import { copy, couple } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'

function Portrait({
  monogram,
  name,
  parents,
}: {
  monogram: string
  name: string
  parents: string
}) {
  return (
    <figure className="portrait">
      <div className="portrait-frame">
        <div className="portrait-photo" aria-hidden="true">
          <span>{monogram}</span>
        </div>
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
        monogram="S"
        name={t(couple.bride)}
        parents={t(copy.brideParents)}
      />
      <Portrait
        monogram="S"
        name={t(couple.groom)}
        parents={t(copy.groomParents)}
      />
      <div className={`celebrate ${lang === 'kn' ? 'kn' : ''}`}>
        <p>{t(copy.celebrateWith)}</p>
        <p className="celebrate-us">{t(copy.us)}</p>
        <Divider />
      </div>
    </section>
  )
}
