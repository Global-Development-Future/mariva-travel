import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CallDispatchButton } from "@/components/ui/call-dispatch-button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const promiseItems = [
  "Preluare pasageri de la adresă",
  "Transport colete pe aceleași rute",
  "Coordonare directă cu dispeceratul",
] as const;

const stats = [
  { label: "Țări active", value: `${siteConfig.areaServedCountries.length}` },
  { label: "Disponibilitate", value: "24/7" },
  { label: "Confirmare", value: "Sub 10 min" },
] as const;

export function HeroSection() {
  return (
    <section className="pb-12 pt-5 sm:pb-14 sm:pt-7">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="fade-in-up flex items-center justify-between rounded-2xl border border-[var(--line-300)] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(18,31,51,0.06)]">
          <div>
            <p className="text-sm font-black tracking-tight text-[var(--ink-950)]">
              Mariva Travel
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted-500)]">
              Transport Internațional Persoane și Colete
            </p>
          </div>
          <p className="text-right text-xs font-semibold leading-tight text-[var(--ink-900)]">
            {siteConfig.dispatchPhoneDisplay}
            <br />
            {siteConfig.whatsappPhoneDisplay}
          </p>
        </header>

        <div className="mt-7 grid items-start gap-6 lg:grid-cols-[1fr_0.92fr] lg:gap-8">
          <div className="fade-in-up">
            <p className="inline-flex rounded-full border border-[var(--line-300)] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--brand-600)]">
              Platformă Nouă · Focus pe Rezervări
            </p>
            <h1 className="mt-4 text-4xl font-black leading-[1.06] tracking-tight text-[var(--ink-950)] sm:text-5xl lg:text-6xl">
              Transport Internațional de Persoane și Colete, Simplu și Rapid
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-700)] sm:text-lg">
              Rezervi în câteva minute, primești confirmare clară și călătorești
              cu flotă modernă pe rute România ↔ Europa.
            </p>

            <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
              <CallDispatchButton
                label="Sună Acum pentru Rezervare"
                size="hero"
                className="w-full"
              />
              <WhatsAppButton
                label="Scrie-ne pe WhatsApp"
                size="hero"
                className="w-full"
              />
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {promiseItems.map((item) => (
                <li
                  key={item}
                  className="card-soft px-4 py-3 text-sm font-semibold text-[var(--ink-900)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-in-up grid gap-4">
            <article className="card-soft effect-rise overflow-hidden">
              <div className="relative aspect-[5/4]">
                <Image
                  src={siteConfig.fleetGallery[0].src}
                  alt={siteConfig.fleetGallery[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,18,32,0.46),rgba(10,18,32,0.06))]" />
                <p className="absolute bottom-3 left-3 rounded-full bg-[rgba(255,255,255,0.94)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--ink-950)]">
                  Microbuse Premium
                </p>
              </div>
            </article>

            <article className="card-soft overflow-hidden p-3">
              <video
                className="aspect-video w-full rounded-xl object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={siteConfig.serviceVideos[0].src} type="video/mp4" />
              </video>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[var(--line-300)] bg-[var(--paper-200)] px-2 py-2 text-center"
                  >
                    <p className="text-sm font-black text-[var(--ink-950)]">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--muted-500)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
