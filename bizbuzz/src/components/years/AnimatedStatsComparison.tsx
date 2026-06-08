"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import data2024 from '@/../data/years/2024.json';
import data2025 from '@/../data/years/2025.json';

interface StatItemProps {
  label: string;
  value2024: number;
  value2025: number;
  prefix?: string;
  suffix?: string;
  delay: number;
}

const StatItem = ({ label, value2024, value2025, prefix = '', suffix = '', delay }: StatItemProps) => {
  const [count2024, setCount2024] = useState(0);
  const [count2025, setCount2025] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const progress = Math.min(runtime / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount2024(Math.floor(easedProgress * value2024));
      setCount2025(Math.floor(easedProgress * value2025));
      
      if (runtime < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount2024(value2024);
        setCount2025(value2025);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, value2024, value2025]);

  const growth = value2024 > 0 ? Math.round(((value2025 - value2024) / value2024) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
    >
      <div className="text-sm text-gray-600 font-medium mb-4 uppercase tracking-wide">
        {label}
      </div>
      
      <div className="flex items-end justify-between mb-2">
        <div>
          <div className="text-xs text-gray-500 mb-1">2024</div>
          <div className="text-3xl font-bold text-[#38b6ff]">
            {prefix}{count2024.toLocaleString()}{suffix}
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-xs text-gray-500 mb-1">2025</div>
          <div className="text-3xl font-bold text-[#8b5cf6]">
            {prefix}{count2025.toLocaleString()}{suffix}
          </div>
        </div>
      </div>

      {/* Growth Indicator */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Growth</span>
          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
            growth > 0 
              ? 'bg-green-100 text-green-800'
              : growth === 0
              ? 'bg-gray-100 text-gray-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {growth > 0 && '↑ '}{growth > 0 ? '+' : ''}{growth}%
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AnimatedStatsComparison() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#040037] mb-4">
            Year-Over-Year <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38b6ff] to-[#FFBF00]">Growth</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            See how we&apos;re expanding our reach and impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            label="Students Taught"
            value2024={data2024.kpis.students}
            value2025={data2025.kpis.students}
            delay={0}
          />
          <StatItem
            label="Schools Reached"
            value2024={data2024.kpis.schools}
            value2025={data2025.kpis.schools}
            delay={0.1}
          />
          <StatItem
            label="Dollars Raised"
            value2024={data2024.kpis.dollarsRaised || 0}
            value2025={data2025.kpis.dollarsRaised || 0}
            prefix="$"
            delay={0.2}
          />
          <StatItem
            label="Total Sessions"
            value2024={data2024.kpis.sessions}
            value2025={data2025.kpis.sessions}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

