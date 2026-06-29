import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Hours & FAQs",
  description:
    "View BizBuzz office hours and find answers to frequently asked questions about our free entrepreneurship program and Fish Tank competition.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
