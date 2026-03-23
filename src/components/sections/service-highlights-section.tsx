import { siteConfig } from "@/config/site";

export function ServiceHighlightsSection() {
  return (
    <section id="servicii" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Servicii Door-to-Door
            </span>
            <h2
              className="mt-4 text-4xl font-light leading-tight tracking-tight text-foreground lg:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Transport international pentru persoane si colete,
              <span className="block">fara batai de cap</span>
            </h2>
            <div className="mt-6 h-px w-20 bg-accent" />
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
              Mariva Travel este alegerea potrivita daca vrei transport persoane
              Romania - Europa cu preluare de la adresa, comunicare rapida si
              trasee gandite pentru confort, punctualitate si flexibilitate.
            </p>
          </div>

          <div className="border border-border bg-card p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Ce te ajuta concret
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {siteConfig.serviceBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="leading-7">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {siteConfig.serviceHighlights.map((highlight, index) => (
            <article
              key={highlight.title}
              className="card-premium p-6 hover-lift"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-xl font-medium text-foreground">
                {highlight.title}
              </h3>
              <p className="mt-3 leading-7 text-muted">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
