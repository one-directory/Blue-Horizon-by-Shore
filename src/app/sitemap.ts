import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { aroundUsPlaces } from "@/lib/data/aroundUs";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/rooms", "/around-us", "/culture", "/cuisine", "/contact"];
  const places = aroundUsPlaces.filter((p) => p.category !== "Food").map((p) => `/around-us/${p.id}`);
  return [...pages, ...places].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.startsWith("/around-us/") ? 0.5 : 0.8,
  }));
}
