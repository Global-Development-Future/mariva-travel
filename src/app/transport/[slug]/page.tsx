import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { FaqSection } from "@/components/sections/faq-section";
import {
  getDestinationMarketBySlug,
  getRouteFaqItems,
  siteConfig,
} from "@/config/site";
import { createPageMetadata } from "@/lib/seo";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getOrganizationJsonLd,
  getRouteServiceJsonLd,
} from "@/lib/structured-data";

type RoutePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return siteConfig.destinationMarkets.map((market) => ({
    slug: market.slug,
  }));
}

export async function generateMetadata({
  params,
}: RoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const market = getDestinationMarketBySlug(slug);

  if (!market) {
    return createPageMetadata({
      title: "Ruta indisponibila",
      description: siteConfig.description,
      path: "/transport/",
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `Transport persoane si colete Romania - ${market.country}`,
    description: `${siteConfig.name} ofera transport persoane si colete door-to-door pe ruta Romania - ${market.country}, cu plecari zilnice, rezervari rapide si preluare de la adresa pentru orase precum ${market.popularCities.join(", ")}.`,
    path: `/transport/${market.slug}/`,
    keywords: [
      `transport persoane Romania ${market.country}`,
      `transport colete Romania ${market.country}`,
      `${market.country} Romania transport door to door`,
      `curse Romania ${market.country}`,
    ],
  });
}

export default async function TransportRoutePage({ params }: RoutePageProps) {
  const { slug } = await params;
  const market = getDestinationMarketBySlug(slug);

  if (!market) {
    notFound();
  }

  const faqItems = getRouteFaqItems(market.country);
  const organizationJsonLd = getOrganizationJsonLd();
  const routeServiceJsonLd = getRouteServiceJsonLd(market);
  const faqJsonLd = getFaqJsonLd(faqItems);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Acasa", path: "/" },
    { name: "Transport", path: "/transport/" },
    { name: market.country, path: `/transport/${market.slug}/` },
  ]);

  return (
    <>
      <SiteHeader currentPageLabel={`Ruta ${market.country}`} />

      <main className="pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
        <section className="bg-foreground py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              <Link href="/" className="transition-colors hover:text-accent">
                Acasa
              </Link>
              {" / "}
              <Link href="/transport/" className="transition-colors hover:text-accent">
                Transport
              </Link>
              {" / "}
              <span className="text-accent">{market.country}</span>
            </nav>

            <h1
              className="mt-6 max-w-4xl text-5xl font-light leading-tight tracking-tight lg:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Transport persoane si colete Romania - {market.country}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
              Mariva Travel opereaza transport international door-to-door pe
              ruta Romania - {market.country}, cu preluare de la adresa,
              rezervari rapide si suport direct pentru pasageri, bagaje si
              colete. Orase cautate frecvent pe aceasta ruta includ{" "}
              {market.popularCities.join(", ")}.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.dispatchPhoneE164}`}
                className="inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-white"
              >
                Suna pentru Oferta
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappPhoneE164.replace("+", "")}?text=${encodeURIComponent(`Buna ziua! Doresc o oferta pentru transport persoane sau colete pe ruta Romania - ${market.country}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Scrie pe WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <article className="card-premium p-6 lg:col-span-2">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Ce include ruta
                </span>
                <h2
                  className="mt-4 text-3xl font-light tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Serviciu gandit pentru drum lung, fara complicatii
                </h2>
                <p className="mt-6 max-w-3xl leading-7 text-muted">
                  Daca ai nevoie de transport persoane Romania - {market.country}
                  , serviciul Mariva Travel este orientat pe confort, traseu
                  clar si comunicare rapida. Poti calatori fara stresul
                  schimbarii mijloacelor de transport si fara drumuri
                  suplimentare pentru preluarea bagajelor.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {siteConfig.serviceBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 border border-border bg-background p-4"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="leading-7 text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </article>

              <aside className="border border-border bg-card p-6">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Orase populare
                </span>
                <h2 className="mt-4 text-2xl font-medium text-foreground">
                  Cereri frecvente pentru {market.country}
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {market.popularCities.map((city) => (
                    <li
                      key={city}
                      className="flex items-center justify-between border border-border bg-background px-4 py-3 text-sm font-medium text-foreground"
                    >
                      <span>{city}</span>
                      <span className="text-xs uppercase tracking-[0.16em] text-muted">
                        door-to-door
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-6 text-muted">
                  Pentru o oferta exacta, trimite ruta completa, adresa de
                  preluare, destinatia si data aproximativa a plecarii.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-background pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <article className="card-premium p-6">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Pasageri
                </span>
                <h2 className="mt-4 text-2xl font-medium text-foreground">
                  Transport persoane Romania - {market.country}
                </h2>
                <p className="mt-4 leading-7 text-muted">
                  Solutie potrivita pentru vacante, vizite la familie, plecari
                  la munca, reveniri in tara sau deplasari planificate din timp.
                </p>
              </article>

              <article className="card-premium p-6">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Colete
                </span>
                <h2 className="mt-4 text-2xl font-medium text-foreground">
                  Colete, bagaje si pachete
                </h2>
                <p className="mt-4 leading-7 text-muted">
                  Pe aceeasi retea internationala poti trimite colete si bagaje
                  catre familie sau parteneri din {market.country}, in limita
                  spatiului disponibil pe cursa.
                </p>
              </article>

              <article className="card-premium p-6">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Rezervare
                </span>
                <h2 className="mt-4 text-2xl font-medium text-foreground">
                  Telefon si WhatsApp
                </h2>
                <p className="mt-4 leading-7 text-muted">
                  Confirmarea se face rapid direct din dispecerat, fara cont,
                  fara formular lung si fara pasi inutili.
                </p>
              </article>
            </div>
          </div>
        </section>

        <FaqSection
          title={`Intrebari frecvente pentru ruta Romania - ${market.country}`}
          intro={`Mai jos gasesti raspunsuri utile pentru clientii care cauta transport persoane sau colete pe ruta Romania - ${market.country}.`}
          items={faqItems}
        />

        <section className="bg-foreground py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Rezervare rapida
                </span>
                <h2
                  className="mt-4 text-4xl font-light tracking-tight lg:text-5xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Cere acum oferta pentru Romania - {market.country}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
                  Spune-ne data, ruta, localitatea de plecare si daca transporti
                  persoane sau colete. Revenim rapid cu detalii despre cursa.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${siteConfig.dispatchPhoneE164}`}
                  className="inline-flex h-12 items-center justify-center bg-accent px-6 text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-white"
                >
                  {siteConfig.dispatchPhoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsappPhoneE164.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center border border-white/20 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  {siteConfig.whatsappPhoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
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
          __html: JSON.stringify(routeServiceJsonLd),
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
