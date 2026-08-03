import type { Metadata } from "next";
import { Archivo, Newsreader, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Display. The wdth axis is the identity — see .relay/design.md "Type".
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

// Prose only: paragraphs, standfirsts, pull quotes. Never inside a control.
const prose = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-prose",
  display: "swap",
});

// Labels, tags, captions, dates, index numerals.
const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bizbuzz.it"),
  title: {
    default: "BizBuzz NFP | Youth Entrepreneurship Camps & Fish Tank in Naperville",
    template: "%s | BizBuzz NFP",
  },
  description:
    "BizBuzz NFP is a student-run nonprofit in Naperville, Illinois, currently seeking 501(c)(3) status, teaching entrepreneurship to elementary and middle school students through free summer camps, workshops, and the Fish Tank pitch competition.",
  keywords: [
    "BizBuzz",
    "youth entrepreneurship",
    "kids business camp",
    "Naperville summer camp",
    "Fish Tank competition",
    "student nonprofit",
    "entrepreneurship education",
    "Chicagoland",
  ],
  openGraph: {
    type: "website",
    siteName: "BizBuzz NFP",
    url: "https://www.bizbuzz.it",
    title: "BizBuzz NFP | Youth Entrepreneurship Camps & Fish Tank",
    description:
      "Free entrepreneurship camps, workshops, and pitch competitions for elementary and middle school students across Chicagoland.",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "BizBuzz NFP logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizBuzz NFP | Youth Entrepreneurship Camps & Fish Tank",
    description:
      "Free entrepreneurship camps, workshops, and pitch competitions for students across Chicagoland.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
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
      className={`${display.variable} ${prose.variable} ${mono.variable}`}
    >
      <body className="flex min-h-[100dvh] flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
