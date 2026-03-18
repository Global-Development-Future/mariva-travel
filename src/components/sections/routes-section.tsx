import Image from "next/image";
import { siteConfig } from "@/config/site";

const processSteps = [
  {
    number: "01",
    title: "Contacteaza-ne",
    description: "Suna sau scrie pe WhatsApp cu detaliile calatoriei tale.",
  },
  {
    number: "02", 
    title: "Primesti Confirmare",
    description: "In maxim 10 minute iti confirmam disponibilitatea si pretul.",
  },
  {
    number: "03",
    title: "Calatorie Sigura",
    description: "Preluare de la adresa si transport confortabil pana la destinatie.",
  },
] as const;

export function RoutesSection() {
  return (
    <section id="rute" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Rute Internationale
            </span>
            <h2 
              className="mt-4 text-4xl font-light leading-tight tracking-tight text-foreground lg:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Romania conectata
              <span className="block">cu Europa de Vest</span>
            </h2>
            <div className="mt-6 h-px w-20 bg-accent" />
          </div>
          <div className="flex items-end">
            <p className="text-lg leading-relaxed text-muted">
              Operam curse regulate pe principalele rute europene, oferind 
              transport de persoane si colete cu plecari saptamanale si 
              preluare direct de la adresa.
            </p>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.destinationCountries.map((country, index) => (
            <div
              key={country}
              className="group card-premium flex items-center justify-between p-5 hover-lift"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-sm font-medium text-muted">
                  {country.slice(0, 2).toUpperCase()}
                </div>
                <span className="font-medium text-foreground">{country}</span>
              </div>
              <svg 
                className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          ))}
        </div>

        {/* Map & Process Section */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Map Image */}
          <div className="relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/europe-routes.jpg"
                alt="Harta rutelor Mariva Travel in Europa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                className="object-cover"
              />
              <div className="absolute inset-0 image-overlay-subtle" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                10+ Destinatii Europene
              </p>
              <p className="mt-1 text-2xl font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                Conectam Romania cu Europa
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Cum Functioneaza
            </span>
            <h3 
              className="mt-4 text-3xl font-light tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Rezervare simpla in 3 pasi
            </h3>
            
            <div className="mt-10 flex flex-col gap-8">
              {processSteps.map((step, index) => (
                <div key={step.number} className="group flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 items-center justify-center border border-border text-lg font-light text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                      {step.number}
                    </span>
                    {index < processSteps.length - 1 && (
                      <div className="mt-2 h-full w-px bg-border" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-lg font-medium text-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
