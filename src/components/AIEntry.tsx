"use client"

import React, { useEffect, useState, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Briefcase, Code2, Eye, Loader2 } from "lucide-react"

interface AIEntryProps {
  onSelect: (choice: string) => void
}

const AIEntry = ({ onSelect }: AIEntryProps) => {
  const [showOptions, setShowOptions] = useState(false)
  const [voicePlayed, setVoicePlayed] = useState(false)

  const playVoice = useCallback(() => {
    if (!voicePlayed && typeof window !== "undefined" && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance("Hey, welcome to Sachin's portfolio")
      utterance.rate = 0.9
      utterance.pitch = 1
      window.speechSynthesis.speak(utterance)
      setVoicePlayed(true)
    }
  }, [voicePlayed])

  useEffect(() => {
    const timer = setTimeout(() => {
      playVoice()
      setTimeout(() => setShowOptions(true), 1500)
    }, 500)
    return () => clearTimeout(timer)
  }, [playVoice])

  const intents = useMemo(() => [
    { 
      id: "hiring", 
      icon: <Briefcase size={28} />, 
      title: "Hire Me 💼", 
      desc: "Recruitment & Teams",
      theme: "border-yellow-500/20 hover:border-yellow-500 group-hover:shadow-yellow-500/20"
    },
    { 
      id: "developer", 
      icon: <Code2 size={28} />, 
      title: "Developer 👨‍💻", 
      desc: "Tech & Networking",
      theme: "border-blue-500/20 hover:border-blue-500 group-hover:shadow-blue-500/20"
    },
    { 
      id: "visitor", 
      icon: <Eye size={28} />, 
      title: "Just Visiting 👀", 
      desc: "Visuals & Design",
      theme: "border-purple-500/20 hover:border-purple-500 group-hover:shadow-purple-500/20"
    }
  ], [])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="max-w-4xl w-full">
        <div className="h-24 sm:h-32 mb-10 overflow-hidden flex items-center justify-center">
          <span className="text-2xl sm:text-4xl font-black text-white/90 tracking-tight">
            <Typewriter
              words={["Hi 👋 I'm Sachin's AI assistant...", "Why are you here today?"]}
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
            >
              {intents.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => onSelect(item.id)}
                  className={`
                    p-10 bg-[#0F172A] border rounded-[2.5rem] flex flex-col items-center space-y-6 transition-all duration-300 group hover:scale-[1.05] hover:shadow-2xl
                    ${item.theme}
                  `}
                >
                  <div className="p-5 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform text-white/40 group-hover:text-white">
                     {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">{item.title}</h3>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">{item.desc}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!showOptions && (
          <div className="flex items-center space-x-3 text-white/20 justify-center">
             <Loader2 size={20} className="animate-spin" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Initializing Options</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default AIEntry
