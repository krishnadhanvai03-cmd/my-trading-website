import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { LiveMarkets } from "@/components/home/LiveMarkets";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { MetricsSection } from "@/components/home/MetricsSection";
import { AICopilot } from "@/components/home/AICopilot";
import { PortfolioIntelligence } from "@/components/home/PortfolioIntelligence";
import { WhyTradeBuddy } from "@/components/home/WhyTradeBuddy";
import { Testimonials } from "@/components/home/Testimonials";
import { PricingSection } from "@/components/home/PricingSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <MeshGradient />
      <Header />
      <main className="flex-1 overflow-hidden">
        
        {/* Hero */}
        <Hero />
        
        {/* Trust Bar */}
        <TrustSection />
        
        {/* Live Markets */}
        <LiveMarkets />
        
        {/* Feature Showcase */}
        <FeatureShowcase />
        
        {/* Metrics */}
        <MetricsSection />
        
        {/* AI Copilot */}
        <AICopilot />
        
        {/* Portfolio Intelligence */}
        <PortfolioIntelligence />
        
        {/* Why TradeBuddy */}
        <WhyTradeBuddy />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Pricing */}
        <PricingSection />
        
        {/* Final CTA */}
        <FinalCTA />

      </main>
      <Footer />
    </>
  );
}
