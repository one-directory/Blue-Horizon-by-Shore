"use client";

import { useState } from "react";
import { Mail, WhatsApp, Phone, Send } from "@/components/icons";
import { site, isTodo, whatsappHref } from "@/config/site";
import Val from "./Todo";

type Errors = Partial<Record<"name" | "phone" | "checkIn" | "checkOut", string>>;
const today = () => new Date().toISOString().slice(0, 10);

function fmtDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const err: Errors = {};
    if (v("name").length < 2) err.name = "Please enter your name.";
    if (!/^[+\d][\d\s-]{6,}$/.test(v("phone"))) err.phone = "Please enter a valid phone number.";
    if (!v("checkIn")) err.checkIn = "Choose a check-in date.";
    else if (v("checkIn") < today()) err.checkIn = "Check-in can't be in the past.";
    if (!v("checkOut")) err.checkOut = "Choose a check-out date.";
    else if (v("checkIn") && v("checkOut") <= v("checkIn")) err.checkOut = "Check-out must be after check-in.";
    setErrors(err);
    if (Object.keys(err).length) return;

    const lines = [
      `Hello! I'd like to enquire about a stay at ${site.name}.`,
      "",
      `Name: ${v("name")}`,
      `Phone: ${v("phone")}`,
      `Check-in: ${fmtDate(v("checkIn"))} (from ${site.room.checkIn})`,
      `Check-out: ${fmtDate(v("checkOut"))} (by ${site.room.checkOut})`,
      `Rooms: ${v("rooms")} double bedroom(s)`,
      `Guests: ${v("guests")}`,
    ];
    if (v("message")) lines.push("", v("message"));
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const cards = [
    ...site.phones.map((p, i) => ({ icon: Phone, label: i === 0 ? "Call us" : "Call us (alternate)", value: p.display, href: `tel:+${p.digits}` as string | null })),
    { icon: WhatsApp, label: "WhatsApp", value: site.phones[0].display, href: isTodo(site.whatsappDigits) ? null : whatsappHref("Hello!") },
    { icon: Mail, label: "Email", value: site.email, href: isTodo(site.email) ? null : `mailto:${site.email}` },
  ];

  return (
    <section id="contact" className="on-dark section overflow-hidden bg-pine text-cream">
      <div className="wrap relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-5">
          <p className="eyebrow">Book your stay</p>
          <h2 className="h2">Let&rsquo;s get you a <em>room.</em></h2>
          <p className="lead mt-5">
            Send us your dates and we&rsquo;ll confirm availability. Your enquiry opens in WhatsApp, ready to send.
          </p>

          <ul className="mt-10 grid gap-3">
            {cards.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-marigold/40 text-marigold"><Icon size={22} aria-hidden="true" /></span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-cream/75">{label}</span>
                    <span className="block break-all text-lg text-cream"><Val v={value} /></span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.12]">{inner}</a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="reveal card p-6 text-ink md:p-9 lg:col-span-7" style={{ animationDelay: "80ms" }} aria-labelledby="enq-title">
          <h3 id="enq-title" className="font-display text-3xl text-pine">Booking enquiry</h3>
          <p className="mt-1 text-sm text-muted">{site.room.type}</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" autoComplete="name" className="input" placeholder="e.g. Ananya Rao" aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
              {errors.name && <p id="e-name" className="err">{errors.name}</p>}
            </div>
            <div className="field">
              <label htmlFor="phone">Phone / WhatsApp</label>
              <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className="input" placeholder="+91 …" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "e-phone" : undefined} />
              {errors.phone && <p id="e-phone" className="err">{errors.phone}</p>}
            </div>
            <div className="field">
              <label htmlFor="checkIn">Check-in</label>
              <input id="checkIn" name="checkIn" type="date" min={today()} className="input" aria-invalid={!!errors.checkIn} aria-describedby={errors.checkIn ? "e-in" : undefined} />
              {errors.checkIn && <p id="e-in" className="err">{errors.checkIn}</p>}
            </div>
            <div className="field">
              <label htmlFor="checkOut">Check-out</label>
              <input id="checkOut" name="checkOut" type="date" min={today()} className="input" aria-invalid={!!errors.checkOut} aria-describedby={errors.checkOut ? "e-out" : undefined} />
              {errors.checkOut && <p id="e-out" className="err">{errors.checkOut}</p>}
            </div>
            <div className="field">
              <label htmlFor="rooms">Rooms</label>
              <select id="rooms" name="rooms" className="input" defaultValue="1">
                {Array.from({ length: site.room.count }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? "room" : "rooms"}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="guests">Guests</label>
              <select id="guests" name="guests" className="input" defaultValue="2">
                {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
              </select>
            </div>
            <div className="field sm:col-span-2">
              <label htmlFor="message">Message <span className="font-normal text-muted">(optional)</span></label>
              <textarea id="message" name="message" rows={3} className="input resize-y" placeholder="Anything we should know?" />
            </div>
          </div>

          <button type="submit" className="btn btn-accent mt-7 w-full sm:w-auto">
            <Send size={19} aria-hidden="true" /> Send enquiry on WhatsApp
          </button>
          <p role="status" aria-live="polite" className="mt-4 text-sm text-pine">
            {sent && "WhatsApp should have opened with your enquiry. Just press send."}
          </p>
        </form>
      </div>
    </section>
  );
}
