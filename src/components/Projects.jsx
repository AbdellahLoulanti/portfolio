import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal'
import { ExternalLink, Package } from 'lucide-react'

const GithubIcon = () => (
  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const projects = [
  {
    name: 'Tawsilat',
    tagline: 'Delivery Management App',
    description: 'Real-time order tracking, secure driver management, and an analytical dashboard for delivery operations.',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'JWT'],
    color: '#22d3ee',
    gradient: 'from-cyan-500/20 to-transparent',
    github: 'https://github.com/AbdellahLoulanti',
    live: null,
  },
  {
    name: 'Rental-Car',
    tagline: 'Car Rental Platform',
    description: 'Full-featured car rental system with user management, vehicle availability, reservations, and cancellations.',
    tech: ['Spring Boot', 'MongoDB', 'Thymeleaf', 'Tailwind CSS'],
    color: '#a78bfa',
    gradient: 'from-violet-500/20 to-transparent',
    github: 'https://github.com/AbdellahLoulanti',
    live: null,
  },
  {
    name: 'DaliAide',
    tagline: 'Handyman Services Platform',
    description: 'Connecting individuals with craftsmen — project tracking, scheduling, and a rating system built in.',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'RBAC'],
    color: '#f472b6',
    gradient: 'from-pink-500/20 to-transparent',
    github: 'https://github.com/AbdellahLoulanti',
    live: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#34d399' }}>
            Projects
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-16" style={{ letterSpacing: '-0.02em' }}>
            Things I've built<br />
            <span style={{ color: '#475569' }}>with care & craft</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -8, boxShadow: `0 20px 60px ${p.color}15` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative flex flex-col rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Top gradient accent */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
                />

                {/* Card glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}08, transparent 70%)` }}
                />

                <div className="p-6 flex flex-col flex-1 relative z-10">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
                  >
                    <Package size={18} style={{ color: p.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-xs font-medium mb-3" style={{ color: p.color }}>{p.tagline}</p>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#94a3b8' }}>{p.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ background: `${p.color}10`, color: `${p.color}cc`, border: `1px solid ${p.color}20` }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-colors"
                      style={{ background: 'rgba(51, 65, 85, 0.5)', color: '#94a3b8', border: '1px solid rgba(71, 85, 105, 0.5)' }}
                    >
                      <GithubIcon /> Code
                    </motion.a>
                    {p.live && (
                      <motion.a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg"
                        style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                      >
                        <ExternalLink size={13} /> Live
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
