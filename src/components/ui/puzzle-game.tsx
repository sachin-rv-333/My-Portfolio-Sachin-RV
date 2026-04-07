"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, CheckCircle, XCircle, RotateCcw, PartyPopper } from "lucide-react"

export function PuzzleGame() {
  const questions = useMemo(() => [
    { q: "0.1 + 0.2 === 0.3 ?", a: false, desc: "Floating point arithmetic uses IEEE-754 logic." },
    { q: "typeof NaN ?", a: "number", desc: "NaN stands for Not-a-Number, but its type is number." },
    { q: "[] == false ?", a: true, desc: "Empty arrays are coerced to false in loose equality." },
    { q: ' "5" - 3 ?', a: 2, desc: "Subtraction operator coerces strings to numbers." },
    { q: "null == undefined ?", a: true, desc: "Null and undefined are equal in loose equality." }
  ], [])

  const [currentQuestion, setCurrentQuestion] = useState<any>(null)
  const [selected, setSelected] = useState<any>(null)
  
  // Randomize on reload
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length)
    setCurrentQuestion(questions[randomIndex])
  }, [questions])

  const handleAnswer = (ans: any) => {
    setSelected(ans)
  }

  const reset = () => {
    const randomIndex = Math.floor(Math.random() * questions.length)
    setCurrentQuestion(questions[randomIndex])
    setSelected(null)
  }

  if (!currentQuestion) return null

  return (
    <section id="puzzle" className="py-24 relative overflow-hidden w-full bg-[#050505]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16 sm:mb-24 text-center">
          <span className="text-blue-500 font-extrabold tracking-[0.5em] uppercase text-[10px] mb-4">Neural Playground</span>
          <h2 className="text-4xl sm:text-7xl font-black gradient-text mb-6">Interactive Riddle</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-full" />
          <p className="text-lg text-foreground/40 max-w-xl mt-8 font-semibold">A randomized technical challenge for modern web engineers.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bento-card bg-[#0F172A] rounded-[4rem] p-12 sm:p-20 border-white/10 relative overflow-hidden group shadow-2xl"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="flex flex-col items-center space-y-14 relative z-10 text-center">
              <div className="p-6 bg-blue-500 text-white rounded-[2.5rem] shadow-2xl active:scale-95 transition-all cursor-pointer">
                <Brain size={48} />
              </div>

              <div className="space-y-8 w-full">
                <h3 className="text-2xl sm:text-3xl font-black text-white px-2 leading-tight uppercase tracking-tight">
                  🧠 Solve this challenge
                </h3>
                <div className="bg-[#1E293B] p-10 rounded-[2.5rem] border border-white/5 font-black text-2xl sm:text-3xl text-blue-400 shadow-inner overflow-hidden break-words">
                  <span className="opacity-10 mr-4 uppercase tracking-[0.4em] text-[10px] block mb-2">Kernel Protocol:</span>
                  {currentQuestion.q}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Dynamically render options based on question type */}
                {typeof currentQuestion.a === "boolean" ? (
                  <>
                    <button
                      onClick={() => handleAnswer(true)}
                      disabled={selected !== null}
                      className={`flex items-center justify-center space-x-3 py-8 rounded-[2.2rem] font-black uppercase tracking-[0.4em] text-[10px] transition-all duration-300 border-2
                        ${selected === true ? (currentQuestion.a === true ? "bg-green-500/10 border-green-500/50 text-green-500" : "bg-red-500/10 border-red-500/50 text-red-500") : "bg-white/[0.03] border-white/5 text-foreground/30 hover:text-blue-400"}`}
                    >
                       true
                    </button>
                    <button
                      onClick={() => handleAnswer(false)}
                      disabled={selected !== null}
                      className={`flex items-center justify-center space-x-3 py-8 rounded-[2.2rem] font-black uppercase tracking-[0.4em] text-[10px] transition-all duration-300 border-2
                        ${selected === false ? (currentQuestion.a === false ? "bg-green-500/10 border-green-500/50 text-green-500" : "bg-red-500/10 border-red-500/50 text-red-500") : "bg-white/[0.03] border-white/5 text-foreground/30 hover:text-blue-400"}`}
                    >
                       false
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleAnswer(currentQuestion.a)}
                      disabled={selected !== null}
                      className={`flex items-center justify-center space-x-3 py-8 rounded-[2.2rem] font-black uppercase tracking-[0.4em] text-[10px] transition-all duration-300 border-2
                        ${selected === currentQuestion.a ? "bg-green-500/10 border-green-500/50 text-green-500" : "bg-white/[0.03] border-white/5 text-foreground/30 hover:text-blue-400"}`}
                    >
                       {currentQuestion.a}
                    </button>
                    <button
                      onClick={() => handleAnswer("incorrect")}
                      disabled={selected !== null}
                      className={`flex items-center justify-center space-x-3 py-8 rounded-[2.2rem] font-black uppercase tracking-[0.4em] text-[10px] transition-all duration-300 border-2
                        ${selected === "incorrect" ? "bg-red-500/10 border-red-500/50 text-red-500" : "bg-white/[0.03] border-white/5 text-foreground/30 hover:text-blue-400"}`}
                    >
                       {typeof currentQuestion.a === "number" ? "NaN" : "undefined"}
                    </button>
                  </>
                )}
              </div>

              <AnimatePresence mode="wait">
                {selected !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="pt-6 w-full"
                  >
                    {selected === currentQuestion.a ? (
                      <div className="flex flex-col items-center space-y-6">
                        <div className="flex flex-wrap items-center justify-center gap-4 text-green-500 font-black">
                          <PartyPopper size={40} className="animate-bounce shrink-0" />
                          <span className="text-xl sm:text-2xl tracking-tighter">✅ Nice try! Thanks for solving 🎉</span>
                        </div>
                        <p className="text-foreground/40 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-center max-w-sm px-6 py-4 bg-white/[0.02] rounded-2xl border border-white/5">
                           {currentQuestion.desc}
                        </p>
                        <button onClick={reset} className="px-8 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase text-blue-500 hover:text-white transition-all active:scale-95">Try Next Challenge</button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center space-y-6">
                        <div className="flex flex-wrap items-center justify-center gap-4 text-red-500 font-black">
                          <XCircle size={40} className="shrink-0" />
                          <span className="text-xl sm:text-2xl tracking-tighter">❌ Try again!</span>
                        </div>
                        <button onClick={reset} className="px-8 py-3 bg-red-500/10 border border-red-500/20 rounded-2xl text-[10px] font-black uppercase text-red-600 hover:bg-red-500 hover:text-white transition-all active:scale-95 flex items-center space-x-3">
                           <RotateCcw size={16} />
                           <span>Reset Kernel</span>
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
