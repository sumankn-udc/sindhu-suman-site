import { useState } from 'react'
import { LangProvider } from './LangContext'
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

function Invite() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="stage">
      <div className="phone">
        <div className="phone-top">
          <LangToggle />
        </div>

        {!opened ? (
          <Cover showCta onOpen={() => setOpened(true)} />
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

        <FloatingActions />
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
