"use client"

import { Preloader } from "@/components/ui/preloader"
import { Navbar } from "@/components/ui/navbar"
import Hero from "@/components/sections/hero"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"
import { Footer } from "@/components/ui/footer"
import { UIExtras } from "@/components/ui/ui-extras"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <Preloader />
      
      <AnimatePresence mode="wait">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2.8, duration: 1 }}
           className="w-full flex flex-col items-center"
        >
          <Navbar />
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
          <UIExtras />
        </motion.div>
      </AnimatePresence>

      {/* Global Background Glows - Fixed sizing to avoid overflow */}
      <div className="fixed top-[-5%] sm:top-[-10%] right-[-5%] sm:right-[-10%] w-[40%] sm:w-[50%] h-[40%] sm:h-[50%] bg-blue-500/5 blur-[120px] sm:blur-[200px] pointer-events-none z-[-1] overflow-hidden" />
      <div className="fixed bottom-[-5%] sm:bottom-[-10%] left-[-5%] sm:left-[-10%] w-[40%] sm:w-[50%] h-[40%] sm:h-[50%] bg-purple-500/5 blur-[120px] sm:blur-[200px] pointer-events-none z-[-1] overflow-hidden" />
    </main>
  )
}
