import { copy, events, venue } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

export function Events() {
  const { t } = useLang()
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
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
