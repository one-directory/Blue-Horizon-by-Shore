import type { Metadata } from "next";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerReveal";
import { Tag, ArrowRight } from "@/components/icons";
import { siteConfig } from "@/lib/data/site";
import { aroundUsPlaces } from "@/lib/data/aroundUs";

import { getBreadcrumbSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "Tulu Nadu Culture & Sacred Rituals ",
  description:
    "Discover the sacred culture and living traditions of Tulu Nadu — Nagamandala, Yakshagana theatre, Kambala races, and Bhoota Kola ceremonies near Udupi.",
  alternates: { canonical: `${siteConfig.url}/culture` },
  openGraph: {
    title: "Tulu Nadu Culture & Sacred Rituals ",
    description:
      "Discover the sacred culture and living traditions of Tulu Nadu — Nagamandala, Yakshagana theatre, Kambala races, and Bhoota Kola ceremonies near Udupi.",
    url: `${siteConfig.url}/culture`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/culture/culture hero.webp",
        width: 1200,
        height: 630,
        alt: "Tulu Nadu Culture – Yakshagana, Nagamandala, Kambala near Blue Horizon by Shore in Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulu Nadu Culture & Sacred Rituals ",
    description:
      "Discover the sacred culture and living traditions of Tulu Nadu — Nagamandala, Yakshagana theatre, Kambala races, and Bhoota Kola ceremonies near Udupi.",
    images: ["/culture/culture hero.webp"],
  },
};

const cultureGradients = [
  "linear-gradient(135deg, #4a3532 0%, #1c2a38 100%)", // Nagamandala (deep red)
  "linear-gradient(135deg, #463f57 0%, #1c2a38 100%)", // Yakshagana (deep purple)
  "linear-gradient(135deg, #0f172a 0%, #1c2a38 100%)", // Kambala (slate dark)
  "linear-gradient(135deg, #6a4640 0%, #1c2a38 100%)", // Bhoota Kola (rich red)
];

