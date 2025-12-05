"use client"

import { motion } from "framer-motion"
import type { Boss } from "@/lib/game-data"
import { Eye, Apple, ThumbsDown, Package, X, Scale, CreditCard, Skull, Zap } from "lucide-react"

interface EvilMainframeProps {
  boss: Boss | undefined
  health: number
  maxHealth: number
  isFlashing: boolean
  isAttacking: boolean
}

const BossIcon = ({ type, color }: { type: string; color: string }) => {
  const iconProps = { className: "w-10 h-10 md:w-14 md:h-14", style: { color } }

  switch (type) {
    case "microsoft":
      return (
        <div className="grid grid-cols-2 gap-0.5 w-10 h-10 md:w-14 md:h-14">
          <div className="bg-[#F25022] rounded-sm" />
          <div className="bg-[#7FBA00] rounded-sm" />
          <div className="bg-[#00A4EF] rounded-sm" />
          <div className="bg-[#FFB900] rounded-sm" />
        </div>
      )
    case "google":
      return <Eye {...iconProps} />
    case "apple":
      return <Apple {...iconProps} />
    case "facebook":
      return <ThumbsDown {...iconProps} />
    case "amazon":
      return <Package {...iconProps} />
    case "twitter":
      return <X {...iconProps} />
    case "oracle":
      return <Scale {...iconProps} />
    case "adobe":
      return <CreditCard {...iconProps} />
    default:
      return <Skull {...iconProps} />
  }
}

export function EvilMainframe({ boss, health, maxHealth, isFlashing, isAttacking }: EvilMainframeProps) {
  // ======================================================================================
  // SAFE BOSS FALLBACK (important!)
  // ======================================================================================

  const safeBoss: Boss = boss ?? {
    name: "Unknown Boss",
    subtitle: "",
    type: "unknown",
    health: 100,
    attacks: [
      {
        name: "Unknown Attack",
        type: "health",
        damage: 0,
        icon: "",
        description: "",
      },
    ],
    counter: {} as any, // You can fill this with a real counter later
    minigame: {} as any, // same here
    color: "#ff0000",
    secondaryColor: "#550000",
    icon: "",
    tagline: "",
  }

  // First attack (fallback-safe)
  const firstAttack = safeBoss.attacks?.[0]
  const safeAttackName = firstAttack?.name ?? "Unknown Attack"

  const safeTagline = safeBoss.tagline ?? ""

  const healthPercent = (health / maxHealth) * 100

  return (
    <motion.div
      className="relative"
      animate={isAttacking ? { x: [0, -8, 8, -8, 8, 0] } : {}}
      transition={{ duration: 0.4 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <motion.div
        className="relative"
        animate={{
          rotateY: isAttacking ? [0, -5, 5, 0] : 0,
          scale: isFlashing ? [1, 1.05, 1] : 1,
        }}
        transition={{ duration: 0.5 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Main tower */}
        <div
          className="w-52 md:w-72 h-48 md:h-60 relative overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${safeBoss.secondaryColor} 0%, #0a0a0a 50%, #000 100%)`,
            borderRadius: "4px",
            boxShadow: isFlashing
              ? `0 0 60px ${safeBoss.color}80, 0 0 120px ${safeBoss.color}40, inset 0 0 30px ${safeBoss.color}20`
              : `0 20px 60px rgba(0,0,0,0.8), 0 0 40px ${safeBoss.color}20`,
            border: `1px solid ${safeBoss.color}40`,
            transform: "translateZ(0)",
          }}
        >
          {/* Glowing top */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg, transparent, ${safeBoss.color}, transparent)`,
              boxShadow: `0 0 20px ${safeBoss.color}`,
            }}
          />

          {/* Logo */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2">
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center relative"
              style={{
                background: `radial-gradient(circle, ${safeBoss.secondaryColor}40 0%, transparent 70%)`,
                boxShadow: isFlashing
                  ? `0 0 40px ${safeBoss.color}, inset 0 0 20px ${safeBoss.color}40`
                  : `0 0 20px ${safeBoss.color}60, inset 0 0 10px ${safeBoss.color}20`,
              }}
              animate={{
                boxShadow: isAttacking
                  ? [`0 0 20px ${safeBoss.color}60`, `0 0 50px ${safeBoss.color}`, `0 0 20px ${safeBoss.color}60`]
                  : `0 0 20px ${safeBoss.color}60`,
              }}
              transition={{ duration: 0.3, repeat: isAttacking ? 3 : 0 }}
            >
              <BossIcon type={safeBoss.type} color={safeBoss.color} />
            </motion.div>
          </div>

          {/* Tagline scroller (FIXED!) */}
          <div className="absolute bottom-10 left-0 right-0 overflow-hidden h-6 flex items-center">
            <motion.div
              className="whitespace-nowrap text-[8px] md:text-[10px] font-mono"
              style={{ color: safeBoss.color }}
              animate={{ x: [200, -400] }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {`>>> ${safeTagline} >>> ${safeAttackName} >>> `.repeat(3)}
            </motion.div>
          </div>
        </div>

        {/* Base glow */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-56 md:w-80 h-4"
          style={{
            background: `radial-gradient(ellipse, ${safeBoss.color}40 0%, transparent 70%)`,
            filter: "blur(8px)",
          }}
        />
      </motion.div>

      {/* Boss name */}
      <div className="mt-4 text-center">
        <motion.div
          className="text-base md:text-xl font-black tracking-wider"
          style={{
            color: safeBoss.color,
            textShadow: `0 0 20px ${safeBoss.color}80, 0 0 40px ${safeBoss.color}40`,
          }}
          animate={isAttacking ? { scale: [1, 1.1, 1] } : {}}
        >
          {safeBoss.name}
        </motion.div>

        <div className="text-[9px] md:text-xs text-zinc-500 mt-1 font-medium tracking-wide">
          {safeBoss.subtitle}
        </div>

        {/* Attack indicator (FIXED for array!) */}
        {isAttacking && (
          <motion.div
            className="flex items-center justify-center gap-1 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Zap className="w-3 h-3" style={{ color: safeBoss.color }} />
            <span className="text-[8px] md:text-[10px] font-bold" style={{ color: safeBoss.color }}>
              {safeAttackName}
            </span>
            <Zap className="w-3 h-3" style={{ color: safeBoss.color }} />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
