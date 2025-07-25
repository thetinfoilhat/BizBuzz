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
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-[#f9fafb] to-transparent"></div>
        
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-[#3AB6FF]/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#FFD700]/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Team</h2>
            <p className="text-lg md:text-xl text-black max-w-4xl mx-auto">
              BizBuzz is powered by a dedicated team of student leaders, entrepreneurs, and educators
              committed to fostering the next generation of business innovators.
            </p>
          </motion.div>
          
          {/* Co-Founders */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-center text-black">
                <span className="inline-block relative">
                  Co-Founders
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD700]"></div>
                </span>
              </h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <TeamMember
                key={1}
                image={`/team/Allen.png`}
                name="Allen Xu"
                role="President & Co-Founder"
                description="Allen is a junior at Naperville North HS interested in social innovation and finance. A three-time international finalist in entrepreneurship competitions like the Conrad Challenge & Blue Ocean Competition, and grand winner of the 2025 Harvard International Economics Essay Competition, he hopes to use what he has learned to help younger students turn imagination into innovation. As a kid, Allen spent winters watching Shark Tank and summers running lemonade stands in his cul-de-sac. After discovering that 90% of K–8 schools in Naperville do not offer business classes, he co-founded BizBuzz with Aarav—alongside other EdTech platforms—to help students like him find their ideas and the courage to share them."
                large={true}
                index={0}
              />
              <TeamMember
                key={2}
                image={`/team/Aarav.png`}
                name="Aarav Khullar"
                role="Vice President & Co-Founder"
                description="Aarav is a junior at Naperville North HS with a passion for business and fostering youth entrepreneurship. Growing up watching Shark Tank with his dad, he always dreamed of starting a high-quality business but never had any opportunities or support to do so. Seeing this same disparity affect hundreds of other young students in his community, he co-founded BizBuzz with one of his best friends, Allen, to give elementary & middle schoolers the kind of opportunity he never had. Now, as a startup founder himself, internationally awarded by the Walt Disney Company for his leadership, and named a Top 100 Emerging Innovator of 2025, Aarav hopes to translate the skills he's learned to empower the youth."
                large={true}
                index={1}
                customPosition="40% center"
              />
            </div>
          </div>
          
          {/* Executive Directors */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-center text-black">
                <span className="inline-block relative">
                  Executive Directors
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#3AB6FF]"></div>
                </span>
              </h3>
            </motion.div>
            
            {/* First row - 3 directors */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-10">
              <ExecutiveCard
                key={1}
                name="Eddy Wang"
                initials="EW"
                description="Eddy is a dedicated leader with a passion for entrepreneurship and youth education. With exceptional organizational skills, he coordinates BizBuzz initiatives to reach students across Naperville, creating meaningful learning opportunities and inspiring future business leaders."
                index={0}
              />
              <ExecutiveCard
                key={2}
                name="Steven He"
                initials="SH"
                description="Steven combines his engineering background with entrepreneurial vision to mentor young innovators. His creative approach to problem-solving and project-based learning helps students develop practical skills while exploring their own business ideas and building confidence through hands-on experience."
                index={1}
              />
              <ExecutiveCard
                key={3}
                name="Taksh Taware"
                initials="TT"
                description="Taksh brings fresh perspectives and leadership experience to the BizBuzz team. Having successfully raised funding for his own ventures, he mentors students through the entrepreneurial process, from ideation to execution, helping them transform creative concepts into viable business opportunities with real-world impact."
                index={2}
              />
            </div>
            
            {/* Second row - 2 CTOs centered */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
              <ExecutiveCard
                key={4}
                name="Arnav Sharma"
                initials="AS"
                description="Arnav leverages his expertise in technology and data science to create innovative educational platforms for young entrepreneurs. His technical knowledge and creative problem-solving abilities help streamline BizBuzz operations and develop digital resources that enhance the learning experience for students exploring business concepts."
                index={3}
              />
              <ExecutiveCard
                key={5}
                name="Aiden Xie"
                initials="AX"
                description="Aiden specializes in developing technical solutions that make entrepreneurship education accessible and engaging. His innovative approach to educational technology helps BizBuzz create interactive learning experiences, enabling students to better understand complex business concepts through intuitive digital tools and creative programming."
                index={4}
              />
            </div>
          </div>
          
          {/* Leadership Team */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-center text-black">
                <span className="inline-block relative">
                  Leadership Team
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD700]"></div>
                </span>
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Abby May",
                  description: "Abby is a sophomore at Naperville North passionate about business and leadership. She brings creative energy and innovative ideas to help students discover their entrepreneurial potential."
                },
                {
                  name: "Beau Danso",
                  description: "Beau brings enthusiasm and fresh perspectives to the BizBuzz team. Her innovative approaches to student engagement make learning both fun and impactful."
                },
                {
                  name: "Ca Van",
                  description: "Ca is dedicated to fostering entrepreneurial skills in young students. With a background in project management, she helps structure and organize BizBuzz's initiatives."
                },
                {
                  name: "Colin Singer",
                  description: "Colin is a junior at Neuqua Valley with a passion for business and law. He hopes to inspire creativity and innovation in all students he works with."
                },
                {
                  name: "Elena Kang Chou",
                  description: "Elena brings creativity and enthusiasm to the team. She's passionate about helping young students develop their entrepreneurial mindset and problem-solving abilities."
                },
                {
                  name: "Ethan Brock",
                  description: "Ethan combines his love for innovation with teaching. He focuses on helping students discover their entrepreneurial potential and develop business solutions."
                },
                {
                  name: "Lakhi Thotakura",
                  description: "Lakhi is passionate about public health and marketing. She brings her diverse interests to help students explore different aspects of business and entrepreneurship."
                },
                {
                  name: "Max Nadtochiy",
                  description: "Max brings his expertise in literature and business to BizBuzz. He's dedicated to helping students become better learners and reach their full potential."
                },
                {
                  name: "Melody Hu",
                  description: "Melody is excited to inspire young entrepreneurs in our community. She brings fresh perspectives and creative approaches to business education."
                },
                {
                  name: "Nimra Siddiqui",
                  description: "Nimra combines her interests in medicine and education to help students develop valuable skills. She loves mentoring others to achieve their potential."
                },
                {
                  name: "Sarah Haque",
                  description: "Sarah is passionate about bioengineering and business. She brings her technical knowledge to help students understand the intersection of STEM and entrepreneurship."
                },
                {
                  name: "Shyam Sahani",
                  description: "Shyam specializes in finance and accounting. As a returning BizBuzz member, he's excited to share his knowledge and experience with new students."
                },
                {
                  name: "Zoha Ahmad",
                  description: "Zoha brings fresh perspectives as a former BizBuzz camp participant. She's passionate about giving back to the program and helping new students succeed."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-[#003166]/10 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-black mb-2">{member.name}</h4>
                  <p className="text-[#3AB6FF] text-sm mb-3">Leadership Team</p>
                  <p className="text-black/80 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Instructors */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-center text-black">
                <span className="inline-block relative">
                  Instructors
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#3AB6FF]"></div>
                </span>
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Onkar Lidder",
                  description: "Onkar brings technical expertise and innovative teaching methods to BizBuzz. He's passionate about making complex business concepts accessible to young learners."
                },
                {
                  name: "Abhinav Byju",
                  description: "Abhinav combines his interests in science and entrepreneurship to help students explore the intersection of STEM and business innovation."
                },
                {
                  name: "Anay Apte",
                  description: "Anay is dedicated to fostering creativity and critical thinking in young entrepreneurs. He brings energy and enthusiasm to every session."
                },
                {
                  name: "Ankita Senapati",
                  description: "Ankita is passionate about financial literacy and youth empowerment. She brings her experience from hosting workshops to help students succeed."
                },
                {
                  name: "Annabelle Cheng",
                  description: "Annabelle combines creativity with strategic thinking to help students develop their business ideas and entrepreneurial skills."
                },
                {
                  name: "Ansh Shah",
                  description: "Ansh is passionate about STEM and entrepreneurship. He focuses on helping students build practical skills for their future ventures."
                },
                {
                  name: "Ben Gula",
                  description: "Ben brings his passion for aviation and business to BizBuzz. He enjoys helping students explore unique perspectives in entrepreneurship."
                },
                {
                  name: "Elizabeth Gao",
                  description: "Elizabeth is dedicated to helping students develop their business acumen. She brings creativity and structure to her teaching approach."
                },
                {
                  name: "Hadley Benson",
                  description: "Hadley combines her love for innovation with effective teaching methods. She's passionate about fostering the next generation of entrepreneurs."
                },
                {
                  name: "Wes Karubas",
                  description: "Wes brings his entrepreneurial experience from running his own ventures to help inspire and guide young business minds."
                },
                {
                  name: "Yuju Cho",
                  description: "Yuju is passionate about helping students discover their potential in business. She brings fresh perspectives to entrepreneurship education."
                },
                {
                  name: "Zahra Moosani",
                  description: "Zahra combines creativity with organization to make learning engaging. She's dedicated to helping students discover their entrepreneurial potential."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-[#003166]/10 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-black mb-2">{member.name}</h4>
                  <p className="text-[#3AB6FF] text-sm mb-3">Instructor</p>
                  <p className="text-black/80 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Youth Leadership Team */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-center text-black">
                <span className="inline-block relative">
                  Youth Leadership Team
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD700]"></div>
                </span>
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Vivaan Khullar",
                  description: "Vivaan brings enthusiasm and fresh perspectives to the team. He's eager to help young students develop their entrepreneurial skills and creative thinking."
                },
                {
                  name: "Evan Xu",
                  description: "Evan combines his interest in mathematics and statistics with business concepts to help students approach challenges logically."
                },
                {
                  name: "Mishi Patel",
                  description: "Mishi is passionate about innovation and youth leadership. She brings creative energy to help students explore their entrepreneurial ideas."
                },
                {
                  name: "Ethan Nie",
                  description: "Ethan focuses on helping students understand the practical aspects of business. He brings enthusiasm and clear communication to every session."
                },
                {
                  name: "Jazzy Soodan",
                  description: "Jazzy is dedicated to helping students discover their passion for business. She brings energy and creative thinking to the BizBuzz program."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-[#003166]/10 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-semibold text-black mb-2">{member.name}</h4>
                  <p className="text-[#3AB6FF] text-sm mb-3">Youth Leadership</p>
                  <p className="text-black/80 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
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
  customPosition = '',
  centerText = false,
  larger = false
}: { 
  image: string, 
  name: string, 
  role: string, 
  description: string, 
  large?: boolean, 
  index: number,
  imagePosition?: 'center' | 'right' | 'left',
  customPosition?: string,
  centerText?: boolean,
  larger?: boolean
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
      className={`bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 group hover:shadow-xl transition-all duration-300 h-full ${larger ? 'shadow-xl' : ''}`}
    >
      {large ? (
        // Co-founders layout (horizontal)
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden bg-slate-50">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3AB6FF]/20 to-[#FFD700]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
            
            {/* Placeholder background */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: generatePlaceholderColor() }}>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className={`font-bold text-white opacity-70 ${larger ? 'text-6xl' : 'text-5xl'}`}>{initials}</div>
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
          
          <div className={`p-4 md:p-5 md:w-1/2 ${centerText ? 'text-center' : ''} ${larger ? 'p-6 md:p-7' : ''}`}>
            <h4 className={`font-bold text-black mb-1 ${larger ? 'text-xl md:text-2xl' : 'text-lg'}`}>{name}</h4>
            {role && <p className="text-[#3AB6FF] text-xs font-medium mb-2">{role}</p>}
            <p className={`text-black leading-relaxed ${larger ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>{description || "Coming soon"}</p>
          </div>
        </div>
      ) : (
        // Executive team layout (vertical)
        <div className="flex flex-col h-full">
          <div className={`aspect-square w-full relative overflow-hidden bg-slate-50 ${larger ? 'aspect-[4/3]' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#3AB6FF]/20 to-[#FFD700]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
            
            {/* Placeholder background */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: generatePlaceholderColor() }}>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className={`font-bold text-white opacity-70 ${larger ? 'text-6xl' : 'text-5xl'}`}>{initials}</div>
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
          
          <div className={`flex-grow flex flex-col ${centerText ? 'items-center text-center' : ''} ${larger ? 'p-6' : 'p-4'}`}>
            <h4 className={`font-bold text-black mb-1 ${larger ? 'text-xl' : 'text-base'}`}>{name}</h4>
            {role && <p className="text-[#3AB6FF] text-xs font-medium mb-2">{role}</p>}
            <p className={`text-black ${larger ? 'text-sm leading-relaxed' : 'text-xs'}`}>{description || "Coming soon"}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Executive Card Component
function ExecutiveCard({ name, initials, description, index }: { name: string, initials: string, description: string, index: number }) {
  // Generate a gradient based on initials
  const getGradient = () => {
    const colors = [
      'from-[#3AB6FF] to-[#0066cc]',
      'from-[#FFD700] to-[#FFA500]',
      'from-[#4CAF50] to-[#2E7D32]',
      'from-[#9C27B0] to-[#673AB7]',
      'from-[#FF5722] to-[#E91E63]'
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300"
    >
      <div className="p-6 flex flex-col items-center text-center">
        {/* Name with large initials */}
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getGradient()} flex items-center justify-center mb-4 shadow-md`}>
          <span className="text-xl font-bold text-white">{initials}</span>
        </div>
        
        <h4 className="text-lg font-bold text-black mb-3">{name}</h4>
        
        <p className="text-black/80 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
} 