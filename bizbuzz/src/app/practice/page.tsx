"use client";

import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// Fish Tank Information
const fishTankInfo = [
  {
    id: "concept",
    title: "The Concept",
    description: "Fish Tank is a Shark Tank-inspired competition designed specifically for young students to pitch their innovative business ideas. It provides a supportive environment where students can develop entrepreneurial skills and gain confidence in presenting their concepts.",
    activities: [
      {
        title: "Problem Identification",
        description: "Students learn to identify real-world problems worthy of entrepreneurial solutions."
      },
      {
        title: "Market Research",
        description: "Teams conduct research to validate their ideas and understand their target audience."
      },
      {
        title: "Business Model Development",
        description: "Participants create sustainable business models that demonstrate viability."
      }
    ],
    keyTakeaways: [
      "Entrepreneurial mindset development",
      "Problem-solving skills",
      "Market validation techniques",
      "Concept refinement process"
    ],
    images: [
      "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?q=80&w=800",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
    ],
    color: "#6366F1"
  },
  {
    id: "process",
    title: "The Process",
    description: "Participants work individually or in small teams to identify problems, develop solutions, and create compelling pitches. Throughout the process, they receive guidance from experienced mentors who help refine their ideas and prepare for the competition day.",
    activities: [
      {
        title: "Idea Workshops",
        description: "Structured sessions where students brainstorm and refine their business concepts."
      },
      {
        title: "Mentor Matching",
        description: "Students are paired with industry professionals who provide guidance and feedback."
      },
      {
        title: "Pitch Practice",
        description: "Multiple opportunities to refine presentations with constructive feedback."
      }
    ],
    keyTakeaways: [
      "Ideation techniques",
      "Mentorship utilization",
      "Iterative development",
      "Teamwork and collaboration"
    ],
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=800",
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=800",
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=800",
      "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=800"
    ],
    color: "#38b6ff"
  },
  {
    id: "event",
    title: "The Event",
    description: "The competition culminates in a live pitch event where students present to a panel of judges from the business community. Winners receive prizes and ongoing support to potentially turn their ideas into reality. The event atmosphere is supportive yet professional, giving students a real-world experience.",
    activities: [
      {
        title: "Final Presentations",
        description: "Students deliver polished pitches to judges, parents, and community members."
      },
      {
        title: "Judging Panel Q&A",
        description: "Industry experts provide valuable feedback and ask challenging questions."
      },
      {
        title: "Awards Ceremony",
        description: "Recognition for outstanding ideas, presentations, and entrepreneurial potential."
      }
    ],
    keyTakeaways: [
      "Public speaking experience",
      "Professional presentation skills",
      "Handling feedback and questions",
      "Competition preparation"
    ],
    images: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800",
      "https://images.unsplash.com/photo-1515168833906-d503099ba73b?q=80&w=800",
      "https://images.unsplash.com/photo-1515168833906-d503099ba73b?q=80&w=800",
      "https://images.unsplash.com/photo-1515168833906-d503099ba73b?q=80&w=800",
      "https://images.unsplash.com/photo-1515168833906-d503099ba73b?q=80&w=800"
    ],
    color: "#ffbf00"
  },
  {
    id: "skills",
    title: "The Skills",
    description: "Fish Tank not only teaches business fundamentals but also builds critical thinking, public speaking, and collaboration skills that benefit students in all aspects of their education and future careers. These transferable skills have lifelong value regardless of career path.",
    activities: [
      {
        title: "Communication Workshop",
        description: "Students develop clear, concise ways to articulate complex ideas."
      },
      {
        title: "Design Thinking Sessions",
        description: "Learning human-centered approaches to problem-solving."
      },
      {
        title: "Collaboration Challenges",
        description: "Team-based activities that build cooperation and conflict resolution skills."
      }
    ],
    keyTakeaways: [
      "Effective communication",
      "Critical thinking",
      "Problem-solving methodology",
      "Leadership development"
    ],
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
    ],
    color: "#10b981"
  },
  {
    id: "impact",
    title: "The Impact",
    description: "Through this program, we're fostering the next generation of entrepreneurs and innovators who will solve tomorrow's challenges with creativity and determination. Fish Tank alumni have gone on to launch successful ventures and pursue entrepreneurial studies in college.",
    activities: [
      {
        title: "Success Stories",
        description: "Showcasing past participants who have launched successful ventures."
      },
      {
        title: "Community Connection",
        description: "Building relationships with local business leaders and organizations."
      },
      {
        title: "Future Pathways",
        description: "Guidance on continuing entrepreneurial journeys beyond the program."
      }
    ],
    keyTakeaways: [
      "Long-term vision development",
      "Network building",
      "Social impact awareness",
      "Entrepreneurial confidence"
    ],
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800"
    ],
    color: "#8b5cf6"
  }
];

