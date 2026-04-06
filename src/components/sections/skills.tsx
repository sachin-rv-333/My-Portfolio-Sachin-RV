"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { motion } from "framer-motion"
import { Monitor, Server, Database, ShieldCheck } from "lucide-react"

const skillGroups = [
  {
    title: "Frontend",
    icon: <Monitor size={20} className="text-blue-400 shrink-0" />,
    skills: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Backend",
    icon: <Server size={20} className="text-purple-400 shrink-0" />,
    skills: ["Node.js", "Express.js", "REST APIs"],
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Databases",
    icon: <Database size={20} className="text-cyan-400 shrink-0" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
    color: "from-cyan-400 to-cyan-600"
  },
  {
    title: "Testing",
    icon: <ShieldCheck size={20} className="text-indigo-400 shrink-0" />,
    skills: ["Jest", "Manual Testing"],
    color: "from-indigo-400 to-indigo-600"
  }
]

const tools = ["Git", "GitHub", "Postman", "VS Code"]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden w-full">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
             <span className="text-blue-400 font-extrabold tracking-[0.3em] uppercase text-[9px] sm:text-[10px] mb-3 sm:mb-4">Stack Mastery</span>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-4 sm:mb-6">Technical Ecosystem</h2>
             <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
             <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-xl mt-6 sm:mt-8 font-medium">My toolkit is always evolving, focusing on modern architectures and clean software engineering.</p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {skillGroups.map((group, index) => (
            <SectionReveal key={group.title} delay={0.2 * (index + 1)}>
              <div className="glass p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 h-full hover-glow group transition-all duration-500">
                <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                  <div className="p-3 sm:p-4 glass rounded-xl sm:rounded-2xl border border-white/5 group-hover:scale-110 transition-transform flex-shrink-0">
                    {group.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black break-words">{group.title}</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex flex-col">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-foreground/60 break-all">{skill}</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${group.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Tools Section */}
        <SectionReveal delay={0.8}>
          <div className="flex flex-col items-center px-4">
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-foreground/20 mb-8 mt-12 sm:mt-16 text-center">Essential Tools</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 w-full">
              {tools.map((tool) => (
                <div key={tool} className="glass px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl border border-white/5 text-[10px] sm:text-sm font-bold tracking-widest opacity-60 hover:opacity-100 hover:text-blue-400 hover:-translate-y-2 transition-all cursor-default active:scale-95 whitespace-nowrap">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      <div className="section-divider absolute bottom-0" />
    </section>
  )
}
