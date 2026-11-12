"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "@/components/icons";
import { galleryOrder, type Photo } from "@/config/gallery";

// Each tile rises, un-blurs and wipes in, staggered by its position in the grid.
const tile: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.94, clipPath: "inset(14% 14% 14% 14% round 28px)", filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0% 0% 0% round 20px)", filter: "blur(0px)",
    transition: { duration: 0.8, delay: (i % 4) * 0.08 + Math.floor(i / 4) * 0.04, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

const slide: Variants = {
  enter: (d: number) => ({ opacity: 0, x: d * 80, scale: 0.97 }),
  center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.35, ease: [0.2, 0.7, 0.2, 1] } },
  exit: (d: number) => ({ opacity: 0, x: d * -80, scale: 0.97, transition: { duration: 0.2 } }),
};

type Item = { photo: Photo; span: "tall" | "wide" | "std" };

export default function Gallery({
  items = galleryOrder,
  id = "gallery",
  eyebrow = "Gallery",
  title = <>Take a look <em>around.</em></>,
  lead = "Real photos of the house, the rooms and the bathrooms. Tap any photo to enlarge.",
}: { items?: Item[]; id?: string; eyebrow?: string; title?: React.ReactNode; lead?: string }) {
  const [active, setActive] = useState<number | null>(null);
  const [dir, setDir] = useState(1);
  const opener = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const n = items.length;

  const close = useCallback(() => { setActive(null); opener.current?.focus(); }, []);
  const step = useCallback((d: number) => { setDir(d); setActive((i) => (i === null ? i : (i + d + n) % n)); }, [n]);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab") { e.preventDefault(); closeBtn.current?.focus(); } // minimal focus trap
    };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [active, close, step]);

  const cur = active === null ? null : items[active].photo;

  return (
    <section id={id} className="section relative overflow-hidden">

      <div className="wrap">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2">{title}</h2>
          <p className="lead mt-5">{lead}</p>
        </div>

        <div className="bento mt-12">
          {items.map(({ photo }, i) => (
            <motion.button
              key={photo.id}
              type="button"
              className="group"
              style={{ aspectRatio: `${photo.w} / ${photo.h}` }}
              aria-label={`Open photo: ${photo.alt}`}
              custom={i}
              variants={tile}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => { opener.current = e.currentTarget; setDir(1); setActive(i); }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width:1100px) 25vw, (min-width:768px) 33vw, 50vw"
                quality={60}
                loading="lazy"
                placeholder="blur"
                blurDataURL={photo.blur}
                className="object-cover"
              />
              {/* caption + glare that slide in on hover */}
              <span aria-hidden="true" className="gal-glare" />
              <span aria-hidden="true" className="gal-caption">
                <span>{photo.label}</span>
                <Expand size={16} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {cur && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-[100] flex flex-col bg-[#14100c]/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <div className="flex items-center justify-between px-5 py-4 text-cream" onClick={(e) => e.stopPropagation()}>
              <p className="text-sm tabular-nums text-cream/80" aria-live="polite">{active! + 1} / {n}</p>
              <button ref={closeBtn} type="button" onClick={close} aria-label="Close photo viewer" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                <X size={22} />
              </button>
            </div>

            <div className="relative mx-auto w-full max-w-6xl flex-1 overflow-hidden px-4 md:px-20">
              <AnimatePresence initial={false} custom={dir} mode="popLayout">
                <motion.div key={cur.id} custom={dir} variants={slide} initial="enter" animate="center" exit="exit" className="absolute inset-0 mx-4 md:mx-20">
                  <Image src={cur.src} alt={cur.alt} fill sizes="100vw" quality={75} priority className="object-contain" onClick={(e) => e.stopPropagation()} />
                </motion.div>
              </AnimatePresence>
              <button type="button" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-cream hover:bg-white/25 md:grid">
                <ChevronLeft size={26} />
              </button>
              <button type="button" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }}
                className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-cream hover:bg-white/25 md:grid">
                <ChevronRight size={26} />
              </button>
            </div>

            <p className="px-6 py-5 text-center text-sm text-cream/85" onClick={(e) => e.stopPropagation()}>{cur.alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
