import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://ayuguard.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AyuGuard — Offline-First Personal Safety for Android",
  description:
    "AyuGuard is a privacy-focused, offline-first personal safety app for Android. Manual SOS and Journey Mode dispatch emergency alerts over SMS — no internet, no server, no login required.",
  keywords: [
    "AyuGuard",
    "personal safety app",
    "emergency SOS",
    "Android safety app",
    "offline SOS",
    "Journey Mode",
    "SMS emergency alert",
    "privacy-focused safety app",
  ],
  authors: [{ name: "Ridhan Bholakiya" }],
  openGraph: {
    title: "AyuGuard — Offline-First Personal Safety for Android",
    description:
      "Manual SOS and Journey Mode dispatch emergency alerts over SMS. No internet, no server, no login. Built for the moment the phone is least reachable.",
    url: siteUrl,
    siteName: "AyuGuard",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AyuGuard" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AyuGuard — Offline-First Personal Safety for Android",
    description:
      "Manual SOS and Journey Mode dispatch emergency alerts over SMS. No internet, no server, no login required.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-black font-body antialiased">{children}</body>
    </html>
  );
}
