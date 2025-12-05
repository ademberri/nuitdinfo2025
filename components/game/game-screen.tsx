"use client"

import { useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { EvilMainframe } from "./evil-mainframe"
import { BugCard } from "./bug-card"
import { PlayerStats } from "./player-stats"
import { MinigameModal } from "./minigame-modal"
import { BossRoulette } from "./boss-roulette"
import { PlayerDeck } from "./player-deck"
import { CardSelectionModal } from "./card-selection-modal"
import { IntroOverlay } from "./intro-overlay"
import { TutorialOverlay } from "./tutorial-overlay"
import { BOSSES, generateRandomHand, getRandomAttack, type PlayerCard, type Attack } from "@/lib/game-data"

interface GameScreenProps {
  onGameOver: (score: number) => void
  onVictory: (score: number) => void
}

type GamePhase = "INTRO" | "TUTORIAL" | "ROULETTE" | "BATTLE_IDLE" | "CARD_SELECTION" | "MINIGAME_CHECK" | "RESULT"

export function GameScreen({ onGameOver, onVictory }: GameScreenProps) {
  const [currentBossIndex, setCurrentBossIndex] = useState(0)
  const [bossHealth, setBossHealth] = useState(20)
  const [playerHealth, setPlayerHealth] = useState(100)
  const [score, setScore] = useState(0)
  const [turn, setTurn] = useState(1)
  const [phase, setPhase] = useState<GamePhase>("INTRO")
  const [currentAttack, setCurrentAttack] = useState<Attack | null>(null)
  const [selectedCard, setSelectedCard] = useState<PlayerCard | null>(null)
  const [minigameResult, setMinigameResult] = useState<"win" | "lose" | null>(null)
  const [battleMessage, setBattleMessage] = useState("")
  const [bossFlashing, setBossFlashing] = useState(false)
  const [screenShake, setScreenShake] = useState(false)
  const [rouletteResult, setRouletteResult] = useState<number | null>(null)
  const [playerHand, setPlayerHand] = useState<PlayerCard[]>([])
  const [correctCardIndex, setCorrectCardIndex] = useState(0)

  const currentBoss = BOSSES[currentBossIndex]

  const triggerShake = () => {
    setScreenShake(true)
    setTimeout(() => setScreenShake(false), 600)
  }

  const openHand = useCallback(() => {
    const { hand, correctIndex } = generateRandomHand(currentBoss.counter)
    setPlayerHand(hand)
    setCorrectCardIndex(correctIndex)
    setPhase("CARD_SELECTION")
  }, [currentBoss])

  const handleIntroComplete = () => {
    setPhase("TUTORIAL")
  }

  const handleTutorialComplete = () => {
    setPhase("ROULETTE")
  }

  const handleRouletteComplete = useCallback((bossIndex: number) => {
    setRouletteResult(bossIndex)
    setCurrentBossIndex(bossIndex)
    setBossHealth(20)
    setTimeout(() => {
      setPhase("BATTLE_IDLE")
      setBattleMessage(`${BOSSES[bossIndex].name} awaits your challenge...`)
      setTimeout(() => {
        handleEnemyAttack(bossIndex)
      }, 1500)
    }, 800)
  }, [])

  const handleEnemyAttack = useCallback((bossIdx: number) => {
    const boss = BOSSES[bossIdx]
    const attack = getRandomAttack(boss)
    setBossFlashing(true)
    setTimeout(() => {
      setCurrentAttack(attack)
      setBattleMessage(`${boss.name} uses ${attack.name}!`)
      setBossFlashing(false)

      setTimeout(() => {
        setBattleMessage("Click your DECK to draw cards!")
      }, 2000)
    }, 1000)
  }, [])

  const handleCardSelect = (card: PlayerCard, index: number) => {
    setSelectedCard(card)

    setBattleMessage(`${card.name} ACTIVATES!`)

    setTimeout(() => {
      setPhase("MINIGAME_CHECK")
    }, 800)
  }

  const handleMinigameComplete = (won: boolean) => {
    setMinigameResult(won ? "win" : "lose")
    setPhase("RESULT")

    if (won && selectedCard) {
      const isCorrectCard = selectedCard.type === currentBoss.counter.type

      if (isCorrectCard) {
        setBattleMessage(`${selectedCard.name} COUNTERS! CRITICAL HIT!`)
        triggerShake()
        const damage = 20
        const newBossHealth = Math.max(0, bossHealth - damage)
        setBossHealth(newBossHealth)
        setScore((prev) => prev + 500)

        if (newBossHealth <= 0) {
          setTimeout(() => {
            if (currentBossIndex < BOSSES.length - 1) {
              setBattleMessage(`${currentBoss.name} DESTROYED! Next challenger...`)
              setScore((prev) => prev + 1000)
              setTurn((prev) => prev + 1)
              setTimeout(() => {
                setCurrentAttack(null)
                setSelectedCard(null)
                setMinigameResult(null)
                setPhase("ROULETTE")
              }, 2000)
            } else {
              onVictory(score + 2000)
            }
          }, 1500)
          return
        }
      } else {
        setBattleMessage(`${selectedCard.name} hits! But not very effective...`)
        const damage = 5
        setBossHealth((prev) => Math.max(0, prev - damage))
        setScore((prev) => prev + 100)
      }
    } else {
      setBattleMessage("HACK FAILED! You take damage!")
      triggerShake()
      applyBossDamage()
    }

    setTimeout(() => {
      setCurrentAttack(null)
      setSelectedCard(null)
      setMinigameResult(null)
      setPhase("BATTLE_IDLE")
      handleEnemyAttack(currentBossIndex)
    }, 2500)
  }

  const applyBossDamage = () => {
    const damage = currentAttack?.damage || 25
    const newHealth = Math.max(0, playerHealth - damage)
    setPlayerHealth(newHealth)
    if (newHealth <= 0) {
      setTimeout(() => onGameOver(score), 1000)
    }
  }

  return (
    <div
      className={`min-h-screen h-screen relative overflow-hidden ${screenShake ? "screen-shake" : ""}`}
      style={{ perspective: "1000px" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 shadow-realm-grid"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(60deg) translateY(-20%) translateZ(-50px)",
          transformOrigin: "center bottom",
          height: "200%",
        }}
      />

      {/* Fog overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center bottom, transparent 20%, rgba(0, 0, 0, 0.85) 100%)",
        }}
      />

      {/* 3D Game Board */}
      <div className="relative h-full" style={{ transformStyle: "preserve-3d" }}>
        {/* Enemy Mainframe */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="h-full flex flex-col items-center pt-20">
            {phase !== "INTRO" && phase !== "TUTORIAL" && phase !== "ROULETTE" && (
              <EvilMainframe
                boss={currentBoss}
                health={bossHealth}
                maxHealth={20}
                isFlashing={bossFlashing}
                isAttacking={currentAttack !== null}
              />
            )}
          </div>
        </div>

        {/* Battle zone - Enemy threat card */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentAttack && phase !== "CARD_SELECTION" && phase !== "MINIGAME_CHECK" && (
              <BugCard
                attackName={currentAttack.name}
                bossName={currentBoss.name}
                attack={currentAttack}
                bossColor={currentBoss.color}
              />
            )}
            {minigameResult && (
              <motion.div
                key="result"
                initial={{ scale: 0, rotateY: 180 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0 }}
                className={`text-3xl md:text-5xl font-bold ${minigameResult === "win" ? "text-primary" : "text-destructive"}`}
                style={{
                  textShadow:
                    minigameResult === "win" ? "0 0 30px rgba(100, 255, 100, 0.8)" : "0 0 30px rgba(255, 50, 50, 0.8)",
                }}
              >
                {minigameResult === "win" ? "HACK SUCCESSFUL!" : "HACK FAILED!"}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Player Deck - made bigger with scale */}
        <div className="absolute bottom-6 left-6 z-50 pointer-events-auto scale-110 origin-bottom-left">
          <PlayerDeck onOpenHand={openHand} disabled={phase !== "BATTLE_IDLE" || !currentAttack} cardCount={3} />
        </div>
      </div>

      {/* UI HUD */}
      <div className="absolute top-0 left-0 right-0 z-50 pointer-events-none p-4">
        <div className="flex justify-between items-start">
          <div className="pointer-events-auto">
            <PlayerStats health={playerHealth} maxHealth={100} label="PLAYER" color="primary" />
          </div>

          <div className="text-center">
            <div className="text-xs md:text-sm text-gold crt-glow bg-black/80 px-4 py-2 border border-gold/30 rounded">
              SCORE: {score}
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">TURN {turn}</div>
          </div>

          {phase !== "INTRO" && phase !== "TUTORIAL" && phase !== "ROULETTE" && (
            <div className="pointer-events-auto">
              <PlayerStats health={bossHealth} maxHealth={20} label={currentBoss.name} color="destructive" />
            </div>
          )}
        </div>
      </div>

      {/* Battle message - made bigger */}
      {battleMessage && phase !== "INTRO" && phase !== "TUTORIAL" && (
        <motion.div
          className="absolute bottom-36 left-0 right-0 z-40 pointer-events-none text-center"
          key={battleMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm md:text-base text-accent crt-glow bg-black/70 inline-block px-6 py-3 rounded-lg">
            {battleMessage}
          </p>
        </motion.div>
      )}

      {/* Overlays */}
      <AnimatePresence>{phase === "INTRO" && <IntroOverlay onComplete={handleIntroComplete} />}</AnimatePresence>
      <AnimatePresence>
        {phase === "TUTORIAL" && <TutorialOverlay onComplete={handleTutorialComplete} />}
      </AnimatePresence>
      <AnimatePresence>
        {phase === "ROULETTE" && (
          <BossRoulette bosses={BOSSES} onComplete={handleRouletteComplete} excludeIndex={rouletteResult} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {phase === "CARD_SELECTION" && (
          <CardSelectionModal hand={playerHand} correctIndex={correctCardIndex} onCardSelect={handleCardSelect} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {phase === "MINIGAME_CHECK" && (
          <MinigameModal minigame={currentBoss.minigame} onComplete={handleMinigameComplete} />
        )}
      </AnimatePresence>
    </div>
  )
}
