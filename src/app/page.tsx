import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ClientLogoWall } from "@/components/sections/ClientLogoWall";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TwoGrowthProblems } from "@/components/sections/TwoGrowthProblems";
import { GrowthLoop } from "@/components/sections/GrowthLoop";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { StrategyCallSection } from "@/components/sections/StrategyCallSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ClientLogoWall />
      <GrowthLoop />
      <ProblemSection />
      <TwoGrowthProblems />
      <ServicesGrid />
      <ResultsSection />
      <PortfolioSection />
      <ComparisonTable />
      <Testimonials />
      <FAQAccordion />
      <StrategyCallSection />
    </>
  );
}
