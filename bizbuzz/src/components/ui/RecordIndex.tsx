import Link from 'next/link';
import Tag from '@/components/ui/Tag';
import type { Year } from '@/lib/years';

interface RecordIndexItem {
  href: string;
  year: Year;
  title: string;
  date: string;
  attendance?: string;
}

interface RecordIndexProps {
  items: RecordIndexItem[];
}

// One line per record: year chip · title · date · attendance · →. Rows are real
// links, so they are keyboard focusable and the hover treatment is also a focus
// treatment: background paper → panel and the left rule turns amber.
export default function RecordIndex({ items }: RecordIndexProps) {
  return (
    <ul className="border-t border-rule">
      {items.map((item) => (
        <li key={item.title} className="border-b border-rule">
          <Link
            href={item.href}
            className="group relative flex flex-wrap items-baseline gap-x-s4 gap-y-s2 bg-paper py-s3 pl-s4 pr-s2 transition-colors duration-120 ease-out hover:bg-panel focus-visible:bg-panel"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[var(--rule-accent-w)] transition-colors duration-120 ease-out group-hover:bg-accent group-focus-visible:bg-accent"
            />
            <Tag variant="year" year={item.year}>
              {item.year}
            </Tag>
            <span className="min-w-0 flex-1 font-display text-16 font-medium text-ink">
              {item.title}
            </span>
            <span className="flex w-full items-baseline gap-s4 font-mono text-12 font-medium tracking-[0.08em] text-ink-muted min-[900px]:w-auto">
              <span>{item.date}</span>
              {item.attendance && <span>{item.attendance}</span>}
              <span aria-hidden="true" className="ml-auto text-ink-2 min-[900px]:ml-0">
                →
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
