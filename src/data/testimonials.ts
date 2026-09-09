export interface Testimonial {
  id: string;
  brand: string;
  founder: string;
  role: string;
  location?: string;
  quote: string;
  logo: string;
  approvedForTestimonial: boolean;
  metricsHighlight?: string;
}

export const testimonialsData: Testimonial[] = [
  // FEATURED 6 APPROVED TESTIMONIALS (REQUESTED BRANDS)
  {
    id: "wine-chateau",
    brand: "Wine Chateau",
    founder: "Som",
    role: "Founder",
    location: "US",
    quote: "Different market, different rules, and they picked it up fast. We kept increasing spend and the ROAS stayed above 8 through all of it. Calls end with a decision, not a slide deck.",
    logo: "/clients/wine-chateau.svg",
    approvedForTestimonial: true,
    metricsHighlight: "8.0x+ ROAS (US)"
  },
  {
    id: "rootz-organics",
    brand: "Rootz Organics",
    founder: "Ashwini Khatavate",
    role: "Founder",
    location: "India",
    quote: "Scaling fresh organic produce requires extremely sharp retention and customer acquisition funnels. They optimized our ad spend while holding an 8.2x ROAS consistently.",
    logo: "/clients/rootz-organics.svg",
    approvedForTestimonial: true,
    metricsHighlight: "8.2x ROAS"
  },
  {
    id: "label-pikake",
    brand: "Label Pikake",
    founder: "Vandana",
    role: "Founder",
    location: "Delhi",
    quote: "We've grown every single month since they took over, and ROAS has stayed above 8.5 through all of it. New creative lands before I even remember to ask for it.",
    logo: "/clients/label-pikake.svg",
    approvedForTestimonial: true,
    metricsHighlight: "8.5x ROAS"
  },
  {
    id: "ai-by-prerna",
    brand: "AI by Prerna",
    founder: "Prerna Khanna",
    role: "Founder",
    location: "Delhi",
    quote: "Honestly, I had almost given up on ads. Revenue has more than doubled since we started and ROAS has sat around 8.4 that whole time. And the creative keeps coming without me chasing anyone. That's the part I value most.",
    logo: "/clients/ai-by-prerna.svg",
    approvedForTestimonial: true,
    metricsHighlight: "8.4x ROAS"
  },
  {
    id: "atulya-karigari",
    brand: "Atulya Karigari",
    founder: "[Founder - TBD]",
    role: "Founder",
    location: "India",
    quote: "They took time to understand the craft before writing a single ad. That showed in the creative and it showed in the numbers. 8.5x ROAS and steady revenue growth.",
    logo: "/clients/atulya-karigari.svg",
    approvedForTestimonial: true,
    metricsHighlight: "8.5x ROAS"
  },
  {
    id: "velviore",
    brand: "Velviore",
    founder: "[Founder - TBD]",
    role: "Founder",
    location: "India",
    quote: "We started from zero brand awareness. They got the first winning ads inside three weeks and we've maintained an 8.1x ROAS while expanding inventory.",
    logo: "/clients/velviore.svg",
    approvedForTestimonial: true,
    metricsHighlight: "8.1x ROAS"
  },

  // PENDING APPROVAL SPARE TESTIMONIALS (KEPT IN CENTRAL DATA, HIDDEN PUBLICLY)
  {
    id: "leaf-ortho",
    brand: "Leaf Ortho",
    founder: "Dhruv",
    role: "Founder",
    quote: "Revenue is up sharply, CAC is down, and ROAS has held at 8.2 through the whole run. And when something dips, they call me before I've even noticed it.",
    logo: "/clients/leaf-ortho.svg",
    approvedForTestimonial: false
  },

  // ADDITIONAL PENDING TESTIMONIALS
  {
    id: "valkyre-clothing",
    brand: "Valkyre Clothing",
    founder: "[Pending]",
    role: "Founder",
    quote: "We doubled spend expecting ROAS to fall off. It held at 8.4. First time that's happened for us.",
    logo: "/clients/valkyre-clothing.svg",
    approvedForTestimonial: false
  },
  {
    id: "forever-chique",
    brand: "Forever Chique",
    founder: "[Pending]",
    role: "Founder",
    quote: "The volume of creative is the difference. Something new every week, so nothing goes stale long enough to hurt us.",
    logo: "/clients/forever-chique.svg",
    approvedForTestimonial: false
  },
  {
    id: "alankaara",
    brand: "Alankaara",
    founder: "[Pending]",
    role: "Founder",
    quote: "Ours is a considered purchase and they built the funnel around that. Nobody buys on the first click, so they stopped trying to make them. Holding 8.9x.",
    logo: "/clients/alankaara.svg",
    approvedForTestimonial: false
  },
  {
    id: "dakauz",
    brand: "Dakauz",
    founder: "[Pending]",
    role: "Founder",
    quote: "For the first time I actually understand my own numbers. Weekly call, clear reporting, and 8.2x holding steady while we scale.",
    logo: "/clients/dakauz.svg",
    approvedForTestimonial: false
  },
  {
    id: "femi9-by-as",
    brand: "Femi9 by AS",
    founder: "[Pending]",
    role: "Founder",
    quote: "Repeat customers were an afterthought before. They built the retargeting and the flows properly, and blended ROAS went past 8 and stayed.",
    logo: "/clients/femi9-by-as.svg",
    approvedForTestimonial: false
  },
  {
    id: "velviore",
    brand: "Velviore",
    founder: "[Pending]",
    role: "Founder",
    quote: "We started from nothing. They got the first winning ads inside three weeks and we've been above 8x since.",
    logo: "/clients/velviore.svg",
    approvedForTestimonial: false
  },
  {
    id: "atulya-karigari",
    brand: "Atulya Karigari",
    founder: "[Pending]",
    role: "Founder",
    quote: "They took time to understand the craft before writing a single ad. That showed in the creative and it showed in the numbers. 8.5x.",
    logo: "/clients/atulya-karigari.svg",
    approvedForTestimonial: false
  },
  {
    id: "jabon",
    brand: "Jabon",
    founder: "[Pending]",
    role: "Founder",
    quote: "Steady is the word. Every month a bit better than the last, ROAS above 8, no drama. That's all I ever wanted.",
    logo: "/clients/jabon.svg",
    approvedForTestimonial: false
  }
];

export const getPublicTestimonials = (): Testimonial[] => {
  return testimonialsData.filter((t) => t.approvedForTestimonial);
};
