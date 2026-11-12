/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH for everything about the homestay.
 *  Anything marked TODO is a placeholder. Fill it in here and the whole site
 *  (header, contact, WhatsApp links, map, SEO, schema.org) updates itself.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Strings starting with this prefix are treated as "not filled in yet". */
export const TODO = "TODO:";
export const isTodo = (v?: string | null): boolean => !v || v.startsWith(TODO);

export const site = {
  // ── Confirmed details ────────────────────────────────────────────────────
  name: "Blue Horizon by Shore",
  shortName: "Blue Horizon",
  tagline: "A bright blue guesthouse near Malpe, Udupi",
  room: {
    type: "Double bedroom",
    count: 4,
    checkIn: "11:00 AM",
    checkOut: "10:00 AM",
    /** 24h versions for schema.org */
    checkIn24: "11:00",
    checkOut24: "10:00",
  },
  amenities: ["Soap", "Drinking water bottle", "Wi-Fi", "Parking"],

  // ── TODO: owner to provide ───────────────────────────────────────────────
  /** Production URL, no trailing slash. TODO: replace once the domain is known. */
  url: "https://TODO-your-domain.example",
  ownerName: "TODO: Owner name",
  /** Primary number, display format. */
  phoneDisplay: "+91 73491 30365",
  /** Digits only with country code. */
  phoneDigits: "917349130365",
  /** Digits only with country code. WhatsApp enquiries go to the primary number. */
  whatsappDigits: "917349130365",
  /** All contact numbers, shown on the Contact section. */
  phones: [
    { display: "+91 73491 30365", digits: "917349130365" },
    { display: "+91 90354 30365", digits: "919035430365" },
  ],
  email: "stay@shoreindia.com",
  address: {
    line1: "Kola, Kodavoor",
    locality: "Malpe",
    district: "Udupi",
    state: "Karnataka",
    pin: "",
    country: "IN",
  },
  /** TODO: paste the "Share → Copy link" URL from Google Maps. */
  mapsLink: "https://maps.app.goo.gl/TkFygsz9DSEv3JKU6",
  /** TODO: Google Maps → Share → Embed a map → copy the src="…" URL only. */
  mapsEmbedSrc: "https://www.google.com/maps?q=13.35661,74.700352&z=16&output=embed",
  /** TODO: decimal degrees, e.g. { lat: 13.3409, lng: 74.7421 }. Leave null until confirmed. */
  geo: { lat: 13.35661, lng: 74.700352 } as null | { lat: number; lng: number },
  social: {
    instagram: "TODO: https://instagram.com/xxxx",
    facebook: "TODO: https://facebook.com/xxxx",
  },
  /** TODO: add house rules (one per line). The "House rules" block stays hidden while empty. */
  houseRules: [] as string[],

};

// ── Derived helpers (don't edit) ────────────────────────────────────────────
/** One-line address for display. */
export const addressLine = [site.address.line1, site.address.locality, site.address.district, site.address.state]
  .filter((p) => !isTodo(p))
  .join(", ");

export function whatsappHref(message: string): string {
  const num = isTodo(site.whatsappDigits) ? "" : site.whatsappDigits;
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

export const defaultEnquiry = `Hello! I'd like to book a double bedroom at ${site.name}. Could you please share availability?`;

export type NavItem = { label: string; href: string; description?: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  {
    label: "Experience",
    href: "/around-us",
    children: [
      { label: "Around Us", href: "/around-us", description: "Beaches, heritage & nature" },
      { label: "Culture", href: "/culture", description: "Sacred rituals & traditional arts" },
      { label: "Udupi Cuisine", href: "/cuisine", description: "Legendary coastal flavours" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** Flat list of every nav link (used by the footer). */
export const navFlat = nav.flatMap((n) => (n.children ? n.children : [n]));
