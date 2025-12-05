"use client"

import { motion } from "framer-motion"
import { Play, Volume2 } from "lucide-react"

export function VideoSection() {
  return (
    <section id="video" className="relative py-24 px-4 lg:px-8 bg-[#050508]">
      {/* Background grid pattern - matches other sections */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffff00] opacity-5 blur-[200px]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ffff] opacity-5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#ff0080] opacity-5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs tracking-[0.5em] text-[#ffff00] mb-4">{"// TRANSMISSION"}</div>
          <h3 className="font-mono text-3xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-[#ff0080] drop-shadow-[0_0_10px_#ff0080]">DISCOVER</span> THE{" "}
            <span className="text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">TRUTH</span>
          </h3>
          <p className="font-mono text-gray-400 text-sm max-w-2xl mx-auto">
            Watch and understand why open source is the path to digital freedom, sustainability, and privacy
          </p>
        </motion.div>

        {/* Video Container - 50/50 split design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left side - Video */}
          <motion.div
            className="relative aspect-video lg:aspect-auto lg:min-h-[400px] border-4 border-[#ffff00] border-r-2 lg:border-r-2 bg-black/80"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              boxShadow: "0 0 40px rgba(255,255,0,0.2), inset 0 0 60px rgba(0,0,0,0.8)",
            }}
          >
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-10 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
              }}
            />

            {/* Video placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 border-4 border-[#00ffff] flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-[#00ffff]/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0,255,255,0.3)",
                      "0 0 40px rgba(0,255,255,0.5)",
                      "0 0 20px rgba(0,255,255,0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Play className="w-8 h-8 text-[#00ffff] ml-1" />
                </motion.div>
                <p className="font-mono text-gray-500 text-sm">INSERT VIDEO</p>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#ff0080]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#ff0080]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#ff0080]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#ff0080]" />
          </motion.div>

          {/* Right side - Info panel */}
          <motion.div
            className="relative p-8 border-4 border-[#ffff00] border-l-2 lg:border-l-2 bg-black/60 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              boxShadow: "0 0 40px rgba(255,255,0,0.2)",
            }}
          >
            <div className="space-y-6">
              <div className="font-mono text-[#ffff00] text-xs tracking-widest">{">>> NOW PLAYING"}</div>

              <h4 className="font-mono text-2xl text-white">
                WHY <span className="text-[#00ffff] drop-shadow-[0_0_8px_#00ffff]">OPEN SOURCE</span> MATTERS
              </h4>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                  <span className="text-[#ff0080]">01.</span>
                  <span>Windows 10 end-of-life crisis</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                  <span className="text-[#00ffff]">02.</span>
                  <span>240 million PCs at risk</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                  <span className="text-[#ffff00]">03.</span>
                  <span>The sustainable alternative</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 font-mono text-sm">
                  <span className="text-[#ff0080]">04.</span>
                  <span>Your digital freedom awaits</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <Volume2 className="w-5 h-5 text-[#00ffff]" />
                <div className="flex-1 h-1 bg-gray-800 relative">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-[#00ffff]" />
                </div>
                <span className="font-mono text-xs text-gray-500">3:42</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video caption */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-block font-mono text-sm text-gray-500 px-6 py-3 border border-gray-800">
            <span className="text-[#ff0080]">{">"}</span> PRESS PLAY TO BEGIN YOUR JOURNEY INTO OPEN SOURCE{" "}
            <span className="text-[#ff0080]">{"<"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
