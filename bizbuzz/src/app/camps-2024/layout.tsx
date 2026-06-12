import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp 2024",
  description:
    "BizBuzz's inaugural 2024 summer entrepreneurship camp: 6 weeks of free business education for young students in Naperville.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
