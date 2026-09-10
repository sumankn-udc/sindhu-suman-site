import { useState, type FormEvent } from 'react'
import { copy, couple, rsvpWhatsApp } from '../content'
import { useLang } from '../LangContext'
import { Reveal } from './Reveal'

export function Wishes() {
  const { t, lang } = useLang()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const text =
      lang === 'kn'
        ? `ಶುಭಾಶಯ — ${name || 'Guest'}\n${message}\n\n(${t(couple.bride)} & ${t(couple.groom)} ವಿವಾಹ)`
        : `Wedding wishes from ${name || 'Guest'}\n${message}\n\n(${couple.bride.en} & ${couple.groom.en})`
    window.open(
      `https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <Reveal as="section" variant="fade-up" className="section wishes-section" id="wishes">
      <h2 className="wishes-title">{t(copy.wishesTitle)}</h2>
      <p className="wishes-sub">{t(copy.wishesSub)}</p>
      <form className="wishes-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder={t(copy.yourName)}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder={t(copy.yourMessage)}
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="btn-outline">
          {t(copy.sendWishes)}
        </button>
      </form>
    </Reveal>
  )
}
