import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { workflows } from '../data'
import { Reveal, RevealGroup } from './Reveal'
import SectionHead from './SectionHead'

const DAY = 24 * 60 * 60 * 1000
const OFFSETS = [
  [60, '60 days before'],
  [30, '30 days before'],
  [15, '15 days before'],
  [3, '3 days before'],
  [0, 'On the day'],
]

const MONTHS = {
  january: 0, jan: 0, janvier: 0, february: 1, feb: 1, février: 1, fevrier: 1, march: 2, mar: 2, mars: 2,
  april: 3, apr: 3, avril: 3, may: 4, mai: 4, june: 5, jun: 5, juin: 5, july: 6, jul: 6, juillet: 6,
  august: 7, aug: 7, août: 7, aout: 7, september: 8, sep: 8, sept: 8, septembre: 8, october: 9, oct: 9,
  octobre: 9, november: 10, nov: 10, novembre: 10, december: 11, dec: 11, décembre: 11, decembre: 11,
}

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate())
const valid = (y, m, d) => {
  const date = new Date(y, m, d)
  return date.getFullYear() === y && date.getMonth() === m && date.getDate() === d ? date : null
}

// Reads a date out of a plain sentence, in English or French.
function parseDate(text, today) {
  const t = text.toLowerCase()
  let m
  if ((m = t.match(/(\d{4})-(\d{1,2})-(\d{1,2})/))) return valid(+m[1], +m[2] - 1, +m[3])
  if ((m = t.match(/(\d{1,2})[/.](\d{1,2})[/.](\d{4})/))) return valid(+m[3], +m[2] - 1, +m[1])
  if ((m = t.match(/(\d{1,2})(?:st|nd|rd|th)?\s+([a-zéûè]+)\.?\s+(\d{4})/)) && m[2] in MONTHS)
    return valid(+m[3], MONTHS[m[2]], +m[1])
  if ((m = t.match(/([a-zéûè]+)\.?\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})/)) && m[1] in MONTHS)
    return valid(+m[3], MONTHS[m[1]], +m[2])
  if ((m = t.match(/(?:in|dans)\s+(\d{1,4})\s+(?:days?|jours?)/))) return new Date(today.getTime() + +m[1] * DAY)
  if (/tomorrow|demain/.test(t)) return new Date(today.getTime() + DAY)
  if (/today|aujourd/.test(t)) return today
  return null
}

const longDate = (d) =>
  d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
const plainDate = (d) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

function Planner() {
  const today = useMemo(() => startOfDay(new Date()), [])
  const [text, setText] = useState(() => plainDate(new Date(today.getTime() + 75 * DAY)))
  const inputRef = useRef(null)
  const expiry = parseDate(text, today)

  const examples = [
    'in 45 days',
    `${today.getFullYear() + 1}-03-01`,
    `15 janvier ${today.getFullYear() + 1}`,
  ]

  const fill = (value) => {
    setText(value)
    inputRef.current?.focus()
  }

  return (
    <div className="planner">
      <label className="planner-label" htmlFor="planner-input">
        Type the day a contract ends, in English or French. My n8n workflow REQ-025 plans the reminders.
      </label>
      <div className="planner-line" data-ui>
        <input
          id="planner-input"
          ref={inputRef}
          className="planner-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
          autoComplete="off"
        />
      </div>

      <div className="planner-answer" data-ui aria-live="polite">
        {expiry ? (
          <>
            <table>
              <caption className="sr-only">Reminder schedule for a contract ending on {plainDate(expiry)}</caption>
              <tbody>
                {OFFSETS.map(([days, label]) => {
                  const send = new Date(expiry.getTime() - days * DAY)
                  const diff = Math.round((startOfDay(send) - today) / DAY)
                  const status = diff < 0 ? 'already sent' : diff === 0 ? 'sent today' : `in ${diff} days`
                  return (
                    <tr key={days} className={diff < 0 ? 'past' : ''}>
                      <th scope="row">{label}</th>
                      <td>{longDate(send)}</td>
                      <td>{status}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <p className="note">Each reminder emails the client and opens a follow-up task for the team.</p>
          </>
        ) : (
          <p>I can’t read a date in that yet. Try “15 March 2027”, “2027-03-15” or “in 40 days”.</p>
        )}
      </div>

      <div className="planner-foot">
        <div className="planner-examples">
          {examples.map((ex) => (
            <button key={ex} type="button" onClick={() => fill(ex)}>{ex}</button>
          ))}
        </div>
        <p className="planner-why small">
          The real workflow runs every morning for a client’s domiciliation contracts, so nobody has to watch the calendar.
        </p>
      </div>
    </div>
  )
}

function Lightbox({ index, onClose, onMove }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const item = workflows[index]

  useEffect(() => {
    const opener = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
      if (e.key === 'Tab') {
        const buttons = dialogRef.current.querySelectorAll('button')
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      opener?.focus?.()
    }
  }, [onClose, onMove])

  return (
    <motion.div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <img src={item.img} alt={item.title} />
      <div className="lightbox-bar">
        <p><strong>{item.title}</strong>{item.description}</p>
        <div className="lightbox-controls">
          <button type="button" onClick={() => onMove(-1)}>Previous</button>
          <button type="button" onClick={() => onMove(1)}>Next</button>
          <button type="button" ref={closeRef} onClick={onClose}>Close</button>
        </div>
      </div>
    </motion.div>
  )
}

function Shot({ item, index, size, onOpen }) {
  return (
    <Reveal as="figure" className={`shot ${size}`}>
      <button type="button" onClick={() => onOpen(index)} aria-label={`Enlarge: ${item.title}`}>
        <img src={item.img} alt={item.title} width={item.w} height={item.h} loading="lazy" />
      </button>
      <figcaption>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </figcaption>
    </Reveal>
  )
}

export default function Automation() {
  const [open, setOpen] = useState(null)
  // Stable callbacks so the lightbox keeps focus where the visitor left it.
  const move = useCallback((step) => setOpen((i) => (i + step + workflows.length) % workflows.length), [])
  const close = useCallback(() => setOpen(null), [])

  return (
    <section id="automation" className="automation wrap" aria-labelledby="automation-title">
      <SectionHead
        id="automation-title"
        title="Automation"
        intro="I automate the repetitive work of a business with n8n and AI. Try one of my real workflows below."
      />
      <Planner />

      <div className="gallery">
        <RevealGroup className="gallery-head">
          <Reveal as="h3" className="gallery-title">Workflows and a chatbot in production</Reveal>
          <Reveal as="p">
            Three n8n workflows and one RAG chatbot I built for clients, all running in production.
            Client names are removed.
          </Reveal>
        </RevealGroup>

        <RevealGroup className="gallery-row">
          <Shot item={workflows[0]} index={0} size="big" onOpen={setOpen} />
          <Shot item={workflows[1]} index={1} size="small" onOpen={setOpen} />
          <Shot item={workflows[2]} index={2} size="small" onOpen={setOpen} />
        </RevealGroup>
        <RevealGroup className="gallery-row flip">
          <Shot item={workflows[3]} index={3} size="big" onOpen={setOpen} />
          <Shot item={workflows[4]} index={4} size="small" onOpen={setOpen} />
          <Shot item={workflows[5]} index={5} size="small" onOpen={setOpen} />
        </RevealGroup>
      </div>

      <AnimatePresence>
        {open !== null && <Lightbox index={open} onClose={close} onMove={move} />}
      </AnimatePresence>
    </section>
  )
}
