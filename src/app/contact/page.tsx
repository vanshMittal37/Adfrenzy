import { StrategyCallSection } from "@/components/sections/StrategyCallSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SparkMedia",
  description:
    "Contact SparkMedia in Pune, Maharashtra to discuss performance marketing, creative, CRO, web development and e-commerce growth.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <StrategyCallSection />
    </div>
  );
}
