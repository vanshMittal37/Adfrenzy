export interface CaseStudy {
  slug: string;
  clientName: string;
  industry: string;
  title: string;
  tagline: string;
  challenge: string;
  strategy: string[];
  execution: {
    creative: string;
    media: string;
    cro: string;
    retention: string;
  };
  results: {
    metric1: { label: string; value: string };
    metric2: { label: string; value: string };
    metric3: { label: string; value: string };
  };
  testimonialQuote?: string;
  testimonialAuthor?: string;
  heroImage: string;
  videoUrl?: string;
  servicesUsed?: { title: string; slug: string }[];
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "iyka": {
    slug: "iyka",
    clientName: "IYKA",
    industry: "D2C Contemporary Apparel & Fashion",
    title: "IYKA — Omnichannel Apparel Scaling & Conversion Overhaul",
    tagline: "Consolidated Meta ad architecture, weekly UGC hook testing, and storefront conversion rate optimization.",
    challenge: "Rising CPMs across seasonal fashion campaigns, rapid creative fatigue on single lookbook ads, and high drop-offs on mobile product detail pages.",
    strategy: [
      "Transitioned from fragmented interest targeting to consolidated broad Advantage+ campaign structures.",
      "Shipped 15+ weekly direct-response UGC hooks highlighting fabric flow, fit, and styling.",
      "Rebuilt mobile storefront PDP with sticky CTA, variant swatches, and frictionless 1-click checkout corridor."
    ],
    execution: {
      creative: "Aesthetic lifestyle reels, real-body sizing demonstrations, and high-contrast fabric drape close-ups.",
      media: "P&L-aligned budget scaling with contribution margin floors and Advantage+ catalog integration.",
      cro: "Mobile-first PDP architecture, instant size recommendation widget, and 1-click checkout corridor.",
      retention: "VIP early access WhatsApp drops for seasonal collection releases."
    },
    results: {
      metric1: { label: "Blended ROAS", value: "8.2x" },
      metric2: { label: "Conversion Lift", value: "+42%" },
      metric3: { label: "Revenue Scale", value: "3.1x Monthly" }
    },
    testimonialQuote: "Adfrenzy completely revamped how we scale. Our creative pipeline never runs out, and our store converts cold traffic far better than ever.",
    testimonialAuthor: "Founder, IYKA",
    heroImage: "/assets/iyka.jpeg",
    servicesUsed: [
      { title: "Performance Marketing", slug: "performance-marketing" },
      { title: "Performance Creative & UGC", slug: "creative" },
      { title: "CRO & Landing Pages", slug: "cro" }
    ]
  }
};
