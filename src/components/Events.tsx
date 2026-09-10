import { copy, events } from '../content'
import { useLang } from '../LangContext'

const icons: Record<string, string> = {
  haldi: '✦',
  reception: '❋',
  muhurtham: '✧',
}

export function Events() {
  const { t } = useLang()

  return (
    <section className="section events" id="events">
      <div className="section-head">
        <p className="eyebrow">ॐ</p>
        <h2>{t(copy.eventsTitle)}</h2>
        <p className="section-sub">{t(copy.eventsSub)}</p>
      </div>
      <ol className="event-list">
        {events.map((event, i) => (
          <li
            key={event.id}
            className={`event-item reveal`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="event-icon" aria-hidden="true">
              {icons[event.id]}
            </div>
            <div className="event-body">
              <h3>{t(event.title)}</h3>
              <p className="event-meta">
                <span>{t(event.date)}</span>
                <span className="dot" aria-hidden="true">
                  ·
                </span>
                <span>{t(event.time)}</span>
              </p>
              <p className="event-desc">{t(event.desc)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
