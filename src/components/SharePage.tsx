import { useLang } from '../LangContext'
import { LangToggle } from './LangToggle'
import { ShareInvite } from './ShareInvite'

/** Dedicated /share page — hosts open this to share the invite on WhatsApp. */
export function SharePage() {
  const { t } = useLang()

  return (
    <div className="stage">
      <div className="phone">
        <div className="phone-top">
          <LangToggle />
        </div>
        <main className="invite-scroll share-page">
          <a className="share-page-back" href="/">
            ← {t({ en: 'Back to invite', kn: 'ಆಮಂತ್ರಣಕ್ಕೆ ಹಿಂದಿರುಗಿ' })}
          </a>
          <ShareInvite />
          <p className="share-page-note">
            {t({
              en: 'Share this from here — guests still open the main invite link.',
              kn: 'ಇಲ್ಲಿಂದ ಹಂಚಿ — ಅತಿಥಿಗಳು ಮುಖ್ಯ ಆಮಂತ್ರಣ ಲಿಂಕ್ ತೆರೆಯುತ್ತಾರೆ.',
            })}
          </p>
        </main>
      </div>
    </div>
  )
}
