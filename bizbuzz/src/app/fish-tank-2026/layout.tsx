import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fish Tank 2026",
  description:
    "Two BizBuzz Fish Tank pitch competitions in 2026, including a flagship event at Benedictine University. Students pitch real businesses to real judges.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
