"use client"

import { motion } from "framer-motion"
import {
  Monitor,
  FileText,
  Globe,
  Cpu,
  Search,
  BookOpen,
  Layers,
  GitBranch,
  Shield,
  Database,
  Compass,
  ExternalLink,
  TrendingUp,
  List,
  Users,
  BarChart3,
  MessageSquare,
  Rocket,
} from "lucide-react"

const operatingSystems = [
  {
    name: "Linux Mint",
    tagline: "Looks just like Windows. The easiest switch.",
    url: "https://linuxmint.com",
    icon: Monitor,
  },
  {
    name: "Zorin OS",
    tagline: "Designed for schools and beginners.",
    url: "https://zorin.com/os",
    icon: Cpu,
  },
  {
    name: "Ubuntu",
    tagline: "The most popular Linux distribution worldwide.",
    url: "https://ubuntu.com",
    icon: Monitor,
  },
  {
    name: "Fedora",
    tagline: "Cutting-edge, community-driven Linux.",
    url: "https://fedoraproject.org",
    icon: Cpu,
  },
]

const software = [
  {
    name: "LibreOffice",
    tagline: "Open source alternative to Word/Excel.",
    url: "https://www.libreoffice.org",
    icon: FileText,
  },
  {
    name: "Firefox",
    tagline: "The browser that respects you.",
    url: "https://www.mozilla.org/firefox",
    icon: Globe,
  },
  {
    name: "GIMP",
    tagline: "Free alternative to Photoshop.",
    url: "https://www.gimp.org",
    icon: Layers,
  },
  {
    name: "VLC Media Player",
    tagline: "Plays everything, no codecs needed.",
    url: "https://www.videolan.org/vlc",
    icon: Monitor,
  },
]

const discoverResources = [
  {
    name: "AlternativeTo",
    tagline: "Find open source alternatives to any software.",
    url: "https://alternativeto.net",
    icon: Search,
  },
  {
    name: "Open Source Alternative",
    tagline: "Curated list of open source alternatives.",
    url: "https://www.opensourcealternative.to",
    icon: Layers,
  },
  {
    name: "Awesome Open Source",
    tagline: "Find the best open source projects.",
    url: "https://awesomeopensource.com",
    icon: GitBranch,
  },
  {
    name: "FOSS Hub",
    tagline: "Safe downloads for open source software.",
    url: "https://www.fosshub.com",
    icon: Shield,
  },
]

const learningResources = [
  {
    name: "DistroWatch",
    tagline: "Compare all Linux distributions.",
    url: "https://distrowatch.com",
    icon: Database,
  },
  {
    name: "It's FOSS",
    tagline: "Linux tutorials and open source news.",
    url: "https://itsfoss.com",
    icon: BookOpen,
  },
  {
    name: "Linux Journey",
    tagline: "Learn Linux from scratch, free.",
    url: "https://linuxjourney.com",
    icon: BookOpen,
  },
  {
    name: "Privacy Guides",
    tagline: "Protect your data with open source tools.",
    url: "https://www.privacyguides.org",
    icon: Shield,
  },
]

const findYourTargetResources = [
  {
    name: "GitHub Trending",
    tagline: "Find active, popular repositories.",
    url: "https://github.com/trending",
    icon: TrendingUp,
  },
  {
    name: "GitLab Explore",
    tagline: "Insights into activity and contributions.",
    url: "https://gitlab.com/explore",
    icon: GitBranch,
  },
  {
    name: "Awesome Lists",
    tagline: "Curated lists of top open source projects.",
    url: "https://github.com/sindresorhus/awesome",
    icon: List,
  },
  {
    name: "Open Source Guides",
    tagline: "How to find and contribute to projects.",
    url: "https://opensource.guide",
    icon: BookOpen,
  },
  {
    name: "Libraries.io",
    tagline: "Discover projects and track dependencies.",
    url: "https://libraries.io",
    icon: Layers,
  },
  {
    name: "Up For Grabs",
    tagline: "Issues specifically for new contributors.",
    url: "https://up-for-grabs.net",
    icon: Users,
  },
  {
    name: "Open HUB",
    tagline: "Analyze project activity and quality.",
    url: "https://www.openhub.net",
    icon: BarChart3,
  },
  {
    name: "Reddit Communities",
    tagline: "Active discussions on r/opensource.",
    url: "https://www.reddit.com/r/opensource/",
    icon: MessageSquare,
  },
  {
    name: "Product Hunt",
    tagline: "Discover new open source launches.",
    url: "https://www.producthunt.com/topics/open-source",
    icon: Rocket,
  },
]

const comprehensiveGuides = [
  {
    name: "Free Software Foundation",
    tagline: "The movement behind free software.",
    url: "https://www.fsf.org",
    icon: Shield,
  },
  {
    name: "Open Source Initiative",
    tagline: "Official definition of open source.",
    url: "https://opensource.org",
    icon: Globe,
  },
  {
    name: "Switching.software",
    tagline: "Ethical alternatives to popular apps.",
    url: "https://switching.software",
    icon: ExternalLink,
  },
  {
    name: "Degoogle",
    tagline: "Break free from Google with alternatives.",
    url: "https://www.reddit.com/r/degoogle",
    icon: Shield,
  },
]

