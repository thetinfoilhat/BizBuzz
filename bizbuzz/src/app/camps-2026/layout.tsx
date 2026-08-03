import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp 2026",
  description:
    "The 2026 BizBuzz summer entrepreneurship camp: six weeks of Friday sessions across two tracks, 12 sessions in total from June 5 to July 10, free for elementary and middle schoolers in the Naperville area.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
