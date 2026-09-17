import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { SiteFooter } from "@/components/footer/site-footer";
import { CommandPalette } from "@/components/ui/command-palette";
import { profile } from "@/data/profile";
import { personJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Software · AI · Robotics`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Jaideep Singh Rajpurohit is an Electronics & Communication Engineering student at IIIT Kota building software systems, AI applications, and real-world engineering projects.",
  keywords: [
    "Jaideep Singh Rajpurohit",
    "IIIT Kota",
    "Software Engineer",
    "Backend Developer",
    "AI Engineer",
    "Electronics and Communication Engineering",
    "UAV",
    "Robotics",
  ],
  openGraph: {
    type: "website",
    title: `${profile.name} — Software · AI · Robotics`,
    description: "Building across software, AI & the physical world.",
    url: siteUrl,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software · AI · Robotics`,
    description: "Building across software, AI & the physical world.",
  },
  alternates: {
    canonical: "/",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var system = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    var theme = stored || system;
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CommandPalette />
      </body>
    </html>
  );
}
