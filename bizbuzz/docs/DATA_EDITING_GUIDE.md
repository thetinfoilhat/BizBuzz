# BizBuzz Year Data Editing Guide

## Overview
This guide explains how to update year-specific data for the BizBuzz website. All year data is stored in JSON files located in `/data/years/`.

## File Structure

```
/data/years/
  ├── 2024.json
  ├── 2025.json
  └── [future years].json
```

## Data Schema

Each year file follows this structure:

### Top-Level Fields

```json
{
  "year": 2024,                    // The year (2024 or 2025)
  "summary": "string",             // 1-2 sentence summary of the year
  "kpis": { ... },                 // Key performance indicators
  "programs": [ ... ],             // Array of programs/events
  "timeline": [ ... ],             // Optional timeline items
  "stories": [ ... ],              // Optional student/mentor stories
  "partners": [ ... ],             // Optional partner organizations
  "press": [ ... ],                // Optional press coverage
  "gallery": [ ... ]               // Optional photo gallery paths
}
```

### KPIs Object

```json
"kpis": {
  "students": 936,                 // Total students taught
  "schools": 79,                   // Number of schools reached
  "sessions": 410,                 // Total sessions delivered
  "programsRun": 14,               // Number of distinct programs
  "attendance": 1100,              // Cumulative attendance across all events
  "dollarsRaised": 10242,          // Optional: Total funds raised
  "pressMentions": 5,              // Optional: Press coverage count
  "volunteers": 60                 // Optional: Number of volunteers
}
```

### Program Events Array

Each program in the `programs` array should include:

```json
{
  "id": "unique-id",               // Unique identifier (e.g., "camp-2024-session1")
  "kind": "camp",                  // Type: "camp", "workshop", or "fish-tank"
  "title": "Program Title",        // Full program name
  "dateISO": "2024-06-12",         // Date in ISO format (YYYY-MM-DD)
  "venue": "Location Name",        // Optional: Venue or school name
  "attendance": 110,               // Optional: Number of attendees
  "description": "...",            // Optional: Program description
  "images": [                      // Optional: Array of image paths
    "/path/to/image1.jpg",
    "/path/to/image2.jpg"
  ],
  "resources": [                   // Optional: Links to materials
    {
      "label": "Overview",
      "href": "/pdfs/overview.pdf"
    }
  ]
}
```

### Timeline Items Array

```json
{
  "id": "t1",                      // Unique identifier
  "dateISO": "2024-06-12",         // Date in ISO format
  "label": "Event Name",           // Short title
  "detail": "Description",         // Optional: Additional details
  "media": ["/path/image.jpg"]     // Optional: Associated images
}
```

### Stories Array

```json
{
  "id": "story1",                  // Unique identifier
  "role": "student",               // Type: "student", "mentor", "judge", or "partner"
  "name": "Person Name",           // Optional: Name
  "headline": "Story Headline",    // Main title
  "body": "Story content...",      // Full story text
  "image": "/path/to/photo.jpg"    // Optional: Photo
}
```

### Partners Array

```json
{
  "name": "Organization Name",     // Partner name
  "logo": "/path/to/logo.png",     // Path to logo image
  "href": "https://website.com"    // Optional: Partner website URL
}
```

### Press Items Array

```json
{
  "outlet": "News Organization",   // Media outlet name
  "headline": "Article Title",     // Article headline
  "href": "https://article.url",   // Link to article
  "dateISO": "2024-07-25"          // Optional: Publication date
}
```

## How to Update Data

### Adding a New Program Event

1. Open the appropriate year file (e.g., `/data/years/2025.json`)
2. Add a new object to the `programs` array:

```json
{
  "id": "workshop-new-2025",
  "kind": "workshop",
  "title": "New Workshop Series",
  "dateISO": "2025-09-15",
  "venue": "Community Center, Naperville",
  "attendance": 75,
  "description": "A new workshop series teaching advanced entrepreneurship concepts.",
  "images": [
    "/workshops/new/1.jpg",
    "/workshops/new/2.jpg"
  ]
}
```

3. Update the KPIs to reflect the new data:
   - Increment `programsRun`
   - Add attendance to `attendance`
   - Update `sessions` if applicable

### Updating KPI Metrics

Simply edit the numbers in the `kpis` object:

```json
"kpis": {
  "students": 1250,     // Updated from 1200
  "schools": 100,       // Updated from 95
  ...
}
```

### Adding Timeline Events

Add items to the `timeline` array in chronological order:

```json
{
  "id": "t9",
  "dateISO": "2025-12-15",
  "label": "End of Year Celebration",
  "detail": "Celebrating achievements with students, mentors, and partners."
}
```

### Adding Student Stories

Add new stories to the `stories` array:

```json
{
  "id": "story3",
  "role": "student",
  "name": "Alex Johnson",
  "headline": "Building a Social Enterprise at Age 14",
  "body": "Alex's journey from idea to launch, creating a business that serves the community while generating revenue.",
  "image": "/stories/alex-johnson.jpg"
}
```

## Image Path Guidelines

- All image paths should start with `/`
- Images should be placed in the `/public` directory
- Use descriptive folder names (e.g., `/camp_imgs/`, `/workshops/`, `/fish_tank/`)
- Supported formats: JPG, PNG, WebP

## Validation Checklist

Before committing changes, verify:

- [ ] All `dateISO` fields use YYYY-MM-DD format
- [ ] All image paths start with `/` and exist in `/public`
- [ ] KPI numbers are accurate and match program data
- [ ] No duplicate `id` fields within the same file
- [ ] JSON is valid (no syntax errors)
- [ ] All required fields are present

## Testing Your Changes

After updating a year file:

1. Save the file
2. Refresh the website
3. Navigate to `/years/[year]` (e.g., `/years/2025`)
4. Verify all data appears correctly
5. Test each tab (Camps, Workshops, Fish Tank)
6. Check the comparison page at `/compare/2024-vs-2025`

## Adding a New Year (e.g., 2026)

1. Copy an existing year file (e.g., `2025.json`)
2. Rename it to `2026.json`
3. Update the `year` field to `2026`
4. Update all data fields
5. Clear out `programs`, `timeline`, `stories`, etc. if starting fresh
6. Update the website code to recognize the new year (TypeScript types may need updating)

## Common Mistakes to Avoid

❌ **Don't** use relative date formats (e.g., "March 15th")
✅ **Do** use ISO dates (e.g., "2025-03-15")

❌ **Don't** forget to update KPIs when adding programs
✅ **Do** recalculate totals (students, attendance, sessions)

❌ **Don't** use external image URLs
✅ **Do** use local paths from the `/public` directory

❌ **Don't** leave placeholder text in production
✅ **Do** update all placeholder content before publishing

## Support

For questions about data structure or technical issues, contact the development team or refer to:
- `/src/types/years.ts` for TypeScript type definitions
- `/src/app/years/[year]/page.tsx` for how data is rendered
- `/src/app/compare/2024-vs-2025/page.tsx` for comparison logic

---

*Last updated: October 2025*

