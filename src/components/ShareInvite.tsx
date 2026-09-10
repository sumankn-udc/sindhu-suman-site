import { useCallback, useState } from 'react'
import { copy, couple, shareInvite, siteUrl } from '../content'
import { useLang } from '../LangContext'

function buildShareText(lang: 'en' | 'kn') {
  const t = (pair: { en: string; kn: string }) => pair[lang]
  return [
    t(shareInvite.headline),
    '',
    t(shareInvite.body),
    '',
    siteUrl,
  ].join('\n')
}

export function ShareInvite() {
  const { t, lang } = useLang()
  const [copied, setCopied] = useState(false)

  const share = useCallback(async () => {
    const text = buildShareText(lang)
    const title = `${couple.bride.en} & ${couple.groom.en}`

    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, text, url: siteUrl })
        return
      } catch (err) {
        // User cancelled or share failed — fall through to WhatsApp / copy
        if (err instanceof DOMException && err.name === 'AbortError') return
      }
    }

    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }, [lang])

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(siteUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt(t(copy.copyLink), siteUrl)
    }
  }, [t])

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
        <button type="button" className="btn-ghost" onClick={copyLink}>
          {copied ? t(copy.copied) : t(copy.copyLink)}
        </button>
      </div>
    </section>
  )
}
