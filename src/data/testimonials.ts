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
    id: "zazu-omair",
    quote: "Working with Spark Media and Vedant for approximately 8 months has been game-changing. The team is highly diligent and hardworking. They truly understand our brand's expectations, tailor campaigns specifically to our requirements, and consistently hit our target ROAS goals.",
    authorName: "Omair",
    authorTitle: "Founder",
    companyName: "ZAZU",
    metricsHighlight: "₹3.1Cr Sales Generated",
    videoUrl: "https://res.cloudinary.com/dmm8lfc3x/video/upload/v1786560176/o7txvg8disgd61bya8no.mp4"
  },
  {
    id: "sushant-fig",
    quote: "Deep funnel building, understanding core data, and identifying the right information within analytics. We continuously analyze what is working and what is not to improve the overall brand marketing approach.",
    authorName: "Sushant",
    authorTitle: "Founder",
    companyName: "FIG Living",
    metricsHighlight: "Funnel & Data Strategy",
    videoUrl: "https://res.cloudinary.com/dmm8lfc3x/video/upload/v1786560396/ph5sowlyjsbyym0wufxg.mp4"
  },
  {
    id: "client-lady",
    quote: "Outstanding performance marketing partner. They deliver direct results with absolute clarity, scale our acquisition campaigns efficiently, and operate as a true extension of our growth team.",
    authorName: "Client Testimonial",
    authorTitle: "Co-Founder",
    companyName: "E-Commerce Brand",
    metricsHighlight: "8.79x ROAS Achieved",
    videoUrl: "https://res.cloudinary.com/dmm8lfc3x/video/upload/v1786560547/iksrceaze0nyate9eoty.mp4"
  },
  {
    id: "client-brand-video",
    quote: "Their creative testing velocity and ads optimization took our campaigns from stagnant to highly profitable. Highly responsive and data-driven approach.",
    authorName: "Rahul Agarwal",
    authorTitle: "Founder",
    companyName: "Kaftanize",
    metricsHighlight: "E-commerce Growth",
    videoUrl: "https://res.cloudinary.com/dmm8lfc3x/video/upload/v1786560845/t4baws4djixhbjj3ukzw.mp4"
  }
];
