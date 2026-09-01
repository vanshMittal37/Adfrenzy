import { ResultsSection } from "@/components/sections/ResultsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Results & Selected Work",
  description:
    "See Adfrenzy Media's marketing results, campaign performance, ROAS, D2C brand growth and selected client work.",
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
