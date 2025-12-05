"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  Bug,
  AlertTriangle,
  Download,
  Monitor,
  Mic,
  Globe,
  Eye,
  ImageIcon,
  Database,
  Play,
  Usb,
  Battery,
  Receipt,
  Lock,
  ScrollText,
  Newspaper,
  Unlock,
  Headset,
  Package,
  Timer,
  Copy,
  Shuffle,
  BadgeCheck,
  Bot,
  Scale,
  Coffee,
  Link2,
  Building,
  CreditCard,
  Cloud,
  Trash,
  Sparkles,
} from "lucide-react"
import type { Attack } from "@/lib/game-data"

interface BugCardProps {
  attackName: string
  bossName: string
  attack?: Attack
  bossColor?: string
}

const ATTACK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  download: Download,
  monitor: Monitor,
  mic: Mic,
  globe: Globe,
  eye: Eye,
  image: ImageIcon,
  database: Database,
  play: Play,
  usb: Usb,
  battery: Battery,
  receipt: Receipt,
  lock: Lock,
  scrollText: ScrollText,
  newspaper: Newspaper,
  unlock: Unlock,
  headset: Headset,
  package: Package,
  timer: Timer,
  copy: Copy,
  shuffle: Shuffle,
  badgeCheck: BadgeCheck,
  bot: Bot,
  scale: Scale,
  coffee: Coffee,
  chain: Link2,
  building: Building,
  creditCard: CreditCard,
  cloud: Cloud,
  trash: Trash,
  sparkles: Sparkles,
}

export function BugCard({ attackName, bossName, attack, bossColor = "#f59e0b" }: BugCardProps) {
  const AttackIcon = attack?.icon ? ATTACK_ICONS[attack.icon] || Bug : Bug

  return (
    <motion.div
      className="relative"
      initial={{ z: -500, scale: 0.3, rotateX: 90, opacity: 0 }}
      animate={{ z: 0, scale: 1, rotateX: 0, opacity: 1 }}
      exit={{ z: 500, scale: 0.5, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="w-48 md:w-56 h-64 md:h-80 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 flex flex-col rounded-xl overflow-hidden"
        style={{
          border: `2px solid ${bossColor}`,
          boxShadow: `
            0 0 40px ${bossColor}66,
            0 0 80px ${bossColor}33,
            0 25px 60px rgba(0, 0, 0, 0.8),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Top header with boss color */}
        <div
          className="h-10 flex items-center justify-center gap-2 border-b"
          style={{
            background: `linear-gradient(to right, ${bossColor}20, ${bossColor}40, ${bossColor}20)`,
            borderColor: `${bossColor}50`,
          }}
        >
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: bossColor }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          />
          <div className="text-[9px] font-bold tracking-wider" style={{ color: bossColor }}>
            INCOMING THREAT
          </div>
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: bossColor }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center p-5 gap-5">
          {/* Threat icon */}
          <motion.div
            className="relative"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="p-5 rounded-full bg-zinc-900/80 border-2" style={{ borderColor: `${bossColor}50` }}>
              <AttackIcon className="w-14 h-14 md:w-18 md:h-18" style={{ color: bossColor }} />
            </div>
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.4, 0.8] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <AlertTriangle className="w-6 h-6 md:w-7 md:h-7" style={{ color: bossColor }} />
            </motion.div>
          </motion.div>

          {/* Attack name */}
          <div className="text-center">
            <div
              className="text-base md:text-lg font-bold mb-1"
              style={{ color: bossColor, textShadow: `0 0 15px ${bossColor}80` }}
            >
              {attackName}
            </div>
            {attack?.description && (
              <div className="text-[10px] md:text-xs text-zinc-400 italic mb-2">"{attack.description}"</div>
            )}
            <div className="text-[9px] text-zinc-500">FROM: {bossName}</div>
          </div>

          {/* Threat level bar */}
          <div className="w-full px-3">
            <div className="flex justify-between text-[7px] text-zinc-500 mb-1.5 tracking-wider">
              <span>THREAT LEVEL</span>
              <span style={{ color: bossColor }}>{attack?.damage || 25} DMG</span>
            </div>
            <div className="h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(to right, ${bossColor}, ${bossColor}cc)` }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="h-8 bg-zinc-900/50 flex items-center justify-center border-t border-zinc-800/50">
          <motion.span
            className="text-[8px] text-zinc-500 tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            AWAITING COUNTERMEASURE
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}
