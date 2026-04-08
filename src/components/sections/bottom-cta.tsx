import { Button } from "@/components/ui/button";
import { Apple, Monitor, Terminal } from "lucide-react";

const platforms = [
  { label: "Download for macOS", icon: Apple },
  { label: "Download for Windows", icon: Monitor },
  { label: "Download for Linux", icon: Terminal },
];

export function BottomCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-foreground px-6 py-16 text-center text-background sm:px-16 sm:py-24">
          {/* Decorative dots */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]">
            <svg className="h-full w-full" aria-hidden="true">
              <defs>
                <pattern
                  id="cta-dots"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-dots)" />
            </svg>
          </div>

          <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to write smarter?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-background/70">
            Join writers and developers who use OpenWriter to produce better
            work, faster. Free and open source &mdash; no sign-up required.
          </p>

          {/* Platform download buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {platforms.map((platform) => (
              <Button
                key={platform.label}
                asChild
                variant="secondary"
                size="lg"
                className="h-12 w-full px-6 text-base sm:w-auto"
              >
                <a href="https://github.com/HaraldBregu/openwriter/releases">
                  <platform.icon className="mr-1.5 size-4" />
                  {platform.label}
                </a>
              </Button>
            ))}
          </div>

          {/* GitHub link */}
          <p className="mt-6 text-sm text-background/50">
            Or{" "}
            <a
              href="https://github.com/HaraldBregu/openwriter/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-background/80"
            >
              view all releases on GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
