import { useEffect, useState } from 'react'
import { copy, couple } from '../content'
import { useLang } from '../LangContext'

type LoadingScreenProps = {
  onDone: () => void
  durationMs?: number
}

export function LoadingScreen({
  onDone,
  durationMs = 2800,
}: LoadingScreenProps) {
  const { t, lang } = useLang()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs)
      // Ease-out so the bar feels premium
      const eased = 1 - (1 - p) ** 2.4
      setProgress(eased)
      if (p < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        onDone()
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [durationMs, onDone])

  return (
    <section className="loading-screen" aria-busy="true" aria-live="polite">
      <img
        className="loading-logo"
        src="/ss-logo.png"
        alt=""
        aria-hidden="true"
        width={88}
        height={88}
        decoding="async"
      />
      <p className="loading-label">{t(copy.weddingLabel)}</p>
      <h1 className={`loading-name ${lang === 'kn' ? 'kn' : ''}`}>
        {t(couple.bride)}
      </h1>
      <p className="loading-amp">{t(copy.amp)}</p>
      <h1 className={`loading-name ${lang === 'kn' ? 'kn' : ''}`}>
        {t(couple.groom)}
      </h1>
      <p className="loading-status">{t(copy.loadingInvitation)}</p>
      <div
        className="loading-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
        aria-label={t(copy.loadingInvitation)}
      >
        <span className="loading-bar" style={{ width: `${progress * 100}%` }} />
      </div>
    </section>
  )
}
