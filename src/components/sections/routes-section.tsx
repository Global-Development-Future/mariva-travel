import { siteConfig } from "@/config/site";

const processSteps = [
  {
    title: "Spui ruta și data",
    text: "Ne contactezi telefonic sau pe WhatsApp cu detaliile călătoriei.",
  },
  {
    title: "Primești confirmare",
    text: "Dispeceratul confirmă rapid disponibilitatea și ora aproximativă.",
  },
  {
    title: "Plecare organizată",
    text: "Preluare eficientă și traseu coordonat până la destinație.",
  },
] as const;

export function RoutesSection() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up card-soft p-5 sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-600)]">
                Rute Internaționale
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[var(--ink-950)] sm:text-4xl">
                România ↔ Europa, cu preluare directă
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[var(--ink-700)]">
              Acoperim rutele principale pentru pasageri și colete, cu orar
              clar și comunicare constantă înainte de plecare.
            </p>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.destinationCountries.map((country) => (
              <li
                key={country}
                className="rounded-xl border border-[var(--line-300)] bg-[var(--paper-200)] px-4 py-3 text-sm font-bold text-[var(--ink-900)]"
              >
                România ↔ {country}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="fade-in-up card-soft effect-rise px-5 py-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[var(--brand-600)]">
                Pas {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-black text-[var(--ink-950)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-700)]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
