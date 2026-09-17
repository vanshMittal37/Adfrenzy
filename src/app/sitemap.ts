import type { MetadataRoute } from "next";
import { insightsData } from "@/data/insights";
import { caseStudiesData } from "@/data/caseStudies";

const BASE_URL = "https://www.adfrenzymedia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/services/performance-marketing",
    "/services/creative",
    "/services/cro",
    "/services/web-design",
    "/services/seo",
    "/services/strategy",
    "/work",
    "/results",
    "/process",
    "/faq",
    "/insights",
    "/contact",
    "/book-a-call",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
  }));

  const insightEntries: MetadataRoute.Sitemap = insightsData.map((article) => ({
    url: `${BASE_URL}/insights/${article.slug}`,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = Object.keys(caseStudiesData).map((slug) => ({
    url: `${BASE_URL}/work/${slug}`,
  }));

  return [...staticEntries, ...insightEntries, ...caseStudyEntries];
}