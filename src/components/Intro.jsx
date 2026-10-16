import { intro } from '../data'
import profileImg from '../assets/profile.jpg'
import { Reveal, RevealGroup } from './Reveal'

export default function Intro() {
  return (
    <section id="about" className="intro wrap" aria-labelledby="intro-title">
      <RevealGroup className="intro-row">
        <Reveal as="h2" id="intro-title">{intro.heading}</Reveal>
        <Reveal as="p">{intro.note}</Reveal>
      </RevealGroup>

      <RevealGroup as="ul" className="facts" stagger={0.07}>
        {intro.facts.map((f) => (
          <Reveal as="li" key={f.value}>
            <strong>{f.value}</strong>
            <span>{f.label}</span>
          </Reveal>
        ))}
      </RevealGroup>

      <RevealGroup className="intro-photo">
        <Reveal as="p" className="side">
          Right now I’m looking for my next role in AI integration, DevOps or full-stack work,
          in Morocco or remote.
        </Reveal>
        <Reveal as="figure">
          <img src={profileImg} alt="Portrait of Abdellah AL UOLANTI" width="1024" height="1024" loading="lazy" />
          <figcaption>Abdellah, 2026.</figcaption>
        </Reveal>
      </RevealGroup>
    </section>
  )
}
