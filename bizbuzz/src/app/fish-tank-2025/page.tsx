"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// 2025 Fish Tank photos
const heroSlides = [
  "/fish_tank/2025/images/hero-celebration.jpg",
  "/fish_tank/2025/images/hero-stage.jpg",
  "/fish_tank/2025/images/hero-judges.jpg",
];

const fishTankPhotos = [
  "/fish_tank/2025/images/goodpic.jpg",
  "/fish_tank/2025/images/gallery-stage.jpg",
  "/fish_tank/2025/images/gallery-pitching.jpg",
  "/fish_tank/2025/images/gallery-prototype.jpg",
  "/fish_tank/2025/images/gallery-workshop.jpg",
  "/fish_tank/2025/images/gallery-team.jpg",
  "/fish_tank/2025/images/gallery-speaker.jpg",
  "/fish_tank/2025/images/gallery-awards.jpg",
  "/fish_tank/2025/images/gallery-trophy.jpg",
  "/fish_tank/2025/images/gallery-market.jpg",
  "/fish_tank/2025/images/prelim-judge.jpg",
  "/fish_tank/2025/images/gallery-check.jpg",
  "/fish_tank/2025/images/IMG_5116.jpeg",
  "/fish_tank/2025/images/gallery-friends.jpg",
  "/fish_tank/2025/images/gallery-group.jpg",
  "/fish_tank/2025/images/gallery-celebrate.jpg",
];

const competitionWinners = [
  {
    placement: "1st Place",
    team: "AbduRahman Yuldash",
    project: "The Better Investor",
    image: "/fish_tank/2025/winners/first-place.JPG",
    description:
      "The Better Investor makes growing your money feel less like guesswork and more like a game you can actually win. It replaces fear and FOMO with clarity, teaching timeless investing wisdom through AI coaching that talks with you, not at you. Through the web app, you can earn XP, unlock titles, and watch your confidence grow as your portfolio does too.",
  },
  {
    placement: "2nd Place",
    team: "Arjun Singh & Arjun Malhotra",
    project: "MagicPillow",
    image: "/fish_tank/2025/winners/second-place.JPG",
    description:
      "Magic Pillow is the world's first pillow that dreams as big as you do. It heats when you're cold, cools when you're sweaty, tracks your sleep, and keeps your neck happy through every nap and flight—all for under $80. Built for travelers, hot sleepers, and anyone tired of restless nights, it makes comfort feel a little more like magic.",
  },
  {
    placement: "3rd Place",
    team: "Saravan & Shanvitha Palakruthi",
    project: "EverFresh",
    image: "/fish_tank/2025/winners/third-place.JPG",
    description:
      "EverFresh is a smart stand that keeps food fresher for longer, tackling spoilage in a $30B market. With built-in preservation tech and refillable pouches, it helps households waste less, save more, and enjoy food the way it's meant to taste—fresh.",
  },
  {
    placement: "4th Place",
    team: "Ohm Patel, Nikhil Naveen, Sai Sirasani, & Krish Mittal",
    project: "Agritech",
    image: "/fish_tank/2025/winners/fourth-place.JPG",
    description:
      "Agritech is where agriculture meets technology. It uses innovation in applications of AI, robotics, biotechnology, and data analytics to make farming more sustainable and resilient. From precision irrigation and soil sensors to autonomous tractors and vertical farms, Agritech is redefining how the world grows food.",
  },
  {
    placement: "5th Place",
    team: "Sanvi Das & Ovee Yande",
    project: "SGS",
    image: "/fish_tank/2025/winners/fifth-place.JPG",
    description:
      "SGS is a smart gardening system that takes the guesswork out of growing. Using automated sensors, timed watering, and real-time data, it keeps your plants healthy no matter how busy you are. Every plant parent deserves to be a pro!",
  },
];

