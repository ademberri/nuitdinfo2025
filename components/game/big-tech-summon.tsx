"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface BigTechSummonProps {
  bossType: string
  onComplete: () => void
  onShake: () => void
}

export function BigTechSummon({ bossType, onComplete, onShake }: BigTechSummonProps) {
  const [phase, setPhase] = useState<"appear" | "pulse" | "dissolve">("appear")

  useEffect(() => {
    // Appear
    const pulseTimer = setTimeout(() => {
      setPhase("pulse")
      onShake()
    }, 500)

    // Pulse for 3 seconds
    const dissolveTimer = setTimeout(() => {
      setPhase("dissolve")
    }, 3500)

    // Complete
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 4300)

    return () => {
      clearTimeout(pulseTimer)
      clearTimeout(dissolveTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete, onShake])

  const getLogo = () => {
    switch (bossType) {
      case "microsoft":
        return (
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-red-500" />
            <div className="w-16 h-16 md:w-24 md:h-24 bg-green-500" />
            <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-500" />
            <div className="w-16 h-16 md:w-24 md:h-24 bg-yellow-500" />
          </div>
        )
      case "google":
        return (
          <div className="text-[80px] md:text-[120px] font-bold">
            <span className="text-blue-500">G</span>
          </div>
        )
      case "apple":
        return <div className="text-[100px] md:text-[150px] text-white"></div>
      case "facebook":
        return <div className="text-[80px] md:text-[120px] font-bold text-blue-400">f</div>
      default:
        return null
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        background: "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.95) 100%)",
      }}
    >
      <motion.div
        className={`relative ${phase === "dissolve" ? "dissolve" : ""}`}
        initial={{ scale: 0, rotateY: -180 }}
        animate={
          phase === "appear"
            ? { scale: 1, rotateY: 0 }
            : phase === "pulse"
              ? { scale: [1, 1.1, 1, 1.1, 1], rotateY: 0 }
              : { scale: 1.5, opacity: 0 }
        }
        transition={phase === "pulse" ? { duration: 3, ease: "easeInOut" } : { duration: 0.5, ease: "easeOut" }}
      >
        {/* Holographic glow container */}
        <div
          className="holographic p-8 md:p-12"
          style={{
            boxShadow: `
              0 0 60px rgba(100, 150, 255, 0.5),
              0 0 120px rgba(255, 100, 200, 0.3),
              0 0 180px rgba(100, 255, 200, 0.2)
            `,
          }}
        >
          {/* The logo */}
          <div className="relative">
            {getLogo()}

            {/* Scan lines over logo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
              }}
            />
          </div>
        </div>

        {/* Warning text */}
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="text-xs md:text-sm text-destructive crt-glow">!!! THREAT DETECTED !!!</div>
          <div className="text-[8px] md:text-[10px] text-muted-foreground mt-1">PREPARING ATTACK VECTOR...</div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
