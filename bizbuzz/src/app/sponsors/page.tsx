import Link from 'next/link';
import Button from '@/components/ui/Button';
import InvertedBand from '@/components/ui/InvertedBand';
import Ledger from '@/components/ui/Ledger';
import PageMasthead from '@/components/ui/PageMasthead';
import RailSection from '@/components/ui/RailSection';
import Tag from '@/components/ui/Tag';
import TierTable from '@/components/ui/TierTable';

type Tier = "gold" | "silver" | "bronze";

type Sponsor = {
  name: string;
  logo: string;
  amount: number;
  year: string;
  date?: string;
};

const SPONSORS: Sponsor[] = [
  // ── 2026 ──
  { name: "Hiren Patel", logo: "/sponsors/hirenpatel.png", amount: 2000, year: "2026" },
  {
    name: "Right Choice Dental Care",
    logo: "/sponsors/rightchoicedentalcare.png",
    amount: 1000,
    year: "2026",
  },
  {
    name: "Teen Philanthropy Initiative",
    logo: "/sponsors/teenphilanthropyinstitute.png",
    amount: 750,
    year: "2026",
  },
  { name: "Nara Rosie", logo: "/sponsors/nararosie.png", amount: 200, year: "2026" },
  {
    name: "Elite Tutoring Place",
    logo: "/sponsors/elitetutoringplace.jpg",
    amount: 100,
    year: "2026",
  },
  {
    name: "Office Furniture Solutions",
    logo: "/sponsors/officefurnituresolutions.png",
    amount: 100,
    year: "2026",
  },
  // ── 2025 ──
  {
    name: "Right Choice Dental Care",
    logo: "/sponsors/rightchoicedentalcare.png",
    amount: 1500,
    year: "2025",
    date: "May 18 & June 8, 2025",
  },
  { name: "AT&T", logo: "/sponsors/at&t.png", amount: 1000, year: "2025", date: "April 1, 2025" },
  {
    name: "Teen Philanthropy Initiative",
    logo: "/sponsors/teenphilanthropyinstitute.png",
    amount: 1000,
    year: "2025",
    date: "April 20, 2025",
  },
  {
    name: "Kabat American",
    logo: "/sponsors/kabatamerican.jpg",
    amount: 1000,
    year: "2025",
    date: "May 13, 2025",
  },
  {
    name: "Costco",
    logo: "/sponsors/costco.png",
    amount: 100,
    year: "2025",
    date: "May 13, 2025",
  },
  // ── 2024 ──
  {
    name: "Kabat American",
    logo: "/sponsors/kabatamerican.jpg",
    amount: 1000,
    year: "2024",
    date: "May 28, 2024",
  },
  {
    name: "Midwest Badminton",
    logo: "/sponsors/midwestbadminton.png",
    amount: 1000,
    year: "2024",
    date: "July 13, 2024",
  },
  {
    name: "Conference Planning Resources",
    logo: "/sponsors/conferenceplanningresources.jpg",
    amount: 250,
    year: "2024",
    date: "June 10, 2024",
  },
  {
    name: "SteamDream Team",
    logo: "/sponsors/steamdreamteam.png",
    amount: 150,
    year: "2024",
    date: "July 25, 2024",
  },
  {
    name: "Samantha Zylstra & Associates, LLC",
    logo: "/sponsors/samanthazylstra.jpeg",
    amount: 100,
    year: "2024",
    date: "June 10, 2024",
  },
  {
    name: "Elite Tutoring Place",
    logo: "/sponsors/elitetutoringplace.jpg",
    amount: 100,
    year: "2024",
    date: "June 10, 2024",
  },
  {
    name: "Best Brains",
    logo: "/sponsors/bestbrains.png",
    amount: 100,
    year: "2024",
    date: "June 13, 2024",
  },
  {
    name: "Costco",
    logo: "/sponsors/costco.png",
    amount: 100,
    year: "2024",
    date: "June 18, 2024",
  },
  {
    name: "Center for Future Innovators Inc.",
    logo: "/sponsors/centerforfutureinnovators.jpg",
    amount: 100,
    year: "2024",
    date: "June 18, 2024",
  },
  {
    name: "Naper Nuts & Sweets",
    logo: "/sponsors/napernutsandsweets.png",
    amount: 100,
    year: "2024",
    date: "July 10, 2024",
  },
];

// The published totals. The pair sums to the total exactly, and both figures are
// the ones stated on /about.
const funding = [
  { label: "Total raised", figure: "$15,100", note: "Since 2024" },
  { label: "Monetary funding", figure: "$12,062" },
  { label: "In-kind donations", figure: "$3,038" },
];

// The two tier boundaries, declared once. `tierOf` sorts by them and the
// published range labels are written from them, so a label cannot advertise a
// threshold the sort does not honour — the tiers carry different perks, so a
// drifting label is a money claim, not a typo.
const GOLD_MIN = 1000;
const SILVER_MIN = 250;

