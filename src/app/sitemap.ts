import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/transport/`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...siteConfig.destinationMarkets.map((market) => ({
      url: `${siteConfig.url}/transport/${market.slug}/`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}
