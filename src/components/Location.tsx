import { ExternalLink, MapPin } from "@/components/icons";
import { site, isTodo } from "@/config/site";
import Val from "./Todo";

export default function Location() {
  const a = site.address;
  const hasMap = !isTodo(site.mapsEmbedSrc);
  return (
    <section id="location" className="section bg-sand">
      <div className="wrap grid items-stretch gap-8 lg:grid-cols-12">
        <div className="reveal lg:col-span-5">
          <p className="eyebrow">Find us</p>
          <h2 className="h2">Where to <em>find us.</em></h2>

          <address className="card mt-8 flex gap-4 p-6 not-italic">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-pine/30 text-pine"><MapPin size={22} aria-hidden="true" /></span>
            <div className="text-[1.02rem] leading-relaxed">
              <p className="font-display text-xl text-pine">{site.name}</p>
              <p className="mt-1 text-muted">
                {a.line1},<br />
                {a.locality}, {a.district}<br />
                {a.state}{a.pin && !isTodo(a.pin) ? ` – ${a.pin}` : ""}
              </p>
            </div>
          </address>

          <div className="mt-6 flex flex-wrap gap-3">
            {isTodo(site.mapsLink) ? (
              <span className="btn btn-outline pointer-events-none opacity-60" aria-disabled="true">
                <ExternalLink size={18} aria-hidden="true" /> <Val v="TODO: Maps link" />
              </span>
            ) : (
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <ExternalLink size={18} aria-hidden="true" /> Open in Google Maps
              </a>
            )}
          </div>
        </div>

        <div className="reveal card relative min-h-[22rem] overflow-hidden p-2 lg:col-span-7 lg:min-h-[28rem]" style={{ animationDelay: "80ms" }}>
          {hasMap ? (
            <iframe
              title={`Map showing the location of ${site.name}`}
              src={site.mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[22rem] w-full rounded-[1.25rem] border-0"
              allowFullScreen
            />
          ) : (
            <div className="grid h-full min-h-[22rem] place-items-center rounded-[1.25rem] bg-[radial-gradient(circle_at_30%_20%,#fff,transparent_55%),repeating-linear-gradient(45deg,#efe4d0_0_14px,#f6eddc_14px_28px)] p-6 text-center">
              <div>
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-pine/30 text-pine"><MapPin size={28} aria-hidden="true" /></span>
                <p className="mt-5 font-display text-2xl text-pine">Map goes here</p>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted">
                  Add the Google Maps embed link in <code className="rounded bg-white px-1.5 py-0.5 text-xs">src/config/site.ts</code> and the live map will appear.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
