"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Session data
const sessions = [
  {
    id: "session1",
    title: "Ideation & Innovation",
    date: "June 12th, 2024",
    location: "95th Street Library, Naperville",
    description: "In Session 1, students kicked off our free 2024 Summer Entrepreneurship Camp by exploring the basics of business-minded thinking, learning how to identify and solve real-world problems. After being introduced to concepts like value creation and market fit with 10 instructors, students dove into our Mini Fish Tank activity with $200+ in prizes.",
    speaker: {
      name: "Kandice Henning",
      role: "CEO of the Alive Center",
      topic: "How to Become a Fearless Entrepreneur",
      bio: "Sharing her journey of creating one of Naperville's largest nonprofit organizations, she inspired students to embrace risk, pursue their passions, and lead through social innovation.",
      image: "/camp_imgs/speakers/kandice_henning.png"
    },
    images: [
      "/camp_imgs/cards/session1/1.png",
      "/camp_imgs/cards/session1/2.png",
      "/camp_imgs/cards/session1/3.png",
      "/camp_imgs/cards/session1/4.png",
      "/camp_imgs/cards/session1/5.png",
    ],
    color: "#B8e2f4"
  },
  {
    id: "session2",
    title: "Unique Value Proposition & Networking",
    date: "June 19th, 2024",
    location: "95th Street Library, Naperville",
    description: "In Session 2, students learned how to craft a unique value proposition for their businesses and practiced their networking skills with 9 instructors. They put their skills to the test in a coffee shop simulation contest, responding to situations & prompts (and some surprises too!) to maximize profits and win $100 in awards.",
    speaker: {
      name: "Isha Elandassery",
      role: "Founder of Naperville Rising Women in Business",
      topic: "Finding Your Competitive Advantage",
      bio: "Inspired by an activity she did at Indiana University, she taught students to discover their identity through a self-portrait exercise and apply their newfound skills to networking.",
      image: "/camp_imgs/speakers/isha_elandassery.jpg"
    },
    images: [
      "/camp_imgs/cards/session2/1.png",
      "/camp_imgs/cards/session2/2.jpg",
      "/camp_imgs/cards/session2/3.jpg",
      "/camp_imgs/cards/session2/4.png",
      "/camp_imgs/cards/session2/5.jpg",
    ],
    color: "#8dcfec"
  },
  {
    id: "session3",
    title: "Marketing",
    date: "June 26th, 2024",
    location: "95th Street Library, Naperville",
    description: "In Session 3, students explored marketing, branding, and advertising through activities like the 'Guess the Brand' game and a flyer design challenge with $140 in prizes. With the Fish Tank competition just weeks away, students refined their business identities with 11 instructors and prepared to share them with the world.",
    speaker: {
      name: "Mary Gibson",
      role: "Naperville Park District President",
      topic: "Pitch, Polish, Promote: Branding Lessons from the Ballot",
      bio: "After building a personal brand during her Park District election campaign, she taught students how to apply those strategies to their own businesses and innovations.",
      image: "/camp_imgs/speakers/mary_gibson.jpg"
    },
    images: [
      "/camp_imgs/cards/session3/1.jpg",
      "/camp_imgs/cards/session3/2.jpg",
      "/camp_imgs/cards/session3/3.jpg",
      "/camp_imgs/cards/session3/4.jpg",
      "/camp_imgs/cards/session3/5.jpg",
    ],
    color: "#38b6ff"
  },
  {
    id: "session4",
    title: "Public Speaking",
    date: "July 3rd, 2024",
    location: "95th Street Library, Naperville",
    description: "In Session 4, students explored the art of sales and pitching. Guided by 14 instructors, they practiced their public speaking skills and competed in an interactive, hands-on pitch contest with over $170 in prizes. With this new knowledge, students began developing their presentations and pitches in preparation for Fish Tank.",
    speaker: {
      name: "Athena Chen",
      role: "Founder of the Naperville Children's Business Fair",
      topic: "Confident Kidpreneurs: Believe, Build, and Be Bold",
      bio: "As someone who ran an Etsy shop with over $11K in revenue and helped hundreds of local students pitch their own businesses, she spoke to students about taking risks despite doubt and embracing the confidence of a kidpreneur who knows they can do it all.",
      image: "/camp_imgs/speakers/athena_chen.png"
    },
    images: [
      "/camp_imgs/cards/session4/1.jpg",
      "/camp_imgs/cards/session4/2.jpg",
      "/camp_imgs/cards/session4/3.png",
      "/camp_imgs/cards/session4/4.jpg",
      "/camp_imgs/cards/session4/5.jpg",
    ],
    color: "#235284"
  },
  {
    id: "session5",
    title: "Finance",
    date: "July 10th, 2024",
    location: "Nichols Library, Naperville",
    description: "In Session 5, students learned the basics of personal and business finance from 16 instructors. They then put their skills to the test in a dream vacation budgeting game, planning their ideal trip and pitching it for a chance to win over $330 in prizes. Students also continued refining their Fish Tank pitches, now incorporating key financial details into their business plans.",
    speaker: {
      name: "Scott Wehrli",
      role: "Mayor of Naperville",
      topic: "From Ideas to Impact: How Innovation Builds Better Communities",
      bio: "Mayor Wehrli shared how local entrepreneurs are innovating to solve real community problems in Naperville and beyond, encouraging students to use business as a tool for civic impact and leadership development.",
      image: "/camp_imgs/speakers/scott_wehrli.png"
    },
    images: [
      "/camp_imgs/cards/session5/1.jpg",
      "/camp_imgs/cards/session5/2.jpg",
      "/camp_imgs/cards/session5/3.jpg",
      "/camp_imgs/cards/session5/4.jpg",
      "/camp_imgs/cards/session5/5.jpg",
      "/camp_imgs/cards/session5/6.jpg",
      "/camp_imgs/cards/session5/7.jpg",
    ],
    color: "#003166"
  },
  {
    id: "session6",
    title: "Pitching",
    date: "July 17th, 2024",
    location: "95th Street Library, Naperville",
    description: "In Session 6, the final session before Fish Tank, students participated in a business building workshop to finalize their pitch decks and practice rehearsing their scripts. Joining them for a special surprise were our preliminary judges—Athena Chen, Soohyun Cho, Isabel Yu, Nathan Mendoza, and Olivia Fisz—who offered exciting feedback.",
    speaker: {
      name: "Sean Riley",
      role: "CEO of Dude Wipes",
      topic: "Dude, Start Now: Why Entrepreneurship Can't Wait",
      bio: "Sean spoke about the power of starting early in entrepreneurship and embracing the journey. He reminded students that by taking the leap now, they are already on the right path in one of the world's most fun and rewarding career choices.",
      image: "/camp_imgs/speakers/sean_riley.png"
    },
    images: [
      "/camp_imgs/cards/session6/1.jpg",
      "/camp_imgs/cards/session6/2.png",
      "/camp_imgs/cards/session6/3.png",
      "/camp_imgs/cards/session6/4.png",
      "/camp_imgs/cards/session6/5.png",
    ],
    color: "#040037"
  }
];

