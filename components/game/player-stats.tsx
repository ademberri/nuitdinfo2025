"use client"

import { motion } from "framer-motion"
import { Heart, Skull } from "lucide-react"

interface PlayerStatsProps {
  health: number
  maxHealth: number
  label: string
  color: "primary" | "destructive"
}

export function PlayerStats({ health, maxHealth, label, color }: PlayerStatsProps) {
  const percent = (health / maxHealth) * 100
  const isLow = percent < 30
  const Icon = color === "destructive" ? Skull : Heart

  return (
    <motion.div
      className="bg-black/80 border border-border p-2 min-w-[120px] md:min-w-[150px]"
      animate={isLow ? { opacity: [1, 0.6, 1] } : {}}
      transition={{ duration: 0.5, repeat: isLow ? Number.POSITIVE_INFINITY : 0 }}
      style={{
        boxShadow: `0 0 10px ${color === "destructive" ? "rgba(255, 50, 50, 0.3)" : "rgba(100, 150, 255, 0.3)"}`,
      }}
    >
      <div className="flex items-center gap-2 mb-1">
        <Icon className={`w-3 h-3 ${color === "destructive" ? "text-destructive" : "text-primary"}`} />
        <span
          className={`text-[7px] md:text-[8px] ${color === "destructive" ? "text-destructive" : "text-primary"} crt-glow truncate`}
        >
          {label}
        </span>
      </div>

      <div className="h-2 md:h-3 bg-zinc-900 border border-zinc-700 relative overflow-hidden">
        <motion.div
          className={`h-full ${color === "destructive" ? "bg-gradient-to-r from-red-800 to-red-500" : "bg-gradient-to-r from-blue-800 to-primary"}`}
          initial={{ width: "100%" }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.3 }}
        />
        {/* Segments */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex-1 border-r border-black/30 last:border-r-0" />
          ))}
        </div>
      </div>

      <div
        className={`text-[8px] md:text-[9px] text-right mt-0.5 ${color === "destructive" ? "text-destructive" : "text-primary"}`}
      >
        {health}/{maxHealth}
      </div>
    </motion.div>
  )
}
