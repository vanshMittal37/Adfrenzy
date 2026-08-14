import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing FAQ",
  description:
    "Find answers to common questions about SparkMedia's performance marketing, creative production, CRO, e-commerce growth and strategy services.",
};

export default function FAQPage() {
  return (
    <div className="pt-20">
      <FAQAccordion />
      <FinalCTA />
    </div>
  );
}
