"use client"

import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="relative py-16 px-4 bg-[#050508] border-t-4 border-[#ff0080]"
      style={{ boxShadow: "0 -10px 30px rgba(255,0,128,0.2)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,128,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,128,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Scroll to top button */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#home"
            className="p-3 border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="font-mono text-3xl mb-4">
            <span className="text-[#ff0080] drop-shadow-[0_0_10px_#ff0080]">N</span>
            <span className="text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">I</span>
            <span className="text-[#ffff00] drop-shadow-[0_0_10px_#ffff00]">R</span>
            <span className="text-[#ff0080] drop-shadow-[0_0_10px_#ff0080]">D</span>
          </div>

          <p className="font-mono text-gray-500 text-sm tracking-wider mb-6">NUMÉRIQUE INCLUSIF RESPONSABLE DURABLE</p>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["HOME", "VIDEO", "NIRD", "COMPARE", "RESOURCES"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs text-gray-600 hover:text-[#00ffff] transition-colors"
              >
                [{link}]
              </a>
            ))}
          </div>

          <a
            href="https://www.nuitdelinfo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-gray-600 text-xs hover:text-[#00ffff] transition-colors"
          >
            <span className="text-[#00ffff]">{"<"}</span>
            LA NUIT DE L'INFO 2025
            <span className="text-[#00ffff]">{" />"}</span>
          </a>

          <div className="mt-8 flex justify-center gap-4">
            <div className="w-2 h-2 bg-[#ff0080] animate-pulse" />
            <div className="w-2 h-2 bg-[#00ffff] animate-pulse" style={{ animationDelay: "0.2s" }} />
            <div className="w-2 h-2 bg-[#ffff00] animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>

          <a
            href="https://opensource.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-gray-700 text-xs mt-6 block hover:text-[#00ffff] transition-colors"
          >
            BUILT WITH OPEN SOURCE SPIRIT
          </a>

          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linux.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-600 hover:text-[#00ffff] transition-colors"
            >
              Linux.org
            </a>
            <a
              href="https://www.fsf.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-600 hover:text-[#ff0080] transition-colors"
            >
              FSF
            </a>
            <a
              href="https://opensource.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-600 hover:text-[#ffff00] transition-colors"
            >
              OSI
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-600 hover:text-[#00ffff] transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
