import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Eight BizBuzz workshop programs run at Naperville-area schools, learning centers and children's business fairs between May 2024 and August 2025 — 18 sessions and 710 students.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