// Image grid component - Slightly enhanced
const ImageGrid = ({ images, title }: { images: string[], title: string }) => {
  // Make sure we have 5 images by duplicating if necessary
  const allImages = [...images];
  while (allImages.length < 5) {
    allImages.push(images[allImages.length % images.length]);
  }
  
  return (
    <div className="grid grid-cols-6 gap-3 h-full">
      {/* Main large image */}
      <div className="col-span-3 row-span-2 relative rounded-xl overflow-hidden h-[320px] shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
        <Image
          src={allImages[0]}
          alt={`${title} main image`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Small images grid */}
      <div className="col-span-3 grid grid-rows-2 gap-3 h-[320px]">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-xl overflow-hidden h-[156px] shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
            <Image
              src={allImages[1]}
              alt={`${title} secondary image`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-[156px] shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
            <Image
              src={allImages[2]}
              alt={`${title} tertiary image`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-xl overflow-hidden h-[156px] shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
            <Image
              src={allImages[3]}
              alt={`${title} fourth image`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-[156px] shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
            <Image
              src={allImages[4]}
              alt={`${title} fifth image`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Session card component - Completely redesigned with blue theming
const SessionCard = ({ session, index }: { session: typeof sessions[0], index: number }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Different color treatment based on session number for variation
  const headerColorClass = index % 2 === 0 
    ? 'from-[#38b6ff]/10 to-white' 
    : 'from-[#8dcfec]/10 to-white';

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
      className="mb-24 overflow-hidden"
    >
      {/* Session Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-6">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mr-5 text-white font-bold text-xl shadow-lg relative overflow-hidden"
          style={{ backgroundColor: session.color }}
        >
          <span className="relative z-10">{index + 1}</span>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#040037]">{session.title}</h3>
          <div className="flex flex-wrap gap-5 text-base text-[#235284] mt-2">
            <span className="flex items-center">
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
      
      {/* Session Main Content Card */}
      <div className="rounded-2xl overflow-hidden bg-white shadow-lg border border-[#B8e2f4]/30">
        <div className={`py-6 px-8 bg-gradient-to-r ${headerColorClass}`}>
      </div>
      
      {/* Session Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column - Description and Images */}
          <motion.div variants={fadeIn} className="md:col-span-8">
              <p className="text-[#235284] mb-10 text-lg leading-relaxed">
              {session.description}
            </p>
            
            <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r rounded-3xl blur-xl opacity-40" 
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${session.color}10, #38b6ff10)` 
                }} 
              />
              <div className="relative h-[320px]">
                <ImageGrid images={session.images.slice(0, 5)} title={session.title} />
              </div>
            </div>
            
            {/* Additional Images for Session 5 - Only show for session 5 */}
            {session.id === "session5" && (
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="relative h-[320px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/camp_imgs/cards/session5/6.jpg"
                    alt="Additional session image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[320px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/camp_imgs/cards/session5/7.jpg"
                    alt="Additional session image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </motion.div>
          
            {/* Right Column - Speaker Card */}
          <motion.div variants={fadeIn} className="md:col-span-4 flex flex-col gap-6">
            {session.id === "session5" ? (
                // Special case for Session 5 with two speakers
                <>
                  <SpeakerCard 
                    speaker={session.speaker} 
                    color={session.color} 
                    title="FEATURED SPEAKER" 
                  />
                  
                  <SpeakerCard 
                    speaker={{
                      name: "Eddie Yoon",
                      role: "Co-Creator of Category Pirates",
                      topic: "Finance is Freedom",
                      bio: "He challenged students to rethink their relationship with money, describing it as powerful dynamite that must be used wisely. He urged them to create rather than compete, emphasizing that entrepreneurship—not just education—is the path to true freedom.",
                      image: "/camp_imgs/speakers/eddie_yoon.jpg"
                    }} 
                    color={session.color} 
                    title="GUEST SPEAKER" 
                  />
                </>
              ) : (
                <SpeakerCard 
                  speaker={session.speaker} 
                  color={session.color} 
                  title="FEATURED SPEAKER" 
                />
              )}
            </motion.div>
                    </div>
                  </div>
                </div>
    </motion.div>
  );
};

// Speaker Card Component - Extracted for reuse with blue theme
const SpeakerCard = ({ 
  speaker, 
  color, 
  title 
}: { 
  speaker: { name: string; role: string; topic: string; bio: string; image: string; };
  color: string;
  title: string;
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-[#B8e2f4]/30 flex flex-col w-full relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10" 
        style={{ backgroundImage: `linear-gradient(to right, ${color}20, #38b6ff10)` }} 
                />
      
      <div className="text-center py-3 relative z-10" style={{ backgroundColor: `${color}20` }}>
        <h4 className="font-bold text-[#003166] text-lg">{title}</h4>
                </div>
                
      <div className="p-6 flex flex-col items-center text-center flex-grow justify-between relative z-10">
                  <div className="flex flex-col items-center w-full">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 mb-4 mx-auto" 
            style={{ borderColor: color }}>
                      <Image 
              src={speaker.image} 
              alt={speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
          
          <h5 className="text-xl font-semibold text-[#040037] mb-2">{speaker.name}</h5>
          <p className="text-[#235284] text-sm mb-4">{speaker.role}</p>
          
          <div 
            className="inline-block px-4 py-2 rounded-full text-sm mb-4"
            style={{ backgroundColor: `${color}20`, color: color === "#040037" ? "#38b6ff" : color }}
          >
            &ldquo;{speaker.topic}&rdquo;
                    </div>
          
          <p className="text-[#235284] italic text-sm">
            {speaker.bio}
                    </p>
                  </div>
                </div>
              </div>
  );
};

export default function CampPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f7ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#040037] via-[#003166] to-[#235284] overflow-hidden">
        {/* Better positioned gear designs in background */}
        <div className="absolute top-20 right-20 w-96 h-96 opacity-10">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M464 192l-33.5-5.5c-1.4-4.9-2.9-9.6-4.7-14.3l19.8-27.8-32-32-27.8 19.8c-4.7-1.8-9.4-3.3-14.3-4.7L366 96h-44l-5.5 33.5c-4.9 1.4-9.6 2.9-14.3 4.7l-27.8-19.8-32 32 19.8 27.8c-1.8 4.7-3.3 9.4-4.7 14.3L224 192v44l33.5 5.5c1.4 4.9 2.9 9.6 4.7 14.3l-19.8 27.8 32 32 27.8-19.8c4.7 1.8 9.4 3.3 14.3 4.7L322 336h44l5.5-33.5c4.9-1.4 9.6-2.9 14.3-4.7l27.8 19.8 32-32-19.8-27.8c1.8-4.7 3.3-9.4 4.7-14.3L464 236v-44zM288 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
          </svg>
        </div>
        
        <div className="absolute top-40 right-40 w-56 h-56 opacity-8 animate-spin-slow">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M288 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-144 36v44l33.5 5.5c1.4 4.9 2.9 9.6 4.7 14.3l-19.8 27.8 32 32 27.8-19.8c4.7 1.8 9.4 3.3 14.3 4.7L252 432h44l5.5-33.5c4.9-1.4 9.6-2.9 14.3-4.7l27.8 19.8 32-32-19.8-27.8c1.8-4.7 3.3-9.4 4.7-14.3L394 334v-44l-33.5-5.5c-1.4-4.9-2.9-9.6-4.7-14.3l19.8-27.8-32-32-27.8 19.8c-4.7-1.8-9.4-3.3-14.3-4.7L296 192h-44l-5.5 33.5c-4.9 1.4-9.6 2.9-14.3 4.7l-27.8-19.8-32 32 19.8 27.8c-1.8 4.7-3.3 9.4-4.7 14.3L144 292z" />
          </svg>
        </div>
        
        <div className="absolute bottom-40 left-20 w-80 h-80 opacity-12">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9z" />
          </svg>
        </div>
        
        {/* Improved background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#38b6ff]/10 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#38b6ff]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8dcfec]/15 rounded-full blur-3xl"></div>
          
          {/* Enhanced grid pattern overlay with better opacity */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-4"></div>
          
          {/* Improved wave decoration at bottom */}
          <svg className="absolute bottom-0 w-full text-[#f0f7ff]" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="currentColor">
            <path d="M0,42.9L48,53.2C96,64,192,85,288,74.1C384,64,480,21,576,21.3C672,21,768,64,864,74.1C960,85,1056,64,1152,53.3C1248,43,1344,43,1392,42.7L1440,43L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-44 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left content - Enhanced Text */}
            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#38b6ff]/20 border border-[#38b6ff]/30 backdrop-blur-sm mb-10 shadow-sm">
                <div className="w-3 h-3 rounded-full bg-[#38b6ff] mr-2"></div>
                <span className="text-base font-medium text-white">Summer 2024 & 2025</span>
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-bold mb-10 tracking-tight leading-tight">
                <span className="text-white drop-shadow-md">BizBuzz</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8e2f4] via-[#38b6ff] to-[#8dcfec] drop-shadow-sm">
                  Camp
              </span>
              </h1>
              
              <p className="text-2xl text-[#B8e2f4] font-light mb-12 max-w-2xl leading-relaxed">
                Our six-part entrepreneurial journey takes students from idea generation
                to market-ready concepts through hands-on workshops and expert mentorship.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link
                  href="#session1" 
                  className="bg-gradient-to-r from-[#38b6ff] to-[#8dcfec] text-white font-medium py-4 px-8 rounded-lg text-xl transition-all hover:shadow-lg hover:shadow-[#38b6ff]/30 hover:-translate-y-1 active:translate-y-0 inline-flex items-center"
                >
                  Explore Camp
                  <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                
                <Link
                  href="mailto:info@bizbuzznfp.org" 
                  className="text-white bg-[#003166]/30 border border-[#8dcfec]/40 hover:bg-[#003166]/50 font-medium py-4 px-8 rounded-lg text-xl transition-all inline-flex items-center hover:shadow-lg hover:shadow-[#003166]/20"
                >
                  Register Now →
                </Link>
              </div>
              
              {/* Better positioned floating icon beside text */}
              <div className="relative mt-20">
                <div className="absolute -top-8 -left-5 w-32 h-32 opacity-15">
                  <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M352 320c-22.6 0-43.8 6.9-61.2 18.8l-49.3-30.8c5.2-14.4 8.5-29.9 8.5-46 0-16.2-3.3-31.7-8.5-46l49.3-30.8C307.4 197.1 328.4 204 352 204c57.3 0 104-46.7 104-104S409.3-4 352-4s-104 46.7-104 104c0 16.2 3.3 31.7 8.5 46l-49.3 30.8c-5.2 14.4-8.5 29.9-8.5 46 0 57.3 46.7 104 104 104s104-46.7 104-104S409.3 320 352 320zm0-312c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM144 330c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72zm208 114c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* Right content - Enhanced Images */}
            <motion.div
              className="lg:col-span-6 relative pl-28"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative h-[750px] w-full overflow-visible">
                {/* Main center image - Enhanced with better shadows and effects */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.3)] z-30 border-4 border-white"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Image
                    src="/camp_imgs/landing/center.jpg"
                    alt="Student presentation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040037]/30 to-transparent"></div>
                </motion.div>
                
                {/* Floating images with enhanced styling */}
                <motion.div 
                  className="absolute top-0 -left-10 w-[250px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-10 border-4 border-white"
                  initial={{ x: -30, y: -30, rotate: -12 }}
                  animate={{ x: 0, y: 0, rotate: -12 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Image
                    src="/camp_imgs/landing/left.jpg"
                    alt="Students collaborating"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040037]/30 to-transparent"></div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-0 -right-20 w-[250px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white"
                  initial={{ x: 30, y: 30, rotate: 12 }}
                  animate={{ x: 0, y: 0, rotate: 12 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Image
                    src="/camp_imgs/landing/right.jpg"
                    alt="Workshop session"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040037]/30 to-transparent"></div>
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#38b6ff]/20 to-[#8dcfec]/20 blur-2xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-[#B8e2f4]/20 to-[#38b6ff]/20 blur-xl"></div>
                <div className="absolute top-1/2 -left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-[#003166]/15 to-[#38b6ff]/15 blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-[#003166]/10 to-[#38b6ff]/10 blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Stats Section - With Better Icons and Enhanced Design */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#B8e2f4]/30">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#B8e2f4]/30">
            <div className="px-8 py-12 text-center relative">
              <div className="absolute right-6 top-6 opacity-10">
                <svg className="h-12 w-12" viewBox="0 0 512 512" fill="#040037" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.09 14.49 3.09 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.09 14.49 3.09 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#003166] to-[#38b6ff] mb-4">6</div>
              <div className="text-[#003166] font-medium text-lg">Camp Weeks</div>
            </div>
            
            <div className="px-8 py-12 text-center relative">
              <div className="absolute right-6 top-6 opacity-10">
                <svg className="h-12 w-12" viewBox="0 0 640 512" fill="#040037" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#003166] to-[#38b6ff] mb-4">7</div>
              <div className="text-[#003166] font-medium text-lg">Guest Speakers</div>
            </div>
            
            <div className="px-8 py-12 text-center relative">
              <div className="absolute right-6 top-6 opacity-10">
                <svg className="h-12 w-12" viewBox="0 0 448 512" fill="#040037" xmlns="http://www.w3.org/2000/svg">
                  <path d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#003166] to-[#38b6ff] mb-4">105+</div>
              <div className="text-[#003166] font-medium text-lg">Students Taught</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sessions Content - Redesigned with Blue Theme */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#040037] mb-6">2024 Entrepreneurship Camp</h2>
          <p className="text-[#235284] text-xl max-w-3xl mx-auto">
            Each camp session builds upon the previous one, creating a comprehensive entrepreneurial journey that takes 3rd–8th grade students from idea generation to pitching at the Fish Tank contest.
          </p>
        </div>
        
        {/* Session Navigation */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {sessions.map((session, index) => (
              <a
                key={session.id}
                href={`#${session.id}`}
                className="py-1.5 px-3 rounded-full text-center transition-all hover:-translate-y-1 hover:shadow-md flex flex-col items-center justify-center border"
                style={{ 
                  backgroundColor: `${session.color}25`,
                  borderColor: `${session.color}50`,
                  color: session.color === "#040037" || session.color === "#003166" || session.color === "#235284" ? session.color : "#003166" 
                }}
              >
                <span className="font-bold text-sm">Week {index + 1}</span>
                <span className="text-xs">{session.title.split(' ')[0]}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Sessions list */}
        <div>
          {sessions.map((session, index) => (
            <SessionCard key={session.id} session={session} index={index} />
          ))}
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