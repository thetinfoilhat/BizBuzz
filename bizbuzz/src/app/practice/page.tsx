"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Fish Tank photos - 12 images for the gallery
const fishTankPhotos = [
  "/program_cards/fishtank.jpg",
  "/hero_imgs/11.jpg",
  "/hero_imgs/13.jpg",
  "/hero_imgs/14.jpg",
  "/hero_imgs/1.jpg",
  "/hero_imgs/2.jpg",
  "/hero_imgs/3.jpg",
  "/hero_imgs/4.jpg",
  "/hero_imgs/5.jpg",
  "/hero_imgs/6.jpg",
  "/hero_imgs/7.jpg",
  "/hero_imgs/8.jpg",
];

// Preliminary judges
const prelimJudges = {
  title: "Preliminary Round Judges",
  description: "Our preliminary round judges evaluate all initial pitches and select the top ideas to advance to the final round. These experienced entrepreneurs and business leaders provide valuable feedback to help students refine their concepts and presentations. Each preliminary judge brings unique industry expertise and a passion for nurturing young entrepreneurial talent.",
  judges: [
    {
      name: "Athena Chen",
      photo: "/fish_tank/p_judges/athena.png",
      title: "Founder @ Naperville Children's Business Fair",
      company: "",
      bio: "Athena is an incoming freshman at the Haas School of Business at the University of California-Berkeley. In 2020, she founded the Naperville Children's Business Fair, an entrepreneurship event incubating 200+ businesses run by over 350 kidpreneurs (ages 5-14) selling to 3,500 visitors over the past three years. She is so excited that the Fair is partnering with BizBuzz this year!"
    },
    {
      name: "Olivia Fisz",
      photo: "/fish_tank/p_judges/olivia.png",
      title: "State President @ Illinois DECA",
      company: "",
      bio: "Olivia is an incoming freshman at the Wharton School of the University of Pennsylvania, where she will study finance. She currently serves as the Illinois DECA State President, leading over 5,000 members in the world's largest high school business organization. She hopes to show young students how they can use their voices, ideas, and courage to create meaningful change."
    },
    {
      name: "Soohyun Cho",
      photo: "/fish_tank/p_judges/soohyun.jpg",
      title: "Student Representative @ City of Naperville",
      company: "",
      bio: "Soohyun is an incoming freshman at Rice University majoring in Finance. From working at a sales company to being involved in business organizations at school, he has taken his talents far and wide. This past year, he placed nationally in personal finance and investing competitions, eventually becoming a state champion in DECA."
    },
    {
      name: "Isabel Yu",
      photo: "/fish_tank/p_judges/isabel.png",
      title: "Founder @ Suki Jewels",
      company: "",
      bio: "Isabel is a rising freshman at UIUC's Gies College of Business, studying marketing and finance. As an upcoming D203 Business Incubator mentor, she is excited to help students further their passion for entrepreneurship. She is also the co-owner of Suki Jewels, a handmade jewelry business that has generated $3,000+ in revenue and 8,000+ supporters to date."
    },
    {
      name: "Ria Pande",
      photo: "/fish_tank/p_judges/ria.png",
      title: "DECA International Finalist",
      company: "",
      bio: "Ria is a freshman at the University of California, Santa Barbara, studying business and entrepreneurship. As a finalist at DECA's International Career Development Conference, she has developed strong experience in turning ideas into impact. Ria is passionate about helping students find their voices and couldn't be more excited to support this year's Fish Tank participants as they prepare to pitch and pursue their own entrepreneurial visions!"
    },
    {
      name: "Nathan Mendoza",
      photo: "/fish_tank/p_judges/nathan.png",
      title: "Founder @ Stall Secure LLC",
      company: "",
      bio: "Nathan is a rising senior at Naperville North, aspiring to become an entrepreneur while uplifting others. He is the current CEO and Co-Founder of Stall-Secure, which has won first place in three major pitch competitions. To date, he has secured over $9,000 in funding for his company and is looking forward to seeing BizBuzz participants' creativity!"
    }
  ]
};

