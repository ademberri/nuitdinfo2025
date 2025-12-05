"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface IntroOverlayProps {
  onComplete: () => void
}

const introLines = [
  "In a world dominated by Algorithms...",
  "Where Big Tech controls every click...",
  "One user fights for a decentralized future.",
  "",
  "Armed with Open Source weapons...",
  "They enter THE NETWORK.",
]

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (currentLine < introLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      setShowButton(true)
    }
  }, [currentLine])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Scrolling text area */}
      <div className="max-w-xl text-center space-y-4 mb-12">
        {introLines.slice(0, currentLine).map((line, i) => (
          <motion.p
            key={i}
            className="text-sm md:text-base text-primary crt-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: line ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Enter button */}
      {showButton && (
        <motion.button
          onClick={onComplete}
          className="px-8 py-4 bg-primary text-primary-foreground text-sm pixel-border hover:bg-primary/90"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [1, 0.7, 1], scale: 1 }}
          transition={{
            opacity: { duration: 1, repeat: Number.POSITIVE_INFINITY },
            scale: { duration: 0.3 },
          }}
        >
          ENTER THE NETWORK
        </motion.button>
      )}

      {/* Skip hint */}
      <motion.p
        className="absolute bottom-8 text-[8px] text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
      >
        TECH-SLAYER DUEL v1.0
      </motion.p>
    </motion.div>
  )
}
