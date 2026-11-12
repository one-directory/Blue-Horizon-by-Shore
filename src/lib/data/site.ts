import { site } from "@/config/site";

/** Thin adapter so the Around Us / Culture / Cuisine pages can read the site name and URL. */
export const siteConfig = { name: site.name, url: site.url } as const;
