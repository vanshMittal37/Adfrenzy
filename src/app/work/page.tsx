import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Selected Work — SparkMedia.ad",
  description: "Explore campaigns, video ad creative, UGC, landing pages, and growth projects created for ambitious D2C brands."
};

export default function WorkPage() {
  return (
    <div className="pt-20">
      <PortfolioSection />
      <FinalCTA />
    </div>
  );
}
