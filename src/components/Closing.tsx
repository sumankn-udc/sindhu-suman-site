import { copy } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'

export function Closing() {
  const { t } = useLang()
  return (
    <section className="section closing-section">
      <p className="section-eyebrow">{t(copy.withLove)}</p>
      <Divider />
      <p className="closing-text">{t(copy.closing)}</p>
    </section>
  )
}
