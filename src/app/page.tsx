import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { MarketsTable } from "@/components/home/MarketsTable";
import { FundsSafu } from "@/components/home/FundsSafu";
import { FeatureCards } from "@/components/home/FeatureCards";
import { FAQ } from "@/components/home/FAQ";
import { CTABand } from "@/components/home/CTABand";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Markets Table */}
        <MarketsTable />

        {/* Funds Are SAFU */}
        <FundsSafu />

        {/* Feature Cards */}
        <FeatureCards />

        {/* FAQ */}
        <FAQ />

        {/* CTA Band */}
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
