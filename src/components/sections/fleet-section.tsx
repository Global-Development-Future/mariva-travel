import Image from "next/image";
import { siteConfig } from "@/config/site";

export function FleetSection() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-600)]">
              Flotă & Media
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[var(--ink-950)] sm:text-4xl">
              Microbuze moderne pentru transport internațional de persoane
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--ink-700)]">
            Galerie vizuală cu imagini și clipuri video care reflectă stilul
            premium, organizarea și siguranța serviciului nostru.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.fleetGallery.map((item, index) => (
              <article
                key={item.src}
                className={`fade-in-up card-soft effect-rise overflow-hidden ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes={
                      index === 0
                        ? "(max-width: 640px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, 33vw"
                    }
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,18,32,0.42),rgba(10,18,32,0.02))]" />
                  <p className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--ink-950)]">
                    {item.title}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-4">
            {siteConfig.serviceVideos.map((video) => (
              <article
                key={video.src}
                className="fade-in-up card-soft overflow-hidden p-3"
              >
                <video
                  className="aspect-video w-full rounded-xl object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <h3 className="mt-3 text-base font-black text-[var(--ink-950)]">
                  {video.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-700)]">
                  {video.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
