import type { ReactNode } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import PageMasthead from '@/components/ui/PageMasthead';
import Tag from '@/components/ui/Tag';
import SplitBrief from '@/components/ui/SplitBrief';
import Ledger from '@/components/ui/Ledger';
import InvertedBand from '@/components/ui/InvertedBand';
import Button from '@/components/ui/Button';

const INTEREST_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe_MouwxaWfjA6UeibsY2lrZoZky-n13jffMH7aP1UNiuDGzQ/viewform?usp=preview";

// What this site has actually published about 2027, stated as publication state
// rather than as a plan. Nothing here is a schedule, because there is no schedule.
const campStatus = [
  { label: "Interest form", value: "Open" },
  { label: "2027 dates", value: "Not announced" },
  { label: "2027 sessions", value: "Not announced" },
  { label: "Venue", value: "Not announced" },
  { label: "Most recent season", value: "June 5 – July 10, 2026" },
];

// The 2026 season, as recorded on /camps-2026. No student count appears there,
// so none appears here.
const season2026 = [
  { label: "Sessions run", figure: "12", note: "Six per track" },
  { label: "Tracks", figure: "2", note: "KidPreneur · VentureLab" },
  { label: "Consecutive Fridays", figure: "6", note: "June 5 – July 10, 2026" },
  { label: "Guest speakers", figure: "2", note: "Isha Elandassery · Scott Wehrli" },
];

// ── Section shell ─────────────────────────────────────────────────────────────

interface SectionProps {
  /** Sequential index, e.g. `02`. It is what carries the sequence — not an icon. */
  index: string;
  label: string;
  children: ReactNode;
}

// The left rail: index and label in columns 1–2, content in 3–12. Under 900px the
// rail collapses to a row above its content and the separating rule stays.
function Section({ index, label, children }: SectionProps) {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 gap-s5 border-t border-rule py-s9 min-[900px]:grid-cols-12 min-[900px]:py-s10">
          <p className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted min-[900px]:col-span-2">
            {index} — {label}
          </p>
          <div className="min-[900px]:col-span-10 min-[900px]:col-start-3">{children}</div>
        </div>
      </Container>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Camps2027Page() {
  return (
    <>
      <PageMasthead
        kicker="Camps — 2027"
        title="BizBuzz Camp 2027"
        standfirst="The 2027 season is not scheduled yet. The interest form is open, and the names on it hear the dates first."
        year={2027}
        tags={
          <>
            <Tag variant="year" year={2027}>
              2027
            </Tag>
            <Tag variant="status-open">Open for interest</Tag>
          </>
        }
      />

      <Section index="01" label="What 2027 is">
        <SplitBrief
          facts={
            <dl>
              {campStatus.map((row) => (
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
          <p>
            BizBuzz Camp is a free summer entrepreneurship program run by high school students
            in Naperville for elementary and middle school students. Campers work through
            ideation, finance, marketing, prototyping and public speaking, and finish by
            pitching a business of their own.
          </p>
          <p className="mt-s4">
            Nothing about 2027 is set — no dates, no session list, no venue — and this page
            would rather say so than post a placeholder schedule. What exists is the form.
            Names on it get the 2027 dates and the registration link before either is
            published here.
          </p>
        </SplitBrief>
      </Section>

      <Section index="02" label="What 2026 did">
        <Ledger items={season2026} />
        <div className="mt-s5">
          <Link
            href="/camps-2026"
            className="font-display text-16 font-medium text-ink underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-120 ease-out hover:decoration-accent focus-visible:decoration-accent"
          >
            Every 2026 session, dated and photographed{' '}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <InvertedBand
        title="Add your name for Summer 2027"
        standfirst="The form is open now. It is how we reach you with the 2027 dates, the tracks and the registration link the moment they are set."
      >
        <Button href={INTEREST_FORM_URL}>Open the 2027 interest form</Button>
      </InvertedBand>
    </>
  );
}
