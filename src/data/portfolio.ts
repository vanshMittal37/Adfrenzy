export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  category: string;
  industry: string;
  thumbnail: string;
  videoUrl?: string;
  metrics: {
    primaryValue: string;
    primaryLabel: string;
    secondaryValue?: string;
    secondaryLabel?: string;
    bottomLabel?: string;
  };
  featured: boolean;
  shortDescription: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "brand-1",
    slug: "brand-1",
    title: "[Brand 1]",
    clientName: "[Brand 1]",
    category: "[CATEGORY]",
    industry: "[Category]",
    thumbnail: "/assets/brand-analytics-sales.jpg",
    metrics: {
      primaryValue: "8.6x ROAS",
      primaryLabel: "At Scale",
      bottomLabel: "[8.6x ROAS at scale]"
    },
    featured: true,
    shortDescription: "[Brand 1] · [Category] · [8.6x ROAS at scale]"
  },
  {
    id: "brand-2",
    slug: "brand-2",
    title: "[Brand 2]",
    clientName: "[Brand 2]",
    category: "[CATEGORY]",
    industry: "[Category]",
    thumbnail: "/assets/brand-analytics-visitors.jpg",
    metrics: {
      primaryValue: "29L to 1.2Cr",
      primaryLabel: "Revenue Growth",
      bottomLabel: "In 5 months"
    },
    featured: true,
    shortDescription: "[Brand 2] · [Category] · [Revenue 29L to 1.2Cr in 5 months]"
  },
  {
    id: "brand-3",
    slug: "brand-3",
    title: "[Brand 3]",
    clientName: "[Brand 3]",
    category: "[CATEGORY]",
    industry: "[Category]",
    thumbnail: "/assets/brand-meta-performance-01.jpg",
    metrics: {
      primaryValue: "-38% CAC",
      primaryLabel: "Acquisition Cost",
      bottomLabel: "CAC down 38%"
    },
    featured: true,
    shortDescription: "[Brand 3] · [Category] · [CAC down 38%]"
  },
  {
    id: "brand-4",
    slug: "brand-4",
    title: "[Brand 4]",
    clientName: "[Brand 4]",
    category: "[CATEGORY]",
    industry: "[Category]",
    thumbnail: "/assets/brand-meta-performance-02.jpg",
    metrics: {
      primaryValue: "[Metric]",
      primaryLabel: "Performance Metric",
      bottomLabel: "[Metric]"
    },
    featured: true,
    shortDescription: "[Brand 4] · [Category] · [Metric]"
  }
];
