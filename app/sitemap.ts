import type { MetadataRoute } from "next";

const baseUrl = "https://patana5traders.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy-policy", "/terms-and-conditions", "/cookie-policy", "/disclaimer"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "yearly",
    priority: path === "" ? 1 : 0.5
  }));
}
