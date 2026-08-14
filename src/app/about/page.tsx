import { AboutSection } from "@/components/sections/AboutSection";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SparkMedia",
  description:
    "Learn about SparkMedia, a creative and performance marketing agency helping ambitious e-commerce brands grow through creative, media and conversion strategy.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <TeamGrid />
      <PhilosophySection />
      <FinalCTA />
    </div>
  );
}
