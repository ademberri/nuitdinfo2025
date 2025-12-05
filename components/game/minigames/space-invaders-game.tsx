"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ThumbsUp } from "lucide-react"

interface SpaceInvadersGameProps {
  onComplete: (won: boolean) => void
}

type Position = { x: number; y: number; id: number }

export function SpaceInvadersGame({ onComplete }: SpaceInvadersGameProps) {
  const [playerX, setPlayerX] = useState(150)
  const [bullets, setBullets] = useState<Position[]>([])
  const [enemies, setEnemies] = useState<Position[]>([
    { x: 50, y: 20, id: 1 },
    { x: 100, y: 30, id: 2 },
    { x: 150, y: 20, id: 3 },
    { x: 200, y: 30, id: 4 },
    { x: 250, y: 20, id: 5 },
  ])
  const [hits, setHits] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [gameOver, setGameOver] = useState(false)
  const [gameResult, setGameResult] = useState<"win" | "lose" | null>(null)
  const bulletIdRef = useRef(0)

  useEffect(() => {
    if (gameResult !== null) {
      onComplete(gameResult === "win")
    }
  }, [gameResult, onComplete])

  const shoot = useCallback(() => {
    if (gameOver) return
    bulletIdRef.current += 1
    setBullets((prev) => [...prev, { x: playerX + 10, y: 180, id: bulletIdRef.current }])
  }, [playerX, gameOver])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") {
        setPlayerX((prev) => Math.max(0, prev - 20))
      } else if (e.key === "ArrowRight" || e.key === "d") {
        setPlayerX((prev) => Math.min(280, prev + 20))
      } else if (e.code === "Space" || e.key === " ") {
        e.preventDefault()
        shoot()
      }
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [shoot])

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

    const gameLoop = setInterval(() => {
      // Move bullets up
      setBullets((prev) => prev.map((b) => ({ ...b, y: b.y - 10 })).filter((b) => b.y > 0))

      // Move enemies down
      setEnemies((prev) => prev.map((e) => ({ ...e, y: e.y + 1 })))

      // Check collisions
      setBullets((prevBullets) => {
        let newBullets = [...prevBullets]

        setEnemies((prevEnemies) => {
          let newEnemies = [...prevEnemies]

          prevBullets.forEach((bullet) => {
            const hitEnemy = newEnemies.find((e) => Math.abs(e.x - bullet.x) < 20 && Math.abs(e.y - bullet.y) < 20)
            if (hitEnemy) {
              newEnemies = newEnemies.filter((e) => e.id !== hitEnemy.id)
              newBullets = newBullets.filter((b) => b.id !== bullet.id)
              setHits((current) => {
                const newHits = current + 1
                if (newHits >= 5) {
                  setGameOver(true)
                  setGameResult("win")
                }
                return newHits
              })

              // Respawn enemy at top
              setTimeout(() => {
                setEnemies((prev) => [...prev, { x: Math.random() * 260 + 20, y: 10, id: Date.now() }])
              }, 500)
            }
          })

          // Check if enemy reached bottom
          if (newEnemies.some((e) => e.y > 170)) {
            setGameOver(true)
            setGameResult("lose")
          }

          return newEnemies
        })

        return newBullets
      })
    }, 50)

    return () => clearInterval(gameLoop)
  }, [gameOver])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="text-xs text-primary crt-glow">TIME: {timeLeft}s</div>
        <div className="text-xs text-accent crt-glow">HITS: {hits}/5</div>
      </div>

      <div
        className="relative w-[300px] h-[200px] bg-background border-2 border-border overflow-hidden cursor-pointer"
        onClick={shoot}
      >
        {/* Player ship */}
        <div className="absolute bottom-2 w-6 h-4 bg-primary" style={{ left: playerX }}>
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[8px] border-l-transparent border-r-transparent border-b-primary absolute -top-2" />
        </div>

        {/* Bullets */}
        {bullets.map((bullet) => (
          <div key={bullet.id} className="absolute w-1 h-3 bg-accent" style={{ left: bullet.x, top: bullet.y }} />
        ))}

        {/* Enemies (Like icons) */}
        {enemies.map((enemy) => (
          <div key={enemy.id} className="absolute text-destructive" style={{ left: enemy.x, top: enemy.y }}>
            <ThumbsUp className="w-5 h-5" />
          </div>
        ))}
      </div>

      <p className="text-[8px] text-muted-foreground">← → TO MOVE, SPACE/TAP TO SHOOT</p>

      {/* Mobile controls */}
      <div className="flex gap-4 md:hidden">
        <button onClick={() => setPlayerX((prev) => Math.max(0, prev - 20))} className="bg-secondary px-4 py-2 text-xs">
          ←
        </button>
        <button onClick={shoot} className="bg-primary text-primary-foreground px-4 py-2 text-xs">
          FIRE
        </button>
        <button
          onClick={() => setPlayerX((prev) => Math.min(280, prev + 20))}
          className="bg-secondary px-4 py-2 text-xs"
        >
          →
        </button>
      </div>
    </div>
  )
}
