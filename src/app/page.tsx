import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ClientLogoWall } from "@/components/sections/ClientLogoWall";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ComparisonTable } from "@/components/sections/ComparisonTable";

// Dynamically import heavy interactive below-the-fold components to reduce initial JS payload
const GrowthLoop = dynamic(
  () => import("@/components/sections/GrowthLoop").then((mod) => mod.GrowthLoop),
  { ssr: true }
);
const TwoGrowthProblems = dynamic(
  () => import("@/components/sections/TwoGrowthProblems").then((mod) => mod.TwoGrowthProblems),
  { ssr: true }
);
const PortfolioSection = dynamic(
  () => import("@/components/sections/PortfolioSection").then((mod) => mod.PortfolioSection),
  { ssr: true }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials),
  { ssr: true }
);
const FAQAccordion = dynamic(
  () => import("@/components/sections/FAQAccordion").then((mod) => mod.FAQAccordion),
  { ssr: true }
);
const StrategyCallSection = dynamic(
  () => import("@/components/sections/StrategyCallSection").then((mod) => mod.StrategyCallSection),
  { ssr: true }
);

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
