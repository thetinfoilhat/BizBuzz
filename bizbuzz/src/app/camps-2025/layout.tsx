import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp 2025",
  description:
    "The 2025 BizBuzz summer camp: expanded curriculum with AI and global business topics for student entrepreneurs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
