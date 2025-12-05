"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"

interface DinoRunGameProps {
  onComplete: (won: boolean) => void
}

export function DinoRunGame({ onComplete }: DinoRunGameProps) {
  const [dinoY, setDinoY] = useState(0)
  const [isJumping, setIsJumping] = useState(false)
  const [obstacles, setObstacles] = useState<number[]>([300, 500, 700])
  const [jumpedOver, setJumpedOver] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [gameOver, setGameOver] = useState(false)
  const [gameResult, setGameResult] = useState<"win" | "lose" | null>(null)
  const gameLoopRef = useRef<number>()

  const jump = useCallback(() => {
    if (isJumping || gameOver) return
    setIsJumping(true)
    setDinoY(80)
    setTimeout(() => {
      setDinoY(0)
      setIsJumping(false)
    }, 500)
  }, [isJumping, gameOver])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault()
        jump()
      }
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [jump])

  useEffect(() => {
    if (gameResult !== null) {
      onComplete(gameResult === "win")
    }
  }, [gameResult, onComplete])

  useEffect(() => {
    if (gameOver) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setGameOver(true)
          setGameResult("lose")
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [gameOver])

  useEffect(() => {
    if (gameOver) return

    const gameLoop = () => {
      setObstacles((prev) => {
        const newObstacles = prev.map((x) => x - 5)

        const dinoLeft = 40
        const dinoRight = 70
        const dinoBottom = dinoY

        newObstacles.forEach((obstacleX, index) => {
          if (obstacleX < dinoLeft && obstacleX > dinoLeft - 10) {
            if (dinoBottom > 30) {
              setJumpedOver((current) => {
                const newCount = current + 1
                if (newCount >= 3 && !gameOver) {
                  setGameOver(true)
                  setGameResult("win")
                }
                return newCount
              })
            }
          }

          if (obstacleX > dinoLeft - 20 && obstacleX < dinoRight && dinoBottom < 30) {
            setGameOver(true)
            setGameResult("lose")
          }
        })

        return newObstacles.map((x) => (x < -20 ? 350 + Math.random() * 100 : x))
      })

      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop)
    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current)
    }
  }, [dinoY, gameOver])

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex items-center gap-4">
        <div className="text-xs text-primary crt-glow">TIME: {timeLeft}s</div>
        <div className="text-xs text-accent crt-glow">JUMPED: {jumpedOver}/3</div>
      </div>

      <div
        className="relative w-full max-w-xs h-32 bg-background border-2 border-border overflow-hidden cursor-pointer"
        onClick={jump}
      >
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />

        <motion.div
          className="absolute left-10 w-8 h-10 bg-primary"
          style={{ bottom: 4 + dinoY }}
          animate={{ y: -dinoY }}
        >
          <div className="text-[8px] text-primary-foreground text-center pt-1">🦖</div>
        </motion.div>

        {obstacles.map((x, i) => (
          <div key={i} className="absolute bottom-1 w-4 h-8 bg-destructive" style={{ left: x }}>
            <div className="text-[8px] text-center">🌵</div>
          </div>
        ))}
      </div>

      <p className="text-[8px] text-muted-foreground">TAP/SPACE TO JUMP</p>
    </div>
  )
}
