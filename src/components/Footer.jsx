import { person, navLinks, credits, mailto } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div>
          <h2>Pages</h2>
          <ul>
            {navLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h2>Elsewhere</h2>
          <ul>
            <li><a href={person.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href={mailto}>{person.email}</a></li>
            <li><a href={person.phoneHref}>{person.phone}</a></li>
            <li>{person.city}</li>
          </ul>
        </div>
        <div>
          <h2>Photographs</h2>
          <ul>
            {credits.map((c) => (
              <li key={c.page}>
                <a href={c.page} target="_blank" rel="noreferrer">{c.title}</a>, {c.creator},{' '}
                <a href={c.licenceUrl} target="_blank" rel="noreferrer">{c.licence}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div />

      <div>
        <svg className="footer-word" viewBox="0 0 1000 132" role="img" aria-label={person.last}>
          <text
            x="0"
            y="116"
            textLength="1000"
            lengthAdjust="spacing"
            style={{ font: '800 150px var(--font)' }}
          >
            {person.last}
          </text>
        </svg>
        <p className="footer-legal">© 2026 {person.name}. Built with React and Vite.</p>
      </div>
    </footer>
  )
}
