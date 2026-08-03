import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fish Tank 2026",
  description:
    "Enrollment is open for the 2026 BizBuzz Fish Tank pitch competition, run as two tracks: Kidpreneurs and Venture Lab. The dates and venue are not announced yet.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
