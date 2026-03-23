import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navigation } from "@/components/layout/navigation";

const stats = [
  { value: "10", label: "Tari Europene" },
  { value: "Zilnic", label: "Plecari" },
  { value: "Door-to-Door", label: "Serviciu" },
] as const;

export function HeroSection() {
  return (
    <section id="acasa" className="relative min-h-screen overflow-hidden bg-foreground">
      <Navigation />
      
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-coach.jpg"
          alt="Autocar premium Mariva Travel pe autostrada europeana"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0">
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Transport Persoane & Colete Door-to-Door
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="animate-fade-in-up animation-delay-100 mt-8 text-5xl font-light leading-[1.1] tracking-tight text-white opacity-0 sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Transport persoane si colete
            <span className="block text-accent">Romania - Europa, zilnic</span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-white/70 opacity-0">
            Uita de grija bagajelor, schimbarilor de tren sau a curselor complicate.
            Mariva Travel te preia din fata casei si te lasa la adresa destinatiei
            in 10 tari europene, cu tarife corecte, program flexibil si rezervari
            rapide pe telefon sau WhatsApp.
          </p>

          <div className="animate-fade-in-up animation-delay-200 mt-6 flex flex-wrap gap-2 opacity-0">
            {siteConfig.destinationMarkets.slice(0, 6).map((market) => (
              <Link
                key={market.slug}
                href={`/transport/${market.slug}/`}
                className="inline-flex items-center border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white/80"
              >
                Romania - {market.country}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center">
            <a
              href={`tel:${siteConfig.dispatchPhoneE164}`}
              className="group inline-flex h-14 items-center justify-center gap-3 bg-accent px-8 text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:bg-white"
            >
              <span>Cere Oferta Acum</span>
              <svg 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappPhoneE164.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-3 border border-white/30 bg-transparent px-8 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Phone Number */}
          <p className="animate-fade-in-up animation-delay-400 mt-6 text-sm text-white/50 opacity-0">
            Telefon: <span className="font-medium text-white/80">{siteConfig.dispatchPhoneDisplay}</span>  /  WhatsApp: <span className="font-medium text-white/80">{siteConfig.whatsappPhoneDisplay}</span>
          </p>
        </div>

        {/* Stats Bar */}
        <div className="animate-fade-in animation-delay-400 absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/30 opacity-0 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
            <div className="hidden gap-12 md:flex">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-light text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-2 md:ml-auto">
              <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                Vezi rutele si avantajele
              </span>
              <div className="animate-scroll h-12 w-px bg-gradient-to-b from-white/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
