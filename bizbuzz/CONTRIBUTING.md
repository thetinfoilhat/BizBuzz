# Contributing to BizBuzz Website

Thank you for contributing to the BizBuzz website! This guide will help you understand the project structure and contribution process.

## Project Structure

```
bizbuzz/
├── data/
│   └── years/
│       ├── 2024.json          # 2024 season data
│       └── 2025.json          # 2025 season data
├── src/
│   ├── app/
│   │   ├── years/
│   │   │   ├── page.tsx       # Year index page
│   │   │   └── [year]/
│   │   │       └── page.tsx   # Dynamic year page template
│   │   ├── compare/
│   │   │   └── 2024-vs-2025/
│   │   │       └── page.tsx   # Comparison page
│   │   ├── camps/             # 2024 camps (legacy)
│   │   ├── workshops/         # 2024 workshops (legacy)
│   │   └── fish-tank/         # 2024 fish tank (legacy)
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ShuffleHero.tsx
│   │   └── ...
│   ├── contexts/
│   │   └── YearContext.tsx    # Year state management
│   └── types/
│       └── years.ts           # TypeScript type definitions
└── public/
    ├── camp_imgs/
    ├── workshops/
    ├── fish_tank/
    └── ...
```

## Development Workflow

### 1. Setting Up

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### 2. Making Changes

#### Updating Year Data

1. Edit the appropriate JSON file in `/data/years/`
2. Follow the schema defined in `/src/types/years.ts`
3. Refer to `DATA_EDITING_GUIDE.md` for detailed instructions

#### Adding New Components

1. Create component in `/src/components/`
2. Use TypeScript for type safety
3. Follow existing naming conventions
4. Export default at the end of the file

#### Creating New Pages

1. Create route in `/src/app/`
2. Use `"use client"` directive if client-side features needed
3. Import and use shared components
4. Ensure responsive design (mobile, tablet, desktop)

### 3. Code Style

- **TypeScript**: All new code should be TypeScript
- **Formatting**: Use Prettier (runs automatically)
- **Linting**: Fix all ESLint warnings before committing
- **Naming**: 
  - Components: PascalCase (e.g., `YearSwitcher.tsx`)
  - Functions: camelCase (e.g., `calculateGrowth`)
  - Files: kebab-case for routes (e.g., `2024-vs-2025`)

### 4. Accessibility Requirements

All contributions must meet WCAG 2.2 AA standards:

- ✅ **Keyboard Navigation**: All interactive elements accessible via keyboard
- ✅ **Focus States**: Visible focus indicators on all focusable elements
- ✅ **Color Contrast**: Minimum 4.5:1 for text, 3:1 for UI components
- ✅ **Alt Text**: All images must have descriptive alt text
- ✅ **Semantic HTML**: Use proper heading hierarchy and landmarks
- ✅ **ARIA**: Use only when necessary; prefer semantic HTML

### 5. Testing

Before submitting a PR:

```bash
# Run linter
npm run lint

# Check types
npm run type-check

# Build the project
npm run build
```

### 6. Pull Request Process

When submitting a PR, include:

#### Required Screenshots

1. **Homepage**: Show any changes to the hero or program sections
2. **Year Index** (`/years`): If modified
3. **Year Page** (`/years/2024` or `/years/2025`): Show each program tab
4. **Comparison Page** (`/compare/2024-vs-2025`): If modified
5. **Mobile View**: At least one screenshot showing mobile responsiveness

#### PR Description Template

```markdown
## Changes Made
- Brief description of what changed

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Data update
- [ ] Design enhancement
- [ ] Documentation

## Screenshots
[Attach screenshots here]

## Checklist
- [ ] Code follows project style guidelines
- [ ] No linting errors
- [ ] Tested on desktop and mobile
- [ ] Accessibility requirements met
- [ ] All images have alt text
- [ ] Documentation updated (if applicable)

## Testing Steps
1. Step to reproduce/test
2. Expected behavior
3. Actual behavior
```

## Common Tasks

### Adding a 2025 Program Event

1. Open `/data/years/2025.json`
2. Add to the `programs` array:

```json
{
  "id": "new-program-2025",
  "kind": "workshop",
  "title": "New Workshop Title",
  "dateISO": "2025-10-15",
  "venue": "Location",
  "attendance": 50,
  "description": "Program description here.",
  "images": ["/workshops/new/1.jpg"]
}
```

3. Update KPIs accordingly
4. Test at `/years/2025`

### Updating Homepage Stats

The homepage pulls from `/data/years/2024.json` by default. To update:

1. Edit `/data/years/2024.json`
2. Update the `kpis` object
3. Refresh the homepage to see changes

### Adding Images

1. Place images in `/public` directory under appropriate folder
2. Reference with absolute path starting with `/`
3. Optimize images before adding (recommended: < 500KB each)
4. Supported formats: JPG, PNG, WebP

## Design Guidelines

### Color System

**2024 Theme (Blue)**
- Primary: `#38b6ff`
- Dark: `#003166`
- Medium: `#235284`
- Light: `#B8e2f4`

**2025 Theme (Purple)**
- Primary: `#8b5cf6`
- Dark: `#4c1d95`
- Medium: `#6d28d9`
- Light: `#c4b5fd`

**Shared Colors**
- Gold: `#FFBF00` (stats, highlights)
- Black: `#000000` (body text - per user rules)
- White: `#ffffff` (backgrounds, cards)

### Typography

- **Font Family**: Poppins (all weights 100-900)
- **Headings**: Bold, pure black or themed colors
- **Body Text**: Pure black (never gray - per user rules)
- **Size Scale**: Use Tailwind's default scale (text-sm, text-base, text-lg, etc.)

### Spacing

- Use Tailwind's spacing scale (4, 6, 8, 12, 16, 20, 24)
- Maintain consistent padding in cards (p-6 or p-8)
- Use gap utilities for grid layouts

## File Naming Conventions

- **Pages**: Use folder structure with `page.tsx`
- **Components**: PascalCase (e.g., `YearSwitcher.tsx`)
- **Data Files**: `[year].json` (e.g., `2024.json`)
- **Images**: Descriptive names, lowercase with hyphens

## Git Workflow

1. Create a feature branch: `git checkout -b feature/description`
2. Make your changes
3. Commit with clear messages: `git commit -m "Add 2025 workshop data"`
4. Push and create PR: `git push origin feature/description`

## Code Review Checklist

Reviewers should check:

- [ ] Code follows TypeScript best practices
- [ ] No console.log statements left in production code
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Alt text present on all images
- [ ] No accessibility violations
- [ ] JSON data is valid and follows schema
- [ ] Images are optimized
- [ ] Links work correctly
- [ ] No dead code or unused imports

## Questions or Issues?

- Check `DATA_EDITING_GUIDE.md` for data structure questions
- Review existing components for code patterns
- Open an issue for bugs or feature requests

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

*Thank you for helping make BizBuzz better!*

