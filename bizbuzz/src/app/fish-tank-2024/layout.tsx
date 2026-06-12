import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fish Tank 2024",
  description:
    "The first BizBuzz Fish Tank pitch competition, hosted at College of DuPage, where young founders pitched real business ideas to judges.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
