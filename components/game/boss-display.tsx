"use client"

import { motion } from "framer-motion"
import type { Boss } from "@/lib/game-data"
import { Monitor, Eye, Apple, ThumbsUp } from "lucide-react"

interface BossDisplayProps {
  boss: Boss
  health: number
  isAttacking: boolean
}

const BossIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "microsoft":
      return <Monitor className="w-16 h-16 md:w-24 md:h-24" />
    case "google":
      return <Eye className="w-16 h-16 md:w-24 md:h-24" />
    case "apple":
      return <Apple className="w-16 h-16 md:w-24 md:h-24" />
    case "facebook":
      return <ThumbsUp className="w-16 h-16 md:w-24 md:h-24" />
    default:
      return <Monitor className="w-16 h-16 md:w-24 md:h-24" />
  }
}

export function BossDisplay({ boss, health, isAttacking }: BossDisplayProps) {
  const healthPercent = (health / boss.health) * 100

  return (
    <motion.div
      className="bg-card border-2 border-border p-3 md:p-4 pixel-border mb-2 md:mb-4"
      animate={isAttacking ? { x: [0, -10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <motion.div
            className="text-destructive crt-glow"
            animate={isAttacking ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.3, repeat: isAttacking ? Number.POSITIVE_INFINITY : 0 }}
          >
            <BossIcon type={boss.type} />
          </motion.div>
          <div>
            <h2 className="text-sm md:text-lg text-destructive crt-glow">{boss.name}</h2>
            <p className="text-[8px] md:text-xs text-muted-foreground mt-1">{boss.subtitle}</p>
          </div>
        </div>

        <div className="w-24 md:w-40">
          <div className="text-[8px] md:text-xs text-muted-foreground mb-1">
            HP: {health}/{boss.health}
          </div>
          <div className="h-3 md:h-4 bg-muted border border-border relative overflow-hidden">
            <motion.div
              className="h-full bg-destructive"
              initial={{ width: "100%" }}
              animate={{ width: `${healthPercent}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {isAttacking && (
        <motion.div
          className="mt-3 text-center text-xs md:text-sm text-accent crt-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {boss.attack.name}
        </motion.div>
      )}
    </motion.div>
  )
}
