"use client"

import { motion } from "framer-motion"
import { Skull } from "lucide-react"

interface GameOverScreenProps {
  score: number
  onRestart: () => void
}

export function GameOverScreen({ score, onRestart }: GameOverScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
        <Skull className="w-24 h-24 text-destructive mx-auto mb-6 crt-glow" />

        <h1 className="text-2xl md:text-4xl text-destructive crt-glow mb-4">GAME OVER</h1>

        <p className="text-sm md:text-lg text-muted-foreground mb-2">BIG TECH WINS THIS ROUND...</p>

        <p className="text-lg md:text-2xl text-primary crt-glow mb-8">FINAL SCORE: {score}</p>

        <motion.button
          onClick={onRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-primary text-primary-foreground text-sm pixel-border hover:bg-primary/90"
        >
          TRY AGAIN
        </motion.button>
      </motion.div>
    </div>
  )
}
