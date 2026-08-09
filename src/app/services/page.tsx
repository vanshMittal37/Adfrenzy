import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Services — SparkMedia.ad",
  description: "Explore our 8 integrated growth pillars: Performance Marketing, Performance Creative, Social Media, CRO, Email/SMS, Web Design, Branding, and Growth Strategy."
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesGrid />
      <FinalCTA />
    </div>
  );
}
