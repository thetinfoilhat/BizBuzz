"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import YearSwitcherChips from "./YearSwitcherChips";

const programsByYear = {
  2024: [
    {
      title: "Summer Camp",
      description: "Free six-week entrepreneurship camp featuring 6 sessions, 7 guest speakers, and hands-on business challenges. 110 students learned ideation, marketing, finance, and pitching.",
      image: "/program_cards/camps.jpg",
      link: "/camps",
      stats: "6 Sessions • 7 Speakers • 110 Students",
      badge: undefined
    },
    {
      title: "Fish Tank",
      description: "Our inaugural pitch competition at College of DuPage where 100+ young entrepreneurs competed for $750 in prizes, mentorship, and resources to launch their businesses.",
      image: "/program_cards/fishtank.jpg",
      link: "/fish-tank",
      stats: "100+ Competitors • 11 Judges • $750 in Prizes",
      badge: undefined
    },
    {
      title: "Workshops",
      description: "7 workshop series across elementary schools, business fairs, and community centers, reaching 560 students with condensed entrepreneurship curriculum and hands-on activities.",
      image: "/program_cards/workshops.jpg",
      link: "/workshops",
      stats: "7 Workshops • 17 Sessions • 560 Students",
      badge: undefined
    },
    {
      title: "1:1 Mentorship",
      description: "Personalized one-on-one sessions providing business incubation support, curriculum reinforcement, and tailored mentorship in innovation and finance.",
      image: "/program_cards/mentorship.jpg",
      link: "/sessions",
      stats: "Custom Sessions • Individual Support",
      badge: undefined
    }
  ],
  2025: [
    {
      title: "Summer Camp",
      description: "Free seven-week entrepreneurship camp featuring 7 sessions, 5 guest speakers including Shark Tank alum Lindsey Fleischhauer and Mayor Scott Wehrli, and hands-on business challenges. 120 students learned ideation, marketing, finance, and pitching.",
      image: "/program_cards/camps.jpg",
      link: "/camps-2025",
      stats: "7 Sessions • 5 Speakers • 120 Students",
      badge: undefined
    },
    {
      title: "Fish Tank",
      description: "Our second annual pitch competition at Benedictine University where 70 young entrepreneurs competed for funding, mentorship, and resources to launch their businesses.",
      image: "/program_cards/fishtank.jpg",
      link: "/fish-tank-2025",
      stats: "70 Competitors • 10 Judges • Prizes & Funding",
      badge: undefined
    },
    {
      title: "Workshops",
      description: "Workshop series across elementary schools, business fairs, and community centers, reaching students with condensed entrepreneurship curriculum and hands-on activities.",
      image: "/program_cards/workshops.jpg",
      link: "/workshops",
      stats: "Multiple Workshops • Hands-On Learning",
      badge: undefined
    },
    {
      title: "1:1 Mentorship",
      description: "Personalized one-on-one sessions providing business incubation support, curriculum reinforcement, and tailored mentorship in innovation and finance.",
      image: "/program_cards/mentorship.jpg",
      link: "/sessions",
      stats: "Custom Sessions • Individual Support",
      badge: undefined
    }
  ]
};

export default function YearAwareProgramCards() {
  const [selectedYear, setSelectedYear] = useState<2024 | 2025>(2024);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const currentPrograms = programsByYear[selectedYear];

  return (
    <section className="py-20 bg-white" id="programs">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Our Programs
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Select a year to explore that season&apos;s programs
          </p>
        </div>

        {/* Year Switcher */}
        <YearSwitcherChips 
          selectedYear={selectedYear} 
          onYearChange={setSelectedYear}
          className="mb-12"
        />

        {/* Program Cards with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentPrograms.map((program, index) => (
              <motion.div
                key={`${selectedYear}-${program.title}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link 
                  href={program.link}
                  className="block group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-[500px] rounded-xl overflow-hidden ring-2 ring-transparent hover:ring-4 hover:ring-[#38b6ff]/30 transition-all duration-300">
                    {/* Badge */}
                    {program.badge && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                          selectedYear === 2024 
                            ? 'bg-[#38b6ff] text-white'
                            : 'bg-[#FFBF00] text-white'
                        } shadow-lg`}>
                          {program.badge}
                        </div>
                      </div>
                    )}

                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Default state with title */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent">
                      <div className="p-8">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white whitespace-pre-line">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Hover state with description */}
                    <div className={`absolute inset-0 bg-black/90 flex flex-col justify-between transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="p-6 flex-1 flex flex-col justify-center">
                        <p className="text-white text-base md:text-lg leading-relaxed mb-4">
                          {program.description}
                        </p>
                        <div className={`text-sm font-semibold ${
                          selectedYear === 2024 ? 'text-[#38b6ff]' : 'text-[#FFBF00]'
                        }`}>
                          {program.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href={`/years/${selectedYear}`}
            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${
              selectedYear === 2024 
                ? 'from-[#003166] to-[#38b6ff]'
                : 'from-[#CD8F20] to-[#FFBF00]'
            } text-white font-semibold rounded-xl hover:shadow-lg transition-all`}
          >
            View All {selectedYear} Programs
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

