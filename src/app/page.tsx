import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { LiveMarkets } from "@/components/home/LiveMarkets";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { MetricsSection } from "@/components/home/MetricsSection";
import { CentralShowcase } from "@/components/home/CentralShowcase";
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
        
        {/* Section 2: Hero */}
        <Hero />
        
        {/* Section 3: Trust Logo Wall */}
        <TrustSection />
        
        {/* Section 4: Live Markets */}
        <LiveMarkets />
        
        {/* Section 5: Feature Showcase */}
        <FeatureShowcase />
        
        {/* Section 6: Metrics Section */}
        <MetricsSection />
        
        {/* Section 7: Central Product Showcase Centerpiece */}
        <CentralShowcase />
        
        {/* Section 8: AI Copilot Chat Interface */}
        <AICopilot />
        
        {/* Section 9: Portfolio Intelligence */}
        <PortfolioIntelligence />
        
        {/* Section 10: Why TradeBuddy X */}
        <WhyTradeBuddy />
        
        {/* Section 11: Testimonials */}
        <Testimonials />
        
        {/* Section 12: Pricing */}
        <PricingSection />
        
        {/* Section 13: Final CTA */}
        <FinalCTA />

      </main>
      <Footer />
    </>
  );
}
