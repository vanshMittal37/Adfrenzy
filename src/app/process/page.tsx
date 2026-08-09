import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { GrowthLoop } from "@/components/sections/GrowthLoop";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Growth Process — SparkMedia.ad",
  description: "Discover our 6-step growth execution roadmap from discovery to scaling."
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
