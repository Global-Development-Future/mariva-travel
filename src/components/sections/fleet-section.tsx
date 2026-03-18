import Image from "next/image";

const fleetFeatures = [
  {
    title: "Microbuze Executive",
    description: "Vehicule 8+1 locuri, ideale pentru grupuri mici si calatorii confortabile",
    capacity: "8+1 locuri",
  },
  {
    title: "Autocare Premium",
    description: "Vehicule moderne cu toate facilitatile pentru calatorii lungi",
    capacity: "49 locuri",
  },
] as const;

const amenities = [
  "Aer conditionat",
  "Wi-Fi gratuit",
  "Prize USB",
  "Spatiu bagaje generos",
  "Scaune reclinabile",
  "Pauze regulate",
] as const;

export function FleetSection() {
  return (
    <section id="flota" className="bg-foreground py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Flota Noastra
            </span>
            <h2 
              className="mt-4 text-4xl font-light leading-tight tracking-tight lg:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vehicule moderne
              <span className="block text-white/60">pentru confort maxim</span>
            </h2>
            <div className="mt-6 h-px w-20 bg-accent" />
          </div>
          <div className="flex items-end">
            <p className="text-lg leading-relaxed text-white/60">
              Flota noastra include microbuze si autocare de ultima generatie, 
              verificate tehnic permanent, pentru a va oferi siguranta si 
              confort pe intreaga durata a calatoriei.
            </p>
          </div>
        </div>

        {/* Fleet Gallery */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Main Large Image */}
          <div className="relative overflow-hidden rounded-sm lg:col-span-2 lg:row-span-2">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full">
              <Image
                src="/images/fleet-minibus.jpg"
                alt="Microbuz Mariva Travel"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  Flota Premium
                </span>
                <h3 
                  className="mt-2 text-3xl font-light"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Microbuze 8+1 Locuri
                </h3>
                <p className="mt-2 max-w-md text-white/70">
                  Vehicule executive pentru grupuri mici, cu toate dotarile 
                  necesare pentru o calatorie confortabila.
                </p>
              </div>
            </div>
          </div>

          {/* Interior Image */}
          <div className="relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/interior-luxury.jpg"
                alt="Interior luxos autocar Mariva Travel"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-medium">Interior Premium</p>
                <p className="text-xs text-white/60">Scaune din piele, spatios</p>
              </div>
            </div>
          </div>

          {/* On the Road Image */}
          <div className="relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/on-the-road.jpg"
                alt="Microbuz Mariva Travel pe drum"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="image-overlay absolute inset-0" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-medium">Pe Drum</p>
                <p className="text-xs text-white/60">Siguranta in miscare</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Types & Amenities */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Fleet Types */}
          <div>
            <h3 className="text-lg font-medium">Tipuri de Vehicule</h3>
            <div className="mt-6 flex flex-col gap-4">
              {fleetFeatures.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 border border-white/10 p-5 transition-colors hover:border-accent/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium">{item.title}</h4>
                      <span className="text-xs text-accent">{item.capacity}</span>
                    </div>
                    <p className="mt-1 text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-lg font-medium">Facilitati la Bord</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-3 text-white/70"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
