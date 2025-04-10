"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

// Workshop data with updated information
const workshops = [
  {
    id: "dupage",
    title: "Dupage Children's Business Fair Workshops",
    date: "March 16th, 2025 to April 26th, 2025",
    location: "Dupage County, IL",
    description: "Three workshops preparing 30 entrepreneurs for the upcoming Dupage Children's Business Fair, guiding them through ideation, marketing, and finance.",
    sessions: [
      "DCBF Workshop 1 | March 16th, 2025",
      "DCBF Workshop 2 | March 23rd, 2025",
      "DCBF Workshop 3 | April 6th, 2025",
      "Dupage Children's Business Fair | April 26th, 2025"
    ],
    images: [
      "/workshops/dcbf/1.jpg",
      "/workshops/dcbf/2.jpg",
      "/workshops/dcbf/3.jpg",
    ],
    color: "#2563EB"
  },
  {
    id: "madison",
    title: "Madison Junior High mxINCedu Mentorship Program",
    date: "August 15th, 2024 to December 20th, 2024",
    location: "Naperville, IL",
    description: "A mentorship program enhancing the mxINCedu curriculum with new worksheets, slides, and activities for 75 students.",
    sessions: [
      "Madison Mentorship Program | August 15th, 2024 to December 20th, 2024"
    ],
    images: [
      "/workshops/be/1.png",
      "/workshops/be/2.png",
      "/workshops/be/3.png",
    ],
    color: "#4F46E5"
  },
  {
    id: "brookdale",
    title: "Brookdale Elementary School Workshops",
    date: "October 30th, 2024 to November 20th, 2024",
    location: "Naperville, IL",
    description: "Four workshops teaching 20 young entrepreneurs fundamental business skills, culminating in a school Pitch Night for parents and high school guest judges.",
    sessions: [
      "Brookdale Workshop 1 | October 30th, 2024",
      "Brookdale Workshop 2 | November 3rd, 2024",
      "Brookdale Workshop 3 | November 10th, 2024",
      "Brookdale Workshop 4 | November 20th, 2024"
    ],
    images: [
      "/workshops/be/4.png",
      "/workshops/be/5.png",
      "/workshops/be/6.png",
    ],
    color: "#0EA5E9"
  },
  {
    id: "bestbrains",
    title: "Best Brains Learning Center Workshops",
    date: "August 6th, 2024 to August 7th, 2024",
    location: "Naperville, IL",
    description: "Two workshops introducing 20 students to entrepreneurship and the process of turning imagination into innovation.",
    sessions: [
      "Best Brains Workshop 1 | August 6th, 2024",
      "Best Brains Workshop 2 | August 7th, 2024"
    ],
    images: [
      "/workshops/be/7.png",
      "/workshops/se/1.png",
      "/workshops/se/2.png",
    ],
    color: "#06B6D4"
  },
  {
    id: "naperville",
    title: "Naperville Children's Business Fair Workshops",
    date: "July 6th, 2024 to August 3rd, 2024",
    location: "Naperville, IL",
    description: "Three workshops helping 50 students use creative problem-solving, marketing, and finance to launch products sold alongside 150 young entrepreneurs at the Naperville Children's Business Fair.",
    sessions: [
      "NCBF Workshop 1 | July 6th, 2024",
      "NCBF Workshop 2 | July 13th, 2024",
      "NCBF Workshop 3 | July 20th, 2024",
      "Naperville Children's Business Fair | August 3rd, 2024"
    ],
    images: [
      "/workshops/ncbf/1.jpeg",
      "/workshops/ncbf/2.jpeg",
      "/workshops/ncbf/3.jpeg",
    ],
    color: "#3B82F6"
  },
  {
    id: "crone",
    title: "Crone Middle School Talk",
    date: "May 31st, 2024",
    location: "Naperville, IL",
    description: "A school talk encouraging 60 students to see themselves as problem-solvers and future business creators.",
    sessions: [
      "Crone Middle School Talk | May 31st, 2024"
    ],
    images: [
      "/workshops/se/1.png",
      "/workshops/se/2.png",
      "/workshops/se/3.png",
    ],
    color: "#6366F1"
  },
  {
    id: "scott",
    title: "Scott Elementary School Talk",
    date: "May 21st, 2024",
    location: "Naperville, IL",
    description: "A school talk inspiring 135 students to explore entrepreneurship by showing how creative ideas can turn into real businesses—even as kids.",
    sessions: [
      "Scott Elementary School Talk | May 21st, 2024"
    ],
    images: [
      "/workshops/se/1.png",
      "/workshops/se/2.png",
      "/workshops/se/3.png",
    ],
    color: "#8B5CF6"
  }
];

// Image component with hover effect
const FeatureImage = ({ src, alt, priority = false }: { src: string, alt: string, priority?: boolean }) => {
  return (
    <div className="relative rounded-xl overflow-hidden h-full w-full group transition-all duration-300">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    </div>
  );
};

