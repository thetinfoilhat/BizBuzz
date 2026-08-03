"use client";

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import Container from '@/components/ui/Container';
import { YEARS } from '@/lib/years';
import type { Year } from '@/lib/years';

interface PageMastheadProps {
  kicker: string;
  title: string;
  standfirst?: string;
  tags?: ReactNode;
  /** Colours the rule with the year marker instead of the accent. */
  year?: Year;
}

const EASE_DRAW: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DURATION_DRAW = 0.42;

// The one authored motion moment on the site: the top edge of the record is
// drawn, then the record arrives. It fires once, above the fold, and nothing
// below the fold on any route has an entrance animation.
export default function PageMasthead({ kicker, title, standfirst, tags, year }: PageMastheadProps) {
  const reduceMotion = useReducedMotion();

  const ruleMotion: MotionProps = reduceMotion
    ? { animate: { scaleX: 1 } }
    : {
        initial: { scaleX: 0 },
        animate: { scaleX: 1 },
        transition: { duration: DURATION_DRAW, ease: EASE_DRAW },
      };

  const rise = (delay: number): MotionProps =>
    reduceMotion
      ? { animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: DURATION_DRAW, delay, ease: EASE_DRAW },
        };

  return (
    <header>
      <Container>
        <div className="py-s9 min-[900px]:py-s10">
          <p className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
            {kicker}
          </p>
          <motion.div
            {...ruleMotion}
            aria-hidden="true"
            className="mt-s3 h-[var(--rule-accent-w)] w-full origin-left"
            style={{ backgroundColor: year ? `var(${YEARS[year].cssVar})` : 'var(--accent)' }}
          />
          <motion.h1
            {...rise(0.06)}
            className="mt-s5 text-34 min-[900px]:text-60"
            style={{ fontVariationSettings: "'wdth' 118, 'wght' 650" }}
          >
            {title}
          </motion.h1>
          {standfirst && (
            <p className="mt-s5 max-w-measure font-prose text-21 text-ink-2">{standfirst}</p>
          )}
          {tags && (
            <motion.div {...rise(0.14)} className="mt-s5 flex flex-wrap gap-s2">
              {tags}
            </motion.div>
          )}
        </div>
      </Container>
    </header>
  );
}
