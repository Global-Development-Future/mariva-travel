import { siteConfig } from "@/config/site";
import { getWhatsAppBaseHref } from "@/lib/contact";

type JsonLdValue =
  | string
  | number
  | boolean
  | JsonLdObject
  | JsonLdValue[];

type JsonLdObject = {
  [key: string]: JsonLdValue;
};

export function getLocalBusinessJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.dispatchPhoneE164,
    sameAs: [getWhatsAppBaseHref()],
    availableLanguage: "ro",
    areaServed: siteConfig.areaServedCountries.map((country) => ({
      "@type": "Country",
      name: country,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: siteConfig.dispatchPhoneE164,
        availableLanguage: "ro",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.whatsappPhoneE164,
        availableLanguage: "ro",
      },
    ],
  };
}

export function getTransportServiceJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Transport persoane și colete România - Europa",
    serviceType: "Transport internațional persoane și colete",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.dispatchPhoneE164,
      sameAs: [getWhatsAppBaseHref()],
    },
    areaServed: siteConfig.areaServedCountries.map((country) => ({
      "@type": "Country",
      name: country,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rute Mariva Travel",
      itemListElement: siteConfig.destinationCountries.map((country, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: `Transport România ↔ ${country}`,
        },
      })),
    },
  };
}
