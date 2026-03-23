import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: string[];
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
    default: "Transport persoane si colete Romania - Europa, door-to-door zilnic",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  category: "transport",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "transport persoane Romania Europa",
    "transport persoane international",
    "transport colete Romania Europa",
    "transport door to door Romania Europa",
    "transport persoane Germania Romania",
    "transport persoane Belgia Romania",
    "transport persoane Franta Romania",
    "curse zilnice Romania Europa",
    "transport la adresa Europa",
    "rezervari transport WhatsApp",
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
    title: "Transport persoane si colete Romania - Europa, door-to-door zilnic",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.socialImage,
        alt: "Mariva Travel - transport persoane si colete door-to-door Romania Europa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transport persoane si colete Romania - Europa, door-to-door zilnic",
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  robots: robotsDirectives,
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: CreatePageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    keywords,
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
      images: [
        {
          url: siteConfig.socialImage,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.socialImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: robotsDirectives.googleBot },
  };
}
