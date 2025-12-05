"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

interface PenguinAdvisorProps {
  onHint: () => void
  hintActive: boolean
}

const penguinQuotes = [
  "This kernel looks stable!",
  "Use sudo on this one!",
  "I compiled this myself!",
  "Freedom respects users!",
  "Try the GPL-licensed one!",
  "This runs on my machine!",
]

export function PenguinAdvisor({ onHint, hintActive }: PenguinAdvisorProps) {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    setQuote(penguinQuotes[Math.floor(Math.random() * penguinQuotes.length)])
  }, [])

  return (
    <motion.div
      className="mt-8 flex items-center gap-3"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {/* Penguin */}
      <motion.button
        onClick={onHint}
        disabled={hintActive}
        className={`relative ${hintActive ? "cursor-default" : "cursor-pointer"}`}
        animate={{
          y: [0, -5, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
      >
        {/* Penguin body using emoji with glow */}
        <div
          className="text-4xl md:text-5xl"
          style={{
            filter: hintActive
              ? "drop-shadow(0 0 10px rgba(255, 200, 50, 0.8))"
              : "drop-shadow(0 0 5px rgba(100, 150, 255, 0.5))",
          }}
        >
          🐧
        </div>

        {/* Sparkle when hinting */}
        {hintActive && (
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ rotate: 360, scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
        )}
      </motion.button>

      {/* Speech bubble */}
      <motion.div
        className="relative bg-black/80 border border-primary/50 px-3 py-2 max-w-[200px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {/* Bubble pointer */}
        <div
          className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderRight: "8px solid rgba(100, 150, 255, 0.5)",
          }}
        />

        <p className="text-[9px] md:text-[10px] text-primary crt-glow">
          {hintActive ? quote : "Need a hint? Click me!"}
        </p>
      </motion.div>
    </motion.div>
  )
}
