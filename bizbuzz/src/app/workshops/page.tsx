"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

// Workshop data
const workshops = [
  {
    id: "brookdale",
    title: "Brookdale Elementary",
    date: "March 15-19, 2023",
    location: "Naperville, IL",
    description: "Our week-long workshop at Brookdale Elementary introduced 35 students to entrepreneurship fundamentals through interactive activities and mini-pitch competitions. Students created product prototypes and learned customer discovery techniques through hands-on market research exercises, culminating in a showcase for parents and teachers.",
    sessionCount: 4,
    sessions: [
      {
        title: "Session 1",
        points: ["Business model canvas fundamentals", "Problem identification"]
      },
      {
        title: "Session 2",
        points: ["Market research techniques", "Customer interviews"]
      },
      {
        title: "Session 3",
        points: ["Basic financial literacy", "Pricing strategies"]
      },
      {
        title: "Session 4",
        points: ["Public speaking skills", "Final showcase preparation"]
      }
    ],
    images: [
      "/workshops/be/1.png",
      "/workshops/be/2.png",
      "/workshops/be/3.png",
      "/workshops/be/4.png",
      "/workshops/be/5.png",
      "/workshops/be/6.png",
      "/workshops/be/7.png",
    ],
    color: "#B8e2f4"
  },
  {
    id: "dupage",
    title: "Dupage Children's Business Fair",
    date: "July 22, 2023",
    location: "Wheaton, IL",
    description: "We partnered with the Dupage Children's Business Fair to deliver a pre-fair workshop series helping young entrepreneurs prepare their business concepts, marketing materials, and sales strategies. Over 40 participants received targeted coaching on pricing, customer engagement, and booth presentation to maximize their success at the fair.",
    sessionCount: 4,
    sessions: [
      {
        title: "Session 1",
        points: ["Booth setup and design", "Visual merchandising"]
      },
      {
        title: "Session 2",
        points: ["Pricing strategy", "Understanding profit margins"]
      },
      {
        title: "Session 3",
        points: ["Customer engagement", "Sales techniques"]
      },
      {
        title: "Session 4",
        points: ["Marketing materials", "Pitch refinement"]
      }
    ],
    images: [
      "/workshops/dcbf/1.jpg",
      "/workshops/dcbf/2.jpg",
      "/workshops/dcbf/3.jpg",
      "/workshops/dcbf/4.png",
      "/workshops/dcbf/5.png",
      "/workshops/dcbf/6.png",
      "/workshops/dcbf/7.png",
    ],
    color: "#8dcfec"
  },
  {
    id: "naperville",
    title: "Naperville Children's Business Fair",
    date: "September 9, 2023",
    location: "Naperville, IL",
    description: "Our comprehensive pre-fair workshop for the Naperville Children's Business Fair guided 55 young entrepreneurs through business development, from concept refinement to marketing strategy. The program included one-on-one mentoring sessions with local business owners and culminated in a pitch practice day to prepare participants for fair day success.",
    sessionCount: 4,
    sessions: [
      {
        title: "Session 1",
        points: ["Value proposition development", "Target customer identification"]
      },
      {
        title: "Session 2",
        points: ["Visual branding", "Product presentation"]
      },
      {
        title: "Session 3",
        points: ["Cost analysis", "Pricing strategy"]
      },
      {
        title: "Session 4",
        points: ["Customer interactions", "Sales role-playing"]
      }
    ],
    images: [
      "/workshops/ncbf/1.jpeg",
      "/workshops/ncbf/2.jpeg",
      "/workshops/ncbf/3.jpeg",
      "/workshops/ncbf/4.png",
      "/workshops/ncbf/5.png",
      "/workshops/ncbf/6.png",
      "/workshops/ncbf/7.png",
    ],
    color: "#38b6ff"
  },
  {
    id: "scott",
    title: "Scott Elementary",
    date: "November 7-11, 2023",
    location: "Naperville, IL",
    description: "At Scott Elementary, we conducted a specialized entrepreneurship program focusing on social innovation for 28 fifth-grade students. The curriculum emphasized identifying community challenges and developing business solutions with positive social impact. Students worked in teams to create mission-driven business concepts addressing real local needs.",
    sessionCount: 0,
    sessions: [],
    images: [
      "/workshops/se/1.png",
      "/workshops/se/2.png",
      "/workshops/se/3.png",
    ],
    color: "#235284"
  }
];

