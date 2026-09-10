import { copy, couple } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'

const frames = [
  { src: '/photos/couple-square.jpg', alt: 'Sindhu & Suman' },
  { src: '/photos/couple.jpg', alt: 'Sindhu & Suman portrait' },
  { src: '/photos/couple-cover.jpg', alt: 'Sindhu & Suman outdoors' },
  { src: '/photos/couple-square.jpg', alt: 'Together' },
]

export function Gallery() {
  const { t } = useLang()
  return (
    <section className="section gallery-section">
      <p className="section-eyebrow">{t(copy.ourGallery)}</p>
      <h2 className="section-title">{t(copy.galleryTitle)}</h2>
      <Divider />
      <div className="gallery-grid">
        {frames.map((frame, i) => (
          <div key={`${frame.src}-${i}`} className="polaroid">
            <img
              className="polaroid-img"
              src={frame.src}
              alt={frame.alt || `${couple.bride.en} & ${couple.groom.en}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
