"use client"

import { motion } from "framer-motion"
import { Trophy, Star } from "lucide-react"

interface VictoryScreenProps {
  score: number
  onRestart: () => void
}

export function VictoryScreen({ score, onRestart }: VictoryScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="w-8 h-8 text-accent crt-glow" />
          <Trophy className="w-24 h-24 text-primary crt-glow" />
          <Star className="w-8 h-8 text-accent crt-glow" />
        </div>

        <h1 className="text-2xl md:text-4xl text-primary crt-glow mb-4">VICTORY!</h1>

        <p className="text-sm md:text-lg text-muted-foreground mb-2">OPEN SOURCE PREVAILS!</p>

        <p className="text-xs md:text-sm text-muted-foreground mb-4">ALL BIG TECH BOSSES DEFEATED</p>

        <p className="text-lg md:text-2xl text-accent crt-glow mb-8">FINAL SCORE: {score}</p>

        <motion.button
          onClick={onRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-primary text-primary-foreground text-sm pixel-border hover:bg-primary/90"
        >
          PLAY AGAIN
        </motion.button>
      </motion.div>
    </div>
  )
}