// Session Cards component
const SessionCards = ({ sessions, color }: { sessions: string[], color: string }) => {
  return (
    <div className="h-full">
      <div className="bg-white rounded-2xl shadow-md h-full overflow-hidden border border-gray-100">
        <div className="py-4 px-6" style={{ backgroundColor: color }}>
          <h4 className="font-bold text-white text-xl">Sessions</h4>
        </div>
        
        <div className="p-6">
          <ul className="space-y-4">
            {sessions.map((session, i) => (
              <li key={i} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mt-0.5 text-white mr-3" style={{ backgroundColor: color }}>
                  {i + 1}
                </span>
                <span className="text-gray-800 text-base">{session}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Workshop Images Grid
const ImagesGrid = ({ images, title }: { images: string[], title: string }) => {
  return (
    <div className="grid grid-cols-5 gap-4 h-[240px]">
      <div className="col-span-3 h-full">
        <FeatureImage src={images[0]} alt={`${title} - primary image`} />
      </div>
      <div className="col-span-2 grid grid-rows-2 gap-4 h-full">
        <div className="row-span-1">
          <FeatureImage src={images[1]} alt={`${title} - secondary image`} />
        </div>
        <div className="row-span-1">
          <FeatureImage src={images[2]} alt={`${title} - tertiary image`} />
        </div>
      </div>
    </div>
  );
};

// Workshop card component
const WorkshopCard = ({ workshop, index }: { workshop: typeof workshops[0], index: number }) => {
  return (
    <motion.div
      id={workshop.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 mb-6">
        <div className="w-14 h-14 flex-shrink-0 rounded-lg text-white font-bold text-2xl flex items-center justify-center shadow-lg" 
          style={{ backgroundColor: workshop.color }}>
          {index + 1}
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-1">{workshop.title}</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-600">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {workshop.date}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {workshop.location}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Content */}
            <div className="lg:col-span-8">
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {workshop.description}
              </p>
              
              {/* Images */}
              <ImagesGrid images={workshop.images} title={workshop.title} />
            </div>
            
            {/* Right Column - Sessions */}
            <div className="lg:col-span-4">
              <SessionCards sessions={workshop.sessions} color={workshop.color} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-24 lg:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-60 right-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                <span className="text-sm font-medium text-yellow-400">Year-Round Programs</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
                <span className="block">BizBuzz</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-500">Workshops</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10">
                A series of interactive workshops for local schools, business fairs, and online webinars based on a condensed BizBuzz curriculum that introduces young students to core entrepreneurial concepts.
              </p>
              
              <a 
                href="#dupage" 
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-1 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
              >
                Explore Workshops
              </a>
            </div>
            
            {/* Hero Images */}
            <div className="relative h-[600px] hidden lg:block">
              <div className="absolute w-60 h-80 top-0 right-0 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 z-20">
                <Image
                  src="/workshops/be/1.png"
                  alt="Workshop activity"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40"></div>
              </div>
              
              <div className="absolute w-64 h-72 top-20 left-20 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 z-10">
                <Image
                  src="/workshops/be/4.png"
                  alt="Workshop participants"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40"></div>
              </div>
              
              <div className="absolute w-56 h-64 bottom-0 right-24 rounded-2xl overflow-hidden shadow-2xl transform rotate-12 z-30">
                <Image
                  src="/workshops/ncbf/2.jpeg"
                  alt="Students presenting"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40"></div>
              </div>
              
              <div className="absolute w-48 h-48 bottom-12 left-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-6 z-0">
                <Image
                  src="/workshops/dcbf/3.jpg"
                  alt="Workshop materials"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute w-20 h-20 top-12 left-0 bg-blue-500/40 rounded-full blur-2xl"></div>
              <div className="absolute w-24 h-24 bottom-24 right-12 bg-yellow-500/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Statistics Banner */}
      <div className="bg-white py-10 shadow-md relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900 mb-2">7</p>
              <p className="text-gray-600 font-medium">Unique Workshops</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900 mb-2">17</p>
              <p className="text-gray-600 font-medium">Total Sessions</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900 mb-2">390+</p>
              <p className="text-gray-600 font-medium">Students Impacted</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">7 Workshops. 17 Sessions.</h2>
            <p className="text-xl text-gray-700">
              Hosted at schools like Brookdale Elementary & Madison Junior High, fairs such as the Naperville & Dupage Children&apos;s Business Fairs, and learning centers like Best Brains.
            </p>
          </div>
          
          <div className="space-y-16">
            {workshops.map((workshop, index) => (
              <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Simplified Modern CTA Section */}
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/workshops/dcbf/1.jpg" 
                alt="Workshop participants" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-800/50"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 px-6 py-10 md:px-12 flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
                Ready to join our 
                <span className="text-yellow-300 drop-shadow-sm"> next workshop?</span>
              </h2>
              <p className="text-white text-lg md:text-xl mb-8 max-w-2xl font-medium drop-shadow-sm bg-blue-900/30 px-4 py-2 rounded-lg">
                Sign up for updates on upcoming workshops and events in your area.
              </p>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
                <a 
                  href="#dupage" 
                  className="flex-1 px-6 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 text-center text-lg"
                >
                  View Schedule
                </a>
                <a 
                  href="#" 
                  className="flex-1 px-6 py-4 bg-white text-blue-800 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-all duration-300 text-center text-lg border border-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          
          {/* Social proof - moved outside the card */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
            <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="flex -space-x-2 mr-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden relative">
                    <Image 
                      src={`/workshops/${i === 0 ? 'be/1.png' : i === 1 ? 'dcbf/2.jpg' : 'ncbf/3.jpeg'}`}
                      alt="Workshop participant" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg">390+ students</p>
                <p className="text-gray-600 text-sm">joined our programs</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 bg-white px-4 py-2 rounded-lg shadow-sm">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-gray-900 font-bold text-lg ml-1">4.9/5</span>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .text-stroke-sm {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255, 224, 102, 0.5), 0 0 20px rgba(255, 224, 102, 0.3); }
          50% { text-shadow: 0 0 20px rgba(255, 224, 102, 0.8), 0 0 30px rgba(255, 224, 102, 0.5); }
        }
      `}</style>
    </div>
  );
} 