function formatAmount(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

function tierOf(amount: number): Tier {
  if (amount >= GOLD_MIN) return "gold";
  if (amount >= SILVER_MIN) return "silver";
  return "bronze";
}

const TIER_META: Record<Tier, { label: string; range: string; recognition: string }> = {
  gold: {
    label: "Gold",
    range: `${formatAmount(GOLD_MIN)} and above`,
    recognition:
      "Everything in Silver, plus a booth at the Fish Tank competition and t-shirt recognition on the following year's BizBuzz shirt.",
  },
  silver: {
    label: "Silver",
    range: `${formatAmount(SILVER_MIN)} – ${formatAmount(GOLD_MIN - 1)}`,
    recognition:
      "Everything in Bronze, plus a speaking opportunity at Fish Tank and an invitation to our picnic.",
  },
  bronze: {
    label: "Bronze",
    range: `Under ${formatAmount(SILVER_MIN)}`,
    recognition:
      "Distribution of your promotional materials at our events and a feature on the BizBuzz website.",
  },
};

const TIER_ORDER: Tier[] = ["gold", "silver", "bronze"];

function groupByTier(sponsors: Sponsor[]): Record<Tier, Sponsor[]> {
  const groups: Record<Tier, Sponsor[]> = { gold: [], silver: [], bronze: [] };
  for (const s of sponsors) groups[tierOf(s.amount)].push(s);
  for (const t of TIER_ORDER) {
    groups[t].sort((a, b) => b.amount - a.amount || b.year.localeCompare(a.year));
  }
  return groups;
}

// ── Sponsor mark ───────────────────────────────────────────────

interface SponsorMarkProps {
  sponsor: Sponsor;
  index: string;
}

// A fixed cell, never a moving one. The mark sits in a ruled frame of constant
// height and the caption sits under it; no text is ever set over a mark.
const SponsorMark = ({ sponsor, index }: SponsorMarkProps) => (
  <li>
    <figure>
      <div className="flex h-s11 items-center justify-center border border-rule bg-panel p-s5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          className="max-h-full max-w-full bg-panel object-contain"
        />
      </div>
      <figcaption className="mt-s2">
        <p className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
          {index} · {sponsor.date ?? sponsor.year}
        </p>
        <p className="mt-s1 break-words font-display text-16 font-medium text-ink">
          {sponsor.name}
        </p>
        <p
          data-figure=""
          className="mt-s1 text-21 text-ink"
          style={{ fontVariationSettings: "'wdth' 112, 'wght' 600" }}
        >
          {formatAmount(sponsor.amount)}
        </p>
      </figcaption>
    </figure>
  </li>
);

// ── Page ───────────────────────────────────────────────────────

export default function SponsorsPage() {
  const grouped = groupByTier(SPONSORS);

  return (
    <div>
      <PageMasthead
        kicker="Sponsors"
        title="Who pays for a free camp"
        standfirst="What BizBuzz has raised since 2024, what a sponsorship at each tier includes, and every name already on the record."
        tags={
          <>
            <Tag variant="year" year={2024}>
              2024
            </Tag>
            <Tag variant="year" year={2025}>
              2025
            </Tag>
            <Tag variant="year" year={2026}>
              2026
            </Tag>
          </>
        }
      />

      <RailSection index="01" label="The ledger">
        <Ledger items={funding} />
        <p className="mt-s5 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
          501(c)(3) status pending
        </p>
        <p className="mt-s5">
          <Link
            href="/about"
            className="font-display text-16 font-medium text-ink underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-120 ease-out hover:decoration-accent focus-visible:decoration-accent"
          >
            The full funding record <span aria-hidden="true">→</span>
          </Link>
        </p>
      </RailSection>

      <div id="perks" className="scroll-mt-s9">
        <RailSection index="02" label="Sponsorship tiers">
          <TierTable
            caption="Published recognition at each sponsorship tier"
            columns={{ tier: "Tier", amount: "Contribution", recognition: "What it includes" }}
            rows={TIER_ORDER.map((tier) => ({
              tier: TIER_META[tier].label,
              amount: TIER_META[tier].range,
              recognition: TIER_META[tier].recognition,
            }))}
          />
        </RailSection>
      </div>

      <RailSection index="03" label="Every sponsor">
        {TIER_ORDER.map((tier) => {
          const meta = TIER_META[tier];
          const list = grouped[tier];
          return (
            <div key={tier} className="mt-s7 first:mt-0">
              <h2 className="text-26" style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}>
                {meta.label}
              </h2>
              <p className="mt-s2 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                {meta.range}
              </p>
              {list.length === 0 ? (
                <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
                  No sponsorship recorded at this tier yet.
                </p>
              ) : (
                <ul className="mt-s4 grid grid-cols-1 gap-s5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
                  {list.map((sponsor, i) => (
                    <SponsorMark
                      key={`${sponsor.name}-${sponsor.year}`}
                      sponsor={sponsor}
                      index={`${String(i + 1).padStart(2, "0")} / ${list.length}`}
                    />
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </RailSection>

      <InvertedBand
        title="Become a sponsor"
        standfirst="A sponsorship funds camp venues, materials and Fish Tank prizes for elementary and middle school students across Chicagoland."
      >
        <Button href="mailto:bizbuzznfp@gmail.com?subject=Sponsorship Inquiry" onInk>
          Email us about sponsorship
        </Button>
      </InvertedBand>
    </div>
  );
}
