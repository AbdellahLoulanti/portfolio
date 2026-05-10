import { motion } from 'framer-motion'
import { fadeUp, slideLeft, staggerContainer } from '../hooks/useScrollReveal'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    role: 'Software Engineer / DevOps',
    company: 'OpsVoid',
    period: 'Dec 2025 – Present',
    location: 'Tétouan',
    type: 'Full-time',
    color: '#22d3ee',
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
    type: 'Internship',
    color: '#a78bfa',
    points: [
      'Designed and developed a complete web platform for digital association management.',
      'Built modules for articles, events, job offers, products, and online orders.',
      'Integrated automated email sending via SMTP and payment via Stripe.',
      'Designed a modular RBAC-based architecture and deployed on DigitalOcean.',
    ],
    tech: ['Laravel', 'Livewire', 'Filament', 'Tailwind CSS', 'MySQL', 'Stripe', 'DigitalOcean'],
  },
  {
    role: 'PFA Intern – DevOps',
    company: 'PAPERLESS',
    period: 'Jul 2024 – Sep 2024',
    location: 'Tétouan',
    type: 'Internship',
    color: '#f472b6',
    points: [
      'Built infrastructure for hosting SaaS products using Docker containerization.',
      'Automated server configuration on Linux and Windows using Ansible.',
      'Developed a web app for Docker instance management.',
      'Set up monitoring with Prometheus & Grafana for real-time supervision.',
    ],
    tech: ['Docker', 'Ansible', 'Prometheus', 'Grafana', 'cAdvisor', 'Python'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#f472b6' }}>
            Experience
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-16" style={{ letterSpacing: '-0.02em' }}>
            Where I've worked<br />
            <span style={{ color: '#475569' }}>& what I've built</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-0 md:left-8 top-0 bottom-0 w-px hidden sm:block"
              style={{ background: 'linear-gradient(to bottom, #22d3ee, #a78bfa, #f472b6)' }}
            />

            <div className="flex flex-col gap-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={slideLeft}
                  className="sm:pl-20 relative"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full hidden sm:flex items-center justify-center top-6"
                    style={{ background: exp.color, boxShadow: `0 0 16px ${exp.color}60` }}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4, boxShadow: `0 0 40px ${exp.color}10` }}
                    transition={{ duration: 0.2 }}
                    className="p-7 rounded-2xl"
                    style={{
                      background: 'rgba(30, 41, 59, 0.4)',
                      border: `1px solid rgba(51, 65, 85, 0.5)`,
                      borderLeft: `3px solid ${exp.color}`,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} style={{ color: exp.color }} />
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: `${exp.color}15`, color: exp.color }}>
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="font-semibold mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-xs" style={{ color: '#64748b' }}>
                        <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                      </div>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2 mb-6">
                      {exp.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                          {p}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{ background: `${exp.color}10`, color: `${exp.color}cc`, border: `1px solid ${exp.color}25` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
