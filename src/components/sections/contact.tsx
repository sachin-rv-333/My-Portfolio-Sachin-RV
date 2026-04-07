"use client"

import { useRef, useState } from "react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Mail, Phone, Send, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import { AnimatePresence, motion } from "framer-motion"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setLoading(true)
    setStatus("idle")

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      setStatus("success")
      formRef.current.reset()
    } catch (error: any) {
      console.error("EmailJS Error:", error?.text || error)
      setStatus("error")
    } finally {
      setLoading(false)
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const socialLinks = [
    { title: "Primary ID", value: "sachinrv19@gmail.com", href: "mailto:sachinrv19@gmail.com", icon: <Mail size={24} className="text-blue-500" /> },
    { title: "Direct Contact", value: "+91 91108 69514", href: "tel:+919110869514", icon: <Phone size={24} className="text-cyan-500" /> }
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden w-full bg-[#050505]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <div className="flex flex-col items-center mb-16 sm:mb-24 text-center">
             <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-[10px] mb-4">Neural Nexus</span>
             <h2 className="text-4xl sm:text-7xl font-black gradient-text mb-6">Contact Matrix</h2>
             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-full" />
             <p className="text-lg text-foreground/40 max-w-xl mt-8 font-semibold">Initiate secure project transmission and technical inquiries below.</p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-stretch max-w-7xl mx-auto">
          {/* Info Side */}
          <SectionReveal delay={0.4}>
            <div className="flex flex-col h-full space-y-8">
              {socialLinks.map((item) => (
                <div 
                  key={item.title}
                  className="bento-card p-10 sm:p-14 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 bg-[#0F172A]"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="p-6 bg-[#1E293B] rounded-3xl border border-white/5 shadow-2xl shrink-0 transition-transform hover:rotate-6">
                      {item.icon}
                    </div>
                    <div className="flex flex-col space-y-2">
                       <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-foreground/20 leading-none">{item.title}</span>
                       <a href={item.href} className="text-xl sm:text-3xl font-black text-white hover:text-blue-400 transition-all break-all leading-tight">{item.value}</a>
                    </div>
                  </div>
                  <div className="w-full md:w-auto h-px md:h-12 bg-white/5 mx-6" />
                </div>
              ))}

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-10 px-6 text-foreground/40 font-black uppercase tracking-[0.4em] text-[10px] sm:text-sm">
                 <div className="flex items-center gap-4">
                   <MapPin size={18} className="text-blue-500 shrink-0" />
                   <span>Bangalore Cluster, India</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                   <span>Primary Location Active</span>
                 </div>
              </div>
            </div>
          </SectionReveal>

          {/* Form Side */}
          <SectionReveal delay={0.6}>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="bento-card bg-[#0F172A] p-10 sm:p-16 rounded-[4rem] flex flex-col space-y-12 relative overflow-hidden"
            >
               <div className="space-y-10">
                 <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 px-4">Neural Identity</label>
                    <input 
                      required
                      name="name" 
                      type="text" 
                      placeholder="Input ID..." 
                      className="w-full bg-[#1E293B] border border-white/5 rounded-3xl px-10 py-6 outline-none focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/10 transition-all font-black text-white placeholder:text-foreground/10 h-16 sm:h-20 shadow-inner" 
                    />
                 </div>
                 <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 px-4">Packet Source</label>
                    <input 
                      required
                      name="email" 
                      type="email" 
                      placeholder="Input Source..." 
                      className="w-full bg-[#1E293B] border border-white/5 rounded-3xl px-10 py-6 outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all font-black text-white placeholder:text-foreground/10 h-16 sm:h-20 shadow-inner" 
                    />
                 </div>
                 <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 px-4">Stream Payload</label>
                    <textarea 
                      required
                      name="message" 
                      rows={4} 
                      placeholder="Input Vision..." 
                      className="w-full bg-[#1E293B] border border-white/5 rounded-3xl px-10 py-8 outline-none focus:border-emerald-500/40 focus:ring-4 focus:ring-emerald-500/10 transition-all resize-none font-black text-white placeholder:text-foreground/10 min-h-[220px] shadow-inner" 
                    />
                 </div>
               </div>
               
               <button 
                  disabled={loading}
                  type="submit"
                  className="w-full h-18 sm:h-24 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 text-white font-black rounded-3xl flex items-center justify-center space-x-6 shadow-xl hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed uppercase tracking-[0.3em] text-[10px]"
               >
                  {loading ? (
                    <>
                      <span>Transmitting Payload</span>
                      <Loader2 size={24} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Initiate Handshake</span>
                      <Send size={24} className="shrink-0" />
                    </>
                  )}
               </button>

               <AnimatePresence>
                 {status === "success" && (
                   <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-center space-x-4 text-emerald-400 font-bold text-sm bg-emerald-400/10 py-6 rounded-3xl border border-emerald-400/20 shadow-2xl"
                   >
                     <CheckCircle2 size={20} className="shrink-0" />
                     <span className="uppercase tracking-[0.3em] text-[10px]">Payload Delivered Successfully 🎉</span>
                   </motion.div>
                 )}
                 {status === "error" && (
                   <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-center space-x-4 text-red-400 font-bold text-sm bg-red-400/10 py-6 rounded-3xl border border-red-400/20 shadow-2xl"
                   >
                     <AlertCircle size={20} className="shrink-0" />
                     <span className="uppercase tracking-[0.3em] text-[10px]">Transmission Error Detected ❌</span>
                   </motion.div>
                 )}
               </AnimatePresence>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
