"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const galleryPhotos = [
  "/fish_tank/2025/images/goodpic.jpg",
  "/fish_tank/2025/images/gallery-stage.jpg",
  "/fish_tank/2025/images/gallery-pitching.jpg",
  "/fish_tank/2025/images/gallery-prototype.jpg",
  "/fish_tank/2025/images/gallery-workshop.jpg",
  "/fish_tank/2025/images/gallery-team.jpg",
  "/fish_tank/2025/images/gallery-speaker.jpg",
  "/fish_tank/2025/images/gallery-awards.jpg",
  "/fish_tank/2025/images/gallery-trophy.jpg",
  "/fish_tank/2025/images/gallery-market.jpg",
  "/fish_tank/2025/images/prelim-judge.jpg",
  "/fish_tank/2025/images/gallery-check.jpg",
];

const presenters = [
  {
    name: "TBD",
    business: "TBD",
    description: "Presenter details will be announced after Demo Day 2026.",
    image: "",
  },
  {
    name: "TBD",
    business: "TBD",
    description: "Presenter details will be announced after Demo Day 2026.",
    image: "",
  },
  {
    name: "TBD",
    business: "TBD",
    description: "Presenter details will be announced after Demo Day 2026.",
    image: "",
  },
  {
    name: "TBD",
    business: "TBD",
    description: "Presenter details will be announced after Demo Day 2026.",
    image: "",
  },
  {
    name: "TBD",
    business: "TBD",
    description: "Presenter details will be announced after Demo Day 2026.",
    image: "",
  },
  {
    name: "TBD",
    business: "TBD",
    description: "Presenter details will be announced after Demo Day 2026.",
    image: "",
  },
];

