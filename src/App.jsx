import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import './index.css'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div className="min-h-screen w-full" style={{ background: 'var(--bg-primary)', overflowX: 'hidden' }}>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%', background: 'linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6)' }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[100]"
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
