"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Session data
const sessions = [
  {
    id: "session1",
    title: "Entrepreneurial Foundations",
    date: "June 12-13, 2024",
    location: "Innovation Hub, Naperville",
    description: "In Session 1, students explored the fundamentals of entrepreneurship, learning how to identify and solve real-world problems. They were introduced to key concepts like value creation and market fit, and began brainstorming business ideas through our Mini Fish Tank activity with over $200 in prizes.",
    speaker: {
      name: "Kandice Henning",
      role: "CEO of the Alive Center",
      topic: "How to Become a Fearless Entrepreneur",
      bio: "Sharing her journey of creating one of Naperville's largest nonprofit organizations, she inspired students to embrace risk, pursue their passions, and lead through social innovation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400"
    },
    activities: [
      {
        title: "Problem Identification Workshop",
        description: "Students learned techniques to identify real-world problems worth solving through observation and empathy."
      },
      {
        title: "Mini Fish Tank Competition",
        description: "Teams pitched initial business concepts to win cash prizes and valuable feedback from expert judges."
      },
      {
        title: "Business Model Canvas Introduction",
        description: "Introduction to the core components of a sustainable business model and value proposition."
      }
    ],
    keyTakeaways: [
      "Understanding the entrepreneurial mindset",
      "Identifying problems and opportunities",
      "Basic business model concepts",
      "Effective brainstorming techniques"
    ],
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800",
    ],
    color: "#6366F1"
  },
  {
    id: "session2",
    title: "Business Model Development",
    date: "July 8-9, 2024",
    location: "Downtown Center, Chicago",
    description: "Building on the foundation from Session 1, students dove deeper into developing their business models, conducting market research, and understanding their target audiences. They learned practical strategies for validating their ideas and received mentorship from experienced entrepreneurs.",
    speaker: {
      name: "Michael Chen",
      role: "Founder of TechStart Ventures",
      topic: "From Idea to Market: Validation Strategies",
      bio: "With experience launching five successful tech startups, Michael shared practical approaches to testing ideas quickly and cost-effectively to ensure product-market fit.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
    },
    activities: [
      {
        title: "Customer Discovery Interviews",
        description: "Students conducted real interviews with potential customers to validate their assumptions."
      },
      {
        title: "Minimum Viable Product Workshop",
        description: "Teams developed quick prototypes and mockups to visualize their solutions."
      },
      {
        title: "Financial Modeling Basics",
        description: "Introduction to revenue models, pricing strategies, and basic business financials."
      }
    ],
    keyTakeaways: [
      "Market research techniques",
      "Product validation methods",
      "Understanding customer needs",
      "Basics of financial planning"
    ],
    images: [
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=800",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    ],
    color: "#38b6ff"
  },
  {
    id: "session3",
    title: "Pitch Perfect",
    date: "August 15-16, 2024",
    location: "Tech Incubator, Aurora",
    description: "The final session focused on helping students refine their business concepts and master the art of the pitch. They received professional presentation coaching and prepared for the final showcase event where they presented to a panel of investors and community leaders.",
    speaker: {
      name: "Jasmine Rodriguez",
      role: "Partner at Impact Ventures",
      topic: "Pitching with Purpose and Passion",
      bio: "As an investor who has evaluated thousands of pitches, Jasmine provided insights into what makes a compelling business presentation that resonates with both investors and customers.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400"
    },
    activities: [
      {
        title: "Storytelling Workshop",
        description: "Learning how to craft a compelling narrative around their business concept."
      },
      {
        title: "Slide Deck Design",
        description: "Creating professional presentation materials with effective visual communication."
      },
      {
        title: "Pitch Practice & Feedback",
        description: "Multiple rounds of practice presentations with detailed feedback from mentors."
      }
    ],
    keyTakeaways: [
      "Effective presentation skills",
      "Visual storytelling techniques",
      "Responding to investor questions",
      "Public speaking confidence"
    ],
    images: [
      "https://images.unsplash.com/photo-1559523161-0fc0d8b38a77?q=80&w=800",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=800",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
    ],
    color: "#ffbf00"
  },
  {
    id: "session4",
    title: "Financial Foundations",
    date: "September 5-6, 2024",
    location: "Business Center, Naperville",
    description: "In this session, students gained essential knowledge about financial management for startups. From basic accounting principles to funding strategies, they learned how to build a sustainable financial foundation for their businesses.",
    speaker: {
      name: "David Park",
      role: "CFO at GrowthCap Ventures",
      topic: "Financial Literacy for Young Entrepreneurs",
      bio: "With over 15 years of experience in startup finances, David simplifies complex financial concepts for young entrepreneurs and teaches practical money management skills.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400"
    },
    activities: [
      {
        title: "Budget Planning Workshop",
        description: "Students created detailed startup budgets and learned about financial forecasting."
      },
      {
        title: "Funding Options Overview",
        description: "Exploration of various funding sources from bootstrapping to venture capital."
      },
      {
        title: "Basic Accounting Practices",
        description: "Introduction to essential accounting principles every founder should know."
      }
    ],
    keyTakeaways: [
      "Financial planning fundamentals",
      "Startup funding strategies",
      "Basic accounting principles",
      "Risk management skills"
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
    ],
    color: "#10b981"
  },
  {
    id: "session5",
    title: "Marketing Essentials",
    date: "October 10-11, 2024",
    location: "Creative Hub, Chicago",
    description: "This session focused on teaching effective marketing strategies for startups. Students learned how to build a brand, create engaging content, and use digital platforms to reach their target audience effectively and affordably.",
    speaker: {
      name: "Sofia Ramirez",
      role: "Director of Marketing at LaunchBox",
      topic: "Building a Brand That Resonates",
      bio: "Sofia has helped over 50 startups develop successful marketing strategies. She specializes in helping young entrepreneurs find their unique voice in crowded marketplaces.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400"
    },
    activities: [
      {
        title: "Brand Identity Workshop",
        description: "Students developed key brand elements including mission statements, visual identity, and voice."
      },
      {
        title: "Digital Marketing Fundamentals",
        description: "Introduction to social media, content marketing, and email campaign strategies."
      },
      {
        title: "Customer Acquisition Planning",
        description: "Creating practical plans to attract and retain customers on a startup budget."
      }
    ],
    keyTakeaways: [
      "Brand development basics",
      "Digital marketing strategies",
      "Content creation skills",
      "Customer engagement techniques"
    ],
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
    ],
    color: "#f43f5e"
  },
  {
    id: "session6",
    title: "Scaling & Growth",
    date: "November 14-15, 2024",
    location: "Innovation Center, Evanston",
    description: "The final session prepared students for taking their businesses to the next level. Focusing on sustainable growth strategies, team building, and operational scaling, students learned how successful startups evolve into established companies.",
    speaker: {
      name: "Marcus Johnson",
      role: "CEO of ScaleUp Ventures",
      topic: "From Startup to Established Business",
      bio: "After scaling three startups to acquisition, Marcus now mentors young entrepreneurs on building sustainable growth models and navigating the challenges of business expansion.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
    },
    activities: [
      {
        title: "Growth Strategy Planning",
        description: "Students developed roadmaps for sustainable business growth and market expansion."
      },
      {
        title: "Team Building Workshop",
        description: "Learning how to build effective teams and develop leadership skills."
      },
      {
        title: "Operations Scaling Simulation",
        description: "Interactive exercise on managing increased operational complexity as businesses grow."
      }
    ],
    keyTakeaways: [
      "Sustainable growth models",
      "Team development techniques",
      "Operational efficiency skills",
      "Strategic planning methods"
    ],
    images: [
      "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800",
      "https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=800",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
    ],
    color: "#8b5cf6"
  }
];

