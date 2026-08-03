import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Hours & FAQs",
  description:
    "Book a free 1-on-1 BizBuzz office hours session — online over Google Meet on weekdays, in person at a Naperville library on weekends — and read the answers to the questions we are asked most about camp and Fish Tank.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
