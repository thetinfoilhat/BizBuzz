import type { ReactNode } from 'react';
import Image from 'next/image';
import data2024 from '@/../data/years/2024.json';
import data2025 from '@/../data/years/2025.json';
import LightboxGallery from '@/components/shared/LightboxGallery';
import PressCard from '@/components/shared/PressCard';
import InteractiveTimeline from '@/components/years/InteractiveTimeline';
import Button from '@/components/ui/Button';
import Ledger from '@/components/ui/Ledger';
import PageMasthead from '@/components/ui/PageMasthead';
import Plate from '@/components/ui/Plate';
import RailSection from '@/components/ui/RailSection';
import RecordIndex from '@/components/ui/RecordIndex';
import Tag from '@/components/ui/Tag';
import { formatRecordDate } from '@/lib/dates';
import type { PartnerLogo, ProgramEvent, ProgramKind, Story, YearData } from '@/types/years';

// The two seasons that have a record on file. `data/years/2026.json` is a copy
// of 2024 with the top-level year changed, so it is not registered here and
// /years/2026 is not in the sitemap.
const datasets: Record<string, YearData> = {
  '2024': data2024 as YearData,
  '2025': data2025 as YearData,
};

const indexItems = Object.values(datasets).map((season) => ({
  href: `/years/${season.year}`,
  year: season.year,
  title: `BizBuzz ${season.year}`,
  date: `${season.programs.length} programmes`,
  attendance: `${season.kpis.students.toLocaleString()} students`,
}));

const KIND_LABEL: Record<ProgramKind, string> = {
  camp: 'Camp',
  workshop: 'Workshop',
  'fish-tank': 'Fish Tank',
};

const ROLE_LABEL: Record<Story['role'], string> = {
  student: 'Student',
  mentor: 'Mentor',
  judge: 'Judge',
  partner: 'Partner',
};

function padIndex(value: number): string {
  return String(value).padStart(2, '0');
}

// ── Programmes ────────────────────────────────────────────────────────────────

interface ProgrammeRowsProps {
  programmes: ProgramEvent[];
}

const ProgrammeRows = ({ programmes }: ProgrammeRowsProps) => (
  <ol className="border-t border-rule">
    {programmes.map((programme, index) => (
      <li key={programme.id} className="border-b border-rule py-s6">
        <div className="grid grid-cols-1 gap-s3 min-[900px]:grid-cols-12 min-[900px]:gap-s5">
          <p className="font-mono text-12 font-medium tracking-[0.08em] text-ink-muted min-[900px]:col-span-1">
            {padIndex(index + 1)}
          </p>
          <div className="min-[900px]:col-span-11">
            <h3
              className="text-21 min-[900px]:text-26"
              style={{ fontVariationSettings: "'wdth' 105, 'wght' 600" }}
            >
              {programme.title}
            </h3>
            <p className="mt-s3 flex flex-wrap gap-x-s4 gap-y-s1 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
              <span>{formatRecordDate(programme.dateISO)}</span>
              {programme.venue && <span>{programme.venue}</span>}
              {programme.attendance !== undefined && (
                <span>{programme.attendance} attending</span>
              )}
            </p>
            {programme.description && (
              <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
                {programme.description}
              </p>
            )}
            <p className="mt-s4">
              <Tag variant="program">{KIND_LABEL[programme.kind]}</Tag>
            </p>
          </div>
        </div>
      </li>
    ))}
  </ol>
);

// ── Stories ───────────────────────────────────────────────────────────────────

interface StoryPlatesProps {
  stories: Story[];
}

const StoryPlates = ({ stories }: StoryPlatesProps) => (
  <ul className="grid grid-cols-1 gap-s9 min-[900px]:grid-cols-2">
    {stories.map((story) => (
      <li key={story.id}>
        {story.image && (
          <Plate
            src={story.image}
            alt={story.name ?? story.headline}
            ratio="3:2"
            caption={story.name ? `${story.name} · ${ROLE_LABEL[story.role]}` : ROLE_LABEL[story.role]}
            sizes="(min-width: 900px) 45vw, 90vw"
          />
        )}
        <h3
          className="mt-s7 text-21 min-[900px]:text-26"
          style={{ fontVariationSettings: "'wdth' 105, 'wght' 600" }}
        >
          {story.headline}
        </h3>
        <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">{story.body}</p>
      </li>
    ))}
  </ul>
);

// ── Partners ──────────────────────────────────────────────────────────────────

interface PartnerCellsProps {
  partners: PartnerLogo[];
}

