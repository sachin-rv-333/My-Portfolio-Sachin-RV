"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import Tilt from "react-parallax-tilt"
import { ExternalLink, Code2, Layers, Cpu, MessageSquare, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "QuickCred",
    subtitle: "FinTech Loan Dashboard",
    description: "Admin dashboard for loan issuance & tracking featuring EMI scheduling and real-time interest calculations.",
    tech: ["React.js", "TypeScript", "MongoDB", "MERN"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "sachin-rv-333/quickcred",
    icon: <Layers size={24} className="text-blue-400 shrink-0" />
  },
  {
    title: "TicketForge AI",
    subtitle: "Event Platform",
    description: "AI-powered ticket booking system with Razorpay integration and dynamic pricing using TensorFlow.js.",
    tech: ["Next.js", "TensorFlow.js", "Node.js", "Razorpay"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "sachin-rv-333/ticketforge-ai",
    icon: <Cpu size={24} className="text-purple-400 shrink-0" />
  },
  {
    title: "Real-Time Chat App",
    subtitle: "Communications Hub",
    description: "Full-featured messaging platform supporting file sharing, plus video and audio calls via WebRTC.",
    tech: ["Socket.IO", "WebRTC", "Express", "Node.js"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800",
    link: "#",
    github: "sachin-rv-333/realtime-chat-app",
    icon: <MessageSquare size={24} className="text-cyan-400 shrink-0" />
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden w-full">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
             <span className="text-blue-400 font-extrabold tracking-[0.3em] uppercase text-[9px] sm:text-[10px] mb-3 sm:mb-4">Innovation</span>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-4 sm:mb-6">Featured Creations</h2>
             <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
             <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-xl mt-6 sm:mt-8 font-medium">A selection of my best engineering work, bridging complex logic with sleek user experiences.</p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <SectionReveal key={project.title} delay={0.2 * (index + 1)}>
              <Tilt
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#60A5FA"
                glarePosition="all"
                scale={1.03}
                className="h-full w-full"
              >
                <div 
                  className="glass group rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 overflow-hidden h-full flex flex-col hover-glow transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 glass p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-white/10 group-hover:scale-110 transition-transform transform-gpu duration-500">
                      {project.icon}
                    </div>

                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex space-x-2 sm:space-x-3">
                       <a href={`https://github.com/${project.github}`} className="p-2 sm:p-3 glass rounded-full text-foreground/70 hover:bg-blue-500 hover:text-white transition-all transform hover:rotate-12 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center">
                        <Code2 size={18} />
                       </a>
                       <a href={project.link} className="p-2 sm:p-3 glass rounded-full text-foreground/70 hover:bg-purple-500 hover:text-white transition-all transform hover:rotate-12 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center">
                        <ExternalLink size={18} />
                       </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-10 flex flex-col flex-grow">
                    <div className="flex flex-col mb-4 sm:mb-6">
                      <span className="text-blue-400/70 font-black uppercase text-[8px] sm:text-[9px] tracking-[0.2em] mb-1 sm:mb-2 break-words">{project.subtitle}</span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black group-hover:gradient-text transition-all duration-500 break-words">{project.title}</h3>
                    </div>
                    
                    <p className="text-sm sm:text-base text-foreground/60 leading-relaxed mb-6 sm:mb-8 flex-grow font-medium break-words">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 sm:mb-10 opacity-70 group-hover:opacity-100 transition-opacity">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 sm:px-4 py-1 sm:py-1.5 glass rounded-full border border-white/5 text-[9px] sm:text-[10px] font-black tracking-widest text-[#60A5FA]/80 uppercase break-all">{t}</span>
                      ))}
                    </div>

                    <div className="w-full h-px bg-white/5 mb-6 sm:mb-8" />
                    
                    <button className="flex items-center text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40 hover:text-blue-400 group/btn transition-colors h-10">
                       View Case Study
                       <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-2 transition-transform shrink-0" />
                    </button>
                  </div>
                </div>
              </Tilt>
            </SectionReveal>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0" />
    </section>
  )
}
