"use client"

import React, { useEffect, useState, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Briefcase, Code2, Eye, Brain, Loader2 } from "lucide-react"

export type Intent = "hiring" | "developer" | "visitor" | null

interface IntentSelectorProps {
  onSelect: (intent: Intent) => void
}

const IntentSelector = ({ onSelect }: IntentSelectorProps) => {
  const [showOptions, setShowOptions] = useState(false)
  const [audioPlayed, setAudioPlayed] = useState(false)

  const speakIntro = useCallback(() => {
    if (!audioPlayed) {
      const voice = new SpeechSynthesisUtterance("Hey, welcome to Sachin's portfolio")
      voice.rate = 0.95
      voice.pitch = 1.05
      window.speechSynthesis.speak(voice)
      setAudioPlayed(true)
    }
  }, [audioPlayed])

  useEffect(() => {
    const timer = setTimeout(() => {
      speakIntro()
      setTimeout(() => setShowOptions(true), 1200)
    }, 500)
    return () => clearTimeout(timer)
  }, [speakIntro])

  const intents = useMemo(() => [
    { 
      id: "hiring" as Intent, 
      label: "Hire Me 💼", 
      desc: "For recruiters & career discussions",
      color: "border-blue-500/20 hover:border-blue-500/60"
    },
    { 
      id: "developer" as Intent, 
      label: "Developer 👨‍💻", 
      desc: "Exploring tech & open source",
      color: "border-purple-500/20 hover:border-purple-500/60"
    },
    { 
      id: "visitor" as Intent, 
      label: "Just Visiting 👀", 
      desc: "Checking out the visuals & flow",
      color: "border-emerald-500/20 hover:border-emerald-500/60"
    }
  ], [])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{ willChange: "opacity" }}
      className="fixed inset-0 z-[190] bg-[#050505] flex items-center justify-center p-6 text-center"
    >
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="h-16 flex items-center justify-center mb-10 overflow-hidden">
          <span className="text-xl sm:text-4xl font-black gradient-text tracking-tight">
            <Typewriter
              words={["I'm your AI guide...", "Searching Neural Network...", "Synthesizing Profile..."]}
              loop={1}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </div>

        <AnimatePresence>
          {showOptions && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
            >
              {intents.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (idx + 1) }}
                  onClick={() => onSelect(item.id)}
                  style={{ willChange: "transform, opacity" }}
                  className={`
                    p-10 glass rounded-[2.5rem] flex flex-col items-center space-y-6 transition-all duration-300 border shadow-lg group hover:scale-[1.03] active:scale-95
                    ${item.color}
                  `}
                >
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                     {item.id === "hiring" && <Briefcase className="text-blue-500" />}
                     {item.id === "developer" && <Code2 className="text-purple-500" />}
                     {item.id === "visitor" && <Eye className="text-emerald-500" />}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-white">{item.label}</h3>
                    <p className="text-[10px] text-foreground/40 font-black uppercase tracking-widest">{item.desc}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!showOptions && (
          <div className="flex flex-col items-center space-y-4 opacity-50">
             <Loader2 size={32} className="animate-spin text-blue-500" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Initializing Core</span>
          </div>
        )}
      </div>

      <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-purple-500/5 blur-[120px] pointer-events-none" />
    </motion.div>
  )
}

export default React.memo(IntentSelector)
