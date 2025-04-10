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
    color: "#FFBF00"
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
      "/workshops/mm/1.png",
      "/workshops/mm/2.jpg",
      "/workshops/mm/3.png",
    ],
    color: "#E69F16"
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
      "/workshops/be/1.png",
      "/workshops/be/2.png",
      "/workshops/be/3.png",
    ],
    color: "#DA951B"
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
      "/workshops/bb/1.jpg",
      "/workshops/bb/2.jpg",
      "/workshops/bb/3.png",
    ],
    color: "#CD8F20"
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
    color: "#BD7825"
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
      "/workshops/cm/1.jpg",
      "/workshops/cm/2.jpg",
      "/workshops/cm/3.jpg",
    ],
    color: "#A26227"
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
    color: "#8E682E"
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

// Workshop Images Grid
const ImagesGrid = ({ images, title }: { images: string[], title: string }) => {
  return (
    <div className="grid grid-cols-5 gap-4 h-[280px]">
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
      className="mb-16 overflow-hidden"
    >
      {/* Session Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl shadow-lg relative overflow-hidden"
          style={{ backgroundColor: workshop.color }}
        >
          <span className="relative z-10">{index + 1}</span>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{workshop.title}</h3>
          <div className="flex flex-wrap gap-4 text-base text-amber-900 mt-2">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {workshop.date}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {workshop.location}
            </span>
          </div>
        </div>
      </div>
      
      {/* Session Main Content Card */}
      <div className="rounded-2xl overflow-hidden bg-white shadow-lg border border-amber-100/30">
        <div className={`py-3 px-6 bg-gradient-to-r from-amber-50 to-white`}>
        </div>
        
        {/* Session Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column - Description and Images */}
            <motion.div variants={fadeIn} className="md:col-span-8">
              <p className="text-[#000000] mb-6 text-lg leading-relaxed">
                {workshop.description}
              </p>
              
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r rounded-3xl blur-xl opacity-40" 
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${workshop.color}10, #FFBF0010)` 
                  }} 
                />
                <div className="relative">
                  <ImagesGrid images={workshop.images} title={workshop.title} />
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Session Information */}
            <motion.div variants={fadeIn} className="md:col-span-4">
              <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-amber-100/30 flex flex-col w-full relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10" 
                  style={{ backgroundImage: `linear-gradient(to right, ${workshop.color}20, #FFBF0010)` }} 
                />
                
                <div className="text-center py-2 relative z-10" style={{ backgroundColor: `${workshop.color}20` }}>
                  <h4 className="font-bold text-amber-900 text-lg">WORKSHOP SESSIONS</h4>
                </div>
                
                <div className="p-4 flex flex-col flex-grow relative z-10">
                  <ul className="space-y-3">
                    {workshop.sessions.map((session, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mt-0.5 text-white mr-2" 
                              style={{ backgroundColor: workshop.color }}>
                          {i + 1}
                        </span>
                        <span className="text-[#000000]">{session}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#C5A32E] via-[#D4AF37] to-[#B8973F] overflow-hidden">
        {/* Fixed gear designs in background */}
        <div className="absolute top-40 right-40 w-64 h-64 opacity-5">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M464 192l-33.5-5.5c-1.4-4.9-2.9-9.6-4.7-14.3l19.8-27.8-32-32-27.8 19.8c-4.7-1.8-9.4-3.3-14.3-4.7L366 96h-44l-5.5 33.5c-4.9 1.4-9.6 2.9-14.3 4.7l-27.8-19.8-32 32 19.8 27.8c-1.8 4.7-3.3 9.4-4.7 14.3L224 192v44l33.5 5.5c1.4 4.9 2.9 9.6 4.7 14.3l-19.8 27.8 32 32 27.8-19.8c4.7 1.8 9.4 3.3 14.3 4.7L322 336h44l5.5-33.5c4.9-1.4 9.6-2.9 14.3-4.7l27.8 19.8 32-32-19.8-27.8c1.8-4.7 3.3-9.4 4.7-14.3L464 236v-44zM288 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
          </svg>
        </div>
        
        <div className="absolute top-60 right-60 w-40 h-40 opacity-5 animate-spin-slow">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M288 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-144 36v44l33.5 5.5c1.4 4.9 2.9 9.6 4.7 14.3l-19.8 27.8 32 32 27.8-19.8c4.7 1.8 9.4 3.3 14.3 4.7L252 432h44l5.5-33.5c4.9-1.4 9.6-2.9 14.3-4.7l27.8 19.8 32-32-19.8-27.8c1.8-4.7 3.3-9.4 4.7-14.3L394 334v-44l-33.5-5.5c-1.4-4.9-2.9-9.6-4.7-14.3l19.8-27.8-32-32-27.8 19.8c-4.7-1.8-9.4-3.3-14.3-4.7L296 192h-44l-5.5 33.5c-4.9 1.4-9.6 2.9-14.3 4.7l-27.8-19.8-32 32 19.8 27.8c-1.8 4.7-3.3 9.4-4.7 14.3L144 292z" />
          </svg>
        </div>
        
        <div className="absolute bottom-60 left-40 w-48 h-48 opacity-5">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9z" />
          </svg>
        </div>
        
        {/* Solid background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-amber-400/5 to-transparent"></div>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-300/5 rounded-full blur-3xl"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-3"></div>
          
          {/* Wave decoration at bottom */}
          <svg className="absolute bottom-0 w-full text-amber-50" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="currentColor">
            <path d="M0,42.9L48,53.2C96,64,192,85,288,74.1C384,64,480,21,576,21.3C672,21,768,64,864,74.1C960,85,1056,64,1152,53.3C1248,43,1344,43,1392,42.7L1440,43L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-44 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left content - Text */}
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-200/30 border border-amber-200/30 backdrop-blur-sm mb-10 shadow-sm">
                <div className="w-3 h-3 rounded-full bg-amber-200 mr-2"></div>
                <span className="text-base font-medium text-amber-800">Year-Round Programs</span>
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-bold mb-10 tracking-tight leading-tight">
                <span className="text-white">BizBuzz</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-300">
                  Workshops
                </span>
              </h1>
              
              <p className="text-2xl text-amber-50 mb-12 max-w-2xl leading-relaxed">
                A series of interactive workshops for local schools, business fairs, and online webinars based on a condensed BizBuzz curriculum that introduces young students to core entrepreneurial concepts.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a
                  href="#dupage"
                  className="bg-gradient-to-r from-amber-300 to-amber-400 text-amber-900 font-medium py-4 px-8 rounded-lg text-xl transition-all hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1 active:translate-y-0 inline-flex items-center"
                >
                  Explore Workshops
                  <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
              
              {/* Better positioned floating icon beside text */}
              <div className="relative mt-20">
                <div className="absolute -top-8 -left-5 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M352 320c-22.6 0-43.8 6.9-61.2 18.8l-49.3-30.8c5.2-14.4 8.5-29.9 8.5-46 0-16.2-3.3-31.7-8.5-46l49.3-30.8C307.4 197.1 328.4 204 352 204c57.3 0 104-46.7 104-104S409.3-4 352-4s-104 46.7-104 104c0 16.2 3.3 31.7 8.5 46l-49.3 30.8c-5.2 14.4-8.5 29.9-8.5 46 0 57.3 46.7 104 104 104s104-46.7 104-104S409.3 320 352 320zm0-312c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM144 330c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72zm208 114c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* Right content - Dynamic diagonal layout */}
            <motion.div
              className="lg:col-span-6 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative h-[580px] w-full overflow-visible">
                {/* Three images with improved spread */}
                
                {/* Left image - positioned to match camps layout */}
                <motion.div 
                  className="absolute top-[160px] left-[10px] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-20 border-[3px] border-white"
                  initial={{ x: -30, y: 0, rotate: -8 }}
                  animate={{ x: 0, y: 0, rotate: -8 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.03, rotate: -6, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/workshops/dcbf/1.jpg"
                    alt="Workshop activity"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-700/25 to-transparent"></div>
                </motion.div>
                
                {/* Top right image - positioned at extreme top-right */}
                <motion.div 
                  className="absolute top-[-20px] right-[-20px] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(217,119,6,0.25)] z-30 border-[3px] border-white"
                  initial={{ scale: 0.92, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/workshops/be/4.png"
                    alt="Workshop participants"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-700/25 to-transparent"></div>
                </motion.div>
                
                {/* Bottom right image - spread further down and right */}
                <motion.div 
                  className="absolute bottom-[10px] right-[60px] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-20 border-[3px] border-white"
                  initial={{ x: 30, y: 0, rotate: 8 }}
                  animate={{ x: 0, y: 0, rotate: 8 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.03, rotate: 6, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/workshops/ncbf/2.jpeg"
                    alt="Students presenting"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-700/25 to-transparent"></div>
                </motion.div>
                
                {/* Enhanced decorative elements */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-amber-300/10 to-amber-400/10 blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-amber-200/10 to-amber-300/10 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        {/* Social proof banner */}
        <motion.div
          className="bg-white backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border-2 border-amber-400 mb-4 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center py-3 px-6 w-full">
            <div className="flex items-center justify-center sm:border-r border-amber-300 px-6 py-2">
              <div className="flex -space-x-2 mr-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-amber-400 shadow-md overflow-hidden relative">
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
                <p className="text-amber-900 font-bold text-lg">520 students</p>
                <p className="text-amber-800 text-sm">joined our programs</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-6 py-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-amber-900 font-bold text-xl">4.9/5</span>
            </div>
          </div>
        </motion.div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-amber-100/40">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-amber-100/50">
            <div className="px-6 py-8 text-center relative">
              <div className="absolute right-5 top-5 opacity-10">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FFBF00" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-2">7</div>
              <div className="text-amber-800 font-medium">Workshops</div>
            </div>
            
            <div className="px-6 py-8 text-center relative">
              <div className="absolute right-5 top-5 opacity-10">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#E69F16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-2">17</div>
              <div className="text-amber-800 font-medium">Total Sessions</div>
            </div>
            
            <div className="px-6 py-8 text-center relative">
              <div className="absolute right-5 top-5 opacity-10">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#DA951B" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-2">520</div>
              <div className="text-amber-800 font-medium">Students Taught</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/15 mb-4">
              <span className="text-amber-800 font-medium">Entrepreneurship Journey</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">7 Workshops. 17 Sessions.</h2>
            <p className="text-xl text-[#000000] max-w-3xl mx-auto">
              Hosted at schools like Brookdale Elementary & Madison Junior High, fairs such as the Naperville & Dupage Children&apos;s Business Fairs, and learning centers like Best Brains.
            </p>
          </div>
          
          <div>
            {workshops.map((workshop, index) => (
              <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </div>
  );
} 