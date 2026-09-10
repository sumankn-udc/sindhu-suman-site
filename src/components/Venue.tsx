import { copy, venue } from '../content'
import { useLang } from '../LangContext'

export function Venue() {
  const { t } = useLang()

  return (
    <section className="section venue" id="venue">
      <div className="section-head">
        <p className="eyebrow">❋</p>
        <h2>{t(copy.venueTitle)}</h2>
        <p className="section-sub">{t(copy.venueSub)}</p>
      </div>
      <div className="venue-panel">
        <h3>{t(venue.name)}</h3>
        <p className="venue-address">{t(venue.address)}</p>
        <a
          className="btn btn-primary"
          href={venue.mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t(copy.directions)}
        </a>
        <div className="map-embed">
          <iframe
            title="Venue map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Sri%20Kanaka%20Convention%20Hall%20Ganagalu%20Road%20Hoskote&t=&z=14&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </section>
  )
}
