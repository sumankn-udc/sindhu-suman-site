import { copy, couple } from '../content'
import { useLang } from '../LangContext'
import {
  BananaLeafAccent,
  GaneshaMark,
  HangingDiyas,
  Kolam,
  Toran,
} from './Motifs'
import { Countdown } from './Countdown'

export function Hero() {
  const { t, lang } = useLang()

  return (
    <header className="hero" id="top">
      <div className="hero-frame">
        <Toran className="toran" />
        <div className="hero-diyas hero-diyas-left">
          <HangingDiyas />
        </div>
        <div className="hero-diyas hero-diyas-right">
          <HangingDiyas />
        </div>
        <BananaLeafAccent side="left" className="leaf leaf-left" />
        <BananaLeafAccent side="right" className="leaf leaf-right" />

        <div className="hero-inner">
          <GaneshaMark className="ganesha" />
          <p className="hero-invite">{t(copy.invitation)}</p>
          <Kolam className="kolam" />
          <h1 className={`hero-names ${lang === 'kn' ? 'kn' : ''}`}>
            <span className="bride">{t(couple.bride)}</span>
            <span className="amp">{t(copy.weds)}</span>
            <span className="groom">{t(couple.groom)}</span>
          </h1>
          <p className="hero-tagline">{t(copy.tagline)}</p>
          <p className="hero-place">Hoskote · Bengaluru</p>
          <p className="hero-dates">17 – 18 October 2026</p>
          <Countdown />
          <a className="scroll-cue" href="#events">
            {t(copy.scroll)}
            <span className="scroll-arrow" aria-hidden="true" />
          </a>
        </div>
        <div className="hero-band" aria-hidden="true" />
      </div>
    </header>
  )
}
