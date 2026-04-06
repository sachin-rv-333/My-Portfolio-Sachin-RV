"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl"
    >
      <div className="glass rounded-3xl sm:rounded-[2rem] px-5 sm:px-8 py-3 sm:py-5 flex items-center justify-between border border-white/10 shadow-lg">
        <Link href="#home" className="text-xl sm:text-2xl font-black tracking-tighter text-foreground group relative flex items-center" onClick={() => setIsOpen(false)}>
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 group-hover:scale-150 group-hover:bg-purple-500 transition-all duration-500" />
          <span className="gradient-text group-hover:tracking-wider transition-all duration-500">Sachin RV</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href}
                className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-foreground/50 hover:text-blue-400 transition-all relative group flex items-center"
              >
                {item.name}
                <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-3 sm:space-x-6">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 sm:p-3 glass rounded-xl sm:rounded-2xl hover:bg-white/5 transition-all text-foreground/70 hover:text-blue-400 hover:rotate-12 transform-gpu h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            className="md:hidden p-2 sm:p-3 glass rounded-xl sm:rounded-2xl text-foreground/70 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <a href="/resume.pdf" download className="hidden lg:flex items-center space-x-2 px-6 py-3 bg-blue-500 rounded-2xl text-white font-black uppercase text-[10px] tracking-[0.2em] hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all">
             <span>Resume</span>
             <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute top-full left-0 right-0 mt-4 md:hidden glass rounded-[2.5rem] p-8 sm:p-10 border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
            <ul className="flex flex-col space-y-6 sm:space-y-8 relative">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-xl sm:text-2xl font-black block hover:text-blue-400 transition-colors uppercase tracking-[0.2em] text-foreground/80"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <div className="w-full h-px bg-white/5 my-4" />
              <li>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="w-full h-14 bg-blue-500 text-white font-black rounded-2xl flex items-center justify-center uppercase tracking-[0.2em] text-sm active:scale-95 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Resume <ArrowUpRight size={18} className="ml-3" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
