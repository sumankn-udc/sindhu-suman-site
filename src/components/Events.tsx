import { copy, events, venue } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'

export function Events() {
  const { t } = useLang()
  return (
    <section className="section events-section" id="events">
      <p className="section-eyebrow">{t(copy.events)}</p>
      <Divider />
      <div className="event-stack">
        {events.map((event) => (
          <article key={event.id} className="event-card">
            <h3>{t(event.title)}</h3>
            <p className="event-when">{t(event.when)}</p>
            <p className="event-place">{t(venue.short)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
