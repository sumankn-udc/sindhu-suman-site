import { useCallback, useRef, useState } from 'react'
import { LangProvider } from './LangContext'
import { AnimatedFavicon } from './components/AnimatedFavicon'
import { LoadingScreen } from './components/LoadingScreen'
import { Cover } from './components/Cover'
import { Couple } from './components/Couple'
import { Gallery } from './components/Gallery'
import { Countdown } from './components/Countdown'
import { Events } from './components/Events'
import { GuestInfo } from './components/GuestInfo'
import { Rsvp } from './components/Rsvp'
import { Wishes } from './components/Wishes'
import { ShareInvite } from './components/ShareInvite'
import { Closing } from './components/Closing'
import { FloatingActions } from './components/FloatingActions'
import { LangToggle } from './components/LangToggle'
import { OpenCurtain } from './components/OpenCurtain'
import { ScrollProgress } from './components/ScrollProgress'
import { ScrollTop } from './components/ScrollTop'
import { PrefetchPhotos } from './components/PrefetchPhotos'
import { useAutoTour } from './hooks/useAutoTour'
import './App.css'

type Phase = 'loading' | 'cover' | 'opened'

function Invite() {
  const [phase, setPhase] = useState<Phase>('loading')
  const [musicOn, setMusicOn] = useState(false)
  const [showCurtain, setShowCurtain] = useState(false)
  const [tourOn, setTourOn] = useState(false)
  const scrollRef = useRef<HTMLElement | null>(null)

  const finishLoading = useCallback(() => setPhase('cover'), [])
  const toggleMusic = useCallback(() => setMusicOn((v) => !v), [])

  const openInvite = useCallback(() => {
    // User gesture: mount YouTube embed with autoplay so music starts unmuted.
    setMusicOn(true)
    setShowCurtain(true)
    setPhase('opened')
    setTourOn(true)
  }, [])

  useAutoTour({ enabled: tourOn && phase === 'opened', scrollerRef: scrollRef })

  return (
    <div className="stage">
      <PrefetchPhotos />
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
          <>
            <main className="invite-scroll" ref={scrollRef}>
              <Cover />
              <Couple />
              <Gallery />
              <Countdown />
              <Events />
              <GuestInfo />
              <Rsvp />
              <Wishes />
              <ShareInvite />
              <Closing />
            </main>
            <ScrollProgress scrollerRef={scrollRef} />
            <ScrollTop scrollerRef={scrollRef} />
            {showCurtain ? (
              <OpenCurtain onDone={() => setShowCurtain(false)} />
            ) : null}
          </>
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
