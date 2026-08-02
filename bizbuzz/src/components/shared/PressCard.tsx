"use client";

import { motion } from 'framer-motion';
import type { PressItem } from '@/types/years';

interface PressCardProps {
  item: PressItem;
  accentColor: string;
  index: number;
}

export default function PressCard({ item, accentColor, index }: PressCardProps) {
  const date = item.dateISO ? new Date(item.dateISO) : null;

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 group"
      style={{ borderLeftColor: accentColor }}
    >
      {/* Outlet badge */}
      <div 
        className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
        style={{ 
          backgroundColor: `${accentColor}20`,
          color: accentColor 
        }}
      >
        {item.outlet}
      </div>

      {/* Headline */}
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
        {item.headline}
      </h3>

      {/* Date if available */}
      {date && (
        <div className="text-sm text-gray-500 mb-3">
          {date.toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </div>
      )}

      {/* Read more indicator */}
      <div 
        className="inline-flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform"
        style={{ color: accentColor }}
      >
        Read Article
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>

      {/* External link icon */}
      <div className="absolute top-4 right-4 text-gray-300 group-hover:text-gray-400 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </motion.a>
  );
}

