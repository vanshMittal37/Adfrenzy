export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  companyName: string;
  companyLogo?: string;
  authorPhoto?: string;
  metricsHighlight?: string;
  videoUrl?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "AdfrenzyMedia transformed our scaling strategy. We went from fluctuating campaign performance to a predictable 8.6x ROAS month over month.",
    authorName: "Aarav Sharma",
    authorTitle: "Founder & CEO",
    companyName: "LuxeSkincare D2C",
    metricsHighlight: "8.6x Average ROAS"
  },
  {
    id: "testimonial-2",
    quote: "Their full-funnel approach fixed our landing page drop-offs and UGC creative pipeline. Revenue scaled seamlessly from 29L to 1.2Cr in under 5 months.",
    authorName: "Rohan Verma",
    authorTitle: "Co-Founder",
    companyName: "UrbanFit Apparel",
    metricsHighlight: "29L → 1.2Cr Revenue"
  },
  {
    id: "testimonial-3",
    quote: "Having ads, landers, CRO, and tracking managed under one roof completely eliminated silos. Our blended customer acquisition cost dropped by 38%.",
    authorName: "Ananya Mehta",
    authorTitle: "Growth Director",
    companyName: "GlowNatural",
    metricsHighlight: "-38% Acquisition Cost"
  }
];
