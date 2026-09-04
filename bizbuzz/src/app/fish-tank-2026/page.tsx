"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function FishTank2026Page() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0fdf4]">

      {/* ── Hero Section ── */}
      <div className="relative bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#047857]">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#10b981]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#34d399]/20 rounded-full blur-3xl"></div>
          <svg className="absolute bottom-0 w-full text-[#f0fdf4]" preserveAspectRatio="none" viewBox="0 0 1440 60" fill="currentColor">
            <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,27,576,21.3C672,16,768,21,864,26.7C960,32,1056,37,1152,37.3C1248,37,1344,32,1392,29.3L1440,27L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              className="lg:col-span-6 relative z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/30 border border-white/40 backdrop-blur-sm mb-10 shadow-sm">
                <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                <span className="text-base font-medium text-white">Summer 2026</span>
              </div>

              <h1 className="text-7xl lg:text-8xl font-bold mb-10 tracking-tight leading-tight">
                <span className="text-white drop-shadow-md">Fish</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a7f3d0] via-[#34d399] to-[#10b981] drop-shadow-sm">
                  Tank
                </span>
              </h1>

              <p className="text-2xl text-white/95 font-light mb-12 max-w-2xl leading-relaxed">
                BizBuzz&apos;s premier pitch competition where young entrepreneurs present their ventures to a panel of real investors and business leaders.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-gradient-to-r from-[#10b981] to-[#34d399] text-white font-medium py-4 px-8 rounded-lg text-xl transition-all hover:shadow-lg hover:shadow-[#10b981]/30 hover:-translate-y-1 active:translate-y-0 inline-flex items-center"
                  >
                    Explore Other Years
                    <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-[#a7f3d0]/40 overflow-hidden z-[200]">
                      {[
                        { label: 'Fish Tank 2024', href: '/fish-tank-2024' },
                        { label: 'Fish Tank 2025', href: '/fish-tank-2025' },
                      ].map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-3 text-[#064e3b] font-medium hover:bg-[#f0fdf4] transition-colors text-base"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-6 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative h-[580px] w-full overflow-visible">
                <motion.div
                  className="absolute top-[160px] left-[10px] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-20 border-[3px] border-white"
                  initial={{ x: -30, y: 0, rotate: -8 }}
                  animate={{ x: 0, y: 0, rotate: -8 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.03, rotate: -6, transition: { duration: 0.3 } }}
                >
                  <Image src="/fish_tank/2025/images/gallery-pitching.jpg" alt="Fish Tank pitching" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/25 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute top-[-20px] left-[30%] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(16,185,129,0.3)] z-30 border-[3px] border-white"
                  initial={{ scale: 0.92, y: 10, rotate: 4 }}
                  animate={{ scale: 1, y: 0, rotate: 4 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <Image src="/fish_tank/2025/images/gallery-stage.jpg" alt="Fish Tank stage" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/25 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute bottom-[10px] right-[60px] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-20 border-[3px] border-white"
                  initial={{ x: 30, y: 0, rotate: 8 }}
                  animate={{ x: 0, y: 0, rotate: 8 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.03, rotate: 6, transition: { duration: 0.3 } }}
                >
                  <Image src="/fish_tank/2025/images/gallery-awards.jpg" alt="Fish Tank awards" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/25 to-transparent"></div>
                </motion.div>

                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#10b981]/20 to-[#34d399]/15 blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-[#34d399]/20 to-[#10b981]/15 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#a7f3d0]/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#a7f3d0]/40">
            <div className="px-8 py-10 text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#064e3b] to-[#10b981] mb-3">100</div>
              <div className="text-[#064e3b] font-medium text-lg">Competitors</div>
            </div>
            <div className="px-8 py-10 text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#064e3b] to-[#10b981] mb-3">2</div>
              <div className="text-[#064e3b] font-medium text-lg">Competition Tracks</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two Tracks Section ── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#d1fae5] border border-[#6ee7b7] mb-6">
              <div className="w-2 h-2 rounded-full bg-[#10b981] mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-[#065f46]">2026 Season</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#064e3b] mb-4">Two Competitions. One Stage.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Fish Tank 2026 featured two separate tracks so every young entrepreneur competed against peers at their level.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kidpreneurs track */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-[#a7f3d0] p-8 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#d1fae5] flex items-center justify-center mb-6 text-2xl">🐟</div>
              <h3 className="text-2xl font-bold text-[#064e3b] mb-2">Kidpreneurs Track</h3>
              <p className="text-[#10b981] font-medium text-sm mb-4">For Kidpreneurs Camp students</p>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Built for our youngest entrepreneurs. Kidpreneurs camp students pitched their business ideas in a supportive, beginner-friendly environment designed to build confidence and creativity.
              </p>
              <div className="mt-6 pt-6 border-t border-[#d1fae5]">
                <span className="inline-flex items-center text-sm text-[#065f46] font-medium">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Held Summer 2026
                </span>
              </div>
            </motion.div>

            {/* Venture Lab track */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg border border-[#a7f3d0] p-8 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#d1fae5] flex items-center justify-center mb-6 text-2xl">🦈</div>
              <h3 className="text-2xl font-bold text-[#064e3b] mb-2">Venture Lab Track</h3>
              <p className="text-[#10b981] font-medium text-sm mb-4">For Venture Lab students</p>
              <p className="text-gray-600 leading-relaxed flex-grow">
                For students who went through the full Venture Lab experience. A more rigorous pitch format, deeper feedback from judges, and higher stakes as competitors went head-to-head.
              </p>
              <div className="mt-6 pt-6 border-t border-[#d1fae5]">
                <span className="inline-flex items-center text-sm text-[#065f46] font-medium">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Held Summer 2026
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Enrollment Banner ── */}
      <section className="bg-gradient-to-r from-[#065f46] to-[#064e3b] py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 border border-white/25 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#34d399] mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">2026 Fish Tank Coming Soon</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fish Tank 2026 is on its way
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
            Want to pitch your business idea to real investors? Enroll now to secure your spot in the 2026 Fish Tank competition before seats fill up.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdTtlWLYIGdU0cVxt2JRIrtS7eEk40Tk0v1IsW6CiZ4mrRtDg/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-white text-[#064e3b] font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Enroll for Fish Tank 2026
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p className="text-sm text-white/50 mt-4">Limited seats available</p>
        </div>
      </section>

    </div>
  );
}