// Final judges
const finalJudges = {
  title: "Final Round Judges",
  description: "Our distinguished panel of final judges consists of successful entrepreneurs, investors, and community leaders who evaluate the finalists' pitches with professional rigor. They assess each idea based on innovation, market potential, feasibility, and presentation quality. These judges not only select the winners but also provide mentorship opportunities and connections to help turn the most promising ideas into reality.",
  judges: [
    {
      name: "Phil Ramos",
      photo: "/fish_tank/f_judges/phil.png",
      title: "Owner & President",
      company: "Office Furniture Solutions",
      bio: "Phil Ramos is the owner and president of Office Furniture Solutions in Naperville, where he has built a respected business providing new and refurbished office furniture. Known for his commitment to community involvement and mentorship, he actively supports local initiatives and youth programs."
    },
    {
      name: "Raymond Munch",
      photo: "/fish_tank/f_judges/ray.png",
      title: "Director of Finance",
      company: "City of Naperville",
      bio: "Raymond Munch serves as the Director of Finance for the City of Naperville, overseeing financial operations and managing the city's substantial budget. His career includes over a decade in law enforcement with the Village of Glen Ellyn, followed by leadership roles in city management in DeKalb, Illinois."
    },
    {
      name: "Janet Yang Rohr",
      photo: "/fish_tank/f_judges/janet.png",
      title: "State Representative",
      company: "Illinois' 41st District",
      bio: "Janet Yang Rohr is a state representative for Illinois' 41st District, serving since 2021 and focusing on education, healthcare, and economic issues. Before entering politics, she held leadership roles in finance and served on the Naperville District 203 school board."
    },
    {
      name: "Brad Wilson",
      photo: "/fish_tank/f_judges/brad.png",
      title: "Executive Director",
      company: "Naperville Park District",
      bio: "Brad Wilson has been the Executive Director of the Naperville Park District since February 2022, after a distinguished 23-year tenure with the organization. He has been with the district for over two decades, beginning as an intern and working his way up through various leadership positions."
    },
    {
      name: "Isha Elandassery",
      photo: "/fish_tank/f_judges/isha_elandassery.jpg",
      title: "Founder",
      company: "Naperville Rising Women in Business",
      bio: "Isha Elandassery is the founder of Naperville Rising Women in Business (NRWIB), an organization dedicated to empowering young girls to become future leaders. She also created Salus Security, a startup focused on developing discreet emergency wristbands for students."
    }
  ]
};

// Winner
const winner = {
    name: "Garrett Hauk",
    photo: "/fish_tank/ranking/first.jpg",
    productName: "Garrett's Gourmet Dog Treats",
    school: "",
    description: "Garrett's Gourmet Dog Treats offers organic, natural, and delicious snacks made with fewer than five ingredients. As a healthier, modern alternative to conventional options, they ensure man's best friend enjoys treats that are both simple and satisfying."
};

// Runner-ups
const runnerUps = [
  {
    name: "Taksh Taware & Rohan Patwardhan",
    photo: "/fish_tank/ranking/second.jpg", 
    productName: "ChitChat Lingo",
    school: "",
    description: "ChitChat Lingo empowers immigrants, tourists, and global professionals to speak confidently and fluently in new languages. By focusing on real-life, emotion-filled scenarios, it makes meaningful conversations more natural and accessible than ever."
  },
  {
    name: "Sara Jayaseelan",
    photo: "/fish_tank/ranking/third.jpg",
    productName: "Cuisinify",
    school: "",
    description: "Cuisinify makes cooking accessible for everyone by tackling ingredient substitutions, leftover use, and nutritious meal prep. With AR technology that identifies recipe substitutes in real time, it empowers anyone to cook anytime with what they have on hand."
  },
  {
    name: "Mirav Patel & Mishi Patel",
    photo: "/fish_tank/ranking/fourth.jpg",
    productName: "ECOVision",
    school: "",
    description: "ECOVision sees something different with corn waste. Instead of leaving it to rot, burn, or decompose, it uses a complex process that extracts leftover compounds in the waste to create yarn, foam, and paper, revolutionizing food waste management."
  },
  {
    name: "Claire Shen & Catherine Shen",
    photo: "/fish_tank/ranking/fifth.jpg",
    productName: "Pathway",
    school: "",
    description: "Pathway streamlines the process of finding communities, activities, and interests for high schoolers, removing the need for expensive college counselors and wasted time on web searches. Pathway creates a pathway for those finding their journey."
  }
];

