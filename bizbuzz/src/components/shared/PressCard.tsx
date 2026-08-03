import { formatRecordDate } from '@/lib/dates';
import type { PressItem } from '@/types/years';

interface PressCardProps {
  item: PressItem;
}

// One press record per row — outlet · headline · date · ↗ — inside the caller's
// ruled list. Coverage always sits on someone else's site, so the row is always
// an external link and says so with the arrow rather than with an icon set.
export default function PressCard({ item }: PressCardProps) {
  return (
    <li className="border-b border-rule">
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-wrap items-baseline gap-x-s4 gap-y-s2 bg-paper py-s3 pl-s4 pr-s2 transition-colors duration-120 ease-out hover:bg-panel focus-visible:bg-panel"
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[var(--rule-accent-w)] transition-colors duration-120 ease-out group-hover:bg-accent group-focus-visible:bg-accent"
        />
        <span className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
          {item.outlet}
        </span>
        <span className="min-w-0 flex-1 font-display text-16 font-medium text-ink">
          {item.headline}
        </span>
        <span className="flex w-full items-baseline gap-s4 font-mono text-12 font-medium tracking-[0.08em] text-ink-muted min-[900px]:w-auto">
          {item.dateISO && <span>{formatRecordDate(item.dateISO)}</span>}
          <span aria-hidden="true" className="ml-auto text-ink-2 min-[900px]:ml-0">
            ↗
          </span>
        </span>
      </a>
    </li>
  );
}
