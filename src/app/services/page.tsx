import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing & Creative Services",
  description:
    "Explore SparkMedia's performance marketing, performance creative, CRO, web development and growth strategy services for e-commerce brands.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesGrid />
      <FinalCTA />
    </div>
  );
}
