"use client";

import { useEffect, useState } from "react";
import { WhatsApp } from "@/components/icons";
import { site, whatsappHref, defaultEnquiry } from "@/config/site";

/** Floating WhatsApp button (always) + sticky Book Now bar (phones, after the hero). */
export default function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.6);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <a
        href={whatsappHref(defaultEnquiry)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`no-print fixed right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgb(0_0_0/0.45)] transition-all duration-300 hover:scale-105 md:bottom-6 md:right-6 ${
          show ? "bottom-[5.25rem]" : "bottom-5"
        }`}
      >
        <WhatsApp size={28} aria-hidden="true" />
      </a>

      <div
        className={`no-print fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_-16px_rgb(88_58_30/0.35)] backdrop-blur-md transition-transform duration-300 md:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!show}
      >
        <div className="flex items-center justify-between gap-4">
          <p className="font-display text-xl font-medium leading-tight text-pine">{site.name}</p>
          <a href="/contact" tabIndex={show ? 0 : -1} className="btn btn-accent btn-sm">Book Now</a>
        </div>
      </div>
    </>
  );
}
