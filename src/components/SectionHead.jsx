import { Reveal, RevealGroup } from './Reveal'

// The same heading block opens every section, so the page reads in a clear order.
export default function SectionHead({ id, title, intro }) {
  return (
    <RevealGroup className="section-head">
      <Reveal as="h2" id={id}>{title}</Reveal>
      {intro && <Reveal as="p">{intro}</Reveal>}
    </RevealGroup>
  )
}
