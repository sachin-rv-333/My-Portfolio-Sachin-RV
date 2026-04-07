"use client"

import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Download, ArrowRight, MapPin, Zap } from "lucide-react"

const Hero = () => {
  const typewriterWords = useMemo(() => ["Full Stack Developer", "MERN Stack Engineer", "UI/UX Developer", "Creative Technologist"], [])

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#050505]">
      {/* Subtle depth layer */}
      <div className="absolute top-[10%] left-[5%] w-32 sm:w-80 h-32 sm:h-80 bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-40 sm:w-96 h-40 sm:h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="px-5 py-3 bg-[#0F172A] rounded-full mb-10 sm:mb-12 flex items-center space-x-3 transition-colors border border-white/10 shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-foreground/50 uppercase">🟢 Open to Work</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[1] sm:leading-none">
            <span className="gradient-text">Sachin RV</span>
          </h1>

          <div className="flex items-center space-x-3 text-foreground/40 mb-12 sm:mb-16 text-[10px] sm:text-sm tracking-[0.5em] uppercase font-black">
             <MapPin size={14} className="text-blue-500" />
             <span>Bangalore, India</span>
          </div>

          <div className="text-xl sm:text-3xl md:text-5xl font-black text-foreground/70 mb-14 sm:mb-20 h-12 sm:h-16 flex items-center justify-center">
            <span className="opacity-10 mr-4 sm:mr-8 font-medium italic">A</span>
            <span className="gradient-text">
              <Typewriter
                words={typewriterWords}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          {/* Professional Objective */}
          <div className="relative max-w-3xl px-6 mb-16 sm:mb-24">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center space-x-3 text-blue-400 font-black text-[10px] uppercase tracking-widest bg-[#0F172A] px-5 py-2 rounded-2xl border border-white/10 shadow-xl">
               <Zap size={12} className="fill-blue-500 text-blue-500" />
               <span>Expertise: MERN Ecosystem</span>
            </div>
            <p className="text-lg sm:text-2xl text-foreground font-semibold leading-relaxed tracking-tight text-white/70">
              Passionate <span className="text-blue-400 px-1 font-black">Full Stack Developer</span> specialized in the MERN stack. Building scalable architectures and <span className="text-cyan-400 font-black">high-performance</span> user interfaces that drive business results.
            </p>
          </div>

          {/* Optimized CTAs (Full width on mobile as requested) */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10 w-full md:max-w-none px-4">
            <a 
              href="#contact" 
              className="h-16 sm:h-20 w-full sm:w-auto px-12 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-3xl text-white font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              Let&apos;s Build
              <ArrowRight size={20} className="ml-5 group-hover:translate-x-2 transition-transform shrink-0" />
            </a>
            <a 
              href="/resume.pdf" 
              download="Sachin_RV_Resume.pdf"
              className="h-16 sm:h-20 w-full sm:w-auto px-12 bg-[#0F172A] rounded-3xl text-foreground font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center border border-white/10 hover:bg-white/5 active:scale-95 shadow-md transition-all duration-300"
            >
              <Download size={20} className="mr-5 shrink-0" />
              Get Resume
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  )
}

export default React.memo(Hero)
