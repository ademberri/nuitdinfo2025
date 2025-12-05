"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MousePointerClick,
  Gamepad2,
  ChevronRight,
  ChevronLeft,
  Shield,
  Target,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react"

interface TutorialOverlayProps {
  onComplete: () => void
}

const TUTORIAL_STEPS = [
  {
    id: "welcome",
    title: "WELCOME, DEFENDER",
    subtitle: "The Open Source Resistance needs you",
    icon: Shield,
    content:
      "Evil tech corporations have corrupted the digital realm. Only you can stop them using the power of open source software.",
    interactive: null,
    color: "cyan",
  },
  {
    id: "enemy",
    title: "KNOW YOUR ENEMY",
    subtitle: "Corporate mainframes are attacking",
    icon: AlertTriangle,
    content:
      "Each corporation has unique attacks based on their real-world evil practices. Study their patterns and find their weakness!",
    interactive: "enemy-preview",
    color: "red",
  },
  {
    id: "deck",
    title: "YOUR WEAPON: THE DECK",
    subtitle: "Click to draw your cards",
    icon: MousePointerClick,
    content: "When attacked, click your DECK to draw 3 cards. One card is the COUNTER - it deals massive damage!",
    interactive: "deck-demo",
    color: "green",
  },
  {
    id: "counter",
    title: "FIND THE COUNTER",
    subtitle: "Match the right tool to the threat",
    icon: Target,
    content:
      "Each boss has a specific weakness. Firefox beats Google's trackers, Linux beats Windows updates. Choose wisely!",
    interactive: "card-match",
    color: "yellow",
  },
  {
    id: "minigame",
    title: "PROVE YOUR SKILL",
    subtitle: "Complete minigames to attack",
    icon: Gamepad2,
    content:
      "After selecting a card, you must complete a retro minigame to deploy your hack. Win = damage. Lose = you get hit!",
    interactive: "minigame-preview",
    color: "purple",
  },
  {
    id: "ready",
    title: "YOU ARE READY",
    subtitle: "Defend the open source realm!",
    icon: Sparkles,
    content: "Defeat all corporate bosses to save the digital world. Good luck, defender!",
    interactive: null,
    color: "cyan",
  },
]

