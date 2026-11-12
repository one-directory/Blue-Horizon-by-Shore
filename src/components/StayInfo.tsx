import { ArrowRight, BedDouble, MapPin, CircleCheck, LogIn, LogOut, WhatsApp, CalendarCheck, KeyRound } from "@/components/icons";
import { site, addressLine } from "@/config/site";

const steps = [
  { icon: WhatsApp, t: "Send an enquiry", d: "Use the form below or message us on WhatsApp with your dates." },
  { icon: CalendarCheck, t: "Get your dates confirmed", d: "We'll reply to confirm room availability for your stay." },
  { icon: KeyRound, t: "Arrive and settle in", d: `Check in from ${site.room.checkIn} and make yourself at home.` },
];

export default function StayInfo() {
  return (
    <section id="stay-info" className="section">
      <div className="wrap">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Plan your stay</p>
          <h2 className="h2">Check-in, check-out and <em>house info.</em></h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* times */}
          <div className="reveal card relative overflow-hidden bg-pine p-8 text-cream lg:col-span-5 lg:p-10">
            <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <div>
                <LogIn size={22} className="text-marigold" aria-hidden="true" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-cream/75">Check-in</p>
                <p className="font-display text-3xl md:text-4xl">{site.room.checkIn}</p>
              </div>
              <ArrowRight className="text-marigold" aria-hidden="true" />
              <div>
                <LogOut size={22} className="text-marigold" aria-hidden="true" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-cream/75">Check-out</p>
                <p className="font-display text-3xl md:text-4xl">{site.room.checkOut}</p>
              </div>
            </div>
            <p className="relative mt-8 border-t border-white/15 pt-6 text-[0.95rem] text-cream/80">
              Please plan to check out by {site.room.checkOut}.
            </p>
          </div>

          {/* facts */}
          <div className="reveal card p-8 lg:col-span-7 lg:p-10" style={{ animationDelay: "80ms" }}>
            <h3 className="font-display text-2xl text-pine">At a glance</h3>
            <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {[
                [BedDouble, "Room type", site.room.type],
                [MapPin, "Address", addressLine],
              ].map(([Icon, k, v]) => {
                const I = Icon as typeof BedDouble;
                return (
                  <div key={k as string} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-pine/25 text-pine"><I size={20} aria-hidden="true" /></span>
                    <div><p className="text-sm text-muted">{k as string}</p><p className="font-semibold text-ink">{v as string}</p></div>
                  </div>
                );
              })}
            </div>
            <p className="mt-7 text-sm font-semibold text-pine">Included with your stay</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {site.amenities.map((a) => (
                <li key={a} className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3.5 py-1.5 text-sm text-ink">
                  <CircleCheck size={15} className="text-pine" aria-hidden="true" />{a}
                </li>
              ))}
            </ul>

            {site.houseRules.length > 0 && (
              <>
                <p className="mt-7 text-sm font-semibold text-pine">House rules</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted marker:text-terracotta">
                  {site.houseRules.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* how booking works */}
        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, t, d }, i) => (
            <li key={t} className="reveal flex gap-4 rounded-[1.5rem] border border-line bg-white/60 p-6" style={{ animationDelay: `${i * 70}ms` }}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-terracotta-deep/50 font-display text-xl text-terracotta-deep">{i + 1}</span>
              <div>
                <h3 className="flex items-center gap-2 font-display text-xl text-pine"><Icon size={18} className="text-terracotta-deep" aria-hidden="true" />{t}</h3>
                <p className="mt-1 text-[0.95rem] text-muted">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
