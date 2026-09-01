import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth & Performance Marketing FAQ",
  description:
    "Find answers to common questions about Adfrenzy Media's performance marketing, creative production, CRO, web development and SEO services.",
};

export default function FAQPage() {
  return (
    <div className="pt-20">
      <FAQAccordion />
      <FinalCTA />
    </div>
  );
}
