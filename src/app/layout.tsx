import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { localBusinessSchema } from "@/lib/seo";

/** Render every page on the server for each request (no static prerendering). */
export const dynamic = "force-dynamic";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
  variable: "--font-fraunces",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const title = `${site.name} | Guesthouse in Malpe, Udupi`;
const description = `Stay at ${site.name} in Kola, Kodavoor, Malpe, Udupi: ${site.room.count} comfortable double bedrooms with Wi-Fi, parking, soap and drinking water. Check-in ${site.room.checkIn}, check-out ${site.room.checkOut}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${site.name}, a bright blue guesthouse near Malpe, Udupi` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1f4d45",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
