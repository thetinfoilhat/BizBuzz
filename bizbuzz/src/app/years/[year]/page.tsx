"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import data2024 from '@/../data/years/2024.json';
import data2025 from '@/../data/years/2025.json';
import InteractiveTimeline from '@/components/InteractiveTimeline';
import LightboxGallery from '@/components/LightboxGallery';
import PressCard from '@/components/PressCard';
import ScrollProgress from '@/components/ScrollProgress';
import type { YearData, ProgramKind } from '@/types/years';

const datasets: Record<string, YearData> = {
  '2024': data2024 as YearData,
  '2025': data2025 as YearData
};

const yearThemes = {
  2024: {
    accentColor: "#38b6ff",
    gradient: "from-[#003166] via-[#235284] to-[#38b6ff]",
    bgGradient: "from-blue-50 to-white",
    watermark: "'24",
    lightBg: "bg-blue-50",
    lightText: "text-blue-900",
    darkText: "text-[#003166]"
  },
  2025: {
    accentColor: "#FFBF00",
    gradient: "from-[#CD8F20] via-[#E69F16] to-[#FFBF00]",
    bgGradient: "from-amber-50 to-white",
    watermark: "'25",
    lightBg: "bg-amber-50",
    lightText: "text-amber-900",
    darkText: "text-[#CD8F20]"
  }
};

