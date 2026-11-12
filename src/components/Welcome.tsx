import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import { photos } from "@/config/gallery";
import { site } from "@/config/site";

/** Short intro on the home page. The full story lives on /about. */
export default function Welcome() {
  return (
    <section id="welcome" className="section overflow-hidden">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="reveal relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="arch relative aspect-[4/5] shadow-[var(--shadow-lift)]">
            <Image src={photos.side.src} alt={photos.side.alt} fill sizes="(min-width:1024px) 40vw, 90vw" quality={75}
              placeholder="blur" blurDataURL={photos.side.blur} className="object-cover" />
          </div>
          <div className="card absolute -bottom-8 -right-2 w-44 overflow-hidden p-1.5 md:-right-8 md:w-56">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
              <Image src={photos.teak.src} alt={photos.teak.alt} fill sizes="224px" quality={60} loading="lazy" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">Welcome</p>
          <h2 className="h2">A small, bright house with a <em>big welcome.</em></h2>
          <p className="mt-6 max-w-2xl text-[1.0625rem] text-muted">
            {site.name} is a bright blue guesthouse in Kola, Kodavoor, near Malpe, with {site.room.count} comfortable double
            bedrooms, made for guests who would rather feel at home than check into a hotel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/about" className="btn btn-accent">About us <ArrowRight size={18} aria-hidden="true" /></a>
            <a href="/rooms" className="btn btn-outline">See the rooms</a>
          </div>
        </div>
      </div>
    </section>
  );
}