// A partner without a mark on file is set as text. Rendering someone else's
// logo under this name is worse than rendering no logo at all.
const PartnerCells = ({ partners }: PartnerCellsProps) => (
  <ul className="grid grid-cols-1 gap-px border border-rule bg-rule min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
    {partners.map((partner) => (
      <li key={partner.name} className="flex flex-col gap-s4 bg-paper p-s5">
        {partner.logo && (
          <span className="relative block h-s10">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              sizes="(min-width: 900px) 30vw, (min-width: 600px) 45vw, 90vw"
              className="object-contain object-left"
            />
          </span>
        )}
        <p className="mt-auto font-display text-16 font-medium text-ink">
          {partner.href ? (
            <a
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-120 ease-out hover:decoration-accent focus-visible:decoration-accent"
            >
              {partner.name}
              <span aria-hidden="true"> ↗</span>
            </a>
          ) : (
            partner.name
          )}
        </p>
      </li>
    ))}
  </ul>
);

// ── Page ──────────────────────────────────────────────────────────────────────

interface ArchiveSection {
  /** Anchor the rest of the site links to. */
  id?: string;
  label: string;
  content: ReactNode;
}

interface YearPageProps {
  params: Promise<{ year: string }>;
}

export default async function YearPage({ params }: YearPageProps) {
  const { year } = await params;
  const data = datasets[year];

  if (!data) {
    return (
      <div>
        <PageMasthead
          kicker="Archive"
          title="No record on file"
          standfirst="The archive holds the 2024 and 2025 seasons. Nothing is filed under the year you asked for."
        />
        <RailSection index="01" label="All years">
          <RecordIndex items={indexItems} />
          <div className="mt-s7">
            <Button variant="secondary" href="/years">
              All years →
            </Button>
          </div>
        </RailSection>
      </div>
    );
  }

  const gallery = data.gallery ?? [];
  const timeline = data.timeline ?? [];
  const stories = data.stories ?? [];
  const partners = data.partners ?? [];
  const press = data.press ?? [];
  const programmes = [...data.programs].sort((a, b) => a.dateISO.localeCompare(b.dateISO));

  // Only figures the season actually recorded. `pressMentions` is not among
  // them: the count in the data is not backed by the linked coverage below.
  const ledgerItems = [
    { label: 'Students', figure: data.kpis.students.toLocaleString() },
    { label: 'Schools', figure: String(data.kpis.schools) },
    { label: 'Programmes', figure: String(data.kpis.programsRun) },
    { label: 'Sessions', figure: String(data.kpis.sessions) },
    { label: 'Attendance', figure: data.kpis.attendance.toLocaleString() },
    ...(data.kpis.dollarsRaised === undefined
      ? []
      : [{ label: 'Raised', figure: `$${data.kpis.dollarsRaised.toLocaleString()}` }]),
    ...(data.kpis.volunteers === undefined
      ? []
      : [{ label: 'Volunteers', figure: String(data.kpis.volunteers) }]),
  ];

  const sections: ArchiveSection[] = [
    { label: 'All years', content: <RecordIndex items={indexItems} /> },
    { label: 'The record', content: <Ledger items={ledgerItems} /> },
    {
      id: 'programs',
      label: 'Programmes',
      content: <ProgrammeRows programmes={programmes} />,
    },
    {
      id: 'gallery',
      label: 'Photographs',
      content:
        gallery.length > 0 ? (
          <LightboxGallery images={gallery} />
        ) : (
          <p className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
            No photographs are on file for the {data.year} season.
          </p>
        ),
    },
    ...(timeline.length === 0
      ? []
      : [
          {
            id: 'timeline',
            label: 'Timeline',
            content: <InteractiveTimeline items={timeline} />,
          },
        ]),
    ...(stories.length === 0
      ? []
      : [{ label: 'Stories', content: <StoryPlates stories={stories} /> }]),
    ...(press.length === 0
      ? []
      : [
          {
            label: 'Press',
            content: (
              <ul className="border-t border-rule">
                {press.map((item) => (
                  <PressCard key={item.href} item={item} />
                ))}
              </ul>
            ),
          },
        ]),
    ...(partners.length === 0
      ? []
      : [{ label: 'Partners', content: <PartnerCells partners={partners} /> }]),
  ];

  return (
    <div>
      <PageMasthead
        kicker="Archive"
        title={`BizBuzz ${data.year}`}
        standfirst={data.summary}
        year={data.year}
        tags={
          <>
            <Tag variant="status-archive">Archive</Tag>
            <Tag variant="year" year={data.year}>
              {data.year}
            </Tag>
          </>
        }
      />

      {sections.map((section, index) => (
        <div key={section.label} id={section.id}>
          <RailSection index={padIndex(index + 1)} label={section.label}>
            {section.content}
          </RailSection>
        </div>
      ))}
    </div>
  );
}
