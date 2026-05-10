import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Abdellahloulanti234@gmail.com',
    href: 'mailto:Abdellahloulanti234@gmail.com',
    color: '#22d3ee',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'AbdellahLoulanti',
    href: 'https://github.com/AbdellahLoulanti',
    color: '#a78bfa',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Abdellah AL UOLANTI',
    href: 'https://linkedin.com/in/abdellah-al-uolanti',
    color: '#f472b6',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+212 622 544 767',
    href: 'tel:+212622544767',
    color: '#34d399',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#22d3ee' }}>
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Let's work together<br />
            <span style={{ color: '#475569' }}>I'm open to new opportunities</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg mb-16 max-w-xl" style={{ color: '#64748b' }}>
            Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contacts.map(({ icon: Icon, label, value, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${color}15` }}
                whileTap={{ scale: 0.97 }}
                className="group p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300"
                style={{
                  background: 'rgba(30, 41, 59, 0.4)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                  backdropFilter: 'blur(10px)',
                  textDecoration: 'none',
                }}
              >
                <div className="flex justify-between items-start">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-medium mb-1" style={{ color: '#475569' }}>{label}</p>
                  <p className="text-sm font-medium text-white truncate">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            variants={fadeUp}
            className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{ borderTop: '1px solid rgba(30, 41, 59, 0.8)' }}
          >
            <p className="text-sm" style={{ color: '#334155' }}>
              © 2026 Abdellah AL UOLANTI. Built with React & Tailwind CSS.
            </p>
            <div className="flex items-center gap-1 text-sm" style={{ color: '#334155' }}>
              <span>Deployed on</span>
              <span className="font-semibold" style={{ color: '#475569' }}>Vercel</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
