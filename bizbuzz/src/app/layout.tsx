import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bizbuzz.it"),
  title: {
    default: "BizBuzz NFP | Youth Entrepreneurship Camps & Fish Tank in Naperville",
    template: "%s | BizBuzz NFP",
  },
  description:
    "BizBuzz NFP is a student-run 501(c)(3) nonprofit in Naperville, Illinois teaching entrepreneurship to elementary and middle school students through free summer camps, workshops, and the Fish Tank pitch competition.",
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
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
