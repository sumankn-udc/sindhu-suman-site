import { useCallback, useState } from 'react'
import { LangProvider } from './LangContext'
import { LoadingScreen } from './components/LoadingScreen'
import { Cover } from './components/Cover'
import { Couple } from './components/Couple'
import { Gallery } from './components/Gallery'
import { Countdown } from './components/Countdown'
import { Events } from './components/Events'
import { Wishes } from './components/Wishes'
import { Closing } from './components/Closing'
import { FloatingActions } from './components/FloatingActions'
import { LangToggle } from './components/LangToggle'
import './App.css'

type Phase = 'loading' | 'cover' | 'opened'

function Invite() {
  const [phase, setPhase] = useState<Phase>('loading')
  const finishLoading = useCallback(() => setPhase('cover'), [])

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
          <Cover showCta onOpen={() => setPhase('opened')} />
        ) : (
          <main className="invite-scroll">
            <Cover />
            <Couple />
            <Gallery />
            <Countdown />
            <Events />
            <Wishes />
            <Closing />
          </main>
        )}

        {phase !== 'loading' ? <FloatingActions /> : null}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Invite />
    </LangProvider>
  )
}
