"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Layers } from "lucide-react"

interface PlayerDeckProps {
  onOpenHand: () => void
  disabled: boolean
  cardCount: number
}

export function PlayerDeck({ onOpenHand, disabled, cardCount }: PlayerDeckProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x, y })
  }

  return (
    <motion.button
      onClick={onOpenHand}
      disabled={disabled}
      className={`relative ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePos({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
      style={{ perspective: "800px" }}
    >
      <motion.div
        className="relative"
        animate={{
          rotateY: !disabled && isHovered ? mousePos.x * 20 : 0,
          rotateX: !disabled && isHovered ? -mousePos.y * 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Stacked cards behind */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-36 md:w-28 md:h-40 rounded-xl"
            style={{
              background: `linear-gradient(145deg, #1a1a2e ${i * 5}%, #0d0d1a 100%)`,
              border: "1px solid rgba(100, 100, 120, 0.2)",
              transform: `translateX(${i * 3}px) translateY(${i * -3}px) translateZ(${i * -5}px)`,
              zIndex: 4 - i,
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
          />
        ))}

        {/* Top card (clickable) */}
        <motion.div
          className="relative w-24 h-36 md:w-28 md:h-40 rounded-xl flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #1f2937 0%, #111827 50%, #030712 100%)",
            border: disabled ? "1px solid rgba(100, 100, 120, 0.2)" : "1px solid rgba(52, 211, 153, 0.4)",
            boxShadow: disabled
              ? "0 10px 30px rgba(0,0,0,0.4)"
              : isHovered
                ? "0 25px 50px rgba(0,0,0,0.6), 0 0 40px rgba(52, 211, 153, 0.3)"
                : "0 15px 40px rgba(0,0,0,0.5), 0 0 20px rgba(52, 211, 153, 0.2)",
            transform: `translateX(12px) translateY(-12px) translateZ(${isHovered ? 30 : 0}px)`,
          }}
          animate={
            !disabled
              ? {
                  boxShadow: [
                    "0 15px 40px rgba(0,0,0,0.5), 0 0 20px rgba(52, 211, 153, 0.2)",
                    "0 15px 40px rgba(0,0,0,0.5), 0 0 35px rgba(52, 211, 153, 0.4)",
                    "0 15px 40px rgba(0,0,0,0.5), 0 0 20px rgba(52, 211, 153, 0.2)",
                  ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          {/* Top glow line */}
          <div
            className="absolute top-0 left-4 right-4 h-px"
            style={{
              background: disabled
                ? "transparent"
                : "linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.6), transparent)",
            }}
          />

          {/* Holographic shine on hover */}
          {!disabled && isHovered && (
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)",
              }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          )}

          {/* Inner glow based on mouse position */}
          {!disabled && (
            <div
              className="absolute inset-0 rounded-xl opacity-40"
              style={{
                background: `radial-gradient(circle at ${50 + mousePos.x * 50}% ${50 + mousePos.y * 50}%, rgba(52, 211, 153, 0.2) 0%, transparent 60%)`,
              }}
            />
          )}

          <Layers
            className={`w-10 h-10 md:w-12 md:h-12 mb-2 transition-colors ${
              disabled ? "text-zinc-600" : "text-emerald-400"
            }`}
            style={{
              filter: disabled ? "none" : "drop-shadow(0 0 8px rgba(52, 211, 153, 0.5))",
            }}
          />
          <span
            className={`text-[10px] md:text-xs font-black tracking-widest ${
              disabled ? "text-zinc-600" : "text-zinc-200"
            }`}
          >
            DECK
          </span>
          <span className="text-[8px] mt-1 font-bold" style={{ color: disabled ? "#52525b" : "#34d399" }}>
            x{cardCount}
          </span>

          {/* Bottom glow line */}
          <div
            className="absolute bottom-0 left-4 right-4 h-px"
            style={{
              background: disabled
                ? "transparent"
                : "linear-gradient(90deg, transparent, rgba(100, 100, 120, 0.4), transparent)",
            }}
          />
        </motion.div>

        {/* Ground shadow */}
        <motion.div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-28 md:w-32 h-4 rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
            filter: "blur(6px)",
          }}
          animate={{
            scale: isHovered && !disabled ? 1.2 : 1,
            opacity: isHovered && !disabled ? 0.7 : 0.4,
          }}
        />
      </motion.div>

      {/* Draw hint */}
      {!disabled && (
        <motion.p
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] text-emerald-400 whitespace-nowrap font-black tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5], y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          style={{ textShadow: "0 0 10px rgba(52, 211, 153, 0.5)" }}
        >
          CLICK TO DRAW
        </motion.p>
      )}
    </motion.button>
  )
}
