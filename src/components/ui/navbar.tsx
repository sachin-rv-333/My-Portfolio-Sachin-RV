"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Smartphone, Globe, Code2 } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Puzzle", href: "#puzzle" },
    { title: "Contact", href: "#contact" }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-sm border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
            <Code2 size={24} />
          </div>
          <span className="text-xl font-black gradient-text tracking-tighter">Sachin RV</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href}
              className="text-sm font-bold text-foreground/60 hover:text-blue-400 transition-colors uppercase tracking-[0.2em]"
            >
              {link.title}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground hover:text-blue-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.title} 
                  href={link.href}
                  className="text-lg font-black text-foreground/80 hover:text-blue-500 transition-colors uppercase tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-[0.3em] text-center shadow-lg active:scale-95 transition-transform"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
