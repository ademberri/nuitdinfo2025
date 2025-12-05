"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { PlayerCard, Minigame } from "@/lib/game-data"
import { Server, Shield, Wrench, Users } from "lucide-react"

interface PlayerHand3DProps {
  card: PlayerCard
  minigame: Minigame
  onCardSelect: (card: PlayerCard) => void
  disabled: boolean
}

const CardIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "debian":
      return <Server className="w-8 h-8 md:w-10 md:h-10" />
    case "firefox":
      return <Shield className="w-8 h-8 md:w-10 md:h-10" />
    case "framework":
      return <Wrench className="w-8 h-8 md:w-10 md:h-10" />
    case "mastodon":
      return <Users className="w-8 h-8 md:w-10 md:h-10" />
    default:
      return <Server className="w-8 h-8 md:w-10 md:h-10" />
  }
}

export function PlayerHand3D({ card, minigame, onCardSelect, disabled }: PlayerHand3DProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Generate 3 cards (same card shown 3 times for visual effect, only one is the real counter)
  const cards = [
    { ...card, id: 0, isReal: false },
    { ...card, id: 1, isReal: true },
    { ...card, id: 2, isReal: false },
  ]

  return (
    <div
      className="relative h-40 md:h-48 w-full flex items-end justify-center gap-4 md:gap-6 pb-4"
      style={{
        transformStyle: "preserve-3d",
        perspective: "800px",
      }}
    >
      {cards.map((c, index) => {
        const isHovered = hoveredCard === index
        const offset = index - 1 // -1, 0, 1

        return (
          <motion.div
            key={c.id}
            className="relative cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
            initial={{
              rotateX: 55,
              y: 0,
            }}
            animate={{
              rotateX: isHovered ? 0 : 55,
              rotateY: isHovered ? 0 : offset * 5,
              y: isHovered ? -80 : 0,
              z: isHovered ? 100 : 0,
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={() => !disabled && setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => !disabled && c.isReal && onCardSelect(card)}
          >
            {/* The 3D Card */}
            <div
              className={`
                w-28 md:w-36 h-36 md:h-44 
                ${disabled ? "opacity-50" : ""}
                ${c.isReal ? "" : "opacity-60"}
              `}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card face */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-900 card-3d flex flex-col items-center justify-center p-3"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Card glow effect when hovered */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 bg-cyan-500/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}

                {/* Card content */}
                <div className="text-primary crt-glow mb-2">
                  <CardIcon type={card.type} />
                </div>
                <div className="text-[8px] md:text-[10px] text-primary crt-glow text-center mb-1">{card.name}</div>
                <div className="text-[6px] md:text-[7px] text-muted-foreground text-center">{card.description}</div>

                {/* Minigame indicator */}
                {c.isReal && (
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-[5px] md:text-[6px] text-accent text-center opacity-70">
                      MINIGAME: {minigame.title}
                    </div>
                  </div>
                )}
              </div>

              {/* Card thickness (side) */}
              <div
                className="absolute inset-y-0 -right-1 w-2 bg-zinc-700"
                style={{
                  transform: "rotateY(90deg) translateZ(1px)",
                  transformOrigin: "left center",
                }}
              />
              <div
                className="absolute inset-x-0 -bottom-1 h-2 bg-zinc-800"
                style={{
                  transform: "rotateX(-90deg) translateZ(1px)",
                  transformOrigin: "top center",
                }}
              />
            </div>

            <AnimatePresence>
              {isHovered && c.isReal && (
                <motion.div
                  className="absolute -top-24 md:-top-28 left-1/2 -translate-x-1/2 w-48 md:w-56 bg-black/95 border border-primary p-3 z-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
                >
                  <div className="text-[8px] text-primary crt-glow mb-1">CARD: {card.name}</div>
                  <div className="text-[7px] text-muted-foreground mb-2">COUNTER: {card.description}</div>
                  <div className="text-[7px] text-accent">MINIGAME: {minigame.title}</div>
                  <div className="text-[6px] text-zinc-500 mt-1">{minigame.instruction}</div>

                  {/* Arrow pointing down */}
                  <div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
                    style={{
                      borderLeft: "8px solid transparent",
                      borderRight: "8px solid transparent",
                      borderTop: "8px solid var(--primary)",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}

      {/* Prompt text */}
      {!disabled && (
        <motion.p
          className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-accent crt-glow whitespace-nowrap"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        >
          HOVER TO INSPECT • CLICK CENTER CARD TO PLAY
        </motion.p>
      )}
    </div>
  )
}
