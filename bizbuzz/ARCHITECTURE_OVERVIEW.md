# BizBuzz Dual-Cohort Architecture Overview

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         Homepage (/)                         │
│  ┌────────────────────────────────────────────────────┐    │
│  │  Hero Section + Image Grid                         │    │
│  │  • BizBuzz branding                                 │    │
│  │  • Mission statement                                │    │
│  │  • Legacy layout maintained                         │    │
│  └────────────────────────────────────────────────────┘    │
│                                                               │
│  [Link to /years in header navigation]                      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Year Index (/years)                        │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │   2024 Card          │  │   2025 Card          │        │
│  │ ┌──────────────────┐ │  │ ┌──────────────────┐ │        │
│  │ │  '24 Watermark   │ │  │ │  '25 Watermark   │ │        │
│  │ │  Blue Theme      │ │  │ │  Purple Theme    │ │        │
│  │ └──────────────────┘ │  │ └──────────────────┘ │        │
│  │  936 Students        │  │  1,200 Students      │        │
│  │  79 Schools          │  │  95 Schools          │        │
│  │  $10,242 Raised      │  │  $15,000 Raised      │        │
│  │  410 Sessions        │  │  520 Sessions        │        │
│  │  [See 2024 →]        │  │  [See 2025 →]        │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                               │
│         [Compare 2024 vs 2025 →]                            │
└─────────────────────────────────────────────────────────────┘
              │                            │
              ▼                            ▼
┌──────────────────────┐      ┌──────────────────────┐
│  /years/2024         │      │  /years/2025         │
│  ┌────────────────┐  │      │  ┌────────────────┐  │
│  │ Hero Strip     │  │      │  │ Hero Strip     │  │
│  │ • Blue theme   │  │      │  │ • Purple theme │  │
│  │ • '24 mark     │  │      │  │ • '25 mark     │  │
│  │ • Summary      │  │      │  │ • Summary      │  │
│  └────────────────┘  │      │  └────────────────┘  │
│                       │      │                       │
│  KPI Metrics Grid     │      │  KPI Metrics Grid     │
│  ┌──┬──┬──┬──┐       │      │  ┌──┬──┬──┬──┐       │
│  │📊│🏫│💰│📅│       │      │  │📊│🏫│💰│📅│       │
│  └──┴──┴──┴──┘       │      │  └──┴──┴──┴──┘       │
│                       │      │                       │
│  Program Tabs         │      │  Program Tabs         │
│  [Camps|Workshops|    │      │  [Camps|Workshops|    │
│   Fish Tank]          │      │   Fish Tank]          │
│  ┌────────────────┐  │      │  ┌────────────────┐  │
│  │ Program List   │  │      │  │ Program List   │  │
│  │ • Date         │  │      │  │ • Date         │  │
│  │ • Venue        │  │      │  │ • Venue        │  │
│  │ • Attendance   │  │      │  │ • Attendance   │  │
│  │ • Description  │  │      │  │ • Description  │  │
│  │ • 3 Images     │  │      │  │ • 3 Images     │  │
│  └────────────────┘  │      │  └────────────────┘  │
│                       │      │                       │
│  Timeline Section     │      │  Timeline Section     │
│  • Vertical timeline  │      │  • Vertical timeline  │
│  • Expandable items   │      │  • Expandable items   │
│                       │      │                       │
│  Stories Section      │      │  Stories Section      │
│  • Student stories    │      │  • Student stories    │
│  • Mentor spotlights  │      │  • Mentor spotlights  │
│                       │      │                       │
│  Photo Gallery        │      │  Photo Gallery        │
│  • Grid layout        │      │  • Grid layout        │
│                       │      │                       │
│  Partners Section     │      │  Partners Section     │
│  • Logo grid          │      │  • Logo grid          │
└──────────────────────┘      └──────────────────────┘
```

## Data Flow

```
JSON Data Files
    ↓
TypeScript Types
    ↓
React Components
    ↓
