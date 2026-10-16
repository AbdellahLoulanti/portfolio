import { education } from '../data'
import { Reveal, RevealGroup } from './Reveal'
import SectionHead from './SectionHead'

export default function Education() {
  return (
    <section id="education" className="education wrap" aria-labelledby="education-title">
      <SectionHead id="education-title" title="Education" />
      <RevealGroup className="edu-row">
        <Reveal as="dl" className="edu-facts">
          {education.facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </Reveal>
        <Reveal as="p" className="edu-paragraph">{education.paragraph}</Reveal>
      </RevealGroup>

      <RevealGroup className="edu-row">
        <Reveal as="p" className="edu-word">Languages and courses</Reveal>
        <Reveal className="edu-lists">
          {education.lists.map((list) => (
            <div key={list.title} className="edu-list">
              <h3>{list.title}</h3>
              <ul>
                {list.rows.map(([name, value]) => (
                  <li key={name}>
                    <span>{name}</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </RevealGroup>
    </section>
  )
}
