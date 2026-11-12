"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "@/components/icons";
import Logo from "./Logo";
import { nav } from "@/config/site";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onDetail = pathname.startsWith("/around-us/");

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [open]);

  const dark = solid || open || onDetail; // dark text on cream
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        dark ? "bg-cream/95 shadow-[0_8px_30px_-18px_rgb(88_58_30/0.35)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between lg:h-20">
        <a href="/" onClick={() => setOpen(false)} >
          <Logo tone={dark ? "dark" : "light"} />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => {
            const link = `group relative inline-flex items-center gap-1 text-[0.95rem] font-medium transition-colors ${dark ? "text-ink hover:text-pine" : "text-white/95 hover:text-white"}`;
            if (!n.children) {
              return (
                <a key={n.label} href={n.href} className={link}>
                  {n.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-marigold transition-all duration-300 group-hover:w-full" />
                </a>
              );
            }
            return (
              <div key={n.label} className="group/dd relative">
                <a href={n.href} className={link} aria-haspopup="true">
                  {n.label} <ChevronDown size={15} aria-hidden="true" />
                </a>
                <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover/dd:visible group-hover/dd:opacity-100 group-focus-within/dd:visible group-focus-within/dd:opacity-100">
                  <ul className="overflow-hidden rounded-2xl border border-line bg-cream p-2 shadow-[var(--shadow-lift)]">
                    {n.children.map((c) => (
                      <li key={c.href}>
                        <a href={c.href} className="block rounded-xl px-4 py-3 hover:bg-sand">
                          <span className="block font-semibold text-pine">{c.label}</span>
                          {c.description && <span className="block text-sm text-muted">{c.description}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          <a href="/contact" className="btn btn-accent btn-sm">Book Now</a>
        </nav>

        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${dark ? "text-pine" : "text-white"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto bg-cream px-6 pb-10 pt-6 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.label} className="border-b border-line">
                {n.children ? (
                  <>
                    <p className="pt-4 font-display text-3xl text-pine">{n.label}</p>
                    <ul className="pb-3 pl-4">
                      {n.children.map((c) => (
                        <li key={c.href}>
                          <a href={c.href} onClick={() => setOpen(false)} className="block py-2.5 text-xl text-ink">{c.label}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={n.href} onClick={() => setOpen(false)} className="block py-4 font-display text-3xl text-pine">
                    {n.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a href="/contact" onClick={() => setOpen(false)} className="btn btn-accent mt-8 w-full">Book Now</a>
        </nav>
      )}
    </header>
  );
}
