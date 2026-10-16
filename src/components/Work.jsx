import { Reveal, RevealGroup } from './Reveal'
import SectionHead from './SectionHead'

// Flat band colours, all from the page palette, so neighbouring folders always differ.
const bands = [
  { band: '#0d3b26', ink: '#f0f1ec', chip: '#1d5a3c', tab2: '#e2e6df', tab2Ink: '#0d3b26' },
  { band: '#d3dbd1', ink: '#0d3b26', chip: '#e2e6df', tab2: '#0d3b26', tab2Ink: '#f0f1ec' },
  { band: '#17733a', ink: '#f0f1ec', chip: '#0f5f2e', tab2: '#f0f1ec', tab2Ink: '#0d3b26' },
]

const STRIP = 52

export default function Work({ id, title, intro, items }) {
  return (
    <section id={id} className="work" aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <SectionHead id={`${id}-title`} title={title} intro={intro} />
      </div>

      {items.map((f, i) => {
        const c = bands[i % bands.length]
        return (
          <article
            key={f.name}
            className="folder"
            style={{
              '--band': c.band,
              '--band-ink': c.ink,
              '--chip': c.chip,
              '--tab2': c.tab2,
              '--tab2-ink': c.tab2Ink,
            }}
          >
            <div className="folder-tabs">
              <h3 className="folder-tab">{f.name}</h3>
              <span className="folder-tab second">{f.period}</span>
            </div>
            <div className="folder-strip" style={{ height: STRIP }}>
              <span>{f.kind}</span>
              <span>{f.place}</span>
            </div>

            <RevealGroup className="folder-body">
              <Reveal className="folder-visual">
                {f.image ? (
                  <img src={f.image.src} alt={f.image.alt} width={f.image.w} height={f.image.h} loading="lazy" />
                ) : (
                  <ul className="folder-points">
                    {f.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                )}
              </Reveal>
              <Reveal className="folder-text">
                <p>{f.summary}</p>
                {f.image && (
                  <ul className="folder-points compact" style={{ marginBottom: 24 }}>
                    {f.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                )}
                <ul className="folder-tech" aria-label="Technologies">
                  {f.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
                {f.link && (
                  <a className="text-link" href={f.link} target="_blank" rel="noreferrer">
                    Code on GitHub
                  </a>
                )}
              </Reveal>
            </RevealGroup>
          </article>
        )
      })}
    </section>
  )
}
