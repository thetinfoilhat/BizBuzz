"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 2025 Session data
const sessions = [
  {
    id: "session1",
    title: "Networking & Ideation",
    date: "June 6th, 2025",
    location: "Benedictine University, Lisle",
    description: "In Session 1, kidpreneurs at our 2025 Summer Entrepreneurship Camp broke the ice with new friends and high school instructors through a high-stakes Networking Bingo game. They then learned to identify and brainstorm real-world problems in an interactive \"Bug-Me List\" and ideation session. The day concluded with a Mini Fish Tank challenge, where students pitched creative product mashups for Jolly Ranchers and $135 in Andy's Ice Cream treat cards.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session1/session1a.jpg",
      "/camp_imgs/2025/session1/session1b.jpg",
      "/camp_imgs/2025/session1/session1c.jpg",
      "/camp_imgs/2025/session1/session1d.jpg",
      "/camp_imgs/2025/session1/session1e.jpg",
    ],
    color: "#FFE699"
  },
  {
    id: "session2",
    title: "Lean Canvas & Value Proposition",
    date: "June 13th, 2025",
    location: "Benedictine University, Lisle",
    description: "In Session 2, kidpreneurs kicked things off with our Inventor Fusion game, combining random objects to invent new products and test their teamwork. They then completed a Lean Canvas Model to refine their business ideas from the previous session. Building on these ideas, they competed in our Pokémon Card Investor Report challenge, where students pitched 30-second summaries of their ideas, advanced through group voting rounds, and competed for Chicago Wolves and White Sox game tickets.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session2/session2a.jpg",
      "/camp_imgs/2025/session2/session2b.jpg",
      "/camp_imgs/2025/session2/session2c.jpg",
      "/camp_imgs/2025/session2/session2d.jpg",
      "/camp_imgs/2025/session2/session2e.jpg",
    ],
    color: "#FFDB4D"
  },
  {
    id: "session3",
    title: "Marketing & Branding",
    date: "June 20th, 2025",
    location: "Benedictine University, Lisle",
    description: "In Session 3, students learned how to market their business ideas by designing logos, slogans, product sketches, and fliers that built a cohesive brand. After an icebreaker where they pitched creative uses for random objects, each room worked on Canva to build a group logo and flier, deciding on colors, fonts, and layouts together. Students then created their own marketing portfolios and competed in a full-class flier design bracket, with top teams winning Illinois State University football and basketball game tickets.",
    speaker: {
      name: "Kandice Henning",
      role: "CEO of the Alive Center",
      topic: "Brand Like a Boss",
      bio: "Sharing how strategic marketing grew the ALIVE Center into three Naperville locations and counting, she showed students that powerful branding goes beyond visuals, using storytelling to build genuine connection.",
      image: "/camp_imgs/speakers/kandice.jpg"
    },
    speaker2: null,
    images: [
      "/camp_imgs/2025/session3/session3a.jpg",
      "/camp_imgs/2025/session3/session3b.jpg",
      "/camp_imgs/2025/session3/session3c.jpg",
      "/camp_imgs/2025/session3/session3d.jpg",
      "/camp_imgs/2025/session3/session3e.jpg",
    ],
    color: "#FFBF00"
  },
  {
    id: "session4",
    title: "Prototyping & Product Creation",
    date: "June 27th, 2025",
    location: "Benedictine University, Lisle",
    description: "In Session 4, students brought their Fish Tank ideas to life through hands-on creation. After the \"Personal Brand Soul Train\" icebreaker, they split into three creative tracks—Tinkercad for 3D modeling, Google Sites for website design, and detailed sketching—to build prototypes, online product pages, and prototype blueprints with high school specialists.",
    speaker: {
      name: "Lindsey Fleischhauer",
      role: "Co-Founder at Totes Babies",
      topic: "Totes Babies, Totally Brilliant",
      bio: "Walking students through the journey of refining her car seat carrier for parents on the go, she shared how Totes Babies grew from a rough prototype to a Shark Tank success story, eventually pitching it in Las Vegas and securing a deal on Season 12, Episode 17.",
      image: "/camp_imgs/speakers/lindsey.jpg"
    },
    speaker2: null,
    images: [
      "/camp_imgs/2025/session4/session4a.jpg",
      "/camp_imgs/2025/session4/session4b.jpg",
      "/camp_imgs/2025/session4/session4c.jpg",
      "/camp_imgs/2025/session4/session4d.jpg",
      "/camp_imgs/2025/session4/session4e.jpg",
    ],
    color: "#E69F16"
  },
  {
    id: "session5",
    title: "Finance & Budgeting",
    date: "July 11th, 2025",
    location: "Benedictine University, Lisle",
    description: "In Session 5, students got \"hired\" by Invisibelle, a startup selling invisible products, pitching their wildest talents to instructors in a hilarious Founder's Got Talent challenge. They then learned how to think like entrepreneurs by budgeting a $3,500 dream vacation, making surprise spending choices and pitching their trips to classmates. The top planners walked away with Kane County Cougar and Chicago Fire game tickets, while everyone else scored sweet Jolly Ranchers for a job well done.",
    speaker: {
      name: "Mary Gibson",
      role: "Naperville Park District President",
      topic: "Campaigning Your Company",
      bio: "As the city's Park District President, she connected big data, emotion, and politics, showing students how running a campaign is just like marketing a business—where authentic, consistent storytelling turns voters and customers into true supporters!",
      image: "/camp_imgs/speakers/mary.jpg"
    },
    speaker2: null,
    images: [
      "/camp_imgs/2025/session5/session5a.jpg",
      "/camp_imgs/2025/session5/session5b.jpg",
      "/camp_imgs/2025/session5/session5c.jpg",
      "/camp_imgs/2025/session5/session5d.jpg",
      "/camp_imgs/2025/session5/session5e.jpg",
    ],
    color: "#CD8F20"
  },
  {
    id: "session6",
    title: "Business Planning & Leadership",
    date: "July 18th, 2025",
    location: "Benedictine University, Lisle",
    description: "In Session 6, students finalized their Fish Tank ideas, outlining full business plans from problem to profit. After hearing advice from Mayor Scott Wehrli and City Finance Director Raymond Munch, they spent the afternoon polishing slides, scripts, and prototypes—and celebrating their progress with prizes like Keller's Farmstead passes, a DuPage Children's Museum family pass, a DuPage Forest Preserve gift card, and a Gourmet Gift Baskets gift card.",
    speaker: {
      name: "Scott Wehrli",
      role: "Mayor of Naperville",
      topic: "Leading the Local Way",
      bio: "Sharing stories from his journey in public service and business, he inspired students to see leadership as service to their community. He encouraged them to stay curious, take initiative, and use entrepreneurship to make a lasting local impact.",
      image: "/camp_imgs/speakers/scott.jpg"
    },
    speaker2: {
      name: "Raymond Munch",
      role: "City Director of Finance",
      topic: "Finance Fuels Innovation",
      bio: "He showed students how budgeting, planning, and smart financial strategy power both cities and startups alike. He connected real-world finance to their Fish Tank projects, emphasizing how numbers can tell the story behind every great idea.",
      image: "/camp_imgs/speakers/raymond.jpg"
    },
    images: [
      "/camp_imgs/2025/session6/session6a.jpg",
      "/camp_imgs/2025/session6/session6b.jpg",
      "/camp_imgs/2025/session6/session6c.jpg",
      "/camp_imgs/2025/session6/session6d.jpg",
      "/camp_imgs/2025/session6/session6e.jpg",
    ],
    color: "#BD7825"
  },
  {
    id: "session7",
    title: "Pitch Rehearsal & Preparation",
    date: "July 25th, 2025",
    location: "Benedictine University, Lisle",
    description: "Biz, Buzz, Build! Students spent the day fully immersed in their Fish Tank projects, perfecting business plans, building prototypes, and running mock pitches with instructors. The session focused entirely on preparation, teamwork, and refining every detail to get ready for the big day.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session7/session7a.jpg",
      "/camp_imgs/2025/session7/session7b.jpg",
      "/camp_imgs/2025/session7/session7c.jpg",
      "/camp_imgs/2025/session7/session7d.jpg",
      "/camp_imgs/2025/session7/session7e.jpg",
    ],
    color: "#A67C52"
  },
];

