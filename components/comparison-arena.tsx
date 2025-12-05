"use client"

import { motion } from "framer-motion"
import { Lock, Recycle } from "lucide-react"

export function ComparisonArena() {
  return (
    <section id="compare" className="relative py-24 px-4 lg:px-8 bg-[#050508]">
      {/* Background grid - consistent pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,128,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,128,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff0080] opacity-5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00ffff] opacity-5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs tracking-[0.5em] text-[#ffff00] mb-4">{"// COMPARISON ARENA"}</div>
          <h3 className="font-mono text-3xl lg:text-5xl font-bold text-white">
            THE <span className="text-[#ff0080] drop-shadow-[0_0_10px_#ff0080]">REALITY</span>{" "}
            <span className="text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">CHECK</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Empire Card - left side */}
          <motion.div
            className="relative p-8 border-4 border-[#ff0080] border-r-2 lg:border-r-2 bg-black/60"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ boxShadow: "0 0 30px rgba(255,0,128,0.2)" }}
          >
            <div className="absolute -top-4 left-8 px-4 py-1 bg-black border-2 border-[#ff0080] font-mono text-[#ff0080] text-sm">
              THE PROPRIETARY GIANT
            </div>

            <div className="flex items-center gap-4 mb-8 mt-4">
              <Lock className="w-12 h-12 text-[#ff0080]" />
              <div>
                <a
                  href="https://www.microsoft.com/windows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <h4 className="font-mono text-2xl text-white hover:text-[#ff0080] transition-colors">WINDOWS</h4>
                </a>
                <p className="font-mono text-xs text-gray-500">CLOSED SOURCE</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="font-mono text-xs text-red-400 tracking-wider mb-4">{">>> THE TRAP"}</div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border border-red-900/50 bg-red-950/20">
                  <span className="text-red-500 font-mono">✗</span>
                  <div>
                    <h5 className="font-mono text-white text-sm">FORCED OBSOLESCENCE</h5>
                    <p className="font-mono text-xs text-gray-400 mt-1">Throwing away perfectly good PCs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border border-red-900/50 bg-red-950/20">
                  <span className="text-red-500 font-mono">✗</span>
                  <div>
                    <h5 className="font-mono text-white text-sm">HIGH COST</h5>
                    <p className="font-mono text-xs text-gray-400 mt-1">Expensive licenses & upgrades</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border border-red-900/50 bg-red-950/20">
                  <span className="text-red-500 font-mono">✗</span>
                  <div>
                    <h5 className="font-mono text-white text-sm">CLOSED GARDEN</h5>
                    <p className="font-mono text-xs text-gray-400 mt-1">No freedom, no transparency</p>
                  </div>
                </div>
              </div>

              <div className="font-mono text-xs text-gray-500 tracking-wider mt-6 mb-4">{">>> THE FAMILIAR"}</div>

              <div className="flex items-start gap-4 p-4 border border-gray-800 bg-gray-900/20">
                <span className="text-gray-500 font-mono">○</span>
                <div>
                  <h5 className="font-mono text-gray-300 text-sm">INDUSTRY STANDARD</h5>
                  <p className="font-mono text-xs text-gray-500 mt-1">Everyone already knows it</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resistance Card - right side */}
          <motion.div
            className="relative p-8 border-4 border-[#00ffff] border-l-2 lg:border-l-2 bg-black/60"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ boxShadow: "0 0 30px rgba(0,255,255,0.2)" }}
          >
            <div className="absolute -top-4 left-8 px-4 py-1 bg-black border-2 border-[#00ffff] font-mono text-[#00ffff] text-sm shadow-[0_0_10px_rgba(0,255,255,0.5)]">
              THE SUSTAINABLE VILLAGE
            </div>

            <div className="flex items-center gap-4 mb-8 mt-4">
              <Recycle className="w-12 h-12 text-[#00ffff]" />
              <div>
                <a
                  href="https://www.linux.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <h4 className="font-mono text-2xl text-white hover:text-[#00ffff] transition-colors">LINUX</h4>
                </a>
                <a
                  href="https://opensource.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-gray-500 hover:text-[#00ffff] transition-colors"
                >
                  OPEN SOURCE
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="font-mono text-xs text-[#00ffff] tracking-wider mb-4">{">>> THE FREEDOM"}</div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border border-[#00ffff]/30 bg-[#00ffff]/5">
                  <span className="text-[#00ffff] font-mono">✓</span>
                  <div>
                    <h5 className="font-mono text-white text-sm">IMMORTAL HARDWARE</h5>
                    <p className="font-mono text-xs text-gray-400 mt-1">Runs smoothly on old PCs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border border-[#00ffff]/30 bg-[#00ffff]/5">
                  <span className="text-[#00ffff] font-mono">✓</span>
                  <div>
                    <h5 className="font-mono text-white text-sm">ZERO COST</h5>
                    <p className="font-mono text-xs text-gray-400 mt-1">Free forever, community-driven</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border border-[#00ffff]/30 bg-[#00ffff]/5">
                  <span className="text-[#00ffff] font-mono">✓</span>
                  <div>
                    <h5 className="font-mono text-white text-sm">TOTAL PRIVACY</h5>
                    <p className="font-mono text-xs text-gray-400 mt-1">Your data stays yours</p>
                  </div>
                </div>
              </div>

              <div className="font-mono text-xs text-[#ffff00] tracking-wider mt-6 mb-4">{">>> THE LEARNING"}</div>

              <div className="flex items-start gap-4 p-4 border border-[#ffff00]/30 bg-[#ffff00]/5">
                <span className="text-[#ffff00] font-mono">!</span>
                <div>
                  <h5 className="font-mono text-[#ffff00] text-sm">NEW HABITS</h5>
                  <p className="font-mono text-xs text-gray-400 mt-1">Requires some learning curve</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-block font-mono text-sm text-gray-500 px-6 py-3 border border-gray-800">
            <span className="text-[#ffff00]">{">"}</span> EXPLORE RESOURCES TO START YOUR JOURNEY{" "}
            <span className="text-[#ffff00]">{"<"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
