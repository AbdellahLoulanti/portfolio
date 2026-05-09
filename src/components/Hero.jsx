export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-cyan-400 font-medium mb-4 tracking-widest text-sm uppercase">Full-Stack Engineer & DevOps</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Abdellah <span className="text-cyan-400">AL UOLANTI</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Software engineer specialized in full-stack development and DevOps automation.
          Building scalable web applications and modern deployment infrastructures.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
            View Projects
          </a>
          <a href="#contact" className="border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold px-8 py-3 rounded-lg transition-colors">
            Contact Me
          </a>
          <a href="https://github.com/AbdellahLoulanti" target="_blank" rel="noreferrer" className="border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold px-8 py-3 rounded-lg transition-colors">
            GitHub
          </a>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-500 text-sm">
          <span>📍 Tétouan, Morocco</span>
          <span>✉️ Abdellahloulanti234@gmail.com</span>
          <span>📞 0622544767</span>
        </div>
      </div>
    </section>
  )
}
