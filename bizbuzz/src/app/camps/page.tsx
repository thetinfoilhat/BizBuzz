"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Session data
const sessions = [
  {
    id: "session1",
    title: "Ideation & Innovation",
    date: "June 12-13, 2024",
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
    date: "July 8-9, 2024",
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
    date: "August 15-16, 2024",
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
    date: "September 5-6, 2024",
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
    date: "October 10-11, 2024",
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
    date: "November 14-15, 2024",
    location: "Nichols Library, Naperville",
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
      className="mb-16 rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100"
      style={{ borderLeft: `6px solid ${session.color}` }}
    >
      {/* Session Header */}
      <div className="py-6 pl-6 pr-8 flex items-center" style={{ background: `linear-gradient(90deg, ${session.color}15, white)` }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mr-5 text-white font-bold text-xl shadow-md" 
          style={{ backgroundColor: session.color }}>
          {index + 1}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#2D3748]">{session.title}</h3>
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
      <div className="pt-6 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - Description and Images */}
          <motion.div variants={fadeIn} className="md:col-span-8">
            <p className="text-[#4B5563] mb-8 text-lg leading-relaxed">
              {session.description}
            </p>
            
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur-xl opacity-50" 
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
          
          {/* Right Column - Speaker Cards for Session 5 */}
          <motion.div variants={fadeIn} className="md:col-span-4 flex flex-col gap-6">
            {session.id === "session5" ? (
              <>
                <div className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col w-full relative">
                  <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10" 
                    style={{ backgroundImage: `linear-gradient(to right, ${session.color}20, #38b6ff10)` }} 
                  />
                  <div className="text-center py-3 relative z-10" style={{ backgroundColor: `${session.color}10` }}>
                    <h4 className="font-bold text-[#2D3748] text-lg">FEATURED SPEAKER</h4>
                  </div>
                  
                  <div className="p-5 flex flex-col items-center text-center flex-grow justify-between relative z-10">
                    <div className="flex flex-col items-center w-full">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 mb-3 mx-auto" 
                        style={{ borderColor: session.color }}>
                        <Image 
                          src={session.speaker.image} 
                          alt={session.speaker.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h5 className="text-xl font-semibold text-[#2D3748] mb-1">{session.speaker.name}</h5>
                      <p className="text-gray-600 text-sm mb-2">{session.speaker.role}</p>
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-sm mb-3"
                        style={{ backgroundColor: `${session.color}20`, color: session.color }}
                      >
                        &ldquo;{session.speaker.topic}&rdquo;
                      </div>
                      <p className="text-[#4B5563] italic text-sm">
                        {session.speaker.bio}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col w-full relative">
                  <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10" 
                    style={{ backgroundImage: `linear-gradient(to right, ${session.color}20, #38b6ff10)` }} 
                  />
                  <div className="text-center py-3 relative z-10" style={{ backgroundColor: `${session.color}10` }}>
                    <h4 className="font-bold text-[#2D3748] text-lg">GUEST SPEAKER</h4>
                  </div>
                  
                  <div className="p-5 flex flex-col items-center text-center flex-grow justify-between relative z-10">
                    <div className="flex flex-col items-center w-full">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 mb-3 mx-auto" 
                        style={{ borderColor: session.color }}>
                        <Image 
                          src="/camp_imgs/speakers/eddie_yoon.jpg"
                          alt="Additional Speaker"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h5 className="text-xl font-semibold text-[#2D3748] mb-1">Eddie Yoon</h5>
                      <p className="text-gray-600 text-sm mb-2">Co-Creator of Category Pirates</p>
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-sm mb-3"
                        style={{ backgroundColor: `${session.color}20`, color: session.color }}
                      >
                        &ldquo;Finance is Freedom&rdquo;
                      </div>
                      <p className="text-[#4B5563] italic text-sm">
                        He challenged students to rethink their relationship with money, describing it as powerful dynamite that must be used wisely. He urged them to create rather than compete, emphasizing that entrepreneurship—not just education—is the path to true freedom.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Default speaker card for other sessions
              <div className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col w-full relative">
                <div className="absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-30 -z-10" 
                  style={{ backgroundImage: `linear-gradient(to right, ${session.color}20, #38b6ff10)` }} 
                />
                <div className="text-center py-3 relative z-10" style={{ backgroundColor: `${session.color}10` }}>
                  <h4 className="font-bold text-[#2D3748] text-lg">FEATURED SPEAKER</h4>
                </div>
                
                <div className="p-5 flex flex-col items-center text-center flex-grow justify-between relative z-10">
                  <div className="flex flex-col items-center w-full">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 mb-3 mx-auto" 
                      style={{ borderColor: session.color }}>
                      <Image 
                        src={session.speaker.image} 
                        alt={session.speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h5 className="text-xl font-semibold text-[#2D3748] mb-1">{session.speaker.name}</h5>
                    <p className="text-gray-600 text-sm mb-2">{session.speaker.role}</p>
                    <div 
                      className="inline-block px-3 py-1 rounded-full text-sm mb-3"
                      style={{ backgroundColor: `${session.color}20`, color: session.color }}
                    >
                      &ldquo;{session.speaker.topic}&rdquo;
                    </div>
                    <p className="text-[#4B5563] italic text-sm">
                      {session.speaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CampPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative flex items-center bg-white overflow-hidden min-h-screen">
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block mb-6 px-4 py-2 bg-indigo-100 text-[#6366F1] font-medium rounded-full text-base md:text-lg">
                Summer 2024
              </span>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 text-[#2D3748] tracking-tight leading-tight">
                BizCamp <span className="text-[#6366F1]">Sessions</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#4B5563] font-light mb-12 leading-relaxed max-w-xl">
                Our six-part entrepreneurial journey takes students from idea generation
                to market-ready concepts through hands-on workshops and expert mentorship.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#session1" 
                  className="bg-[#6366F1] text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all hover:bg-[#4F46E5] hover:scale-105 active:scale-95 shadow-lg hover:shadow-indigo-200 inline-flex items-center"
                >
                  Explore Sessions
                  <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a 
                  href="mailto:info@bizbuzznfp.org" 
                  className="text-[#4B5563] hover:text-[#6366F1] font-medium text-lg transition-colors inline-flex items-center"
                >
                  Register Now →
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6366F1]/20 to-[#38b6ff]/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-[650px]">
                <div className="absolute top-8 left-4 w-[320px] h-[320px] rounded-xl overflow-hidden shadow-lg transform -rotate-4">
                  <Image
                    src="/camp_imgs/landing/left.jpg"
                    alt="Students collaborating"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 right-0 translate-x-1/3 w-[340px] h-[340px] rounded-xl overflow-hidden shadow-lg transform rotate-3">
                  <Image
                    src="/camp_imgs/landing/right.jpg"
                    alt="Workshop session"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 w-[260px] h-[260px] rounded-xl overflow-hidden shadow-lg rotate-2">
                  <Image
                    src="/camp_imgs/landing/center.jpg"
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
      <div className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-100">
        <h2 className="text-5xl font-bold text-[#2D3748] mb-4 text-center">2024 Program</h2>
        <p className="text-[#4B5563] text-center mb-16 text-xl max-w-2xl mx-auto">Each session builds upon the previous one, creating a comprehensive learning journey from idea to execution.</p>
        
        <div>
          {sessions.map((session, index) => (
            <SessionCard key={session.id} session={session} index={index} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#6366F1] py-16">
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
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#6366F1] font-medium rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
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