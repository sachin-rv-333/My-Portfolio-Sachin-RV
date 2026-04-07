"use client"

import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Building2, Rocket, GraduationCap } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const ExperienceArea = () => {
  const experiences = useMemo(() => [
    {
      company: "WYSBRYX Technologies Pvt Ltd.",
      role: "Full Stack Developer Intern",
      period: "Sep 2025 – Present",
      location: "Bangalore, India",
      description: "Building production-ready full-stack applications using React, Node.js, and TypeScript. Developing robust REST APIs with both SQL/NoSQL databases and creating specialized admin dashboards for user management and real-time analytics.",
      icon: <Briefcase size={28} className="text-blue-500" />,
      type: "work"
    },
    {
      company: "Shri Devi Degree College",
      role: "BCA Graduate",
      period: "2021 – 2024",
      location: "Tumkur, Karnataka",
      description: "Completed my Bachelor of Computer Applications with a focus on core software engineering principles, web systems, and database management.",
      icon: <GraduationCap size={28} className="text-cyan-500" />,
      type: "edu"
    }
  ], [])

  return (
    <section id="experience" className="py-24 relative overflow-hidden w-full bg-[#050505]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <div className="flex flex-col items-center mb-16 sm:mb-24 text-center">
             <span className="text-blue-400 font-black tracking-[0.5em] uppercase text-[10px] mb-4">Neural Milestones</span>
             <h2 className="text-4xl sm:text-7xl font-black gradient-text mb-6">Experience & Education</h2>
             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-full" />
             <p className="text-lg text-foreground/40 max-w-xl mt-8 font-semibold">A detailed journey of specialized technical growth and academic foundations.</p>
          </div>
        </SectionReveal>

        <div className="max-w-4xl mx-auto flex flex-col space-y-12">
          {experiences.map((exp, index) => (
            <SectionReveal key={exp.company} delay={0.15 * (index + 1)}>
              <div 
                className="bento-card p-10 sm:p-14 rounded-[3.5rem] flex flex-col md:flex-row gap-10 items-start hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] transition-all duration-300"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="shrink-0 p-6 bg-[#1E293B] rounded-3xl border border-white/5 shadow-2xl self-start md:self-auto">
                   {exp.icon}
                </div>

                <div className="flex-grow space-y-8 w-full">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="text-2xl sm:text-4xl font-black text-white leading-none uppercase">{exp.role}</h3>
                      <span className="px-5 py-2 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-[10px] font-black uppercase tracking-widest text-blue-400">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-8 text-[11px] font-black uppercase tracking-[0.4em] text-foreground/40">
                      <span className="flex items-center gap-3"><Calendar size={14} className="text-blue-500" /> {exp.period}</span>
                      <span className="flex items-center gap-3"><MapPin size={14} className="text-cyan-500" /> {exp.location}</span>
                    </div>
                  </div>

                  <p className="text-base sm:text-xl text-foreground/60 font-bold leading-relaxed tracking-tight">
                    {exp.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 pt-6 border-t border-white/5 opacity-50">
                     <div className="w-10 h-10 bg-[#1E293B] rounded-xl flex items-center justify-center text-blue-400">
                        {exp.type === "work" ? <Building2 size={18} /> : <Rocket size={18} />}
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40">Verification Protocol Applied</span>
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

export default React.memo(ExperienceArea)
