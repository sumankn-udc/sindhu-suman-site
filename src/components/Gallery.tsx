import { copy, couple, placeholders } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'

export function Gallery() {
  const { t } = useLang()
  return (
    <section className="section gallery-section">
      <p className="section-eyebrow">{t(copy.ourGallery)}</p>
      <h2 className="section-title">{t(copy.galleryTitle)}</h2>
      <Divider />
      <div className="gallery-grid">
        {placeholders.gallery.map((src, i) => (
          <div key={src} className="polaroid">
            <img
              className="polaroid-img"
              src={src}
              alt={`${couple.bride.en} & ${couple.groom.en} placeholder ${i + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <p className="gallery-note">{t(copy.galleryNote)}</p>
    </section>
  )
}
