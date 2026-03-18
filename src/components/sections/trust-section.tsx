const indicators = [
  { label: "Clienți recurenți", value: "85%+" },
  { label: "Rezervări confirmate rapid", value: "Sub 10 min" },
  { label: "Disponibilitate dispecerat", value: "24/7" },
  { label: "Rute internaționale", value: "11+" },
] as const;

const reviews = [
  {
    name: "Raluca, Cluj",
    text: "Am rezervat simplu pe WhatsApp, iar preluarea a fost exact cum am discutat.",
  },
  {
    name: "Cosmin, Arad",
    text: "Transport sigur spre Germania și comunicare foarte clară pe toată ruta.",
  },
  {
    name: "Elena, București",
    text: "Trimit colete frecvent în Belgia, iar echipa răspunde mereu rapid.",
  },
] as const;

export function TrustSection() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up card-soft p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-600)]">
            Încredere & Rezultate
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[var(--ink-950)] sm:text-4xl">
            Serviciu profesionist, orientat spre client
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--ink-700)] sm:text-base">
            Obiectivul nostru este să transformăm rezervarea transportului
            internațional într-un proces simplu, predictibil și eficient.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {indicators.map((item) => (
              <article
                key={item.label}
                className="rounded-xl border border-[var(--line-300)] bg-[var(--paper-200)] px-3 py-4 text-center"
              >
                <p className="text-lg font-black text-[var(--ink-950)]">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--muted-500)]">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.name}
              className="fade-in-up card-soft effect-rise px-5 py-5"
            >
              <p className="text-sm leading-relaxed text-[var(--ink-700)]">
                &bdquo;{review.text}&rdquo;
              </p>
              <footer className="mt-3 text-xs font-black uppercase tracking-[0.13em] text-[var(--brand-600)]">
                {review.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
