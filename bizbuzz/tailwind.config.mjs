/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',  // Indigo color from the design
        secondary: '#38b6ff', // Blue color from the design
        accent: '#ffbf00',    // Yellow accent color from the design
        dark: '#0f1629',      // Dark color for footer from the design
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
} 