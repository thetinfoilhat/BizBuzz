"use client";

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface MetricCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  color: string;
  icon?: React.ReactNode;
  delta?: number;
  delay?: number;
}

export default function MetricCard({ 
  value, 
  label, 
  prefix = '', 
  suffix = '',
  color,
  icon,
  delta,
  delay = 0
}: MetricCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = performance.now();
    
    const animateCount = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const progress = Math.min(runtime / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * value));
      
      if (runtime < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [isVisible, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative overflow-hidden group"
    >
      {/* Icon background decoration */}
      {icon && (
        <div className="absolute top-3 right-3 opacity-5 group-hover:opacity-10 transition-opacity">
          <div style={{ color }} className="scale-[2]">
            {icon}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="mb-3" style={{ color }}>
            {icon}
          </div>
        )}

        <div 
          className="text-4xl md:text-5xl font-bold mb-2"
          style={{ color }}
        >
          {prefix}{count.toLocaleString()}{suffix}
        </div>

        <div className="text-gray-700 font-medium text-base">
          {label}
        </div>

        {/* Optional delta indicator */}
        {delta !== undefined && delta !== 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className={`inline-flex items-center text-xs font-semibold ${
              delta > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {delta > 0 ? (
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              ) : (
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              {delta > 0 ? '+' : ''}{delta}% from previous year
            </div>
          </div>
        )}
      </div>

      {/* Animated border on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ borderColor: color }}
      />
    </motion.div>
  );
}

