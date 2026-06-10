"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { TimelineItem } from '@/types/years';

interface InteractiveTimelineProps {
  items: TimelineItem[];
  accentColor: string;
}

export default function InteractiveTimeline({ items, accentColor }: InteractiveTimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="relative">
      {/* Vertical line */}
      <div 
        className="absolute left-8 top-0 bottom-0 w-1 rounded-full"
        style={{ backgroundColor: `${accentColor}30` }}
      ></div>

      <div className="space-y-6">
        {items.map((item, idx) => {
          const isExpanded = expandedId === item.id;
          const date = new Date(item.dateISO);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-20"
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-5 top-3 w-7 h-7 rounded-full border-4 border-white shadow-lg cursor-pointer"
                style={{ backgroundColor: accentColor }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => item.detail && toggleItem(item.id)}
              ></motion.div>

              {/* Content card */}
              <div 
                className={`bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all cursor-pointer border-2 ${
                  isExpanded ? 'border-opacity-100' : 'border-opacity-0'
                }`}
                style={{ borderColor: accentColor }}
                onClick={() => {
                  if (item.detail) toggleItem(item.id);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && item.detail) {
                    toggleItem(item.id);
                  }
                }}
                aria-expanded={isExpanded}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-1">
                      {date.toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.label}
                    </h3>
                  </div>

                  {item.detail && (
                    <div 
                      className="ml-4"
                      style={{ color: accentColor }}
                    >
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  )}
                </div>

                {/* Expandable detail */}
                <AnimatePresence>
                  {isExpanded && item.detail && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.detail}
                        </p>

                        {/* Media gallery if available */}
                        {item.media && item.media.length > 0 && (
                          <div className="grid grid-cols-3 gap-2 mt-4">
                            {item.media.map((img, i) => (
                              <div key={i} className="relative h-24 rounded-lg overflow-hidden">
                                <Image
                                  src={img}
                                  alt={`${item.label} image ${i + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

