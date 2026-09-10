import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { faqData } from "@/data/faq";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Adfrenzy Media's performance marketing, creative production, CRO, web development and SEO services.",
  alternates: {
    canonical: "https://adfrenzymedia.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Adfrenzy Media",
    description:
      "Find answers to common questions about Adfrenzy Media's performance marketing, creative production, CRO, web development and SEO services.",
    url: "https://adfrenzymedia.com/faq",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQAccordion />
      <FinalCTA />
    </div>
  );
}
