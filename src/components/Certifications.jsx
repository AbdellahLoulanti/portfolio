import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    name: 'Oracle Database SQL',
    issuer: 'Oracle',
    category: 'Database & PL/SQL',
    date: '2024',
    color: '#f97316',
    credential: null,
    tags: ['SQL', 'PL/SQL', 'Oracle DB'],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#f97316' }}>
            Certifications
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-16" style={{ letterSpacing: '-0.02em' }}>
            Validated skills<br />
            <span style={{ color: '#475569' }}>& industry credentials</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: `0 20px 60px ${cert.color}18` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(30, 41, 59, 0.95)',
                  border: '1px solid rgba(71, 85, 105, 0.7)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${cert.color}08, transparent 70%)` }}
                />

                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                    >
                      <Award size={20} style={{ color: cert.color }} />
                    </div>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: `${cert.color}10`, color: cert.color, border: `1px solid ${cert.color}20` }}
                    >
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                  <p className="text-sm font-medium mb-1" style={{ color: cert.color }}>{cert.issuer}</p>
                  <p className="text-xs mb-5" style={{ color: '#64748b' }}>{cert.category}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs"
                        style={{ background: `${cert.color}10`, color: `${cert.color}cc`, border: `1px solid ${cert.color}20` }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {cert.credential && (
                    <motion.a
                      href={cert.credential}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg"
                      style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                    >
                      <ExternalLink size={12} /> View Credential
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
