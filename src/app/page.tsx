import { Hero } from "@/components/sections/Hero";
import { CreativeMarquee } from "@/components/sections/CreativeMarquee";
import { TrustBar } from "@/components/sections/TrustBar";
import { MetricsTicker } from "@/components/sections/MetricsTicker";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { GrowthLoop } from "@/components/sections/GrowthLoop";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TwoGrowthProblems } from "@/components/sections/TwoGrowthProblems";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClientLogoWall } from "@/components/sections/ClientLogoWall";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { StrategyCallSection } from "@/components/sections/StrategyCallSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CreativeMarquee />
      <TrustBar />
      <MetricsTicker />
      <ProblemSection />
      <GrowthLoop />
      <ComparisonTable />
      <ServicesGrid />
      <TwoGrowthProblems />
      <ProcessTimeline />
      <PortfolioSection />
      <ResultsSection />
      <Testimonials />
      <ClientLogoWall />
      <AboutSection />
      <TeamGrid />
      <PhilosophySection />
      <FAQAccordion />
      <StrategyCallSection />
      <FinalCTA />
    </>
  );
}
