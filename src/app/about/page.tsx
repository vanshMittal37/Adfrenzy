import { AboutSection } from "@/components/sections/AboutSection";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "About Us — SparkMedia.ad",
  description: "We are an integrated growth and creative agency helping ambitious brands turn attention into measurable business results."
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
