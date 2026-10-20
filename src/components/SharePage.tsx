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
            ← {t({ en: 'Back to our story', kn: 'ನಮ್ಮ ಕಥೆಗೆ ಹಿಂದಿರುಗಿ' })}
          </a>
          <ShareInvite />
          <p className="share-page-note">
            {t({
              en: 'Share from here — guests open our thank-you story, albums, and memories.',
              kn: 'ಇಲ್ಲಿಂದ ಹಂಚಿ — ಅತಿಥಿಗಳು ನಮ್ಮ ಧನ್ಯವಾದ ಕಥೆ, ಆಲ್ಬಂಗಳು ಮತ್ತು ನೆನಪುಗಳನ್ನು ತೆರೆಯುತ್ತಾರೆ.',
            })}
          </p>
        </main>
      </div>
    </div>
  )
}
