import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp 2027",
  description:
    "Dates and sessions for the 2027 BizBuzz summer entrepreneurship camp in Naperville are not announced yet. The interest form is open.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
