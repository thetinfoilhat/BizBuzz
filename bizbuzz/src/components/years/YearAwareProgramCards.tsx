"use client";

import { useState } from "react";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { YEARS } from "@/lib/years";
import type { Year } from "@/lib/years";

type SeasonYear = Exclude<Year, 2027>;

interface Program {
  title: string;
  description: string;
  href: string;
  /** Mono facts line. Every figure here is published on the linked page. */
  facts: string[];
  /** Only where the linked page actually publishes a status. */
  status?: { variant: "status-open" | "status-archive"; label: string };
}

const seasonOrder: readonly SeasonYear[] = [2024, 2025, 2026];

// Office hours are not year-scoped — the booking page has been open throughout,
// so the same record belongs to every season.
const officeHours: Program = {
  title: "1:1 Office Hours",
  description:
    "A one-on-one slot for feedback on a business idea: online over Google Meet on weekdays, in person at a Naperville library on weekends.",
  href: "/sessions",
  facts: ["Free", "Online or in person", "By appointment"],
  status: { variant: "status-open", label: "Open" },
};

const programsByYear: Record<SeasonYear, Program[]> = {
  2024: [
    {
      title: "Summer Camp",
      description:
        "Six free weekly sessions from June 12 to July 17, 2024, across two Naperville libraries. Seven guest speakers, and 110 students taking an idea from ideation through marketing, finance and public speaking to a Fish Tank pitch.",
      href: "/camps-2024",
      facts: ["6 sessions", "7 guest speakers", "110 students"],
      status: { variant: "status-archive", label: "Archive" },
    },
    {
      title: "Fish Tank",
      description:
        "The first edition, over two days at College of DuPage in Glen Ellyn, where 3rd–9th grade students from across Chicagoland pitched businesses of their own to eleven judges for $750 in prizes.",
      href: "/fish-tank-2024",
      facts: ["July 24–25, 2024", "80+ competitors", "11 judges"],
      status: { variant: "status-archive", label: "Archive" },
    },
    {
      title: "Workshops",
      description:
        "Six programmes taken into elementary and middle schools, a learning centre and the Naperville Children's Business Fair between May and December 2024.",
      href: "/workshops",
      facts: ["6 programmes", "13 sessions", "530 students"],
      status: { variant: "status-archive", label: "Archive" },
    },
    officeHours,
  ],
  2025: [
    {
      title: "Summer Camp",
      description:
        "Seven free sessions at the 95th Street Library from June 6 to July 25, 2025, with five guest speakers including Shark Tank alum Lindsey Fleischhauer and Naperville Mayor Scott Wehrli. 120 students took part.",
      href: "/camps-2025",
      facts: ["7 sessions", "5 guest speakers", "120 students"],
      status: { variant: "status-archive", label: "Archive" },
    },
    {
      title: "Fish Tank",
      description:
        "The second edition, over two days at Benedictine University Goodwin Hall of Business in Lisle: 70+ competitors, twelve finalists, eleven judges and five placed teams.",
      href: "/fish-tank-2025",
      facts: ["August 2–3, 2025", "70+ competitors", "11 judges"],
      status: { variant: "status-archive", label: "Archive" },
    },
    {
      title: "Workshops",
      description:
        "Two programmes in 2025: the DuPage Children's Business Fair workshop series in the spring, and the Naperville Children's Business Fair in August.",
      href: "/workshops",
      facts: ["2 programmes", "5 sessions", "180 students"],
      status: { variant: "status-archive", label: "Archive" },
    },
    officeHours,
  ],
  2026: [
    {
      title: "Summer Camp",
      description:
        "Two free tracks running side by side — KidPreneur Camp and VentureLab — across six consecutive Fridays from June 5 to July 10, 2026, at two Naperville libraries. Guest speakers were Isha Elandassery and Naperville Mayor Scott Wehrli.",
      href: "/camps-2026",
      facts: ["12 sessions", "2 tracks", "2 guest speakers"],
      status: { variant: "status-archive", label: "Season complete" },
    },
    {
      title: "Fish Tank",
      description:
        "The 2026 pitch competition, running a Kidpreneurs track and a Venture Lab track. The enrollment form is open; the dates and the venue are not announced yet.",
      href: "/fish-tank-2026",
      facts: ["Dates not announced", "Kidpreneurs track", "Venture Lab track"],
      status: { variant: "status-open", label: "Enrollment open" },
    },
    {
      title: "Workshops",
      description:
        "No 2026 workshop is on the record yet. The archive runs from May 2024 to August 2025 — eight programmes, eighteen sessions and 710 students — and schools can still write to ask for one.",
      href: "/workshops",
      facts: ["8 programmes", "18 sessions", "710 students"],
    },
    officeHours,
  ],
};

// ── Programme record ───────────────────────────────────────────

interface ProgramRowProps {
  program: Program;
  index: number;
}

const ProgramRow = ({ program, index }: ProgramRowProps) => (
  <li className="border-b border-rule">
    <Link
      href={program.href}
      className="group relative flex flex-col gap-s3 bg-paper py-s5 pl-s5 pr-s2 transition-colors duration-120 ease-out hover:bg-panel focus-visible:bg-panel min-[900px]:flex-row min-[900px]:gap-s5"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[var(--rule-accent-w)] transition-colors duration-120 ease-out group-hover:bg-accent group-focus-visible:bg-accent"
      />
      <span className="shrink-0 font-mono text-12 font-medium tracking-[0.08em] text-ink-muted min-[900px]:w-s9">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-s3">
          <h3 className="text-26" style={{ fontVariationSettings: "'wdth' 105, 'wght' 600" }}>
            {program.title}
          </h3>
          {program.status && <Tag variant={program.status.variant}>{program.status.label}</Tag>}
        </div>
        <p className="mt-s3 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
          {program.facts.join(" · ")}
        </p>
        <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">{program.description}</p>
      </div>
      <span aria-hidden="true" className="shrink-0 font-mono text-12 text-ink-2">
        →
      </span>
    </Link>
  </li>
);

// ── Section ────────────────────────────────────────────────────

export default function YearAwareProgramCards() {
  const [selectedYear, setSelectedYear] = useState<SeasonYear>(2026);

  return (
    <>
      <h2
        className="text-26 min-[900px]:text-34"
        style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
      >
        Four programmes, one season at a time
      </h2>
      <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
        Every programme is free. Choose a season to read what ran that year and where it is
        written up.
      </p>
      <div role="group" aria-label="Season" className="mt-s5 flex flex-wrap gap-s2">
        {seasonOrder.map((year) => (
          <button
            key={year}
            type="button"
            aria-pressed={selectedYear === year}
            onClick={() => setSelectedYear(year)}
            className={`inline-flex items-center gap-s2 rounded-control border border-rule px-s5 py-s3 font-display text-16 font-medium transition-colors duration-120 ease-out ${
              selectedYear === year ? "bg-ink text-on-ink" : "bg-paper text-ink hover:bg-panel"
            }`}
          >
            <span
              aria-hidden="true"
              className="h-s2 w-s2 shrink-0 rounded-none"
              style={{ backgroundColor: `var(${YEARS[year].cssVar})` }}
            />
            {year}
          </button>
        ))}
      </div>
      <ol className="mt-s7 border-t border-rule">
        {programsByYear[selectedYear].map((program, index) => (
          <ProgramRow key={program.title} program={program} index={index} />
        ))}
      </ol>
    </>
  );
}
