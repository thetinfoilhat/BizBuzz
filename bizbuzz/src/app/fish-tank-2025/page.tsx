"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

// 2025 Fish Tank photos
const fishTankPhotos = [
  "/program_cards/fishtank.jpg",
  "/fish_tank/background.jpg",
  "/fish_tank/1.jpg",
  "/fish_tank/2.jpg",
  "/fish_tank/3.jpg",
  "/fish_tank/4.jpg",
  "/fish_tank/5.jpg",
  "/fish_tank/6.jpg",
  "/fish_tank/7.jpg",
  "/fish_tank/8.jpg",
  "/fish_tank/9.jpg",
  "/fish_tank/10.jpg",
];

export default function FishTank2025Page() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % fishTankPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + fishTankPhotos.length) % fishTankPhotos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#CD8F20] via-[#E69F16] to-[#FFBF00] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Link href="/fish-tank" className="text-amber-100 hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                2024 Fish Tank
              </Link>
              <span className="text-amber-100">•</span>
              <Link href="/years" className="text-amber-100 hover:text-white transition-colors">
                All Seasons
              </Link>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Fish Tank 2025
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mb-8">
              The premier student entrepreneurship competition returns to Northwestern University, bigger and better than ever. Watch young innovators pitch their business ideas to industry leaders for a share of $5,000+ in funding and prizes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-white">July 23-24</div>
                <div className="text-sm text-amber-100">Competition Dates</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-sm text-amber-100">Participants</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-white">$5,000+</div>
                <div className="text-sm text-amber-100">Prize Pool</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-white">Northwestern</div>
                <div className="text-sm text-amber-100">Location</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              About Fish Tank 2025
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              An enhanced competition experience featuring two days of pitching, mentorship, and celebration of youth entrepreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#CD8F20] to-[#FFBF00] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-3">Day 1: Preliminary Round</h3>
              <p className="text-gray-700 mb-4">July 23rd, 2025</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>All participants pitch their ideas to preliminary judges</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>2-3 minute pitches followed by Q&A</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>Top 15 finalists selected to advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>Evening mentorship sessions for finalists</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#CD8F20] to-[#FFBF00] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-3">Day 2: Final Round</h3>
              <p className="text-gray-700 mb-4">July 24th, 2025</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>Top 15 finalists pitch to industry leaders</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>5-minute presentations with demos and Q&A</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>Top 5 winners awarded prizes and funding</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>Awards ceremony and celebration</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Prize Structure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#CD8F20] to-[#FFBF00] rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Prize Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">🥇</div>
                <div className="text-2xl font-bold mb-1">$2,000</div>
                <div className="text-sm text-amber-100">First Place</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">🥈</div>
                <div className="text-2xl font-bold mb-1">$1,200</div>
                <div className="text-sm text-amber-100">Second Place</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">🥉</div>
                <div className="text-2xl font-bold mb-1">$800</div>
                <div className="text-sm text-amber-100">Third Place</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">🏆</div>
                <div className="text-2xl font-bold mb-1">$600</div>
                <div className="text-sm text-amber-100">Fourth Place</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">⭐</div>
                <div className="text-2xl font-bold mb-1">$400</div>
                <div className="text-sm text-amber-100">Fifth Place</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              Fish Tank 2024 Highlights
            </h2>
            <p className="text-xl text-gray-700">
              A preview of what to expect in 2025
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fishTankPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => openLightbox(idx)}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              >
                <Image src={photo} alt={`Fish Tank Photo ${idx + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Judges Section (TBA) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              2025 Judges Panel
            </h2>
            <p className="text-xl text-gray-700">
              Coming Soon
            </p>
          </div>

          <div className="bg-white rounded-xl p-12 shadow-lg text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#CD8F20] to-[#FFBF00] flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#000000] mb-4">Distinguished Panel of Industry Leaders</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We&apos;re assembling an exceptional panel of entrepreneurs, investors, and business leaders to judge Fish Tank 2025. Our judges will bring diverse expertise and provide invaluable feedback to help students take their ventures to the next level. Details coming soon!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#CD8F20] to-[#FFBF00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Compete in 2025?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Registration for Fish Tank 2025 opens in Spring 2025. Join our mailing list to be the first to know!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/years/2025" className="px-8 py-4 bg-white text-[#CD8F20] font-semibold rounded-lg hover:shadow-lg transition-all">
                View Full 2025 Season
              </Link>
              <Link href="/camps-2025" className="px-8 py-4 bg-white/20 text-white border border-white/30 font-semibold rounded-lg hover:bg-white/30 transition-all">
                2025 Summer Camps
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={fishTankPhotos[currentImageIndex]} 
              alt={`Fish Tank Photo ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
            {currentImageIndex + 1} / {fishTankPhotos.length}
          </div>
        </div>
      )}
    </div>
  );
}

