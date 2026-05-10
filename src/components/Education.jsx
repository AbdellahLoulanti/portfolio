import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal'
import { GraduationCap, Globe } from 'lucide-react'

const languages = [
  { lang: 'Arabic', level: 'Native', pct: 100, color: '#22d3ee' },
  { lang: 'French', level: 'B2', pct: 72, color: '#a78bfa' },
  { lang: 'English', level: 'B2', pct: 72, color: '#f472b6' },
  { lang: 'Spanish', level: 'A2', pct: 30, color: '#fb923c' },
]

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#fbbf24' }}>
            Education
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-16" style={{ letterSpacing: '-0.02em' }}>
            Academic background<br />
            <span style={{ color: '#475569' }}>& communication skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Education card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(30, 41, 59, 0.95)',
                border: '1px solid rgba(71, 85, 105, 0.7)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.2)' }}
              >
                <GraduationCap size={22} style={{ color: '#fbbf24' }} />
              </div>

              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24', border: '1px solid rgba(251, 191, 36, 0.2)' }}
              >
                2020 – 2025
              </span>

              <h3 className="text-2xl font-bold text-white mb-2">Computer Engineering</h3>
              <p className="font-semibold mb-4" style={{ color: '#fbbf24' }}>ENSA Tetouan</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                National School of Applied Sciences. Specialized in software engineering, networks,
                algorithms, distributed systems, and modern system architecture.
              </p>

              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(71, 85, 105, 0.7)' }}>
                <p className="text-xs font-medium mb-3" style={{ color: '#475569' }}>KEY MODULES</p>
                <div className="flex flex-wrap gap-2">
                  {['Algorithms', 'Networks', 'Databases', 'DevOps', 'Web Dev', 'AI'].map(m => (
                    <span key={m} className="px-2.5 py-1 rounded-full text-xs" style={{ background: 'rgba(71, 85, 105, 0.6)', color: '#64748b' }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Languages card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(30, 41, 59, 0.95)',
                border: '1px solid rgba(71, 85, 105, 0.7)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(34, 211, 238, 0.1)', border: '1px solid rgba(34, 211, 238, 0.2)' }}
              >
                <Globe size={22} style={{ color: '#22d3ee' }} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-8">Languages</h3>

              <div className="space-y-6">
                {languages.map((l, i) => (
                  <div key={l.lang}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white">{l.lang}</span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{ background: `${l.color}15`, color: l.color }}>
                        {l.level}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(71, 85, 105, 0.7)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${l.color}, ${l.color}80)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
