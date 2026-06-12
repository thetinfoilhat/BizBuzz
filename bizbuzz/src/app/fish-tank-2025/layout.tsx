import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fish Tank 2025",
  description:
    "The 2025 BizBuzz Fish Tank pitch competition at Northwestern University, featuring student founders from across Chicagoland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
