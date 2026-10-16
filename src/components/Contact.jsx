import { person, mailto } from '../data'
import { Reveal, RevealGroup } from './Reveal'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export default function Contact() {
  const [user, domain] = person.email.split('@')
  return (
    <section id="contact" className="contact" aria-label="Contact">
      <RevealGroup stagger={0.06}>
        <Reveal as="a" className="contact-row" href={mailto}>
          <span>{user}<wbr /><br className="email-break" />@{domain}</span>
        </Reveal>
        <Reveal as="a" className="contact-row" href={person.phoneHref}>
          <span>{person.phone}</span>
        </Reveal>
        <Reveal as="a" className="contact-row" href={person.linkedin} target="_blank" rel="noreferrer">
          <span>LinkedIn</span>
        </Reveal>
        <Reveal as="a" className="contact-row" href={person.github} target="_blank" rel="noreferrer">
          <span>GitHub</span>
        </Reveal>
        <Reveal className="contact-row">
          <span>Tétouan, or remote</span>
        </Reveal>
        <Reveal as="a" className="contact-greeting" href={mailto} aria-label="Salam, send me an email">
          <span>Salam</span>
          <span className="round"><Arrow /></span>
        </Reveal>
      </RevealGroup>
    </section>
  )
}