Rendered Pages
```

### Detailed Flow

1. **Data Storage**
   ```
   /data/years/2024.json
   /data/years/2025.json
   ```

2. **Type Validation**
   ```typescript
   // /src/types/years.ts
   interface YearData { ... }
   ```

3. **Data Loading**
   ```typescript
   import data2024 from '@/../data/years/2024.json';
   const yearData = data2024 as YearData;
   ```

4. **Rendering**
   ```tsx
   // Dynamic based on loaded data
   <YearPage data={yearData} />
   ```

## Component Hierarchy

```
App Root
├── Header (navigation)
├── Page Content
│   ├── /years
│   │   └── YearCard (2024, 2025)
│   │
│   ├── /years/[year]
│   │   ├── Hero Strip
│   │   ├── Metrics Grid
│   │   ├── Program Tabs
│   │   │   └── ProgramList
│   │   ├── Timeline
│   │   ├── Stories
│   │   ├── Gallery
│   │   └── Partners
│   │
│   └── /compare/2024-vs-2025
│       ├── KPI Table
│       ├── Program Deltas
│       ├── CSV Export
│       └── Summary
│
└── Footer
```

## State Management

```typescript
// Year Context (for Phase 2 homepage integration)
YearContext
  ├── year: 2024 | 2025
  ├── setYear: (year) => void
  ├── data: YearData
  └── compare: { other: YearData }
```

## Routing Structure

```
/                           → Homepage (existing)
/years                      → Year index (NEW)
/years/2024                 → 2024 cohort page (NEW)
/years/2025                 → 2025 cohort page (NEW)
/compare/2024-vs-2025       → Comparison page (NEW)
/camps                      → 2024 camps (existing, legacy)
/workshops                  → Workshops (existing, legacy)
/fish-tank                  → 2024 Fish Tank (existing, legacy)
/sessions                   → 1:1 Sessions (existing)
/about                      → About page (existing)
```

## Color System

### Year-Specific Accents

| Year | Primary   | Dark      | Medium    | Light     | Usage                    |
|------|-----------|-----------|-----------|-----------|--------------------------|
| 2024 | #38b6ff   | #003166   | #235284   | #B8e2f4   | Headers, buttons, icons  |
| 2025 | #8b5cf6   | #4c1d95   | #6d28d9   | #c4b5fd   | Headers, buttons, icons  |

### Shared Colors

| Color | Hex       | Usage                          |
|-------|-----------|--------------------------------|
| Gold  | #FFBF00   | Stats, highlights, accents     |
| Black | #000000   | Body text (per user rules)     |
| White | #ffffff   | Backgrounds, cards             |
| Gray  | #f9fafb   | Subtle backgrounds only        |

## Responsive Breakpoints

```css
sm:  640px   → Mobile landscape / small tablet
md:  768px   → Tablet portrait
lg:  1024px  → Tablet landscape / small desktop
xl:  1280px  → Desktop
2xl: 1536px  → Large desktop
```

## Performance Metrics

- **Build Time**: ~4 seconds
- **First Load JS**: 101 kB (shared)
- **Page-Specific JS**: 5-11 kB per page
- **Lighthouse Score Target**: 95+ (all metrics)

## Extensibility

### Adding 2026

1. Create `/data/years/2026.json` with same schema
2. Update TypeScript types if adding new fields:
   ```typescript
   // /src/types/years.ts
   export interface YearData {
     year: 2024 | 2025 | 2026; // Add 2026
     ...
   }
   ```
3. Pages automatically work via `[year]` dynamic route
4. Add to year index cards array
5. Create new comparison route if needed

### Adding New Program Types

1. Update type definition:
   ```typescript
   export type ProgramKind = 'camp' | 'workshop' | 'fish-tank' | 'new-type';
   ```
2. Add programs with new kind to JSON
3. Tab will automatically appear in year pages

## Integration Points for Phase 2

### Homepage Enhancements
- **Dual-Year Highlight Band**: Will pull from JSON data
- **Year Switcher**: Will use YearContext
- **Program Cards**: Will filter by selected year

### Advanced Features
- **Year watermark animations**: CSS/Framer Motion
- **Interactive timelines**: Click-to-expand details
- **Lightbox gallery**: Modal for full-size images
- **Analytics tracking**: Year switch events
- **SEO per year**: Dynamic meta tags

---

## Accessibility Features

✅ **Keyboard Navigation**
- Tab through all interactive elements
- Enter/Space to activate buttons
- Arrow keys for tab navigation

✅ **Screen Reader Support**
- Semantic HTML (`<nav>`, `<main>`, `<article>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- ARIA labels where needed

✅ **Visual Accessibility**
- 4.5:1 contrast for all text
- Focus indicators on all interactive elements
- No color-only information (year + text labels)
- Consistent spacing for readability

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile Safari: iOS 14+
- Chrome Mobile: Latest

---

*This architecture document serves as a reference for developers working on the BizBuzz dual-cohort system.*

