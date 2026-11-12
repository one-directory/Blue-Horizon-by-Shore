import Image from "next/image";
import { photos } from "@/config/gallery";
import { site, isTodo } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="section overflow-hidden">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        {/* imagery */}
        <div className="reveal relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="arch relative aspect-[4/5] shadow-[var(--shadow-lift)]">
            <Image
              src={photos.side.src}
              alt={photos.side.alt}
              fill
              sizes="(min-width:1024px) 40vw, 90vw"
              quality={75}
              placeholder="blur"
              blurDataURL={photos.side.blur}
              className="object-cover"
            />
          </div>
          <div className="card absolute -bottom-8 -right-2 w-44 overflow-hidden p-1.5 md:-right-8 md:w-56">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
              <Image src={photos.teak.src} alt={photos.teak.alt} fill sizes="224px" quality={60} loading="lazy" className="object-cover" />
            </div>
          </div>
        </div>

        {/* copy */}
        <div className="lg:col-span-7">
          <p className="eyebrow">Our story</p>
          <h2 className="h2">A small, bright house with a <em>big welcome.</em></h2>
          <div className="mt-8 space-y-5 text-[1.0625rem] text-muted lg:max-w-2xl">
            <p>
              {site.name} is a bright blue house with {site.room.count} comfortable double bedrooms, made for guests who
              would rather feel at home than check into a hotel.
            </p>
            <p>
              Each room is simple, tidy and easy to settle into. Soap and a drinking water bottle are there when you
              arrive, Wi-Fi keeps you connected, and there&rsquo;s parking on site.
            </p>
            {!isTodo(site.ownerName) && <p className="font-display text-xl italic text-pine">Hosted by {site.ownerName}</p>}
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-8">
            {[
              [String(site.room.count), "double rooms"],
              [site.room.checkOut, "check-out"],
              [site.room.checkIn, "check-in"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-pine md:text-4xl">{n}</dt>
                <dd className="mt-1 text-sm text-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
