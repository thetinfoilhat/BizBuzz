"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Camps",
    description: "Free six-week entrepreneurship camps for third to eighth graders, teaching social innovation, finance, and marketing through hands-on activities, prize-filled challenges, guest speakers, and business building.",
    image: "/program_cards/camps.jpg",
    link: "/camps"
  },
  {
    title: "Fish Tank",
    description: "Pitch competitions for student innovators of all ages to present business ideas to a panel of professional judges and earn feedback, hundreds of dollars in awards, and real-world experience.",
    image: "/program_cards/fishtank.jpg",
    link: "/fishtank"
  },
  {
    title: "Workshops",
    description: "Mini three- to four-session business bootcamps offering a condensed version of the BizBuzz curriculum at elementary and middle schools, local business fairs like NCBF and DCBF, and online webinars worldwide.",
    image: "/program_cards/workshops.jpg",
    link: "/workshops"
  },
  {
    title: "Tutoring",
    description: "One-on-one 1.5-hour sessions with students for business incubation, catching up on camp or workshop material, and personalized mentorship in both finance and innovation.",
    image: "/program_cards/mentorship.jpg",
    link: "/sessions"
  }
];

export default function ProgramCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="programs">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1e293b]">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Link 
              href={program.link}
              key={program.title}
              className="block group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden">
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
                <div className={`absolute inset-0 bg-black/80 flex items-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="p-8">
                    <p className="text-white text-lg md:text-xl leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 