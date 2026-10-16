import Hero from './components/Hero'
import Intro from './components/Intro'
import CityBand from './components/CityBand'
import Work from './components/Work'
import Automation from './components/Automation'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* The page sits above the sticky footer, which is uncovered at the end. */}
      <main className="page">
        <Hero />
        <Intro />
        <CityBand />
        <Work />
        <Automation />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