// FishTank Component
export default function FishTankPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  // For image carousel
  const [activeSlide, setActiveSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bubbleContainerRef = useRef<HTMLDivElement>(null);
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveSlide((prevIndex) => 
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [activeSlide]);

  // Bubble animation
  useEffect(() => {
    const bubbleContainer = bubbleContainerRef.current;
    if (!bubbleContainer) return;
    
    const createBubble = () => {
      const bubble = document.createElement("div");
      
      // Set bubble properties
      const size = Math.random() * 30 + 10; // Size between 10px and 40px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.position = "absolute";
      bubble.style.borderRadius = "50%";
      bubble.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))";
      bubble.style.boxShadow = "inset 0 0 5px rgba(255, 255, 255, 0.2)";
      bubble.style.pointerEvents = "none";
      
      // Random starting position
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = `-${size}px`;
      
      // Random animation properties
      const duration = Math.random() * 15 + 8;
      const delay = Math.random() * 2;
      
      // Animation
      bubble.style.animation = `bubbleRise ${duration}s linear ${delay}s`;
      
      // Append to container and remove when animation completes
      bubbleContainer.appendChild(bubble);
      
      setTimeout(() => {
        if (bubble && bubble.parentNode === bubbleContainer) {
          bubbleContainer.removeChild(bubble);
        }
      }, (duration + delay) * 1000);
    };
    
    // Create initial set of bubbles
    for (let i = 0; i < 15; i++) {
      createBubble();
    }
    
    // Continue creating bubbles periodically
    const intervalId = setInterval(createBubble, 800);
    
    // Add the keyframes for the animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes bubbleRise {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 0;
        }
        10% {
          opacity: 0.5;
        }
        80% {
          opacity: 0.5;
        }
        100% {
          transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 100}px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      clearInterval(intervalId);
      if (style.parentNode) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Redesigned with Better Image Organization */}
      <section className="relative overflow-hidden">
        {/* Bubble container - positioned behind everything */}
        <div ref={bubbleContainerRef} className="absolute inset-0 z-15"></div>
        
        {/* Trophy background with blue overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={fishTankPhotos[0]} 
            alt="Fish Tank trophy background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040037]/95 via-[#003166]/90 to-[#003166]/80"></div>
        </div>
        
        {/* Large transparent bubble decorations */}
        <div className="absolute top-60 right-40 w-80 h-80 rounded-full bg-[#0066cc]/10 blur-2xl"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 rounded-full bg-[#0066cc]/10 blur-2xl"></div>
        <div className="absolute top-40 left-1/4 w-64 h-64 rounded-full bg-[#0074cc]/10 blur-2xl"></div>
        
        {/* Wave at the bottom */}
        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <svg className="w-full fill-white" viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"></path>
          </svg>
        </div>
        
        {/* Main content container */}
        <div className="container mx-auto px-4 relative z-20 pt-24 pb-32">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left column - Title and description */}
            <div className="flex flex-col justify-center">
              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h1 className="text-left mb-10">
                  <span className="block text-8xl font-extrabold tracking-tight text-white leading-none">FISH</span>
                  <span className="block text-8xl font-extrabold tracking-tight text-[#FFD700] leading-none">TANK</span>
                </h1>
              </motion.div>
              
              {/* Description box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-[#003166]/40 backdrop-blur-sm rounded-xl p-7 border border-white/10 shadow-lg mb-12"
              >
                <p className="text-xl leading-relaxed text-white">
                  Where young entrepreneurs pitch innovative ideas, receive expert feedback, and compete for resources to turn their business concepts into reality
                </p>
              </motion.div>
              
              {/* Stats row */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-3 gap-6 mb-12"
              >
                <motion.div variants={fadeIn} className="bg-[#003166]/40 backdrop-blur-sm rounded-xl py-6 px-3 text-center border border-white/10">
                  <div className="text-4xl font-bold text-[#FFD700]">50+</div>
                  <div className="text-sm text-white">Teams</div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-[#003166]/40 backdrop-blur-sm rounded-xl py-6 px-3 text-center border border-white/10">
                  <div className="text-4xl font-bold text-[#FFD700]">2</div>
                  <div className="text-sm text-white">Days</div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-[#003166]/40 backdrop-blur-sm rounded-xl py-6 px-3 text-center border border-white/10">
                  <div className="text-4xl font-bold text-[#FFD700]">11</div>
                  <div className="text-sm text-white">Judges</div>
                </motion.div>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#what-is-fish-tank" 
                  className="inline-flex items-center px-8 py-4 bg-white text-[#004080] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                
                <a 
                  href="mailto:info@bizbuzznfp.org" 
                  className="inline-flex items-center px-8 py-4 bg-[#FFD700] text-[#004080] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  Apply Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
            
            {/* Right column - One large featured image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[560px] border border-white/10">
                {/* Main hero image */}
                {fishTankPhotos.slice(6, 9).map((photo, index) => (
                  <div 
                    key={index} 
                    className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <Image 
                      src={photo}
                      alt={`Fish Tank slide ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 bg-[#FFD700] text-[#004080] px-3 py-1.5 rounded-lg font-bold text-sm">
                  2024 EDITION
                </div>
                
                {/* Image content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white">
                  <h3 className="text-2xl font-bold mb-1">July 24-25, 2024</h3>
                  <p className="text-lg">College of DuPage, Glen Ellyn</p>
                </div>
                
                {/* Dot navigation */}
                <div className="absolute bottom-6 right-6 flex space-x-3 z-10">
                  {[0, 1, 2].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        activeSlide === idx ? 'bg-white' : 'bg-white/40'
                      }`}
                      aria-label={`View slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Fish Tank Section - Consolidated with info & images */}
      <section id="what-is-fish-tank" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-[#004080] rounded-full text-sm font-medium mb-4">
              The Competition
            </span>
            <h2 className="text-6xl font-bold text-[#0f172a]">
              What is <span className="text-[#38b6ff]">Fish Tank</span>?
            </h2>
          </div>
          
          {/* Large featured image with text overlay */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl mb-16"
          >
            <Image
              src={fishTankPhotos[1]} 
              alt="Fish Tank event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/75 to-[#000000]/90"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <div className="flex items-center mb-4">
                <div className="w-1.5 h-12 bg-[#FFD700] mr-5 rounded-full"></div>
                <h3 className="text-5xl font-bold text-white">Welcome to the Tank!</h3>
              </div>
              <div className="max-w-3xl">
                <p className="text-xl leading-relaxed text-white mb-4">
                  Inspired by the world-renowned series, Shark Tank, the Fish Tank competition invites 3rd-9th grade students in the Chicagoland area to identify a market opportunity and introduce a new business, product, or service.
                </p>
                <p className="text-xl leading-relaxed text-white mb-6">
                  Hosted at the College of DuPage on July 24th & 25th with some of Naperville&apos;s biggest business owners and leaders, participants will take their big innovations to an even bigger stage.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#004080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white font-medium">July 24-25, 2024</span>
                <span className="text-white opacity-60 mx-2">•</span>
                <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#004080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium">College of DuPage, Glen Ellyn</span>
              </div>
            </div>
          </motion.div>
          
          {/* Program Highlights - Improved Card Layout */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#004080] to-[#0074cc] rounded-xl overflow-hidden shadow-xl relative group transform transition-transform hover:scale-105 duration-300"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="p-8 relative z-10">
                  <div className="bg-[#FFD700]/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Entrepreneurial Experience</h4>
                  <p className="text-white/90">
                    Students gain real-world entrepreneurial experience by developing a business concept from ideation to pitch, learning critical skills in market research, product development, and financial planning.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 left-0 h-1.5 bg-[#FFD700]"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[#004080] to-[#0074cc] rounded-xl overflow-hidden shadow-xl relative group transform transition-transform hover:scale-105 duration-300"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="p-8 relative z-10">
                  <div className="bg-[#FFD700]/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Expert Mentorship</h4>
                  <p className="text-white/90">
                    Receive detailed feedback from our panel of distinguished judges during your pitch. Gain valuable insights and continued support from successful business leaders to help grow your business long after the competition ends.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 left-0 h-1.5 bg-[#FFD700]"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-[#004080] to-[#0074cc] rounded-xl overflow-hidden shadow-xl relative group transform transition-transform hover:scale-105 duration-300"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="p-8 relative z-10">
                  <div className="bg-[#FFD700]/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Funding Opportunities</h4>
                  <p className="text-white/90">
                    Winners receive cash prizes of up to $500 to kickstart their business ventures. All participants receive ongoing support, networking connections, and resources to help turn their entrepreneurial vision into reality.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 left-0 h-1.5 bg-[#FFD700]"></div>
              </motion.div>
            </div>
          </div>
          
          {/* Event Journey & Photos - Improved Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left side - Event journey */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-[#0f172a] mb-6">Make a Splash</h3>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-[#38b6ff] flex items-center justify-center text-white font-bold">1</div>
                      <div className="w-0.5 h-full bg-[#38b6ff]/30 ml-5 mt-2"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0f172a] mb-2">Registration & Team Formation</h4>
                      <p className="text-[#000000] mb-2">Form a team of 1–3 students and register to compete. Define your business concept, conduct market research, and develop both a marketing and financial plan. Prepare a 5-minute presentation to bring your idea to life.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-[#38b6ff] flex items-center justify-center text-white font-bold">2</div>
                      <div className="w-0.5 h-full bg-[#38b6ff]/30 ml-5 mt-2"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0f172a] mb-2">Preliminary Round – July 24</h4>
                      <p className="text-[#000000] mb-2">Present your business concept to a panel of six high school business leaders, including DECA state officers and international finalists. The top 12 teams (approximately 25%) will advance to the final round on July 25th.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-[#38b6ff] flex items-center justify-center text-white font-bold">3</div>
                      <div className="w-0.5 h-full bg-[#38b6ff]/30 ml-5 mt-2"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0f172a] mb-2">Final Round – July 25</h4>
                      <p className="text-[#000000] mb-2">Pitch your polished business idea to a panel of Naperville&apos;s top business owners and government leaders. Winners will receive funding and ongoing support to help launch their ventures. The inaugural Fish Tank champion will receive an interview from NCTV17.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-[#38b6ff] flex items-center justify-center text-white font-bold">4</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0f172a] mb-2">After Fish Tank</h4>
                      <p className="text-[#000000] mb-2">All participants will continue to have access to BizBuzz Camp resources, detailed feedback from the Fish Tank judges, and contact information for our high school judging panel. Reach out anytime—support does not stop after the pitch event. We cannot wait to see what you build, create, and innovate next!</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right side - Improved Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 grid grid-cols-12 grid-rows-12 gap-3 h-[600px]"
            >
              {/* Main large image */}
              <div className="col-span-8 row-span-8 relative rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src={fishTankPhotos[7]} 
                  alt="Fish Tank group event"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white font-bold text-lg">
                  2023 Participants
                </div>
              </div>

              {/* Top right image */}
              <div className="col-span-4 row-span-4 relative rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={fishTankPhotos[4]} 
                  alt="Judges panel"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Middle right image */}
              <div className="col-span-4 row-span-4 relative rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={fishTankPhotos[3]} 
                  alt="Student presenting"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom left image */}
              <div className="col-span-4 row-span-4 relative rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={fishTankPhotos[5]} 
                  alt="Award ceremony"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom middle image */}
              <div className="col-span-4 row-span-4 relative rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={fishTankPhotos[8]} 
                  alt="Audience at Fish Tank"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom right image */}
              <div className="col-span-4 row-span-4 relative rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src={fishTankPhotos[9]} 
                  alt="Student team collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Winners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-6xl font-bold text-[#0f172a] mb-5">
              Competition <span className="text-[#38b6ff]">Winners</span>
            </h2>
          </motion.div>

          {/* Main Winner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={winner.photo}
                    alt={winner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-3">{winner.name}</h3>
                  <p className="text-xl font-semibold text-[#38b6ff] mb-2">{winner.productName}</p>
                  <p className="text-base text-[#64748b] mb-4">{winner.school}</p>
                  <p className="text-lg text-[#334155]">{winner.description}</p>
                  
                  <div className="mt-6 flex items-center">
                    <div className="w-12 h-12 bg-[#ffbf00]/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#ffbf00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-3H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm13 2h-4v10a2 2 0 0 0 2 2h2v-5h2V5a1 1 0 0 0-1-1z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-[#64748b]">First Place Winner</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Runner-ups Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-[#0f172a]">Runner-Ups</h3>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {runnerUps.map((runnerUp, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-[200px]">
                    <Image
                      src={runnerUp.photo}
                      alt={runnerUp.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#0f172a] mb-2">{runnerUp.name}</h4>
                    <p className="text-lg font-semibold text-[#38b6ff] mb-2">{runnerUp.productName}</p>
                    <p className="text-sm text-[#64748b] mb-3">{runnerUp.school}</p>
                    <p className="text-base text-[#334155]">{runnerUp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-6xl font-bold text-[#0f172a] mb-5">
              Our <span className="text-[#38b6ff]">Judges</span>
            </h2>
          </motion.div>

          {/* Final Judges - More prominent section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-[#0f172a]">
                <span className="text-[#ffbf00]">Final</span> Round Judges
              </h3>
              <p className="text-xl text-[#334155] max-w-4xl mx-auto mt-3">
                Five business leaders, government officials, and innovators passionate about growing the next generation of entrepreneurs and changemakers who will solve issues in their communities and beyond.
              </p>
            </div>

            {/* First row - 3 judges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
            >
              {finalJudges.judges.slice(0, 3).map((judge, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-xl border border-[#ffbf00]/30 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-[280px] overflow-hidden">
                    <Image 
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-[#ffbf00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 bg-[#ffbf00] text-white px-3 py-1 text-sm font-bold uppercase rounded-bl-lg">
                      Final Judge
                    </div>
                    <div className="absolute bottom-0 w-full p-4 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-medium text-lg">{judge.company}</p>
                    </div>
                  </div>
                  <div className="p-6 border-t-4 border-[#ffbf00]">
                    <h4 className="text-xl font-bold text-[#0f172a] mb-2">{judge.name}</h4>
                    <p className="text-lg font-semibold text-[#ffbf00] mb-3">{judge.title}</p>
                    <p className="text-base text-[#334155]">{judge.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Second row - 2 judges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {finalJudges.judges.slice(3, 5).map((judge, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-xl border border-[#ffbf00]/30 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-[280px] overflow-hidden">
                <Image 
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-[#ffbf00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 bg-[#ffbf00] text-white px-3 py-1 text-sm font-bold uppercase rounded-bl-lg">
                      Final Judge
                    </div>
                    <div className="absolute bottom-0 w-full p-4 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-medium text-lg">{judge.company}</p>
                </div>
              </div>
                  <div className="p-6 border-t-4 border-[#ffbf00]">
                    <h4 className="text-xl font-bold text-[#0f172a] mb-2">{judge.name}</h4>
                    <p className="text-lg font-semibold text-[#ffbf00] mb-3">{judge.title}</p>
                    <p className="text-base text-[#334155]">{judge.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
            
          {/* Preliminary Judges */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-[#0f172a]">
                <span className="text-[#38b6ff]">Preliminary</span> Round Judges
              </h3>
              <p className="text-xl text-[#334155] max-w-4xl mx-auto mt-3">
                Six high school judges experienced in business competitions and running their own companies excited to help students like themselves grow in both entrepreneurial thinking and public speaking.
              </p>
            </div>
            
            {/* First row - 3 judges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
            >
              {prelimJudges.judges.slice(0, 3).map((judge, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#38b6ff]/30 hover:shadow-xl transition-all"
                >
                  <div className="relative h-[280px]">
                    <Image
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-0 right-0 bg-[#38b6ff] text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg">
                      Prelim Judge
                    </div>
                  </div>
                  <div className="p-6 border-t-4 border-[#38b6ff]">
                    <h4 className="text-xl font-bold text-[#0f172a] mb-2">{judge.name}</h4>
                    <p className="text-lg font-semibold text-[#38b6ff] mb-3">{judge.title}</p>
                    <p className="text-base text-[#334155]">{judge.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Second row - 3 judges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {prelimJudges.judges.slice(3, 6).map((judge, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#38b6ff]/30 hover:shadow-xl transition-all"
                >
                  <div className="relative h-[280px]">
                    <Image
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-0 right-0 bg-[#38b6ff] text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg">
                      Prelim Judge
                    </div>
                  </div>
                  <div className="p-6 border-t-4 border-[#38b6ff]">
                    <h4 className="text-xl font-bold text-[#0f172a] mb-2">{judge.name}</h4>
                    <p className="text-lg font-semibold text-[#38b6ff] mb-3">{judge.title}</p>
                    <p className="text-base text-[#334155]">{judge.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
} 