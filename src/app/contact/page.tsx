import { StrategyCallSection } from "@/components/sections/StrategyCallSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Adfrenzy Media",
  description:
    "Contact Adfrenzy Media to discuss performance marketing, creative, CRO, web development and D2C brand growth.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <StrategyCallSection />
    </div>
  );
}
