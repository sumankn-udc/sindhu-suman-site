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
import { FutureInvite } from './components/FutureInvite'
import { useAutoTour } from './hooks/useAutoTour'
import { useWeddingMusic } from './hooks/useWeddingMusic'
import './App.css'

type Phase = 'loading' | 'cover' | 'opened'

function ClassicInvite() {
  const [phase, setPhase] = useState<Phase>('loading')
  const [showCurtain, setShowCurtain] = useState(false)
  const [tourOn, setTourOn] = useState(false)
  const scrollRef = useRef<HTMLElement | null>(null)
  const { play, toggle, playing, setHostRef } = useWeddingMusic()

  const finishLoading = useCallback(() => setPhase('cover'), [])

  // iPhone Chrome/Safari: unMute + playVideo MUST run in this click stack.
  const openInvite = useCallback(() => {
    play()
    setShowCurtain(true)
    setPhase('opened')
    setTourOn(true)
  }, [play])

  useAutoTour({ enabled: tourOn && phase === 'opened', scrollerRef: scrollRef })

  return (
    <div className="stage">
      <PrefetchPhotos />
      {/* Off-screen but non-tiny host — required for iOS YouTube playback */}
      <div className="yt-player-host" aria-hidden="true">
        <div ref={setHostRef} className="yt-player-slot" />
      </div>
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
          <FloatingActions playing={playing} onToggleMusic={toggle} />
        ) : null}
      </div>
    </div>
  )
}

function pathIsFuture() {
  if (typeof window === 'undefined') return false
  return window.location.pathname.replace(/\/+$/, '') === '/future'
}

export default function App() {
  const [future] = useState(pathIsFuture)

  return (
    <LangProvider>
      <AnimatedFavicon />
      {future ? <FutureInvite /> : <ClassicInvite />}
    </LangProvider>
  )
}
