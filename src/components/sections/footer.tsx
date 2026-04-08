import { Separator } from "@/components/ui/separator";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Download", href: "https://github.com/HaraldBregu/openwriter/releases" },
      { label: "Changelog", href: "https://github.com/HaraldBregu/openwriter/releases" },
      { label: "Roadmap", href: "https://github.com/HaraldBregu/openwriter" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://github.com/HaraldBregu/openwriter" },
      {
        label: "GitHub Repository",
        href: "https://github.com/HaraldBregu/openwriter",
        external: true,
      },
      {
        label: "Report a Bug",
        href: "https://github.com/HaraldBregu/openwriter/issues",
        external: true,
      },
      {
        label: "Contributing Guide",
        href: "https://github.com/HaraldBregu/openwriter",
        external: true,
      },
    ],
  },
  community: {
    title: "Community",
    links: [
      {
        label: "GitHub Discussions",
        href: "https://github.com/HaraldBregu/openwriter/discussions",
        external: true,
      },
      {
        label: "Release Notes",
        href: "https://github.com/HaraldBregu/openwriter/releases",
        external: true,
      },
      {
        label: "Star on GitHub",
        href: "https://github.com/HaraldBregu/openwriter",
        external: true,
      },
    ],
  },
};

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "MIT License", href: "https://github.com/HaraldBregu/openwriter/blob/main/LICENSE" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="text-lg font-semibold tracking-tight">
              OpenWriter
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Free, open-source AI writing app.
            </p>
            <p className="mt-4 text-xs text-muted-foreground/70">
              Copyright 2026 Harald Bregu. MIT License.
            </p>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            Copyright 2026 OpenWriter. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {bottomLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-border" aria-hidden="true">|</span>
                )}
                <a
                  href={link.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
