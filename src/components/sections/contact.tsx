"use client"

import { useRef, useState } from "react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Mail, Phone, Briefcase, Code2, Send, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
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

    // TEMPORARY DEBUG: Ensure these are not undefined in your browser console
    console.log({
      service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    });

    if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID === "") {
      console.error("Transmission Error: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID is missing.");
      setStatus("error");
      setLoading(false);
      return;
    }

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
      // Reset status after a few seconds
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden w-full">
      {/* Background Decor */}
      <div className="absolute -bottom-24 -left-24 w-60 sm:w-[600px] h-60 sm:h-[600px] bg-blue-500 blur-[80px] sm:blur-[200px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-40 sm:w-[400px] h-40 sm:h-[400px] bg-purple-500 blur-[80px] sm:blur-[200px] opacity-[0.03] pointer-events-none" />
      
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col items-center mb-12 sm:mb-20 text-center px-4">
            <span className="text-blue-400 font-extrabold tracking-[0.4em] uppercase text-[9px] sm:text-[10px] mb-3 sm:mb-4">Connection</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-4 sm:mb-6">Project Transmission</h2>
             <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
            <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-xl mt-6 sm:mt-8 font-medium">Ready to initiate your next project? Use the terminal below to send a secure transmission.</p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start max-w-6xl mx-auto">
          {/* Info Side */}
          <SectionReveal delay={0.4}>
            <div className="space-y-6">
              <div className="glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-white/10 flex flex-row items-center space-x-6 sm:space-x-8 hover-glow group transition-all duration-500 w-full overflow-hidden">
                <div className="p-4 sm:p-5 bg-blue-500/10 rounded-xl sm:rounded-2xl text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                  <Mail size={24} />
                </div>
                <div className="min-w-0 flex-grow">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-1 sm:mb-2 leading-none">Primary Email</h3>
                  <a href="mailto:sachinrv19@gmail.com" className="text-base sm:text-lg lg:text-xl font-bold hover:text-blue-400 transition-all block break-all leading-tight">sachinrv19@gmail.com</a>
                </div>
              </div>

              <div className="glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-white/10 flex flex-row items-center space-x-6 sm:space-x-8 hover-glow group transition-all duration-500 w-full overflow-hidden">
                <div className="p-4 sm:p-5 bg-cyan-500/10 rounded-xl sm:rounded-2xl text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                  <Phone size={24} />
                </div>
                <div className="min-w-0 flex-grow">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-foreground/30 mb-1 sm:mb-2 leading-none">Direct Line</h3>
                  <a href="tel:+919110869514" className="text-base sm:text-lg lg:text-xl font-bold hover:text-cyan-400 transition-all block break-all leading-tight">+91 91108 69514</a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-12 w-full">
                <div className="flex gap-4 sm:gap-5 flex-grow">
                  <a href="https://www.linkedin.com/in/sachin-rv-70a505293/" className="flex-1 p-6 glass rounded-[2rem] border border-white/10 hover:bg-blue-500 hover:text-white hover:-translate-y-2 transition-all duration-300 flex items-center justify-center h-16 sm:h-20 active:scale-95">
                    <Briefcase size={28} />
                  </a>
                  <a href="https://github.com/sachin-rv-333" className="flex-1 p-6 glass rounded-[2rem] border border-white/10 hover:bg-foreground hover:text-background hover:-translate-y-2 transition-all duration-300 flex items-center justify-center h-16 sm:h-20 active:scale-95">
                    <Code2 size={28} />
                  </a>
                </div>
                <div className="glass px-6 sm:px-8 py-5 sm:py-6 rounded-[2rem] border border-white/10 flex items-center justify-center space-x-4 h-16 sm:h-20 w-full sm:w-auto">
                  <MapPin size={24} className="text-blue-400 opacity-60 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-foreground/40 whitespace-nowrap overflow-hidden text-ellipsis">Bangalore, IN</span>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Form Side */}
          <SectionReveal delay={0.6}>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/10 space-y-6 sm:space-y-8 relative overflow-hidden w-full"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />
               
               <div className="space-y-4 sm:space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 px-2 leading-none">Your Name</label>
                    <input 
                      required
                      name="name" 
                      type="text" 
                      placeholder="e.g. Elon Musk" 
                      className="w-full bg-white/3 border border-white/5 rounded-2xl px-6 sm:px-7 py-4 sm:py-5 outline-none focus:border-blue-400/50 focus:bg-white/5 transition-all font-medium text-foreground/80 h-12 sm:h-16" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 px-2 leading-none">Email Address</label>
                    <input 
                      required
                      name="email" 
                      type="email" 
                      placeholder="e.g. elon@mars.com" 
                      className="w-full bg-white/3 border border-white/5 rounded-2xl px-6 sm:px-7 py-4 sm:py-5 outline-none focus:border-cyan-400/50 focus:bg-white/5 transition-all font-medium text-foreground/80 h-12 sm:h-16" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-foreground/30 px-2 leading-none">Project Description</label>
                    <textarea 
                      required
                      name="message" 
                      rows={4} 
                      placeholder="Tell me about your amazing vision..." 
                      className="w-full bg-white/3 border border-white/5 rounded-2xl px-6 sm:px-7 py-4 sm:py-5 outline-none focus:border-purple-400/50 focus:bg-white/5 transition-all resize-none font-medium text-foreground/80 min-h-[140px]" 
                    />
                 </div>
               </div>
               
               <button 
                  disabled={loading}
                  type="submit"
                  className="w-full h-14 sm:h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-black rounded-2xl flex items-center justify-center space-x-4 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(96,165,250,0.2)] active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed group"
               >
                  {loading ? (
                    <>
                      <span className="uppercase tracking-[0.2em] text-[10px] sm:text-xs">Processing Transmssion</span>
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span className="uppercase tracking-[0.2em] text-[10px] sm:text-xs">Initiate Transmission</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
               </button>

               {/* Feedback Messages */}
               <AnimatePresence>
                 {status === "success" && (
                   <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center space-x-2 text-green-400 font-bold text-sm bg-green-400/10 py-3 rounded-xl border border-green-400/20"
                   >
                     <CheckCircle2 size={16} />
                     <span>Transmission Delivered Successfully!</span>
                   </motion.div>
                 )}
                 {status === "error" && (
                   <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center space-x-2 text-red-400 font-bold text-sm bg-red-400/10 py-3 rounded-xl border border-red-400/20"
                   >
                     <AlertCircle size={16} />
                     <span>Transmission Failed. Please try later.</span>
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
