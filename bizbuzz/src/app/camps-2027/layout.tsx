import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp 2027",
  description:
    "Plans for the 2027 BizBuzz summer entrepreneurship camp in Naperville.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
