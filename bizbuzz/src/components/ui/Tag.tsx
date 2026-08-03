import type { ReactNode } from 'react';
import { YEARS } from '@/lib/years';
import type { Year } from '@/lib/years';

type TagVariant = 'program' | 'year' | 'status-open' | 'status-upcoming' | 'status-archive';

// Five variants, and no sixth. `year` carries the square chip, so it needs a year.
type TagProps =
  | { variant: Exclude<TagVariant, 'year'>; children: ReactNode }
  | { variant: 'year'; year: Year; children: ReactNode };

const VARIANT_CLASS: Record<TagVariant, string> = {
  program: 'text-ink-2',
  year: 'text-ink-2',
  'status-open': 'bg-accent text-ink',
  'status-upcoming': 'bg-ink text-on-ink',
  'status-archive': 'bg-fill-soft text-ink-muted',
};

export default function Tag(props: TagProps) {
  const { variant, children } = props;

  return (
    <span
      className={`inline-flex items-center gap-s2 rounded-control border border-rule px-s2 py-s1 font-mono text-12 font-medium uppercase tracking-[0.08em] ${VARIANT_CLASS[variant]}`}
    >
      {props.variant === 'year' && (
        <span
          aria-hidden="true"
          className="h-s2 w-s2 shrink-0 rounded-none"
          style={{ backgroundColor: `var(${YEARS[props.year].cssVar})` }}
        />
      )}
      {children}
    </span>
  );
}
