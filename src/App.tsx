import { useCallback, useEffect, useRef, useState } from 'react'
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
import './App.css'

type Phase = 'loading' | 'cover' | 'opened'

function ClassicInvite() {
  const [phase, setPhase] = useState<Phase>('loading')
  // Start music as soon as the cover is ready (muted for browser autoplay policy).
  const [musicOn, setMusicOn] = useState(false)
  const [musicMuted, setMusicMuted] = useState(true)
  const [showCurtain, setShowCurtain] = useState(false)
  const [tourOn, setTourOn] = useState(false)
  const scrollRef = useRef<HTMLElement | null>(null)

  const finishLoading = useCallback(() => {
    setPhase('cover')
    setMusicOn(true) // muted autoplay on load
  }, [])

  const unmute = useCallback(() => setMusicMuted(false), [])

  const toggleMusic = useCallback(() => {
    setMusicOn((on) => {
      if (!on) {
        // Turning back on after user pause — play unmuted.
        setMusicMuted(false)
        return true
      }
      return false
    })
  }, [])

  const openInvite = useCallback(() => {
    unmute()
    setMusicOn(true)
    setShowCurtain(true)
    setPhase('opened')
    setTourOn(true)
  }, [unmute])

  // First tap / key anywhere: unmute so guests hear music without hunting for the FAB.
  useEffect(() => {
    if (!musicOn || !musicMuted) return
    const unlock = () => unmute()
    window.addEventListener('pointerdown', unlock, { once: true })
    window.addEventListener('keydown', unlock, { once: true })
    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
    }
  }, [musicOn, musicMuted, unmute])

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
          <FloatingActions
            musicOn={musicOn}
            muted={musicMuted}
            onToggleMusic={toggleMusic}
          />
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
