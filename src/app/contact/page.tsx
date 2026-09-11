import { StrategyCallSection } from "@/components/sections/StrategyCallSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Growth Call",
  description:
    "Book a growth call with Adfrenzy Media to discuss your performance marketing, creative, conversion and growth goals.",
  alternates: {
    canonical: "https://www.adfrenzymedia.com/contact",
  },
  openGraph: {
    title: "Book a Growth Call | Adfrenzy Media",
    description:
      "Book a growth call with Adfrenzy Media to discuss your performance marketing, creative, conversion and growth goals.",
    url: "https://www.adfrenzymedia.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <StrategyCallSection />
    </div>
  );
}
