const steps = [
  {
    number: "01",
    title: "Point OpenWriter at a folder",
    description: "Select any folder as a workspace.",
  },
  {
    number: "02",
    title: "Write with a powerful editor",
    description:
      "Start writing with formatting, images, code blocks, markdown shortcuts.",
  },
  {
    number: "03",
    title: "Add reference materials",
    description:
      "Import PDFs, Word docs, text files. Auto-indexed for AI retrieval.",
  },
  {
    number: "04",
    title: "Get AI-powered writing help",
    description:
      "Ask AI to continue, research, or draft. It searches workspace + web, streams responses.",
  },
  {
    number: "05",
    title: "Iterate until it's right",
    description:
      "AI reflection catches weak output. Review, ask revisions, refine with AI at every step.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            From blank page to polished draft
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Five simple steps to transform how you write.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-5 top-6 bottom-6 w-px bg-border sm:left-6"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-12">
              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-5 sm:gap-6">
                  {/* Step number circle */}
                  <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background sm:size-12 sm:text-base">
                    {step.number}
                  </div>

                  {/* Step content */}
                  <div className="pt-1 sm:pt-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-muted-foreground leading-relaxed">
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
