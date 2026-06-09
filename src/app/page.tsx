import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MeshGradient } from "@/components/shared/MeshGradient";
import { Hero } from "@/components/home/Hero";
import { BentoGrid } from "@/components/home/BentoGrid";
import { TestimonialCascade } from "@/components/home/TestimonialCascade";
import { HowItWorks, Vision, WhyChooseUs, FAQ, CTASection } from "@/components/home/AdditionalSections";

export default function Home() {
  return (
    <>
      <MeshGradient />
      <Header />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <BentoGrid />
        <HowItWorks />
        <Vision />
        <WhyChooseUs />
        <TestimonialCascade />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
