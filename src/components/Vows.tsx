import { useEffect, useRef, useState } from 'react'
import { copy, vows } from '../content'
import { useLang } from '../LangContext'
import { Footprints } from './Motifs'

export function Vows() {
  const { t } = useLang()
  const ref = useRef<HTMLOListElement>(null)
  const [visible, setVisible] = useState<boolean[]>(() =>
    vows.map(() => false),
  )

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = Array.from(root.querySelectorAll<HTMLElement>('.vow-item'))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const idx = Number((entry.target as HTMLElement).dataset.index)
          setVisible((prev) => {
            if (prev[idx]) return prev
            const next = [...prev]
            next[idx] = true
            return next
          })
        })
      },
      { threshold: 0.35 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section vows" id="vows">
      <div className="section-head">
        <p className="eyebrow">॥ ಸಪ್ತಪದಿ ॥</p>
        <h2>{t(copy.vowsTitle)}</h2>
        <p className="section-sub">{t(copy.vowsSub)}</p>
      </div>
      <ol className="vow-list" ref={ref}>
        {vows.map((vow, i) => (
          <li
            key={vow.en}
            data-index={i}
            className={`vow-item ${visible[i] ? 'is-visible' : ''}`}
          >
            <div className="vow-step">
              <Footprints className="vow-prints" />
              <span className="vow-num">{i + 1}</span>
            </div>
            <p className="vow-text">{t(vow)}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
