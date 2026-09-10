import { copy, placeholders } from '../content'
import { useLang } from '../LangContext'
import { AnimatedPhoto } from './AnimatedPhoto'
import { Divider } from './Divider'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

export function Gallery() {
  const { t } = useLang()
  return (
    <section className="section gallery-section">
      <Reveal variant="fade-up">
        <p className="section-eyebrow">{t(copy.ourGallery)}</p>
        <h2 className="section-title">{t(copy.galleryTitle)}</h2>
        <Divider />
      </Reveal>
      <RevealGroup className="gallery-grid" stagger={100}>
        {placeholders.gallery.map((item, i) => (
          <RevealItem key={item.src} variant="pop" index={i}>
            <div className="polaroid">
              <AnimatedPhoto
                src={item.src}
                alt={item.alt}
                motion={item.motion}
                imgClassName="polaroid-img"
              />
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
      <Reveal variant="fade" delay={200}>
        <p className="gallery-note">{t(copy.galleryNote)}</p>
      </Reveal>
    </section>
  )
}
