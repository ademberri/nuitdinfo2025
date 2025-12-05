"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="choice" className="relative py-24 bg-black">
      {/* Scanlines overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_1px,transparent_1px,transparent_2px)] opacity-20" />

      {/* Background grid - consistent with other sections */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header - consistent styling */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[#ffff00] text-xs tracking-[0.5em] mb-4">{"// MAKE YOUR CHOICE"}</div>
          <h2 className="font-mono text-4xl lg:text-5xl font-bold text-white mb-4">
            WILL YOU <span className="text-[#ff0080] drop-shadow-[0_0_10px_#ff0080]">SUBMIT</span> OR{" "}
            <span className="text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">RESIST</span>?
          </h2>
          <p className="font-mono text-gray-400 max-w-2xl mx-auto">
            The choice is yours. Stay with the familiar empire or join the open source resistance.
          </p>
        </motion.div>

        {/* Two column choice */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Side - The Empire */}
          <motion.div
            className="relative flex flex-col items-center justify-center p-8 lg:p-12 bg-[#0a0a12] border-4 border-[#ff0080] border-r-2 lg:border-r-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ boxShadow: "0 0 30px rgba(255,0,128,0.2)" }}
          >
            {/* Glitch effect background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#ff0080] blur-[100px]" />
              <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-red-600 blur-[80px]" />
            </div>

            <div className="relative z-10 text-center space-y-8">
              <div className="font-mono text-[#ff0080] text-sm tracking-[0.3em] uppercase animate-pulse">
                {"< THE EMPIRE />"}
              </div>

              <a
                href="https://www.microsoft.com/windows"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <h3 className="font-mono text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  <span className="text-[#ff0080] drop-shadow-[0_0_10px_#ff0080]">WINDOWS</span>
                  <br />
                  <span className="text-gray-400 text-2xl lg:text-3xl">BIG TECH</span>
                </h3>
              </a>

              <div className="space-y-4 text-gray-300 font-mono text-sm">
                <p className="flex items-center gap-2 justify-center">
                  <span className="text-red-500">▶</span> Planned Obsolescence
                </p>
                <p className="flex items-center gap-2 justify-center">
                  <span className="text-red-500">▶</span> Expensive Licenses
                </p>
                <p className="flex items-center gap-2 justify-center">
                  <span className="text-red-500">▶</span> Closed Garden
                </p>
              </div>

              <motion.button
                className="relative px-8 py-4 font-mono text-gray-400 border-2 border-gray-600 bg-transparent hover:border-[#ff0080] hover:text-[#ff0080] transition-all duration-300 uppercase tracking-widest"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Stay in the Empire
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - The Resistance */}
          <motion.div
            className="relative flex flex-col items-center justify-center p-8 lg:p-12 bg-[#0a0a12] border-4 border-[#00ffff] border-l-2 lg:border-l-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ boxShadow: "0 0 30px rgba(0,255,255,0.2)" }}
          >
            {/* Glow effect background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#00ffff] blur-[120px] animate-pulse" />
              <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-[#ffff00] blur-[100px] animate-pulse" />
            </div>

            <div className="relative z-10 text-center space-y-8">
              <div className="font-mono text-[#00ffff] text-sm tracking-[0.3em] uppercase">{"< THE RESISTANCE />"}</div>

              <a
                href="https://www.linux.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <h3 className="font-mono text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  <span className="text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">LINUX</span>
                  <br />
                  <span className="text-gray-400 text-2xl lg:text-3xl hover:text-[#00ffff] transition-colors">
                    OPEN SOURCE
                  </span>
                </h3>
              </a>

              <div className="space-y-4 text-gray-300 font-mono text-sm">
                <p className="flex items-center gap-2 justify-center">
                  <span className="text-[#00ffff]">▶</span> Immortal Hardware
                </p>
                <p className="flex items-center gap-2 justify-center">
                  <span className="text-[#00ffff]">▶</span> Zero Cost Forever
                </p>
                <p className="flex items-center gap-2 justify-center">
                  <span className="text-[#00ffff]">▶</span> Total Privacy
                </p>
              </div>

              <motion.a
                href="#resources"
                className="relative inline-block px-8 py-4 font-mono text-black bg-[#00ffff] border-2 border-[#00ffff] hover:bg-transparent hover:text-[#00ffff] transition-all duration-300 uppercase tracking-widest shadow-[0_0_20px_#00ffff] hover:shadow-[0_0_40px_#00ffff]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join NIRD Resistance
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* NIRD Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block font-mono text-center px-6 py-3 border border-[#ff0080] bg-black/80">
            <span className="text-[#ff0080]">N</span>
            <span className="text-white">umérique </span>
            <span className="text-[#00ffff]">I</span>
            <span className="text-white">nclusif </span>
            <span className="text-[#ffff00]">R</span>
            <span className="text-white">esponsable </span>
            <span className="text-[#ff0080]">D</span>
            <span className="text-white">urable</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
