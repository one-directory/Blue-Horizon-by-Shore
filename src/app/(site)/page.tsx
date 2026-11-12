import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import ExperienceTeaser from "@/components/ExperienceTeaser";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Amenities />
      <Gallery />
      <ExperienceTeaser />
      <CtaBand />
    </>
  );
}
