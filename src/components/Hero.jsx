import { motion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'

const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const techBadges = ['React', 'Django', 'Docker', 'Laravel', 'CI/CD', 'PostgreSQL']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #22d3ee, transparent 70%)' }} />
        <div className="absolute -bottom-40 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }} />
      </div>

      <div className="relative w-full max-w-6xl mx-auto text-center pt-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 text-xs sm:text-sm font-medium"
          style={{ background: 'rgba(34, 211, 238, 0.08)', border: '1px solid rgba(34, 211, 238, 0.2)', color: '#22d3ee' }}
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22d3ee' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22d3ee' }} />
          </span>
          Available for new opportunities
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 leading-none"
        >
          <span className="text-white">Abdellah</span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #22d3ee 0%, #a78bfa 50%, #f472b6 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            AL UOLANTI
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-3 sm:mb-4 leading-relaxed px-2"
          style={{ color: '#94a3b8' }}
        >
          Full-Stack Engineer & DevOps Specialist — building scalable web applications
          and automating modern deployment infrastructures.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex items-center justify-center gap-1 mb-8 sm:mb-10 text-xs sm:text-sm"
          style={{ color: '#475569' }}
        >
          <MapPin size={13} />
          <span>Tétouan, Morocco</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mb-10 sm:mb-16 px-2"
        >
          <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-slate-900 text-sm"
            style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)' }}>
            View Projects
          </motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm transition-colors duration-200"
            style={{ border: '1px solid rgba(51, 65, 85, 1)', color: '#94a3b8', background: 'rgba(30, 41, 59, 0.4)' }}>
            Contact Me
          </motion.a>
          <motion.a href="https://github.com/AbdellahLoulanti" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="px-5 py-3 sm:py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors duration-200"
            style={{ border: '1px solid rgba(51, 65, 85, 1)', color: '#94a3b8', background: 'rgba(30, 41, 59, 0.4)' }}>
            <GithubIcon /> GitHub
          </motion.a>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-20 px-2"
        >
          {techBadges.map((badge, i) => (
            <motion.span key={badge}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.07 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-medium"
              style={{ background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(51, 65, 85, 0.8)', color: '#64748b' }}>
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="flex flex-col items-center gap-2 pb-8" style={{ color: '#475569' }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
