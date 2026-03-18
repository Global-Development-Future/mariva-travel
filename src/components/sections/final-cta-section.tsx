import { siteConfig } from "@/config/site";
import { CallDispatchButton } from "@/components/ui/call-dispatch-button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function FinalCtaSection() {
  return (
    <section className="pb-8 pt-12 sm:pb-12 sm:pt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up relative overflow-hidden rounded-3xl border border-[var(--ink-700)] bg-[var(--ink-950)] px-4 py-10 text-center sm:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_0%,rgba(10,132,255,0.25),transparent_38%),radial-gradient(circle_at_0%_100%,rgba(246,179,26,0.2),transparent_40%)]" />
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-400)]">
            Rezervare Imediată
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Sună acum sau trimite mesaj pentru ofertă
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Echipa de dispecerat îți oferă detalii despre rută, program și cost,
            iar rezervarea este confirmată rapid.
          </p>

          <div className="mx-auto mt-7 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
            <CallDispatchButton
              label="Sună Acum pentru Rezervare"
              size="hero"
              className="w-full"
            />
            <WhatsAppButton
              label="Scrie pe WhatsApp"
              size="hero"
              className="w-full"
            />
          </div>

          <p className="mt-5 text-sm font-bold text-slate-100">
            Telefon: {siteConfig.dispatchPhoneDisplay} · WhatsApp:{" "}
            {siteConfig.whatsappPhoneDisplay}
          </p>
        </div>
      </div>
    </section>
  );
}
