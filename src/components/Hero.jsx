import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { person, navLinks, mailto } from '../data'

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // Signature move: the giant name settles as the first screen leaves.
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.93])

  return (
    <header ref={ref} className="hero">
      <nav className="hero-top" aria-label="Main">
        <a href="#top" className="wordmark" id="top">{person.name}</a>
        <ul className="hero-links">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </nav>

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>
          Software engineer in Tétouan. I build the AI chatbots, pipelines and workflows
          that let a team stop doing things by hand.
        </p>
        <a className="button" href={mailto}>Email me</a>
        <ul className="hero-links" aria-label="Sections">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </motion.div>

      <motion.h1
        className="hero-word"
        aria-label={`${person.name}, ${person.role}`}
        style={{ scale }}
        initial={{ opacity: 0, y: reduce ? 0 : 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {person.first}
      </motion.h1>
    </header>
  )
}
