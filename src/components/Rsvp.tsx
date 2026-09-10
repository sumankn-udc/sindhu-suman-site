import { useState, type FormEvent } from 'react'
import { couple, rsvpCopy, rsvpWhatsApp } from '../content'
import { useLang } from '../LangContext'
import { Reveal } from './Reveal'

type Attendance = 'yes' | 'no'

export function Rsvp() {
  const { t, lang } = useLang()
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState<Attendance>('yes')
  const [guests, setGuests] = useState(1)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const status =
      attendance === 'yes'
        ? lang === 'kn'
          ? 'ಹಾಜರಿ: ಹೌದು'
          : 'Attending: Yes'
        : lang === 'kn'
          ? 'ಹಾಜರಿ: ಬರಲಾಗುವುದಿಲ್ಲ'
          : 'Attending: No'

    const guestLine =
      attendance === 'yes'
        ? lang === 'kn'
          ? `ಅತಿಥಿಗಳು: ${guests}`
          : `Guests: ${guests}`
        : null

    const text = [
      lang === 'kn' ? 'RSVP — ವಿವಾಹ' : 'Wedding RSVP',
      `${lang === 'kn' ? 'ಹೆಸರು' : 'Name'}: ${name || 'Guest'}`,
      status,
      guestLine,
      '',
      `(${couple.bride.en} & ${couple.groom.en})`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `https://wa.me/${rsvpWhatsApp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <Reveal as="section" variant="fade-up" className="section rsvp-section" id="rsvp">
      <p className="section-eyebrow">{t(rsvpCopy.eyebrow)}</p>
      <h2 className="rsvp-title">{t(rsvpCopy.title)}</h2>
      <p className="rsvp-sub">{t(rsvpCopy.sub)}</p>

      <form className="rsvp-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder={t({ en: 'Your Name', kn: 'ನಿಮ್ಮ ಹೆಸರು' })}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="rsvp-choice" role="group" aria-label={t(rsvpCopy.title)}>
          <button
            type="button"
            className={`rsvp-chip${attendance === 'yes' ? ' is-active' : ''}`}
            onClick={() => setAttendance('yes')}
          >
            {t(rsvpCopy.attending)}
          </button>
          <button
            type="button"
            className={`rsvp-chip${attendance === 'no' ? ' is-active' : ''}`}
            onClick={() => setAttendance('no')}
          >
            {t(rsvpCopy.notAttending)}
          </button>
        </div>

        {attendance === 'yes' ? (
          <label className="rsvp-guests">
            <span>{t(rsvpCopy.guests)}</span>
            <input
              type="number"
              min={1}
              max={20}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value) || 1)}
              required
            />
          </label>
        ) : null}

        <button type="submit" className="btn-outline">
          {t(rsvpCopy.sendRsvp)}
        </button>
      </form>
    </Reveal>
  )
}
