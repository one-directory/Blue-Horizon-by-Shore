import { getImageProps } from "next/image";
import { ArrowDown, BedDouble, Clock, MapPin, WhatsApp, Wifi } from "@/components/icons";
import { photos } from "@/config/gallery";
import { site, addressLine, whatsappHref, defaultEnquiry } from "@/config/site";

export default function Hero() {
  // Art direction: portrait photo on phones, landscape on larger screens. One <picture>, one download.
  const common = { alt: "", fill: true, sizes: "100vw", quality: 75, fetchPriority: "high" as const, loading: "eager" as const };
  const { props: desktop } = getImageProps({ ...common, src: photos.entrance.src });
  const { props: mobile } = getImageProps({ ...common, src: photos.entrance.src });

  return (
    <section id="top" aria-label={site.name} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-pine-deep">
      <picture className="absolute inset-0 -z-20">
        <source media="(max-width: 767px)" srcSet={mobile.srcSet} sizes="100vw" />
        <img {...desktop} alt="" className="hero-img h-full w-full object-cover object-[62%_50%] md:object-[50%_55%]" />
      </picture>
      <div className="hero-shade absolute inset-0 -z-10" aria-hidden="true" />

      <div className="wrap relative pb-28 pt-36 md:pb-36">
        <p className="hero-in eyebrow !text-marigold [text-shadow:0_1px_12px_rgb(0_0_0/0.7)]" style={{ "--d": "0.1s" } as React.CSSProperties}>
          {site.name}
        </p>
        <h1 className="h1 hero-in mt-5 max-w-3xl" style={{ "--d": "0.2s" } as React.CSSProperties}>
          Stay by the <em>blue horizon.</em>
        </h1>
        <p className="hero-in mt-6 max-w-xl text-lg text-white/90 md:text-xl" style={{ "--d": "0.35s" } as React.CSSProperties}>
          {site.room.count} comfortable double bedrooms a short drive from Malpe beach, with Wi-Fi and parking for your stay.
        </p>

        <div className="hero-in mt-8 flex flex-wrap items-center gap-x-6 gap-y-5" style={{ "--d": "0.5s" } as React.CSSProperties}>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm text-white backdrop-blur-md">
            <MapPin size={16} className="text-marigold" aria-hidden="true" /> {addressLine}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={whatsappHref(defaultEnquiry)} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              <WhatsApp size={20} aria-hidden="true" /> Book on WhatsApp
            </a>
            <a href="/rooms" className="btn btn-ghost">See the rooms</a>
          </div>
        </div>
      </div>

      {/* quick facts */}
      <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/20 bg-pine-deep/55 backdrop-blur-md md:block">
        <ul className="wrap flex items-center justify-between gap-6 py-4 text-sm text-white/90">
          <li className="flex items-center gap-2.5"><BedDouble size={18} className="text-marigold" aria-hidden="true" />{site.room.count} double bedrooms</li>
          <li className="flex items-center gap-2.5"><Clock size={18} className="text-marigold" aria-hidden="true" />Check-in {site.room.checkIn}</li>
          <li className="flex items-center gap-2.5"><Clock size={18} className="text-marigold" aria-hidden="true" />Check-out {site.room.checkOut}</li>
          <li className="flex items-center gap-2.5"><Wifi size={18} className="text-marigold" aria-hidden="true" />Wi-Fi &amp; parking</li>
          <li><a href="#welcome" aria-label="Scroll down" className="inline-flex items-center gap-2 text-white/80 hover:text-white">Scroll <ArrowDown size={16} aria-hidden="true" /></a></li>
        </ul>
      </div>
    </section>
  );
}
