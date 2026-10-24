import { SITE_URL } from "@/lib/site";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/vision", "/companies", "/contact", "/shanaka-jayakody"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date("2026-10-24"),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  );
}
