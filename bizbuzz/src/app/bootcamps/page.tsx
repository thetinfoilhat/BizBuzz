"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

// Session data - could be moved to a separate data file if needed
const sessions = [
  {
    id: 1,
    title: 'Session 1',
    description: 'Introduction to Entrepreneurship',
    imageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070',
  },
  {
    id: 2,
    title: 'Session 2',
    description: 'Market Research',
    imageSrc: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070',
  },
  {
    id: 3,
    title: 'Session 3',
    description: 'Product Development',
    imageSrc: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=2070',
  },
  {
    id: 4,
    title: 'Session 4',
    description: 'Business Models',
    imageSrc: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071',
  },
  {
    id: 5,
    title: 'Session 5',
    description: 'Marketing Strategies',
    imageSrc: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070',
  },
  {
    id: 6,
    title: 'Session 6',
    description: 'Pitch Preparation',
    imageSrc: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074',
  }
];

export default function BootcampsPage() {
  const [activeSession, setActiveSession] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollHorizontally = (scrollOffset: number) => {
    scrollContainerRef.current?.scrollBy({
      left: scrollOffset,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#F9F5F0] pt-16">
      {/* Header */}
      <div className="px-8 pt-16 pb-8 text-center">
        <h1 className="text-[#FF4B2B] text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter">
          CAMPS
        </h1>
        <div className="max-w-xl mx-auto mt-4 text-center text-[#FF4B2B]/80 text-sm">
          Learn how unbelievable creative entrepreneurs are made every Wednesday.
        </div>
        <div className="max-w-xs mx-auto mt-8">
          <Link 
            href="/bootcamps/apply" 
            className="block w-full bg-[#FF4B2B] text-white py-3 px-6 text-center rounded"
          >
            REGISTER
          </Link>
        </div>
      </div>

      {/* Feature Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
        {[
          'photo-1517486808906-6ca8b3f8e1c1',
          'photo-1556761175-5973dc0f32e7',
          'photo-1556761175-b413da4baf72'
        ].map((photoId, index) => (
          <div key={index} className="col-span-1 aspect-square relative">
            <Image 
              src={`https://images.unsplash.com/${photoId}?q=80&w=1200`}
              alt="Business Bootcamp"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
      
      <div className="text-center py-4 text-[#FF4B2B]/80 text-sm px-4">
        <p>Entrepreneurship Bootcamp</p>
        <p className="mt-1">2024</p>
      </div>

      {/* Sessions */}
      <div className="mt-16 mb-12 px-8">
        <h2 className="text-[#FF4B2B] text-6xl md:text-7xl font-bold text-center">
          SESSIONS
        </h2>
      </div>

      {/* Carousel */}
      <div className="mb-16 overflow-hidden">
        <div className="flex justify-between px-8 mb-4">
          <button onClick={() => scrollHorizontally(-300)} className="text-[#FF4B2B]">
            Previous
          </button>
          <button onClick={() => scrollHorizontally(300)} className="text-[#FF4B2B]">
            Next
          </button>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="w-8 flex-shrink-0" />
          
          {sessions.map((session) => (
            <div 
              key={session.id} 
              className={`flex-shrink-0 w-[300px] md:w-[400px] mx-3 ${
                activeSession === session.id ? 'opacity-100' : 'opacity-90'
              }`}
              onMouseEnter={() => setActiveSession(session.id)}
              onMouseLeave={() => setActiveSession(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={session.imageSrc}
                  alt={session.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="mt-3">
                <p className="text-[#FF4B2B] text-sm">{session.title}</p>
                <p className="text-[#FF4B2B]/80 text-xs mt-1">{session.description}</p>
                <p className="mt-1 text-[#FF4B2B]/80 text-xs">2024</p>
              </div>
            </div>
          ))}
          
          <div className="w-8 flex-shrink-0" />
        </div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
} 