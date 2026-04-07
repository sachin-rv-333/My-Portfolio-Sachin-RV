"use client"

import React, { useMemo } from "react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { motion } from "framer-motion"
import { Monitor, Server, Database, ShieldCheck, Cpu, Code2 } from "lucide-react"

const SkillsArea = () => {
  const skillGroups = useMemo(() => [
    {
      title: "Frontend Stack",
      icon: <Monitor size={24} className="text-blue-500" />,
      skills: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Backend Core",
      icon: <Server size={24} className="text-cyan-500" />,
      skills: ["Node.js", "Express.js"],
      color: "from-cyan-400 to-cyan-600"
    },
    {
      title: "Database Logic",
      icon: <Database size={24} className="text-emerald-500" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
      color: "from-emerald-400 to-emerald-600"
    },
    {
      title: "Dev & Test Tools",
      icon: <ShieldCheck size={24} className="text-blue-400" />,
      skills: ["Git/GitHub", "Postman", "VS Code"],
      color: "from-blue-500 to-cyan-500"
    }
  ], [])

  return (
    <section id="skills" className="py-24 relative overflow-hidden w-full bg-[#050505]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <div className="flex flex-col items-center mb-16 sm:mb-24 text-center">
             <span className="text-blue-500 font-extrabold tracking-[0.4em] uppercase text-[10px] mb-4">Core Competencies</span>
             <h2 className="text-4xl sm:text-7xl font-black gradient-text mb-6">Technical Ecosystem</h2>
             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-full" />
             <p className="text-lg text-foreground/40 max-w-xl mt-8 font-semibold">An ever-evolving toolkit focused on modern full-stack development and scalable engineering.</p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillGroups.map((group, index) => (
            <SectionReveal key={group.title} delay={0.1 * (index + 1)} className="h-full">
              <div 
                className="bento-card p-10 sm:p-12 rounded-[2.5rem] h-full flex flex-col group hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-[#0F172A]"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="flex items-center space-x-5 mb-12">
                  <div className="p-4 bg-[#1E293B] rounded-2xl border border-white/5 shadow-xl transition-all group-hover:scale-110">
                    {group.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-none uppercase tracking-tight">{group.title}</h3>
                </div>
                
                <div className="space-y-8 flex-grow">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex flex-col space-y-3">
                      <div className="flex justify-between items-center px-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#9CA3AF] group-hover:text-blue-400 transition-colors">{skill}</span>
                        <div className="w-2 h-2 rounded-full bg-blue-500/50" />
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${group.color} transition-all shadow-[0_0_10px_rgba(59,130,246,0.3)]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(SkillsArea)
