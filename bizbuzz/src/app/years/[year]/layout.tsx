import type { Metadata } from "next";

const TITLES: Record<string, string> = {
  "2024": "BizBuzz 2024 Season - Impact, Camps, Fish Tank & Workshops",
  "2025": "BizBuzz 2025 Season - Enhanced Programs & Global Reach",
};

const DESCRIPTIONS: Record<string, string> = {
  "2024":
    "Explore BizBuzz's inaugural 2024 season: 936 students taught across 79 schools, 6-week entrepreneurship camp, Fish Tank competition at College of DuPage, and 7 workshop series. $10,242 raised for youth entrepreneurship.",
  "2025":
    "Discover BizBuzz's expanded 2025 season: 1,200+ students expected across 95 schools, enhanced camp curriculum featuring AI and global topics, Fish Tank at Benedictine University, and 7 specialized workshop series.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}): Promise<Metadata> {
  const { year } = await params;

  const title = TITLES[year] || `BizBuzz ${year} Season`;
  const description =
    DESCRIPTIONS[year] || `Explore the BizBuzz ${year} season programs and impact.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.bizbuzz.it/years/${year}`,
      siteName: "BizBuzz NFP",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: `BizBuzz ${year} Season`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
    alternates: {
      canonical: `https://www.bizbuzz.it/years/${year}`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
