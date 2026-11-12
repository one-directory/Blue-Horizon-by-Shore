import Image from "next/image";
import { ArrowRight } from "@/components/icons";

const cards = [
  { href: "/around-us", title: "Around Us", text: "Malpe Beach, St. Mary's Island, the Kaup lighthouse, temples and backwaters, all a short drive away.",
    img: "/around%20us%20main.webp", alt: "The Malpe sea walk seen from above" },
  { href: "/culture", title: "Culture", text: "Yakshagana, Bhoota Kola, Kambala and Naga Aradhane: the living traditions of Tulu Nadu.",
    img: "/culture/culture%20hero.webp", alt: "A Yakshagana performer in full costume" },
  { href: "/cuisine", title: "Udupi Cuisine", text: "Crisp dosas, coastal seafood and tea-time snacks from the home of Udupi food.",
    img: "/food/food%20hero.webp", alt: "A traditional Udupi meal served on a banana leaf" },
];

/** A small taste of the Experience pages. Everything else lives on its own page. */
export default function ExperienceTeaser() {
  return (
    <section id="experience" className="section bg-sand">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Experience</p>
            <h2 className="h2">Beaches, traditions and <em>great food.</em></h2>
          </div>
          <a href="/around-us" className="btn btn-outline">Explore it all <ArrowRight size={18} aria-hidden="true" /></a>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <li key={c.href} className="reveal flex" style={{ animationDelay: `${i * 70}ms` }}>
              <a href={c.href} className="group card lift flex w-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={c.img} alt={c.alt} fill sizes="(min-width:768px) 33vw, 100vw" quality={60} loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex grow flex-col p-6">
                  <h3 className="font-display text-2xl font-medium text-pine">{c.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted">{c.text}</p>
                  <span className="mt-auto inline-flex pt-4 items-center gap-1.5 text-sm font-semibold text-terracotta-deep">
                    Discover <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
