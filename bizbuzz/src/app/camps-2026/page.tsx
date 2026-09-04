"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// ── KidPreneur Camp Sessions ──────────────────────────────────────────────────

const kidpreneurSessions = [
  {
    id: "kp-session1",
    title: "Ideation",
    date: "June 5th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 1, our kidpreneurs kicked things off by connecting with new friends and high school instructors through a high-energy Networking Bingo game. They then explored real-world problem solving with an interactive \"Bug-Me List\" and ideation session, learning how to spot everyday challenges and turn them into business ideas. Throughout the session, they also began learning the importance of using money wisely by earning BizBucks, which they can redeem for a variety of rewards.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2026/session1kp/session1kpa.JPG",
      "/camp_imgs/2026/session1kp/session1kpb.JPG",
      "/camp_imgs/2026/session1kp/session1kpc.JPG",
      "/camp_imgs/2026/session1kp/session1kpd.JPG",
      "/camp_imgs/2026/session1kp/session1kpe.JPG",
    ],
    color: "#bbf7d0"
  },
  {
    id: "kp-session2",
    title: "Finance",
    date: "June 12th, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 2, students took part in an interactive Finance Workshop at Nichols Library, starting with a \"Price is Right\" icebreaker to learn cost, price, and profit. They explored what makes a strong pitch and how to develop ideas, then applied these skills through activities like a Startup Auction, Shark Tank deal decisions, Business Disaster scenarios, and the $100 Challenge. Throughout the session, students practiced teamwork, decision-making, and learned to use money wisely by using opportunities.",
    speaker: {
      name: "Isha Elandassery",
      role: "Entrepreneur & Finance Educator",
      topic: "Money Moves & Smart Decisions",
      bio: "Bringing finance to life through real-world scenarios, she showed students how smart money decisions fuel entrepreneurship — from startup auctions to Shark Tank-style deal analysis, she made every dollar a lesson in strategy.",
      image: "/camp_imgs/speakers/isha_elandassery.jpg"
    },
    speaker2: null,
    images: [
      "/camp_imgs/2026/session2kp/session2kpa.jpg",
      "/camp_imgs/2026/session2kp/session2kpb.jpg",
      "/camp_imgs/2026/session2kp/session2kpc.jpg",
      "/camp_imgs/2026/session2kp/session2kpd.jpg",
      "/camp_imgs/2026/session2kp/session2kpe.jpg",
      "/camp_imgs/2026/session2kp/session2kpf.jpg",
      "/camp_imgs/2026/session2kp/session2kpg.jpg",
    ],
    color: "#86efac"
  },
  {
    id: "kp-session3",
    title: "Marketing & Prototyping",
    date: "June 19th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 3, students dove into the fundamentals of marketing and product design. They learned how businesses attract customers, build a brand, and communicate value effectively. Through hands-on activities, students created their own brand identity and began designing simple prototypes of their ideas. By testing and refining their concepts, they understood how strong marketing and thoughtful design work together to bring ideas to life and make products stand out.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2026/session3kp/session3kpa.jpg",
      "/camp_imgs/2026/session3kp/session3kpb.jpg",
      "/camp_imgs/2026/session3kp/session3kpc.jpg",
      "/camp_imgs/2026/session3kp/session3kpd.jpg",
      "/camp_imgs/2026/session3kp/session3kpe.jpg",
      "/camp_imgs/2026/session3kp/session3kpf.jpg",
    ],
    color: "#10b981"
  },
  {
    id: "kp-session4",
    title: "Problem Solving & Business Models",
    date: "June 26th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 4, students focused on solving problems and turning ideas into structured business models. They learned how successful companies identify customer needs, create value, and generate revenue. Through interactive exercises, students broke down their ideas into key components such as target audience, pricing, and operations. By the end of the session, they had a clearer understanding of how businesses function and how to build a sustainable and scalable idea.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2026/session4kp/session4kpa.jpg",
      "/camp_imgs/2026/session4kp/session4kpb.jpg",
      "/camp_imgs/2026/session4kp/session4kpc.jpg",
      "/camp_imgs/2026/session4kp/session4kpd.jpg",
      "/camp_imgs/2026/session4kp/session4kpe.jpg",
      "/camp_imgs/2026/session4kp/session4kpf.jpg",
    ],
    color: "#059669"
  },
  {
    id: "kp-session5",
    title: "Presentational & Speaking Skills",
    date: "July 3rd, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 5, students developed strong communication and presentation skills essential for entrepreneurship. They learned how to confidently speak in front of an audience, structure a compelling pitch, and clearly explain their ideas. Through practice activities and feedback, students refined their tone, body language, and storytelling abilities. This session prepared them to present with confidence, helping them effectively share their ideas and persuade others.",
    speaker: {
      name: "Scott Wehrli",
      role: "Mayor of Naperville",
      topic: "Leading the Local Way",
      bio: "Sharing stories from his journey in public service and business, he inspired students to see leadership as service to their community. He encouraged them to stay curious, take initiative, and use entrepreneurship to make a lasting local impact.",
      image: "/camp_imgs/speakers/scottwehrli.jpg"
    },
    speaker2: null,
    images: [
      "/camp_imgs/2026/session5kp/session5kpa.jpg",
      "/camp_imgs/2026/session5kp/session5kpb.jpg",
      "/camp_imgs/2026/session5kp/session5kpc.jpg",
      "/camp_imgs/2026/session5kp/session5kpd.jpg",
      "/camp_imgs/2026/session5kp/session5kpe.jpg",
      "/camp_imgs/2026/session5kp/session5kpf.jpg",
    ],
    color: "#047857"
  },
  {
    id: "kp-session6",
    title: "Mock Pitch",
    date: "July 10th, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 6, students brought everything together in a Mock Pitch experience. They presented their business ideas in a Fish Tank-style setting, applying the skills learned throughout the program. Students received feedback from instructors and peers, allowing them to improve their ideas and presentation style. This session built confidence, reinforced key concepts, and prepared them for the final competition by simulating a real entrepreneurial pitching environment.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session6/session6a.jpg",
      "/camp_imgs/2025/session6/session6b.jpg",
      "/camp_imgs/2025/session6/session6c.jpg",
      "/camp_imgs/2025/session6/session6d.jpg",
      "/camp_imgs/2025/session6/session6e.jpg",
    ],
    color: "#065f46"
  },
];

