import { copy, events, rsvpCopy, venue } from '../content'
import { useLang } from '../LangContext'
import { downloadEventIcs } from '../lib/calendar'
import { Divider } from './Divider'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

export function Events() {
  const { t, lang } = useLang()
  return (
    <section className="section events-section" id="events">
      <Reveal variant="fade-up">
        <p className="section-eyebrow">{t(copy.events)}</p>
        <Divider />
      </Reveal>
      <RevealGroup className="event-stack" stagger={110}>
        {events.map((event, i) => (
          <RevealItem
            key={event.id}
            variant={i % 2 === 0 ? 'slide-left' : 'slide-right'}
            index={i}
            as="article"
            className="event-card"
          >
            <h3>{t(event.title)}</h3>
            <p className="event-when">{t(event.when)}</p>
            <p className="event-place">{t(venue.short)}</p>
            <div className="event-actions">
              <button
                type="button"
                className="event-action"
                onClick={() => downloadEventIcs(event, lang)}
              >
                {t(rsvpCopy.addCalendar)}
              </button>
              <a
                className="event-action"
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(rsvpCopy.getDirections)}
              </a>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
