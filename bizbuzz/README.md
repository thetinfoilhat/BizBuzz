# BizBuzz NFP Website

Official website for BizBuzz NFP - turning imagination into innovation via social entrepreneurship.

## 🚀 Features

- **Multi-Year Architecture**: Browse and compare 2024 and 2025 seasons
- **Dynamic Year Pages**: Dedicated pages for each cohort with programs, timelines, and stories
- **Comparison View**: Side-by-side KPI comparison with CSV export
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Accessibility**: WCAG 2.2 AA compliant
- **Modern Stack**: Next.js 14 + TypeScript + Tailwind CSS

## 📁 Project Structure

```
bizbuzz/
├── data/years/           # Year-specific data (JSON)
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── years/       # Year archive pages
│   │   ├── compare/     # Comparison pages
│   │   ├── camps/       # Program pages
│   │   ├── workshops/
│   │   └── fish-tank/
│   ├── components/      # Reusable React components
│   ├── contexts/        # React Context providers
│   └── types/           # TypeScript type definitions
└── public/              # Static assets (images, etc.)
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project
cd bizbuzz

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Editing Year Data

All year-specific content is stored in `/data/years/[year].json`.

**Quick Start:**
1. Open `/data/years/2025.json`
2. Update KPIs, programs, or other sections
3. Save the file
4. Refresh your browser to see changes

**Detailed Instructions:** See [DATA_EDITING_GUIDE.md](./DATA_EDITING_GUIDE.md)

## 🎨 Design System

### Color Themes

**2024 (Blue Theme)**
- Primary: `#38b6ff`
- Dark: `#003166`
- Backgrounds: Blue gradients

**2025 (Purple Theme)**
- Primary: `#8b5cf6`
- Dark: `#4c1d95`
- Backgrounds: Purple gradients

**Shared**
- Gold: `#FFBF00`
- Text: Pure black `#000000` (never gray)
- Cards: Pure white `#ffffff`

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 100-900 available
- **Scale**: Tailwind default scale

## 🌐 Key Routes

- `/` - Homepage
- `/years` - Year index (view all seasons)
- `/years/2024` - 2024 season details
- `/years/2025` - 2025 season details
- `/compare/2024-vs-2025` - Year comparison
- `/camps` - 2024 Camps (legacy route)
- `/workshops` - Workshops
- `/fish-tank` - Fish Tank competition
- `/about` - About BizBuzz

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build (ensures no errors)
npm run build
```

## 📦 Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🚢 Deployment

The site is optimized for deployment on [Vercel](https://vercel.com):

1. Push to your git repository
2. Import project in Vercel
3. Deploy automatically on each push to main

## 📚 Documentation

- [DATA_EDITING_GUIDE.md](./DATA_EDITING_GUIDE.md) - How to update year data
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed contribution guidelines.

**Quick Contribution Steps:**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request with screenshots

## 📄 License

[Add your license here]

## 💬 Support

For questions or issues:
- Open a GitHub issue
- Contact the BizBuzz team
- Refer to documentation files

---

Built with ❤️ by the BizBuzz team
