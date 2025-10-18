"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 2025 Session data
const sessions = [
  {
    id: "session1",
    title: "Innovation & Design Thinking",
    date: "June 11th, 2025",
    location: "Northwestern University, Evanston",
    description: "In Session 1 of our 2025 Summer Entrepreneurship Camp, students will explore advanced design thinking methodologies and learn how to create innovative solutions to complex problems. With enhanced curriculum and industry mentors, students will engage in hands-on activities and compete in our expanded Mini Fish Tank challenge with $300+ in prizes.",
    speaker: {
      name: "TBA",
      role: "Innovation Leader",
      topic: "Building Tomorrow's Solutions Today",
      bio: "Details coming soon.",
      image: "/camp_imgs/speakers/kandice_henning.png"
    },
    images: [
      "/camp_imgs/cards/session1/1.png",
      "/camp_imgs/cards/session1/2.png",
      "/camp_imgs/cards/session1/3.png",
      "/camp_imgs/cards/session1/4.png",
      "/camp_imgs/cards/session1/5.png",
    ],
    color: "#FFE699"
  },
  {
    id: "session2",
    title: "Brand Strategy & Digital Marketing",
    date: "June 18th, 2025",
    location: "Northwestern University, Evanston",
    description: "In Session 2, students will dive deep into modern brand strategy and digital marketing techniques. With expert instructors, they'll learn how to build compelling brand identities and leverage social media for business growth. Students will compete in a digital marketing challenge with $150 in prizes.",
    speaker: {
      name: "TBA",
      role: "Marketing Executive",
      topic: "Your Brand in the Digital Age",
      bio: "Details coming soon.",
      image: "/camp_imgs/speakers/isha_elandassery.jpg"
    },
    images: [
      "/camp_imgs/cards/session2/1.png",
      "/camp_imgs/cards/session2/2.jpg",
      "/camp_imgs/cards/session2/3.jpg",
      "/camp_imgs/cards/session2/4.png",
      "/camp_imgs/cards/session2/5.jpg",
    ],
    color: "#FFDB4D"
  },
  {
    id: "session3",
    title: "Product Development & Prototyping",
    date: "June 25th, 2025",
    location: "Northwestern University, Evanston",
    description: "In Session 3, students will learn the fundamentals of product development, from ideation to prototyping. Through hands-on maker activities and design challenges, they'll bring their ideas to life with guidance from industry professionals. The session culminates in a prototype showcase with $200 in awards.",
    speaker: {
      name: "TBA",
      role: "Product Designer",
      topic: "From Sketch to Product",
      bio: "Details coming soon.",
      image: "/camp_imgs/speakers/mary_gibson.jpg"
    },
    images: [
      "/camp_imgs/cards/session3/1.jpg",
      "/camp_imgs/cards/session3/2.jpg",
      "/camp_imgs/cards/session3/3.jpg",
      "/camp_imgs/cards/session3/4.jpg",
      "/camp_imgs/cards/session3/5.jpg",
    ],
    color: "#FFBF00"
  },
  {
    id: "session4",
    title: "Pitch Mastery & Storytelling",
    date: "July 2nd, 2025",
    location: "Northwestern University, Evanston",
    description: "In Session 4, students will master the art of pitching and storytelling. Through intensive practice sessions and feedback from experienced entrepreneurs, they'll develop compelling narratives for their ventures. A pitch competition with over $250 in prizes helps students prepare for the upcoming Fish Tank finals.",
    speaker: {
      name: "TBA",
      role: "Startup Founder",
      topic: "The Power of Your Story",
      bio: "Details coming soon.",
      image: "/camp_imgs/speakers/athena_chen.png"
    },
    images: [
      "/camp_imgs/cards/session4/1.jpg",
      "/camp_imgs/cards/session4/2.jpg",
      "/camp_imgs/cards/session4/3.png",
      "/camp_imgs/cards/session4/4.jpg",
      "/camp_imgs/cards/session4/5.jpg",
    ],
    color: "#E69F16"
  },
  {
    id: "session5",
    title: "Financial Strategy & Sustainability",
    date: "July 9th, 2025",
    location: "Northwestern University, Evanston",
    description: "In Session 5, students explore financial planning, budgeting, and sustainable business models. They'll learn how to create financial projections and understand key business metrics. The session includes a business plan competition with $200 in prizes as students finalize their Fish Tank preparations.",
    speaker: {
      name: "TBA",
      role: "CFO & Financial Advisor",
      topic: "Building Profitable & Sustainable Ventures",
      bio: "Details coming soon.",
      image: "/camp_imgs/speakers/eddie_yoon.jpg"
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
    color: "#CD8F20"
  },
];

export default function Camps2025Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#CD8F20] via-[#E69F16] to-[#FFBF00] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Link href="/camps" className="text-amber-100 hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                2024 Camps
              </Link>
              <span className="text-amber-100">•</span>
              <Link href="/years" className="text-amber-100 hover:text-white transition-colors">
                All Seasons
              </Link>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              2025 Summer Camps
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mb-8">
              An enhanced 5-week entrepreneurship program at Northwestern University, empowering the next generation of innovators and changemakers.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-sm text-amber-100">Duration</div>
                <div className="text-2xl font-bold text-white">5 Weeks</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-sm text-amber-100">Students</div>
                <div className="text-2xl font-bold text-white">120+</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-sm text-amber-100">Location</div>
                <div className="text-2xl font-bold text-white">Northwestern</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sessions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#000000] mb-4">
              Camp Sessions
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Five intensive weeks of entrepreneurship education, hands-on activities, and mentorship from industry leaders.
            </p>
          </div>

          <div className="space-y-16">
            {sessions.map((session, idx) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                style={{ borderTop: `4px solid ${session.color}` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: session.color, color: '#000000' }}>
                      Session {idx + 1}
                    </div>
                    <h3 className="text-3xl font-bold text-[#000000] mb-4">{session.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {session.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {session.location}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-8">{session.description}</p>

                    {/* Speaker */}
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-lg font-semibold text-[#000000] mb-4">Featured Speaker</h4>
                      <div className="flex items-start gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                          <Image src={session.speaker.image} alt={session.speaker.name} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#000000]">{session.speaker.name}</div>
                          <div className="text-sm text-gray-600 mb-2">{session.speaker.role}</div>
                          <div className="text-sm font-medium" style={{ color: session.color }}>{session.speaker.topic}</div>
                          <p className="text-sm text-gray-600 mt-2">{session.speaker.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Images */}
                  <div className="p-8 lg:p-12">
                    <div className="grid grid-cols-2 gap-4">
                      {session.images.map((img, imgIdx) => (
                        <motion.div
                          key={imgIdx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: imgIdx * 0.05 }}
                          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                          className={`relative rounded-lg overflow-hidden ${imgIdx === 0 ? 'col-span-2 h-64' : 'h-48'}`}
                        >
                          <Image src={img} alt={`${session.title} - Image ${imgIdx + 1}`} fill className="object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#CD8F20] to-[#FFBF00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Us in 2025?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Applications for our 2025 Summer Camps will open in Spring 2025.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/years/2025" className="px-8 py-4 bg-white text-[#CD8F20] font-semibold rounded-lg hover:shadow-lg transition-all">
                View Full 2025 Season
              </Link>
              <Link href="/fish-tank-2025" className="px-8 py-4 bg-white/20 text-white border border-white/30 font-semibold rounded-lg hover:bg-white/30 transition-all">
                2025 Fish Tank Competition
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

