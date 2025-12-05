"use client"

import { motion } from "framer-motion"
import { ChevronDown, AlertTriangle } from "lucide-react"

export function IntroHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 bg-black">
      {/* Scanlines overlay */}
      <div className="pointer-events-none fixed inset-0 z-40 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_1px,transparent_1px,transparent_2px)] opacity-30" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff0080] opacity-10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ffff] opacity-10 blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ffff00] opacity-5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Event badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <a
            href="https://www.nuitdelinfo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-xs tracking-[0.5em] text-[#ffff00] px-4 py-2 border border-[#ffff00]/50 bg-black/50 hover:bg-[#ffff00]/10 hover:border-[#ffff00] transition-all"
          >
            LA NUIT DE L'INFO 2025
          </a>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <AlertTriangle className="w-12 h-12 text-[#ff0080] animate-pulse" />
            <a
              href="https://support.microsoft.com/en-us/windows/windows-10-support-ends-october-14-2025-8f798b67-4f30-42e4-a1ca-5a6fcc6db76a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <h1 className="font-mono text-5xl lg:text-7xl font-bold">
                <span className="text-[#ff0080] drop-shadow-[0_0_20px_#ff0080]">WINDOWS 10</span>
              </h1>
            </a>
            <AlertTriangle className="w-12 h-12 text-[#ff0080] animate-pulse" />
          </div>
          <h2 className="font-mono text-3xl lg:text-5xl font-bold text-white">
            END OF <span className="text-[#ffff00] drop-shadow-[0_0_15px_#ffff00]">SUPPORT</span>
          </h2>
        </motion.div>

        {/* Countdown-style date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-4 font-mono text-2xl lg:text-4xl px-8 py-4 border-2 border-[#00ffff] bg-black/80 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
            <span className="text-white">OCTOBER</span>
            <span className="text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">14</span>
            <span className="text-white">,</span>
            <span className="text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">2025</span>
          </div>
        </motion.div>

        {/* Impact statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-mono text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          <span className="text-[#ff0080]">240 million PCs</span> face forced obsolescence.
          <br />
          <a
            href="https://www.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffff00] hover:underline"
          >
            Microsoft
          </a>{" "}
          wants you to <span className="text-[#ffff00]">throw away</span> perfectly working hardware.
          <br />
          <a
            href="https://www.linux.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ffff] hover:underline"
          >
            Open Source
          </a>{" "}
          offers another path.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
        >
          <div className="p-4 border border-[#ff0080]/50 bg-[#ff0080]/5">
            <div className="font-mono text-2xl lg:text-3xl text-[#ff0080] drop-shadow-[0_0_10px_#ff0080]">240M</div>
            <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">PCs at Risk</div>
          </div>
          <div className="p-4 border border-[#ffff00]/50 bg-[#ffff00]/5">
            <div className="font-mono text-2xl lg:text-3xl text-[#ffff00] drop-shadow-[0_0_10px_#ffff00]">50MT</div>
            <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">E-Waste/Year</div>
          </div>
          <div className="p-4 border border-[#00ffff]/50 bg-[#00ffff]/5">
            <div className="font-mono text-2xl lg:text-3xl text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">FREE</div>
            <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">Alternative</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }}>
          <a
            href="#nird"
            className="inline-block font-mono text-sm text-[#00ffff] px-8 py-4 border-2 border-[#00ffff] bg-transparent hover:bg-[#00ffff] hover:text-black transition-all duration-300 uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)]"
          >
            Discover the Solution
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { delay: 1.5, duration: 1.5, repeat: Number.POSITIVE_INFINITY },
        }}
      >
        <ChevronDown className="w-8 h-8 text-[#ffff00] drop-shadow-[0_0_10px_#ffff00]" />
      </motion.div>
    </section>
  )
}
