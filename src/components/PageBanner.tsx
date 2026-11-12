import type { ReactNode } from "react";

/** Dark title band at the top of the About, Rooms and Contact pages (sits under the fixed header). */
export default function PageBanner({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-pine-deep pb-16 pt-36 text-cream md:pb-20 md:pt-44">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h1 mt-4 max-w-3xl">{title}</h1>
        {children && <p className="mt-5 max-w-2xl text-lg text-cream/85">{children}</p>}
      </div>
    </section>
  );
}
