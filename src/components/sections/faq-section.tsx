type FaqSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro: string;
  items: ReadonlyArray<{
    question: string;
    answer: string;
  }>;
  tone?: "light" | "dark";
};

export function FaqSection({
  id = "intrebari-frecvente",
  eyebrow = "Intrebari Frecvente",
  title,
  intro,
  items,
  tone = "light",
}: FaqSectionProps) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      className={`${isDark ? "bg-foreground text-white" : "bg-background text-foreground"} py-24 lg:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </span>
            <h2
              className="mt-4 text-4xl font-light leading-tight tracking-tight lg:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {title}
            </h2>
            <div className="mt-6 h-px w-20 bg-accent" />
            <p className={`mt-8 text-lg leading-relaxed ${isDark ? "text-white/65" : "text-muted"}`}>
              {intro}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <details
                key={item.question}
                className={`group border p-6 ${
                  isDark
                    ? "border-white/10 bg-white/5"
                    : "border-border bg-card"
                }`}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <span className="text-lg font-medium">{item.question}</span>
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className={`mt-4 leading-7 ${isDark ? "text-white/65" : "text-muted"}`}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
