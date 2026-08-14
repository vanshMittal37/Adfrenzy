import { ResultsSection } from "@/components/sections/ResultsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Results & Case Studies",
  description:
    "See SparkMedia's marketing results, campaign performance, ROAS, e-commerce growth and selected client case studies.",
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
