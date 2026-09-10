import { copy, couple } from '../content'
import { useLang } from '../LangContext'
import { Toran } from './Motifs'

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="site-footer">
      <Toran className="footer-toran" />
      <p className="footer-blessing">{t(copy.footerBlessing)}</p>
      <p className="footer-names">
        {t(couple.bride)} {t(copy.weds)} {t(couple.groom)}
      </p>
      <p className="footer-from">
        {t(copy.from)} · {t(copy.families)}
      </p>
      <div className="footer-band" aria-hidden="true" />
    </footer>
  )
}
