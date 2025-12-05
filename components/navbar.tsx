"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

const navLinks = [
  { name: "HOME", href: "#home", color: "#ff0080" },
  { name: "NIRD", href: "#nird", color: "#00ffff" },
  { name: "COMPARE", href: "#compare", color: "#ff0080" },
  { name: "VIDEO", href: "#video", color: "#ffff00" },
  { name: "RESOURCES", href: "#resources", color: "#00ffff" },
  { name: "CHOICE", href: "#choice", color: "#ffff00" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b-2 border-[#ff0080] backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ boxShadow: "0 0 20px rgba(255,0,128,0.3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="https://www.nuitdelinfo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-lg font-bold tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#ff0080] drop-shadow-[0_0_8px_#ff0080]">NUIT</span>
            <span className="text-white">_</span>
            <span className="text-[#00ffff] drop-shadow-[0_0_8px_#00ffff]">INFO</span>
            <span className="text-[#ffff00] drop-shadow-[0_0_8px_#ffff00]">'25</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 font-mono text-sm text-gray-400 hover:text-white transition-colors group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span
                  className="relative z-10 group-hover:drop-shadow-[0_0_8px_currentColor] transition-all"
                  style={{ "--hover-color": link.color } as React.CSSProperties}
                >
                  [{link.name}]
                </span>
                <motion.div
                  className="absolute inset-0 border border-transparent group-hover:border-current opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ borderColor: link.color }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#resources"
            className="hidden md:block px-4 py-2 font-mono text-sm text-black bg-[#00ffff] border-2 border-[#00ffff] hover:bg-transparent hover:text-[#00ffff] transition-all shadow-[0_0_15px_rgba(0,255,255,0.5)]"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,255,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            JOIN RESISTANCE
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden font-mono text-[#00ffff] p-2 border border-[#00ffff]"
          >
            {isOpen ? "[X]" : "[=]"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 font-mono text-sm text-gray-400 hover:text-white border-l-2 border-transparent hover:border-[#00ffff] transition-all"
                >
                  {">"} {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