export default function YearPage() {
  const params = useParams();
  const yearParam = params?.year as string;
  const year = yearParam === '2024' ? 2024 : 2025;
  const data = datasets[yearParam];
  const theme = yearThemes[year];

  const [activeTab, setActiveTab] = useState<ProgramKind>('camp');

  // Handle hash navigation (e.g., /years/2025#workshops)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const hash = window.location.hash.replace('#', '');
    const tabMap: Record<string, ProgramKind> = {
      'camps': 'camp',
      'workshops': 'workshop',
      'fish-tank': 'fish-tank'
    };
    
    if (hash && tabMap[hash]) {
      setActiveTab(tabMap[hash]);
      // Scroll to programs section
      setTimeout(() => {
        document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Year Not Found</h1>
          <Link href="/years" className="text-blue-600 hover:underline">
            ← Back to Years
          </Link>
        </div>
      </div>
    );
  }

  const filteredPrograms = data.programs.filter(p => p.kind === activeTab);

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.bgGradient}`}>
      {/* Scroll Progress Bar */}
      <ScrollProgress color={theme.accentColor} />

      {/* Hero Strip */}
      <section className={`relative py-20 bg-gradient-to-r ${theme.gradient} overflow-hidden`}>
        {/* Watermark */}
        <div 
          className="absolute top-1/2 right-20 -translate-y-1/2 text-[20rem] font-black opacity-5 pointer-events-none"
          style={{ color: 'white' }}
        >
          {theme.watermark}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link href="/years" className="text-white/80 hover:text-white text-sm inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Years
              </Link>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              BizBuzz {year}
            </h1>
            <p className="text-2xl text-blue-100 max-w-3xl mb-8">
              {data.summary}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#programs" 
                className="px-6 py-3 bg-white text-[#003166] font-semibold rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                View Programs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a 
                href="#gallery" 
                className="px-6 py-3 bg-white/10 text-white border border-white/30 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Photo Gallery
              </a>
              <a 
                href="#timeline" 
                className="px-6 py-3 bg-white/10 text-white border border-white/30 font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Timeline
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics Grid */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
          >
            <h2 className={`text-3xl font-bold ${theme.darkText} mb-8 text-center`}>
              {year} Impact Metrics
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div 
                  className="text-5xl font-bold mb-2"
                  style={{ color: theme.accentColor }}
                >
                  {data.kpis.students.toLocaleString()}
                </div>
                <div className="text-gray-700 font-medium">Students</div>
              </div>

              <div className="text-center">
                <div 
                  className="text-5xl font-bold mb-2"
                  style={{ color: theme.accentColor }}
                >
                  {data.kpis.schools}
                </div>
                <div className="text-gray-700 font-medium">Schools</div>
              </div>

              <div className="text-center">
                <div 
                  className="text-5xl font-bold mb-2"
                  style={{ color: theme.accentColor }}
                >
                  {data.kpis.programsRun}
                </div>
                <div className="text-gray-700 font-medium">Programs</div>
              </div>

              <div className="text-center">
                <div 
                  className="text-5xl font-bold mb-2"
                  style={{ color: theme.accentColor }}
                >
                  ${data.kpis.dollarsRaised?.toLocaleString() || 0}
                </div>
                <div className="text-gray-700 font-medium">Raised</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: theme.accentColor }}
                >
                  {data.kpis.sessions}
                </div>
                <div className="text-gray-700 font-medium text-sm">Total Sessions</div>
              </div>

              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: theme.accentColor }}
                >
                  {data.kpis.attendance?.toLocaleString() || 0}
                </div>
                <div className="text-gray-700 font-medium text-sm">Attendance</div>
              </div>

              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: theme.accentColor }}
                >
                  {data.kpis.volunteers || 0}
                </div>
                <div className="text-gray-700 font-medium text-sm">Volunteers</div>
              </div>

              <div className="text-center">
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: theme.accentColor }}
                >
                  {data.kpis.pressMentions || 0}
                </div>
                <div className="text-gray-700 font-medium text-sm">Press Mentions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Tabs Section */}
      <section id="programs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${theme.darkText} mb-8 text-center`}>
            {year} Programs
          </h2>

          {/* Tab Controls */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-1.5 shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveTab('camp')}
                className={`px-6 py-3 rounded-full font-semibold text-base transition-all ${
                  activeTab === 'camp'
                    ? `bg-gradient-to-r ${theme.gradient} text-white shadow-md`
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Camps
              </button>
              <button
                onClick={() => setActiveTab('workshop')}
                className={`px-6 py-3 rounded-full font-semibold text-base transition-all ${
                  activeTab === 'workshop'
                    ? `bg-gradient-to-r ${theme.gradient} text-white shadow-md`
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Workshops
              </button>
              <button
                onClick={() => setActiveTab('fish-tank')}
                className={`px-6 py-3 rounded-full font-semibold text-base transition-all ${
                  activeTab === 'fish-tank'
                    ? `bg-gradient-to-r ${theme.gradient} text-white shadow-md`
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                Fish Tank
              </button>
            </div>
          </div>

          {/* Program List */}
          <div className="space-y-8">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map((program, idx) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Images */}
                    {program.images && program.images.length > 0 && (
                      <div className="md:col-span-1">
                        <div className="grid grid-cols-3 md:grid-cols-1 gap-2 p-4 h-full">
                          {program.images.slice(0, 3).map((img, i) => (
                            <div key={i} className="relative h-32 md:h-40 rounded-lg overflow-hidden">
                              <Image
                                src={img}
                                alt={`${program.title} image ${i + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className={`${program.images && program.images.length > 0 ? 'md:col-span-2' : 'md:col-span-3'} p-6`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className={`text-2xl font-bold ${theme.darkText} mb-2`}>
                            {program.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {new Date(program.dateISO).toLocaleDateString('en-US', { 
                                month: 'long', 
                                day: 'numeric', 
                                year: 'numeric' 
                              })}
                            </span>
                            {program.venue && (
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {program.venue}
                              </span>
                            )}
                            {program.attendance && (
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                {program.attendance} attendees
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 text-base leading-relaxed mb-4">
                        {program.description}
                      </p>

                      {program.resources && program.resources.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {program.resources.map((resource, i) => (
                            <a
                              key={i}
                              href={resource.href}
                              className={`inline-flex items-center px-4 py-2 ${theme.lightBg} ${theme.lightText} rounded-lg text-sm font-medium hover:shadow-md transition-shadow`}
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              {resource.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-xl">
                <p className="text-gray-500 text-lg">No {activeTab.replace('-', ' ')} programs found for {year}.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {data.timeline && data.timeline.length > 0 && (
        <section id="timeline" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold ${theme.darkText} mb-12 text-center`}>
              {year} Timeline
            </h2>

            <InteractiveTimeline 
              items={data.timeline}
              accentColor={theme.accentColor}
            />
          </div>
        </section>
      )}

      {/* Stories Section */}
      {data.stories && data.stories.length > 0 && (
        <section className={`py-16 ${theme.lightBg}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold ${theme.darkText} mb-12 text-center`}>
              Stories from {year}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.stories.map((story, idx) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  {story.image && (
                    <div className="relative h-64">
                      <Image
                        src={story.image}
                        alt={story.name || story.headline}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {story.name && (
                      <div className="text-sm text-gray-500 mb-1 uppercase tracking-wide">
                        {story.role}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {story.headline}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {story.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {data.gallery && data.gallery.length > 0 && (
        <section id="gallery" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold ${theme.darkText} mb-12 text-center`}>
              Photo Gallery
            </h2>

            <LightboxGallery images={data.gallery} yearColor={theme.accentColor} />
          </div>
        </section>
      )}

      {/* Partners Section */}
      {data.partners && data.partners.length > 0 && (
        <section className={`py-16 ${theme.lightBg}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold ${theme.darkText} mb-12 text-center`}>
              {year} Partners
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {data.partners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
                >
                  {partner.href ? (
                    <a href={partner.href} target="_blank" rel="noopener noreferrer">
                      <div className="relative h-20 w-32">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="relative h-20 w-32">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Press Section */}
      {data.press && data.press.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold ${theme.darkText} mb-12 text-center`}>
              Press Coverage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.press.map((item, idx) => (
                <PressCard 
                  key={idx}
                  item={item}
                  accentColor={theme.accentColor}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

