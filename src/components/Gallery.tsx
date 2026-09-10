import { copy, placeholders } from '../content'
import { useLang } from '../LangContext'
import { AnimatedPhoto } from './AnimatedPhoto'
import { Divider } from './Divider'

export function Gallery() {
  const { t } = useLang()
  return (
    <section className="section gallery-section">
      <p className="section-eyebrow">{t(copy.ourGallery)}</p>
      <h2 className="section-title">{t(copy.galleryTitle)}</h2>
      <Divider />
      <div className="gallery-grid">
        {placeholders.gallery.map((item) => (
          <div key={item.src} className="polaroid">
            <AnimatedPhoto
              src={item.src}
              alt={item.alt}
              motion={item.motion}
              imgClassName="polaroid-img"
            />
          </div>
        ))}
      </div>
      <p className="gallery-note">{t(copy.galleryNote)}</p>
    </section>
  )
}
