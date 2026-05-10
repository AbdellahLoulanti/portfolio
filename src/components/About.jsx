import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal'
import { Code2, Server, Zap, Users } from 'lucide-react'

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / 40
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 30)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { icon: Code2, label: 'Projects Built', value: 6, suffix: '+' },
  { icon: Server, label: 'Frameworks', value: 8, suffix: '+' },
  { icon: Zap, label: 'Months Experience', value: 18, suffix: '+' },
  { icon: Users, label: 'Languages', value: 5, suffix: '' },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Section label */}
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: '#22d3ee' }}
          >
            About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-16"
            style={{ letterSpacing: '-0.02em' }}
          >
            Crafting digital experiences<br />
            <span style={{ color: '#475569' }}>with purpose & precision</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Bio */}
            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
                I'm a software engineer graduated from{' '}
                <span className="font-semibold text-white">ENSA Tetouan</span> in Computer Engineering.
                I specialize in building full-stack web applications and automating DevOps pipelines.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
                Currently at{' '}
                <span
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  OpsVoid
                </span>
                , I develop AI-powered solutions and design modern CI/CD infrastructures.
                I'm passionate about clean architecture, automation, and delivering real business value.
              </p>

              <motion.a
                href="mailto:Abdellahloulanti234@gmail.com"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: '#22d3ee' }}
              >
                Get in touch →
              </motion.a>
            </motion.div>

            {/* Stats grid */}
            <motion.div variants={staggerContainer(0.1)} className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value, suffix }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(51, 65, 85, 0.5)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Icon size={20} className="mb-3" style={{ color: '#22d3ee' }} />
                  <p
                    className="text-4xl font-black mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <CountUp target={value} suffix={suffix} />
                  </p>
                  <p className="text-sm" style={{ color: '#64748b' }}>{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
