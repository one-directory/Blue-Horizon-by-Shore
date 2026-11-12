import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";
import Location from "@/components/Location";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Call, WhatsApp or send an enquiry to Blue Horizon by Shore, Kola, Kodavoor, Malpe, Udupi, Karnataka.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner eyebrow="Contact" title={<>Let&rsquo;s plan <em>your stay.</em></>} />
      <Contact />
      <Location />
    </>
  );
}
