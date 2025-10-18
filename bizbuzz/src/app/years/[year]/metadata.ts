import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { year: string } }): Metadata {
  const year = params.year;
  
  const titles = {
    '2024': 'BizBuzz 2024 Season - Impact, Camps, Fish Tank & Workshops',
    '2025': 'BizBuzz 2025 Season - Enhanced Programs & Global Reach'
  };

  const descriptions = {
    '2024': 'Explore BizBuzz\'s inaugural 2024 season: 936 students taught across 79 schools, 6-week entrepreneurship camp, Fish Tank competition at College of DuPage, and 7 workshop series. $10,242 raised for youth entrepreneurship.',
    '2025': 'Discover BizBuzz\'s expanded 2025 season: 1,200+ students expected across 95 schools, enhanced camp curriculum featuring AI and global topics, Fish Tank at Northwestern University, and 7 specialized workshop series.'
  };

  const title = titles[year as '2024' | '2025'] || `BizBuzz ${year} Season`;
  const description = descriptions[year as '2024' | '2025'] || `Explore the BizBuzz ${year} season programs and impact.`;

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

