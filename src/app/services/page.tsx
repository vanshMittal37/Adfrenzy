import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing & Creative Services",
  description:
    "Explore Adfrenzy Media's performance marketing, performance creative, CRO, website design, SEO and growth consultation services for D2C brands.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesGrid />
      <FinalCTA />
    </div>
  );
}
