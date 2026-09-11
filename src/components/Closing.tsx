import { copy } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'
import { Reveal } from './Reveal'

export function Closing() {
  const { t } = useLang()
  return (
    <Reveal as="section" variant="fade-up" className="section closing-section" id="closing">
      <p className="section-eyebrow">{t(copy.withLove)}</p>
      <Divider />
      <p className="closing-text">{t(copy.closing)}</p>
      <a className="future-link" href="/future">
        <span className="future-link-hint">{t(copy.futureInviteHint)}</span>
        <span className="future-link-main">{t(copy.futureInvite)}</span>
      </a>
    </Reveal>
  )
}
