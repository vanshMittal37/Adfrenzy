import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { GrowthLoop } from "@/components/sections/GrowthLoop";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Growth Process",
  description:
    "Discover Adfrenzy Media's growth process covering deep dive, strategy, creative, launch, reading signals and scaling.",
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
