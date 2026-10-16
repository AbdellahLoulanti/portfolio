import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

// One full-bleed photograph of the medina, drifting slowly with the scroll.
export default function CityBand() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-6%', '0%'])
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1])

  return (
    <figure ref={ref} className="city">
      <motion.img
        src="/tetouan/medina-white-walls.jpg"
        alt="Whitewashed walls and green doors in the medina of Tétouan"
        width="1920"
        height="1743"
        loading="lazy"
        style={{ y, scale }}
      />
      <figcaption>
        The medina of Tétouan, “the white dove”: where the colours of this page come from.
        Photo: Yamen, CC BY-SA 4.0.
      </figcaption>
    </figure>
  )
}
