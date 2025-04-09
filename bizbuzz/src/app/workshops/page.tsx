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
    description: "Three workshops preparing 30 entrepreneurs for the upcoming Dupage Children&apos;s Business Fair, guiding them through ideation, marketing, and finance.",
    sessions: [
      "DCBF Workshop 1 | March 16th, 2025",
      "DCBF Workshop 2 | March 23rd, 2025",
      "DCBF Workshop 3 | April 6th, 2025",
      "Dupage Children&apos;s Business Fair | April 26th, 2025"
    ],
    images: [
      "/workshops/dcbf/1.jpg",
      "/workshops/dcbf/2.jpg",
      "/workshops/dcbf/3.jpg",
    ],
    color: "#0074cc"
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
    color: "#00a5e0"
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
    color: "#38b6ff"
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
    color: "#0066a6"
  },
  {
    id: "naperville",
    title: "Naperville Children's Business Fair Workshops",
    date: "July 6th, 2024 to August 3rd, 2024",
    location: "Naperville, IL",
    description: "Three workshops helping 50 students use creative problem-solving, marketing, and finance to launch products sold alongside 150 young entrepreneurs at the Naperville Children&apos;s Business Fair.",
    sessions: [
      "NCBF Workshop 1 | July 6th, 2024",
      "NCBF Workshop 2 | July 13th, 2024",
      "NCBF Workshop 3 | July 20th, 2024",
      "Naperville Children&apos;s Business Fair | August 3rd, 2024"
    ],
    images: [
      "/workshops/ncbf/1.jpeg",
      "/workshops/ncbf/2.jpeg",
      "/workshops/ncbf/3.jpeg",
    ],
    color: "#003166"
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
    color: "#004080"
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
    color: "#0091c9"
  }
];

// Image grid component
const ImageGrid = ({ images, title }: { images: string[], title: string }) => {
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {/* Main large image */}
      <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden h-[280px]">
        <Image
          src={images[0]}
          alt={`${title} main image`}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Secondary images */}
      <div className="col-span-1 relative rounded-xl overflow-hidden h-[280px]">
        <Image
          src={images[1]}
          alt={`${title} secondary image`}
          fill
          className="object-cover"
        />
      </div>
      <div className="col-span-1 relative rounded-xl overflow-hidden h-[280px]">
        <Image
          src={images[2]}
          alt={`${title} tertiary image`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

// Session Cards component
const SessionCards = ({ sessions, color }: { sessions: string[], color: string }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 w-full relative h-full">
      <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10" 
        style={{ backgroundImage: `linear-gradient(to right, ${color}20, ${color}10)` }} 
      />
      <div className="py-4 relative z-10" style={{ backgroundColor: `${color}` }}>
        <h4 className="font-bold text-white text-lg text-center">SESSIONS</h4>
      </div>
      
      <div className="p-6 relative z-10 h-full">
        <ul className="space-y-4">
          {sessions.map((session, i) => (
            <li key={i} className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mr-3 mt-0.5" style={{ backgroundColor: color }}>
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#0f172a] text-base font-medium">{session}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Workshop card component
const WorkshopCard = ({ workshop, index }: { workshop: typeof workshops[0], index: number }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      id={workshop.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.05
          }
        }
      }}
      className="mb-16 rounded-3xl overflow-hidden bg-white shadow-xl relative"
    >
      {/* Color accent */}
      <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: workshop.color }}></div>
      
      {/* Workshop Header */}
      <div className="py-6 px-8 flex items-center border-b border-gray-100">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 text-white font-bold text-2xl shadow-md" 
          style={{ backgroundColor: workshop.color }}>
          {index + 1}
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-[#0f172a]">{workshop.title}</h3>
          <div className="flex flex-wrap text-base text-gray-600 mt-2 gap-4">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {workshop.date}
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {workshop.location}
            </span>
          </div>
        </div>
      </div>
      
      {/* Workshop Content */}
      <div className="pt-8 pb-10 px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column - Description and Images */}
          <motion.div variants={fadeIn} className="md:col-span-8">
            <p className="text-[#334155] mb-8 text-lg leading-relaxed">
              {workshop.description}
            </p>
            
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur-xl opacity-50" 
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${workshop.color}10, ${workshop.color}10)` 
                }} 
              />
              <div className="relative">
                <ImageGrid images={workshop.images} title={workshop.title} />
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Session Cards */}
          <motion.div variants={fadeIn} className="md:col-span-4">
            <SessionCards sessions={workshop.sessions} color={workshop.color} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative flex items-center bg-gradient-to-r from-[#003166] via-[#004080] to-[#0074cc] overflow-hidden min-h-screen">
        {/* Background elements */}
        <div className="absolute top-60 right-40 w-80 h-80 rounded-full bg-[#0066cc]/10 blur-2xl"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 rounded-full bg-[#0066cc]/10 blur-2xl"></div>
        <div className="absolute top-40 left-1/4 w-64 h-64 rounded-full bg-[#0074cc]/10 blur-2xl"></div>
        
        {/* Wave at the bottom */}
        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <svg className="w-full fill-white" viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"></path>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block mb-6 px-4 py-2 bg-[#0091c9]/20 text-white font-medium rounded-full text-base md:text-lg border border-white/20">
                Year-Round Programs
              </span>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
                BizBuzz <span className="text-[#FFD700]">Workshops</span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-light mb-12 leading-relaxed max-w-xl">
                A series of interactive workshops for local schools, business fairs, and online webinars based on a condensed BizBuzz curriculum that introduces young students to core entrepreneurial concepts.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#dupage" 
                  className="bg-[#FFD700] text-[#003166] font-semibold py-4 px-8 rounded-2xl text-lg transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg hover:shadow-white/20 inline-flex items-center"
                >
                  Browse Workshops
                  <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0066cc]/20 to-[#0074cc]/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-[650px]">
                <div className="absolute top-8 left-4 w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg transform -rotate-4">
                  <Image
                    src="/workshops/be/1.png"
                    alt="Workshop collaboration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 right-8 w-[340px] h-[340px] rounded-xl overflow-hidden shadow-lg transform rotate-3">
                  <Image
                    src="/workshops/dcbf/2.jpg"
                    alt="Students working"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 w-[260px] h-[260px] rounded-xl overflow-hidden shadow-lg rotate-2">
                  <Image
                    src="/workshops/ncbf/3.jpeg"
                    alt="Business fair booth"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Workshops Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-[#0f172a] mb-4 text-center">7 Workshops. 17 Sessions.</h2>
        <p className="text-[#334155] text-center mb-16 text-xl max-w-3xl mx-auto">
          Hosted at schools like Brookdale Elementary & Madison Junior High, fairs such as the Naperville & Dupage Children&apos;s Business Fairs, and learning centers like Best Brains.
        </p>
        
        <div>
          {workshops.map((workshop, index) => (
            <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
} 