import type { MetadataRoute } from "next";

const BASE_URL = "https://www.bizbuzz.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/camps-2026", priority: 0.9, changeFrequency: "weekly" },
    { path: "/fish-tank-2026", priority: 0.9, changeFrequency: "weekly" },
    { path: "/sponsors", priority: 0.8, changeFrequency: "monthly" },
    { path: "/workshops", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sessions", priority: 0.8, changeFrequency: "monthly" },
    { path: "/years", priority: 0.7, changeFrequency: "monthly" },
    { path: "/years/2024", priority: 0.6, changeFrequency: "yearly" },
    { path: "/years/2025", priority: 0.6, changeFrequency: "yearly" },
    { path: "/years/2026", priority: 0.7, changeFrequency: "monthly" },
    { path: "/camps-2025", priority: 0.5, changeFrequency: "yearly" },
    { path: "/camps-2024", priority: 0.5, changeFrequency: "yearly" },
    { path: "/camps-2027", priority: 0.5, changeFrequency: "monthly" },
    { path: "/fish-tank-2025", priority: 0.5, changeFrequency: "yearly" },
    { path: "/fish-tank-2024", priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
