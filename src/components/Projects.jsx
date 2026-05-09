const projects = [
  {
    name: 'Tawsilat',
    description: 'A delivery management application with real-time order tracking, secure driver management, and an analytical dashboard.',
    tech: ['Spring Boot', 'JWT', 'React', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Mail API'],
    github: 'https://github.com/AbdellahLoulanti',
  },
  {
    name: 'Rental-Car',
    description: 'A car rental platform with user management, vehicle availability tracking, reservations, and cancellation flows.',
    tech: ['Spring Boot', 'MongoDB', 'Thymeleaf', 'Tailwind CSS'],
    github: 'https://github.com/AbdellahLoulanti',
  },
  {
    name: 'DaliAide',
    description: 'A handyman services platform connecting individuals with craftsmen, featuring project tracking, scheduling, and a rating system.',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/AbdellahLoulanti',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <div className="w-12 h-1 bg-cyan-400 mb-10 rounded"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white font-bold text-xl">{p.name}</h3>
                <a href={p.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
