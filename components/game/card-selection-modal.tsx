"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import type { PlayerCard } from "@/lib/game-data"
import { PenguinAdvisor } from "./penguin-advisor"
import { Server, Shield, Wrench, Users, Zap, Lock, Globe, Package, Rss, Database, Palette } from "lucide-react"

interface CardSelectionModalProps {
  hand: PlayerCard[]
  correctIndex: number
  onCardSelect: (card: PlayerCard, index: number) => void
}

const CardIcon = ({ type }: { type: string }) => {
  const iconClass = "w-10 h-10 md:w-14 md:h-14"
  switch (type) {
    case "debian":
      return <Server className={iconClass} />
    case "firefox":
      return <Shield className={iconClass} />
    case "framework":
      return <Wrench className={iconClass} />
    case "mastodon":
      return <Users className={iconClass} />
    case "vim":
      return <Zap className={iconClass} />
    case "gpg":
      return <Lock className={iconClass} />
    case "tor":
      return <Globe className={iconClass} />
    case "local":
      return <Package className={iconClass} />
    case "rss":
      return <Rss className={iconClass} />
    case "postgres":
      return <Database className={iconClass} />
    case "foss":
      return <Palette className={iconClass} />
    default:
      return <Server className={iconClass} />
  }
}

export function CardSelectionModal({ hand, correctIndex, onCardSelect }: CardSelectionModalProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [showPenguinHint, setShowPenguinHint] = useState(false)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredCard !== index) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        backdropFilter: "blur(16px)",
        backgroundColor: "rgba(0, 0, 0, 0.92)",
      }}
    >
      <div className="flex flex-col items-center" style={{ perspective: "1200px" }}>
        <motion.h2
          className="text-lg md:text-2xl text-emerald-400 font-black mb-10 tracking-[0.3em]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ textShadow: "0 0 30px rgba(52, 211, 153, 0.8)" }}
        >
          SELECT YOUR HACK
        </motion.h2>

        <div className="flex gap-6 md:gap-10">
          {hand.map((card, index) => (
            <motion.div
              key={index}
              className="cursor-pointer"
              initial={{ y: 150, opacity: 0, rotateX: -30 }}
              animate={{
                y: 0,
                opacity: 1,
                rotateX: 0,
                z: hoveredCard === index ? 50 : 0,
              }}
              transition={{
                delay: index * 0.12,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => {
                setHoveredCard(null)
                setMousePosition({ x: 0, y: 0 })
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onClick={() => onCardSelect(card, index)}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className={`
                  w-32 h-48 md:w-44 md:h-64 
                  relative overflow-hidden
                  rounded-xl
                  ${showPenguinHint && index === correctIndex ? "golden-hint-glow" : ""}
                `}
                animate={{
                  rotateY: hoveredCard === index ? mousePosition.x * 25 : 0,
                  rotateX: hoveredCard === index ? -mousePosition.y * 25 : 0,
                  scale: hoveredCard === index ? 1.1 : 1,
                  y: hoveredCard === index ? -20 : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                  transformStyle: "preserve-3d",
                  background:
                    hoveredCard === index
                      ? "linear-gradient(145deg, #1a2a1a 0%, #0d1f0d 50%, #0a0a0a 100%)"
                      : "linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0a0a0a 100%)",
                  boxShadow:
                    hoveredCard === index
                      ? "0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(52, 211, 153, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                      : "0 15px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
                  border:
                    showPenguinHint && index === correctIndex
                      ? "2px solid rgba(251, 191, 36, 0.8)"
                      : hoveredCard === index
                        ? "1px solid rgba(52, 211, 153, 0.5)"
                        : "1px solid rgba(100, 100, 120, 0.3)",
                }}
              >
                {/* Card inner glow layer */}
                <div
                  className="absolute inset-0 rounded-xl opacity-50"
                  style={{
                    background:
                      hoveredCard === index
                        ? `radial-gradient(circle at ${50 + mousePosition.x * 50}% ${50 + mousePosition.y * 50}%, rgba(52, 211, 153, 0.15) 0%, transparent 60%)`
                        : "none",
                  }}
                />

                {/* Holographic shine effect */}
                {hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)",
                    }}
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                )}

                {/* Top border glow */}
                <div
                  className="absolute top-0 left-4 right-4 h-px"
                  style={{
                    background:
                      hoveredCard === index
                        ? "linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.8), transparent)"
                        : "linear-gradient(90deg, transparent, rgba(100, 150, 255, 0.3), transparent)",
                  }}
                />

                {/* Card content */}
                <div
                  className="relative h-full flex flex-col items-center justify-center p-4"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {/* Icon container with glow */}
                  <motion.div
                    className="mb-4 p-3 rounded-lg"
                    style={{
                      background: hoveredCard === index ? "rgba(52, 211, 153, 0.1)" : "rgba(100, 150, 255, 0.05)",
                      boxShadow: hoveredCard === index ? "0 0 20px rgba(52, 211, 153, 0.3)" : "none",
                    }}
                    animate={{
                      scale: hoveredCard === index ? [1, 1.05, 1] : 1,
                    }}
                    transition={{ duration: 1.5, repeat: hoveredCard === index ? Number.POSITIVE_INFINITY : 0 }}
                  >
                    <div
                      className={`${hoveredCard === index ? "text-emerald-400" : "text-zinc-400"} transition-colors duration-300`}
                    >
                      <CardIcon type={card.type} />
                    </div>
                  </motion.div>

                  {/* Card name */}
                  <h3
                    className={`text-xs md:text-sm text-center font-black tracking-wide mb-2 transition-colors duration-300 ${
                      hoveredCard === index ? "text-emerald-300" : "text-zinc-200"
                    }`}
                  >
                    {card.name}
                  </h3>

                  {/* Card description */}
                  <p className="text-[8px] md:text-[10px] text-zinc-500 text-center leading-relaxed px-2">
                    {card.description}
                  </p>

                  {/* Type badge */}
                  <div
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[6px] md:text-[8px] font-bold tracking-wider"
                    style={{
                      background: hoveredCard === index ? "rgba(52, 211, 153, 0.2)" : "rgba(100, 100, 120, 0.2)",
                      color: hoveredCard === index ? "#34d399" : "#71717a",
                      border:
                        hoveredCard === index
                          ? "1px solid rgba(52, 211, 153, 0.3)"
                          : "1px solid rgba(100, 100, 120, 0.2)",
                    }}
                  >
                    {card.type.toUpperCase()}
                  </div>
                </div>

                {/* Bottom border glow */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-px"
                  style={{
                    background:
                      hoveredCard === index
                        ? "linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.5), transparent)"
                        : "linear-gradient(90deg, transparent, rgba(100, 100, 120, 0.3), transparent)",
                  }}
                />

                {/* 3D edge effect - right side */}
                <div
                  className="absolute top-0 right-0 bottom-0 w-1 rounded-r-xl"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.5))",
                    transform: "translateZ(-2px)",
                  }}
                />

                {/* 3D edge effect - bottom */}
                <div
                  className="absolute left-0 right-0 bottom-0 h-1 rounded-b-xl"
                  style={{
                    background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.5))",
                    transform: "translateZ(-2px)",
                  }}
                />
              </motion.div>

              {/* Card shadow on ground */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 md:w-36 h-4 rounded-full"
                style={{
                  background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
                  filter: "blur(8px)",
                }}
                animate={{
                  scale: hoveredCard === index ? 1.3 : 1,
                  opacity: hoveredCard === index ? 0.8 : 0.4,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Penguin Advisor */}
        <PenguinAdvisor onHint={() => setShowPenguinHint(true)} hintActive={showPenguinHint} />
      </div>
    </motion.div>
  )
}
