"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { PlayerCard } from "@/lib/game-data"
import { Zap, Shield, Check, X } from "lucide-react"

interface BattleZoneProps {
  message: string
  currentAttack: string | null
  selectedCard: PlayerCard | null
  result: "win" | "lose" | null
}

export function BattleZone({ message, currentAttack, selectedCard, result }: BattleZoneProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-card/50 border-2 border-border pixel-border my-2 md:my-4 min-h-[150px] md:min-h-[200px] relative overflow-hidden">
      {/* Battle grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,255,0,0.3) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <AnimatePresence mode="wait">
        {currentAttack && !selectedCard && (
          <motion.div
            key="attack"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="flex items-center gap-3 text-destructive"
          >
            <Zap className="w-8 h-8 md:w-12 md:h-12 crt-glow" />
            <span className="text-sm md:text-xl crt-glow">{currentAttack}</span>
          </motion.div>
        )}

        {selectedCard && !result && (
          <motion.div
            key="counter"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="flex items-center gap-3 text-primary"
          >
            <Shield className="w-8 h-8 md:w-12 md:h-12 crt-glow" />
            <span className="text-sm md:text-xl crt-glow">{selectedCard.name}</span>
          </motion.div>
        )}

        {result && (
          <motion.div
            key="result"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`flex items-center gap-3 ${result === "win" ? "text-primary" : "text-destructive"}`}
          >
            {result === "win" ? (
              <Check className="w-12 h-12 md:w-16 md:h-16 crt-glow" />
            ) : (
              <X className="w-12 h-12 md:w-16 md:h-16 crt-glow" />
            )}
            <span className="text-lg md:text-2xl crt-glow">{result === "win" ? "SUCCESS!" : "FAILED!"}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        className="absolute bottom-3 md:bottom-4 text-[8px] md:text-xs text-muted-foreground text-center px-4"
        key={message}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {message}
      </motion.p>
    </div>
  )
}
