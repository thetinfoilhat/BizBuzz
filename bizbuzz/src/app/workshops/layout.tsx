import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Hands-on business workshops for elementary and middle school students, covering idea generation, marketing, budgeting, and pitching.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
