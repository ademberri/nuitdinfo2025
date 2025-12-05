"use client"

import { motion } from "framer-motion"
import type { PlayerCard } from "@/lib/game-data"
import { Server, Shield, Wrench, Users } from "lucide-react"

interface PlayerHandProps {
  card: PlayerCard
  onCardSelect: (card: PlayerCard) => void
  disabled: boolean
}

const CardIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "debian":
      return <Server className="w-8 h-8 md:w-12 md:h-12" />
    case "firefox":
      return <Shield className="w-8 h-8 md:w-12 md:h-12" />
    case "framework":
      return <Wrench className="w-8 h-8 md:w-12 md:h-12" />
    case "mastodon":
      return <Users className="w-8 h-8 md:w-12 md:h-12" />
    default:
      return <Server className="w-8 h-8 md:w-12 md:h-12" />
  }
}

export function PlayerHand({ card, onCardSelect, disabled }: PlayerHandProps) {
  return (
    <div className="bg-card border-2 border-border p-3 md:p-4 pixel-border">
      <div className="text-[8px] md:text-xs text-muted-foreground mb-2">YOUR HAND:</div>
      <div className="flex justify-center">
        <motion.button
          onClick={() => onCardSelect(card)}
          disabled={disabled}
          className={`
            bg-secondary border-2 border-primary p-3 md:p-4 pixel-border
            flex flex-col items-center gap-2 min-w-[100px] md:min-w-[140px]
            ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/20 cursor-pointer"}
            transition-colors
          `}
          whileHover={!disabled ? { scale: 1.05, y: -5 } : {}}
          whileTap={!disabled ? { scale: 0.95 } : {}}
        >
          <div className="text-primary crt-glow">
            <CardIcon type={card.type} />
          </div>
          <div className="text-[8px] md:text-xs text-primary crt-glow text-center">{card.name}</div>
          <div className="text-[6px] md:text-[8px] text-muted-foreground text-center">{card.description}</div>
        </motion.button>
      </div>
      {!disabled && (
        <motion.p
          className="text-[8px] md:text-xs text-accent text-center mt-3 crt-glow"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        >
          CLICK CARD TO PLAY
        </motion.p>
      )}
    </div>
  )
}
