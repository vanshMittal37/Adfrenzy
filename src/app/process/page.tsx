import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { GrowthLoop } from "@/components/sections/GrowthLoop";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D2C Growth Process",
  description:
    "Discover Adfrenzy Media's growth process covering deep dive, strategy, creative, launch, reading signals and scaling.",
  alternates: {
    canonical: "https://www.adfrenzymedia.com/process",
  },
  openGraph: {
    title: "D2C Growth Process | Adfrenzy Media",
    description:
      "Discover Adfrenzy Media's growth process covering deep dive, strategy, creative, launch, reading signals and scaling.",
    url: "https://www.adfrenzymedia.com/process",
  },
};

export default function ProcessPage() {
  return (
    <div className="pt-20">
      <ProcessTimeline />
      <GrowthLoop />
      <FinalCTA />
    </div>
  );
}
