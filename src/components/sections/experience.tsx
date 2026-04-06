"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative overflow-hidden w-full">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
            <span className="text-blue-400 font-extrabold tracking-[0.3em] uppercase text-[9px] sm:text-[10px] mb-3 sm:mb-4">Journey</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-4 sm:mb-6">Professional Timeline</h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Experience side */}
          <SectionReveal delay={0.4}>
            <div className="flex flex-col h-full space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center space-x-3 mb-6 sm:mb-8 justify-center lg:justify-start">
                <Briefcase className="text-blue-400 shrink-0" size={24} />
                <span>Work Experience</span>
              </h3>

              <div className="glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 relative group hover-glow transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 sm:mb-8 gap-4">
                  <div className="flex flex-col">
                    <h4 className="text-xl sm:text-2xl font-black text-foreground/90 group-hover:text-blue-400 transition-colors break-words">WYSBRYX Technologies Pvt Ltd</h4>
                    <span className="text-blue-400/80 font-bold uppercase text-[9px] sm:text-[10px] tracking-[0.2em] mt-2">Full Stack Developer Intern</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full text-[9px] sm:text-[10px] font-bold text-foreground/40 border border-white/5 self-start sm:self-auto shrink-0 uppercase tracking-widest whitespace-nowrap">
                    <Calendar size={12} className="shrink-0" />
                    <span>Sep 2025 - Present</span>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Developed full-stack web features using React.js, Node.js, and TypeScript",
                    "Built scalable RESTful APIs with SQL/NoSQL databases",
                    "Created comprehensive admin dashboards for user management and job systems",
                    "Fixed critical build issues and maintained efficient Git workflows"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 sm:space-x-4 text-sm sm:text-base text-foreground/60 leading-relaxed font-medium">
                      <CheckCircle2 size={16} className="text-blue-400/50 mt-1 flex-shrink-0" />
                      <span className="break-words">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>

          {/* Education side */}
          <SectionReveal delay={0.6}>
            <div className="flex flex-col h-full space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center space-x-3 mb-6 sm:mb-8 justify-center lg:justify-start">
                <GraduationCap className="text-purple-400 shrink-0" size={24} />
                <span>Education</span>
              </h3>

              <div className="glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 relative group hover-glow transition-all duration-500 flex flex-col h-full">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                  <div className="flex flex-col">
                    <h4 className="text-xl sm:text-2xl font-black text-foreground/90 group-hover:text-purple-400 transition-colors break-words">Shri Devi Degree College</h4>
                    <span className="text-purple-400/80 font-bold uppercase text-[9px] sm:text-[10px] tracking-[0.2em] mt-2">Bachelor of Computer Applications (BCA)</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full text-[9px] sm:text-[10px] font-bold text-foreground/40 border border-white/5 self-start sm:self-auto shrink-0 uppercase tracking-widest whitespace-nowrap">
                    <Calendar size={12} className="shrink-0" />
                    <span>2021 - 2024</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 my-6 sm:my-8">
                  <div className="h-px bg-white/10 flex-grow" />
                  <div className="glass px-5 sm:px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-center">
                    <span className="text-foreground/40 text-[9px] sm:text-[10px] uppercase font-black block leading-none mb-1 tracking-wider">Final Result</span>
                    <span className="text-xl sm:text-2xl font-black text-purple-400">6.66 CGPA</span>
                  </div>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>
                
                <p className="text-sm sm:text-base text-foreground/60 leading-relaxed font-bold text-center italic mt-auto">
                  Focused on software development principles, data structures, and foundational web technologies.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
      
      <div className="section-divider absolute bottom-0" />
    </section>
  )
}
