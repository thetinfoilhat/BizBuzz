"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

// 2027 Session data — layout placeholder, content TBD
const sessions = [
  {
    id: "session1",
    title: "Session 1 — TBD",
    date: "TBD, 2027",
    location: "TBD, Naperville",
    description: "Session 1 details coming soon. Check back as we finalize the 2027 curriculum.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session1/session1a.jpg",
      "/camp_imgs/2025/session1/session1b.jpg",
      "/camp_imgs/2025/session1/session1c.jpg",
      "/camp_imgs/2025/session1/session1d.jpg",
      "/camp_imgs/2025/session1/session1e.jpg",
    ],
    color: "#ddd6fe"
  },
  {
    id: "session2",
    title: "Session 2 — TBD",
    date: "TBD, 2027",
    location: "TBD, Naperville",
    description: "Session 2 details coming soon. Check back as we finalize the 2027 curriculum.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session2/session2a.jpg",
      "/camp_imgs/2025/session2/session2b.jpg",
      "/camp_imgs/2025/session2/session2c.jpg",
      "/camp_imgs/2025/session2/session2d.jpg",
      "/camp_imgs/2025/session2/session2e.jpg",
    ],
    color: "#c4b5fd"
  },
  {
    id: "session3",
    title: "Session 3 — TBD",
    date: "TBD, 2027",
    location: "TBD, Naperville",
    description: "Session 3 details coming soon. Check back as we finalize the 2027 curriculum.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session3/session3a.jpg",
      "/camp_imgs/2025/session3/session3b.jpg",
      "/camp_imgs/2025/session3/session3c.jpg",
      "/camp_imgs/2025/session3/session3d.jpg",
      "/camp_imgs/2025/session3/session3e.jpg",
    ],
    color: "#8b5cf6"
  },
  {
    id: "session4",
    title: "Session 4 — TBD",
    date: "TBD, 2027",
    location: "TBD, Naperville",
    description: "Session 4 details coming soon. Check back as we finalize the 2027 curriculum.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session4/session4a.jpg",
      "/camp_imgs/2025/session4/session4b.jpg",
      "/camp_imgs/2025/session4/session4c.jpg",
      "/camp_imgs/2025/session4/session4d.jpg",
      "/camp_imgs/2025/session4/session4e.jpg",
    ],
    color: "#7c3aed"
  },
  {
    id: "session5",
    title: "Session 5 — TBD",
    date: "TBD, 2027",
    location: "TBD, Naperville",
    description: "Session 5 details coming soon. Check back as we finalize the 2027 curriculum.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session5/session5a.jpg",
      "/camp_imgs/2025/session5/session5b.jpg",
      "/camp_imgs/2025/session5/session5c.jpg",
      "/camp_imgs/2025/session5/session5d.jpg",
      "/camp_imgs/2025/session5/session5e.jpg",
    ],
    color: "#6d28d9"
  },
  {
    id: "session6",
    title: "Session 6 — TBD",
    date: "TBD, 2027",
    location: "TBD, Naperville",
    description: "Session 6 details coming soon. Check back as we finalize the 2027 curriculum.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session6/session6a.jpg",
      "/camp_imgs/2025/session6/session6b.jpg",
      "/camp_imgs/2025/session6/session6c.jpg",
      "/camp_imgs/2025/session6/session6d.jpg",
      "/camp_imgs/2025/session6/session6e.jpg",
    ],
    color: "#5b21b6"
  },
  {
    id: "session7",
    title: "Session 7 — TBD",
    date: "TBD, 2027",
    location: "TBD, Naperville",
    description: "Session 7 details coming soon. Check back as we finalize the 2027 curriculum.",
    speaker: null,
    speaker2: null,
    images: [
      "/camp_imgs/2025/session7/session7a.jpg",
      "/camp_imgs/2025/session7/session7b.jpg",
      "/camp_imgs/2025/session7/session7c.jpg",
      "/camp_imgs/2025/session7/session7d.jpg",
      "/camp_imgs/2025/session7/session7e.JPG",
    ],
    color: "#4c1d95"
  }
];

// ── Image Grid ────────────────────────────────────────────────────────────────

