"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Minigame } from "@/lib/game-data"
import { MinesweeperGame } from "./minigames/minesweeper-game"
import { DinoRunGame } from "./minigames/dino-run-game"
import { SnakeGame } from "./minigames/snake-game"
import { SpaceInvadersGame } from "./minigames/space-invaders-game"
import { AlertTriangle, ShieldAlert } from "lucide-react"

interface MinigameModalProps {
  minigame: Minigame
  onComplete: (won: boolean) => void
}

function MinigamePlaceholder({ onComplete }: { onComplete: (success: boolean) => void }) {
  const [bypassing, setBypassing] = useState(false)

  const handleBypass = () => {
    setBypassing(true)
    // Simulate bypass attempt - success after clicking
    setTimeout(() => {
      onComplete(true)
    }, 800)
  }

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <ShieldAlert className="w-12 h-12 text-destructive mb-4 animate-pulse" />

      <p className="text-sm text-primary crt-glow mb-2">BYPASSING FIREWALL...</p>
      <p className="text-[10px] text-muted-foreground mb-6">Click to inject payload</p>

      {/* --- INSERT CUSTOM MINIGAME LOGIC HERE --- */}
      <motion.button
        onClick={handleBypass}
        disabled={bypassing}
        className={`px-6 py-3 text-sm pixel-border ${
          bypassing
            ? "bg-primary/50 text-primary-foreground/50"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
        whileHover={!bypassing ? { scale: 1.05 } : {}}
        whileTap={!bypassing ? { scale: 0.95 } : {}}
      >
        {bypassing ? "INJECTING..." : "EXECUTE PAYLOAD"}
      </motion.button>
    </div>
  )
}

export function MinigameModal({ minigame, onComplete }: MinigameModalProps) {
  const useRealMinigames = true // Set to false for placeholder only

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-[95] p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      {/* Warning stripes */}
      <div
        className="absolute top-0 left-0 right-0 h-6"
        style={{
          background: "repeating-linear-gradient(45deg, #000 0px, #000 15px, #ff0 15px, #ff0 30px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-6"
        style={{
          background: "repeating-linear-gradient(-45deg, #000 0px, #000 15px, #ff0 15px, #ff0 30px)",
        }}
      />

      <motion.div
        className="bg-black border-4 border-destructive p-4 md:p-6 w-full max-w-lg relative"
        initial={{ scale: 0.5, rotateX: 30 }}
        animate={{ scale: 1, rotateX: 0 }}
        exit={{ scale: 0.5, rotateX: -30 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          boxShadow: "0 0 50px rgba(255, 50, 50, 0.6), inset 0 0 30px rgba(255, 50, 50, 0.1)",
        }}
      >
        {/* Alert header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
          </motion.div>
          <motion.h2
            className="text-base md:text-xl text-destructive crt-glow font-bold"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
          >
            DATA BREACH DETECTED!
          </motion.h2>
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
          </motion.div>
        </div>

        <h3 className="text-sm md:text-base text-primary crt-glow text-center mb-1">{minigame.title}</h3>
        <p className="text-[8px] md:text-[10px] text-muted-foreground text-center mb-4">{minigame.instruction}</p>

        {/* Game area */}
        <div
          className="bg-zinc-950 border-2 border-primary/40 min-h-[220px] md:min-h-[280px] flex items-center justify-center relative overflow-hidden"
          style={{ boxShadow: "inset 0 0 30px rgba(0, 0, 0, 0.9)" }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(rgba(100, 150, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(100, 150, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />

          {useRealMinigames ? (
            <>
              {minigame.type === "minesweeper" && <MinesweeperGame onComplete={onComplete} />}
              {minigame.type === "dino" && <DinoRunGame onComplete={onComplete} />}
              {minigame.type === "snake" && <SnakeGame onComplete={onComplete} />}
              {minigame.type === "invaders" && <SpaceInvadersGame onComplete={onComplete} />}
            </>
          ) : (
            <MinigamePlaceholder onComplete={onComplete} />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
