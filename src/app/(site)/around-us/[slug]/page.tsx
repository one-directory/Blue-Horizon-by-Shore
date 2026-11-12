import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aroundUsPlaces } from "@/lib/data/aroundUs";
import { siteConfig } from "@/lib/data/site";
import AroundUsDetailClient from "./AroundUsDetailClient";
import { getBreadcrumbSchema, getTouristAttractionSchema } from "@/lib/seo/schemas";

interface Props {
  params: Promise<{ slug: string }>;
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = aroundUsPlaces.find((p) => p.id === slug && p.category !== "Food");
  if (!place) return {};

  return {
    title: `${place.name} — Attraction Near Udupi`,
    description: place.description.slice(0, 155),
    alternates: { canonical: `${siteConfig.url}/around-us/${slug}` },
    openGraph: {
      title: `${place.name} — Attraction Near Udupi | ${siteConfig.name}`,
      description: place.description,
      url: `${siteConfig.url}/around-us/${slug}`,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: place.image
        ? [
            {
              url: place.image,
              width: 1200,
              height: 630,
              alt: `${place.name} near Blue Horizon by Shore in Udupi`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${place.name} — Attraction Near Udupi | ${siteConfig.name}`,
      description: place.description,
      images: place.image ? [place.image] : undefined,
    },
  };
}

export default async function PlaceDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = aroundUsPlaces.find((p) => p.id === slug && p.category !== "Food");
  if (!place) notFound();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Around Us", url: `${siteConfig.url}/around-us` },
    { name: place.name, url: `${siteConfig.url}/around-us/${slug}` },
  ]);

  const attractionSchema = getTouristAttractionSchema(place);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }}
      />
      <AroundUsDetailClient place={place} />
    </>
  );
}

