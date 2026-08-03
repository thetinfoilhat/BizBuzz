"use client";

import { useState } from 'react';
import { formatRecordDate } from '@/lib/dates';
import type { TimelineItem } from '@/types/years';

interface InteractiveTimelineProps {
  items: TimelineItem[];
}

interface TimelineRowProps {
  item: TimelineItem;
  index: number;
  expanded: boolean;
}

const ROW_CLASS =
  'group relative flex w-full flex-wrap items-baseline gap-x-s4 gap-y-s2 bg-paper py-s3 pl-s4 pr-s2 text-left';

// The row reads the same whether or not it discloses anything; only its wrapper
// changes, so an item without a detail never gets a control that does nothing.
const TimelineRow = ({ item, index, expanded }: TimelineRowProps) => (
  <>
    <span className="font-mono text-12 font-medium tracking-[0.08em] text-ink-muted">
      {String(index + 1).padStart(2, '0')}
    </span>
    <span className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
      {formatRecordDate(item.dateISO)}
    </span>
    <span className="min-w-0 flex-1 font-display text-16 font-medium text-ink">{item.label}</span>
    {item.detail && (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className={`h-s4 w-s4 shrink-0 text-ink-2 transition-transform duration-200 ease-out ${
          expanded ? 'rotate-180' : ''
        }`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    )}
  </>
);

// A dated rail list of the season's record. The detail panel is a CSS grid-row
// collapse rather than a measured height, so the reduced-motion base rule
// switches it off without any JS branch.
export default function InteractiveTimeline({ items }: InteractiveTimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <ol className="border-t border-rule">
      {items.map((item, index) => {
        const expanded = expandedId === item.id;

        return (
          <li key={item.id} className="border-b border-rule">
            {item.detail ? (
              <>
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setExpandedId(expanded ? null : item.id)}
                  className={`${ROW_CLASS} transition-colors duration-120 ease-out hover:bg-panel focus-visible:bg-panel`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[var(--rule-accent-w)] transition-colors duration-120 ease-out group-hover:bg-accent group-focus-visible:bg-accent"
                  />
                  <TimelineRow item={item} index={index} expanded={expanded} />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-measure pb-s4 pl-s4 pr-s2 font-prose text-18 text-ink-2">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className={ROW_CLASS}>
                <TimelineRow item={item} index={index} expanded={false} />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
