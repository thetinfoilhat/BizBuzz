// Year identity, in one place. The direction demotes the year from a theme to a
// marker: an 8×8 hard square chip on a year tag, and the 3px rule on a
// year-scoped masthead. Nothing else declares a year colour.

export type Year = 2024 | 2025 | 2026 | 2027;

export interface YearIdentity {
  /** The custom property declared in globals.css, for use as `var(cssVar)`. */
  cssVar: string;
  /** The same colour as a literal, for anywhere a `var()` will not resolve. */
  hex: string;
}

export const YEARS: Record<Year, YearIdentity> = {
  2024: { cssVar: '--year-2024', hex: '#1a5fd0' },
  2025: { cssVar: '--year-2025', hex: '#c2410c' },
  2026: { cssVar: '--year-2026', hex: '#0f766e' },
  2027: { cssVar: '--year-2027', hex: '#5b21b6' },
};

export const YEAR_LIST: readonly Year[] = [2024, 2025, 2026, 2027];

/** Reads one identity from an unvalidated value — a route param or a JSON field. */
export function yearIdentity(value: string | number): YearIdentity | undefined {
  const year = Number(value) as Year;
  return YEAR_LIST.includes(year) ? YEARS[year] : undefined;
}
