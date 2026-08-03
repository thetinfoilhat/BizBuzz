"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import Image from 'next/image';

interface LightboxGalleryProps {
  images: string[];
}

const EASE_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];
const DURATION_OPEN = 0.2;

// On ink there is no panel fill to move to, so the control's feedback is its
// border going amber — the same 120ms colour change every other row uses.
const CONTROL_CLASS =
  'rounded-control border border-on-ink-muted px-s4 py-s2 font-display text-16 font-medium text-on-ink transition-colors duration-120 ease-out hover:border-accent focus-visible:border-accent';

function padIndex(value: number): string {
  return String(value).padStart(2, '0');
}

// Plates that open. The grid keeps the print treatment — 8px mat, 1px rule, an
// index beneath, nothing written on the photograph — and the viewer is the one
// surface on the site permitted to float above the page.
export default function LightboxGallery({ images }: LightboxGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (openIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenIndex(null);
      } else if (event.key === 'ArrowRight') {
        setOpenIndex((current) => (current === null ? null : (current + 1) % images.length));
      } else if (event.key === 'ArrowLeft') {
        setOpenIndex((current) =>
          current === null ? null : (current - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openIndex, images.length]);

  const viewerMotion: MotionProps = reduceMotion
    ? { animate: { opacity: 1 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: DURATION_OPEN, ease: EASE_OUT },
      };

  return (
    <>
      <ul className="grid grid-cols-2 gap-s5 min-[900px]:grid-cols-3">
        {images.map((src, index) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group block w-full text-left"
            >
              <span className="block border border-rule bg-paper p-s2 transition-colors duration-120 ease-out group-hover:bg-panel">
                <span className="relative block aspect-[3/2] bg-fill-soft">
                  <Image
                    src={src}
                    alt={`Archive photograph ${index + 1} of ${images.length}`}
                    fill
                    sizes="(min-width: 900px) 30vw, 45vw"
                    className="object-cover"
                  />
                </span>
              </span>
              <span className="mt-s2 block font-mono text-12 font-medium tracking-[0.08em] text-ink-muted">
                {padIndex(index + 1)} / {padIndex(images.length)}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            {...viewerMotion}
            role="dialog"
            aria-modal="true"
            aria-label="Photograph viewer"
            className="fixed inset-0 z-50 flex flex-col gap-s5 bg-ink p-s5"
            onClick={() => setOpenIndex(null)}
          >
            {/* Controls sit above and below the plate, never on it. */}
            <div className="flex shrink-0 items-center justify-between gap-s5">
              <p className="font-mono text-12 font-medium tracking-[0.08em] text-on-ink-muted">
                {padIndex(openIndex + 1)} / {padIndex(images.length)}
              </p>
              <button type="button" onClick={() => setOpenIndex(null)} className={CONTROL_CLASS}>
                Close
              </button>
            </div>

            <figure
              className="flex min-h-0 w-full max-w-container flex-1 self-center border border-rule bg-paper p-s2 shadow-float"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-0 w-full flex-1 bg-fill-soft">
                <Image
                  src={images[openIndex]}
                  alt={`Archive photograph ${openIndex + 1} of ${images.length}`}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                />
              </div>
            </figure>

            <div className="flex shrink-0 items-center justify-center gap-s4">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenIndex((current) =>
                    current === null ? null : (current - 1 + images.length) % images.length
                  );
                }}
                className={CONTROL_CLASS}
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenIndex((current) =>
                    current === null ? null : (current + 1) % images.length
                  );
                }}
                className={CONTROL_CLASS}
              >
                Next →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
