"use client"

import { useState, useEffect, useCallback, useRef } from "react"

interface SnakeGameProps {
  onComplete: (won: boolean) => void
}

type Direction = "up" | "down" | "left" | "right"
type Position = { x: number; y: number }

export function SnakeGame({ onComplete }: SnakeGameProps) {
  const gridSize = 10
  const [snake, setSnake] = useState<Position[]>([{ x: 5, y: 5 }])
  const [apple, setApple] = useState<Position>({ x: 7, y: 5 })
  const [direction, setDirection] = useState<Direction>("right")
  const [applesEaten, setApplesEaten] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [gameOver, setGameOver] = useState(false)
  const directionRef = useRef(direction)

  const spawnApple = useCallback(() => {
    let newApple: Position
    do {
      newApple = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      }
    } while (snake.some((s) => s.x === newApple.x && s.y === newApple.y))
    setApple(newApple)
  }, [snake])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
          if (directionRef.current !== "down") {
            setDirection("up")
            directionRef.current = "up"
          }
          break
        case "ArrowDown":
        case "s":
          if (directionRef.current !== "up") {
            setDirection("down")
            directionRef.current = "down"
          }
          break
        case "ArrowLeft":
        case "a":
          if (directionRef.current !== "right") {
            setDirection("left")
            directionRef.current = "left"
          }
          break
        case "ArrowRight":
        case "d":
          if (directionRef.current !== "left") {
            setDirection("right")
            directionRef.current = "right"
          }
          break
      }
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

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

  useEffect(() => {
    if (gameOver) return

    const moveSnake = () => {
      setSnake((prev) => {
        const head = { ...prev[0] }

        switch (directionRef.current) {
          case "up":
            head.y -= 1
            break
          case "down":
            head.y += 1
            break
          case "left":
            head.x -= 1
            break
          case "right":
            head.x += 1
            break
        }

        // Check wall collision
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
          setGameOver(true)
          onComplete(false)
          return prev
        }

        // Check self collision
        if (prev.some((s) => s.x === head.x && s.y === head.y)) {
          setGameOver(true)
          onComplete(false)
          return prev
        }

        const newSnake = [head, ...prev]

        // Check apple
        if (head.x === apple.x && head.y === apple.y) {
          setApplesEaten((current) => {
            const newCount = current + 1
            if (newCount >= 5) {
              setGameOver(true)
              onComplete(true)
            }
            return newCount
          })
          spawnApple()
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }

    const interval = setInterval(moveSnake, 200)
    return () => clearInterval(interval)
  }, [apple, gameOver, onComplete, spawnApple])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="text-xs text-primary crt-glow">TIME: {timeLeft}s</div>
        <div className="text-xs text-accent crt-glow">APPLES: {applesEaten}/5</div>
      </div>

      <div
        className="grid border-2 border-border bg-background"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          width: 200,
          height: 200,
        }}
      >
        {Array(gridSize * gridSize)
          .fill(null)
          .map((_, i) => {
            const x = i % gridSize
            const y = Math.floor(i / gridSize)
            const isSnake = snake.some((s) => s.x === x && s.y === y)
            const isHead = snake[0].x === x && snake[0].y === y
            const isApple = apple.x === x && apple.y === y

            return (
              <div
                key={i}
                className={`
                w-full h-full border border-border/20
                ${isHead ? "bg-accent" : isSnake ? "bg-primary" : ""}
                ${isApple ? "bg-destructive" : ""}
              `}
              />
            )
          })}
      </div>

      <p className="text-[8px] text-muted-foreground">ARROW KEYS OR WASD</p>

      {/* Mobile controls */}
      <div className="grid grid-cols-3 gap-1 md:hidden">
        <div />
        <button
          onClick={() => {
            if (directionRef.current !== "down") {
              setDirection("up")
              directionRef.current = "up"
            }
          }}
          className="bg-secondary p-2 text-xs"
        >
          ↑
        </button>
        <div />
        <button
          onClick={() => {
            if (directionRef.current !== "right") {
              setDirection("left")
              directionRef.current = "left"
            }
          }}
          className="bg-secondary p-2 text-xs"
        >
          ←
        </button>
        <button
          onClick={() => {
            if (directionRef.current !== "up") {
              setDirection("down")
              directionRef.current = "down"
            }
          }}
          className="bg-secondary p-2 text-xs"
        >
          ↓
        </button>
        <button
          onClick={() => {
            if (directionRef.current !== "left") {
              setDirection("right")
              directionRef.current = "right"
            }
          }}
          className="bg-secondary p-2 text-xs"
        >
          →
        </button>
      </div>
    </div>
  )
}
