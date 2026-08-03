import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp 2025",
  description:
    "Archive of the 2025 BizBuzz summer camp: seven sessions at the 95th Street Library in Naperville, five guest speakers, 120 students.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
