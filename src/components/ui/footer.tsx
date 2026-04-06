"use client"

import { Code2, Briefcase, Send, ExternalLink, Heart } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-16 sm:py-24 relative overflow-hidden bg-background/80 backdrop-blur-md border-t border-white/5 w-full">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16 sm:mb-20 items-start">
          <div className="col-span-1 lg:col-span-2 space-y-6 sm:space-y-8 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground">
              <span className="gradient-text">Sachin RV</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground/50 max-w-sm mx-auto md:mx-0 leading-relaxed font-medium break-words">
              Architecting the web through scalable systems and immersive user experiences with a focus on MERN stack excellence.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4 sm:space-x-6">
              <a href="https://github.com/sachin-rv-333" className="p-4 bg-white/5 rounded-full hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white transition-all transform hover:-translate-y-2 active:scale-90">
                <Code2 size={24} className="shrink-0" />
              </a>
              <a href="https://www.linkedin.com/in/sachin-rv-70a505293/" className="p-4 bg-white/5 rounded-full hover:bg-gradient-to-r from-purple-500 to-cyan-500 hover:text-white transition-all transform hover:-translate-y-2 active:scale-90">
                <Briefcase size={24} className="shrink-0" />
              </a>
              <a href="mailto:sachinrv19@gmail.com" className="p-4 bg-white/5 rounded-full hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-all transform hover:-translate-y-2 active:scale-90">
                <Send size={24} className="shrink-0" />
              </a>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 text-center md:text-left pt-6 sm:pt-0">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20 leading-none">Internal Links</h3>
            <ul className="space-y-4 sm:space-y-5">
              <li><a href="#home" className="text-sm font-bold text-foreground/60 hover:text-blue-400 transition-all flex items-center justify-center md:justify-start group uppercase tracking-widest">
                 <div className="w-0 group-hover:w-4 h-[2px] bg-blue-400 rounded-full mr-0 group-hover:mr-3 transition-all shrink-0" />
                 Home
              </a></li>
              <li><a href="#experience" className="text-sm font-bold text-foreground/60 hover:text-purple-400 transition-all flex items-center justify-center md:justify-start group uppercase tracking-widest">
                 <div className="w-0 group-hover:w-4 h-[2px] bg-purple-400 rounded-full mr-0 group-hover:mr-3 transition-all shrink-0" />
                 Experience
              </a></li>
              <li><a href="#projects" className="text-sm font-bold text-foreground/60 hover:text-cyan-400 transition-all flex items-center justify-center md:justify-start group uppercase tracking-widest">
                 <div className="w-0 group-hover:w-4 h-[2px] bg-cyan-400 rounded-full mr-0 group-hover:mr-3 transition-all shrink-0" />
                 Open Source
              </a></li>
              <li><a href="/resume.pdf" download className="text-sm font-bold text-foreground/60 hover:text-blue-400 transition-all flex items-center justify-center md:justify-start group uppercase tracking-widest">
                 <div className="w-0 group-hover:w-4 h-[2px] bg-blue-400 rounded-full mr-0 group-hover:mr-3 transition-all shrink-0" />
                 Get Resume <ExternalLink size={14} className="ml-2 shrink-0" />
              </a></li>
            </ul>
          </div>

          <div className="glass p-8 rounded-[2rem] border border-white/10 bg-white/3 relative overflow-hidden group w-full sm:max-w-sm mx-auto md:mx-0">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-all rounded-full" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20 leading-none mb-6 text-center md:text-left">Developer Status</h3>
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
               <span className="relative flex h-3 w-3 shrink-0">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
               </span>
               <span className="text-xs sm:text-sm font-bold text-foreground/80 lowercase">Available for hiring</span>
            </div>
            <p className="text-[10px] sm:text-xs text-foreground/40 font-bold leading-relaxed group-hover:text-foreground/60 transition-colors text-center md:text-left px-2 sm:px-0">
              Looking for a MERN stack expert in Bangalore? Let&apos;s build something exceptional.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 sm:pt-12 border-t border-white/5 space-y-4 sm:space-y-0 text-center md:text-left">
          <p className="text-[9px] sm:text-[10px] font-black text-foreground/20 tracking-[0.3em] uppercase break-words">
            &copy; {year} Sachin RV &bull; All Rights Reserved
          </p>
          <div className="flex items-center text-[9px] sm:text-[10px] font-black text-foreground/20 tracking-[0.3em] uppercase break-words">
             Made with <Heart size={14} className="mx-2 text-red-500/50 hover:text-red-500 hover:scale-125 transition-all shrink-0" /> locally in Bharat
          </div>
        </div>
      </div>
    </footer>
  )
}