export function TutorialOverlay({ onComplete }: TutorialOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [demoCardHovered, setDemoCardHovered] = useState(false)
  const [demoCardClicked, setDemoCardClicked] = useState(false)
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null)

  const step = TUTORIAL_STEPS[currentStep]
  const isLastStep = currentStep === TUTORIAL_STEPS.length - 1
  const isFirstStep = currentStep === 0

  const nextStep = () => {
    if (isLastStep) {
      onComplete()
    } else {
      setCurrentStep((prev) => prev + 1)
      setDemoCardClicked(false)
      setSelectedMatch(null)
    }
  }

  const prevStep = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1)
      setDemoCardClicked(false)
      setSelectedMatch(null)
    }
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
      cyan: {
        bg: "bg-cyan-500/20",
        border: "border-cyan-500",
        text: "text-cyan-400",
        glow: "0 0 40px rgba(0, 255, 255, 0.3)",
      },
      red: {
        bg: "bg-red-500/20",
        border: "border-red-500",
        text: "text-red-400",
        glow: "0 0 40px rgba(255, 0, 0, 0.3)",
      },
      green: {
        bg: "bg-green-500/20",
        border: "border-green-500",
        text: "text-green-400",
        glow: "0 0 40px rgba(0, 255, 0, 0.3)",
      },
      yellow: {
        bg: "bg-yellow-500/20",
        border: "border-yellow-500",
        text: "text-yellow-400",
        glow: "0 0 40px rgba(255, 255, 0, 0.3)",
      },
      purple: {
        bg: "bg-purple-500/20",
        border: "border-purple-500",
        text: "text-purple-400",
        glow: "0 0 40px rgba(180, 0, 255, 0.3)",
      },
    }
    return colors[color] || colors.cyan
  }

  const colorClasses = getColorClasses(step.color)
  const StepIcon = step.icon

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background grid effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        className={`relative w-full max-w-2xl ${colorClasses.bg} border-2 ${colorClasses.border} p-8 rounded-lg`}
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        style={{ boxShadow: colorClasses.glow }}
        key={currentStep}
      >
        {/* Progress indicators */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
          {TUTORIAL_STEPS.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full border ${
                index === currentStep
                  ? `${colorClasses.border} ${colorClasses.bg}`
                  : index < currentStep
                    ? "border-green-500 bg-green-500/50"
                    : "border-zinc-600 bg-zinc-800"
              }`}
              animate={index === currentStep ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
          ))}
        </div>

        {/* Step number */}
        <div className="absolute top-4 right-4 text-xs text-zinc-500">
          {currentStep + 1} / {TUTORIAL_STEPS.length}
        </div>

        {/* Main content */}
        <div className="mt-6 text-center">
          {/* Icon */}
          <motion.div
            className={`inline-flex p-4 rounded-full ${colorClasses.bg} border ${colorClasses.border} mb-4`}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <StepIcon className={`w-12 h-12 ${colorClasses.text}`} />
          </motion.div>

          {/* Title */}
          <motion.h2
            className={`text-2xl md:text-3xl font-bold ${colorClasses.text} mb-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textShadow: colorClasses.glow }}
          >
            {step.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-sm text-zinc-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {step.subtitle}
          </motion.p>

          {/* Content */}
          <motion.p
            className="text-base md:text-lg text-zinc-300 mb-8 leading-relaxed max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {step.content}
          </motion.p>

          {/* Interactive elements */}
          <AnimatePresence mode="wait">
            {step.interactive === "enemy-preview" && (
              <motion.div
                className="mb-8 flex justify-center gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {["MICRO-SOFT", "GOGGLE", "FACE-BOOK"].map((name, i) => (
                  <motion.div
                    key={name}
                    className="px-4 py-3 bg-zinc-900 border border-red-500/50 rounded text-sm"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="text-red-400 font-bold">{name}</div>
                    <div className="text-[10px] text-zinc-500 mt-1">CORPORATE EVIL</div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {step.interactive === "deck-demo" && (
              <motion.div
                className="mb-8 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.button
                  className={`relative w-32 h-44 rounded-lg border-2 transition-all cursor-pointer ${
                    demoCardClicked
                      ? "border-green-500 bg-green-500/20"
                      : demoCardHovered
                        ? "border-cyan-400 bg-cyan-500/20"
                        : "border-zinc-600 bg-zinc-900"
                  }`}
                  onMouseEnter={() => setDemoCardHovered(true)}
                  onMouseLeave={() => setDemoCardHovered(false)}
                  onClick={() => setDemoCardClicked(true)}
                  animate={!demoCardClicked ? { y: [0, -5, 0] } : {}}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  style={demoCardClicked ? { boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)" } : {}}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <MousePointerClick
                      className={`w-8 h-8 mb-2 ${demoCardClicked ? "text-green-400" : "text-zinc-400"}`}
                    />
                    <span className="text-xs text-zinc-400">{demoCardClicked ? "CLICKED!" : "CLICK ME"}</span>
                  </div>
                  {demoCardClicked && (
                    <motion.div className="absolute -top-2 -right-2" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </motion.div>
                  )}
                </motion.button>
              </motion.div>
            )}

            {step.interactive === "card-match" && (
              <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="text-xs text-zinc-500 mb-3">Which card counters GOGGLE?</div>
                <div className="flex justify-center gap-3">
                  {[
                    { name: "VIM", correct: false },
                    { name: "FIREFOX", correct: true },
                    { name: "TOR", correct: false },
                  ].map((card, i) => (
                    <motion.button
                      key={card.name}
                      className={`px-4 py-3 rounded border-2 transition-all ${
                        selectedMatch === i
                          ? card.correct
                            ? "border-green-500 bg-green-500/20"
                            : "border-red-500 bg-red-500/20"
                          : "border-zinc-600 bg-zinc-900 hover:border-zinc-400"
                      }`}
                      onClick={() => setSelectedMatch(i)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span
                        className={`text-sm font-bold ${
                          selectedMatch === i ? (card.correct ? "text-green-400" : "text-red-400") : "text-zinc-300"
                        }`}
                      >
                        {card.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
                {selectedMatch !== null && (
                  <motion.div
                    className={`mt-3 text-sm ${selectedMatch === 1 ? "text-green-400" : "text-red-400"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {selectedMatch === 1
                      ? "Correct! Firefox + uBlock blocks their trackers!"
                      : "Try again! Think about privacy..."}
                  </motion.div>
                )}
              </motion.div>
            )}

            {step.interactive === "minigame-preview" && (
              <motion.div
                className="mb-8 flex justify-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[
                  { name: "Minesweeper", icon: "💣" },
                  { name: "Dino Run", icon: "🦖" },
                  { name: "Snake", icon: "🐍" },
                  { name: "Invaders", icon: "👾" },
                ].map((game, i) => (
                  <motion.div
                    key={game.name}
                    className="text-center"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 1, delay: i * 0.15, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="text-3xl mb-1">{game.icon}</div>
                    <div className="text-[10px] text-zinc-500">{game.name}</div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-4">
          <motion.button
            onClick={prevStep}
            className={`flex items-center gap-2 px-4 py-2 rounded border transition-all ${
              isFirstStep
                ? "border-zinc-800 text-zinc-700 cursor-not-allowed"
                : "border-zinc-600 text-zinc-400 hover:border-zinc-400 hover:text-zinc-200"
            }`}
            disabled={isFirstStep}
            whileHover={!isFirstStep ? { x: -3 } : {}}
            whileTap={!isFirstStep ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm">BACK</span>
          </motion.button>

          <motion.button
            onClick={nextStep}
            className={`flex items-center gap-2 px-6 py-3 rounded border-2 ${colorClasses.border} ${colorClasses.text} font-bold`}
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.95 }}
            style={{ boxShadow: colorClasses.glow }}
          >
            <span>{isLastStep ? "START GAME" : "NEXT"}</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Skip button */}
        <motion.button
          onClick={onComplete}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Skip Tutorial
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
