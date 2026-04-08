import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Sparkles,
  PenTool,
  FolderOpen,
  BookOpen,
  Monitor,
  GitBranch,
  Layers,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI That Writes With You",
    description:
      "Multi-agent AI assistant that plans, researches, drafts, reviews, and enhances your writing.",
    details:
      "Content continuation, workspace-aware RAG, web search, reflection loop.",
  },
  {
    icon: PenTool,
    title: "A Beautiful, Focused Editor",
    description:
      "Rich text editor built on Tiptap/ProseMirror with full formatting, code blocks, images, and a clean minimal interface.",
    details:
      "Full formatting, code blocks, images, clean minimal interface.",
  },
  {
    icon: FolderOpen,
    title: "Organize Your Projects",
    description:
      "Group documents into workspaces with per-workspace file tracking, metadata, and quick switching.",
    details:
      "Metadata, quick switching, multi-window, file watching.",
  },
  {
    icon: BookOpen,
    title: "Import Your Research",
    description:
      "Add PDFs, Word docs, text files. OpenWriter indexes them with semantic embeddings for AI retrieval.",
    details:
      "PDF/DOCX/text import, chunking, vector search, documents stay local.",
  },
  {
    icon: Monitor,
    title: "Works Everywhere You Do",
    description:
      "Native desktop app for macOS, Windows, and Linux with full light/dark mode support.",
    details:
      "Intel + Apple Silicon, NSIS, AppImage, light/dark mode.",
  },
  {
    icon: GitBranch,
    title: "Free and Open Source",
    description:
      "MIT licensed with full source on GitHub. Community-driven and built with an extensible agent architecture.",
    details:
      "Community-driven, extensible agent architecture.",
  },
  {
    icon: Layers,
    title: "Powerful Background Processing",
    description:
      "Priority-based task system for AI generation and indexing that runs without interrupting your work.",
    details:
      "Priority queue, token streaming, progress, cancellation.",
  },
  {
    icon: Globe,
    title: "Write in Your Language",
    description:
      "English and Italian UI with an extensible i18n system. AI assistance works in any language.",
    details:
      "Translation system, any AI language support.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to write better
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete writing environment with AI assistance, workspace
            management, research tools, and a beautiful editor.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative transition-all duration-200 hover:shadow-md hover:ring-foreground/15"
            >
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-muted">
                  <feature.icon className="size-5 text-foreground" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  {feature.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