export function SurvivalKit() {
  return (
    <section id="resources" className="relative py-24 px-4 lg:px-8 bg-black">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#ff0080] opacity-5 blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#00ffff] opacity-5 blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-[#ffff00] opacity-5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs tracking-[0.5em] text-[#00ffff] mb-4">{"// SURVIVAL KIT"}</div>
          <h3 className="font-mono text-3xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-[#ff0080] drop-shadow-[0_0_10px_#ff0080]">WEAPONS</span> OF{" "}
            <span className="text-[#ffff00] drop-shadow-[0_0_10px_#ffff00]">MASS</span>{" "}
            <span className="text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]">CONSTRUCTION</span>
          </h3>
          <p className="font-mono text-gray-400 text-sm">
            Tools to help you switch and find your perfect open source match
          </p>
        </motion.div>

        {/* Find Your Target */}
        <motion.div
          className="mb-16 p-8 border-2 border-[#ffff00] bg-black/40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ boxShadow: "0 0 30px rgba(255,255,0,0.2)" }}
        >
          <h4 className="font-mono text-[#ffff00] text-lg tracking-widest mb-2 text-center flex items-center justify-center gap-3">
            <Compass className="w-6 h-6" />
            OPEN SOURCE COMPASS
            <Compass className="w-6 h-6" />
          </h4>
          <p className="font-mono text-gray-400 text-xs text-center mb-8">
            Not sure where to start? These sites help you discover the best open source for YOUR needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {findYourTargetResources.map((item) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border-2 border-gray-700 bg-black/60 hover:border-[#ffff00] hover:shadow-[0_0_20px_rgba(255,255,0,0.3)] transition-all duration-300 group text-center"
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-8 h-8 text-gray-600 group-hover:text-[#ffff00] transition-colors mx-auto mb-3" />
                <h5 className="font-mono text-white text-sm group-hover:text-[#ffff00] transition-colors">
                  {item.name}
                </h5>
                <p className="font-mono text-xs text-gray-500 mt-1">{item.tagline}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Operating Systems */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-mono text-[#ff0080] text-sm tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[#ff0080]" />
              OPERATING SYSTEMS
            </h4>

            <div className="space-y-4">
              {operatingSystems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border-2 border-gray-800 bg-black/40 hover:border-[#00ffff] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-10 h-10 text-gray-600 group-hover:text-[#00ffff] transition-colors" />
                    <div>
                      <h5 className="font-mono text-white text-lg group-hover:text-[#00ffff] transition-colors">
                        {item.name}
                      </h5>
                      <p className="font-mono text-xs text-gray-500">{item.tagline}</p>
                    </div>
                    <span className="ml-auto font-mono text-gray-600 group-hover:text-[#00ffff] transition-colors">
                      →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Essential Software */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-mono text-[#ffff00] text-sm tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[#ffff00]" />
              ESSENTIAL SOFTWARE
            </h4>

            <div className="space-y-4">
              {software.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border-2 border-gray-800 bg-black/40 hover:border-[#ffff00] hover:shadow-[0_0_20px_rgba(255,255,0,0.2)] transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-10 h-10 text-gray-600 group-hover:text-[#ffff00] transition-colors" />
                    <div>
                      <h5 className="font-mono text-white text-lg group-hover:text-[#ffff00] transition-colors">
                        {item.name}
                      </h5>
                      <p className="font-mono text-xs text-gray-500">{item.tagline}</p>
                    </div>
                    <span className="ml-auto font-mono text-gray-600 group-hover:text-[#ffff00] transition-colors">
                      →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Discover Alternatives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-mono text-[#00ffff] text-sm tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[#00ffff]" />
              DISCOVER ALTERNATIVES
            </h4>

            <div className="space-y-4">
              {discoverResources.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border-2 border-gray-800 bg-black/40 hover:border-[#ff0080] hover:shadow-[0_0_20px_rgba(255,0,128,0.2)] transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-10 h-10 text-gray-600 group-hover:text-[#ff0080] transition-colors" />
                    <div>
                      <h5 className="font-mono text-white text-lg group-hover:text-[#ff0080] transition-colors">
                        {item.name}
                      </h5>
                      <p className="font-mono text-xs text-gray-500">{item.tagline}</p>
                    </div>
                    <span className="ml-auto font-mono text-gray-600 group-hover:text-[#ff0080] transition-colors">
                      →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Learning Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-mono text-[#ff0080] text-sm tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[#ff0080]" />
              LEARN MORE
            </h4>

            <div className="space-y-4">
              {learningResources.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border-2 border-gray-800 bg-black/40 hover:border-[#00ffff] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-10 h-10 text-gray-600 group-hover:text-[#00ffff] transition-colors" />
                    <div>
                      <h5 className="font-mono text-white text-lg group-hover:text-[#00ffff] transition-colors">
                        {item.name}
                      </h5>
                      <p className="font-mono text-xs text-gray-500">{item.tagline}</p>
                    </div>
                    <span className="ml-auto font-mono text-gray-600 group-hover:text-[#00ffff] transition-colors">
                      →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Comprehensive Guides */}
        <motion.div
          className="mt-16 p-8 border-2 border-[#00ffff] bg-black/40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ boxShadow: "0 0 30px rgba(0,255,255,0.2)" }}
        >
          <h4 className="font-mono text-[#00ffff] text-lg tracking-widest mb-2 text-center flex items-center justify-center gap-3">
            <Globe className="w-6 h-6" />
            COMPREHENSIVE GUIDES
            <Globe className="w-6 h-6" />
          </h4>
          <p className="font-mono text-gray-400 text-xs text-center mb-8">
            Deep dive into the philosophy and ethics of open source software
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {comprehensiveGuides.map((item) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border-2 border-gray-700 bg-black/60 hover:border-[#00ffff] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 group text-center"
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-8 h-8 text-gray-600 group-hover:text-[#00ffff] transition-colors mx-auto mb-3" />
                <h5 className="font-mono text-white text-sm group-hover:text-[#00ffff] transition-colors">
                  {item.name}
                </h5>
                <p className="font-mono text-xs text-gray-500 mt-1">{item.tagline}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
