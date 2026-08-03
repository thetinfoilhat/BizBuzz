import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import InvertedBand from '@/components/ui/InvertedBand';
import Ledger from '@/components/ui/Ledger';
import PageMasthead from '@/components/ui/PageMasthead';
import Plate from '@/components/ui/Plate';
import RailSection from '@/components/ui/RailSection';
import RecordIndex from '@/components/ui/RecordIndex';
import Tag from '@/components/ui/Tag';
import LogoScroller from '@/components/home/LogoScroller';
import YearAwareProgramCards from '@/components/years/YearAwareProgramCards';
import type { Year } from '@/lib/years';

// Every figure below is published on /about and /sponsors.
const record = [
  {
    label: "Students taught",
    figure: "1,172",
    note: "Camps, competitions and workshops since 2024",
  },
  { label: "Schools represented", figure: "79", note: "Elementary, middle and high, across Illinois" },
  { label: "Camp seasons run", figure: "3", note: "2024 · 2025 · 2026" },
  { label: "Raised since 2024", figure: "$15,100", note: "$12,062 monetary · $3,038 in-kind" },
];

// The lead runs all twelve columns — the one photograph on the site that exceeds
// eight. Still matted, still ruled, still captioned, and still with no text on it.
const leadPhoto = {
  src: "/image_gallery/1.jpg",
  alt: "Campers and BizBuzz instructors gathered in a library meeting room at the end of a session",
  caption: "Summer camp group photograph · Naperville Public Library",
};

const photographs = [
  {
    src: "/image_gallery/2.jpg",
    alt: "Five placed Fish Tank teams holding oversized prize cheques",
    caption: "Placed teams · Fish Tank 2024, College of DuPage, July 25, 2024",
  },
  {
    src: "/image_gallery/4.jpg",
    alt: "The BizBuzz team presenting a thank-you plaque to Mayor Scott Wehrli",
    caption: "Mayor Scott Wehrli with the BizBuzz team · Naperville Public Library",
  },
  {
    src: "/image_gallery/3.jpg",
    alt: "Students in suits seated in a lecture hall, waiting for the pitches to begin",
    caption: "Competitors before the pitches · Fish Tank",
  },
  {
    src: "/image_gallery/5.jpg",
    alt: "Campers raising their hands during a camp session",
    caption: "Hands up during a camp session · Naperville",
  },
];

const records: { href: string; year: Year; title: string; date: string; attendance: string }[] = [
  {
    href: "/camps-2027",
    year: 2027,
    title: "BizBuzz Camp 2027",
    date: "Dates not announced",
    attendance: "Interest form open",
  },
  {
    href: "/fish-tank-2026",
    year: 2026,
    title: "Fish Tank 2026",
    date: "Dates not announced",
    attendance: "Enrollment open",
  },
  {
    href: "/camps-2026",
    year: 2026,
    title: "BizBuzz Camp 2026",
    date: "June 5 – July 10, 2026",
    attendance: "12 sessions",
  },
  {
    href: "/fish-tank-2025",
    year: 2025,
    title: "Fish Tank 2025",
    date: "August 2–3, 2025",
    attendance: "70+ competitors",
  },
  {
    href: "/camps-2025",
    year: 2025,
    title: "BizBuzz Camp 2025",
    date: "June 6 – July 25, 2025",
    attendance: "120 students",
  },
  {
    href: "/fish-tank-2024",
    year: 2024,
    title: "Fish Tank 2024",
    date: "July 24–25, 2024",
    attendance: "80+ competitors",
  },
  {
    href: "/camps-2024",
    year: 2024,
    title: "Summer Camp 2024",
    date: "June 12 – July 17, 2024",
    attendance: "110 students",
  },
];

export default function Home() {
  return (
    <div>
      <div id="hero-section">
        <PageMasthead
          kicker="Naperville, Illinois"
          title="BizBuzz NFP"
          standfirst="A free entrepreneurship programme built and taught by high school students: summer camps, the Fish Tank pitch competition, school workshops and one-to-one office hours."
          tags={<Tag variant="status-open">Free</Tag>}
        />
        <Container>
          <div className="pb-s9 min-[900px]:pb-s10">
            <Plate
              src={leadPhoto.src}
              alt={leadPhoto.alt}
              ratio="3:2"
              caption={leadPhoto.caption}
              priority
              sizes="(min-width: 1240px) 1160px, 100vw"
            />
          </div>
        </Container>
      </div>

      <RailSection index="01" label="The record">
        <h2
          className="text-26 min-[900px]:text-34"
          style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
        >
          What has actually run
        </h2>
        <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
          BizBuzz NFP started in April 2024, in a city where 90% of K-8 schools offer no business
          education. Everything it runs is free, and everything it runs is taught by students.
        </p>
        <div className="mt-s7">
          <Ledger items={record} />
        </div>
        <p className="mt-s4 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
          501(c)(3) status pending
        </p>
        <h3 className="mt-s7 text-26" style={{ fontVariationSettings: "'wdth' 105, 'wght' 600" }}>
          Schools represented
        </h3>
        <div id="logo-section" className="mt-s4">
          <LogoScroller />
        </div>
      </RailSection>

      <div id="program-cards-section">
        <div id="programs">
          <RailSection index="02" label="Programmes">
            <YearAwareProgramCards />
          </RailSection>
        </div>
      </div>

      <div id="image-gallery-section">
        <RailSection index="03" label="Photographs">
          <div className="grid grid-cols-1 gap-s5 min-[600px]:grid-cols-2">
            {photographs.map((photo, index) => (
              <Plate
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                ratio="3:2"
                caption={photo.caption}
                index={`${String(index + 1).padStart(2, "0")} / ${photographs.length}`}
                sizes="(min-width: 600px) 47vw, 100vw"
              />
            ))}
          </div>
        </RailSection>
      </div>

      <RailSection index="04" label="The archive">
        <h2
          className="text-26 min-[900px]:text-34"
          style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
        >
          Every season on the record
        </h2>
        <div className="mt-s5">
          <RecordIndex items={records} />
        </div>
      </RailSection>

      <InvertedBand
        title="Camp 2027 and Fish Tank 2026 are taking names"
        standfirst="Both interest forms are open. They are how we reach you with the dates, the tracks and the registration link the moment they are set."
      >
        <Button href="/camps-2027">Camp 2027</Button>
        <Button variant="secondary" onInk href="/fish-tank-2026">
          Fish Tank 2026
        </Button>
      </InvertedBand>
    </div>
  );
}
