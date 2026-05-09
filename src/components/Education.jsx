const languages = [
  { lang: 'Arabic', level: 'Native', pct: 100 },
  { lang: 'French', level: 'B2', pct: 72 },
  { lang: 'English', level: 'B2', pct: 72 },
  { lang: 'Spanish', level: 'A2', pct: 30 },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
        <div className="w-12 h-1 bg-cyan-400 mb-10 rounded"></div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <p className="text-cyan-400 font-semibold text-sm mb-2">2020 – 2025</p>
            <h3 className="text-white font-bold text-xl mb-1">Computer Engineering</h3>
            <p className="text-slate-400 font-medium mb-4">ENSA Tetouan — Tétouan, Morocco</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              National School of Applied Sciences. Specialized in software engineering, networks, algorithms, and system architecture.
            </p>
          </div>
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h3 className="text-white font-bold text-xl mb-6">Languages</h3>
            <div className="flex flex-col gap-4">
              {languages.map(l => (
                <div key={l.lang}>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-sm">{l.lang}</span>
                    <span className="text-cyan-400 text-sm">{l.level}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full transition-all" style={{ width: `${l.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
