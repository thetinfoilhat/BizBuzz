import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the student team behind BizBuzz NFP, a Naperville 501(c)(3) teaching entrepreneurship to elementary and middle school students across Chicagoland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
