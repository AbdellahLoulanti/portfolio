import { motion, useReducedMotion } from 'framer-motion'

// Entrance for the parts of a section: children rise in one after another, once.
export function RevealGroup({ as = 'div', children, stagger = 0.08, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px 30% 0px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Reveal({ as = 'div', children, distance = 24, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : distance },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
