"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Sparkline from '@/components/Sparkline';
import data2024 from '@/../data/years/2024.json';
import data2025 from '@/../data/years/2025.json';
import type { YearData } from '@/types/years';

const year2024 = data2024 as YearData;
const year2025 = data2025 as YearData;

// Calculate growth percentages
const calculateGrowth = (old: number, current: number) => {
  if (old === 0) return 0;
  return Math.round(((current - old) / old) * 100);
};

export default function ComparePage() {
  const handleDownloadCSV = () => {
    const csvContent = `Metric,2024,2025,Change\n` +
      `Students,${year2024.kpis.students},${year2025.kpis.students},+${calculateGrowth(year2024.kpis.students, year2025.kpis.students)}%\n` +
      `Schools,${year2024.kpis.schools},${year2025.kpis.schools},+${calculateGrowth(year2024.kpis.schools, year2025.kpis.schools)}%\n` +
      `Sessions,${year2024.kpis.sessions},${year2025.kpis.sessions},+${calculateGrowth(year2024.kpis.sessions, year2025.kpis.sessions)}%\n` +
      `Programs Run,${year2024.kpis.programsRun},${year2025.kpis.programsRun},+${calculateGrowth(year2024.kpis.programsRun, year2025.kpis.programsRun)}%\n` +
      `Attendance,${year2024.kpis.attendance},${year2025.kpis.attendance},+${calculateGrowth(year2024.kpis.attendance, year2025.kpis.attendance)}%\n` +
      `Dollars Raised,${year2024.kpis.dollarsRaised},${year2025.kpis.dollarsRaised},+${calculateGrowth(year2024.kpis.dollarsRaised || 0, year2025.kpis.dollarsRaised || 0)}%\n` +
      `Press Mentions,${year2024.kpis.pressMentions || 0},${year2025.kpis.pressMentions || 0},+${calculateGrowth(year2024.kpis.pressMentions || 0, year2025.kpis.pressMentions || 0)}%\n` +
      `Volunteers,${year2024.kpis.volunteers || 0},${year2025.kpis.volunteers || 0},+${calculateGrowth(year2024.kpis.volunteers || 0, year2025.kpis.volunteers || 0)}%\n`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bizbuzz-2024-vs-2025-comparison.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const kpiRows = [
    { 
      label: 'Students Taught',
      val2024: year2024.kpis.students,
      val2025: year2025.kpis.students,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      label: 'Schools Reached',
      val2024: year2024.kpis.schools,
      val2025: year2025.kpis.schools,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      label: 'Total Sessions',
      val2024: year2024.kpis.sessions,
      val2025: year2025.kpis.sessions,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      label: 'Programs Run',
      val2024: year2024.kpis.programsRun,
      val2025: year2025.kpis.programsRun,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      label: 'Total Attendance',
      val2024: year2024.kpis.attendance,
      val2025: year2025.kpis.attendance,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    { 
      label: 'Dollars Raised',
      val2024: year2024.kpis.dollarsRaised || 0,
      val2025: year2025.kpis.dollarsRaised || 0,
      prefix: '$',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      label: 'Press Mentions',
      val2024: year2024.kpis.pressMentions || 0,
      val2025: year2025.kpis.pressMentions || 0,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    },
    { 
      label: 'Volunteers',
      val2024: year2024.kpis.volunteers || 0,
      val2025: year2025.kpis.volunteers || 0,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const programTypes = [
    { kind: 'camp', label: 'Camps', color: '#38b6ff' },
    { kind: 'workshop', label: 'Workshops', color: '#FFBF00' },
    { kind: 'fish-tank', label: 'Fish Tank', color: '#FFBF00' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#040037] via-[#003166] to-[#235284] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#38b6ff]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FFBF00]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <Link href="/years" className="text-white/80 hover:text-white text-sm inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Years
              </Link>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-[#38b6ff]">2024</span> vs <span className="text-[#FFBF00]">2025</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comparing our growth and impact across two seasons of entrepreneurship education.
            </p>

            <button
              onClick={handleDownloadCSV}
              className="inline-flex items-center px-6 py-3 bg-white text-[#003166] font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CSV
            </button>
          </motion.div>
        </div>
      </section>

      {/* KPI Comparison Table */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Metric</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#38b6ff]">2024</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-[#FFBF00]">2025</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {kpiRows.map((row, idx) => {
                    const growth = calculateGrowth(row.val2024, row.val2025);
                    const isPositive = growth > 0;

                    return (
                      <motion.tr
                        key={row.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center text-gray-900 font-medium">
                            <div className="text-gray-400 mr-3">
                              {row.icon}
                            </div>
                            {row.label}
                          </div>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="text-2xl font-bold text-[#38b6ff]">
                            {row.prefix || ''}{row.val2024.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="text-2xl font-bold text-[#FFBF00]">
                            {row.prefix || ''}{row.val2025.toLocaleString()}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                            isPositive 
                              ? 'bg-green-100 text-green-800' 
                              : growth === 0 
                              ? 'bg-gray-100 text-gray-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {isPositive && (
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                            )}
                            {growth > 0 ? '+' : ''}{growth}%
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Module Deltas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Program Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programTypes.map((type, idx) => {
              const count2024 = year2024.programs.filter(p => p.kind === type.kind).length;
              const count2025 = year2025.programs.filter(p => p.kind === type.kind).length;
              const growth = calculateGrowth(count2024, count2025);

              return (
                <motion.div
                  key={type.kind}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                    {type.label}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">2024</span>
                      <span className="text-3xl font-bold text-[#38b6ff]">
                        {count2024}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">2025</span>
                      <span className="text-3xl font-bold text-[#FFBF00]">
                        {count2025}
                      </span>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium">Change</span>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                          growth > 0 
                            ? 'bg-green-100 text-green-800' 
                            : growth === 0
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {growth > 0 ? '+' : ''}{growth}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced sparkline visualization */}
                  <div className="mt-6">
                    <div className="flex items-center justify-center mb-2">
                      <Sparkline 
                        data={[count2024, count2025]}
                        width={200}
                        height={40}
                        color={type.color}
                        lineWidth={3}
                      />
                    </div>
                    <div className="flex items-end h-12 gap-2">
                      <div 
                        className="bg-[#38b6ff] rounded-t flex-1 transition-all duration-500"
                        style={{ height: `${(count2024 / Math.max(count2024, count2025)) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-[#FFBF00] rounded-t flex-1 transition-all duration-500"
                        style={{ height: `${(count2025 / Math.max(count2024, count2025)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Growth Highlights
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              From 2024 to 2025, BizBuzz expanded its reach by{' '}
              <span className="font-bold text-[#38b6ff]">
                {calculateGrowth(year2024.kpis.students, year2025.kpis.students)}%
              </span>{' '}
              in student participation              , serving{' '}
              <span className="font-bold text-[#FFBF00]">
                {year2025.kpis.schools - year2024.kpis.schools} more schools
              </span>{' '}
              and delivering{' '}
              <span className="font-bold text-[#FFBF00]">
                {year2025.kpis.sessions - year2024.kpis.sessions} additional sessions
              </span>
              . Our commitment to youth entrepreneurship continues to grow stronger.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/years/2024"
                className="px-6 py-3 bg-gradient-to-r from-[#003166] to-[#38b6ff] text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Explore 2024
              </Link>
              <Link
                href="/years/2025"
                className="px-6 py-3 bg-gradient-to-r from-[#CD8F20] to-[#FFBF00] text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Explore 2025
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

