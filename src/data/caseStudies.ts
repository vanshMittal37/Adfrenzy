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
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "zazu-growth": {
    slug: "zazu-growth",
    clientName: "ZAZU",
    industry: "E-commerce & Fashion",
    title: "How SparkMedia helped generate ₹3.1Cr in sales for ZAZU",
    tagline: "Unlocking scaling bottlenecks through high-velocity creative testing and performance marketing alignment.",
    challenge: "Scaling sales profitably while maintaining a healthy ROAS target. The brand needed creative tailoring according to their specific requirements and expectations.",
    strategy: [
      "Aligned account structure to target desired ROAS with dedicated ad sets.",
      "Tailored creative assets to fit the brand's aesthetic and product expectations.",
      "Analyzed customer behavior data to continuously optimize the acquisition funnel."
    ],
    execution: {
      creative: "Produced high-velocity ad concepts aligned directly with ZAZU's product catalogue and aesthetics.",
      media: "Restructured campaign layout for focused scaling on high-performing segments.",
      cro: "Analyzed funnel metrics to improve lander engagement and reduce drop-offs.",
      retention: "Implemented email and SMS automation sequences to capture repeat purchases."
    },
    results: {
      metric1: { label: "Sales Generated", value: "₹3.1Cr" },
      metric2: { label: "Partnership Duration", value: "8 Months" },
      metric3: { label: "Campaign Focus", value: "ROAS Optimization" }
    },
    testimonialQuote: "The team is diligent, hardworking, and understands the brand. Campaigns are tailored according to expectations with a focus on desired ROAS.",
    testimonialAuthor: "Omair, Founder at ZAZU",
    heroImage: "/assets/brand-analytics-sales.jpg",
    videoUrl: "https://res.cloudinary.com/dmm8lfc3x/video/upload/v1786560176/o7txvg8disgd61bya8no.mp4"
  },
  "kaftanize-scaling": {
    slug: "kaftanize-scaling",
    clientName: "Kaftanize",
    industry: "Fashion & Lifestyle",
    title: "TOF Funnel Optimization for Kaftanize E-Commerce",
    tagline: "Top of Funnel (TOF) catalog and link-click campaign scaling.",
    challenge: "Reaching new audience segments and driving high-intent link clicks at low cost.",
    strategy: [
      "Launched target Top of Funnel (TOF) campaigns focusing on core lifestyle collections.",
      "Optimized link-click campaigns using highly visual catalog creatives."
    ],
    execution: {
      creative: "Created catalog cards and collection slideshow ads.",
      media: "Deployed TOF link-click and full-stock catalog optimization campaigns.",
      cro: "Details coming soon",
      retention: "Details coming soon"
    },
    results: {
      metric1: { label: "Campaign Focus", value: "TOF Catalog" },
      metric2: { label: "Optimization Type", value: "Link Click" },
      metric3: { label: "Target Segment", value: "New Audiences" }
    },
    heroImage: "/assets/kaftanize.jpeg"
  }
};
