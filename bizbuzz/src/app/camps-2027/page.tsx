"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';


export default function Camps2027Page() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#faf5ff]">

      {/* ── Hero Section ── */}
      <div className="relative bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#5b21b6]">
        {/* Background SVG icons */}
        <div className="absolute top-24 right-24 w-60 h-60 opacity-15">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M464 192l-33.5-5.5c-1.4-4.9-2.9-9.6-4.7-14.3l19.8-27.8-32-32-27.8 19.8c-4.7-1.8-9.4-3.3-14.3-4.7L366 96h-44l-5.5 33.5c-4.9 1.4-9.6 2.9-14.3 4.7l-27.8-19.8-32 32 19.8 27.8c-1.8 4.7-3.3 9.4-4.7 14.3L224 192v44l33.5 5.5c1.4 4.9 2.9 9.6 4.7 14.3l-19.8 27.8 32 32 27.8-19.8c4.7 1.8 9.4 3.3 14.3 4.7L322 336h44l5.5-33.5c4.9-1.4 9.6-2.9 14.3-4.7l27.8 19.8 32-32-19.8-27.8c1.8-4.7 3.3-9.4 4.7-14.3L464 236v-44zM288 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
          </svg>
        </div>
        <div className="absolute top-48 right-48 w-40 h-40 opacity-10">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7z" />
          </svg>
        </div>
        <div className="absolute bottom-48 left-24 w-48 h-48 opacity-10">
          <svg viewBox="0 0 640 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#8b5cf6]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#a78bfa]/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.05]"></div>
          <svg className="absolute bottom-0 w-full text-[#faf5ff]" preserveAspectRatio="none" viewBox="0 0 1440 60" fill="currentColor">
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
                <span className="text-base font-medium text-white">Summer 2027</span>
              </div>

              <h1 className="text-7xl lg:text-8xl font-bold mb-10 tracking-tight leading-tight">
                <span className="text-white drop-shadow-md">BizBuzz</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ddd6fe] via-[#8b5cf6] to-[#a78bfa] drop-shadow-sm">
                  Camp
                </span>
              </h1>

              <p className="text-2xl text-white/95 font-light mb-12 max-w-2xl leading-relaxed">
                Our multi-week entrepreneurship camp helps young founders ideate, build, and pitch market-ready ventures alongside industry leaders and business experts.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-medium py-4 px-8 rounded-lg text-xl transition-all hover:shadow-lg hover:shadow-[#8b5cf6]/30 hover:-translate-y-1 active:translate-y-0 inline-flex items-center"
                  >
                    Explore Other Camps
                    <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-[#ddd6fe]/40 overflow-hidden z-[200]">
                      {[
                        { label: 'Camp 2024', href: '/camps-2024' },
                        { label: 'Camp 2025', href: '/camps-2025' },
                        { label: 'Camp 2026', href: '/camps-2026' },
                      ].map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-3 text-[#2e1065] font-medium hover:bg-[#f5f3ff] transition-colors text-base"
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
                  <Image src="/camp_imgs/2025/session5/session5a.jpg" alt="Session collaboration" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065]/25 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute top-[-20px] left-[30%] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(139,92,246,0.3)] z-30 border-[3px] border-white"
                  initial={{ scale: 0.92, y: 10, rotate: 4 }}
                  animate={{ scale: 1, y: 0, rotate: 4 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <Image src="/camp_imgs/2025/session3/session3b.jpg" alt="Marketing workshop" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065]/25 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute bottom-[10px] right-[60px] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-20 border-[3px] border-white"
                  initial={{ x: 30, y: 0, rotate: 8 }}
                  animate={{ x: 0, y: 0, rotate: 8 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.03, rotate: 6, transition: { duration: 0.3 } }}
                >
                  <Image src="/camp_imgs/2025/session4/session4c.jpg" alt="Prototype building" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065]/25 to-transparent"></div>
                </motion.div>

                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#a78bfa]/15 blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-[#a78bfa]/20 to-[#8b5cf6]/15 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── 2027 Interest Banner ── */}
      <section className="bg-gradient-to-r from-[#4c1d95] to-[#2e1065] py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 border border-white/25 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#a78bfa] mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">2026 Camp In Progress</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            BizBuzz Camp 2026 is currently underway
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
            Missed your spot in 2026 or already looking ahead? Secure your place in the 2027 camp now before seats fill up.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_MouwxaWfjA6UeibsY2lrZoZky-n13jffMH7aP1UNiuDGzQ/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-white text-[#2e1065] font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Guarantee Your 2027 Spot
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
