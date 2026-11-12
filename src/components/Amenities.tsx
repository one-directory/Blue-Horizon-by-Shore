import Image from "next/image";
import { GlassWater, SoapDispenserDroplet, SquareParking, Wifi } from "@/components/icons";
import { photos } from "@/config/gallery";

const items = [
  { icon: Wifi, title: "Wi-Fi", text: "Stay connected throughout your stay, whether you are planning the day or catching up on work." },
  { icon: SquareParking, title: "Parking", text: "Room for your vehicle on the property, so you can arrive and settle in without a search." },
  { icon: GlassWater, title: "Drinking water", text: "A bottle of drinking water is provided, ready for you when you arrive." },
  { icon: SoapDispenserDroplet, title: "Soap", text: "Soap is provided in the bathroom, so you can travel light." },
];

export default function Amenities() {
  return (
    <section id="amenities" className="on-dark section bg-pine text-cream">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="reveal relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="arch relative aspect-[4/5]">
            <Image src={photos.corridor.src} alt={photos.corridor.alt} fill sizes="(min-width:1024px) 40vw, 90vw" quality={75}
              placeholder="blur" blurDataURL={photos.corridor.blur} className="object-cover" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">Amenities</p>
          <h2 className="h2">The little things, <em>taken care of.</em></h2>
          <p className="mt-5 max-w-xl text-cream/75">A comfortable stay is mostly small details. Here is what is waiting for you.</p>

          <ul className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {items.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="reveal group flex items-start gap-5 py-6 sm:gap-7" style={{ animationDelay: `${i * 60}ms` }}>
                <span className="w-8 shrink-0 pt-1 font-display text-lg text-marigold/80">{String(i + 1).padStart(2, "0")}</span>
                <div className="grow">
                  <h3 className="font-display text-2xl font-medium text-cream">{title}</h3>
                  <p className="mt-1.5 max-w-lg text-[0.95rem] leading-relaxed text-cream/70">{text}</p>
                </div>
                <Icon size={38} className="shrink-0 text-marigold transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
