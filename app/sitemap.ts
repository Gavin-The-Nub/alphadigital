import { siteUrl } from "../lib/constants";
import type { MetadataRoute } from "next";

export const revalidate = 1800; // 30 minutes - adjust as needed

// Static sitemap data (replace with your actual static routes)
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: `${siteUrl}/`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: `${siteUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 2,
  },
  {
    url: `${siteUrl}/changelog`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 3,
  },
  // Add more static routes as needed
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes;
}
