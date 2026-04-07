"use client"

import React, { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { UIExtras } from "@/components/ui/ui-extras"
import { motion, AnimatePresence } from "framer-motion"

// Optimized Section Hydration (Dynamic Imports)
const Hero = dynamic(() => import("@/components/sections/hero"), { ssr: true })
const Experience = dynamic(() => import("@/components/sections/experience"), { ssr: false })
const Projects = dynamic(() => import("@/components/sections/projects"), { ssr: false })
const Skills = dynamic(() => import("@/components/sections/skills"), { ssr: false })
const Contact = dynamic(() => import("@/components/sections/contact"), { ssr: false })
const PuzzleGame = dynamic(() => import("@/components/ui/puzzle-game").then(mod => mod.PuzzleGame), { ssr: false })

// AI Entry Component
const AIEntry = dynamic(() => import("@/components/AIEntry"), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [intent, setIntent] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main 
      className="relative w-full overflow-hidden bg-[#050505] transition-colors duration-500"
      data-theme={intent}
    >
      <AnimatePresence mode="wait">
        {!intent && (
          <AIEntry key="ai-entry" onSelect={(choice) => setIntent(choice)} />
        )}
      </AnimatePresence>

      {/* Global Performance Layer */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/[0.03] blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/[0.03] blur-[120px] pointer-events-none z-0" />

      <AnimatePresence>
        {intent && (
          <motion.div
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full relative z-10 flex flex-col items-center"
          >
            <Navbar />
            
            <Suspense fallback={<div className="h-screen w-full bg-[#050505]" />}>
               <Hero />
               <Experience />
               <Projects />
               <Skills />
               <PuzzleGame />
               <Contact />
            </Suspense>

            <Footer />
            <UIExtras />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
