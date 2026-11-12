import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import StayInfo from "@/components/StayInfo";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Blue Horizon by Shore, a bright blue guesthouse in Kola, Kodavoor, near Malpe, Udupi. Check-in and check-out details.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner eyebrow="About us" title={<>Our house, <em>our story.</em></>}>
        A bright blue guesthouse near Malpe, run to feel like home.
      </PageBanner>
      <About />
      <StayInfo />
    </>
  );
}
