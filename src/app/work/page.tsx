import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work | Performance Marketing & D2C Growth",
  description:
    "Explore Adfrenzy Media's selected performance marketing campaigns, creative work, landing pages and D2C brand growth projects.",
};

export default function WorkPage() {
  return (
    <div className="pt-20">
      <PortfolioSection />
      <FinalCTA />
    </div>
  );
}
