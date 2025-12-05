"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

interface ThreatCardProps {
  attackName: string
  bossName: string
}

export function ThreatCard({ attackName, bossName }: ThreatCardProps) {
  return (
    <motion.div
      initial={{ z: -200, opacity: 0, rotateY: 90 }}
      animate={{ z: 0, opacity: 1, rotateY: 0 }}
      exit={{ z: 200, opacity: 0, rotateY: -90 }}
      transition={{ type: "spring", damping: 15 }}
      className="threat-pulse"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Floating threat card */}
      <div
        className="w-40 md:w-52 bg-gradient-to-b from-zinc-900 to-black border-2 border-red-500 p-4"
        style={{
          boxShadow:
            "0 0 20px rgba(255, 50, 50, 0.5), 0 10px 30px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Card header */}
        <div className="text-[8px] text-red-400 mb-2 text-center opacity-70">THREAT DETECTED</div>

        {/* Icon */}
        <div className="flex justify-center mb-3">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}>
            <AlertTriangle className="w-10 h-10 md:w-12 md:h-12 text-red-500 crt-glow" />
          </motion.div>
        </div>

        {/* Attack name */}
        <div className="text-center">
          <div className="text-xs md:text-sm text-red-400 crt-glow mb-1">{attackName}</div>
          <div className="text-[8px] text-zinc-500">from {bossName}</div>
        </div>

        {/* Decorative circuit lines */}
        <div className="mt-3 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-red-500 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
