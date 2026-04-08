import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenWriter — Free AI-Powered Desktop Writing App",
  description:
    "OpenWriter is a free, open-source desktop writing app with built-in AI assistance, workspace management, and a distraction-free editor. Available for macOS, Windows, and Linux.",
  keywords: [
    "writing app",
    "AI writing assistant",
    "open source",
    "desktop app",
    "markdown editor",
    "distraction-free writing",
    "electron app",
    "workspace management",
    "macOS",
    "Windows",
    "Linux",
  ],
  openGraph: {
    title: "OpenWriter — Free AI-Powered Desktop Writing App",
    description:
      "OpenWriter is a free, open-source desktop writing app with built-in AI assistance, workspace management, and a distraction-free editor. Available for macOS, Windows, and Linux.",
    type: "website",
    url: "https://openwriter.app",
    siteName: "OpenWriter",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenWriter — Free AI-Powered Desktop Writing App",
    description:
      "Free, open-source desktop writing app with built-in AI assistance, workspace management, and a distraction-free editor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
