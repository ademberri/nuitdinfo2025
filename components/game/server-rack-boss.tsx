"use client"

import { motion } from "framer-motion"
import type { Boss } from "@/lib/game-data"

interface ServerRackBossProps {
  boss: Boss
  health: number
  isFlashing: boolean
  isAttacking: boolean
}

export function ServerRackBoss({ boss, health, isFlashing, isAttacking }: ServerRackBossProps) {
  const healthPercent = (health / boss.health) * 100

  return (
    <motion.div
      className="relative"
      animate={isAttacking ? { x: [0, -5, 5, -5, 5, 0] } : {}}
      transition={{ duration: 0.3 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Evil Server Rack - CSS 3D construction */}
      <div
        className={`relative transition-all duration-300 ${isFlashing ? "brightness-150" : ""}`}
        style={{
          filter: isFlashing
            ? "drop-shadow(0 0 30px rgba(255, 50, 50, 0.8))"
            : "drop-shadow(0 0 20px rgba(255, 50, 50, 0.4))",
        }}
      >
        {/* Main rack body */}
        <div className="w-48 md:w-64 h-32 md:h-40 bg-gradient-to-b from-zinc-800 to-zinc-900 border-2 border-zinc-600 relative">
          {/* Top ventilation */}
          <div className="absolute top-1 left-2 right-2 h-2 flex gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex-1 bg-zinc-950" />
            ))}
          </div>

          {/* Server units */}
          <div className="absolute top-5 left-2 right-2 bottom-2 flex flex-col gap-1">
            {/* Unit 1 - with screen */}
            <div className="flex-1 bg-zinc-950 border border-zinc-700 flex items-center px-2 gap-2">
              <div
                className={`w-2 h-2 rounded-full ${isFlashing ? "bg-red-400 led-blink" : "bg-red-600 led-blink-slow"}`}
              />
              <div
                className={`w-2 h-2 rounded-full ${isFlashing ? "bg-red-400 led-blink" : "bg-red-600 led-blink-slow"}`}
                style={{ animationDelay: "0.2s" }}
              />
              <div className="flex-1 h-4 md:h-5 bg-zinc-900 border border-zinc-700 flex items-center justify-center overflow-hidden">
                <motion.span
                  className="text-[6px] md:text-[8px] text-red-500 font-mono whitespace-nowrap"
                  animate={{ x: [100, -100] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  {boss.attack.name} DEPLOYED... TARGETING USER...
                </motion.span>
              </div>
            </div>

            {/* Unit 2 */}
            <div className="flex-1 bg-zinc-950 border border-zinc-700 flex items-center px-2 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${i < 3 ? "bg-red-500 led-blink" : "bg-green-500 led-blink-slow"}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
              <div className="flex-1" />
              <div className="text-[5px] md:text-[6px] text-zinc-500">PWR</div>
            </div>

            {/* Unit 3 */}
            <div className="flex-1 bg-zinc-950 border border-zinc-700 flex items-center px-2 gap-1">
              <div className="w-3 h-3 md:w-4 md:h-4 border border-zinc-600 flex items-center justify-center">
                <motion.div
                  className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-1 h-3 md:h-4 bg-zinc-700" style={{ opacity: 0.5 + i * 0.1 }} />
              ))}
            </div>

            {/* Unit 4 - storage drives */}
            <div className="flex-1 bg-zinc-950 border border-zinc-700 flex items-center px-1 gap-0.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-full bg-zinc-800 border border-zinc-700 flex flex-col items-center justify-center"
                >
                  <div
                    className={`w-1 h-1 rounded-full ${isFlashing ? "bg-orange-400" : "bg-green-500"} led-blink-slow`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Side rails */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-r from-zinc-600 to-zinc-700" />
          <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-gradient-to-l from-zinc-600 to-zinc-700" />
        </div>

        {/* Boss name plate */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center">
          <div className="text-xs md:text-sm text-destructive crt-glow">{boss.name}</div>
          <div className="text-[6px] md:text-[8px] text-muted-foreground">{boss.subtitle}</div>
        </div>
      </div>

      {/* Health bar below rack */}
      <div className="mt-8 w-48 md:w-64">
        <div className="text-[8px] text-muted-foreground mb-1 text-center">
          SYSTEM INTEGRITY: {health}/{boss.health}
        </div>
        <div className="h-2 md:h-3 bg-zinc-900 border border-zinc-700 relative overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-700 to-red-500"
            initial={{ width: "100%" }}
            animate={{ width: `${healthPercent}%` }}
            transition={{ duration: 0.5 }}
          />
          {/* Segmented overlay */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-zinc-800 last:border-r-0" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
