import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Performance Marketing Campaigns",
  description:
    "Explore SparkMedia's selected performance marketing campaigns, creative work, landing pages, e-commerce projects and growth campaigns.",
};

export default function WorkPage() {
  return (
    <div className="pt-20">
      <PortfolioSection />
      <FinalCTA />
    </div>
  );
}
