import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D2C Growth Case Studies & Portfolio",
  description:
    "Explore Adfrenzy Media's D2C growth case studies, selected work, creative and performance marketing results.",
  alternates: {
    canonical: "https://adfrenzymedia.com/work",
  },
  openGraph: {
    title: "D2C Growth Case Studies & Portfolio | Adfrenzy Media",
    description:
      "Explore Adfrenzy Media's D2C growth case studies, selected work, creative and performance marketing results.",
    url: "https://adfrenzymedia.com/work",
  },
};

export default function WorkPage() {
  return (
    <div className="pt-20">
      <PortfolioSection showAllInitially={true} />
      <FinalCTA />
    </div>
  );
}
