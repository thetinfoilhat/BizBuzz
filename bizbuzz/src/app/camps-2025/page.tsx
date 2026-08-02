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
    location: "95th Street Library, Naperville",
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
    location: "95th Street Library, Naperville",
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
    location: "95th Street Library, Naperville",
    description: "In Session 3, students learned how to market their business ideas by designing logos, slogans, product sketches, and fliers that built a cohesive brand. After an icebreaker where they pitched creative uses for random objects, each room worked on Canva to build a group logo and flier, deciding on colors, fonts, and layouts together. Students then created their own marketing portfolios and competed in a full-class flier design bracket, with top teams winning Illinois State University football and basketball game tickets.",
    speaker: {
      name: "Kandice Henning",
      role: "CEO of the Alive Center",
      topic: "Brand Like a Boss",
      bio: "Sharing how strategic marketing grew the ALIVE Center into three Naperville locations and counting, she showed students that powerful branding goes beyond visuals, using storytelling to build genuine connection.",
      image: "/camp_imgs/speakers/kandicehenning.jpg",
      objectPosition: "center 2%"
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
    location: "95th Street Library, Naperville",
    description: "In Session 4, students brought their Fish Tank ideas to life through hands-on creation. After the \"Personal Brand Soul Train\" icebreaker, they split into three creative tracks—Tinkercad for 3D modeling, Google Sites for website design, and detailed sketching—to build prototypes, online product pages, and prototype blueprints with high school specialists.",
    speaker: {
      name: "Lindsey Fleischhauer",
      role: "Co-Founder at Totes Babies",
      topic: "Totes Babies, Totally Brilliant",
      bio: "Walking students through the journey of refining her car seat carrier for parents on the go, she shared how Totes Babies grew from a rough prototype to a Shark Tank success story, eventually pitching it in Las Vegas and securing a deal on Season 12, Episode 17.",
      image: "/camp_imgs/speakers/lindseyfleischhauer.jpg",
      objectPosition: "30% center"
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
    location: "95th Street Library, Naperville",
    description: "In Session 5, students got \"hired\" by Invisibelle, a startup selling invisible products, pitching their wildest talents to instructors in a hilarious Founder's Got Talent challenge. They then learned how to think like entrepreneurs by budgeting a $3,500 dream vacation, making surprise spending choices and pitching their trips to classmates. The top planners walked away with Kane County Cougar and Chicago Fire game tickets, while everyone else scored sweet Jolly Ranchers for a job well done.",
    speaker: {
      name: "Mary Gibson",
      role: "Naperville Park District President",
      topic: "Campaigning Your Company",
      bio: "As the city's Park District President, she connected big data, emotion, and politics, showing students how running a campaign is just like marketing a business—where authentic, consistent storytelling turns voters and customers into true supporters!",
      image: "/camp_imgs/speakers/marygibson.jpeg"
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
    location: "95th Street Library, Naperville",
    description: "In Session 6, students finalized their Fish Tank ideas, outlining full business plans from problem to profit. After hearing advice from Mayor Scott Wehrli and City Finance Director Raymond Munch, they spent the afternoon polishing slides, scripts, and prototypes—and celebrating their progress with prizes like Keller's Farmstead passes, a DuPage Children's Museum family pass, a DuPage Forest Preserve gift card, and a Gourmet Gift Baskets gift card.",
    speaker: {
      name: "Scott Wehrli",
      role: "Mayor of Naperville",
      topic: "Leading the Local Way",
      bio: "Sharing stories from his journey in public service and business, he inspired students to see leadership as service to their community. He encouraged them to stay curious, take initiative, and use entrepreneurship to make a lasting local impact.",
      image: "/camp_imgs/speakers/scottwehrli.jpg"
    },
    speaker2: {
      name: "Raymond Munch",
      role: "City Director of Finance",
      topic: "Finance Fuels Innovation",
      bio: "He showed students how budgeting, planning, and smart financial strategy power both cities and startups alike. He connected real-world finance to their Fish Tank projects, emphasizing how numbers can tell the story behind every great idea.",
      image: "/camp_imgs/speakers/raymondmunch.jpg",
      objectPosition: "center 0%"
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
    location: "95th Street Library, Naperville",
    description: "Biz, Buzz, Build! Students spent the day fully immersed in their Fish Tank projects, perfecting business plans, building prototypes, and running mock pitches with instructors. The session focused entirely on preparation, teamwork, and refining every detail to get ready for the big day.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session7/session7a.jpg",
      "/camp_imgs/2025/session7/session7b.jpg",
      "/camp_imgs/2025/session7/session7c.jpg",
      "/camp_imgs/2025/session7/session7d.jpg",
      "/camp_imgs/2025/session7/session7e.JPG",
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
  speaker: { name: string; role: string; topic: string; bio: string; image: string; objectPosition?: string; };
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
              style={{ objectPosition: speaker.objectPosition ?? "center"}}
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
      <div className="relative bg-gradient-to-br from-[#CD8F20] via-[#E69F16] to-[#FFBF00] overflow-hidden">
        <div className="absolute top-24 right-24 w-60 h-60 opacity-15">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M464 192l-33.5-5.5c-1.4-4.9-2.9-9.6-4.7-14.3l19.8-27.8-32-32-27.8 19.8c-4.7-1.8-9.4-3.3-14.3-4.7L366 96h-44l-5.5 33.5c-4.9 1.4-9.6 2.9-14.3 4.7l-27.8-19.8-32 32 19.8 27.8c-1.8 4.7-3.3 9.4-4.7 14.3L224 192v44l33.5 5.5c1.4 4.9 2.9 9.6 4.7 14.3l-19.8 27.8 32 32 27.8-19.8c4.7 1.8 9.4 3.3 14.3 4.7L322 336h44l5.5-33.5c4.9-1.4 9.6-2.9 14.3-4.7l27.8 19.8 32-32-19.8-27.8c1.8-4.7 3.3-9.4 4.7-14.3L464 236v-44zM288 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
          </svg>
        </div>
        <div className="absolute top-48 right-48 w-40 h-40 opacity-10 animate-spin-slow">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M288 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-144 36v44l33.5 5.5c1.4 4.9 2.9 9.6 4.7 14.3l-19.8 27.8 32 32 27.8-19.8c4.7 1.8 9.4 3.3 14.3 4.7L252 432h44l5.5-33.5c4.9-1.4 9.6-2.9 14.3-4.7l27.8 19.8 32-32-19.8-27.8c1.8-4.7 3.3-9.4 4.7-14.3L394 334v-44l-33.5-5.5c-1.4-4.9-2.9-9.6-4.7-14.3l19.8-27.8-32-32-27.8 19.8c-4.7-1.8-9.4-3.3-14.3-4.7L296 192h-44l-5.5 33.5c-4.9 1.4-9.6 2.9-14.3 4.7l-27.8-19.8-32 32 19.8 27.8c-1.8 4.7-3.3 9.4-4.7 14.3L144 292z" />
          </svg>
        </div>
        <div className="absolute bottom-48 left-24 w-48 h-48 opacity-10">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9z" />
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#FFD700]/20 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FFBF00]/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.05]"></div>
          <svg className="absolute bottom-0 w-full text-[#FFF9E6]" preserveAspectRatio="none" viewBox="0 0 1440 60" fill="currentColor">
            <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,27,576,21.3C672,16,768,21,864,26.7C960,32,1056,37,1152,37.3C1248,37,1344,32,1392,29.3L1440,27L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/30 border border-white/40 backdrop-blur-sm mb-10 shadow-sm">
                <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                <span className="text-base font-medium text-white">Summer 2025</span>
              </div>

              <h1 className="text-7xl lg:text-8xl font-bold mb-10 tracking-tight leading-tight">
                <span className="text-white drop-shadow-md">BizBuzz</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE39F] via-[#FFC94D] to-[#FFAF02] drop-shadow-sm">
                  Camp
                </span>
              </h1>

              <p className="text-2xl text-white/95 font-light mb-12 max-w-2xl leading-relaxed">
                Our seven-session BizBuzz Camp helps young founders ideate, build, and pitch market-ready ventures alongside Shark Tank alumni, civic leaders, and finance experts.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link
                  href="#session1"
                  className="bg-gradient-to-r from-[#FFBF00] to-[#FFD700] text-[#8B6914] font-medium py-4 px-8 rounded-lg text-xl transition-all hover:shadow-lg hover:shadow-[#FFBF00]/30 hover:-translate-y-1 active:translate-y-0 inline-flex items-center"
                >
                  Explore Camp
                  <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <Link
                  href="/fish-tank-2025"
                  className="text-white bg-white/25 border border-white/40 hover:bg-white/35 font-medium py-4 px-8 rounded-lg text-xl transition-all inline-flex items-center hover:shadow-lg hover:shadow-white/30"
                >
                  View 2025 Fish Tank →
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-6 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative h-[580px] w-full overflow-visible">
                <motion.div
                  className="absolute top-[160px] left-[10px] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-20 border-[3px] border-white"
                  initial={{ x: -30, y: 0, rotate: -8 }}
                  animate={{ x: 0, y: 0, rotate: -8 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.03, rotate: -6, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/camp_imgs/2025/session5/session5a.jpg"
                    alt="Session collaboration"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#CD8F20]/25 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute top-[-20px] left-[30%] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(190,120,16,0.3)] z-30 border-[3px] border-white"
                  initial={{ scale: 0.92, y: 10, rotate: 4 }}
                  animate={{ scale: 1, y: 0, rotate: 4 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/camp_imgs/2025/session3/session3b.jpg"
                    alt="Marketing workshop"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#CD8F20]/25 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute bottom-[10px] right-[60px] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-20 border-[3px] border-white"
                  initial={{ x: 30, y: 0, rotate: 8 }}
                  animate={{ x: 0, y: 0, rotate: 8 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.03, rotate: 6, transition: { duration: 0.3 } }}
                >
                  <Image
                    src="/camp_imgs/2025/session4/session4c.jpg"
                    alt="Prototype building"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#CD8F20]/25 to-transparent"></div>
                </motion.div>

                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFD700]/20 to-[#FFBF00]/15 blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-[#FFBF00]/20 to-[#FFD700]/15 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#FFE08A]/40">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#FFE08A]/30">
            <div className="px-8 py-12 text-center relative">
              <div className="absolute right-6 top-6 opacity-10">
                <svg className="h-12 w-12" viewBox="0 0 512 512" fill="#7A4B00" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.09 14.49 3.09 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.09 14.49 3.09 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B4E00] to-[#FFBF00] mb-4">7</div>
              <div className="text-[#8B4E00] font-medium text-lg">Camp Sessions</div>
            </div>
            
            <div className="px-8 py-12 text-center relative">
              <div className="absolute right-6 top-6 opacity-10">
                <svg className="h-12 w-12" viewBox="0 0 640 512" fill="#7A4B00" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B4E00] to-[#FFBF00] mb-4">5</div>
              <div className="text-[#8B4E00] font-medium text-lg">Guest Speakers</div>
            </div>
            
            <div className="px-8 py-12 text-center relative">
              <div className="absolute right-6 top-6 opacity-10">
                <svg className="h-12 w-12" viewBox="0 0 448 512" fill="#7A4B00" xmlns="http://www.w3.org/2000/svg">
                  <path d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B4E00] to-[#FFBF00] mb-4">120+</div>
              <div className="text-[#8B4E00] font-medium text-lg">Students Taught</div>
            </div>
          </div>
        </div>
      </div>

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
