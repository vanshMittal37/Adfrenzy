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
    quote: "[Quote 1]",
    authorName: "[Name]",
    authorTitle: "Founder",
    companyName: "[Brand]",
    metricsHighlight: "8.6x Average ROAS"
  },
  {
    id: "testimonial-2",
    quote: "[Quote 2]",
    authorName: "[Name]",
    authorTitle: "Founder",
    companyName: "[Brand]",
    metricsHighlight: "Full-Funnel Scale"
  },
  {
    id: "testimonial-3",
    quote: "[Quote 3]",
    authorName: "[Name]",
    authorTitle: "[Role]",
    companyName: "[Brand]",
    metricsHighlight: "Growth Partner"
  }
];
