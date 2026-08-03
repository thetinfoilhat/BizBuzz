/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/* Every value here reads a custom property declared in src/app/globals.css.
   The authority for all of them is .relay/design.md. */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        panel: 'var(--panel)',
        ink: {
          DEFAULT: 'var(--ink)',
          2: 'var(--ink-2)',
          muted: 'var(--ink-muted)',
        },
        rule: 'var(--rule)',
        'fill-soft': 'var(--fill-soft)',
        accent: {
          DEFAULT: 'var(--accent)',
          ink: 'var(--accent-ink)',
        },
        'on-ink': {
          DEFAULT: 'var(--on-ink)',
          muted: 'var(--on-ink-muted)',
        },
        year: {
          2024: 'var(--year-2024)',
          2025: 'var(--year-2025)',
          2026: 'var(--year-2026)',
          2027: 'var(--year-2027)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        prose: ['var(--font-prose)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        12: ['var(--text-12)', { lineHeight: '1.4' }],
        14: ['var(--text-14)', { lineHeight: '1.5' }],
        16: ['var(--text-16)', { lineHeight: '1.45' }],
        18: ['var(--text-18)', { lineHeight: '1.62' }],
        21: ['var(--text-21)', { lineHeight: '1.45' }],
        26: ['var(--text-26)', { lineHeight: '1.25' }],
        34: ['var(--text-34)', { lineHeight: '1.15' }],
        44: ['var(--text-44)', { lineHeight: '1.05' }],
        60: ['var(--text-60)', { lineHeight: '1.0' }],
      },
      spacing: {
        s1: 'var(--space-1)',
        s2: 'var(--space-2)',
        s3: 'var(--space-3)',
        s4: 'var(--space-4)',
        s5: 'var(--space-5)',
        s6: 'var(--space-6)',
        s7: 'var(--space-7)',
        s8: 'var(--space-8)',
        s9: 'var(--space-9)',
        s10: 'var(--space-10)',
        s11: 'var(--space-11)',
      },
      maxWidth: {
        container: '1240px',
        measure: '66ch',
      },
      borderRadius: {
        none: 'var(--radius-0)',
        control: 'var(--radius-control)',
      },
      /* Deliberately NOT keyed `rule` or `accent`: those names already exist in
         `colors`, and Tailwind emits the colour plugin after the width plugin, so
         `.border-rule` would resolve to border-color and the width would be dead —
         leaving every 1px rule in the system invisible against preflight's
         `border-width: 0`. Width comes from Tailwind's own `border` / `border-t`
         / `border-b` (1px); these keys only add the 3px accent step. */
      borderWidth: {
        thick: 'var(--rule-accent-w)',
      },
      boxShadow: {
        float: 'var(--shadow-float)',
      },
      transitionDuration: {
        80: '80ms',
        120: '120ms',
        200: '200ms',
        420: '420ms',
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
        draw: 'var(--ease-draw)',
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
};
