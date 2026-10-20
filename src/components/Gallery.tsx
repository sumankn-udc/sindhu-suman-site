import { albums, copy } from '../content'
import { useLang } from '../LangContext'
import { AnimatedPhoto } from './AnimatedPhoto'
import { Divider } from './Divider'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

export function Gallery() {
  const { t } = useLang()
  return (
    <section className="section gallery-section" id="gallery">
      <Reveal variant="fade-up">
        <p className="section-eyebrow">{t(copy.ourGallery)}</p>
        <h2 className="section-title">{t(copy.galleryTitle)}</h2>
        <Divider />
      </Reveal>

      {albums.map((album) => (
        <div key={album.id} className="album-block" id={`album-${album.id}`}>
          <Reveal variant="fade-up">
            <h3 className="album-title">{t(album.title)}</h3>
            <p className="album-note">{t(album.note)}</p>
          </Reveal>
          <RevealGroup className="gallery-grid" stagger={100}>
            {album.photos.map((item, i) => (
              <RevealItem
                key={`${album.id}-${item.src}`}
                variant={i % 2 === 0 ? 'zoom' : 'pop'}
                index={i}
              >
                <figure className="polaroid">
                  <AnimatedPhoto
                    src={item.src}
                    alt={item.alt}
                    motion={item.motion}
                    imgClassName="polaroid-img"
                  />
                  <figcaption className="polaroid-caption">
                    {t(item.caption)}
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      ))}

      <Reveal variant="fade" delay={200}>
        <p className="gallery-note">{t(copy.galleryNote)}</p>
      </Reveal>
    </section>
  )
}
