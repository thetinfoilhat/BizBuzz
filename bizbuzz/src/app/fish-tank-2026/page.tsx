import Button from '@/components/ui/Button';
import InvertedBand from '@/components/ui/InvertedBand';
import PageMasthead from '@/components/ui/PageMasthead';
import RailSection from '@/components/ui/RailSection';
import RecordIndex from '@/components/ui/RecordIndex';
import SplitBrief from '@/components/ui/SplitBrief';
import Tag from '@/components/ui/Tag';
import type { Year } from '@/lib/years';

const ENROLLMENT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdTtlWLYIGdU0cVxt2JRIrtS7eEk40Tk0v1IsW6CiZ4mrRtDg/viewform?usp=preview";

// What this site has actually published about the 2026 competition, stated as
// publication state. Nothing here is a schedule, because there is no schedule.
const competitionStatus = [
  { label: "Enrollment form", value: "Open" },
  { label: "2026 dates", value: "Not announced" },
  { label: "Venue", value: "Not announced" },
  { label: "Tracks", value: "Kidpreneurs · Venture Lab" },
  { label: "Most recent edition", value: "August 2–3, 2025" },
];

const tracks = [
  {
    name: "Kidpreneurs Track",
    entry: "Open to Kidpreneurs Camp students",
    description:
      "Built for our youngest entrepreneurs. Kidpreneurs camp students pitch their business ideas in a supportive, beginner-friendly format designed to build confidence and creativity.",
  },
  {
    name: "Venture Lab Track",
    entry: "Open to Venture Lab students",
    description:
      "For students who have been through the full Venture Lab experience. A more rigorous pitch format, deeper feedback from the judging panel, and higher stakes as competitors go head to head.",
  },
];

interface Edition {
  year: Year;
  href: string;
  date: string;
  winners: { placement: string; project: string; team: string }[];
}

// The placed ventures from both past editions, in the order their archive pages
// publish them.
const pastEditions: Edition[] = [
  {
    year: 2025,
    href: "/fish-tank-2025",
    date: "August 2–3, 2025",
    winners: [
      { placement: "1st place", project: "The Better Investor", team: "AbduRahman Yuldash" },
      { placement: "2nd place", project: "MagicPillow", team: "Arjun Singh & Arjun Malhotra" },
      { placement: "3rd place", project: "EverFresh", team: "Saravan & Shanvitha Palakruthi" },
      {
        placement: "4th place",
        project: "Agritech",
        team: "Ohm Patel, Nikhil Naveen, Sai Sirasani & Krish Mittal",
      },
      { placement: "5th place", project: "SGS", team: "Sanvi Das & Ovee Yande" },
    ],
  },
  {
    year: 2024,
    href: "/fish-tank-2024",
    date: "July 24–25, 2024",
    winners: [
      {
        placement: "1st place",
        project: "Garrett's Gourmet Dog Treats",
        team: "Garrett Hauk",
      },
      { placement: "2nd place", project: "ChitChat Lingo", team: "Taksh Taware & Rohan Patwardhan" },
      { placement: "3rd place", project: "Cuisinify", team: "Sara Jayaseelan" },
      { placement: "4th place", project: "ECOVision", team: "Mirav Patel & Mishi Patel" },
      { placement: "5th place", project: "Pathway", team: "Claire Shen & Catherine Shen" },
    ],
  },
];

// ── Page ───────────────────────────────────────────────────────

export default function FishTank2026Page() {
  return (
    <>
      <PageMasthead
        kicker="Fish Tank — 2026"
        title="Fish Tank 2026"
        standfirst="The BizBuzz pitch competition, where students take a business of their own in front of a judging panel. Enrollment is open; the dates and the venue are not announced yet."
        year={2026}
        tags={
          <>
            <Tag variant="year" year={2026}>
              2026
            </Tag>
            <Tag variant="status-open">Enrollment open</Tag>
          </>
        }
      />

      <RailSection index="01" label="What 2026 is">
        <SplitBrief
          facts={
            <dl>
              {competitionStatus.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-baseline justify-between gap-s2 border-b border-rule py-s3 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                    {row.label}
                  </dt>
                  <dd className="font-display text-16 font-medium text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          }
        >
          <h2
            className="text-26 min-[900px]:text-34"
            style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
          >
            Two tracks, one competition
          </h2>
          <p className="mt-s5">
            Fish Tank 2026 runs as two separate tracks, so every competitor pitches against peers
            at their own level. Both are entered through the same form.
          </p>
          {tracks.map((track) => (
            <div key={track.name} className="mt-s7">
              <h3 className="text-26" style={{ fontVariationSettings: "'wdth' 105, 'wght' 600" }}>
                {track.name}
              </h3>
              <p className="mt-s3 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                {track.entry}
              </p>
              <p className="mt-s4">{track.description}</p>
            </div>
          ))}
          <p className="mt-s7">
            The pitch format, the judging panel, the dates and the venue are all still to be set.
            This page would rather say so than post a placeholder. Enrolling now is what puts you
            on the list that hears each of them first.
          </p>
        </SplitBrief>
      </RailSection>

      <RailSection index="02" label="Past winners">
        <h2
          className="text-26 min-[900px]:text-34"
          style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
        >
          Both editions, every venture that placed
        </h2>
        <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
          Fish Tank has run twice. The 2025 edition placed five ventures over two days at
          Benedictine University Goodwin Hall of Business in Lisle; the 2024 edition placed five at
          College of DuPage in Glen Ellyn. Each row opens that year&apos;s archive.
        </p>
        <div className="mt-s7">
          <RecordIndex
            items={pastEditions.flatMap((edition) =>
              edition.winners.map((winner) => ({
                href: edition.href,
                year: edition.year,
                title: `${winner.project} — ${winner.team}`,
                date: `${winner.placement} · ${edition.date}`,
              }))
            )}
          />
        </div>
      </RailSection>

      <InvertedBand
        title="Enroll for Fish Tank 2026"
        standfirst="The form is open now. It is how we reach you with the 2026 dates, the venue and the pitch format the moment they are set."
      >
        <Button href={ENROLLMENT_FORM_URL} external>
          Open the 2026 enrollment form
        </Button>
      </InvertedBand>
    </>
  );
}
