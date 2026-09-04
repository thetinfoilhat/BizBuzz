import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { year: string } }): Metadata {
  const year = params.year;
  
  const titles = {
    '2024': 'BizBuzz 2024 Season - Impact, Camps, Fish Tank & Workshops',
    '2025': 'BizBuzz 2025 Season - Camp, Fish Tank & Business Fair Workshops',
    '2026': 'BizBuzz 2026 Season - KidPreneur Camp, Venture Lab & Fish Tank'
  };

  const descriptions = {
    '2024': 'Explore BizBuzz\'s inaugural 2024 season: 720 students taught across 18 sessions, a 6-week entrepreneurship camp, the Fish Tank competition at College of DuPage, and 7 workshop series.',
    '2025': 'Discover BizBuzz\'s 2025 season: 370 students across 11 sessions, a 7-week entrepreneurship camp, Fish Tank at Benedictine University, and workshops at the DuPage and Naperville Children\'s Business Fairs.',
    '2026': 'Discover BizBuzz\'s 2026 season: 365 students across two six-week camps — KidPreneur Camp and Venture Lab — plus the Fish Tank competition and the Naperville Children\'s Business Fair.'
  };

  const title = titles[year as '2024' | '2025' | '2026'] || `BizBuzz ${year} Season`;
  const description = descriptions[year as '2024' | '2025' | '2026'] || `Explore the BizBuzz ${year} season programs and impact.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://bizbuzz.it/years/${year}`,
      siteName: 'BizBuzz NFP',
      images: [
        {
          url: '/logo.png',
          width: 800,
          height: 600,
          alt: `BizBuzz ${year} Season`,
        }
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.png'],
    },
    alternates: {
      canonical: `https://bizbuzz.it/years/${year}`
    }
  };
}

