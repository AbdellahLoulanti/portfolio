import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal'
import { Terminal, Globe, Cloud, Database, Activity, Cpu } from 'lucide-react'

const skillGroups = [
  { icon: Terminal, label: 'Languages', color: '#22d3ee', skills: ['Python', 'JavaScript', 'PHP', 'Java', 'C'] },
  { icon: Globe, label: 'Web & Frameworks', color: '#a78bfa', skills: ['Django', 'DRF', 'Laravel', 'Spring Boot', 'React', 'Tailwind CSS', 'Livewire'] },
  { icon: Cloud, label: 'DevOps & Cloud', color: '#f472b6', skills: ['Docker', 'Docker Compose', 'Ansible', 'GitHub Actions', 'CI/CD', 'Nginx', 'DigitalOcean'] },
  { icon: Database, label: 'Databases', color: '#fb923c', skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { icon: Activity, label: 'Monitoring', color: '#34d399', skills: ['Prometheus', 'Grafana', 'cAdvisor'] },
  { icon: Cpu, label: 'OS & Networks', color: '#fbbf24', skills: ['Linux', 'Windows', 'Routing', 'Protocols'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: '#a78bfa' }}
          >
            Technical Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-16"
            style={{ letterSpacing: '-0.02em' }}
          >
            Tools & technologies<br />
            <span style={{ color: '#475569' }}>I work with daily</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map(({ icon: Icon, label, color, skills }) => (
              <motion.div
                key={label}
                variants={scaleIn}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-2xl group transition-all duration-300"
                style={{
                  background: 'rgba(30, 41, 59, 0.95)',
                  border: '1px solid rgba(71, 85, 105, 0.7)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2 rounded-lg"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <h3 className="font-semibold text-sm text-white">{label}</h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1 rounded-full text-xs font-medium cursor-default"
                      style={{
                        background: `${color}10`,
                        border: `1px solid ${color}25`,
                        color: `${color}cc`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
