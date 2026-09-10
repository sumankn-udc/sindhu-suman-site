import { LangProvider } from './LangContext'
import { TopBar } from './components/TopBar'
import { Hero } from './components/Hero'
import { Events } from './components/Events'
import { Rituals } from './components/Rituals'
import { Vows } from './components/Vows'
import { Venue } from './components/Venue'
import { Rsvp } from './components/Rsvp'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <LangProvider>
      <div className="page">
        <TopBar />
        <Hero />
        <main>
          <Events />
          <Rituals />
          <Vows />
          <Venue />
          <Rsvp />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}

export default App
