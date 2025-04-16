"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Redesigned to match other pages */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about/background.jpg" 
            alt="BizBuzz Hero" 
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#0c1d3d]/90 to-[#0c1d3d]/65"
          />
          
          {/* Wave decoration at bottom - moved lower to avoid covering faces */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
              <path fill="#ffffff" fillOpacity="0.95" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
            </svg>
          </div>
          
          {/* Floating light elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ 
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 - 50 + "%",
                opacity: Math.random() * 0.5 + 0.1 
              }}
              animate={{ 
                x: [
                  Math.random() * 100 - 50 + "%",
                  Math.random() * 100 - 50 + "%"
                ],
                y: [
                  Math.random() * 100 - 50 + "%",
                  Math.random() * 100 - 50 + "%"
                ]
              }}
              transition={{ 
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                background: i % 3 === 0 
                  ? "radial-gradient(circle, #3AB6FF 0%, rgba(58, 182, 255, 0) 70%)" 
                  : i % 3 === 1 
                    ? "radial-gradient(circle, #FFD700 0%, rgba(255, 215, 0, 0) 70%)" 
                    : "radial-gradient(circle, #ffffff 0%, rgba(255, 255, 255, 0) 70%)",
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 -mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 mx-auto relative w-20 h-20"
            >
              <div className="absolute inset-0 rounded-full bg-[#3AB6FF] opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-[#3AB6FF] opacity-10 animate-pulse" style={{ animationDelay: "300ms" }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#FFD700]">
                  <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z" />
                </svg>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-white"
            >
              About <span className="text-[#3AB6FF]">Biz</span><span className="text-[#FFD700]">Buzz</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-xl md:text-2xl font-bold mb-12 text-white"
            >
              Turning <span className="text-[#FFD700]">imagination</span> into <span className="text-[#3AB6FF]">innovation</span> via social entrepreneurship
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <ScrollIndicator />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section with enhanced animations */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1d3d]/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-64 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#3AB6FF]"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -30 - 10],
                opacity: [0.2, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-16 text-center relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block relative"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black relative inline-block">
                  Our Mission
                </h2>
                
                <motion.div 
                  className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#3AB6FF] via-[#FFD700] to-[#3AB6FF]"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                />
              </motion.div>
            </div>
            
            <div className="space-y-8">
              <MissionParagraph animationDelay={0.1}>
                BizBuzz is founded on the belief that every student deserves to have access to entrepreneurial education that brings their ideas—and their ingenuity—to life. Across the nation, especially in the city of Naperville, youth entrepreneurship programs are inaccessible and inadequate. Business education is rarely prioritized in elementary & middle schools, yet it equips students with much-needed critical thinking and problem-solving skills that last a lifetime. The next generation of innovators and leaders has the capability of sparking monumental change, but far too few of them have a platform to actually do so.
              </MissionParagraph>
              
              <MissionParagraph animationDelay={0.3} highlight={true}>
                In April 2024, we set out to fix that.
              </MissionParagraph>
              
              <MissionParagraph animationDelay={0.5}>
                From free camps to professional pitch competitions to webinars to workshops, we organize programs that bring together business professionals, government leaders, student entrepreneurs, and families in Naperville & beyond. As a 100% student-run and student-led organization, we offer more than just a talented ensemble of high school instructors. We offer a program that has been tirelessly crafted to optimize student outcomes and promoted to create communal change—entirely for students, by students. And we&apos;re just getting started. We hope
              </MissionParagraph>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Coverage Section - Moved up to replace stats section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute rounded-full"
                style={{
                  backgroundColor: i % 2 === 0 ? '#3AB6FF' : '#FFD700',
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-16 text-center"
          >
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-black relative inline-block">
                In The News
              </h2>
            </div>
            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-lg text-black">Our journey has been featured by local media, highlighting our commitment to fostering entrepreneurship in students throughout Naperville and beyond.</p>
            </div>
          </motion.div>
          
          {/* NCTV17 Interview */}
          <InterviewFeature 
            title="Naperville Channel Television 17 Interview"
            description="At Camp Session 5 and during the Fish Tank competition, BizBuzz had the honor of welcoming Jesus Cortez and the Naperville Channel Television 17 team to join us. They conducted interviews and helped share our story with the broader community, capturing the passion, creativity, and entrepreneurial spirit that defined this year's camp and competition."
            links={[
              {
                text: "Naperville North Juniors Hold Youth Entrepreneurship Camp for Students",
                url: "https://www.nctv17.org/news/naperville-north-juniors-hold-youth-entrepreneurship-camp-for-students/"
              }
            ]}
            videoEmbedUrl="https://www.youtube.com/embed/TmrK8-sFFkA?si=me3a8za4ccfFF4Yq"
            imagePosition="right"
            index={0}
          />

          {/* Daily Herald Interview */}
          <InterviewFeature 
            title="Daily Herald Interview"
            description="During the Madison Junior High mxINCedu mentorship program, we had the opportunity to be interviewed by the Daily Herald. We discussed the importance of youth entrepreneurship—especially in Naperville, where over 90% of K–8 students lack access to business education in school."
            images={["/about/daily.jpg", "/about/madi.png"]}
            imagePosition="left"
            index={1}
          />
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-24 bg-[#f9fafb] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Our Goals</h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              At BizBuzz, we aspire to transform the landscape of youth entrepreneurship through these foundational goals:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <GoalCardNew 
              title="Foster High-Demand Skills"
              description="To foster high-demand business skills through real world, project-based learning opportunities."
              icon="business"
              color="#3AB6FF"
              index={0}
            />
            <GoalCardNew 
              title="Enhance Confidence"
              description="To enhance young students' confidence in communication and leadership, preparing them for success in high school & beyond."
              icon="confidence"
              color="#FFD700"
              index={1}
            />
            <GoalCardNew 
              title="Promote Teamwork"
              description="To promote teamwork, collaborative problem-solving, and community engagement."
              icon="teamwork"
              color="#3AB6FF"
              index={2}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12 max-w-[calc(100%*2/3)] mx-auto">
            <GoalCardNew 
              title="Inspire Entrepreneurs"
              description="To inspire the next generation of entrepreneurs."
              icon="inspire"
              color="#FFD700"
              index={3}
            />
            <GoalCardNew 
              title="Innovate Solutions"
              description="To innovate tomorrow's solutions for today's problems."
              icon="innovate"
              color="#3AB6FF"
              index={4}
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-[#f9fafb] to-transparent"></div>
        
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-[#3AB6FF]/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#FFD700]/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Team</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              BizBuzz is powered by a dedicated team of student leaders, entrepreneurs, and educators
              committed to fostering the next generation of business innovators.
            </p>
          </motion.div>
          
          {/* Co-Founders */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-center text-black">
                <span className="inline-block relative">
                  Co-Founders
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD700]"></div>
                </span>
              </h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <TeamMember
                key={1}
                image={`/team/Allen.png`}
                name="Allen Xu"
                role="Co-Founder & Owner"
                description="Allen is a junior at Naperville North HS interested in social innovation and finance. A three-time international finalist in entrepreneurship competitions like the Conrad Challenge & Blue Ocean Competition, and grand winner of the 2025 Harvard International Economics Essay Competition, he hopes to use what he has learned to help younger students turn imagination into innovation. As a kid, Allen spent winters watching Shark Tank and summers running lemonade stands in his cul-de-sac. After discovering that 90% of K–8 schools in Naperville do not offer business classes, he co-founded BizBuzz with Aarav—alongside other EdTech platforms—to help students like him find their ideas and the courage to share them."
                large={true}
                index={0}
              />
              <TeamMember
                key={2}
                image={`/team/Aarav.png`}
                name="Aarav Khullar"
                role="Co-Founder"
                description="Aarav is a junior at Naperville North HS with a passion for business and fostering youth entrepreneurship. Growing up watching Shark Tank with his dad, he always dreamed of starting a high-quality business but never had any opportunities or support to do so. Seeing this same disparity affect hundreds of other young students in his community, he co-founded BizBuzz with one of his best friends, Allen, to give elementary & middle schoolers the kind of opportunity he never had. Now, as a startup founder himself, internationally awarded by the Walt Disney Company for his leadership, and named a Top 100 Emerging Innovator of 2025, Aarav hopes to translate the skills he's learned to empower the youth."
                large={true}
                index={1}
                customPosition="40% center"
              />
            </div>
          </div>
          
          {/* Executive Team */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-center text-black">
                <span className="inline-block relative">
                  Executive Team
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#3AB6FF]"></div>
                </span>
              </h3>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <TeamMember
                key={1}
                image={`/team/Eddy.png`}
                name="Eddy Wang"
                role="Executive Director"
                description="Eddy Wang is an accomplished student leader with a passion for entrepreneurship and innovation. With his strong organizational skills and vision for youth business education, he helps guide BizBuzz's initiatives to reach more students across Naperville."
                index={0}
              />
              <TeamMember
                key={2}
                image={`/team/Arnav.jpg`}
                name="Arnav Sharma"
                role="CTO & Executive Team"
                description="Arnav Sharma is a junior at Naperville North HS passionate about using technology and data science to create opportunities for young aspiring entrepreneurs. With his friends, he built Shadowed.me, a platform connecting 2.1K students to high school clubs and events, and decademy.app, a DECA study tool used by 1000+ students that has generated $5.1K in revenue."
                index={1}
              />
              <TeamMember
                key={3}
                image={`/team/Aiden.jpg`}
                name="Aiden Xie"
                role="Executive Team"
                description="Annabelle is a sophomore at Neuqua Valley High School who's strengths are music and math. She loves working with kids and is pumped to start teaching them how to get super rich!!!"
                index={2}
              />
              <TeamMember
                key={4}
                image={`/team/Beau.jpg`}
                name="Beau Danso"
                role="Executive Team"
                description="Beau brings energy and creative thinking to the BizBuzz team. Her innovative approaches to programming and student engagement help make our educational experiences both fun and impactful."
                index={3}
              />
              <TeamMember
                key={5}
                image={`/team/Abby.jpg`}
                name="Abby May"
                role="Executive Team"
                description="Abby is a sophomore at Naperville North High School with a strong interest in business, leadership, and community impact. She's excited to work with other students and help them explore their own skills and passions."
                index={4}
              />
              <TeamMember
                key={6}
                image={`/team/Lakhi.jpg`}
                name="Lakhi Thotakura"
                role="Executive Team"
                description="Lakhi is a sophomore at Naperville North who hopes to pursue public health or marketing. She can't wait to help students explore business and find their passion!"
                index={5}
              />
            </div>
          </div>
          
          {/* Past Executive Leaders */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-center text-black">
                <span className="inline-block relative">
                  Past Executive Directors
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3AB6FF] to-[#FFD700]"></div>
                </span>
              </h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TeamMember
                key={1}
                image={`/team/Steven.jpg`}
                name="Steven He"
                role="2024 Executive Director"
                description="Steven is a junior at Neuqua Valley HS interested in engineering and entrepreneurship. Growing up building legos and running his own YouTube channel, he's excited to connect with students, help them explore their own creative ideas, and create projects bigger than themselves."
                index={0}
              />
              <TeamMember
                key={2}
                image={`/team/Ansh.jpg`}
                name="Ansh Shah"
                role="2024 Executive Director"
                description="Ansh is a graduating senior at Neuqua Valley HS passionate about the intersection of STEM and entrepreneurship. He plans on studying mathematics, computer science, and economics in college and hopes to use his background to build tools that help make entrepreneurship more accessible for all."
                index={1}
              />
            </div>
          </div>
          
          {/* Senior Instructors */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-center text-black">
                <span className="inline-block relative">
                  Senior Instructors
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD700]"></div>
                </span>
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <InstructorProfile
                key={1}
                image={`/team/Ankita.jpg`}
                name="Ankita Senapati"
                role="Senior Instructor"
                description="Ankita is a graduating senior at Neuqua Valley and loves empowering kids to do better in their everyday lives. After hosting financial literacy workshops around the city, she hopes to carry her same positive energy to BizBuzz."
                index={0}
              />
              <InstructorProfile
                key={2}
                image={`/team/Wes.jpg`}
                name="Wes Karubas"
                role="Senior Instructor"
                description="Wes is a junior at Neuqua Valley and is looking to play soccer as well as studying finance or accounting in college. He has a growing desire to learn entrepreneurship which started from a lemonade stand he started when he was a kid."
                index={1}
              />
              <InstructorProfile
                key={3}
                image={`/team/Ben.jpg`}
                name="Ben Gula"
                role="Senior Instructor"
                description="Ben is a junior at Neuqua Valley HIgh School looking to fly high and pursue a career in aviation. He enjoys filming fun Tiktok's, trying new foods, and fostering leadership skills with other students."
                index={2}
              />
              <InstructorProfile
                key={4}
                image={`/team/Colin.jpg`}
                name="Colin Singer"
                role="Senior Instructor"
                description="Colin is a junior at Neuqua Valley High School who is interested in business and law. Colin hopes his passion for creativity in business will inspire all who he works with."
                index={3}
              />
              <InstructorProfile
                key={5}
                image={`/team/Sanj.jpg`}
                name="Sanj Gurram"
                role="Senior Instructor"
                description="Sanj brings enthusiasm and fresh ideas to the BizBuzz team. With a background in student leadership, he's eager to help young entrepreneurs develop their skills."
                index={4}
              />
              <InstructorProfile
                key={6}
                image={`/team/Zahra.jpg`}
                name="Zahra Moosani"
                role="Senior Instructor"
                description="Zahra is passionate about helping students discover their entrepreneurial potential. She brings creativity and organization to the BizBuzz program."
                index={5}
              />
              <InstructorProfile
                key={7}
                image={`/team/Shyam.jpg`}
                name="Shyam Sahani"
                role="Senior Instructor"
                description="Shyam Sahani is a junior at Neuqua Valley interested in finance and accounting, he is a returning member of BizBuzz and is looking forward to meeting and teaching everyone this year."
                index={6}
              />
              <InstructorProfile
                key={8}
                image={`/team/Max.jpg`}
                name="Max Nadtochiy"
                role="Senior Instructor"
                description="Max is a junior at Neuqua Valley who is interested in literature and business. He's excited to help students reach their full potential and become better learners."
                index={7}
              />
            </div>
          </div>
          
          {/* Instructors */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-center text-black">
                <span className="inline-block relative">
                  Instructors
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#3AB6FF]"></div>
                </span>
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <InstructorProfile
                key={1}
                image={`/team/Melody.jpg`}
                name="Melody Hu"
                role="Instructor"
                description="Melody Hu is a sophomore @ Naperville North and is honored to part of BizBuzz this year and is super excited to inspire young entrepreneurs in our community."
                index={0}
              />
              <InstructorProfile
                key={2}
                image={`/team/Sarah.jpg`}
                name="Sarah Haque"
                role="Instructor"
                description="Sarah is a junior or Neuqua Valley interested in bioengineering and business. She's passionate about education and can't wait to work with students and help them grow as entrepreneurs."
                index={1}
              />
              <InstructorProfile
                key={3}
                image={`/team/Nimra.jpg`}
                name="Nimra Siddiqui"
                role="Instructor"
                description="Nimra is a junior @ Neuqua Valley high school interested in medicine and fostering valuable skills in those younger than her. From a young age, she loved to learn new things and mentor others. She's excited to inspire young minds and help them achieve their greatest potential."
                index={2}
              />
              <InstructorProfile
                key={4}
                image={`/team/Ethan.jpg`}
                name="Ethan Brock"
                role="Instructor"
                description="Ethan brings energy and fresh ideas to BizBuzz. He's passionate about helping students discover their entrepreneurial potential."
                index={3}
              />
              <InstructorProfile
                key={5}
                image={`/team/Taksh.jpg`}
                name="Taksh Taware"
                role="Instructor"
                description="Taksh is excited to help students develop their business skills and innovation mindset through BizBuzz's hands-on learning approach."
                index={4}
              />
              <InstructorProfile
                key={6}
                image={`/team/Abhinav.jpg`}
                name="Abhinav Byju"
                role="Instructor"
                description="Abhinav is a Neuqua Valley freshman interested in science and entrepreneurship. He's excited to help students build their businesses."
                index={5}
              />
              <InstructorProfile
                key={7}
                image={`/team/Elena.jpg`}
                name="Elena Kang-Chou"
                role="Instructor"
                description="Elena brings creativity and enthusiasm to the BizBuzz team. She's passionate about helping young students develop their entrepreneurial mindset."
                index={6}
              />
              <InstructorProfile
                key={8}
                image={`/team/Jazzy.jpg`}
                name="Jazzy Soodan"
                role="Instructor"
                description="Jazzy is dedicated to helping students discover their passion for business and entrepreneurship. She brings energy and creative thinking to the BizBuzz program."
                index={7}
              />
              <InstructorProfile
                key={9}
                image={`/team/Zoha.jpg`}
                name="Zoha Ahmad"
                role="Instructor"
                description="Zoha is an incoming freshman at Naperville Central who is interested in medicine. She was also a student at BizBuzz's 2024 summer camp & is excited to give back to the program that gave her so much."
                index={8}
              />
              <InstructorProfile
                key={10}
                image={`/team/Evan.jpg`}
                name="Evan Xu"
                role="Instructor"
                description="Evan is an incoming freshman at Neuqua Valley High School. He is interested in math and statistics, excited to help students logically."
                index={9}
              />
              <InstructorProfile
                key={11}
                image={`/team/Vivaan.jpg`}
                name="Vivaan Khullar"
                role="Instructor"
                description="Vivaan brings enthusiasm and fresh perspectives to the BizBuzz team. He's eager to help young students develop their entrepreneurial skills."
                index={10}
              />
            </div>
          </div>

          {/* Note about placeholder images */}
          <div className="mt-16 text-center text-sm text-gray-500">
            <p>Note: Add team member photos to the /public/team/ directory using the following naming convention:</p>
            <ul className="mt-2 space-y-1">
              <li>Co-founders: Allen.png, Aarav.png (existing)</li>
              <li>Executive Leaders: Eddy.png (existing), Arnav.jpg, Annabelle.jpg, Beau.jpg, Abby.jpg, Lakhi.jpg</li>
              <li>Past Leaders: Steven.jpg, Ansh.jpg</li>
              <li>Senior Instructors: Ankita.jpg, Wes.jpg, Ben.jpg, Colin.jpg, Sanj.jpg, Zahra.jpg, Shyam.jpg, Max.jpg</li>
              <li>Instructors: Melody.jpg, Sarah.jpg, Nimra.jpg, Ethan.jpg, Taskh.jpg, Abhinav.jpg, Elena.jpg, Jazzy.jpg, Zoha.jpg, Evan.jpg, Vivaan.jpg</li>
            </ul>
            <p className="mt-2">Images should be square format, ideally 500x500 pixels or larger for best quality.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Scroll Indicator Component
function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <motion.div 
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.8, 0.2, 0.8]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          className="w-1.5 h-1.5 bg-white rounded-full mt-2"
        ></motion.div>
      </div>
    </div>
  );
}

// MissionParagraph Component with enhanced lightbulb hover effect
function MissionParagraph({ 
  children, 
  animationDelay = 0, 
  highlight = false 
}: { 
  children: React.ReactNode, 
  animationDelay?: number,
  highlight?: boolean
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: animationDelay }}
      viewport={{ once: true }}
      className={`relative rounded-2xl p-7 shadow-lg border ${
        highlight 
          ? 'bg-gradient-to-r from-[#0c1d3d]/10 via-[#FFD700]/15 to-[#0c1d3d]/10 border-[#FFD700]/30' 
          : 'bg-white/80 backdrop-blur-sm border-[#3AB6FF]/20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: highlight ? '2rem' : '1.5rem',
        transform: highlight ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      <div className="relative z-10">
        <p className={`leading-relaxed transition-all duration-500 ${
          isHovered ? 'text-[#3AB6FF]' : 'text-black'
        } ${highlight ? 'text-xl font-medium' : 'text-lg'}`}>
          {children}
        </p>
      </div>
      
      {isHovered && (
        <>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute -right-2 -top-2 w-10 h-10 flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                boxShadow: [
                  '0 0 5px #FFD700',
                  '0 0 15px #FFD700',
                  '0 0 5px #FFD700'
                ]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 2, repeat: Infinity }
              }}
              className="w-full h-full rounded-full flex items-center justify-center bg-white"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#FFD700]">
                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z" />
              </svg>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent -z-0 rounded-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0.95, 1.02, 0.95]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute inset-0 bg-[#FFD700]/5 -z-0 rounded-2xl"
          />
        </>
      )}

      {/* Decorative elements for non-hovered state */}
      {highlight && (
        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#FFD700]/10 rounded-full -z-10"></div>
      )}
      {!highlight && (
        <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#3AB6FF]/10 rounded-full -z-10"></div>
      )}
    </motion.div>
  );
}

// Interview Feature Component
interface Link {
  text: string;
  url: string;
}

interface InterviewFeatureProps {
  title: string;
  description: string;
  links?: Link[];
  videoEmbedUrl?: string;
  images?: string[];
  imagePosition: 'left' | 'right';
  index: number;
}

function InterviewFeature({ 
  title, 
  description, 
  links, 
  videoEmbedUrl, 
  images, 
  imagePosition,
  index
}: InterviewFeatureProps) {
  const contentDelay = index * 0.2;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: contentDelay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center mb-24`}
    >
      <div className="w-full lg:w-1/2 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: imagePosition === 'right' ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: contentDelay + 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black relative inline-block">
            {title}
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#3AB6FF]"></div>
          </h3>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: contentDelay + 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-black leading-relaxed"
        >
          {description}
        </motion.p>
        
        {links && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: contentDelay + 0.4 }}
            viewport={{ once: true }}
            className="space-y-3 pt-4"
          >
            {links.map((link, i) => (
              <motion.a 
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: "#f0f9ff",
                  color: "#3AB6FF"
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center px-5 py-3 bg-[#3AB6FF] text-white rounded-full shadow-sm border border-[#3AB6FF]/20 font-medium transition-all duration-300 text-center justify-center w-full md:w-auto"
              >
                <span className="text-base md:text-lg">{link.text}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
      
      <div className="w-full lg:w-1/2">
        {videoEmbedUrl ? (
          <div className="rounded-xl shadow-2xl overflow-hidden border-4 border-white">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe 
                src="https://www.youtube.com/embed/TmrK8-sFFkA?si=me3a8za4ccfFF4Yq" 
                title="Naperville North Juniors Hold Youth Entrepreneurship Camp" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="h-1 bg-[#3AB6FF] w-full"></div>
          </div>
        ) : images && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: contentDelay + 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((image, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md border-4 border-white"
              >
                <Image
                  src={image}
                  alt={`${title} image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// Goal Card New Component
function GoalCardNew({ title, description, icon, color, index, className = '' }: { title: string, description: string, icon: string, color: string, index: number, className?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate icon based on type
  const getIcon = () => {
    switch(icon) {
      case 'business':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
          </svg>
        );
      case 'confidence':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      case 'teamwork':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        );
      case 'inspire':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z" />
          </svg>
        );
      case 'innovate':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`bg-white p-8 rounded-xl shadow-lg relative overflow-hidden group h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: color }}></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-6">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ 
              backgroundColor: isHovered ? color : '#f3f4f6',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            <div className="w-8 h-8 text-current transition-all duration-300" style={{ color: isHovered ? 'white' : color }}>
              {getIcon()}
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
        <p className="text-black flex-grow">{description}</p>
      </div>
      
      <div 
        className="absolute -bottom-full right-0 w-60 h-60 rounded-full transition-all duration-500 ease-in-out opacity-10"
        style={{ 
          backgroundColor: color,
          transform: isHovered ? 'translate(20%, 60%)' : 'translate(20%, 100%)'
        }}
      ></div>
    </motion.div>
  );
}

// Team Member Component - For Co-founders and Executives
function TeamMember({ 
  image, 
  name, 
  role, 
  description, 
  large = false, 
  index = 0,
  imagePosition = 'center',
  customPosition = ''
}: { 
  image: string, 
  name: string, 
  role: string, 
  description: string, 
  large?: boolean, 
  index: number,
  imagePosition?: 'center' | 'right' | 'left',
  customPosition?: string
}) {
  // Generate a consistent color based on name
  const generatePlaceholderColor = () => {
    const colors = ['#3AB6FF', '#FFD700', '#0c1d3d'];
    return colors[Math.floor(name.length % colors.length)];
  };
  
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  // Helper function to determine the object-position value
  const getObjectPosition = () => {
    if (customPosition) return customPosition;
    if (imagePosition === 'right') return 'right center';
    if (imagePosition === 'left') return 'left center';
    return 'center'; // default
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 group hover:shadow-xl transition-all duration-300 h-full"
    >
      {large ? (
        // Co-founders layout (horizontal)
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden bg-slate-50">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3AB6FF]/20 to-[#FFD700]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
            
            {/* Placeholder background */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: generatePlaceholderColor() }}>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="text-5xl font-bold text-white opacity-70">{initials}</div>
                <div className="text-sm text-white mt-2 opacity-60">{role}</div>
              </div>
            </div>
            
            <Image 
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index < 2 || image === '/team/Eddy.png'}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              style={{ 
                objectPosition: getObjectPosition()
              }}
            />
          </div>
          
          <div className="p-4 md:p-5 md:w-1/2">
            <h4 className="text-lg font-bold text-black mb-1">{name}</h4>
            <p className="text-[#3AB6FF] text-xs font-medium mb-2">{role}</p>
            <p className="text-black leading-relaxed text-xs md:text-sm">{description || "Coming soon"}</p>
          </div>
        </div>
      ) : (
        // Executive team layout (vertical)
        <div className="flex flex-col h-full">
          <div className="aspect-square w-full relative overflow-hidden bg-slate-50">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3AB6FF]/20 to-[#FFD700]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
            
            {/* Placeholder background */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: generatePlaceholderColor() }}>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="text-5xl font-bold text-white opacity-70">{initials}</div>
                <div className="text-sm text-white mt-2 opacity-60">{role}</div>
              </div>
            </div>
            
            <Image 
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              style={{ 
                objectPosition: getObjectPosition()
              }}
            />
          </div>
          
          <div className="p-4 flex-grow flex flex-col">
            <h4 className="text-base font-bold text-black mb-1">{name}</h4>
            <p className="text-[#3AB6FF] text-xs font-medium mb-2">{role}</p>
            <p className="text-black text-xs">{description || "Coming soon"}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Instructor Profile Component - For compact instructor listings
function InstructorProfile({ 
  image, 
  name, 
  role, 
  description, 
  index = 0 
}: { 
  image: string, 
  name: string, 
  role: string, 
  description: string, 
  index: number 
}) {
  // Generate a consistent color based on name
  const generatePlaceholderColor = () => {
    const colors = ['#3AB6FF', '#FFD700', '#0c1d3d', '#4682B4', '#20B2AA'];
    return colors[Math.floor(name.length % colors.length)];
  };
  
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-square relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3AB6FF]/20 to-[#FFD700]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
        
        {/* Always have a beautiful placeholder */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: generatePlaceholderColor() }}>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="text-4xl font-bold text-white opacity-70">{initials}</div>
          </div>
        </div>
        
        <Image 
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {role === "Senior Instructor" && (
          <div className="absolute top-2 right-2 bg-[#FFD700] text-black text-xs px-2 py-1 rounded-full font-medium z-20 shadow-md">
            Senior
          </div>
        )}
      </div>
      
      <div className="p-3 flex-grow flex flex-col">
        <h4 className="font-bold text-black text-sm">{name}</h4>
        <p className="text-[#3AB6FF] text-xs font-medium mb-1">{role}</p>
        <p className="text-black text-xs line-clamp-3">{description || "Coming soon"}</p>
      </div>
    </motion.div>
  );
} 