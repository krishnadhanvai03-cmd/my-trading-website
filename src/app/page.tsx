import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { LiveMarketIntelligence } from "@/components/home/LiveMarketIntelligence";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { MetricsSection } from "@/components/home/MetricsSection";
import { CentralShowcase } from "@/components/home/CentralShowcase";
import { CTABand } from "@/components/home/CTABand";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-canvas-dark text-body selection:bg-primary/30 selection:text-ink">
        <Hero />
        <TrustBadges />
        <LiveMarketIntelligence />
        <FeatureShowcase />
        <MetricsSection />
        <CentralShowcase />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
