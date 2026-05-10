import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: 'rgba(3, 7, 18, 0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.6)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="font-bold text-lg tracking-tight"
        >
          <span style={{ color: '#22d3ee' }}>A</span>
          <span className="text-white">bdellah</span>
          <span style={{ color: '#a78bfa' }}>.</span>
          <span style={{ color: '#22d3ee' }}>dev</span>
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l}>
              <motion.a
                href={`#${l.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(l)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ color: active === l ? '#22d3ee' : '#cbd5e1' }}
              >
                {active === l && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(34, 211, 238, 0.08)' }}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 hover:text-white transition-colors">{l}</span>
              </motion.a>
            </li>
          ))}
          <li>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2 rounded-lg text-sm font-semibold text-slate-900"
              style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)' }}
            >
              Hire Me
            </motion.a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg"
          style={{ color: '#94a3b8', background: 'rgba(30, 41, 59, 0.5)' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(3, 7, 18, 0.95)', borderBottom: '1px solid rgba(30, 41, 59, 0.8)' }}
          >
            <ul className="px-6 py-4 flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.li
                  key={l}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={`#${l.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                    style={{ color: '#94a3b8' }}
                  >
                    {l}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