// Preliminary judges data
const prelimJudges = {
  title: "Preliminary Round Judges",
  description: "Our preliminary round judges evaluate all initial pitches and select the top ideas to advance to the final round. These experienced entrepreneurs and business leaders provide valuable feedback to help students refine their concepts and presentations. Each preliminary judge brings unique industry expertise and a passion for nurturing young entrepreneurial talent.",
  image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800"
};

// Final judges data
const finalJudges = {
  title: "Final Round Judges",
  description: "Our distinguished panel of final judges consists of successful entrepreneurs, investors, and community leaders who evaluate the finalists' pitches with professional rigor. They assess each idea based on innovation, market potential, feasibility, and presentation quality. These judges not only select the winners but also provide mentorship opportunities and connections to help turn the most promising ideas into reality.",
  image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800"
};

// Previous winners
const winners = [
  {
    id: 1,
    name: "Aanya Patel",
    productName: "EcoLearn",
    school: "Jefferson Middle School",
    description: "A gamified learning platform that teaches environmental sustainability through interactive challenges. Students earn points by completing real-world eco-friendly actions and competing with friends."
  },
  {
    id: 2,
    name: "Tyler Johnson",
    productName: "HomeworkHelper",
    school: "Lincoln Elementary",
    description: "An AI-powered study assistant that helps students organize assignments and create personalized study plans. It analyzes learning patterns to suggest the most effective study methods for each student."
  },
  {
    id: 3,
    name: "Maya Rodriguez",
    productName: "SafeWalk",
    school: "Washington High School",
    description: "A mobile app that connects students walking the same route home for increased safety. Parents receive real-time notifications, and the app includes emergency features for peace of mind."
  },
  {
    id: 4,
    name: "Ethan Chen",
    productName: "ScienceSpark",
    school: "Edison Academy",
    description: "An affordable kit that turns smartphones into powerful microscopes for science education. The accompanying app guides students through experiments and lets them share discoveries."
  },
  {
    id: 5,
    name: "Zoe Williams",
    productName: "TeenFinance",
    school: "Roosevelt High School",
    description: "A financial literacy app designed specifically for teenagers. It teaches budgeting, saving, and investing through real-world simulations and challenges with virtual currency."
  }
];

// What is Fish Tank description (5 sentences)
const whatIsFishTank = {
  title: "What is Fish Tank?",
  description: "Fish Tank is a Shark Tank-inspired competition where young students pitch innovative business ideas to a panel of judges. Participants work individually or in small teams to identify problems, develop solutions, and create compelling pitches that address real-world challenges. Throughout the process, they receive guidance from experienced mentors who help refine their ideas and prepare for the competition day. The competition culminates in a live pitch event where students present to a panel of judges from the business community. Winners receive prizes and ongoing support to potentially turn their ideas into reality, giving students a taste of real entrepreneurship."
};

