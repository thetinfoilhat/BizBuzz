import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';

interface RailSectionProps {
  /** Sequential index, e.g. `03`. It is what carries the sequence — not an icon. */
  index: string;
  label: string;
  children: ReactNode;
  /** Constrain content to columns 3–10 so prose holds its measure. */
  narrow?: boolean;
}

// The left rail: index and label in columns 1–2, content in 3–12. Under 900px
// the rail collapses to a row above the content and the separating rule stays.
export default function RailSection({ index, label, children, narrow = false }: RailSectionProps) {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 gap-s5 border-t border-rule py-s9 min-[900px]:grid-cols-12 min-[900px]:py-s10">
          <p className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted min-[900px]:col-span-2">
            {index} — {label}
          </p>
          <div
            className={
              narrow
                ? 'min-[900px]:col-span-8 min-[900px]:col-start-3'
                : 'min-[900px]:col-span-10 min-[900px]:col-start-3'
            }
          >
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
