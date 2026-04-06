"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Code, Palette, Zap, Globe } from "lucide-react"

const skills = [
  { name: "Frontend", level: 90, icon: <Layout size={20} /> },
  { name: "Backend", level: 85, icon: <Database size={20} /> },
  { name: "UI/UX", level: 80, icon: <Palette size={20} /> },
  { name: "Three.js", level: 75, icon: <Box size={20} /> },
  { name: "TypeScript", level: 95, icon: <Code size={20} /> },
  { name: "Performance", level: 88, icon: <Zap size={20} /> },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Passionate about creating <br /> <span className="text-[#D4AF37]">seamless experiences</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio side */}
          <SectionReveal delay={0.4}>
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 h-full flex flex-col justify-center">
              <p className="text-xl text-foreground/80 leading-relaxed mb-6 font-medium">
                I am a passionate Full Stack Developer with over 3 years of experience in building modern web applications.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8">
                My journey started with a curiosity for how things work on the web, which led me to dive deep into frontend technologies like React and Next.js, and later expanding into backend systems. I believe in writing clean, scalable code and delivering high-quality user experiences.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#D4AF37]">3+</span>
                  <span className="text-sm text-foreground/50 uppercase tracking-wider">Years Experience</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#D4AF37]">20+</span>
                  <span className="text-sm text-foreground/50 uppercase tracking-wider">Projects Completed</span>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Skills side */}
          <SectionReveal delay={0.6}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-3xl border border-white/5 flex flex-col items-start"
                >
                  <div className="p-3 bg-[#D4AF37]/10 rounded-2xl text-[#D4AF37] mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                  <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"
                    />
                  </div>
                  <span className="text-xs text-foreground/40 mt-2 font-semibold uppercase">{skill.level}% proficiency</span>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

import { Layout, Database, Box } from "lucide-react"
