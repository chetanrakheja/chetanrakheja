import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chetan Rakheja — Senior SDET & AI Engineer",
  description:
    "Senior SDET with 6+ years in distributed systems and backend engineering. Designing LLM agent workflows, MCP tooling, and production AI infrastructure.",
  keywords: ["Chetan Rakheja", "AI Engineer", "SDET", "MCP", "LLM", "Agentic Workflows", "Python", "Next.js"],
  authors: [{ name: "Chetan Rakheja" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chetanrakheja.com",
    siteName: "Chetan Rakheja",
    title: "Chetan Rakheja — Senior SDET & AI Engineer",
    description: "Senior SDET with 6+ years in distributed systems and backend engineering. Designing LLM agent workflows, MCP tooling, and production AI infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetan Rakheja — Senior SDET & AI Engineer",
    description: "Senior SDET with 6+ years in distributed systems and backend engineering. Designing LLM agent workflows, MCP tooling, and production AI infrastructure.",
  },
  robots: { index: true, follow: true },
};

// Inlined script prevents flash of wrong theme before React hydrates
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';document.documentElement.setAttribute('data-theme',s||p);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-dm-sans), DM Sans, system-ui, sans-serif" }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
