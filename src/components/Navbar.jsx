import { useState } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-cyan-400 font-bold text-lg">Abdellah<span className="text-white">.dev</span></span>
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
