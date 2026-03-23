export const destinationMarkets = [
  {
    slug: "belgia",
    country: "Belgia",
    popularCities: ["Bruxelles", "Anvers", "Liege"],
  },
  {
    slug: "germania",
    country: "Germania",
    popularCities: ["Berlin", "Frankfurt", "Munchen"],
  },
  {
    slug: "franta",
    country: "Franta",
    popularCities: ["Paris", "Lyon", "Strasbourg"],
  },
  {
    slug: "danemarca",
    country: "Danemarca",
    popularCities: ["Copenhaga", "Aarhus", "Odense"],
  },
  {
    slug: "italia",
    country: "Italia",
    popularCities: ["Milano", "Bologna", "Roma"],
  },
  {
    slug: "luxemburg",
    country: "Luxemburg",
    popularCities: ["Luxemburg", "Esch-sur-Alzette", "Differdange"],
  },
  {
    slug: "elvetia",
    country: "Elvetia",
    popularCities: ["Zurich", "Basel", "Geneva"],
  },
  {
    slug: "olanda",
    country: "Olanda",
    popularCities: ["Amsterdam", "Rotterdam", "Eindhoven"],
  },
  {
    slug: "austria",
    country: "Austria",
    popularCities: ["Viena", "Linz", "Salzburg"],
  },
  {
    slug: "ungaria",
    country: "Ungaria",
    popularCities: ["Budapesta", "Gyor", "Debrecen"],
  },
] as const;

export const destinationCountries = destinationMarkets.map((market) => market.country);

export const areaServedCountries = ["Romania", ...destinationCountries];

export const serviceHighlights = [
  {
    title: "Transport persoane door-to-door",
    description:
      "Preluare din fata casei si lasare la adresa, fara schimbari de tren, autocar sau curse complicate.",
  },
  {
    title: "Transport colete Romania - Europa",
    description:
      "Preluam colete, bagaje si pachete pentru familie sau business, cu livrare rapida pe aceleasi rute internationale.",
  },
  {
    title: "Plecari zilnice si program flexibil",
    description:
      "Curse zilnice catre principalele destinatii din Europa, cu confirmare rapida si program adaptat nevoilor tale.",
  },
  {
    title: "Rezervari rapide pe telefon si WhatsApp",
    description:
      "Primesti raspuns rapid pentru rezervare, tarif si disponibilitate direct din dispecerat, fara formulare complicate.",
  },
] as const;

export const serviceBenefits = [
  "Preluare de la adresa in Romania",
  "Lasare la usa destinatiei",
  "Transport persoane si colete pe aceeasi retea",
  "Tarife corecte si transparente",
  "Bagaje incluse in limita spatiului disponibil",
  "Comunicare directa cu dispeceratul",
] as const;

export const faqItems = [
  {
    question: "Cum functioneaza transportul door-to-door?",
    answer:
      "Mariva Travel preia pasagerii din Romania direct de la adresa stabilita si ii lasa cat mai aproape de destinatia finala din tara europeana aleasa.",
  },
  {
    question: "Transportati si colete pe rutele internationale?",
    answer:
      "Da. Pe langa transport persoane, preluam si colete, bagaje sau pachete pentru familie, prieteni ori parteneri comerciali pe rutele Romania - Europa.",
  },
  {
    question: "In ce tari circulati?",
    answer:
      "Operam transport persoane si colete intre Romania si Belgia, Germania, Franta, Danemarca, Italia, Luxemburg, Elvetia, Olanda, Austria si Ungaria.",
  },
  {
    question: "Cum fac o rezervare rapida?",
    answer:
      "Ne poti suna direct sau ne poti scrie pe WhatsApp. Trimiti ruta, localitatea de plecare, destinatia si numarul de persoane sau detaliile coletului, iar noi revenim cu confirmare si tarif.",
  },
  {
    question: "Aveti plecari zilnice?",
    answer:
      "Da, comunicarea din pagina este orientata pe plecari zilnice si confirmari rapide, in functie de ruta si disponibilitatea din ziua solicitata.",
  },
  {
    question: "Ce avantaje am fata de alte variante de transport?",
    answer:
      "Scapi de conexiuni multiple, statii, bagaje greu de mutat si transferuri suplimentare. Ai un singur contact, o singura rezervare si transport direct pe ruta solicitata.",
  },
] as const;

export const fleetGallery = [
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=80",
    alt: "Microbuz modern pentru transport international de persoane",
    title: "Microbuze executive 8+1",
  },
  {
    src: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1800&q=80",
    alt: "Microbuz la incarcare pentru cursa Europa",
    title: "Spatiu dedicat bagaje si colete",
  },
  {
    src: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1800&q=80",
    alt: "Flota de transport persoane pe traseu european",
    title: "Flota verificata tehnic permanent",
  },
] as const;

export const serviceVideos = [
  {
    src: "https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_25fps.mp4",
    title: "Plecare in cursa internationala",
    description:
      "Secventa video orientata pe mobilitate si siguranta pe trasee lungi europene.",
  },
  {
    src: "https://videos.pexels.com/video-files/1121575/1121575-hd_1920_1080_30fps.mp4",
    title: "Transport persoane pe autostrada",
    description:
      "Cadre care transmit ritm, confort si standard profesional de transport.",
  },
] as const;

export const siteConfig = {
  name: "Mariva Travel",
  legalName: "Mariva Travel SRL",
  url: "https://marivatravel.com",
  dispatchPhoneDisplay: "0744 888 888",
  dispatchPhoneE164: "+40744888888",
  whatsappPhoneDisplay: "0744 111 111",
  whatsappPhoneE164: "+40744111111",
  description:
    "Mariva Travel ofera transport persoane si colete door-to-door intre Romania si Europa, cu plecari zilnice, preluare de la adresa, tarife corecte si rezervari rapide pe telefon sau WhatsApp.",
  shortDescription:
    "Transport persoane si colete door-to-door Romania - Europa.",
  locale: "ro_RO",
  departureCountry: "Romania",
  destinationCountries,
  destinationMarkets,
  areaServedCountries,
  routes: destinationCountries.map((country) => `Romania ↔ ${country}`),
  serviceHighlights,
  serviceBenefits,
  faqItems,
  fleetGallery,
  serviceVideos,
  socialImage: "/images/hero-coach.jpg",
} as const;

export type DestinationMarket = (typeof destinationMarkets)[number];

export function getDestinationMarketBySlug(
  slug: string,
): DestinationMarket | undefined {
  return destinationMarkets.find((market) => market.slug === slug);
}

export function getRouteFaqItems(country: string) {
  return [
    {
      question: `Cum rezerv un loc pentru transport Romania - ${country}?`,
      answer:
        "Ne suni sau ne scrii pe WhatsApp cu localitatea de plecare, destinatia, data si numarul de persoane, iar noi iti confirmam disponibilitatea cat mai rapid.",
    },
    {
      question: `Asigurati transport door-to-door catre ${country}?`,
      answer:
        `Da. Serviciul este orientat pe preluare de la adresa din Romania si lasare cat mai aproape de destinatia finala din ${country}, in functie de ruta stabilita.`,
    },
    {
      question: `Pot trimite si colete pe ruta Romania - ${country}?`,
      answer:
        `Da, pe ruta Romania - ${country} putem prelua si colete, bagaje sau pachete, in limita capacitatii disponibile pe cursa.`,
    },
    {
      question: `Cand primesc pretul pentru ruta Romania - ${country}?`,
      answer:
        "Tariful se comunica direct in functie de ruta exacta, adresa de preluare, destinatie si disponibilitatea din ziua solicitata.",
    },
  ] as const;
}
