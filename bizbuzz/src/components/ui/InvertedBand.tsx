import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';

interface InvertedBandProps {
  title: string;
  standfirst?: string;
  /** The primary call to action. */
  children: ReactNode;
}

// The one inverted surface, at most once per route. Supporting copy is
// --on-ink-muted at 5.98:1; there is no lower-opacity white to reach for.
export default function InvertedBand({ title, standfirst, children }: InvertedBandProps) {
  return (
    <section className="bg-ink">
      <Container>
        <div className="grid grid-cols-1 gap-s5 py-s9 min-[900px]:grid-cols-12 min-[900px]:py-s10">
          <div className="min-[900px]:col-span-8">
            <h2
              className="text-34 text-on-ink"
              style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
            >
              {title}
            </h2>
            {standfirst && (
              <p className="mt-s5 max-w-measure font-prose text-21 text-on-ink-muted">
                {standfirst}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-start gap-s4 min-[900px]:col-span-4 min-[900px]:justify-end">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