export default function CulturePage() {
  const cultureItems = aroundUsPlaces.filter(item => item.category === "Culture");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Culture", url: `${siteConfig.url}/culture` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="culture-hero" aria-label="Tulu Nadu Culture Gallery Banner">
        <div className="culture-hero-image-wrapper">
          <Image
            src="/culture/culture hero.webp"
            alt="Tulu Nadu Culture Showcase"
            fill
            priority
            sizes="100vw"
            className="culture-hero-image"
          />
        </div>
        <div className="culture-hero-overlay" aria-hidden="true" />
        <FadeIn className="container-resort culture-hero-content">
          <span className="text-overline page-hero-overline">Heritage & Rituals</span>
          <h1 className="text-h1 page-hero-title">Tulu Nadu Culture</h1>
          <p className="page-hero-desc">
            Coastal Karnataka is a land of living, ancient traditions. From fire-dancing spirit worship
            to thunderous buffalo races, witness ceremonies and art forms that have defined the rhythm of local life for generations.
          </p>
        </FadeIn>
      </section>

      {/* Culture Cards */}
      <section className="section-padding-lg bg-off-white culture-listings" aria-label="Culture traditions and rituals">
        <div className="container-resort">
          <StaggerContainer className="culture-grid-full">
            {cultureItems.map((item, idx) => (
              <StaggerItem key={item.id}>
                <article className="culture-card-full card-resort" aria-label={item.name}>
                  <div
                    className="culture-visual-full"
                    style={{ background: !item.image ? cultureGradients[idx % cultureGradients.length] : undefined }}
                    aria-hidden="true"
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover", zIndex: 0 }}
                      />
                    )}
                  </div>
                  <div className="culture-body-full">
                    <h2 className="culture-title-full">{item.name}</h2>
                    <p className="culture-desc-full">{item.description}</p>
                    <div className="culture-footer-full">
                      <div className="culture-tags-full">
                        {item.highlights.map((tag) => (
                          <span key={tag} className="culture-tag-full">
                            <Tag size={10} aria-hidden="true" style={{ marginRight: "4px" }} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a href={`/around-us/${item.id}`} className="culture-explore-link" aria-label={`Read more about ${item.name}`}>
                        Read More <ArrowRight size={13} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <style>{`
        /* Responsive Hero with aspect-ratio showcase */
        .culture-hero {
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
          .culture-hero {
            min-height: 55vh;
          }
        }

        @media (min-width: 768px) {
          .culture-hero {
            min-height: auto;
            aspect-ratio: 2816 / 1536;
            padding-top: 6rem;
            padding-bottom: 3rem;
          }
        }

        .culture-hero-image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .culture-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .culture-hero-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.015) 1px, transparent 0),
            linear-gradient(to bottom, rgba(28, 42, 56, 0.75) 0%, rgba(28, 42, 56, 0.5) 50%, rgba(28, 42, 56, 0.85) 100%);
          background-size: 36px 36px, 100% 100%;
          z-index: 2;
        }

        .culture-hero .culture-hero-content {
          position: relative !important;
          z-index: 5 !important;
          max-width: 720px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .culture-hero .page-hero-overline {
          color: #d9c9a8 !important;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
          font-weight: 600;
        }

        .culture-hero .page-hero-title {
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
        }

        .culture-hero .page-hero-desc {
          color: rgba(255, 255, 255, 0.85) !important;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }

        .culture-listings {
          padding-top: clamp(2.5rem, 5vw, 4rem) !important;
        }

        .culture-grid-full {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        @media (max-width: 768px) {
          .culture-grid-full {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          /* Dynamic height, flex stacked card flow on mobile */
          .culture-card-full {
            display: flex;
            flex-direction: column;
            aspect-ratio: auto !important;
            height: auto !important;
            transform: none !important;
            box-shadow: var(--shadow-luxury);
          }

          /* Disable absolute black overlay backdrop on mobile */
          .culture-card-full::after {
            display: none !important;
          }

          /* Static image card wrapper on top */
          .culture-visual-full {
            position: relative !important;
            inset: auto !important;
            width: 100% !important;
            height: 220px !important;
            padding: 0 !important;
          }

          /* Static details block below the image */
          .culture-body-full {
            position: relative !important;
            inset: auto !important;
            transform: none !important;
            height: auto !important;
            padding: 1.5rem !important;
            background: var(--color-primary) !important;
            display: flex;
            flex-direction: column;
          }

          .culture-title-full {
            font-size: 1.3rem !important;
            color: #d9c9a8 !important;
            text-shadow: none !important;
          }

          /* Natural wrapping description, always visible, no scroll */
          .culture-desc-full {
            opacity: 1 !important;
            transform: none !important;
            font-size: 0.88rem !important;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.78) !important;
            margin-top: 0.75rem !important;
            margin-bottom: 1.25rem !important;
            max-height: none !important;
            overflow-y: visible !important;
          }

          /* Footer (tags + cta) permanently visible and aligned */
          .culture-footer-full {
            opacity: 1 !important;
            transform: none !important;
            padding-top: 1rem !important;
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
            display: flex !important;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
          }

          .culture-tags-full {
            display: flex !important;
            flex-wrap: wrap;
            gap: 0.4rem;
            flex: 1;
          }

          .culture-tag-full {
            font-size: 0.65rem !important;
            padding: 0.2rem 0.5rem !important;
          }

          .culture-explore-link {
            font-size: 0.8rem !important;
            align-self: center;
            margin-bottom: 0;
            white-space: nowrap;
          }
        }

        .culture-card-full {
          position: relative;
          background: var(--color-navy);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-luxury);
          transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
          aspect-ratio: 1.25 / 1;
        }

        @media (min-width: 768px) {
          .culture-card-full {
            aspect-ratio: 1.4 / 1;
          }
        }

        .culture-card-full:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-elevated);
        }

        /* Hover overlay backdrop */
        .culture-card-full::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(13, 27, 42, 0.92);
          z-index: 2;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .culture-card-full:hover::after {
          opacity: 1;
        }

        .culture-visual-full {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
        }

        .culture-visual-full img {
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .culture-card-full:hover .culture-visual-full img {
          transform: scale(1.06);
        }

        .culture-badge-full {
          position: relative;
          z-index: 3;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 2px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .culture-body-full {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(to top, rgba(13, 27, 42, 0.95) 0%, rgba(13, 27, 42, 0.6) 60%, transparent 100%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          transform: translateY(calc(100% - 4.8rem)); /* Keeps the title visible at the bottom in default state */
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.5s ease;
        }

        .culture-card-full:hover .culture-body-full {
          transform: translateY(0);
          background: transparent;
        }

        .culture-title-full {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--color-white);
          margin: 0;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
          transition: color 0.3s ease;
        }

        .culture-card-full:hover .culture-title-full {
          color: #d9c9a8;
        }

        .culture-desc-full {
          font-size: 0.88rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.85);
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.4s ease 0.1s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
        }

        .culture-card-full:hover .culture-desc-full {
          opacity: 1;
          transform: translateY(0);
        }

        .culture-footer-full {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.4s ease 0.2s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }

        .culture-card-full:hover .culture-footer-full {
          opacity: 1;
          transform: translateY(0);
        }

        .culture-tags-full {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .culture-tag-full {
          display: inline-flex;
          align-items: center;
          font-size: 0.68rem;
          font-weight: 500;
          color: #d9c9a8;
          background: rgba(240, 210, 144, 0.08);
          border: 1px solid rgba(240, 210, 144, 0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 2px;
          letter-spacing: 0.02em;
        }

        .culture-explore-link {
          font-size: 0.8rem;
          color: #d9c9a8;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color var(--transition-smooth);
        }

        .culture-explore-link:hover {
          color: var(--color-white);
        }

        .culture-explore-link:hover svg {
          transform: translateX(3px);
        }

        .culture-explore-link svg {
          transition: transform var(--transition-smooth);
        }
      `}</style>
    </>
  );
}
