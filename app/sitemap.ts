import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export const dynamic = "force-static";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/general-repair/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/european-auto-repair/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/performance-tuning/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/reviews/", priority: 0.7, changeFrequency: "weekly" },
  { path: "/book-appointment/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/service-areas/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy-policy/", priority: 0.2, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${business.siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
