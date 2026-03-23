import type { Metadata } from "next";
import Link from "next/link";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { FaqSection } from "@/components/sections/faq-section";
import { destinationMarkets, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getOrganizationJsonLd,
  getTransportServiceJsonLd,
} from "@/lib/structured-data";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: "Rute transport persoane si colete Romania - Europa",
    description:
      "Descopera toate rutele Mariva Travel pentru transport persoane si colete door-to-door intre Romania si Belgia, Germania, Franta, Danemarca, Italia, Luxemburg, Elvetia, Olanda, Austria si Ungaria.",
    path: "/transport/",
    keywords: [
      "rute transport persoane Romania Europa",
      "transport colete Romania Europa",
      "transport persoane Belgia Germania Franta",
      "transport international door to door",
    ],
  });
}

export default function TransportHubPage() {
  const organizationJsonLd = getOrganizationJsonLd();
  const transportServiceJsonLd = getTransportServiceJsonLd();
  const faqJsonLd = getFaqJsonLd(siteConfig.faqItems);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Acasa", path: "/" },
    { name: "Transport", path: "/transport/" },
  ]);

  return (
    <>
      <SiteHeader currentPageLabel="Rute Internationale" />

      <main className="pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
        <section className="bg-foreground py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Rute Internationale
            </span>
            <h1
              className="mt-4 max-w-4xl text-5xl font-light leading-tight tracking-tight lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Transport persoane si colete Romania - Europa
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
              Pagina reuneste toate rutele Mariva Travel pentru transport
              persoane international si transport colete door-to-door, cu
              plecari zilnice, rezervari rapide si preluare de la adresa.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.dispatchPhoneE164}`}
                className="inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-white"
              >
                Suna Acum
              </a>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Contact Rapid
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {destinationMarkets.map((market) => (
                <article key={market.slug} className="card-premium p-6 hover-lift">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    Ruta dedicata
                  </span>
                  <h2 className="mt-4 text-2xl font-medium text-foreground">
                    Transport Romania - {market.country}
                  </h2>
                  <p className="mt-4 leading-7 text-muted">
                    Pagina dedicata pentru clienti care cauta transport persoane
                    si colete Romania - {market.country}, cu informatii despre
                    rezervare, transport door-to-door si orase populare precum{" "}
                    {market.popularCities.join(", ")}.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {market.popularCities.map((city) => (
                      <span
                        key={city}
                        className="inline-flex border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/transport/${market.slug}/`}
                    className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-accent"
                  >
                    <span>Vezi pagina rutei</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          title="Intrebari frecvente despre rutele internationale"
          intro="Daca vrei sa stii cum rezervi rapid, daca poti trimite colete sau cum functioneaza preluarea de la adresa, ai mai jos raspunsurile de baza."
          items={siteConfig.faqItems}
        />
      </main>

      <MobileCallBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(transportServiceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
    </>
  );
}
