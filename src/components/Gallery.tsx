import { copy } from '../content'
import { useLang } from '../LangContext'
import { Divider } from './Divider'

const frames = ['S & S', '♡', '17·10', '18·10']

export function Gallery() {
  const { t } = useLang()
  return (
    <section className="section gallery-section">
      <p className="section-eyebrow">{t(copy.ourGallery)}</p>
      <h2 className="section-title">{t(copy.galleryTitle)}</h2>
      <Divider />
      <div className="gallery-grid">
        {frames.map((label) => (
          <div key={label} className="polaroid">
            <div className="polaroid-photo" aria-hidden="true">
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="gallery-note">
        {t({
          en: 'Add your photos here before sharing',
          kn: 'ಹಂಚುವ ಮೊದಲು ನಿಮ್ಮ ಫೋಟೋಗಳನ್ನು ಸೇರಿಸಿ',
        })}
      </p>
    </section>
  )
}
