"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import data2024 from '@/../data/years/2024.json';
import data2025 from '@/../data/years/2025.json';
import data2026 from '@/../data/years/2026.json';

const years = [
  {
    ...data2024,
    accentColor: "#38b6ff",
    gradient: "from-[#003166] via-[#235284] to-[#38b6ff]",
    bgGradient: "from-blue-50 to-white",
    watermark: "'24"
  },
  {
    ...data2025,
    accentColor: "#FFBF00",
    gradient: "from-[#CD8F20] via-[#E69F16] to-[#FFBF00]",
    bgGradient: "from-amber-50 to-white",
    watermark: "'25"
  },
  {
    ...data2026,
    accentColor: "#10b981",
    gradient: "from-[#064e3b] via-[#065f46] to-[#10b981]",
    bgGradient: "from-emerald-50 to-white",
    watermark: "'26"
  }
];

export default function YearsIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#040037] via-[#003166] to-[#235284] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#38b6ff]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38b6ff] to-[#FFBF00]">Journey</span>
            </h1>
            <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
              Explore the growth and impact of BizBuzz across multiple seasons of programs, workshops, and competitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Year Cards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {years.map((yearData, idx) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <Link href={`/years/${yearData.year}`}>
                  <div className={`relative bg-gradient-to-b ${yearData.bgGradient} rounded-2xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-300 group`}>
                    {/* Watermark */}
                    <div 
                      className="absolute top-4 right-4 text-9xl font-black opacity-5 pointer-events-none"
                      style={{ color: yearData.accentColor }}
                    >
                      {yearData.watermark}
                    </div>

                    {/* Header Strip */}
                    <div className={`bg-gradient-to-r ${yearData.gradient} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                      <div className="relative z-10">
                        <h2 className="text-5xl font-bold mb-3">BizBuzz {yearData.year}</h2>
                        <p className="text-xl opacity-90">{yearData.summary}</p>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                          <div 
                            className="text-5xl font-bold mb-2"
                            style={{ color: yearData.accentColor }}
                          >
                            {yearData.kpis.students.toLocaleString()}
                          </div>
                          <div className="text-gray-700 font-medium">Students</div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                          <div 
                            className="text-5xl font-bold mb-2"
                            style={{ color: yearData.accentColor }}
                          >
                            {yearData.kpis.programsRun}
                          </div>
                          <div className="text-gray-700 font-medium">Programs</div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                          <div 
                            className="text-5xl font-bold mb-2"
                            style={{ color: yearData.accentColor }}
                          >
                            {yearData.kpis.officeHours?.toLocaleString() ?? 0}
                          </div>
                          <div className="text-gray-700 font-medium">Office Hours</div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                          <div 
                            className="text-5xl font-bold mb-2"
                            style={{ color: yearData.accentColor }}
                          >
                            {yearData.kpis.sessions}
                          </div>
                          <div className="text-gray-700 font-medium">Sessions</div>
                        </div>
                      </div>

                      {/* Featured Image Preview */}
                      {yearData.gallery && yearData.gallery.length > 0 && (
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {yearData.gallery.slice(0, 3).map((img, i) => (
                            <div key={i} className="relative h-32 rounded-lg overflow-hidden">
                              <Image
                                src={img}
                                alt={`${yearData.year} highlight ${i + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <div 
                        className={`bg-gradient-to-r ${yearData.gradient} text-white font-semibold py-4 px-6 rounded-xl text-center transition-all group-hover:shadow-lg flex items-center justify-center`}
                      >
                        Explore {yearData.year} Season
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