// ── VentureLab Sessions ───────────────────────────────────────────────────────

const ventureLabSessions = [
  {
    id: "vl-session1",
    title: "Ideation",
    date: "June 5th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 1, students were introduced to entrepreneurship through a hands-on Startup Ideation Lab. They learned how to identify real-world problems using a \"Bug Me List\" and turn those challenges into creative business ideas. Through brainstorming, poster creation, and a mini tradeshow, students explored different concepts, collaborated with peers, and began forming teams. By the end of the session, they delivered short pitches and took their first steps toward building a strong, innovative startup idea.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session1/session1a.jpg",
      "/camp_imgs/2025/session1/session1b.jpg",
      "/camp_imgs/2025/session1/session1c.jpg",
      "/camp_imgs/2025/session1/session1d.jpg",
      "/camp_imgs/2025/session1/session1e.jpg",
    ],
    color: "#bbf7d0"
  },
  {
    id: "vl-session2",
    title: "Feasibility & Market Research",
    date: "June 12th, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 2, students continued building on their ideas from the Startup Ideation Lab. They refined their problem-solution concepts, strengthened their understanding of their target audience, and further developed their startup vision. Through continued collaboration, feedback, and pitching practice, students improved their ideas and communication skills. This session reinforced creativity, critical thinking, and iteration, helping students gain confidence in their ideas while preparing for more advanced development in future sessions.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2026/session2vl/session2vla.jpg",
      "/camp_imgs/2026/session2vl/session2vlb.jpg",
      "/camp_imgs/2026/session2vl/session2vlc.jpg",
      "/camp_imgs/2026/session2vl/session2vld.jpg",
      "/camp_imgs/2026/session2vl/session2vle.jpg",
      "/camp_imgs/2026/session2vl/session2vlf.jpg",
      "/camp_imgs/2026/session2vl/session2vlg.jpg",
    ],
    color: "#86efac"
  },
  {
    id: "vl-session3",
    title: "Prototyping",
    date: "June 19th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 3, students learned how to bring their ideas to life through prototyping. They explored how successful startups test and refine their concepts using simple models, sketches, or mockups. Through hands-on activities, students created early versions of their product or service and gathered feedback from peers. This process helped them understand the importance of iteration, user experience, and continuous improvement as they began transforming their ideas into something tangible.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2026/session3vl/session3vla.jpg",
      "/camp_imgs/2026/session3vl/session3vlb.jpg",
      "/camp_imgs/2026/session3vl/session3vlc.jpg",
      "/camp_imgs/2026/session3vl/session3vld.jpg",
      "/camp_imgs/2026/session3vl/session3vle.jpg",
      "/camp_imgs/2026/session3vl/session3vlf.jpg",
    ],
    color: "#10b981"
  },
  {
    id: "vl-session4",
    title: "Project Management & Linking",
    date: "June 26th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 4, students focused on organizing their ideas and managing their projects effectively. They learned how to break down their startup into key tasks, set goals, and assign roles within their teams. Additionally, they explored how different parts of a business connect, including product development, marketing, and operations. Through structured planning activities, students strengthened their teamwork and leadership skills while ensuring their ideas were clear, cohesive, and ready for presentation.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2026/session4vl/session4vla.jpg",
      "/camp_imgs/2026/session4vl/session4vlb.jpg",
      "/camp_imgs/2026/session4vl/session4vlc.jpg",
      "/camp_imgs/2026/session4vl/session4vld.jpg",
      "/camp_imgs/2026/session4vl/session4vle.jpg",
      "/camp_imgs/2026/session4vl/session4vlf.jpg",
    ],
    color: "#059669"
  },
  {
    id: "vl-session5",
    title: "Presentational & Speaking Skills",
    date: "July 3rd, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 5, students developed the communication skills needed to present their ideas confidently. They learned how to structure a clear and compelling pitch, improve their public speaking, and use storytelling to engage an audience. Through guided practice and feedback, students refined their delivery, body language, and clarity. This session helped them feel more confident presenting their ideas and prepared them to effectively communicate their startup vision.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2026/session5vl/session5vla.jpg",
      "/camp_imgs/2026/session5vl/session5vlb.jpg",
      "/camp_imgs/2026/session5vl/session5vlc.jpg",
      "/camp_imgs/2026/session5vl/session5vld.jpg",
      "/camp_imgs/2026/session5vl/session5vle.jpg",
      "/camp_imgs/2026/session5vl/session5vlf.jpg",
    ],
    color: "#047857"
  },
  {
    id: "vl-session6",
    title: "Demo Day Practice",
    date: "July 10th, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 6, students focused on practicing for Demo Day in a low-pressure, supportive environment. They ran through their full pitches, received feedback from instructors and peers, and made final improvements to both their ideas and presentation style. The goal of this session was repetition and refinement, helping students build confidence, fix weak points, and feel fully prepared. By the end, students had a polished pitch and a clear understanding of how to present effectively.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session6/session6a.jpg",
      "/camp_imgs/2025/session6/session6b.jpg",
      "/camp_imgs/2025/session6/session6c.jpg",
      "/camp_imgs/2025/session6/session6d.jpg",
      "/camp_imgs/2025/session6/session6e.jpg",
    ],
    color: "#065f46"
  },
];

