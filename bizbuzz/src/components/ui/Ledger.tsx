interface LedgerItem {
  label: string;
  figure: string;
  note?: string;
}

interface LedgerProps {
  items: LedgerItem[];
  /** 60px figures instead of 44px — the home ledger only. */
  large?: boolean;
}

// A ruled band of facts. The hairline verticals are the 1px gaps between cells;
// the rule under the group is the bottom border. Figures never animate.
export default function Ledger({ items, large = false }: LedgerProps) {
  return (
    <dl className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px border-b border-rule bg-rule">
      {items.map((item) => (
        <div key={item.label} className="bg-paper px-s4 py-s5">
          <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
            {item.label}
          </dt>
          <dd className="mt-s2">
            <span
              data-figure=""
              className={`block text-ink ${large ? 'text-60' : 'text-44'}`}
              style={{ fontVariationSettings: "'wdth' 112, 'wght' 600" }}
            >
              {item.figure}
            </span>
            {item.note && (
              <span className="mt-s2 block font-mono text-12 font-medium tracking-[0.08em] text-ink-muted">
                {item.note}
              </span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