// Image grid component
const ImageGrid = ({ images, title }: { images: string[], title: string }) => {
  return (
    <div className="grid grid-cols-12 grid-rows-2 gap-2 h-[220px]">
      <div className="col-span-7 row-span-2 relative rounded-xl overflow-hidden">
        <Image
          src={images[0]}
          alt={`${title} main image`}
          fill
          className="object-cover"
        />
      </div>
      <div className="col-span-5 row-span-1 relative rounded-xl overflow-hidden">
        <Image
          src={images[1]}
          alt={`${title} secondary image`}
          fill
          className="object-cover"
        />
      </div>
      <div className="col-span-5 row-span-1 relative rounded-xl overflow-hidden">
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

// Session card component
const SessionCard = ({ session, index }: { session: typeof sessions[0], index: number }) => {
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
      id={session.id}
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
      className="mb-8 rounded-2xl overflow-hidden bg-white shadow-sm"
      style={{ borderLeft: `6px solid ${session.color}` }}
    >
      {/* Session Header */}
      <div className="py-4 pl-6 pr-8 flex items-center" style={{ background: `linear-gradient(90deg, ${session.color}10, white)` }}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 text-white font-bold text-lg shadow-sm" 
          style={{ backgroundColor: session.color }}>
          {index + 1}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{session.title}</h3>
          <div className="flex text-base text-gray-500 mt-1">
            <span className="mr-4">{session.date}</span>
            <span>{session.location}</span>
          </div>
        </div>
      </div>
      
      {/* Session Content */}
      <div className="pt-3 pb-4 px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column - Description and Images */}
          <motion.div variants={fadeIn}>
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              {session.description}
            </p>
            
            <div>
              <ImageGrid images={session.images} title={session.title} />
            </div>
          </motion.div>
          
          {/* Right Column - Speaker Card */}
          <motion.div variants={fadeIn}>
            <div 
              className="rounded-xl overflow-hidden shadow-sm bg-white border border-gray-100 h-full"
            >
              <div className="text-center py-3 border-b border-gray-100">
                <h4 className="font-bold text-gray-800 text-lg uppercase tracking-wide">Featured Speaker</h4>
              </div>
              
              <div className="p-4 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 mb-3" 
                  style={{ borderColor: session.color }}>
                  <Image 
                    src={session.speaker.image} 
                    alt={session.speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h5 className="text-xl font-semibold text-gray-800 mb-1">{session.speaker.name}</h5>
                <p className="text-gray-600 text-base mb-2">{session.speaker.role}</p>
                <div 
                  className="inline-block px-4 py-1.5 rounded-full text-sm mb-3"
                  style={{ backgroundColor: `${session.color}20`, color: session.color }}
                >
                  &ldquo;{session.speaker.topic}&rdquo;
                </div>
                <p className="text-gray-700 italic text-sm">
                  {session.speaker.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CampPage() {
  const [activeTab, setActiveTab] = useState("all");
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section - 1vh */}
      <div className="relative py-6 bg-white border-b border-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-r from-indigo-600/5 to-blue-500/5"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-2 text-gray-800"
          >
            BizCamp Sessions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-600 text-base mb-4"
          >
            Our six-part entrepreneurial journey takes students from idea generation
            to market-ready concepts through hands-on workshops and expert mentorship.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2"
          >
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveTab("all"); }}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeTab === "all" 
                  ? "bg-gray-800 text-white" 
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              All Sessions
            </a>
            {sessions.map((session, index) => (
              <a 
                key={session.id} 
                href={`#${session.id}`}
                className={`px-4 py-2 rounded-full font-medium transition-all text-white hover:opacity-90`}
                style={{ backgroundColor: session.color }}
              >
                Session {index + 1}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Sessions Content */}
      <div className="max-w-8xl mx-auto px-40 py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Program</h2>
        
        <div>
          {sessions.map((session, index) => (
            <SessionCard key={session.id} session={session} index={index} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Join Our Next Camp?</h3>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-sm">
            Contact us to learn more about upcoming sessions and registration details.
          </p>
          
          <a 
            href="mailto:info@bizbuzznfp.org" 
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-colors text-sm"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
} 