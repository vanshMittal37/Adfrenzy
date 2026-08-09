export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  companyName: string;
  companyLogo?: string;
  authorPhoto?: string;
  metricsHighlight?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    quote: "SparkMedia eliminated the traditional disconnect between our video team and media buyers. Our creative velocity doubled and our return on ad spend reached record highs.",
    authorName: "[Client CMO]",
    authorTitle: "Chief Marketing Officer",
    companyName: "[D2C Fashion Brand]",
    metricsHighlight: "+[XX]% Revenue Growth"
  },
  {
    id: "test-2",
    quote: "They don't just run ads — they treat our P&L like their own. The landing page optimisations and UGC creative pipeline solved our scaling bottleneck in the first 60 days.",
    authorName: "[Brand Founder]",
    authorTitle: "Founder & CEO",
    companyName: "[Skincare & Beauty Brand]",
    metricsHighlight: "[XX.Xx] Peak ROAS"
  },
  {
    id: "test-3",
    quote: "The ownership mindset and daily data transparency made SparkMedia feel like an internal growth department rather than an external agency vendor.",
    authorName: "[VP of Growth]",
    authorTitle: "VP of E-Commerce",
    companyName: "[Home Decor Brand]",
    metricsHighlight: "-[XX]% CAC Reduction"
  }
];
