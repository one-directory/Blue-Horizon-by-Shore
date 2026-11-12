import { WhatsApp } from "@/components/icons";
import { whatsappHref, defaultEnquiry } from "@/config/site";

export default function CtaBand() {
  return (
    <section className="on-dark bg-pine-deep py-20 text-center text-cream">
      <div className="wrap">
        <h2 className="h2 mx-auto max-w-2xl">Ready for your stay <em>by the coast?</em></h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/80">Tell us your dates and we will confirm availability.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={whatsappHref(defaultEnquiry)} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
            <WhatsApp size={20} aria-hidden="true" /> Book on WhatsApp
          </a>
          <a href="/contact" className="btn btn-ghost">Send an enquiry</a>
        </div>
      </div>
    </section>
  );
}