// ── Image Grid ────────────────────────────────────────────────────────────────

const ImageGrid = ({ images, title }: { images: string[], title: string }) => {
  const tileClasses = "relative rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-500";
  const overlay = (
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
  );

  // 7+ images: one large feature + six tiles in a clean 2-row grid
  if (images.length >= 7) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 auto-rows-[156px]">
        <div className={`${tileClasses} col-span-2 row-span-2`}>
          <Image src={images[0]} alt={`${title} main image`} fill className="object-cover" />
          {overlay}
        </div>
        {images.slice(1, 7).map((img, i) => (
          <div key={img} className={tileClasses}>
            <Image src={img} alt={`${title} image ${i + 1}`} fill className="object-cover" />
            {overlay}
          </div>
        ))}
      </div>
    );
  }

  // Exactly 6 images: uniform 3x2 grid
  if (images.length === 6) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[156px] sm:auto-rows-[200px]">
        {images.map((img, i) => (
          <div key={img} className={tileClasses}>
            <Image src={img} alt={`${title} image ${i + 1}`} fill className="object-cover" />
            {overlay}
          </div>
        ))}
      </div>
    );
  }

  // 5 or fewer: large feature + 2x2 grid (repeat to fill)
  const allImages = [...images];
  while (allImages.length < 5) {
    allImages.push(images[allImages.length % images.length]);
  }

  return (
    <div className="grid grid-cols-6 gap-3 h-full">
      <div className={`${tileClasses} col-span-3 row-span-2 h-[320px]`}>
        <Image src={allImages[0]} alt={`${title} main image`} fill className="object-cover" />
        {overlay}
      </div>
      <div className="col-span-3 grid grid-rows-2 gap-3 h-[320px]">
        <div className="grid grid-cols-2 gap-3">
          {[1, 2].map((i) => (
            <div key={i} className={`${tileClasses} h-[156px]`}>
              <Image src={allImages[i]} alt={`${title} image ${i}`} fill className="object-cover" />
              {overlay}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[3, 4].map((i) => (
            <div key={i} className={`${tileClasses} h-[156px]`}>
              <Image src={allImages[i]} alt={`${title} image ${i}`} fill className="object-cover" />
              {overlay}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Speaker Card ──────────────────────────────────────────────────────────────

const SpeakerCard = ({
  speaker,
  color,
  title
}: {
  speaker: { name: string; role: string; topic: string; bio: string; image: string; objectPosition?: string };
  color: string;
  title: string;
}) => {
  const colorMapping: Record<string, { bg: string; text: string }> = {
    "#bbf7d0": { bg: "#bbf7d0", text: "#064e3b" },
    "#86efac": { bg: "#86efac", text: "#064e3b" },
    "#10b981": { bg: "#10b981", text: "white" },
    "#059669": { bg: "#059669", text: "white" },
    "#047857": { bg: "#047857", text: "white" },
    "#065f46": { bg: "#065f46", text: "white" },
    "#064e3b": { bg: "#064e3b", text: "white" },
  };

  const quoteStyles = colorMapping[color] || { bg: color, text: "white" };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-[#bbf7d0]/30 flex flex-col w-full relative h-full">
      <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10"
        style={{ backgroundImage: `linear-gradient(to right, ${color}20, #10b98110)` }}
      />
      <div className="text-center py-3 relative z-10" style={{ backgroundColor: `${color}20` }}>
        <h4 className="font-bold text-[#064e3b] text-lg">{title}</h4>
      </div>
      <div className="p-6 flex flex-col items-center text-center flex-grow justify-between relative z-10">
        <div className="flex flex-col items-center w-full">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 mb-4 mx-auto" style={{ borderColor: color }}>
            <Image
              src={speaker.image}
              alt={speaker.name}
              fill
              className="object-cover"
              style={{ objectPosition: speaker.objectPosition ?? "center" }}
            />
          </div>
          <h5 className="text-xl font-semibold text-[#064e3b] mb-2">{speaker.name}</h5>
          <p className="text-[#047857] text-sm mb-4">{speaker.role}</p>
          <div
            className="inline-block px-4 py-2 rounded-full text-sm mb-4"
            style={{ backgroundColor: quoteStyles.bg, color: quoteStyles.text }}
          >
            &ldquo;{speaker.topic}&rdquo;
          </div>
          <p className="text-[#047857] italic text-sm">{speaker.bio}</p>
        </div>
      </div>
    </div>
  );
};

type SessionType = (typeof kidpreneurSessions)[number];
type SpeakerType = NonNullable<SessionType["speaker"]>;

// ── Session Card ──────────────────────────────────────────────────────────────

const SessionCard = ({ session, index }: { session: SessionType, index: number }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const primarySpeaker = session.speaker;
  const secondarySpeaker = session.speaker2;
  const rawLayoutType = secondarySpeaker ? "dual" : primarySpeaker ? "single" : "none";
  const layoutType = rawLayoutType === "none" ? "wide" : rawLayoutType;
  const descriptionClasses = "text-[#047857] mb-10 text-lg leading-relaxed";

  return (
    <motion.div
      id={session.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
      }}
      className="mb-24 overflow-hidden"
    >
      {/* Session Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-3">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mr-5 font-bold text-xl shadow-lg relative overflow-hidden"
          style={{ backgroundColor: session.color }}
        >
          <span
            className="relative z-10"
            style={{ color: ["#bbf7d0", "#86efac"].includes(session.color) ? "#064e3b" : "white" }}
          >
            {index + 1}
          </span>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#064e3b]">{session.title}</h3>
          <div className="flex flex-wrap gap-5 text-base text-[#047857] mt-2">
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
      <div className="rounded-2xl overflow-hidden bg-white shadow-lg border border-[#bbf7d0]/30">
        <div className="p-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">

            {/* Left Speaker — dual layout only */}
            {layoutType === "dual" && primarySpeaker && (
              <motion.div variants={fadeIn} className="order-2 xl:order-1 xl:col-span-3 flex flex-col gap-6">
                <SpeakerCard speaker={primarySpeaker as SpeakerType} color={session.color} title="FEATURED SPEAKER" />
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
                    : "order-1 xl:col-span-12"
              }
            >
              <p className={layoutType === "wide" ? "text-[#047857] mb-10 text-xl leading-relaxed" : descriptionClasses}>
                {session.description}
              </p>

              <div className="relative">
                <div
                  className="absolute -inset-4 bg-gradient-to-r rounded-3xl blur-xl opacity-40"
                  style={{ backgroundImage: `linear-gradient(to right, ${session.color}10, #10b98110)` }}
                />
                <div className="relative">
                  <ImageGrid images={session.images} title={session.title} />
                </div>
              </div>
            </motion.div>

            {/* Single speaker layout */}
            {layoutType === "single" && primarySpeaker && (
              <motion.div variants={fadeIn} className="order-2 xl:col-span-4 flex flex-col gap-6">
                <SpeakerCard speaker={primarySpeaker as SpeakerType} color={session.color} title="FEATURED SPEAKER" />
              </motion.div>
            )}

            {/* Right speaker — dual layout */}
            {layoutType === "dual" && secondarySpeaker && (
              <motion.div variants={fadeIn} className="order-3 xl:col-span-3 flex flex-col gap-6">
                <SpeakerCard speaker={secondarySpeaker as SpeakerType} color={session.color} title="GUEST SPEAKER" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────

function Camps2026Inner() {
  const searchParams = useSearchParams();
  const [activeCamp, setActiveCamp] = useState<"kidpreneur" | "venturelab">("kidpreneur");

  useEffect(() => {
    if (searchParams.get("tab") === "venturelab") {
      setActiveCamp("venturelab");
    }
  }, [searchParams]);

  const activeSessions = activeCamp === "kidpreneur" ? kidpreneurSessions : ventureLabSessions;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0fff8]">

      {/* ── Hero Section ── */}
      <div className="relative bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#047857] overflow-hidden">
        <div className="absolute top-24 right-24 w-60 h-60 opacity-15">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M464 192l-33.5-5.5c-1.4-4.9-2.9-9.6-4.7-14.3l19.8-27.8-32-32-27.8 19.8c-4.7-1.8-9.4-3.3-14.3-4.7L366 96h-44l-5.5 33.5c-4.9 1.4-9.6 2.9-14.3 4.7l-27.8-19.8-32 32 19.8 27.8c-1.8 4.7-3.3 9.4-4.7 14.3L224 192v44l33.5 5.5c1.4 4.9 2.9 9.6 4.7 14.3l-19.8 27.8 32 32 27.8-19.8c4.7 1.8 9.4 3.3 14.3 4.7L322 336h44l5.5-33.5c4.9-1.4 9.6-2.9 14.3-4.7l27.8 19.8 32-32-19.8-27.8c1.8-4.7 3.3-9.4 4.7-14.3L464 236v-44zM288 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
          </svg>
        </div>
        <div className="absolute top-48 right-48 w-40 h-40 opacity-10">
          <svg viewBox="0 0 512 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7z" />
          </svg>
        </div>
        <div className="absolute bottom-48 left-24 w-48 h-48 opacity-10">
          <svg viewBox="0 0 640 512" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#10b981]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#34d399]/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.05]"></div>
          <svg className="absolute bottom-0 w-full text-[#f0fff8]" preserveAspectRatio="none" viewBox="0 0 1440 60" fill="currentColor">
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
                <span className="text-base font-medium text-white">Summer 2026</span>
              </div>

              <h1 className="text-7xl lg:text-8xl font-bold mb-10 tracking-tight leading-tight">
                <span className="text-white drop-shadow-md">BizBuzz</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bbf7d0] via-[#10b981] to-[#86efac] drop-shadow-sm">
                  Camp
                </span>
              </h1>

              <p className="text-2xl text-white/95 font-light mb-12 max-w-2xl leading-relaxed">
                Two six-session programs — KidPreneur Camp and VentureLab — helping young founders ideate, build, and pitch market-ready ventures alongside industry leaders and business experts.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link
                  href="#kp-session1"
                  className="bg-gradient-to-r from-[#10b981] to-[#34d399] text-white font-medium py-4 px-8 rounded-lg text-xl transition-all hover:shadow-lg hover:shadow-[#10b981]/30 hover:-translate-y-1 active:translate-y-0 inline-flex items-center"
                >
                  Explore Camp
                  <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <Link
                  href="/fish-tank-2026"
                  className="text-white bg-white/25 border border-white/40 hover:bg-white/35 font-medium py-4 px-8 rounded-lg text-xl transition-all inline-flex items-center hover:shadow-lg hover:shadow-white/30"
                >
                  View 2026 Fish Tank →
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
                  <Image src="/camp_imgs/2025/session5/session5a.jpg" alt="Session collaboration" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/25 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute top-[-20px] left-[30%] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(16,185,129,0.3)] z-30 border-[3px] border-white"
                  initial={{ scale: 0.92, y: 10, rotate: 4 }}
                  animate={{ scale: 1, y: 0, rotate: 4 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <Image src="/camp_imgs/2025/session3/session3b.jpg" alt="Marketing workshop" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/25 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute bottom-[10px] right-[60px] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-20 border-[3px] border-white"
                  initial={{ x: 30, y: 0, rotate: 8 }}
                  animate={{ x: 0, y: 0, rotate: 8 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.03, rotate: 6, transition: { duration: 0.3 } }}
                >
                  <Image src="/camp_imgs/2025/session4/session4c.jpg" alt="Prototype building" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/25 to-transparent"></div>
                </motion.div>

                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#10b981]/20 to-[#34d399]/15 blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-[#34d399]/20 to-[#10b981]/15 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Stats Section ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#bbf7d0]/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#bbf7d0]/30">
            <div className="px-8 py-12 text-center relative">
              <div className="absolute right-6 top-6 opacity-10">
                <svg className="h-12 w-12" viewBox="0 0 640 512" fill="#064e3b" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#064e3b] to-[#10b981] mb-4">165</div>
              <div className="text-[#064e3b] font-medium text-lg">Students Taught</div>
            </div>

            <div className="px-8 py-12 text-center relative">
              <div className="absolute right-6 top-6 opacity-10">
                <svg className="h-12 w-12" viewBox="0 0 512 512" fill="#064e3b" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.09 14.49 3.09 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.09 14.49 3.09 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#064e3b] to-[#10b981] mb-4">12</div>
              <div className="text-[#064e3b] font-medium text-lg">Camp Sessions</div>
            </div>

            <div className="px-8 py-12 text-center relative">
              <div className="absolute right-6 top-6 opacity-10">
                <svg className="h-12 w-12" viewBox="0 0 640 512" fill="#064e3b" xmlns="http://www.w3.org/2000/svg">
                  <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#064e3b] to-[#10b981] mb-4">2</div>
              <div className="text-[#064e3b] font-medium text-lg">Guest Speakers</div>
            </div>

            <div className="px-8 py-12 text-center relative">
              <div className="absolute right-6 top-6 opacity-10">
                <svg className="h-12 w-12" viewBox="0 0 448 512" fill="#064e3b" xmlns="http://www.w3.org/2000/svg">
                  <path d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z" />
                </svg>
              </div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#064e3b] to-[#10b981] mb-4">2</div>
              <div className="text-[#064e3b] font-medium text-lg">Camp Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sessions Section ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#064e3b] mb-6">Camp Sessions</h2>
          <p className="text-xl text-[#047857] max-w-3xl mx-auto mb-10">
            Two six-week programs running simultaneously. Select a camp to explore its sessions.
          </p>

          {/* Camp Tab Switcher */}
          <div className="inline-flex rounded-xl bg-[#f0fff8] border border-[#bbf7d0] p-1 gap-1">
            <button
              onClick={() => setActiveCamp("kidpreneur")}
              className={`px-8 py-3 rounded-lg text-base font-semibold transition-all ${
                activeCamp === "kidpreneur"
                  ? "bg-[#10b981] text-white shadow-md"
                  : "text-[#047857] hover:bg-[#bbf7d0]/50"
              }`}
            >
              KidPreneur Camp
            </button>
            <button
              onClick={() => setActiveCamp("venturelab")}
              className={`px-8 py-3 rounded-lg text-base font-semibold transition-all ${
                activeCamp === "venturelab"
                  ? "bg-[#10b981] text-white shadow-md"
                  : "text-[#047857] hover:bg-[#bbf7d0]/50"
              }`}
            >
              VentureLab
            </button>
          </div>
        </div>

        {activeSessions.map((session, index) => (
          <SessionCard key={session.id} session={session} index={index} />
        ))}
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#10b981] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready for 2026?</h2>
          <p className="text-xl text-white/90 mb-10">
            Applications open Spring 2026. Join our mailing list to be the first to know.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/fish-tank-2026"
              className="px-10 py-4 bg-white text-[#064e3b] font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg"
            >
              2026 Fish Tank →
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

export default function Camps2026Page() {
  return (
    <Suspense>
      <Camps2026Inner />
    </Suspense>
  );
}
