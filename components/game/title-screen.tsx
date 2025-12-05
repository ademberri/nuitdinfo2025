"use client"

import { motion } from "framer-motion"
import { Terminal, Shield, Cpu } from "lucide-react"

interface TitleScreenProps {
  onStart: () => void
}

export function TitleScreen({ onStart }: TitleScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <Terminal className="w-12 h-12 text-primary crt-glow" />
          <Shield className="w-16 h-16 text-primary crt-glow" />
          <Cpu className="w-12 h-12 text-primary crt-glow" />
        </div>

        <h1 className="text-2xl md:text-4xl text-primary crt-glow mb-4 leading-relaxed">OPEN SOURCE</h1>
        <h2 className="text-3xl md:text-5xl text-accent crt-glow mb-8">DEFENDER</h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs md:text-sm text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed"
        >
          BATTLE BIG TECH BOSSES WITH THE POWER OF OPEN SOURCE
        </motion.p>

        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-primary text-primary-foreground text-sm md:text-base pixel-border hover:bg-primary/90 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ delay: 1, duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          PRESS START
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-[10px] text-muted-foreground"
        >
          <p>© 2025 FREEDOM SOFTWARE ALLIANCE</p>
          <p className="mt-2">WIN MINIGAMES TO ACTIVATE YOUR CARDS!</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