// Image grid component
const ImageGrid = ({ images, title }: { images: string[], title: string }) => {
  return (
    <div className="grid grid-cols-7 gap-2 h-full">
      {/* Main large image */}
      <div className="col-span-3 row-span-2 relative rounded-xl overflow-hidden h-[320px]">
        <Image
          src={images[0]}
          alt={`${title} main image`}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Small images grid */}
      <div className="col-span-2 grid grid-rows-2 gap-2 h-[320px]">
        <div className="relative rounded-xl overflow-hidden h-[156px]">
          <Image
            src={images[1]}
            alt={`${title} secondary image`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden h-[156px]">
          <Image
            src={images[2]}
            alt={`${title} tertiary image`}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="col-span-2 grid grid-rows-2 gap-2 h-[320px]">
        <div className="relative rounded-xl overflow-hidden h-[156px]">
          <Image
            src={images[3]}
            alt={`${title} fourth image`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden h-[156px]">
          <Image
            src={images[4]}
            alt={`${title} fifth image`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// Additional images component
const AdditionalImages = ({ images }: { images: string[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <div className="relative h-[180px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={images[5]}
          alt="Additional workshop image"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative h-[180px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={images[6]}
          alt="Additional workshop image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

// Session Cards component
const SessionCards = ({ sessions, color }: { sessions: {title: string, points: string[]}[], color: string }) => {
  if (sessions.length === 0) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 w-full relative h-full">
        <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10" 
          style={{ backgroundImage: `linear-gradient(to right, ${color}20, #38b6ff10)` }} 
        />
        <div className="py-4 relative z-10" style={{ backgroundColor: `${color}10` }}>
          <h4 className="font-bold text-[#2D3748] text-lg text-center">SESSIONS</h4>
        </div>
        
        <div className="p-8 flex flex-col items-center justify-center relative z-10 h-full">
          <div className="text-gray-400 text-center">
            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p className="text-lg font-medium">No sessions scheduled yet</p>
            <p className="mt-2">Coming soon! Contact us for updates.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 w-full relative">
      <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10" 
        style={{ backgroundImage: `linear-gradient(to right, ${color}20, #38b6ff10)` }} 
      />
      <div className="py-4 relative z-10" style={{ backgroundColor: `${color}10` }}>
        <h4 className="font-bold text-[#2D3748] text-lg text-center">SESSIONS</h4>
      </div>
      
      <div className="p-4 grid grid-cols-1 gap-3 relative z-10">
        {sessions.map((session, index) => (
          <div 
            key={index} 
            className="p-3 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            style={{ backgroundColor: `${color}05` }}
          >
            <h5 className="font-semibold text-[#2D3748] mb-2">{session.title}</h5>
            <ul className="space-y-2">
              {session.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mr-2 mt-0.5" style={{ backgroundColor: `${color}20` }}>
                    <svg className="h-3 w-3" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#4B5563] text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// Workshop Content for Scott Elementary
const ScottElementaryContent = ({ workshop }: { workshop: typeof workshops[0] }) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className="w-full"
    >
      <p className="text-[#4B5563] mb-8 text-lg leading-relaxed">
        {workshop.description}
      </p>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="relative h-[280px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={workshop.images[0]}
            alt={`${workshop.title} featured image`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[280px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={workshop.images[1]}
            alt={`${workshop.title} featured image`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[280px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={workshop.images[2]}
            alt={`${workshop.title} featured image`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
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
          <h3 className="text-2xl font-bold text-[#2D3748]">{workshop.title}</h3>
          <div className="flex flex-wrap text-base text-gray-500 mt-2 gap-4">
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
        {workshop.id === "scott" ? (
          // Special layout for Scott Elementary with full-width paragraph and 3 photos
          <ScottElementaryContent workshop={workshop} />
        ) : (
          // Standard layout for other workshops
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left Column - Description and Images */}
            <motion.div variants={fadeIn} className="md:col-span-8">
              <p className="text-[#4B5563] mb-8 text-lg leading-relaxed">
                {workshop.description}
              </p>
              
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur-xl opacity-50" 
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${workshop.color}10, #38b6ff10)` 
                  }} 
                />
                <div className="relative h-[320px]">
                  <ImageGrid images={workshop.images.slice(0, 5)} title={workshop.title} />
                </div>
              </div>
              
              {/* Additional Images */}
              <AdditionalImages images={workshop.images} />
            </motion.div>
            
            {/* Right Column - Session Cards */}
            <motion.div variants={fadeIn} className="md:col-span-4">
              <SessionCards sessions={workshop.sessions} color={workshop.color} />
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative flex items-center bg-white overflow-hidden min-h-screen">
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block mb-6 px-4 py-2 bg-indigo-100 text-[#6366F1] font-medium rounded-full text-base md:text-lg">
                Year-Round Programs
              </span>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-[#2D3748] tracking-tight leading-tight">
                BizBuzz <span className="text-[#6366F1]">Workshops</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#4B5563] font-light mb-12 leading-relaxed max-w-xl">
                Condensed, high-impact entrepreneurship training delivered at schools, 
                business fairs, and through online webinars to reach students worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#brookdale" 
                  className="bg-[#6366F1] text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all hover:bg-[#4F46E5] hover:scale-105 active:scale-95 shadow-lg hover:shadow-indigo-200 inline-flex items-center"
                >
                  Browse Workshops
                  <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a 
                  href="mailto:workshops@bizbuzznfp.org" 
                  className="text-[#4B5563] hover:text-[#6366F1] font-medium text-lg transition-colors inline-flex items-center"
                >
                  Request a Workshop →
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6366F1]/20 to-[#38b6ff]/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-[650px]">
                <div className="absolute top-8 left-4 w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg transform -rotate-4">
                  <Image
                    src="/placeholder/workshop_hero1.jpg"
                    alt="Workshop collaboration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 right-8 w-[340px] h-[340px] rounded-xl overflow-hidden shadow-lg transform rotate-3">
                  <Image
                    src="/placeholder/workshop_hero2.jpg"
                    alt="Students working"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 w-[260px] h-[260px] rounded-xl overflow-hidden shadow-lg rotate-2">
                  <Image
                    src="/placeholder/workshop_hero3.jpg"
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
      <div className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-100">
        <h2 className="text-5xl font-bold text-[#2D3748] mb-4 text-center">Featured Workshops</h2>
        <p className="text-[#4B5563] text-center mb-16 text-xl max-w-2xl mx-auto">
          Our tailored workshops bring entrepreneurial education to students in their schools, 
          at business fairs, and through online platforms.
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