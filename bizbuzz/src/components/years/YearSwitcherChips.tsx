"use client";

import { motion } from 'framer-motion';

interface YearSwitcherChipsProps {
  selectedYear: 2024 | 2025 | 2026;
  onYearChange: (year: 2024 | 2025 | 2026) => void;
  className?: string;
}

export default function YearSwitcherChips({ selectedYear, onYearChange, className = '' }: YearSwitcherChipsProps) {
  const years = [
    {
      value: 2024 as const,
      label: '2024',
      color: '#38b6ff',
      gradient: 'from-[#003166] to-[#38b6ff]',
      hoverBg: 'hover:bg-blue-50'
    },
    {
      value: 2025 as const,
      label: '2025',
      color: '#FFBF00',
      gradient: 'from-[#CD8F20] to-[#FFBF00]',
      hoverBg: 'hover:bg-amber-50'
    },
    {
      value: 2026 as const,
      label: '2026',
      color: '#10b981',
      gradient: 'from-[#064e3b] to-[#10b981]',
      hoverBg: 'hover:bg-emerald-50'
    }
  ];

  return (
    <div className={`flex justify-center ${className}`}>
      <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-gray-200">
        <div className="flex gap-2">
          {years.map((year) => (
            <motion.button
              key={year.value}
              onClick={() => onYearChange(year.value)}
              className={`relative px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                selectedYear === year.value
                  ? `bg-gradient-to-r ${year.gradient} text-white shadow-md`
                  : `text-gray-700 ${year.hoverBg}`
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {selectedYear === year.value && (
                <motion.div
                  layoutId="activeYearBg"
                  className={`absolute inset-0 bg-gradient-to-r ${year.gradient} rounded-full`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{year.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

