import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import { roomGallery } from "@/config/gallery";

export const metadata: Metadata = {
  title: "Rooms",
  description: "Comfortable double bedrooms at Blue Horizon by Shore, Kola, Kodavoor, near Malpe, Udupi, with Wi-Fi, parking, soap and drinking water.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <>
      <PageBanner eyebrow="Rooms" title={<>Simple, tidy and <em>easy to settle into.</em></>} />
      <Rooms />
      <Gallery
        id="room-photos"
        items={roomGallery}
        eyebrow="Room photos"
        title={<>Every room, <em>every angle.</em></>}
        lead="The double bedrooms and bathrooms, exactly as guests find them. Tap any photo to enlarge."
      />
    </>
  );
}
