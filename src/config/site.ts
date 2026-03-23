export const destinationCountries = [
  "Belgia",
  "Germania",
  "Franța",
  "Danemarca",
  "Italia",
  "Luxemburg",
  "Elveția",
  "Olanda",
  "Austria",
  "Ungaria",
] as const;

export const areaServedCountries = ["România", ...destinationCountries] as const;

export const fleetGallery = [
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=80",
    alt: "Microbuz modern pentru transport internațional de persoane",
    title: "Microbuze executive 8+1",
  },
  {
    src: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1800&q=80",
    alt: "Microbuz la încărcare pentru cursă Europa",
    title: "Spațiu dedicat bagaje și colete",
  },
  {
    src: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1800&q=80",
    alt: "Flotă de transport persoane pe traseu european",
    title: "Flotă verificată tehnic permanent",
  },
] as const;

export const serviceVideos = [
  {
    src: "https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_25fps.mp4",
    title: "Plecare în cursă internațională",
    description:
      "Secvență video orientată pe mobilitate și siguranță pe trasee lungi europene.",
  },
  {
    src: "https://videos.pexels.com/video-files/1121575/1121575-hd_1920_1080_30fps.mp4",
    title: "Transport persoane pe autostradă",
    description:
      "Cadre care transmit ritm, confort și standard profesional de transport.",
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
    "Mariva Travel oferă transport internațional persoane și colete, flotă modernă, preluare de la adresă și dispecerat disponibil non-stop.",
  locale: "ro_RO",
  departureCountry: "România",
  destinationCountries,
  areaServedCountries,
  routes: destinationCountries.map((country) => `România ↔ ${country}`),
  fleetGallery,
  serviceVideos,
} as const;
