import { useCallback, useState } from 'react'
import { LangProvider } from './LangContext'
import { AnimatedFavicon } from './components/AnimatedFavicon'
import { LoadingScreen } from './components/LoadingScreen'
import { Cover } from './components/Cover'
import { Couple } from './components/Couple'
import { Gallery } from './components/Gallery'
import { Countdown } from './components/Countdown'
import { Events } from './components/Events'
import { Wishes } from './components/Wishes'
import { ShareInvite } from './components/ShareInvite'
import { Closing } from './components/Closing'
import { FloatingActions } from './components/FloatingActions'
import { LangToggle } from './components/LangToggle'
import './App.css'

type Phase = 'loading' | 'cover' | 'opened'

function Invite() {
  const [phase, setPhase] = useState<Phase>('loading')
  const [musicOn, setMusicOn] = useState(false)
  const finishLoading = useCallback(() => setPhase('cover'), [])
  const toggleMusic = useCallback(() => setMusicOn((v) => !v), [])

  const openInvite = useCallback(() => {
    // User gesture: mount YouTube embed with autoplay so music starts unmuted.
    setMusicOn(true)
    setPhase('opened')
  }, [])

  return (
    <div className="stage">
      <div className="phone">
        {phase !== 'loading' ? (
          <div className="phone-top">
            <LangToggle />
          </div>
        ) : null}

        {phase === 'loading' ? (
          <LoadingScreen onDone={finishLoading} />
        ) : phase === 'cover' ? (
          <Cover showCta onOpen={openInvite} />
        ) : (
          <main className="invite-scroll">
            <Cover />
            <Couple />
            <Gallery />
            <Countdown />
            <Events />
            <Wishes />
            <ShareInvite />
            <Closing />
          </main>
        )}

        {phase !== 'loading' ? (
          <FloatingActions musicOn={musicOn} onToggleMusic={toggleMusic} />
        ) : null}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <AnimatedFavicon />
      <Invite />
    </LangProvider>
  )
}
