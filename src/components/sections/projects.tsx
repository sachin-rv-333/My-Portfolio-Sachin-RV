"use client"

import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Monitor, Smartphone, Code, Cpu, Globe } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import Image from "next/image"

const Projects = () => {
  const projects = useMemo(() => [
    {
      title: "QuickCred – Loan Dashboard",
      description: "A comprehensive loan tracking and repayment tracking system. Built with Next.js, TypeScript, and MongoDB for highly efficient management and real-time dashboard analytics.",
      image: "https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&q=80&w=1200",
      tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
      github: "https://github.com/sachin-rv-333",
      demo: "#",
      category: "FinTech"
    },
    {
      title: "TicketForge AI – Event Platform",
      description: "A full-scale event management and booking platform featuring AI-driven pricing and Razorpay integration for seamless transactions and real-time seat tracking.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
      tags: ["React", "Express", "Razorpay", "AI Logic"],
      github: "https://github.com/sachin-rv-333",
      demo: "#",
      category: "Marketplace"
    },
    {
      title: "Real-Time Chat App",
      description: "A cross-platform communication tool using Socket.IO and WebRTC. Integrated high-performance messaging and video calling features for low-latency interactions.",
      image: "https://images.unsplash.com/photo-1611746192302-3f9ed0f74681?auto=format&fit=crop&q=80&w=1200",
      tags: ["Socket.IO", "WebRTC", "Node.js", "Express"],
      github: "https://github.com/sachin-rv-333",
      demo: "#",
      category: "Social"
    }
  ], [])

  return (
    <section id="projects" className="py-24 relative overflow-hidden w-full bg-[#050505]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <div className="flex flex-col items-center mb-16 sm:mb-24 text-center">
             <span className="text-blue-400 font-extrabold tracking-[0.5em] uppercase text-[10px] mb-4">Neural Repository</span>
             <h2 className="text-4xl sm:text-7xl font-black gradient-text mb-6 tracking-tighter">Professional Projects</h2>
             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-full mb-10" />
             <p className="text-lg text-foreground/40 max-w-xl font-semibold leading-relaxed">A documented collection of high-performance digital architectures and modern engineering patterns.</p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <SectionReveal key={project.title} delay={0.15 * (index + 1)} className="h-full">
              <div 
                className="bento-card group rounded-[3.5rem] border-white/10 overflow-hidden h-full flex flex-col hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Image Container with Responsive Sizes */}
                <div className="relative h-64 overflow-hidden bg-[#1E293B]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-blue-500/20 text-blue-400 backdrop-blur-md rounded-2xl border border-blue-500/20 text-[10px] font-black uppercase tracking-widest">
                     {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-grow space-y-6">
                  <h3 className="text-2xl sm:text-4xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tight leading-none uppercase">{project.title}</h3>
                  <p className="text-base text-foreground/40 leading-relaxed font-semibold line-clamp-3">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[#1E293B] text-[9px] font-black text-blue-400/60 rounded-lg uppercase tracking-wider border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-10 flex items-center space-x-6">
                    <a 
                      href={project.github} 
                      className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 hover:text-white transition-all flex-1 justify-center sm:flex-none py-4 bg-white/5 rounded-2xl sm:bg-transparent sm:py-0"
                    >
                      <Code size={16} className="text-blue-500" />
                      <span>Repo</span>
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white text-[10px] font-black uppercase tracking-[0.2em] hover:shadow-xl active:scale-95 transition-all flex-[2] justify-center"
                    >
                      <span>Launch</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(Projects)
