import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Shield, Cpu, HardDrive } from "lucide-react";

const trustBadges = [
  { label: "MIT Licensed", icon: Shield },
  { label: "Built with Electron + React", icon: Cpu },
  { label: "100% Local-first", icon: HardDrive },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-24 text-center sm:py-32 lg:py-40">
          {/* Headline */}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Write smarter. Ship faster.{" "}
            <span className="text-muted-foreground">Own your words.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            OpenWriter is a free, open-source desktop writing app with built-in AI
            assistance, workspace management, and a distraction-free editor. Available
            on macOS, Windows, and Linux.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              render={<a href="https://github.com/HaraldBregu/openwriter/releases" />}
              size="lg"
              className="h-12 px-6 text-base"
            >
              Download for Free
              <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button
              render={
                <a
                  href="https://github.com/HaraldBregu/openwriter"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="lg"
              className="h-12 px-6 text-base"
            >
              <ExternalLink className="mr-1.5 size-4" />
              View on GitHub
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <Badge
                key={badge.label}
                variant="secondary"
                className="gap-1.5 px-3 py-1 text-xs font-medium"
              >
                <badge.icon className="size-3.5" />
                {badge.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
