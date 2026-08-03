import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the student team behind BizBuzz NFP, a student-run Naperville nonprofit currently seeking 501(c)(3) status, teaching entrepreneurship to elementary and middle school students across Chicagoland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
