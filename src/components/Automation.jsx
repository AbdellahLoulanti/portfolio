import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer } from '../hooks/useScrollReveal'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Workflow, Bot } from 'lucide-react'

const n8nWorkflows = [
  {
    title: 'Document Upload & Google Drive Sync',
    description: 'Webhook-triggered workflow that routes uploaded documents into structured Google Drive folders based on business, city, and document type.',
    tags: ['Webhook', 'Google Drive', 'File Routing'],
    img: '/automation/n8n-1.jpeg',
  },
  {
    title: 'Drive Folder Structure Initializer',
    description: 'Auto-creates a nested folder hierarchy (ville → société → sous-dossiers) for each business on first use, ensuring consistent file organization.',
    tags: ['Webhook', 'Folder Creation', 'Sub-workflows'],
    img: '/automation/n8n-2.jpeg',
  },
  {
    title: 'REQ-025 — Contract Renewal Reminders',
    description: 'Daily scheduler that checks domiciliation contract expiry dates and sends reminder emails at J-60, J-30, J-15, J-3, and expiry day, with automatic task creation.',
    tags: ['Scheduler', 'Email', 'CRM Tasks'],
    img: '/automation/n8n-3.jpeg',
  },
  {
    title: 'REQ-014 — Incomplete Record Detection',
    description: 'Twice-weekly audit that scans all companies for missing mandatory fields, generates an Excel report, and emails it to the responsible manager.',
    tags: ['Data Quality', 'Excel Export', 'Email Alert'],
    img: '/automation/n8n-4.jpeg',
  },
  {
    title: 'REQ-028 — Drive Folder Init (Bulk)',
    description: 'On-demand workflow that loops through all businesses and creates their complete Google Drive accounting folder structures in one execution.',
    tags: ['Bulk Processing', 'Loop', 'Google Drive'],
    img: '/automation/n8n-5.jpeg',
  },
  {
    title: 'REQ-006 — Lead Follow-Up Sequence',
    description: 'GHL automation triggered on lead form submission: tags the lead, creates a pipeline opportunity, assigns an owner, and sends timed follow-up messages.',
    tags: ['GHL', 'Lead Nurturing', 'Pipeline'],
    img: '/automation/n8n-6.jpeg',
  },
]

const chatbotScreenshots = [
  {
    title: 'AI Chatbot Interface',
    description: 'Clean conversational interface with persistent chat history and real-time government contract search.',
    img: '/automation/chatbot-1.jpeg',
  },
  {
    title: 'Opportunity Search Results',
    description: 'AI-generated list of government contracting opportunities filtered by location, with due dates and direct links.',
    img: '/automation/chatbot-2.jpeg',
  },
  {
    title: 'Multi-Result View',
    description: 'Side-by-side opportunity listing with formatted metadata — source, deadlines, and actionable links.',
    img: '/automation/chatbot-3.jpeg',
  },
  {
    title: 'Contract Detail Breakdown',
    description: 'Detailed view of a selected opportunity including agency, NAICS code, contract type, and key dates.',
    img: '/automation/chatbot-4.jpeg',
  },
  {
    title: 'Contextual Follow-Up',
    description: 'Follow-up query handling — the AI maintains context across turns to refine and expand search results.',
    img: '/automation/chatbot-5.jpeg',
  },
  {
    title: 'IT Services Opportunity Search',
    description: 'Filtered search by industry sector, returning IT-specific government contracting opportunities.',
    img: '/automation/chatbot-6.jpeg',
  },
]

function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex)
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-5xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={images[idx].img}
          alt={images[idx].title}
          className="w-full rounded-xl object-contain max-h-[75vh]"
          style={{ border: '1px solid rgba(71,85,105,0.5)' }}
        />
        <div className="mt-4 text-center">
          <p className="text-white font-semibold">{images[idx].title}</p>
          <p className="text-sm mt-1" style={{ color: '#64748b' }}>{images[idx].description}</p>
        </div>

        <button onClick={onClose} className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(71,85,105,0.8)', color: '#94a3b8' }}>
          <X size={16} />
        </button>
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(71,85,105,0.8)', color: '#94a3b8' }}>
          <ChevronLeft size={18} />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(71,85,105,0.8)', color: '#94a3b8' }}>
          <ChevronRight size={18} />
        </button>
        <p className="text-center mt-3 text-xs" style={{ color: '#475569' }}>{idx + 1} / {images.length}</p>
      </motion.div>
    </motion.div>
  )
}

function GalleryGrid({ items, color, accentLight }) {
  const [lightbox, setLightbox] = useState(null)
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -4, boxShadow: `0 16px 40px ${color}18` }}
            transition={{ duration: 0.25 }}
            className="group rounded-xl overflow-hidden cursor-pointer"
            style={{ background: 'rgba(30, 41, 59, 0.95)', border: '1px solid rgba(71, 85, 105, 0.7)' }}
            onClick={() => setLightbox(i)}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: `${color}22` }}>
                <span className="text-white text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
                  Click to expand
                </span>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
              <p className="text-xs leading-relaxed mb-3" style={{ color: '#64748b' }}>{item.description}</p>
              {item.tags && (
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-xs"
                      style={{ background: `${color}10`, color: `${color}cc`, border: `1px solid ${color}20` }}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox images={items} startIndex={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default function Automation() {
  return (
    <section id="automation" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#a78bfa' }}>
            AI & Automation
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Workflows & Chatbots<br />
            <span style={{ color: '#475569' }}>built with n8n & AI</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm max-w-xl mb-12 sm:mb-20" style={{ color: '#64748b' }}>
            Real client automations — from document routing and CRM pipelines to AI-powered contract intelligence.
          </motion.p>

          {/* n8n Section */}
          <motion.div variants={fadeUp} className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(234,88,12,0.12)', border: '1px solid rgba(234,88,12,0.25)' }}>
                <Workflow size={17} style={{ color: '#ea580c' }} />
              </div>
              <div>
                <p className="text-white font-semibold">n8n Workflows</p>
                <p className="text-xs" style={{ color: '#475569' }}>Business process automation</p>
              </div>
              <span className="ml-auto text-xs px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(234,88,12,0.1)', color: '#ea580c', border: '1px solid rgba(234,88,12,0.2)' }}>
                {n8nWorkflows.length} workflows
              </span>
            </div>
            <GalleryGrid items={n8nWorkflows} color="#ea580c" />
          </motion.div>

          {/* Chatbot Section */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.25)' }}>
                <Bot size={17} style={{ color: '#a78bfa' }} />
              </div>
              <div>
                <p className="text-white font-semibold">FGA AI Chatbot</p>
                <p className="text-xs" style={{ color: '#475569' }}>Government contracting intelligence</p>
              </div>
              <span className="ml-auto text-xs px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(167,139,250,0.1)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.2)' }}>
                {chatbotScreenshots.length} screens
              </span>
            </div>
            <GalleryGrid items={chatbotScreenshots} color="#a78bfa" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
