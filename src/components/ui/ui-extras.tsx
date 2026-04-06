"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { MessageSquarePlus } from "lucide-react"

export function UIExtras() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-[#60A5FA] via-[#A855F7] to-[#22D3EE] z-[120] origin-left pointer-events-none"
      />

      {/* Floating Hire Me Button - Repositioned for mobile useability */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="fixed bottom-20 sm:bottom-10 right-4 sm:right-10 z-[80] p-4 sm:p-5 bg-gradient-to-br from-blue-500/90 to-purple-600/90 text-white rounded-full shadow-[0_0_30px_rgba(96,165,250,0.4)] backdrop-blur-xl flex items-center space-x-2 group overflow-hidden border border-white/20 active:scale-95"
      >
        <MessageSquarePlus size={24} className="shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-black uppercase text-[10px] sm:text-xs tracking-widest group-hover:max-w-[100px] transition-all duration-500 ease-in-out">
          Hire Me
        </span>
      </motion.a>

      {/* Background Subtle Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[110] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] w-full h-full" />
    </>
  )
}
