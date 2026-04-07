"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SectionReveal({ children, delay = 0.2, className }: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 15 }} // Reduced distance for faster physics
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.4, 
        delay, 
        ease: "easeOut",
        type: "tween" // More performant than complex springs
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
}
