import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "BizBuzz school sessions bring entrepreneurship lessons directly to classrooms across Chicagoland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
