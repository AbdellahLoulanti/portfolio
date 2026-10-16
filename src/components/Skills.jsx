import { skillGroups } from '../data'
import { Reveal, RevealGroup } from './Reveal'
import SectionHead from './SectionHead'

export default function Skills() {
  return (
    <section id="skills" className="skills wrap" aria-labelledby="skills-title">
      <SectionHead id="skills-title" title="Skills" intro="The tools I use, and where I used each one." />
      <div className="skills-body">
      <div className="skills-list">
        {skillGroups.map((g) => (
          <RevealGroup key={g.group} className="skill-group" stagger={0.04}>
            <Reveal as="h3">{g.group}</Reveal>
            {g.rows.map(([name, where]) => (
              <Reveal key={name} className="skill-row" distance={12}>
                <span>{name}</span>
                <span>{where}</span>
              </Reveal>
            ))}
          </RevealGroup>
        ))}
      </div>

      <figure className="skills-photo">
        <img
          src="/tetouan/medina-green-door.jpg"
          alt="A green studded door and a tiled fountain in the medina of Tétouan"
          width="1400"
          height="1059"
          loading="lazy"
        />
        <figcaption>A door in the medina, Tétouan. Photo: Yamen, CC BY-SA 4.0.</figcaption>
      </figure>
      </div>
    </section>
  )
}
