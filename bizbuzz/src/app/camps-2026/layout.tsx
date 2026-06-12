import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp 2026",
  description:
    "The 2026 BizBuzz summer entrepreneurship camp: 8 weeks, 120+ students, free for elementary and middle schoolers in the Naperville area.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
