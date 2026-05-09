const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'PHP', 'Java', 'C'],
  },
  {
    category: 'Web & Frameworks',
    skills: ['Django', 'Django REST Framework', 'Laravel', 'Spring Boot', 'React', 'Tailwind CSS', 'Livewire'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Docker Compose', 'Ansible', 'GitHub Actions', 'CI/CD', 'Nginx', 'DigitalOcean'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Monitoring',
    skills: ['Prometheus', 'Grafana', 'cAdvisor'],
  },
  {
    category: 'OS & Networks',
    skills: ['Linux', 'Windows', 'Routing', 'Protocols'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <div className="w-12 h-1 bg-cyan-400 mb-10 rounded"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(group => (
            <div key={group.category} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-semibold mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="bg-slate-700 text-slate-300 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
