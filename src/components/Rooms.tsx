import Image from "next/image";
import { LogIn, LogOut, Check, WhatsApp } from "@/components/icons";
import { photos } from "@/config/gallery";
import { site, whatsappHref, defaultEnquiry } from "@/config/site";

export default function Rooms() {
  const thumbs = [photos.crimson, photos.window];
  return (
    <section id="rooms" className="section bg-sand">
      <div className="wrap">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">The room</p>
          <h2 className="h2">One room type, <em>done well.</em></h2>
          <p className="lead mt-5">Every room is a double bedroom.</p>
        </div>

        <article className="card reveal mt-12 grid overflow-hidden lg:grid-cols-12">
          {/* photos */}
          <div className="grid gap-2 p-2 lg:col-span-7 lg:grid-cols-[1.6fr_1fr] lg:grid-rows-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] lg:row-span-2 lg:aspect-auto lg:min-h-[28rem]">
              <Image src={photos.teak.src} alt={photos.teak.alt} fill sizes="(min-width:1024px) 40vw, 100vw" quality={75}
                placeholder="blur" blurDataURL={photos.teak.blur} className="object-cover" />
            </div>
            {thumbs.map((p) => (
              <div key={p.id} className="relative hidden overflow-hidden rounded-[1.25rem] lg:block">
                <Image src={p.src} alt={p.alt} fill sizes="25vw" quality={60} loading="lazy" className="object-cover" />
              </div>
            ))}
          </div>

          {/* details */}
          <div className="flex flex-col p-7 md:p-10 lg:col-span-5 lg:py-12">
            <h3 className="font-display text-4xl font-medium text-pine md:text-[2.75rem]">{site.room.type}</h3>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-cream p-4">
                <LogIn size={18} className="text-pine" aria-hidden="true" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">Check-in</p>
                <p className="font-display text-xl text-pine">{site.room.checkIn}</p>
              </div>
              <div className="rounded-2xl bg-cream p-4">
                <LogOut size={18} className="text-pine" aria-hidden="true" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">Check-out</p>
                <p className="font-display text-xl text-pine">{site.room.checkOut}</p>
              </div>
            </div>

            <ul className="mt-7 grid gap-2.5 text-[0.98rem]">
              {site.amenities.map((a) => (
                <li key={a} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center text-terracotta-deep"><Check size={18} aria-hidden="true" /></span>
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3 lg:mt-auto lg:pt-9">
              <a href="/contact" className="btn btn-accent grow sm:grow-0">Check availability</a>
              <a href={whatsappHref(defaultEnquiry)} target="_blank" rel="noopener noreferrer" className="btn btn-outline grow sm:grow-0">
                <WhatsApp size={19} aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
