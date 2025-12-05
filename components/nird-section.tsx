"use client"

import { motion } from "framer-motion"

const nirdPrinciples = [
  {
    letter: "N",
    title: "Numérique",
    subtitle: "NUMERICAL",
    description: "Extend the life of your hardware. Windows 11 abandons millions of PCs - Linux gives them new life.",
    color: "#ff0080",
    stats: "240M PCs at risk",
    links: { windows: "https://www.microsoft.com/windows/windows-11", linux: "https://www.linux.org" },
  },
  {
    letter: "I",
    title: "Inclusif",
    subtitle: "INCLUSIVE",
    description: "Technology for everyone. Open source removes financial barriers and creates equal access to tools.",
    color: "#00ffff",
    stats: "100% Free forever",
    links: { openSource: "https://opensource.org" },
  },
  {
    letter: "R",
    title: "Responsable",
    subtitle: "RESPONSIBLE",
    description: "Take control of your data. No telemetry, no tracking, no forced updates. Your computer, your rules.",
    color: "#ffff00",
    stats: "Zero data collected",
    links: { privacy: "https://www.privacyguides.org" },
  },
  {
    letter: "D",
    title: "Durable",
    subtitle: "DURABLE",
    description: "Reduce e-waste by keeping hardware running. Open source extends device lifespans by 5-10 years.",
    color: "#ff0080",
    stats: "10+ years support",
    links: { ewaste: "https://ewastemonitor.info" },
  },
]

export function NirdSection() {
  return (
    <section id="nird" className="relative py-24 bg-black">
      {/* Scanlines - consistent with other sections */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_1px,transparent_1px,transparent_2px)] opacity-20" />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff0080] opacity-5 blur-[150px]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ffff] opacity-5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#ffff00] opacity-5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[#ffff00] text-xs tracking-[0.5em] mb-4">{"// THE CORE PROBLEM"}</div>
          <h2 className="font-mono text-4xl lg:text-5xl font-bold text-white mb-4">
            THE <span className="text-[#ff0080] drop-shadow-[0_0_10px_#ff0080]">N</span>
            <span className="text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">I</span>
            <span className="text-[#ffff00] drop-shadow-[0_0_10px_#ffff00]">R</span>
            <span className="text-[#ff0080] drop-shadow-[0_0_10px_#ff0080]">D</span> PRINCIPLES
          </h2>
          <p className="font-mono text-gray-400 max-w-2xl mx-auto">
            <a
              href="https://support.microsoft.com/en-us/windows/windows-10-support-ends-october-14-2025-8f798b67-4f30-42e4-a1ca-5a6fcc6db76a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff0080] hover:underline"
            >
              Windows 10 end-of-life
            </a>{" "}
            threatens 240 million PCs with obsolescence. The NIRD principles guide our resistance against planned
            obsolescence.
          </p>
        </motion.div>

        {/* NIRD Grid - 2x2 layout maintaining 50/50 principle */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {nirdPrinciples.map((principle, index) => (
            <motion.div
              key={principle.letter}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="relative p-6 bg-[#0a0a12] border-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                style={{ borderColor: principle.color }}
              >
                {/* Corner decorations */}
                <div
                  className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2"
                  style={{ borderColor: principle.color }}
                />
                <div
                  className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2"
                  style={{ borderColor: principle.color }}
                />
                <div
                  className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2"
                  style={{ borderColor: principle.color }}
                />
                <div
                  className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2"
                  style={{ borderColor: principle.color }}
                />

                <div className="flex items-start gap-6">
                  {/* Large Letter */}
                  <div
                    className="font-mono text-6xl lg:text-7xl font-bold transition-all duration-300"
                    style={{
                      color: principle.color,
                      textShadow: `0 0 20px ${principle.color}`,
                    }}
                  >
                    {principle.letter}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-mono text-xl font-bold text-white">{principle.title}</h3>
                      <p className="font-mono text-xs tracking-widest" style={{ color: principle.color }}>
                        {principle.subtitle}
                      </p>
                    </div>
                    <p className="font-mono text-sm text-gray-400 leading-relaxed">{principle.description}</p>
                    <div
                      className="inline-block font-mono text-xs px-3 py-1 border"
                      style={{
                        borderColor: principle.color,
                        color: principle.color,
                      }}
                    >
                      {principle.stats}
                    </div>
                    {/* Added links to relevant official sources */}
                    {Object.entries(principle.links).map(([key, url]) => (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs hover:underline"
                        style={{ color: principle.color }}
                      >
                        {key.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                  style={{ backgroundColor: principle.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - updated text */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-block font-mono text-sm text-gray-500 px-6 py-3 border border-gray-800">
            <span className="text-[#00ffff]">{">"}</span> NOW SEE THE COMPARISON BELOW{" "}
            <span className="text-[#00ffff]">{"<"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
