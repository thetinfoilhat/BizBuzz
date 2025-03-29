"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProgramCardProps {
  title: string;
  imageSrc: string;
  description: string;
  year: string;
  link: string;
}

const ProgramCard = ({ title, imageSrc, description, year, link }: ProgramCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
      </div>

      {/* Main Title Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        <div 
          className={`transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-[-20px]' : 'opacity-100'}`}
        >
          <h3 className="text-white text-3xl md:text-4xl font-bold tracking-wider uppercase mb-2">{title}</h3>
          <p className="text-white text-2xl md:text-3xl font-medium">{year}</p>
        </div>
      </div>

      {/* Hover Content */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 z-20 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-white text-3xl md:text-4xl font-bold tracking-wider uppercase mb-4">{title}</h3>
        <p className="text-white text-base md:text-lg mb-6 max-w-xs text-center">
          {description}
        </p>
        <Link 
          href={link}
          className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const ProgramCards = () => {
  const programs = [
    {
      title: "Summer Camp",
      year: "2024",
      imageSrc: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=1200&auto=format&fit=crop",
      description: "Immersive summer entrepreneurship program for 3rd-8th graders. Students develop business ideas, build MVPs, and pitch to investors.",
      link: "/summer-camp"
    },
    {
      title: "Fish Tank",
      year: "Contest",
      imageSrc: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1200&auto=format&fit=crop",
      description: "Our version of Shark Tank! Students compete by pitching their business ideas to real entrepreneurs and receive feedback and funding.",
      link: "/fish-tank"
    },
    {
      title: "CBF Workshop",
      year: "2024",
      imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop", 
      description: "Community-Based Entrepreneurship workshops focusing on social impact. Students learn to identify and solve local community challenges.",
      link: "/workshops"
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#0f172a]">
          Our Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              year={program.year}
              imageSrc={program.imageSrc}
              description={program.description}
              link={program.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards; 