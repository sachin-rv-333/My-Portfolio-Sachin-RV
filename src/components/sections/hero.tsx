"use client"

import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Download, ArrowRight, MapPin } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center pt-24 sm:pt-32 pb-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[5%] w-32 sm:w-72 h-32 sm:h-72 bg-blue-500 blur-[80px] sm:blur-[120px] opacity-[0.05] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-40 sm:w-80 h-40 sm:h-80 bg-purple-500 blur-[90px] sm:blur-[140px] opacity-[0.05] animate-pulse pointer-events-none" />

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="px-4 s:px-5 py-2 glass rounded-full mb-8 sm:mb-10 flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform cursor-default border border-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-foreground/70 uppercase">Actively Developing</span>
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 sm:mb-6 leading-[1.1] sm:leading-none">
            <span className="gradient-text drop-shadow-sm sm:drop-shadow-[0_0_30px_rgba(96,165,250,0.1)] block sm:inline">Sachin RV</span>
          </h1>

          {/* Location */}
          <div className="flex items-center space-x-2 text-foreground/50 mb-8 sm:mb-10 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold">
             <MapPin size={12} className="text-blue-400 shrink-0" />
             <span>Bangalore, India</span>
          </div>

          {/* Role / Typing */}
          <div className="text-lg sm:text-2xl md:text-4xl font-bold text-foreground/80 mb-10 sm:mb-12 h-10 sm:h-12 flex items-center justify-center">
            <span className="opacity-60 mr-2 sm:mr-4">The</span>
            <span className="gradient-text">
              <Typewriter
                words={["Full Stack Developer", "Experience Architect", "Modern UI Specialist", "Problem Solver"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </div>

          {/* Intro Text */}
          <p className="max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed mb-10 sm:mb-14 px-4 font-medium break-words">
            Building next-generation, high-performance web applications using the MERN stack with a focus on immersive designs and seamless user experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-md sm:max-w-none">
            <a 
              href="#contact" 
              className="group relative h-14 sm:h-16 w-full sm:w-auto px-8 sm:px-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl text-white font-bold flex items-center justify-center hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)] transition-all duration-300"
            >
              Let&apos;s Talk 
              <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="h-14 sm:h-16 w-full sm:w-auto px-8 sm:px-10 glass rounded-2xl text-foreground font-bold flex items-center justify-center border border-white/10 hover:bg-white/5 active:scale-95 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <Download size={18} className="mr-3 shrink-0" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0" />
    </section>
  )
}
