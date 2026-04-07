"use client"

import React from "react"
import { Code2, Briefcase, Send, Heart, MapPin, CheckCircle2 } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 w-full mt-24">
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/5 blur-[120px] rounded-full" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 items-start">
          <div className="col-span-1 lg:col-span-2 space-y-10 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground group">
              <span className="gradient-text transition-transform inline-block cursor-default">Sachin RV</span>
            </h2>
            <p className="text-lg text-foreground/40 max-w-sm mx-auto md:mx-0 leading-relaxed font-semibold">
              Full Stack (MERN) Developer specialized in building scalable architectures and high-performance digital systems.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-8">
              <a href="https://github.com/sachin-rv-333" className="p-6 bg-[#0F172A] rounded-2xl border border-white/10 hover:bg-gradient-to-br from-blue-500 to-cyan-500 hover:text-white transition-all transform hover:-translate-y-2 hover:shadow-2xl active:scale-95">
                <Code2 size={26} className="shrink-0" />
              </a>
              <a href="https://www.linkedin.com/in/sachin-rv-70a505293/" className="p-6 bg-[#0F172A] rounded-2xl border border-white/10 hover:bg-gradient-to-br from-cyan-500 to-emerald-500 hover:text-white transition-all transform hover:-translate-y-2 hover:shadow-2xl active:scale-95">
                <Briefcase size={26} className="shrink-0" />
              </a>
              <a href="mailto:sachinrv19@gmail.com" className="p-6 bg-[#0F172A] rounded-2xl border border-white/10 hover:bg-gradient-to-br from-blue-500 to-emerald-500 hover:text-white transition-all transform hover:-translate-y-2 hover:shadow-2xl active:scale-95">
                <Send size={26} className="shrink-0" />
              </a>
            </div>
          </div>

          <div className="space-y-10 text-center md:text-left pt-6 sm:pt-0">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 leading-none">Internal Links</h3>
            <ul className="space-y-6">
              <li><a href="#home" className="text-sm font-black text-foreground/40 hover:text-blue-400 transition-all flex items-center justify-center md:justify-start group uppercase tracking-[0.2em]">
                <div className="w-0 group-hover:w-4 h-[2px] bg-blue-500 rounded-full mr-0 group-hover:mr-3 transition-all shrink-0" />
                Home
              </a></li>
              <li><a href="#experience" className="text-sm font-black text-foreground/40 hover:text-blue-400 transition-all flex items-center justify-center md:justify-start group uppercase tracking-[0.2em]">
                <div className="w-0 group-hover:w-4 h-[2px] bg-blue-500 rounded-full mr-0 group-hover:mr-3 transition-all shrink-0" />
                Experience
              </a></li>
              <li><a href="#projects" className="text-sm font-black text-foreground/40 hover:text-blue-400 transition-all flex items-center justify-center md:justify-start group uppercase tracking-[0.2em]">
                <div className="w-0 group-hover:w-4 h-[2px] bg-blue-500 rounded-full mr-0 group-hover:mr-3 transition-all shrink-0" />
                Projects
              </a></li>
              <li><a href="#puzzle" className="text-sm font-black text-foreground/40 hover:text-blue-400 transition-all flex items-center justify-center md:justify-start group uppercase tracking-[0.2em]">
                <div className="w-0 group-hover:w-4 h-[2px] bg-blue-500 rounded-full mr-0 group-hover:mr-3 transition-all shrink-0" />
                The Riddle
              </a></li>
            </ul>
          </div>

          <div className="bg-[#0F172A] p-10 sm:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden group w-full max-w-sm mx-auto md:mx-0 shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-all rounded-full" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 leading-none mb-10 text-center md:text-left">Hiring Frequency</h3>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="relative flex h-4 w-4 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
                </div>
                <span className="text-sm sm:text-base font-black text-emerald-500 uppercase tracking-widest leading-none">Open to Work</span>
              </div>
              <p className="text-[11px] sm:text-xs text-foreground/50 font-bold leading-relaxed group-hover:text-foreground/80 transition-colors text-center md:text-left">
                Full Stack Developer actively seeking new opportunities. Let&apos;s build something exceptional together.
              </p>
              <div className="pt-4 flex justify-center md:justify-start">
                 <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-2xl text-[10px] font-black uppercase text-white shadow-lg active:scale-95 transition-all">Connect Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-14 border-t border-white/5 space-y-6 md:space-y-0 text-center md:text-left">
          <p className="text-[10px] font-black text-white/20 tracking-[0.3em] uppercase">
            &copy; {year} Sachin RV &bull; All Rights Reserved
          </p>
          <div className="flex items-center text-[10px] font-black text-white/20 tracking-[0.3em] uppercase">
            Built with <Heart size={16} className="mx-3 text-red-500/50 hover:text-red-600 hover:scale-125 transition-all shrink-0" /> in Bharat
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
