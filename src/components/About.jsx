export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
        <div className="w-12 h-1 bg-cyan-400 mb-10 rounded"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I'm a software engineer graduated from <span className="text-white font-medium">ENSA Tetouan</span> in Computer Engineering.
              I specialize in building full-stack web applications and automating DevOps infrastructure.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Currently working at <span className="text-cyan-400 font-medium">OpsVoid</span>, where I develop AI-powered solutions
              and design modern CI/CD pipelines. I'm passionate about clean architecture, automation, and delivering real business value through technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Languages', value: '4+' },
              { label: 'Frameworks', value: '6+' },
              { label: 'Projects', value: '6+' },
              { label: 'Experience', value: '1+ yr' },
            ].map(s => (
              <div key={s.label} className="bg-slate-800 rounded-xl p-6 text-center border border-slate-700">
                <p className="text-4xl font-bold text-cyan-400 mb-2">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