const timelineSteps = [
  {
    time: "TBD",
    title: "Doors Open & Check-In",
    description: "Students and families arrive. Teams set up their display boards and product demos.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    time: "TBD",
    title: "Opening Remarks",
    description: "Welcome from BizBuzz leadership. Overview of the day and what to expect.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    time: "TBD",
    title: "Student Pitches",
    description: "Each team presents their business idea — 3 minutes to pitch, 2 minutes for Q&A from the audience.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    time: "TBD",
    title: "Open Showcase",
    description: "Families and guests walk the floor, interact with student projects, and ask questions directly.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    time: "TBD",
    title: "Awards & Closing",
    description: "Recognition for all participants. Special awards for standout presentations and most innovative ideas.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function DemoDay2026Page() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => { setCurrentImageIndex(index); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryPhotos.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={galleryPhotos[0]}
            alt="Demo Day 2026 background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#78350f]/95 via-[#92400e]/90 to-[#f59e0b]/80"></div>
        </div>

        <div className="absolute top-40 right-32 w-96 h-96 rounded-full bg-[#f59e0b]/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#fbbf24]/10 blur-3xl"></div>

        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <svg className="w-full fill-white" viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-20 pt-24 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm mb-8 w-fit">
                <div className="w-2 h-2 rounded-full bg-[#fbbf24] mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-white">July 26th, 2026 · Benedictine University</span>
              </div>

              <h1 className="text-left mb-8">
                <span className="block text-8xl font-extrabold tracking-tight text-white leading-none">DEMO</span>
                <span className="block text-8xl font-extrabold tracking-tight text-[#fbbf24] leading-none">DAY</span>
              </h1>

              <div className="bg-[#78350f]/40 backdrop-blur-sm rounded-xl p-7 border border-white/10 shadow-lg mb-10">
                <p className="text-xl leading-relaxed text-white">
                  The culminating showcase of BizBuzz Camp 2026 — where students present their finished business ideas to families, mentors, and community members.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { value: "TBD", label: "Presenters" },
                  { value: "TBD", label: "Businesses" },
                  { value: "TBD", label: "Attendees" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-[#78350f]/40 backdrop-blur-sm rounded-xl py-5 px-3 text-center border border-white/10">
                    <div className="text-3xl font-bold text-[#fbbf24]">{value}</div>
                    <div className="text-sm text-white">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#schedule" className="inline-flex items-center px-8 py-4 bg-[#fbbf24] text-[#78350f] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                  View Schedule
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf8v3IBjVF-6ecAS72GkOgMHkZMTmfkP3m3BoR8DSxOY5Q0xg/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#78350f] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  Register Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right — stacked image collage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[520px] hidden lg:block"
            >
              <div className="absolute top-0 left-8 w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 rotate-[-4deg]">
                <Image src={galleryPhotos[1]} alt="Demo Day" fill className="object-cover" />
              </div>
              <div className="absolute top-16 right-0 w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 rotate-[5deg]">
                <Image src={galleryPhotos[2]} alt="Demo Day" fill className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-[30%] w-[260px] h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#fbbf24]/40 rotate-[-2deg] z-10">
                <Image src={galleryPhotos[3]} alt="Demo Day" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About Demo Day ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="inline-block px-4 py-1 bg-[#fef3c7] text-[#92400e] rounded-full text-sm font-medium mb-6">
                The Showcase
              </span>
              <h2 className="text-5xl font-bold text-[#0f172a] mb-6">
                Where Ideas <span className="text-[#f59e0b]">Come to Life</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Demo Day is the final celebration of BizBuzz Camp. After weeks of learning about entrepreneurship, marketing, and finance, students take the stage to pitch their original business concepts to a live audience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlike a competition, Demo Day is a showcase — every student presents, every idea gets heard, and the entire community comes together to celebrate young entrepreneurs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image src={galleryPhotos[4]} alt="Demo Day showcase" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#78350f]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fbbf24] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#78350f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">July 26th, 2026 · 3:00 PM – 8:00 PM</p>
                    <p className="text-white/70 text-sm">Benedictine University</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Day Schedule Timeline ── */}
      <section id="schedule" className="py-20 bg-[#fffbeb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#fef3c7] text-[#92400e] rounded-full text-sm font-medium mb-4">
              Day of Event
            </span>
            <h2 className="text-5xl font-bold text-[#0f172a]">Schedule</h2>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#fde68a]"></div>

            <div className="space-y-10">
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-8 relative"
                >
                  <div className="w-16 h-16 rounded-full bg-[#f59e0b] flex items-center justify-center flex-shrink-0 shadow-lg text-white z-10">
                    {step.icon}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-[#fde68a]/50 flex-1">
                    <div className="text-[#f59e0b] font-semibold text-sm mb-1">{step.time}</div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

    

      {/* ── Register Section ── */}
      <section id="register" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1 bg-[#fef3c7] text-[#92400e] rounded-full text-sm font-medium mb-6">
              Secure Your Spot
            </span>
            <h2 className="text-5xl font-bold text-[#0f172a] mb-4">Register for Demo Day</h2>
            <p className="text-lg text-gray-500 mb-4">
              <span className="font-semibold text-[#0f172a]">July 26th, 2026 · 3:00 PM – 8:00 PM</span>
            </p>
            <p className="text-lg text-gray-500 mb-4">
              <span className="font-semibold text-[#0f172a]">Benedictine University</span>
            </p>
            <p className="text-lg text-gray-500 mb-10">
              Register to attend and cheer on the next generation of entrepreneurs as they pitch their business ideas live.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8v3IBjVF-6ecAS72GkOgMHkZMTmfkP3m3BoR8DSxOY5Q0xg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-5 bg-[#f59e0b] text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Register Now
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="text-sm text-gray-400 mt-4">Free admission · Open to the community</p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-r from-[#78350f] via-[#92400e] to-[#f59e0b]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Want to Showcase at Demo Day?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join BizBuzz Camp 2026 and turn your business idea into a reality! Our program provides mentorship, resources, and a supportive community to help you succeed. Whether you're dreaming of launching a tech startup or a local service, Demo Day is your stage to shine.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/camps-2026?tab=venturelab" className="px-8 py-4 bg-white text-[#78350f] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                View 2026 Camp
              </Link>
              <Link href="/sessions" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-xl hover:bg-white/30 transition-all">
                1:1 Mentorship
              </Link>
            </div>
            <p className="text-white/60 text-sm mt-5 max-w-xl mx-auto">
              Demo Day is open to all 2026 Venture Lab participants and rising 6th–9th graders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-white hover:text-gray-300 transition-colors">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryPhotos[currentImageIndex]} alt={`Demo Day photo ${currentImageIndex + 1}`} fill className="object-contain" />
          </div>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-white hover:text-gray-300 transition-colors">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImageIndex + 1} / {galleryPhotos.length}
          </div>
        </div>
      )}
    </div>
  );
}