// Image grid component
const ImageGrid = ({ images, title }: { images: string[], title: string }) => {
  // Make sure we have 5 images by duplicating if necessary
  const allImages = [...images];
  while (allImages.length < 5) {
    allImages.push(images[allImages.length % images.length]);
  }
  
  return (
    <div className="grid grid-cols-6 gap-2 h-full">
      {/* Main large image */}
      <div className="col-span-3 row-span-2 relative rounded-xl overflow-hidden h-[320px]">
        <Image
          src={allImages[0]}
          alt={`${title} main image`}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Small images grid */}
      <div className="col-span-3 grid grid-rows-2 gap-2 h-[320px]">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative rounded-xl overflow-hidden h-[156px]">
            <Image
              src={allImages[1]}
              alt={`${title} secondary image`}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden h-[156px]">
            <Image
              src={allImages[2]}
              alt={`${title} tertiary image`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative rounded-xl overflow-hidden h-[156px]">
            <Image
              src={allImages[3]}
              alt={`${title} fourth image`}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden h-[156px]">
            <Image
              src={allImages[4]}
              alt={`${title} fifth image`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Fish Tank section card
const FishTankCard = ({ section, index }: { section: typeof fishTankInfo[0], index: number }) => {
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
      id={section.id}
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
      className="mb-12 rounded-2xl overflow-hidden bg-white shadow-md"
      style={{ borderLeft: `6px solid ${section.color}` }}
    >
      {/* Section Header */}
      <div className="py-6 pl-6 pr-8 flex items-center" style={{ background: `linear-gradient(90deg, ${section.color}15, white)` }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mr-5 text-white font-bold text-xl shadow-sm" 
          style={{ backgroundColor: section.color }}>
          {index + 1}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
        </div>
      </div>
      
      {/* Section Content */}
      <div className="pt-5 pb-6 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - Description and Images */}
          <motion.div variants={fadeIn} className="md:col-span-8">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {section.description}
            </p>
            
            <div className="h-[320px]">
              <ImageGrid images={section.images} title={section.title} />
            </div>
          </motion.div>
          
          {/* Right Column - Activities and Takeaways */}
          <motion.div variants={fadeIn} className="md:col-span-4 flex">
            <div 
              className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col w-full"
            >
              <div className="text-center py-3" style={{ backgroundColor: `${section.color}10` }}>
                <h4 className="font-bold text-gray-800 text-lg">KEY ACTIVITIES</h4>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <ul className="mb-6">
                  {section.activities.map((activity, i) => (
                    <li key={i} className="mb-3 pb-3 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                      <h5 className="font-semibold text-gray-800">{activity.title}</h5>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </li>
                  ))}
                </ul>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-base">Takeaways:</h4>
                  <ul className="space-y-2">
                    {section.keyTakeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-2 mt-0.5 text-xs" style={{ backgroundColor: section.color, color: 'white' }}>✓</span>
                        <span className="text-gray-700 text-sm">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Winner card component
const WinnerCard = ({ winner, index }: { winner: typeof winners[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-600 mb-1">{winner.name}</h3>
        <h4 className="text-lg font-semibold text-gray-800 mb-1">{winner.productName}</h4>
        <p className="text-sm text-gray-600 mb-3">{winner.school}</p>
        <p className="text-gray-700">{winner.description}</p>
      </div>
    </motion.div>
  );
};

export default function FishTankPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Whiteboard/Trophy Background */}
      <div className="relative flex items-center border-b border-gray-100 overflow-hidden min-h-screen">
        {/* Trophy/Whiteboard Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1553774651-33529979e2d6?q=80&w=2000"
            alt="Trophy whiteboard background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 to-purple-500/70 mix-blend-multiply"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-indigo-100 rounded-full blur-3xl opacity-30 -mr-40 -mt-40"></div>
          <div className="absolute left-0 bottom-0 w-[40rem] h-[40rem] bg-purple-100 rounded-full blur-3xl opacity-30 -ml-40 -mb-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-5 py-2 rounded-full text-base font-medium bg-white text-indigo-600 mb-6">
                Student Entrepreneurship
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
                FISH <span className="text-indigo-200">TANK</span>
              </h1>
              <p className="text-2xl text-white mb-12 leading-relaxed max-w-xl">
                Where young entrepreneurs make waves with big ideas through our Shark Tank-inspired competition for students.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#what-is-fish-tank" 
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 text-lg font-medium rounded-xl shadow-md hover:bg-indigo-50 transition-colors"
                >
                  Explore Program
                  <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a 
                  href="mailto:info@bizbuzznfp.org" 
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-medium rounded-xl shadow-md hover:bg-white/10 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="w-full h-[550px] relative">
                <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-xl overflow-hidden shadow-lg transform -rotate-6">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"
                    alt="Student presentation"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-xl overflow-hidden shadow-lg transform rotate-6">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
                    alt="Student pitching"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800"
                    alt="Business idea"
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
      
      {/* What is Fish Tank Section */}
      <div id="what-is-fish-tank" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{whatIsFishTank.title}</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            {whatIsFishTank.description}
          </p>
        </div>
      </div>
      
      {/* Program Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">About Fish Tank</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Our comprehensive program guides students through every step of the entrepreneurial journey, from concept to pitch.</p>
        
        <div>
          {fishTankInfo.map((section, index) => (
            <FishTankCard key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>

      {/* Judges Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Judges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={prelimJudges.image}
                  alt="Preliminary round judges"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">{prelimJudges.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{prelimJudges.description}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={finalJudges.image}
                  alt="Final round judges"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-2xl font-bold">{finalJudges.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{finalJudges.description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Winners Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Previous Winners</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These young entrepreneurs impressed our judges with their innovative ideas and compelling pitches.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <WinnerCard key={winner.id} winner={winner} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Watch Our Finalists' Pitches</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            See how our talented participants present their innovative ideas to the judges.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe 
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Fish Tank Pitch Competition" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make a Splash with Your Ideas?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join our next Fish Tank competition and learn how to transform your ideas into reality with expert guidance and hands-on experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@bizbuzznfp.org" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
              >
                Apply Now
              </a>
              <a 
                href="#what-is-fish-tank" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-medium rounded-lg border border-white hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 