const ImageGrid = ({ images, title }: { images: string[], title: string }) => {
  const allImages = [...images];
  while (allImages.length < 5) {
    allImages.push(images[allImages.length % images.length]);
  }

  return (
    <div className="grid grid-cols-6 gap-3 h-full">
      <div className="col-span-3 row-span-2 relative rounded-xl overflow-hidden h-[320px] shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
        <Image src={allImages[0]} alt={`${title} main image`} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="col-span-3 grid grid-rows-2 gap-3 h-[320px]">
        <div className="grid grid-cols-2 gap-3">
          {[1, 2].map((i) => (
            <div key={i} className="relative rounded-xl overflow-hidden h-[156px] shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
              <Image src={allImages[i]} alt={`${title} image ${i}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[3, 4].map((i) => (
            <div key={i} className="relative rounded-xl overflow-hidden h-[156px] shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
              <Image src={allImages[i]} alt={`${title} image ${i}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
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
  speaker: { name: string; role: string; topic: string; bio: string; image: string };
  color: string;
  title: string;
}) => {
  const colorMapping: Record<string, { bg: string; text: string }> = {
    "#ede9fe": { bg: "#ede9fe", text: "#2e1065" },
    "#ddd6fe": { bg: "#ddd6fe", text: "#2e1065" },
    "#c4b5fd": { bg: "#c4b5fd", text: "#2e1065" },
    "#8b5cf6": { bg: "#8b5cf6", text: "white" },
    "#7c3aed": { bg: "#7c3aed", text: "white" },
    "#6d28d9": { bg: "#6d28d9", text: "white" },
    "#5b21b6": { bg: "#5b21b6", text: "white" },
    "#4c1d95": { bg: "#4c1d95", text: "white" },
    "#2e1065": { bg: "#2e1065", text: "white" },
  };

  const quoteStyles = colorMapping[color] || { bg: color, text: "white" };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-[#ddd6fe]/30 flex flex-col w-full relative h-full">
      <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10"
        style={{ backgroundImage: `linear-gradient(to right, ${color}20, #8b5cf610)` }}
      />
      <div className="text-center py-3 relative z-10" style={{ backgroundColor: `${color}20` }}>
        <h4 className="font-bold text-[#2e1065] text-lg">{title}</h4>
      </div>
      <div className="p-6 flex flex-col items-center text-center flex-grow justify-between relative z-10">
        <div className="flex flex-col items-center w-full">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 mb-4 mx-auto" style={{ borderColor: color }}>
            <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
          </div>
          <h5 className="text-xl font-semibold text-[#2e1065] mb-2">{speaker.name}</h5>
          <p className="text-[#4c1d95] text-sm mb-4">{speaker.role}</p>
          <div
            className="inline-block px-4 py-2 rounded-full text-sm mb-4"
            style={{ backgroundColor: quoteStyles.bg, color: quoteStyles.text }}
          >
            &ldquo;{speaker.topic}&rdquo;
          </div>
          <p className="text-[#4c1d95] italic text-sm">{speaker.bio}</p>
        </div>
      </div>
    </div>
  );
};

type SessionType = (typeof sessions)[number];
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
  const layoutOverride = ["session1", "session2", "session7"].includes(session.id) ? "wide" : undefined;
  const layoutType = layoutOverride ?? rawLayoutType;
  const extraImages = session.images.slice(5);
  const imageWrapperHeight = layoutType === "none" ? "relative h-[380px]" : "relative h-[320px]";
  const descriptionClasses = layoutType === "none"
    ? "text-[#4c1d95] mb-8 text-xl leading-relaxed"
    : "text-[#4c1d95] mb-10 text-lg leading-relaxed";

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
            style={{ color: ["#ede9fe", "#ddd6fe", "#c4b5fd"].includes(session.color) ? "#2e1065" : "white" }}
          >
            {index + 1}
          </span>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#2e1065]">{session.title}</h3>
          <div className="flex flex-wrap gap-5 text-base text-[#4c1d95] mt-2">
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
      <div className="rounded-2xl overflow-hidden bg-white shadow-lg border border-[#ddd6fe]/30">
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
              <p className={layoutType === "wide" ? "text-[#4c1d95] mb-10 text-xl leading-relaxed" : descriptionClasses}>
                {session.description}
              </p>

              <div className="relative">
                <div
                  className="absolute -inset-4 bg-gradient-to-r rounded-3xl blur-xl opacity-40"
                  style={{ backgroundImage: `linear-gradient(to right, ${session.color}10, #8b5cf610)` }}
                />
                <div className={layoutType === "wide" ? "relative" : imageWrapperHeight}>
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
                          <Image src={img} alt={`${session.title} photo ${idx + 1}`} fill className="object-cover" />
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
                      <Image src={img} alt={`${session.title} additional photo ${extraIdx + 6}`} fill className="object-cover" />
                    </motion.div>
                  ))}
                </div>
              )}
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

            {/* No-speaker info box */}
            {layoutType === "none" && (
              <motion.div variants={fadeIn} className="order-2 xl:col-span-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-[#4c1d95] font-medium bg-[#faf5ff] border border-[#ddd6fe]/40 rounded-2xl p-6">
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-[#2e1065]">Hands-On Studio</h4>
                    <p className="text-sm leading-relaxed">Dedicated build time with high school mentors to polish Fish Tank pitches, prototypes, and marketing decks.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-[#2e1065]">Mentor Office Hours</h4>
                    <p className="text-sm leading-relaxed">Rotating stations with alumni coaches for financial modeling, storytelling, and stage presence.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-[#2e1065]">Showcase Prep</h4>
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Camps2027Page() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#faf5ff]">

      {/* ── Hero Section ── */}
      <div className="relative bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#5b21b6]">
        {/* Background SVG icons */}
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
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#8b5cf6]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#a78bfa]/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.05]"></div>
          <svg className="absolute bottom-0 w-full text-[#faf5ff]" preserveAspectRatio="none" viewBox="0 0 1440 60" fill="currentColor">
            <path d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,27,576,21.3C672,16,768,21,864,26.7C960,32,1056,37,1152,37.3C1248,37,1344,32,1392,29.3L1440,27L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              className="lg:col-span-6 relative z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/30 border border-white/40 backdrop-blur-sm mb-10 shadow-sm">
                <div className="w-3 h-3 rounded-full bg-white mr-2"></div>
                <span className="text-base font-medium text-white">Summer 2027</span>
              </div>

              <h1 className="text-7xl lg:text-8xl font-bold mb-10 tracking-tight leading-tight">
                <span className="text-white drop-shadow-md">BizBuzz</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ddd6fe] via-[#8b5cf6] to-[#a78bfa] drop-shadow-sm">
                  Camp
                </span>
              </h1>

              <p className="text-2xl text-white/95 font-light mb-12 max-w-2xl leading-relaxed">
                Our multi-week entrepreneurship camp helps young founders ideate, build, and pitch market-ready ventures alongside industry leaders and business experts.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-medium py-4 px-8 rounded-lg text-xl transition-all hover:shadow-lg hover:shadow-[#8b5cf6]/30 hover:-translate-y-1 active:translate-y-0 inline-flex items-center"
                  >
                    Explore Other Camps
                    <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-[#ddd6fe]/40 overflow-hidden z-[200]">
                      {[
                        { label: 'Camp 2024', href: '/camps-2024' },
                        { label: 'Camp 2025', href: '/camps-2025' },
                        { label: 'Camp 2026', href: '/camps-2026' },
                      ].map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-3 text-[#2e1065] font-medium hover:bg-[#f5f3ff] transition-colors text-base"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065]/25 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute top-[-20px] left-[30%] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(139,92,246,0.3)] z-30 border-[3px] border-white"
                  initial={{ scale: 0.92, y: 10, rotate: 4 }}
                  animate={{ scale: 1, y: 0, rotate: 4 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <Image src="/camp_imgs/2025/session3/session3b.jpg" alt="Marketing workshop" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065]/25 to-transparent"></div>
                </motion.div>

                <motion.div
                  className="absolute bottom-[10px] right-[60px] w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-xl z-20 border-[3px] border-white"
                  initial={{ x: 30, y: 0, rotate: 8 }}
                  animate={{ x: 0, y: 0, rotate: 8 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.03, rotate: 6, transition: { duration: 0.3 } }}
                >
                  <Image src="/camp_imgs/2025/session4/session4c.jpg" alt="Prototype building" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065]/25 to-transparent"></div>
                </motion.div>

                <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#a78bfa]/15 blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-[#a78bfa]/20 to-[#8b5cf6]/15 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── 2027 Interest Banner ── */}
      <section className="bg-gradient-to-r from-[#4c1d95] to-[#2e1065] py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 border border-white/25 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#a78bfa] mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-white/90">2026 Camp In Progress</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            BizBuzz Camp 2026 is currently underway
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
            Missed your spot in 2026 or already looking ahead? Secure your place in the 2027 camp now before seats fill up.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_MouwxaWfjA6UeibsY2lrZoZky-n13jffMH7aP1UNiuDGzQ/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-white text-[#2e1065] font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Guarantee Your 2027 Spot
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p className="text-sm text-white/50 mt-4">Limited seats available</p>
        </div>
      </section>

    </div>
  );
}
