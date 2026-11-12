import { siteConfig } from "@/lib/data/site";
import type { AroundUsItem } from "@/lib/data/aroundUs";

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getTouristAttractionSchema(place: AroundUsItem) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: place.name,
    description: place.description,
    url: `${siteConfig.url}/around-us/${place.id}`,
    image: place.image ? `${siteConfig.url}${place.image}` : undefined,
  };
}
