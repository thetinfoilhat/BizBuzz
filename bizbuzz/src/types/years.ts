// Type definitions for year-based cohort data structure

export type ProgramKind = 'camp' | 'workshop' | 'fish-tank';

export interface YearKPI {
  students: number;
  sessions: number;         // total sessions delivered
  programsRun: number;      // total programs run
  attendance: number;       // cumulative attendance
  schools?: number;         // only when tracked for that season alone
  officeHours?: number;     // one-on-one mentoring hours logged
  dollarsRaised?: number;   // if available
  pressMentions?: number;
  volunteers?: number;
}

export interface ProgramEvent {
  id: string;
  kind: ProgramKind;
  title: string;
  dateISO: string;          // e.g., "2024-07-24"
  venue?: string;           // school or location
  attendance?: number;
  description?: string;
  images?: string[];        // URLs or /public paths
  resources?: { label: string; href: string }[];
}

export interface TimelineItem {
  id: string;
  dateISO: string;
  label: string;
  detail?: string;
  media?: string[];         // optional images
}

export interface Story {
  id: string;
  role: 'student' | 'mentor' | 'judge' | 'partner';
  name?: string;
  headline: string;
  body: string;
  image?: string;
}

export interface PartnerLogo {
  name: string;
  href?: string;
  logo: string; // path
}

export interface PressItem {
  outlet: string;
  headline: string;
  href: string;
  dateISO?: string;
}

export interface YearData {
  year: number;
  summary: string;
  kpis: YearKPI;
  programs: ProgramEvent[];
  timeline?: TimelineItem[];
  stories?: Story[];
  partners?: PartnerLogo[];
  press?: PressItem[];
  gallery?: string[];       // image paths
}

