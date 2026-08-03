import type { ReactNode } from 'react';

interface SplitBriefProps {
  /** Prose. It sits in the wide column and holds its measure. */
  children: ReactNode;
  /** The ruled facts panel in the narrow column. */
  facts: ReactNode;
  split?: '7/5' | '8/4';
}

// Asymmetric only. 6/6 is not expressible, which is the point.
const SPLIT_CLASS: Record<NonNullable<SplitBriefProps['split']>, { wide: string; narrow: string }> = {
  '7/5': { wide: 'min-[900px]:col-span-7', narrow: 'min-[900px]:col-span-5' },
  '8/4': { wide: 'min-[900px]:col-span-8', narrow: 'min-[900px]:col-span-4' },
};

export default function SplitBrief({ children, facts, split = '7/5' }: SplitBriefProps) {
  const columns = SPLIT_CLASS[split];

  return (
    <div className="grid grid-cols-1 gap-s5 min-[900px]:grid-cols-12">
      <div className={`max-w-measure font-prose text-18 text-ink-2 ${columns.wide}`}>{children}</div>
      <aside className={`border border-rule bg-panel p-s5 ${columns.narrow}`}>{facts}</aside>
    </div>
  );
}
