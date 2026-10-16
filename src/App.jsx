import Hero from './components/Hero'
import Intro from './components/Intro'
import CityBand from './components/CityBand'
import Work from './components/Work'
import Automation from './components/Automation'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { folders } from './data'

const roles = folders.filter((f) => f.period !== 'Project')
const projects = folders.filter((f) => f.period === 'Project')

export default function App() {
  return (
    <>
      {/* The page sits above the sticky footer, which is uncovered at the end. */}
      <main className="page">
        <Hero />
        <Intro />
        <CityBand />
        <Work
          id="experience"
          title="Experience"
          intro="One year as an engineer and two internships, from AI chatbots to server infrastructure."
          items={roles}
        />
        <Work
          id="projects"
          title="Projects"
          intro="Full-stack applications I designed and built end to end during my engineering studies."
          items={projects}
        />
        <Automation />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
