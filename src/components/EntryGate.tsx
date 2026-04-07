"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldAlert, AlertCircle, Terminal, CheckCircle2 } from "lucide-react"

interface EntryGateProps {
  onComplete: () => void
}

export default function EntryGate({ onComplete }: EntryGateProps) {
  const [hoverCount, setHoverCount] = useState(0)
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 })
  const [phase, setPhase] = useState<"challenge" | "glitch" | "reveal">("challenge")

  const handleHover = useCallback(() => {
    if (hoverCount < 3) {
      const x = (Math.random() - 0.5) * 400
      const y = (Math.random() - 0.5) * 400
      setButtonPos({ x, y })
      setHoverCount(prev => prev + 1)
    } else {
      setButtonPos({ x: 0, y: 0 })
    }
  }, [hoverCount])

  const startTransition = () => {
    if (hoverCount >= 3) {
      setPhase("glitch")
      setTimeout(() => {
        setPhase("reveal")
      }, 1500)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center p-6 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {phase === "challenge" && (
          <motion.div 
            key="challenge"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center space-y-12 text-center"
          >
            <div className="space-y-4">
              <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px]">Security Barrier://Active</span>
              <h2 className="text-4xl sm:text-6xl font-black gradient-text">Neural Handshake Required</h2>
            </div>

            <motion.button
              onMouseEnter={handleHover}
              onClick={startTransition}
              animate={{ x: buttonPos.x, y: buttonPos.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              style={{ willChange: "transform" }}
              className={`
                h-20 px-12 glass rounded-3xl font-black uppercase tracking-[0.3em] text-xs transition-all duration-300 border border-white/10
                ${hoverCount >= 3 ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20 active:scale-95" : "text-white/40"}
              `}
            >
              {hoverCount < 3 ? "Enter Portfolio" : "Access Granted"}
            </motion.button>
          </motion.div>
        )}

        {phase === "glitch" && (
          <motion.div 
            key="glitch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center space-y-8 animate-glitch"
          >
            <ShieldAlert size={80} className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
            <div className="text-center space-y-3">
               <h3 className="text-4xl font-black text-red-500 uppercase tracking-tighter">❌ 404 – Access Denied</h3>
               <p className="text-red-500/60 font-black uppercase text-[10px] tracking-[0.4em]">"You are not authorized"</p>
            </div>
          </motion.div>
        )}

        {phase === "reveal" && (
          <motion.div 
            key="reveal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-10 text-center"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 mb-4">
               <CheckCircle2 size={40} className="text-green-500" />
            </div>
            <div className="space-y-4">
               <h3 className="text-2xl sm:text-4xl font-black text-white px-2 leading-tight">Just kidding 😄</h3>
               <p className="text-foreground/40 font-black uppercase text-[10px] tracking-[0.3em]">Welcome to Sachin&apos;s Portfolio</p>
            </div>
            <button 
              onClick={onComplete}
              className="mt-8 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-black rounded-2xl uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
               Continue Journey
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optimized Background Artifacts */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
         <div className="w-full h-full bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
    </motion.div>
  )
}
