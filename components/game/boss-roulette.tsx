"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import type { Boss } from "@/lib/game-data"

interface BossRouletteProps {
  bosses: Boss[]
  onComplete: (bossIndex: number) => void
  excludeIndex: number | null
}

export function BossRoulette({ bosses, onComplete, excludeIndex }: BossRouletteProps) {
  const [spinning, setSpinning] = useState(true)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [finalIndex, setFinalIndex] = useState<number | null>(null)

  useEffect(() => {
    const availableIndices = bosses.map((_, i) => i).filter((i) => i !== excludeIndex)

    // Pick random final boss
    const randomFinal = availableIndices[Math.floor(Math.random() * availableIndices.length)]

    let spinCount = 0
    const maxSpins = 20 + Math.floor(Math.random() * 10)

    const spinInterval = setInterval(
      () => {
        setDisplayIndex((prev) => (prev + 1) % bosses.length)
        spinCount++

        if (spinCount >= maxSpins) {
          clearInterval(spinInterval)
          setDisplayIndex(randomFinal)
          setFinalIndex(randomFinal)
          setSpinning(false)

          setTimeout(() => {
            onComplete(randomFinal)
          }, 1500)
        }
      },
      spinning ? 80 + spinCount * 5 : 200,
    )

    return () => clearInterval(spinInterval)
  }, [])

  const displayBoss = bosses[displayIndex]

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle, ${displayBoss.color}15 0%, transparent 60%)`,
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 0.4, repeat: spinning ? Number.POSITIVE_INFINITY : 0 }}
      />

      {/* Scanning lines effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${i * 5}%`,
              background: `linear-gradient(90deg, transparent, ${displayBoss.color}, transparent)`,
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 0.5, delay: i * 0.05, repeat: Number.POSITIVE_INFINITY }}
          />
        ))}
      </div>

      <p className="text-xs text-zinc-400 mb-8 font-mono tracking-widest">
        {spinning ? ">>> SCANNING NETWORK FOR THREATS..." : ">>> TARGET ACQUIRED!"}
      </p>

      {/* Boss name display with company color */}
      <motion.div
        className="text-4xl md:text-6xl font-black tracking-wider"
        style={{
          color: displayBoss.color,
          textShadow: `0 0 30px ${displayBoss.color}80, 0 0 60px ${displayBoss.color}40`,
        }}
        animate={
          spinning
            ? {
                scale: [1, 1.1, 1],
              }
            : {
                scale: [1, 1.2, 1.1],
              }
        }
        transition={{ duration: spinning ? 0.1 : 0.5 }}
      >
        {displayBoss.name}
      </motion.div>

      <motion.p
        className="text-sm md:text-base mt-4 font-medium tracking-wide"
        style={{ color: displayBoss.color }}
        animate={{ opacity: spinning ? [0.3, 0.7, 0.3] : 1 }}
      >
        {displayBoss.subtitle}
      </motion.p>

      {/* Tagline */}
      {finalIndex !== null && (
        <motion.p
          className="text-xs text-zinc-500 mt-6 font-mono"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          "{displayBoss.tagline}"
        </motion.p>
      )}

      {/* Lock-in animation with boss color */}
      {finalIndex !== null && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ duration: 0.5 }}
          style={{
            border: `4px solid ${displayBoss.color}`,
            boxShadow: `inset 0 0 100px ${displayBoss.color}30`,
          }}
        />
      )}
    </motion.div>
  )
}
