import { useCallback, useState } from 'react'
import { copy, shareInvite, siteUrl } from '../content'
import { useLang } from '../LangContext'

/** Canonical invite URL — no trailing slash (avoids OG / share duplication quirks). */
const inviteUrl = siteUrl.replace(/\/$/, '')

/** WhatsApp-style invite: headline, body, single link at the bottom. */
export function buildShareText(lang: 'en' | 'kn') {
  const t = (pair: { en: string; kn: string }) => pair[lang]
  return [t(shareInvite.headline), '', t(shareInvite.body), '', inviteUrl].join(
    '\n',
  )
}

export function ShareInvite() {
  const { t, lang } = useLang()
  const [copied, setCopied] = useState(false)

  const share = useCallback(() => {
    // Open WhatsApp directly with prefilled invite text (no Web Share API —
    // some apps prepend `url` and duplicate the link at the top).
    const text = buildShareText(lang)
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }, [lang])

  const copyInvite = useCallback(async () => {
    const text = buildShareText(lang)
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt(t(copy.copyInvite), text)
    }
  }, [lang, t])
  return (
    <section className="section share-section" id="share">
      <p className="section-eyebrow">{t(shareInvite.eyebrow)}</p>
      <h2 className="share-title">{t(shareInvite.title)}</h2>
      <p className="share-sub">{t(shareInvite.sub)}</p>

      <div className="share-preview" aria-hidden="true">
        <img src="/og-share.jpg" alt="" className="share-preview-img" />
        <div className="share-preview-meta">
          <p className="share-preview-domain">thesianchronicles.blog</p>
          <p className="share-preview-headline">{t(shareInvite.ogTitle)}</p>
          <p className="share-preview-desc">{t(shareInvite.ogDescription)}</p>
        </div>
      </div>

      <div className="share-actions">
        <button type="button" className="btn-outline share-primary" onClick={share}>
          {t(shareInvite.shareBtn)}
        </button>
        <button type="button" className="btn-ghost" onClick={copyInvite}>
          {copied ? t(copy.copied) : t(copy.copyInvite)}
        </button>
      </div>
    </section>
  )
}
