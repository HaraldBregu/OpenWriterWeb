import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MidCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-muted/50 px-6 py-16 text-center ring-1 ring-foreground/5 sm:px-16 sm:py-24">
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
          </div>

          <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Your writing deserves better tools.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
            Stop switching between your editor, browser, and AI chatbot.
            OpenWriter brings them together in one app.
          </p>
          <div className="mt-8">
            <Button
              render={<a href="https://github.com/HaraldBregu/openwriter/releases" />}
              size="lg"
              className="h-12 px-6 text-base"
            >
              Download OpenWriter
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
