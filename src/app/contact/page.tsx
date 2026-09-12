import { StrategyCallSection } from "@/components/sections/StrategyCallSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Adfrenzy Media | D2C Performance Marketing Partner",
  description:
    "Get in touch with Adfrenzy Media. Connect with our growth team in Cyber City, Gurugram to discuss your performance marketing, creative, CRO, and eCommerce scaling goals.",
  alternates: {
    canonical: "https://www.adfrenzymedia.com/contact",
  },
  openGraph: {
    title: "Contact Adfrenzy Media | D2C Performance Marketing Partner",
    description:
      "Get in touch with Adfrenzy Media. Connect with our growth team in Cyber City, Gurugram to discuss your performance marketing, creative, CRO, and eCommerce scaling goals.",
    url: "https://www.adfrenzymedia.com/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.adfrenzymedia.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.adfrenzymedia.com/contact"
      }
    ]
  };

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StrategyCallSection />
    </div>
  );
}
