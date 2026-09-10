import { useEffect, useState, type RefObject } from 'react'
import { rsvpCopy } from '../content'
import { useLang } from '../LangContext'

export function ScrollTop({
  scrollerRef,
}: {
  scrollerRef: RefObject<HTMLElement | null>
}) {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const onScroll = () => setVisible(el.scrollTop > 420)
    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [scrollerRef])

  if (!visible) return null

  return (
    <button
      type="button"
      className="scroll-top"
      aria-label={t(rsvpCopy.scrollTop)}
      onClick={() => {
        scrollerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      ↑
    </button>
  )
}
