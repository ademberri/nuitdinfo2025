import { Navbar } from "@/components/navbar"
import { IntroHero } from "@/components/intro-hero"
import { NirdSection } from "@/components/nird-section"
import { ComparisonArena } from "@/components/comparison-arena"
import { VideoSection } from "@/components/video-section"
import { SurvivalKit } from "@/components/survival-kit"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <IntroHero />
      <NirdSection />
      <ComparisonArena />
      <VideoSection />
      <SurvivalKit />
      <HeroSection />
      <Footer />
    </main>
  )
}
