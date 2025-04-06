"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800",
      "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=800",
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
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
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
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
      "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?q=80&w=800",
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
      "https://images.unsplash.com/photo-1565514501944-3aa96e9fbd2a?q=80&w=800",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
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
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=800",
      "https://images.unsplash.com/photo-1557804347-405233cb8835?q=80&w=800",
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
      "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=800",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800",
    ],
    color: "#8b5cf6"
  }
];

// Image grid component
const ImageGrid = ({ images, title }: { images: string[], title: string }) => {
  // Make sure we have 5 images by duplicating if necessary
  const allImages = [...images];
  while (allImages.length < 5) {
    allImages.push(images[allImages.length % images.length]);
  }
  
  return (
    <div className="grid grid-cols-7 gap-2 h-full">
      {/* Main large image */}
      <div className="col-span-4 row-span-2 relative rounded-xl overflow-hidden h-[320px]">
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
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={allImages[1]}
              alt={`${title} secondary image`}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={allImages[2]}
              alt={`${title} tertiary image`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={allImages[3]}
              alt={`${title} fourth image`}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden">
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
      className="mb-12 rounded-2xl overflow-hidden bg-white shadow-md"
      style={{ borderLeft: `6px solid ${session.color}` }}
    >
      {/* Session Header */}
      <div className="py-6 pl-6 pr-8 flex items-center" style={{ background: `linear-gradient(90deg, ${session.color}15, white)` }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mr-5 text-white font-bold text-xl shadow-sm" 
          style={{ backgroundColor: session.color }}>
          {index + 1}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{session.title}</h3>
          <div className="flex text-base text-gray-500 mt-1">
            <span className="mr-4 flex items-center">
              <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {session.date}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {session.location}
            </span>
          </div>
        </div>
      </div>
      
      {/* Session Content */}
      <div className="pt-5 pb-6 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - Description and Images */}
          <motion.div variants={fadeIn} className="md:col-span-7">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: session.color }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <h4 className="font-bold text-lg text-gray-800">SESSION OVERVIEW</h4>
            </div>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {session.description}
            </p>
            
            <div className="h-[320px]">
              <ImageGrid images={session.images} title={session.title} />
            </div>
          </motion.div>
          
          {/* Right Column - Speaker Card */}
          <motion.div variants={fadeIn} className="md:col-span-5">
            <div 
              className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 h-full flex flex-col"
            >
              <div className="text-center py-4" style={{ backgroundColor: `${session.color}10` }}>
                <h4 className="font-bold text-gray-800 text-lg">FEATURED SPEAKER</h4>
              </div>
              
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 mb-4" 
                  style={{ borderColor: session.color }}>
                  <Image 
                    src={session.speaker.image} 
                    alt={session.speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h5 className="text-2xl font-semibold text-gray-800 mb-1">{session.speaker.name}</h5>
                <p className="text-gray-600 text-base mb-3">{session.speaker.role}</p>
                <div 
                  className="inline-block px-4 py-2 rounded-full text-sm mb-4"
                  style={{ backgroundColor: `${session.color}20`, color: session.color }}
                >
                  &ldquo;{session.speaker.topic}&rdquo;
                </div>
                <p className="text-gray-700 italic text-base flex-grow">
                  {session.speaker.bio}
                </p>

                <a 
                  href="#" 
                  className="mt-4 inline-flex items-center text-sm font-medium"
                  style={{ color: session.color }}
                >
                  View speaker profile
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CampPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative flex items-center bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border-b border-gray-100 overflow-hidden min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-indigo-100 rounded-full blur-3xl opacity-30 -mr-40 -mt-40"></div>
          <div className="absolute left-0 bottom-0 w-[40rem] h-[40rem] bg-blue-100 rounded-full blur-3xl opacity-30 -ml-40 -mb-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-5 py-2 rounded-full text-base font-medium bg-indigo-100 text-indigo-600 mb-6">
                Summer 2024
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-gray-800 leading-tight">
                BizCamp <span className="text-indigo-600">Sessions</span>
              </h1>
              <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-xl">
                Our six-part entrepreneurial journey takes students from idea generation
                to market-ready concepts through hands-on workshops and expert mentorship.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#session1" 
                  className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-xl shadow-md hover:bg-indigo-700 transition-colors"
                >
                  Explore Sessions
                  <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a 
                  href="mailto:info@bizbuzznfp.org" 
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 text-lg font-medium rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Register Now
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
                    src="/hero_imgs/1.jpg"
                    alt="Students collaborating"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-xl overflow-hidden shadow-lg transform rotate-6">
                  <Image
                    src="/hero_imgs/2.jpg"
                    alt="Workshop session"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/hero_imgs/3.jpg"
                    alt="Student presentation"
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
      
      {/* Sessions Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Our Program</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Each session builds upon the previous one, creating a comprehensive learning journey from idea to execution.</p>
        
        <div>
          {sessions.map((session, index) => (
            <SessionCard key={session.id} session={session} index={index} />
          ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Entrepreneurial Journey?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join our next BizCamp session and learn how to transform your ideas into reality with expert guidance and hands-on experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@bizbuzznfp.org" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
              >
                Register Now
              </a>
              <Link 
                href="/sessions" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-medium rounded-lg border border-white hover:bg-white/10 transition-colors"
              >
                Explore 1:1 Sessions
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
} 