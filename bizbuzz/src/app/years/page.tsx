import data2024 from '@/../data/years/2024.json';
import data2025 from '@/../data/years/2025.json';
import Ledger from '@/components/ui/Ledger';
import PageMasthead from '@/components/ui/PageMasthead';
import RailSection from '@/components/ui/RailSection';
import RecordIndex from '@/components/ui/RecordIndex';
import Tag from '@/components/ui/Tag';
import type { YearData } from '@/types/years';

// Both seasons that have a record on file. 2026 has no record — the file that
// carries that name is a copy of 2024 — so it is not listed here.
const seasons: YearData[] = [data2024 as YearData, data2025 as YearData];

const indexItems = seasons.map((season) => ({
  href: `/years/${season.year}`,
  year: season.year,
  title: `BizBuzz ${season.year}`,
  date: `${season.programs.length} programmes`,
  attendance: `${season.kpis.students.toLocaleString()} students`,
}));

// Counts of what the archive holds, not a restatement of the seasons' own
// figures — those are per-season and are set out on each season's page.
const archiveItems = [
  { label: 'Seasons on file', figure: String(seasons.length) },
  {
    label: 'Programmes recorded',
    figure: String(seasons.reduce((total, season) => total + season.programs.length, 0)),
  },
  {
    label: 'Photographs filed',
    figure: String(seasons.reduce((total, season) => total + (season.gallery?.length ?? 0), 0)),
  },
];

export default function YearsIndexPage() {
  return (
    <div>
      <PageMasthead
        kicker="Archive"
        title="The BizBuzz record"
        standfirst="Every season BizBuzz has run, season by season: the programmes delivered, the figures behind them, and the photographs on file."
        tags={
          seasons.map((season) => (
            <Tag key={season.year} variant="year" year={season.year}>
              {season.year}
            </Tag>
          ))
        }
      />

      <RailSection index="01" label="All years">
        <RecordIndex items={indexItems} />
      </RailSection>

      <RailSection index="02" label="What the archive holds">
        <Ledger items={archiveItems} />
      </RailSection>
    </div>
  );
}
