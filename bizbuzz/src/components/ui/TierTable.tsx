interface TierTableRow {
  tier: string;
  amount: string;
  recognition: string;
}

interface TierTableProps {
  caption: string;
  columns: { tier: string; amount: string; recognition: string };
  rows: TierTableRow[];
}

// A real table: caption, column headers, row headers. Amounts are tabular.
export default function TierTable({ caption, columns, rows }: TierTableProps) {
  return (
    <table className="w-full border-collapse">
      <caption className="mb-s4 text-left font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
        {caption}
      </caption>
      <thead>
        <tr className="border-b border-rule">
          <th scope="col" className="py-s3 pr-s4 text-left text-16 font-medium text-ink">
            {columns.tier}
          </th>
          <th scope="col" className="py-s3 pr-s4 text-left text-16 font-medium text-ink">
            {columns.amount}
          </th>
          <th scope="col" className="py-s3 text-left text-16 font-medium text-ink">
            {columns.recognition}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.tier} className="border-b border-rule even:bg-fill-soft">
            <th scope="row" className="py-s3 pr-s4 align-top text-left text-16 font-medium text-ink">
              {row.tier}
            </th>
            <td data-figure="" className="py-s3 pr-s4 align-top text-16 text-ink-2">
              {row.amount}
            </td>
            <td className="py-s3 align-top font-display text-16 text-ink-2">{row.recognition}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
