"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { PlayerCard, Minigame } from "@/lib/game-data"
import { Server, Shield, Wrench, Users } from "lucide-react"

interface DuelistHandProps {
  card: PlayerCard
  minigame: Minigame
  onCardSelect: (card: PlayerCard) => void
  disabled: boolean
  hintActive: boolean
  isActivating: boolean
}

const CardIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "debian":
      return <Server className="w-10 h-10 md:w-14 md:h-14" />
    case "firefox":
      return <Shield className="w-10 h-10 md:w-14 md:h-14" />
    case "framework":
      return <Wrench className="w-10 h-10 md:w-14 md:h-14" />
    case "mastodon":
      return <Users className="w-10 h-10 md:w-14 md:h-14" />
    default:
      return <Server className="w-10 h-10 md:w-14 md:h-14" />
  }
}

export function DuelistHand({ card, minigame, onCardSelect, disabled, hintActive, isActivating }: DuelistHandProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activatingCard, setActivatingCard] = useState<number | null>(null)

  // 5 cards in arc formation
  const cards = [
    { ...card, id: 0, isReal: false },
    { ...card, id: 1, isReal: false },
    { ...card, id: 2, isReal: true }, // Center card is the counter
    { ...card, id: 3, isReal: false },
    { ...card, id: 4, isReal: false },
  ]

  const handleCardClick = (index: number, c: (typeof cards)[0]) => {
    if (disabled || !c.isReal) return
    setActivatingCard(index)
    setTimeout(() => {
      onCardSelect(card)
    }, 100)
  }

  return (
    <div
      className="relative h-44 md:h-56 w-full flex items-end justify-center pb-2"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
    >
      {/* Holographic duel disk base */}
      <div
        className="absolute bottom-0 w-[400px] md:w-[500px] h-16 md:h-20"
        style={{
          background: "linear-gradient(to top, rgba(100, 150, 255, 0.15), transparent)",
          borderTop: "2px solid rgba(100, 150, 255, 0.3)",
          transform: "rotateX(75deg) translateZ(-20px)",
          transformOrigin: "bottom center",
        }}
      />

      {cards.map((c, index) => {
        const isHovered = hoveredCard === index
        const isActivated = activatingCard === index && isActivating
        const offset = index - 2 // -2, -1, 0, 1, 2
        const arcAngle = offset * 12 // Spread angle
        const arcY = Math.abs(offset) * 8 // Arc height

        return (
          <motion.div
            key={c.id}
            className={`absolute ${c.isReal && !disabled ? "cursor-pointer" : "cursor-default"} ${isActivated ? "card-activate" : ""} pointer-events-auto`}
            style={{
              transformStyle: "preserve-3d",
              left: `calc(50% + ${offset * 70}px)`,
              marginLeft: "-56px",
            }}
            initial={{
              rotateX: 60,
              rotateZ: arcAngle,
              y: arcY,
            }}
            animate={
              isHovered && !isActivated
                ? {
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    y: -140,
                    z: 150,
                    scale: 2,
                  }
                : {
                    rotateX: 60,
                    rotateY: 0,
                    rotateZ: arcAngle,
                    y: arcY,
                    z: 0,
                    scale: 1,
                  }
            }
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onMouseEnter={() => !disabled && setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(index, c)}
          >
            {/* The 3D Card - thick futuristic data-slate */}
            <div
              className={`
                w-28 md:w-32 h-40 md:h-48 
                ${disabled ? "opacity-40" : ""}
                ${c.isReal && hintActive ? "golden-hint-glow" : ""}
              `}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card face */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black card-3d flex flex-col items-center justify-center p-3"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Holographic overlay when hovered */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 holographic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                  />
                )}

                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 flex items-center justify-center border-b border-primary/30">
                  <span className="text-[5px] md:text-[6px] text-primary/80">OPEN SOURCE TECH</span>
                </div>

                {/* Card content */}
                <div className="text-primary crt-glow mb-2 mt-4">
                  <CardIcon type={card.type} />
                </div>
                <div className="text-[7px] md:text-[9px] text-primary crt-glow text-center mb-1 font-bold">
                  {card.name}
                </div>
                <div className="text-[5px] md:text-[6px] text-muted-foreground text-center px-1">
                  {card.description}
                </div>

                {/* Bottom indicator */}
                {c.isReal && (
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <div className="text-[4px] md:text-[5px] text-accent border-t border-accent/30 pt-1">
                      COUNTER CARD
                    </div>
                  </div>
                )}
              </div>

              {/* Card thickness (sides for 3D effect) */}
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

            {/* Detailed tooltip when hovered on real card */}
            <AnimatePresence>
              {isHovered && c.isReal && (
                <motion.div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-52 md:w-60 bg-black/95 border-2 border-primary p-3 z-50"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  style={{
                    boxShadow: "0 0 30px rgba(100, 150, 255, 0.5)",
                    transform: "translateX(-50%) rotateX(0deg)",
                  }}
                >
                  <div className="text-[8px] text-primary crt-glow mb-1 font-bold">{card.name}</div>
                  <div className="text-[7px] text-muted-foreground mb-2">{card.description}</div>
                  <div className="border-t border-primary/30 pt-2">
                    <div className="text-[7px] text-accent">MINIGAME: {minigame.title}</div>
                    <div className="text-[6px] text-zinc-500 mt-1">{minigame.instruction}</div>
                  </div>
                  <div className="text-[6px] text-primary/60 mt-2 text-center">CLICK TO ACTIVATE</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}

      {/* Prompt text */}
      {!disabled && (
        <motion.p
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] text-accent crt-glow whitespace-nowrap z-30"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        >
          HOVER TO INSPECT • PLAY CENTER COUNTER CARD
        </motion.p>
      )}
    </div>
  )
}
