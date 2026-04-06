"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[11000] flex items-center justify-center bg-[#0B0B0B] w-full h-full overflow-hidden"
        >
          {/* Subtle noise texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] w-full h-full" />
          
          <div className="relative flex flex-col items-center px-4">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: [0, 5, -5, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="mb-8 relative flex flex-col items-center"
            >
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full w-full" />
              <span className="text-4xl sm:text-6xl font-black gradient-text tracking-tighter whitespace-nowrap">Sachin RV</span>
            </motion.div>

            {/* Subtext */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center w-full"
            >
              <span className="text-white/40 text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase font-black text-center whitespace-nowrap">Portfolio Experience</span>
              <div className="w-32 sm:w-48 h-[1px] bg-white/5 mt-4 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
