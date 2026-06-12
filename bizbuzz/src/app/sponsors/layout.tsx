import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Sponsors",
  description:
    "The businesses and individuals funding free youth entrepreneurship programs at BizBuzz NFP. See every sponsor since 2024 and learn how to join them.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
