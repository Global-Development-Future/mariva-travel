import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  noIndex?: boolean;
};

const robotsDirectives = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Mariva Travel | Transport persoane și colete România - Europa",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "transport persoane România Europa",
    "transport colete internațional",
    "microbuz România Germania",
    "curse România Belgia",
    "transport la adresă",
    "transport WhatsApp rezervare",
    "Mariva Travel",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "ro-RO": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: "Mariva Travel | Transport persoane și colete România - Europa",
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariva Travel | Transport persoane și colete România - Europa",
    description: siteConfig.description,
  },
  robots: robotsDirectives,
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: CreatePageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: robotsDirectives.googleBot },
  };
}
