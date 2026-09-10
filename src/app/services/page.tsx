import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D2C Performance Marketing Services",
  description:
    "Explore Adfrenzy Media's performance marketing, creative, website, CRO and SEO services for D2C brands.",
  alternates: {
    canonical: "https://adfrenzymedia.com/services",
  },
  openGraph: {
    title: "D2C Performance Marketing Services | Adfrenzy Media",
    description:
      "Explore Adfrenzy Media's performance marketing, creative, website, CRO and SEO services for D2C brands.",
    url: "https://adfrenzymedia.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesGrid />
      <FinalCTA />
    </div>
  );
}