const finalsJudges = [
  {
    name: "Aleck Matambo",
    title: "Senior Director of Global Procurement @ Google",
    image: "/fish_tank/f_judges/aleck.jpg",
    bio: "Aleck Matambo led global procurement at Google, managing $16B in annual spend across EMEA, APAC, and LATAM. He developed the company's first AI-native procurement tool, automated contract analysis, and drove a global savings program that improved efficiency by over 10%. He also established the One Google Negotiation Program and Cloud & AI Strategic Alliances Platform, delivering $1B in annual value across 50+ major deals.",
  },
  {
    name: "Ryan Havlick",
    title: "Venture Partner @ Multimodal Ventures",
    image: "/fish_tank/f_judges/ryan.jpg",
    bio: "Ryan Havlick is a Venture Partner at Multimodal Ventures, a Chicago-based seed-stage fund investing in Y Combinator–backed startups. He helps evaluate potential portfolio investments, enhance Midas (the firm's proprietary data tool), and refine investment strategy and due diligence. He relies on data-driven analysis to assess startups like those BizBuzz kidpreneurs are developing for Fish Tank.",
  },
  {
    name: "Isha Elandassery",
    title: "Founder @ Naperville Rising Women in Business",
    image: "/fish_tank/f_judges/isha.jpg",
    bio: "Isha Elandassery is a junior at the Kelley School of Business, where she studies finance and serves as president of the university's Girl Up United Nations chapter. As a former guest speaker for BizBuzz and 2024 Fish Tank judge, she's excited to return once again to create “biz” and “buzz.”",
  },
  {
    name: "Usha Shedge",
    title: "Founder @ Smart Sakhi",
    image: "/fish_tank/f_judges/usha.jpg",
    bio: "Usha Shedge is a social entrepreneur and technologist passionate about using innovation to drive community impact. After 18 years in IT and Business Intelligence, she founded initiatives empowering thousands of youth and women farmers through sustainability projects and mission-driven enterprise.",
    objectPosition: "center 19%"
  },
  {
    name: "Geetha Pilli",
    title: "Director of Enterprise Architecture @ Core-Mark International",
    image: "/fish_tank/f_judges/geetha.jpg",
    bio: "Geetha Pilli leads technology strategy, system integration, and digital transformation across high-volume retail and supply-chain operations. With an MBA from the University of Chicago Booth School of Business, she drives initiatives that leverage IoT and AI to enhance efficiency and business value.",
  },
  {
    name: "Nara Rosie",
    title: "Consultant @ PwC",
    image: "/fish_tank/f_judges/nara.jpg",
    bio: "Nara Rosie brings strategic advisory experience from PwC, helping organizations embrace the consulting mindset behind building scalable, resilient ventures—and inspiring young founders to think the same way.",
  },
];

const prelimJudges = [
  {
    name: "Andrew Bukowski",
    title: "Co-Founder @ SmartSeat",
    image: "",
    bio: "Andrew is an incoming freshman at Yale University. He raised $30K+ for SmartSeat, a health-tech startup tackling posture and seating-related issues, and was named a Coca-Cola Scholarship Finalist and Conrad Challenge Winner.",
  },
  {
    name: "Anay Apte",
    title: "Vice President @ Illinois DECA",
    image: "",
    bio: "Anay is an incoming freshman at the University of Pennsylvania. He leads 5,400+ DECA members statewide and brings hands-on engineering camp experience to help Fish Tank teams dream big.",
  },
  {
    name: "Paul van der Vorst",
    title: "Co-Director @ Naperville Children&apos;s Business Fair",
    image: "",
    bio: "Paul is an incoming freshman at the University of South Carolina. He helped incubate 400+ kid-run businesses selling to 5,000+ visitors and now mentors students through ideation and pitching.",
  },
  {
    name: "Amy Yang",
    title: "Harvard Book Prize Recipient",
    image: "",
    bio: "Amy is a rising senior at Naperville Central High School, passionate about grassroots advocacy and creative problem-solving that brings communities together.",
  },
  {
    name: "Ansh Shah",
    title: "2024 Executive Director @ BizBuzz",
    image: "",
    bio: "Ansh is an incoming freshman at the University of Illinois Urbana-Champaign. A former BizBuzz executive director, he&apos;s back as a judge to cheer on the next generation of innovators.",
  },
];

