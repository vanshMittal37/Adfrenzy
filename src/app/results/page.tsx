import { ResultsSection } from "@/components/sections/ResultsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Results & Outcomes — SparkMedia.ad",
  description: "We measure what happens next. Explore performance metrics, testimonials, and verified outcomes."
};

export default function ResultsPage() {
  return (
    <div className="pt-20">
      <ResultsSection />
      <Testimonials />
      <PortfolioSection />
      <FinalCTA />
    </div>
  );
}
