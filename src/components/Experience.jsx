const experiences = [
  {
    role: 'Software Engineer / DevOps',
    company: 'OpsVoid',
    period: 'Dec 2025 – Present',
    location: 'Tétouan',
    points: [
      'Developed an AI-powered chatbot to automate interactions and improve user experience.',
      'Set up and optimized CI/CD pipelines to automate build, test, and deployment processes.',
      'Implemented GitHub Actions workflows for continuous integration and deployment.',
      'Built an automated opportunity notification system for internal teams.',
    ],
    tech: ['Docker', 'Nginx', 'GitHub Actions', 'CI/CD', 'AI'],
  },
  {
    role: 'PFE Intern – Software Engineer',
    company: 'CODEVICE',
    period: 'Feb 2025 – Jun 2025',
    location: 'Tanger',
    points: [
      'Designed and developed a complete web platform for digital association management.',
      'Built modules for articles, events, job offers, products, and online orders.',
      'Integrated automated email sending via SMTP.',
      'Designed a modular RBAC-based architecture for resource access control.',
      'Deployed the solution on the cloud with server environment and configuration management.',
    ],
    tech: ['Laravel', 'Livewire', 'Filament', 'Tailwind CSS', 'MySQL', 'Stripe', 'DigitalOcean'],
  },
  {
    role: 'PFA Intern – DevOps',
    company: 'PAPERLESS',
    period: 'Jul 2024 – Sep 2024',
    location: 'Tétouan',
    points: [
      'Built infrastructure for hosting SaaS products.',
      'Containerized applications using Docker for easier management.',
      'Automated server configuration on Linux and Windows using Ansible.',
      'Developed a web app for Docker instance management.',
      'Set up monitoring tools (Prometheus & Grafana) for real-time supervision.',
    ],
    tech: ['Docker', 'Ansible', 'Prometheus', 'Grafana', 'cAdvisor', 'Python'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
        <div className="w-12 h-1 bg-cyan-400 mb-10 rounded"></div>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-colors">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <div>
                  <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company} — {exp.location}</p>
                </div>
                <span className="text-slate-400 text-sm bg-slate-700 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-slate-400 space-y-2 mb-6">
                {exp.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => (
                  <span key={t} className="bg-cyan-500/10 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-500/20">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