export default function FishTank2025Page() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const topWinners = competitionWinners.slice(0, 3);
  const bottomWinners = competitionWinners.slice(3);
  const firstWinner = topWinners[0];
  const runnerUps = [...topWinners.slice(1), ...bottomWinners];

  const prelimTop = prelimJudges.slice(0, 3);
  const prelimBottom = prelimJudges.slice(3);

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

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveSlide((prevIndex) => 
        prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [activeSlide]);

  const renderJudgePhoto = (
    src: string | undefined,
    alt: string,
    gradient: string,
    badge: string,
    badgeColor: string,
    objectPosition?: string
  ) => (
    <div className="relative h-52 overflow-hidden">
      <div className="absolute inset-0" style={{ background: gradient }}></div>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white/70 text-4xl font-bold">
          {alt.split(" ").map((word) => word[0]).join("")}
        </div>
      )}
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-[0.3em] uppercase" style={{ background: badgeColor, color: '#0b1120' }}>
        {badge}
      </div>
    </div>
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % fishTankPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + fishTankPhotos.length) % fishTankPhotos.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Redesigned with Gold Theme */}
      <section className="relative overflow-hidden">
        {/* Trophy background with gold overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={fishTankPhotos[0]} 
            alt="Fish Tank trophy background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#CD8F20]/95 via-[#E69F16]/90 to-[#FFBF00]/85"></div>
        </div>
        
        {/* Large transparent gold bubble decorations */}
        <div className="absolute top-60 right-40 w-80 h-80 rounded-full bg-[#FFBF00]/10 blur-2xl"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 rounded-full bg-[#FFBF00]/10 blur-2xl"></div>
        <div className="absolute top-40 left-1/4 w-64 h-64 rounded-full bg-[#FFD700]/10 blur-2xl"></div>
        
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
                  <span className="block text-8xl font-extrabold tracking-tight text-[#FFBF00] leading-none">TANK</span>
                </h1>
              </motion.div>
              
              {/* Description box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-[#CD8F20]/40 backdrop-blur-sm rounded-xl p-7 border border-white/10 shadow-lg mb-12"
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
                <motion.div variants={fadeIn} className="bg-[#CD8F20]/40 backdrop-blur-sm rounded-xl py-6 px-3 text-center border border-white/10">
                  <div className="text-4xl font-bold text-[#FFBF00]">150+</div>
                  <div className="text-sm text-white">Competitors</div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-[#CD8F20]/40 backdrop-blur-sm rounded-xl py-6 px-3 text-center border border-white/10">
                  <div className="text-4xl font-bold text-[#FFBF00]">30+</div>
                  <div className="text-sm text-white">Mentors</div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="bg-[#CD8F20]/40 backdrop-blur-sm rounded-xl py-6 px-3 text-center border border-white/10">
                  <div className="text-4xl font-bold text-[#FFBF00]">11</div>
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
                  className="inline-flex items-center px-8 py-4 bg-white text-[#CD8F20] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                
                <a 
                  href="https://tinyurl.com/bizbuzz2025" 
                  className="inline-flex items-center px-8 py-4 bg-[#FFBF00] text-[#CD8F20] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
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
                {heroSlides.map((photo, index) => (
                  <div 
                    key={photo} 
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
                
                {/* Image content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white">
                  <h3 className="text-2xl font-bold mb-1">July 23-24, 2025</h3>
                  <p className="text-lg">Benedictine University, Lisle</p>
                </div>
                
                {/* Dot navigation */}
                <div className="absolute bottom-6 right-6 flex space-x-3 z-10">
                  {heroSlides.map((_, idx) => (
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

      {/* What is Fish Tank Section */}
      <section id="what-is-fish-tank" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-[#FFBF00]/20 text-[#CD8F20] rounded-full text-sm font-medium mb-4">
              The Competition
            </span>
            <h2 className="text-6xl font-bold text-[#0f172a]">
              What is <span className="text-[#FFBF00]">Fish Tank</span>?
            </h2>
          </div>
          
          {/* Large featured image with text overlay */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl mb-16"
          >
            <Image
              src={fishTankPhotos[1]} 
              alt="Fish Tank event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/40 via-[#000000]/50 to-[#000000]/70"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <div className="flex items-center mb-4">
                <div className="w-1.5 h-12 bg-[#FFBF00] mr-5 rounded-full"></div>
                <h3 className="text-5xl font-bold text-white">Welcome to the Tank!</h3>
              </div>
              <div className="max-w-3xl">
                <p className="text-xl leading-relaxed text-white mb-4">
                  Inspired by the world-renowned series, Shark Tank, the Fish Tank competition invites 3rd-9th grade students in the Chicagoland area to identify a market opportunity and introduce a new business, product, or service.
                </p>
                <p className="text-xl leading-relaxed text-white mb-6">
                  Hosted at Benedictine University on July 23rd & 24th with some of Naperville&apos;s biggest business owners and leaders, participants will take their big innovations to an even bigger stage.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-[#FFBF00] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#CD8F20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white font-medium">July 23-24, 2025</span>
                <span className="text-white opacity-60 mx-2">•</span>
                <div className="w-8 h-8 rounded-full bg-[#FFBF00] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#CD8F20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Benedictine University, Lisle</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              About Fish Tank 2025
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              An enhanced competition experience featuring two days of pitching, mentorship, and celebration of youth entrepreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFBF00] via-[#FFD756] to-[#FFBF00] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-3">Day 1: Preliminary Round</h3>
              <p className="text-gray-700 mb-4">July 23rd, 2025</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>All participants pitch their ideas to preliminary judges</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>2-3 minute pitches followed by Q&A</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>Top 12 finalists selected to advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>Evening mentorship sessions for finalists</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFBF00] via-[#FFD756] to-[#FFBF00] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#000000] mb-3">Day 2: Final Round</h3>
              <p className="text-gray-700 mb-4">July 24th, 2025</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>Top 12 finalists pitch to industry leaders</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>5-minute presentations with demos and Q&A</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>Top 5 winners awarded prizes and funding</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFBF00] mt-2 flex-shrink-0"></div>
                  <span>Awards ceremony and celebration</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Prize Structure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFBF00] rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Prize Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">🥇</div>
                <div className="text-2xl font-bold mb-1">$250</div>
                <div className="text-sm text-amber-100">First Place</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">🥈</div>
                <div className="text-2xl font-bold mb-1">$200</div>
                <div className="text-sm text-amber-100">Second Place</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">🥉</div>
                <div className="text-2xl font-bold mb-1">$150</div>
                <div className="text-sm text-amber-100">Third Place</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">🏆</div>
                <div className="text-2xl font-bold mb-1">$100</div>
                <div className="text-sm text-amber-100">Fourth Place</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">⭐</div>
                <div className="text-2xl font-bold mb-1">$50</div>
                <div className="text-sm text-amber-100">Fifth Place</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              Fish Tank 2025 Highlights
            </h2>
            <p className="text-xl text-gray-700">
              Moments from this year&apos;s competition
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fishTankPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => openLightbox(idx)}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              >
                <Image src={photo} alt={`Fish Tank Photo ${idx + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Winners Section */}
      <section className="py-20 bg-[#0b1120] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-5">Fish Tank Competition Winners</h2>
            <p className="text-lg text-white/80 max-w-4xl mx-auto">
              Celebrating the ventures that impressed our judges with bold ideas, polished execution, and impact ready to scale.
            </p>
          </div>

          {firstWinner && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/8 border border-white/15 rounded-3xl shadow-2xl backdrop-blur-md overflow-hidden flex flex-col lg:flex-row"
            >
              <div className="relative lg:w-[48%] h-[320px] lg:h-[420px]">
                <Image
                  src={firstWinner.image}
                  alt={`${firstWinner.project} team`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-10 lg:p-14 flex flex-col gap-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs tracking-[0.4em] uppercase text-[#FFBF00] font-semibold w-fit">
                  {firstWinner.placement}
                </div>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">{firstWinner.project}</h3>
                  <p className="text-white/70 text-base lg:text-lg mt-2">{firstWinner.team}</p>
                </div>
                <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                  {firstWinner.description}
                </p>
              </div>
            </motion.div>
          )}

          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-white mb-8">Runner-Ups</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
              {runnerUps.map((winner, idx) => (
                <motion.div
                  key={winner.project}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group bg-white/7 border border-white/12 rounded-[28px] shadow-xl backdrop-blur-lg overflow-hidden flex flex-col hover:border-[#FFBF00]/50 hover:shadow-[#FFBF00]/20 transition-all duration-300"
                >
                  <div className={`relative h-56 ${winner.placement === '5th Place' ? 'overflow-hidden' : ''}`}>
                    <Image
                      src={winner.image}
                      alt={`${winner.project} team`}
                      fill
                      className={`object-cover ${winner.placement === '5th Place' ? 'object-top lg:object-[center_9%]' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/40"></div>
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFBF00]/95 text-[#0b1120] text-[11px] font-semibold tracking-[0.3em] uppercase shadow-lg">
                      {winner.placement}
                    </div>
                  </div>
                  <div className="p-7 flex flex-col gap-3 flex-1">
                    <div>
                      <h4 className="text-2xl font-semibold text-white leading-snug group-hover:text-[#FFBF00] transition-colors duration-300">
                        {winner.project}
                      </h4>
                      <p className="text-white/65 text-sm mt-1">{winner.team}</p>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed flex-1">
                      {winner.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Judges Section (TBA) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              Finals Judges
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Industry leaders who evaluated our top 12 finalists and selected the 2025 champions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 auto-rows-fr">
            {finalsJudges.map((judge, idx) => (
              <motion.div
                key={judge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-amber-100/60 overflow-hidden flex flex-col h-full min-h-[420px]"
              >
                {renderJudgePhoto(
                  judge.image,
                  judge.name,
                  "linear-gradient(135deg,#FFBF00,#FFD861)",
                  "Finals Judge",
                  "#FFBF00",
                  judge.objectPosition
                )}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#111827]">{judge.name}</h3>
                    <p className="text-sm font-medium text-[#FFBF00]">{judge.title}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {judge.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              Preliminary Judges
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Emerging leaders and alumni who guided every team through the opening round of pitches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 auto-rows-fr">
            {prelimTop.map((judge, idx) => (
              <motion.div
                key={judge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-[#FFBF00]/30 overflow-hidden flex flex-col h-full min-h-[420px]"
              >
                {renderJudgePhoto(
                  judge.image,
                  judge.name,
                  "linear-gradient(135deg,#FFBF00,#FFD861)",
                  "Prelim Judge",
                  "#FFBF00"
                )}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#111827]">{judge.name}</h3>
                    <p className="text-sm font-medium text-[#FFBF00]">{judge.title}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {judge.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-3xl mx-auto auto-rows-fr">
            {prelimBottom.map((judge, idx) => (
              <motion.div
                key={judge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-[#FFBF00]/30 overflow-hidden flex flex-col h-full min-h-[420px]"
              >
                {renderJudgePhoto(
                  judge.image,
                  judge.name,
                  "linear-gradient(135deg,#FFBF00,#FFD861)",
                  "Prelim Judge",
                  "#FFBF00"
                )}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#111827]">{judge.name}</h3>
                    <p className="text-sm font-medium text-[#FFBF00]">{judge.title}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {judge.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#CD8F20] via-[#E69F16] to-[#FFBF00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Compete in 2025?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Registration for Fish Tank 2025 opens in Spring 2025. Join our mailing list to be the first to know!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/years/2025" className="px-8 py-4 bg-white text-[#CD8F20] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                View Full 2025 Season
              </Link>
              <Link href="/camps-2025" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-xl hover:bg-white/30 transition-all">
                2025 Summer Camps
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={fishTankPhotos[currentImageIndex]} 
              alt={`Fish Tank Photo ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
            {currentImageIndex + 1} / {fishTankPhotos.length}
          </div>
        </div>
      )}
    </div>
  );
}

