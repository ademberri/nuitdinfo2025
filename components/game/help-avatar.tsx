"use client"

import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, Sparkles } from "lucide-react"

interface HelpAvatarProps {
  visible: boolean
  onActivate: () => void
}

export function HelpAvatar({ visible, onActivate }: HelpAvatarProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          onClick={onActivate}
        >
          {/* Frantic bouncing avatar */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -8, 0, -5, 0],
              rotate: [-5, 5, -5, 5, 0],
            }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          >
            {/* Glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: "0 0 20px rgba(255, 200, 50, 0.6), 0 0 40px rgba(255, 200, 50, 0.3)",
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Avatar circle */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center border-2 border-yellow-300">
              <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-black" />
            </div>

            {/* Sparkles */}
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </motion.div>
          </motion.div>

          {/* Label */}
          <motion.div
            className="text-[8px] md:text-[9px] text-yellow-400 crt-glow bg-black/80 px-2 py-1 border border-yellow-500/50"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          >
            HINT?
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
