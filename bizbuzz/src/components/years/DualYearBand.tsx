"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import data2024 from '@/../data/years/2024.json';
import data2025 from '@/../data/years/2025.json';

type ViewMode = 'side-by-side' | 'compare';

export default function DualYearBand() {
  const [viewMode, setViewMode] = useState<ViewMode>('side-by-side');

  const years = {
    2024: {
      data: data2024,
      color: '#38b6ff',
      darkColor: '#003166',
      gradient: 'from-[#003166] to-[#38b6ff]',
      lightBg: 'bg-blue-50',
      image: '/camp_imgs/landing/center.jpg',
      topMoment: {
        headline: 'Fish Tank 2024: 100+ Young Entrepreneurs Compete',
        subtext: 'College of DuPage • July 24-25'
      }
    },
    2025: {
      data: data2025,
      color: '#FFBF00',
      darkColor: '#CD8F20',
      gradient: 'from-[#CD8F20] to-[#FFBF00]',
      lightBg: 'bg-amber-50',
      image: '/camp_imgs/landing/right.jpg',
      topMoment: {
        headline: 'Fish Tank 2025: Enhanced Competition at Northwestern',
        subtext: 'Northwestern University • July 23-24'
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#040037] mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38b6ff] to-[#FFBF00]">Impact</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Two seasons of transforming young minds into tomorrow&apos;s entrepreneurs
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-gray-200">
            <button
              onClick={() => setViewMode('side-by-side')}
              className={`px-6 py-2.5 rounded-full font-semibold text-base transition-all duration-300 ${
                viewMode === 'side-by-side'
                  ? 'bg-gradient-to-r from-[#003166] to-[#FFBF00] text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setViewMode('compare')}
              className={`px-6 py-2.5 rounded-full font-semibold text-base transition-all duration-300 ${
                viewMode === 'compare'
                  ? 'bg-gradient-to-r from-[#003166] to-[#FFBF00] text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Compare Details
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'side-by-side' ? (
            <motion.div
              key="side-by-side"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* 2024 Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#38b6ff]/30 hover:border-[#38b6ff] transition-all group"
              >
                {/* Year Badge */}
                <div className="bg-gradient-to-r from-[#003166] to-[#38b6ff] px-6 py-4">
                  <h3 className="text-3xl font-bold text-white flex items-center justify-between">
                    2024 Season
                    <span className="text-6xl opacity-20 font-black">&apos;24</span>
                  </h3>
                </div>

                {/* Stats */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#38b6ff]">
                        {years[2024].data.kpis.students}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#38b6ff]">
                        {years[2024].data.kpis.schools}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Schools</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#38b6ff]">
                        {years[2024].data.kpis.sessions}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Sessions</div>
                    </div>
                  </div>

                  {/* Top Moment */}
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                    <Image
                      src={years[2024].image}
                      alt="2024 highlight"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <div className="p-4">
                        <div className="text-white font-bold text-lg mb-1">
                          {years[2024].topMoment.headline}
                        </div>
                        <div className="text-blue-200 text-sm">
                          {years[2024].topMoment.subtext}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/years/2024"
                    className="block w-full bg-gradient-to-r from-[#003166] to-[#38b6ff] text-white font-semibold py-3 px-6 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Explore 2024 →
                  </Link>
                </div>
              </motion.div>

              {/* 2025 Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#FFBF00]/30 hover:border-[#FFBF00] transition-all group"
              >
                {/* Year Badge */}
                <div className="bg-gradient-to-r from-[#CD8F20] to-[#FFBF00] px-6 py-4">
                  <h3 className="text-3xl font-bold text-white flex items-center justify-between">
                    2025 Season
                    <span className="text-6xl opacity-20 font-black">&apos;25</span>
                  </h3>
                </div>

                {/* Stats */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#FFBF00]">
                        {years[2025].data.kpis.students}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#FFBF00]">
                        {years[2025].data.kpis.schools}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Schools</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#FFBF00]">
                        {years[2025].data.kpis.sessions}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Sessions</div>
                    </div>
                  </div>

                  {/* Top Moment */}
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                    <Image
                      src={years[2025].image}
                      alt="2025 highlight"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <div className="p-4">
                        <div className="text-white font-bold text-lg mb-1">
                          {years[2025].topMoment.headline}
                        </div>
                        <div className="text-amber-200 text-sm">
                          {years[2025].topMoment.subtext}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/years/2025"
                    className="block w-full bg-gradient-to-r from-[#CD8F20] to-[#FFBF00] text-white font-semibold py-3 px-6 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Explore 2025 →
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* Compare Table View */
            <motion.div
              key="compare"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-amber-50">
                      <th className="px-6 py-4 text-left text-base font-semibold text-gray-900">Metric</th>
                      <th className="px-6 py-4 text-center text-base font-semibold text-[#38b6ff]">2024</th>
                      <th className="px-6 py-4 text-center text-base font-semibold text-[#FFBF00]">2025</th>
                      <th className="px-6 py-4 text-center text-base font-semibold text-gray-900">Growth</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { label: 'Students', key: 'students' },
                      { label: 'Schools', key: 'schools' },
                      { label: 'Sessions', key: 'sessions' },
                      { label: 'Programs Run', key: 'programsRun' },
                      { label: 'Attendance', key: 'attendance' }
                    ].map((row, idx) => {
                      const kpis2024 = years[2024].data.kpis as Record<string, number>;
                      const kpis2025 = years[2025].data.kpis as Record<string, number>;
                      const val2024 = kpis2024[row.key] || 0;
                      const val2025 = kpis2025[row.key] || 0;
                      const growth = val2024 > 0 ? Math.round(((Number(val2025) - Number(val2024)) / Number(val2024)) * 100) : 0;

                      return (
                        <motion.tr
                          key={row.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 font-medium text-gray-900">{row.label}</td>
                          <td className="px-6 py-4 text-center">
                            <span className="text-2xl font-bold text-[#38b6ff]">
                              {Number(val2024).toLocaleString()}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="text-2xl font-bold text-[#FFBF00]">
                              {Number(val2025).toLocaleString()}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                              growth > 0 
                                ? 'bg-green-100 text-green-800' 
                                : growth === 0
                                ? 'bg-gray-100 text-gray-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {growth > 0 && (
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
          )}
        </AnimatePresence>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Link
            href="/years"
            className="inline-flex items-center text-gray-700 hover:text-[#38b6ff] font-medium text-lg transition-colors"
          >
            Explore All Years
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