// Image grid component - Same as 2024 but with gold theme
const ImageGrid = ({ images, title }: { images: string[], title: string }) => {
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

// Speaker Card Component - Same as 2024 but with gold theme
const SpeakerCard = ({ 
  speaker, 
  color, 
  title 
}: { 
  speaker: { name: string; role: string; topic: string; bio: string; image: string; };
  color: string;
  title: string;
}) => {
  const getQuoteStyles = () => {
    const colorMapping: Record<string, { bg: string; text: string }> = {
      "#FFE699": { bg: "#FFE699", text: "#8B6914" },
      "#FFDB4D": { bg: "#FFDB4D", text: "#8B6914" },
      "#FFBF00": { bg: "#FFBF00", text: "white" },
      "#E69F16": { bg: "#E69F16", text: "white" },
      "#CD8F20": { bg: "#CD8F20", text: "white" },
      "#BD7825": { bg: "#BD7825", text: "white" },
      "#A67C52": { bg: "#A67C52", text: "white" }
    };

    return colorMapping[color] || { 
      bg: color,
      text: "white"
    };
  };

  const quoteStyles = getQuoteStyles();

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-[#FFE699]/30 flex flex-col w-full relative h-full">
      <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10" 
        style={{ backgroundImage: `linear-gradient(to right, ${color}20, #FFBF0010)` }} 
      />
      
      <div className="text-center py-3 relative z-10" style={{ backgroundColor: `${color}20` }}>
        <h4 className="font-bold text-[#8B6914] text-lg">{title}</h4>
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
          
          <h5 className="text-xl font-semibold text-[#8B6914] mb-2">{speaker.name}</h5>
          <p className="text-[#A67C52] text-sm mb-4">{speaker.role}</p>
          
          <div 
            className="inline-block px-4 py-2 rounded-full text-sm mb-4"
            style={{ 
              backgroundColor: quoteStyles.bg,
              color: quoteStyles.text
            }}
          >
            &ldquo;{speaker.topic}&rdquo;
          </div>
          
          <p className="text-[#A67C52] italic text-sm">
            {speaker.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

type SessionType = (typeof sessions)[number];
type SpeakerType = NonNullable<SessionType["speaker"]>;

// Session card component - dynamic layout for speakers/images
const SessionCard = ({ session, index }: { session: SessionType, index: number }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const primarySpeaker = session.speaker;
  const secondarySpeaker = session.speaker2;
  const rawLayoutType = secondarySpeaker ? "dual" : primarySpeaker ? "single" : "none";
  const layoutOverride = ["session1", "session2", "session7"].includes(session.id) ? "wide" : undefined;
  const layoutType = layoutOverride ?? rawLayoutType;
  const extraImages = session.images.slice(5);
  const imageWrapperHeight = layoutType === "none" ? "relative h-[380px]" : "relative h-[320px]";
  const descriptionClasses = layoutType === "none"
    ? "text-[#A67C52] mb-8 text-xl leading-relaxed"
    : "text-[#A67C52] mb-10 text-lg leading-relaxed";

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
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-3">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mr-5 text-white font-bold text-xl shadow-lg relative overflow-hidden"
          style={{ backgroundColor: session.color }}
        >
          <span className="relative z-10">{index + 1}</span>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#8B6914]">{session.title}</h3>
          <div className="flex flex-wrap gap-5 text-base text-[#A67C52] mt-2">
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
      <div className="rounded-2xl overflow-hidden bg-white shadow-lg border border-[#FFE699]/30">
        <div className="p-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
            {/* Left Speaker for dual layout */}
            {layoutType === "dual" && primarySpeaker && (
              <motion.div variants={fadeIn} className="order-2 xl:order-1 xl:col-span-3 flex flex-col gap-6">
                <SpeakerCard 
                  speaker={primarySpeaker as SpeakerType} 
                  color={session.color} 
                  title="FEATURED SPEAKER" 
                />
              </motion.div>
            )}

            {/* Description + Images */}
            <motion.div
              variants={fadeIn}
              className={
                layoutType === "dual"
                  ? "order-1 xl:order-2 xl:col-span-6"
                  : layoutType === "single"
                    ? "order-1 xl:col-span-8"
                    : layoutType === "wide"
                      ? "order-1 xl:col-span-12"
                      : "order-1 xl:col-span-12"
              }
            >
              <p className={layoutType === "wide" ? "text-[#A67C52] mb-10 text-xl leading-relaxed" : descriptionClasses}>
                {session.description}
              </p>
            
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r rounded-3xl blur-xl opacity-40" 
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${session.color}10, #FFBF0010)` 
                  }} 
                />
                <div className={
                  layoutType === "wide"
                    ? "relative"
                    : imageWrapperHeight
                }>
                  {layoutType === "wide" ? (
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 auto-rows-[200px] sm:auto-rows-[240px]">
                      {session.images.slice(0, 5).map((img, idx) => (
                        <motion.div
                          key={img}
                          variants={fadeIn}
                          className={`relative rounded-xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02] ${
                            idx === 0 ? "sm:col-span-2 lg:col-span-3 lg:row-span-2" : ""
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${session.title} photo ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <ImageGrid images={session.images.slice(0, 5)} title={session.title} />
                  )}
                </div>
              </div>
            
              {extraImages.length > 0 && (
                <div
                  className={`grid gap-4 mt-6 ${
                    layoutType === "wide"
                      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                      : extraImages.length === 1
                        ? "grid-cols-1 sm:grid-cols-2"
                        : extraImages.length === 2
                          ? "grid-cols-1 sm:grid-cols-2"
                          : "grid-cols-2 sm:grid-cols-3"
                  }`}
                >
                  {extraImages.map((img, extraIdx) => (
                    <motion.div
                      key={img}
                      variants={fadeIn}
                      className="relative h-[240px] rounded-xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src={img}
                        alt={`${session.title} additional photo ${extraIdx + 6}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          
            {/* Single speaker layout */}
            {layoutType === "single" && primarySpeaker && (
              <motion.div variants={fadeIn} className="order-2 xl:col-span-4 flex flex-col gap-6">
                <SpeakerCard 
                  speaker={primarySpeaker as SpeakerType} 
                  color={session.color} 
                  title="FEATURED SPEAKER" 
                />
              </motion.div>
            )}

            {/* Right speaker for dual layout */}
            {layoutType === "dual" && secondarySpeaker && (
              <motion.div variants={fadeIn} className="order-3 xl:col-span-3 flex flex-col gap-6">
                <SpeakerCard 
                  speaker={secondarySpeaker as SpeakerType} 
                  color={session.color} 
                  title="GUEST SPEAKER" 
                />
              </motion.div>
            )}

            {/* No-speaker layout helper */}
            {layoutType === "none" && (
              <motion.div variants={fadeIn} className="order-2 xl:col-span-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-[#A67C52] font-medium bg-[#FFF4D4] border border-[#FFE699]/40 rounded-2xl p-6">
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-[#8B6914]">Hands-On Studio</h4>
                    <p className="text-sm leading-relaxed">Dedicated build time with high school mentors to polish Fish Tank pitches, prototypes, and marketing decks.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-[#8B6914]">Mentor Office Hours</h4>
                    <p className="text-sm leading-relaxed">Rotating stations with alumni coaches for financial modeling, storytelling, and stage presence.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-[#8B6914]">Showcase Prep</h4>
                    <p className="text-sm leading-relaxed">Dry runs with timed feedback so every team is performance-ready by the end of the day.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Camps2025Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF9E6]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E69F16] via-[#FFBF00] to-[#FFD700]"></div>
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-16 w-[420px] h-[420px] rounded-full bg-[#FFE699]/30 blur-3xl"></div>
          <div className="absolute top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#E69F16]/35 blur-[140px]"></div>
          <div className="absolute bottom-[-220px] left-1/2 -translate-x-1/2 w-[780px] h-[780px] rounded-full bg-[#FFBF00]/25 blur-[180px]"></div>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
              backgroundSize: "28px 28px"
            }}
          ></div>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent via-[#FFF5E6]/40 to-[#FFF9E6]"></div>
          <svg className="absolute bottom-[-24px] w-full text-[#FFF9E6]" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,48L48,54.7C96,61,192,75,288,74.7C384,75,480,59,576,48C672,37,768,32,864,37.3C960,43,1056,59,1152,64C1248,69,1344,64,1392,61.3L1440,59L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-sm font-semibold mb-8 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                Summer 2025
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                <span className="block text-white">BizBuzz</span>
                <span className="block text-white">Entrepreneurship</span>
                <span className="block text-white">Camp</span>
              </h1>

              <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
                Seven sessions of hands-on innovation where young founders ideate, build, and pitch market-ready ventures alongside Shark Tank alumni, civic leaders, and finance experts.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-md text-white/90">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  June 6 - July 25, 2025
                </div>
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-md text-white/90">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 5.343 8 8 0 0117.657 16.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Benedictine University, Lisle
                </div>
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-md text-white/90">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.382 2.457a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.382-2.457a1 1 0 00-1.176 0l-3.382 2.457c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.957 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                  Hands-on challenges & prize competitions
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/fish-tank-2025"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[#8B6914] font-bold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                >
                  View 2025 Fish Tank
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/camps"
                  className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold hover:bg-white/15 transition-all"
                >
                  View 2024 Camp
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-white/20 blur-3xl opacity-40"></div>
              <div className="relative bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl p-10 shadow-2xl overflow-hidden">
                <div className="absolute -top-16 -right-8 w-48 h-48 rounded-full bg-white/20 blur-2xl"></div>
                <div className="absolute top-10 right-10 text-white/40">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.873v4.254a1 1 0 001.555.832l3.197-2.122a1 1 0 000-1.669z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <div className="mb-8">
                  <span className="text-sm uppercase tracking-[0.3em] text-white/70 font-semibold">Camp Snapshot</span>
                  <h2 className="mt-3 text-3xl font-bold text-white">Our boldest summer yet</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "7", label: "Sessions" },
                    { value: "120+", label: "Students" },
                    { value: "5", label: "Guest Speakers" },
                    { value: "$5K+", label: "Funding & Prizes" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white/15 border border-white/20 px-5 py-6 flex flex-col justify-center text-white shadow-inner"
                    >
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-xs uppercase tracking-wide text-white/70 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-5 rounded-2xl bg-white/10 border border-white/20 text-white/90">
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20">✦</span>
                    Weekly showcases with mentor feedback and prize challenges
                  </div>
                  <p className="text-sm text-white/75 mt-3 leading-relaxed">
                    From branding labs with Kandice Henning to finance intensives with Mayor Scott Wehrli and Raymond Munch, every session builds toward Fish Tank success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#8B6914] mb-6">
            Camp Sessions
          </h2>
          <p className="text-xl text-[#A67C52] max-w-3xl mx-auto">
            Seven intensive weeks of entrepreneurship education, hands-on activities, and mentorship from industry leaders.
          </p>
        </div>

        {sessions.map((session, index) => (
          <SessionCard key={session.id} session={session} index={index} />
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#CD8F20] via-[#E69F16] to-[#FFBF00] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready for 2025?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Applications open Spring 2025. Join our mailing list to be the first to know.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/fish-tank-2025" 
              className="px-10 py-4 bg-white text-[#CD8F20] font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg"
            >
              2025 Fish Tank →
            </Link>
            <Link 
              href="/about" 
              className="px-10 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white font-bold rounded-full hover:bg-white/30 transition-all text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
