import type { Metadata } from "next";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { FleetSection } from "@/components/sections/fleet-section";
import { HeroSection } from "@/components/sections/hero-section";
import { RoutesSection } from "@/components/sections/routes-section";
import { TrustSection } from "@/components/sections/trust-section";
import { createPageMetadata } from "@/lib/seo";
import {
  getLocalBusinessJsonLd,
  getTransportServiceJsonLd,
} from "@/lib/structured-data";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title:
      "Transport Persoane și Colete România - Europa | Mariva Travel Premium",
    description:
      "Platformă premium Mariva Travel pentru transport internațional persoane și colete, cu rezervări rapide telefonic sau pe WhatsApp.",
    path: "/",
  });
}

export default function HomePage() {
  const localBusinessJsonLd = getLocalBusinessJsonLd();
  const transportServiceJsonLd = getTransportServiceJsonLd();

  return (
    <>
      <main className="pb-[calc(7.4rem+env(safe-area-inset-bottom))] md:pb-0">
        <HeroSection />
        <RoutesSection />
        <FleetSection />
        <TrustSection />
        <FinalCtaSection />
      </main>

      <MobileCallBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(transportServiceJsonLd),
        }}
      />
    </>
  );
}
