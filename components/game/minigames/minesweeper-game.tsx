"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Bomb, Flag } from "lucide-react"

interface MinesweeperGameProps {
  onComplete: (won: boolean) => void
}

export function MinesweeperGame({ onComplete }: MinesweeperGameProps) {
  // FIX 1: Generate the grid immediately in useState (Lazy Initialization) 
  // instead of waiting for useEffect. This ensures buttons exist on first render.
  const [grid, setGrid] = useState<Array<{ revealed: boolean; mine: boolean }>>(() => {
    const newGrid = Array(9)
      .fill(null)
      .map(() => ({ revealed: false, mine: false }))
    
    const minePositions = new Set<number>()
    while (minePositions.size < 2) {
      minePositions.add(Math.floor(Math.random() * 9))
    }
    
    minePositions.forEach((pos) => {
      newGrid[pos].mine = true
    })
    
    return newGrid
  })

  const [safeClicks, setSafeClicks] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (gameOver) return
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setGameOver(true)
          onComplete(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [gameOver, onComplete])

  const handleClick = (index: number) => {
    if (gameOver || grid[index].revealed) return

    // FIX 2: Correctly update state immutably
    const newGrid = [...grid]
    
    // Create a NEW object for the clicked cell, don't just modify the property
    newGrid[index] = { ...newGrid[index], revealed: true }
    
    setGrid(newGrid)

    if (newGrid[index].mine) {
      setGameOver(true)
      onComplete(false)
    } else {
      const newSafeClicks = safeClicks + 1
      setSafeClicks(newSafeClicks)
      if (newSafeClicks >= 3) {
        setGameOver(true)
        onComplete(true)
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="text-xs text-primary crt-glow">TIME: {timeLeft}s</div>
        <div className="text-xs text-accent crt-glow">SAFE: {safeClicks}/3</div>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {grid.map((cell, index) => (
          <motion.button
            key={index}
            onClick={() => handleClick(index)}
            disabled={cell.revealed || gameOver}
            className={`
              w-14 h-14 md:w-16 md:h-16 border-2 border-border flex items-center justify-center
              ${cell.revealed 
                ? (cell.mine ? "bg-destructive" : "bg-primary/30") 
                : "bg-secondary hover:bg-secondary/80 cursor-pointer"} 
              ${gameOver && !cell.revealed && cell.mine ? "bg-destructive/50" : ""}
              transition-colors
            `}
            // Only animate if the game is active and cell is hidden
            whileHover={!cell.revealed && !gameOver ? { scale: 1.05 } : {}}
            whileTap={!cell.revealed && !gameOver ? { scale: 0.95 } : {}}
            // Added type="button" to prevent form submission behavior if used inside a form
            type="button" 
          >
            {cell.revealed && cell.mine && <Bomb className="w-6 h-6 text-background" />}
            {cell.revealed && !cell.mine && <Flag className="w-6 h-6 text-primary" />}
          </motion.button>
        ))}
      </div>

      <p className="text-[8px] text-muted-foreground">CLICK 3 SAFE SQUARES</p>
    </div>
  )
}