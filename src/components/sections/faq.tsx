"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General",
    items: [
      {
        question: "What is OpenWriter?",
        answer:
          "OpenWriter is a free, open-source desktop writing app with AI assistance, workspace management, document indexing, and a multi-agent AI assistant. It is designed to give you a complete writing environment on your own machine.",
      },
      {
        question: "Is OpenWriter free?",
        answer:
          "Yes. OpenWriter is released under the MIT license with no subscriptions or hidden costs. You can use it, modify it, and distribute it freely.",
      },
      {
        question: "What platforms does OpenWriter support?",
        answer:
          "OpenWriter runs on macOS (both Intel and Apple Silicon), Windows, and Linux.",
      },
      {
        question: "Do I need an internet connection?",
        answer:
          "An internet connection is needed for AI features (OpenAI API calls). The editor, workspace management, and file operations all work offline.",
      },
    ],
  },
  {
    title: "AI Assistant",
    items: [
      {
        question: "Which AI models does OpenWriter use?",
        answer:
          "OpenWriter uses OpenAI models (GPT-4o, GPT-4o-mini) which are configurable per agent role, so you can choose the right balance of quality and speed for each task.",
      },
      {
        question: "Do I need my own API key?",
        answer:
          "Yes. You need an OpenAI API key to use the AI features. Your key is stored locally on your machine and is never sent anywhere except directly to the OpenAI API.",
      },
      {
        question: "How does the AI assistant work?",
        answer:
          "The AI assistant uses a multi-agent pipeline: intent detection, planning, RAG (retrieval-augmented generation), web search, generation, review, and enhancement. Responses are streamed in real time so you can see the output as it is generated.",
      },
      {
        question: "Does the AI read my documents?",
        answer:
          "Only documents you explicitly import into the resource library are indexed. Indexing happens locally using semantic embeddings. Your documents are never uploaded to any cloud service.",
      },
    ],
  },
  {
    title: "Privacy",
    items: [
      {
        question: "Where is my data stored?",
        answer:
          "Everything is stored locally on your machine. Settings, metadata, and indexes live in the app's data directory. Nothing is uploaded except AI API calls when you use the assistant.",
      },
      {
        question: "Is my writing sent to any server?",
        answer:
          "Only the text you send to the AI assistant goes to the OpenAI API. Everything else \u2014 your documents, workspaces, settings, and indexes \u2014 stays entirely local on your device.",
      },
    ],
  },
  {
    title: "Technical",
    items: [
      {
        question: "Can I contribute?",
        answer:
          "Absolutely. OpenWriter is MIT licensed and contributions are welcome. Visit the GitHub repository to get started, check open issues, and submit pull requests.",
      },
      {
        question: "How do I report a bug?",
        answer:
          "Open an issue on the GitHub repository with reproduction steps, your operating system, and the app version. The more detail you include, the faster the bug can be addressed.",
      },
    ],
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about OpenWriter.
          </p>
        </div>

        {/* FAQ categories */}
        <div className="mx-auto mt-16 max-w-3xl space-y-10">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {category.title}
              </h3>
              <Accordion>
                {category.items.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
