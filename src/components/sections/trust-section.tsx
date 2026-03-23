const stats = [
  { value: "85%", label: "Clienti Recurenti" },
  { value: "10min", label: "Timp Raspuns" },
  { value: "24/7", label: "Dispecerat" },
  { value: "10", label: "Tari Europene" },
] as const;

const testimonials = [
  {
    quote: "Am calatorit de nenumarate ori cu Mariva Travel. Serviciu impecabil, punctualitate si confort de fiecare data.",
    author: "Raluca M.",
    location: "Cluj-Napoca",
    route: "Transport Romania - Belgia",
  },
  {
    quote: "Trimit colete lunar in Germania. Comunicare excelenta si livrare la timp. Recomand cu incredere.",
    author: "Cosmin P.",
    location: "Arad",
    route: "Colete Romania - Germania",
  },
  {
    quote: "Personal profesionist si vehicule curate. Cea mai buna experienta de transport international pe care am avut-o.",
    author: "Elena D.",
    location: "Bucuresti",
    route: "Transport Romania - Italia",
  },
] as const;

const values = [
  {
    title: "Door-to-door real",
    description: "Preluam din Romania si lasam la destinatie, reducand drumurile suplimentare si timpii pierduti.",
  },
  {
    title: "Comunicare rapida",
    description: "Raspundem rapid la cereri de pret, disponibilitate, rezervare si status pentru colete sau bagaje.",
  },
  {
    title: "Tarife transparente",
    description: "Discuti direct cu dispeceratul si primesti o oferta clara, adaptata traseului si nevoii tale.",
  },
] as const;

export function TrustSection() {
  return (
    <section id="incredere" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 gap-6 border-y border-border py-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p 
                className="text-4xl font-light text-foreground lg:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          {/* Left Column - About */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              De Ce Noi
            </span>
            <h2 
              className="mt-4 text-4xl font-light leading-tight tracking-tight text-foreground lg:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              De ce aleg clientii
              <span className="block">Mariva Travel</span>
            </h2>
            <div className="mt-6 h-px w-20 bg-accent" />
            
            <p className="mt-8 text-lg leading-relaxed text-muted">
              Mariva Travel este ales de clienti care au nevoie de transport
              persoane si colete Romania - Europa fara stres, fara schimbari
              multiple si fara comunicare greoaie. Punem accent pe trasee clare,
              raspuns rapid si confort pe intreaga ruta.
            </p>

            {/* Values */}
            <div className="mt-12 flex flex-col gap-6">
              {values.map((value, index) => (
                <div key={value.title} className="group flex gap-4">
                  <span className="text-sm font-medium text-accent">0{index + 1}</span>
                  <div>
                    <h3 className="font-medium text-foreground">{value.title}</h3>
                    <p className="mt-1 text-sm text-muted">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Testimonials */}
          <div className="flex flex-col gap-6">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="card-premium p-6 hover-lift"
              >
                <div className="flex items-center gap-2 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted">{testimonial.location}</p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {testimonial.route}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
