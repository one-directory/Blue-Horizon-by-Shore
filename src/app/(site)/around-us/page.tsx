import type { Metadata } from "next";

import { Suspense } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import AroundUsClient from "./AroundUsClient";
import { siteConfig } from "@/lib/data/site";

import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Attractions Near Malpe Beach & Udupi",
  description:
    "Discover attractions near Blue Horizon by Shore in Malpe, Udupi — Malpe Beach, St. Mary's Island, Kapu Lighthouse, and Sri Krishna Temple with travel times.",
  alternates: { canonical: `${siteConfig.url}/around-us` },
  openGraph: {
    title: "Attractions Near Malpe Beach & Udupi | Blue Horizon by Shore",
    description:
      "Discover attractions near Blue Horizon by Shore in Malpe, Udupi — Malpe Beach, St. Mary's Island, Kapu Lighthouse, and Sri Krishna Temple with travel times.",
    url: `${siteConfig.url}/around-us`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/around us main.webp",
        width: 1200,
        height: 630,
        alt: "Around Blue Horizon by Shore – Nearby Attractions in Malpe, Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Attractions Near Malpe Beach & Udupi | Blue Horizon by Shore",
    description:
      "Discover attractions near Blue Horizon by Shore in Malpe, Udupi — Malpe Beach, St. Mary's Island, Kapu Lighthouse, and Sri Krishna Temple with travel times.",
    images: ["/around us main.webp"],
  },
};

export default function AroundUsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Around Us", url: `${siteConfig.url}/around-us` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="around-hero" aria-label="The World Around Blue Horizon by Shore Gallery Banner">
        <div className="around-hero-image-wrapper">
          <Image
            src="/around us main.webp"
            alt="The World Around Blue Horizon by Shore Showcase"
            fill
            priority
            sizes="100vw"
            className="around-hero-image"
          />
        </div>
        <div className="around-hero-overlay" aria-hidden="true" />

        <FadeIn className="container-resort around-hero-content">
          <span className="text-overline page-hero-overline">Explore the Neighbourhood</span>
          <h1 className="text-h1 page-hero-title">The World Around Blue Horizon by Shore</h1>
          <p className="page-hero-desc">
            Beyond our gates lies one of India's most compelling coastal destinations. From the famous sands of Malpe Beach to the ancient temples of the Tulu Nadu hinterland — adventure is always close.
          </p>
        </FadeIn>
      </section>

      {/* Attractions */}
      <section className="section-padding-lg bg-off-white around-listings" aria-label="Attractions listings">
        <div className="container-resort">
          <Suspense fallback={<div>Loading neighbourhood...</div>}>
            <AroundUsClient />
          </Suspense>
        </div>
      </section>


      <style>{`
        /* Responsive Hero with aspect-ratio showcase */
        .around-hero {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--color-primary);
          min-height: 75vh;
          padding-top: 8rem;
          padding-bottom: 4rem;
        }

        @media (max-width: 767px) {
          .around-hero {
            min-height: 55vh;
          }
        }

        @media (min-width: 768px) {
          .around-hero {
            min-height: auto;
            aspect-ratio: 2816 / 1536; /* Set matching aspect-ratio size as cuisine hero */
            padding-top: 6rem;
            padding-bottom: 3rem;
          }
        }

        .around-hero-image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .around-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .around-hero-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.015) 1px, transparent 0),
            linear-gradient(to bottom, rgba(28, 42, 56, 0.75) 0%, rgba(28, 42, 56, 0.5) 50%, rgba(28, 42, 56, 0.85) 100%);
          background-size: 36px 36px, 100% 100%;
          z-index: 2;
        }

        .around-hero .around-hero-content {
          position: relative !important;
          z-index: 5 !important;
          max-width: 720px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .around-hero .page-hero-overline {
          color: #d9c9a8 !important;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
          font-weight: 600;
        }

        .around-hero .page-hero-title {
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
        }

        .around-hero .page-hero-desc {
          color: rgba(255, 255, 255, 0.85) !important;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }

        .around-listings {
          padding-top: clamp(2.5rem, 5vw, 4rem) !important;
        }
      `}</style>
    </>
  );
}
