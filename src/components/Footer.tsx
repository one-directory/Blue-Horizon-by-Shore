import Logo from "./Logo";
import { navFlat, site, addressLine } from "@/config/site";
import Val from "./Todo";

export default function Footer() {
  return (
    <footer className="on-dark bg-pine-deep pb-28 pt-16 text-cream/80 md:pb-12">
      <div className="wrap grid gap-10 md:grid-cols-3">
        <div>
          <Logo tone="light" size="lg" />
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-marigold">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[0.95rem]">
            {navFlat.map((n) => <li key={n.href}><a className="hover:text-white" href={n.href}>{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-marigold">Contact</p>
          <ul className="mt-4 space-y-2 text-[0.95rem]">
            {site.phones.map((p) => <li key={p.digits}><a className="hover:text-white" href={`tel:+${p.digits}`}>{p.display}</a></li>)}
            <li className="break-all"><Val v={site.email} /></li>
            <li>{addressLine}</li>
          </ul>
        </div>
      </div>
      <div className="wrap mt-12 border-t border-white/10 pt-6 text-sm text-cream/70">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
