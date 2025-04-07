"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

// Fish Tank photos
const fishTankPhotos = [
  "/program_cards/fishtank.jpg",
  "/hero_imgs/11.jpg",
  "/hero_imgs/13.jpg",
  "/hero_imgs/14.jpg",
];

// Preliminary judges
const prelimJudges = {
  title: "Preliminary Round Judges",
  description: "Our preliminary round judges evaluate all initial pitches and select the top ideas to advance to the final round. These experienced entrepreneurs and business leaders provide valuable feedback to help students refine their concepts and presentations. Each preliminary judge brings unique industry expertise and a passion for nurturing young entrepreneurial talent.",
  judges: [
    {
      name: "Athena Chen",
      photo: "/fish_tank/p_judges/athena.png",
      title: "Founder @ Naperville Children's Business Fair",
      company: "",
      bio: "Athena is an incoming freshman at the Haas School of Business at the University of California-Berkeley. In 2020, she founded the Naperville Children's Business Fair, an entrepreneurship event incubating 200+ businesses run by over 350 kidpreneurs (ages 5-14) selling to 3,500 visitors over the past three years. She is so excited that the Fair is partnering with BizBuzz this year!"
    },
    {
      name: "Olivia Fisz",
      photo: "/fish_tank/p_judges/olivia.png",
      title: "State President @ Illinois DECA",
      company: "",
      bio: "Olivia is an incoming freshman at the Wharton School of the University of Pennsylvania, where she will study finance. She currently serves as the Illinois DECA State President, leading over 5,000 members in the world's largest high school business organization. She hopes to show young students how they can use their voices, ideas, and courage to create meaningful change."
    },
    {
      name: "Soohyun Cho",
      photo: "/fish_tank/p_judges/soohyun.jpg",
      title: "Student Representative @ City of Naperville",
      company: "",
      bio: "Soohyun is an incoming freshman at Rice University majoring in Finance. From working at a sales company to being involved in business organizations at school, he has taken his talents far and wide. This past year, he placed nationally in personal finance and investing competitions, eventually becoming a state champion in DECA."
    },
    {
      name: "Isabel Yu",
      photo: "/fish_tank/p_judges/isabel.png",
      title: "Founder @ Suki Jewels",
      company: "",
      bio: "Isabel is a rising freshman at UIUC's Gies College of Business, studying marketing and finance. As an upcoming D203 Business Incubator mentor, she is excited to help students further their passion for entrepreneurship. She is also the co-owner of Suki Jewels, a handmade jewelry business that has generated $3,000+ in revenue and 8,000+ supporters to date."
    },
    {
      name: "Ria Pande",
      photo: "/fish_tank/p_judges/ria.png",
      title: "DECA International Finalist",
      company: "",
      bio: "Ria is a freshman at the University of California, Santa Barbara, studying business and entrepreneurship. As a finalist at DECA's International Career Development Conference, she has developed strong experience in turning ideas into impact. Ria is passionate about helping students find their voices and couldn't be more excited to support this year's Fish Tank participants as they prepare to pitch and pursue their own entrepreneurial visions!"
    },
    {
      name: "Nathan Mendoza",
      photo: "/fish_tank/p_judges/nathan.png",
      title: "Founder @ Stall Secure LLC",
      company: "",
      bio: "Nathan is a rising senior at Naperville North, aspiring to become an entrepreneur while uplifting others. He is the current CEO and Co-Founder of Stall-Secure, which has won first place in three major pitch competitions. To date, he has secured over $9,000 in funding for his company and is looking forward to seeing BizBuzz participants' creativity!"
    }
  ]
};

// Final judges
const finalJudges = {
  title: "Final Round Judges",
  description: "Our distinguished panel of final judges consists of successful entrepreneurs, investors, and community leaders who evaluate the finalists' pitches with professional rigor. They assess each idea based on innovation, market potential, feasibility, and presentation quality. These judges not only select the winners but also provide mentorship opportunities and connections to help turn the most promising ideas into reality.",
  judges: [
    {
      name: "Phil Ramos",
      photo: "/fish_tank/f_judges/phil.jpg",
      title: "Owner & President",
      company: "Office Furniture Solutions",
      bio: "Phil Ramos is the owner and president of Office Furniture Solutions in Naperville, where he has built a respected business providing new and refurbished office furniture. Known for his commitment to community involvement and mentorship, he actively supports local initiatives and youth programs."
    },
    {
      name: "Raymond Munch",
      photo: "/fish_tank/f_judges/raymond.jpg",
      title: "Director of Finance",
      company: "City of Naperville",
      bio: "Raymond Munch serves as the Director of Finance for the City of Naperville, overseeing financial operations and managing the city's substantial budget. His career includes over a decade in law enforcement with the Village of Glen Ellyn, followed by leadership roles in city management in DeKalb, Illinois."
    },
    {
      name: "Janet Yang Rohr",
      photo: "/fish_tank/f_judges/janet.jpg",
      title: "State Representative",
      company: "Illinois' 41st District",
      bio: "Janet Yang Rohr is a state representative for Illinois' 41st District, serving since 2021 and focusing on education, healthcare, and economic issues. Before entering politics, she held leadership roles in finance and served on the Naperville District 203 school board."
    },
    {
      name: "Brad Wilson",
      photo: "/fish_tank/f_judges/brad.jpg",
      title: "Executive Director",
      company: "Naperville Park District",
      bio: "Brad Wilson has been the Executive Director of the Naperville Park District since February 2022, after a distinguished 23-year tenure with the organization. He has been with the district for over two decades, beginning as an intern and working his way up through various leadership positions."
    },
    {
      name: "Isha Elandassery",
      photo: "/fish_tank/f_judges/isha.jpg",
      title: "Founder",
      company: "Naperville Rising Women in Business",
      bio: "Isha Elandassery is the founder of Naperville Rising Women in Business (NRWIB), an organization dedicated to empowering young girls to become future leaders. She also created Salus Security, a startup focused on developing discreet emergency wristbands for students."
    }
  ]
};

// Winner
const winner = {
    name: "Aanya Patel",
  photo: "/fish_tank/ranking/first.jpg",
    productName: "EcoLearn",
    school: "Jefferson Middle School",
    description: "A gamified learning platform that teaches environmental sustainability through interactive challenges. Students earn points by completing real-world eco-friendly actions and competing with friends."
};

// Runner-ups
const runnerUps = [
  {
    name: "Tyler Johnson",
    photo: "/fish_tank/ranking/second.jpg", 
    productName: "HomeworkHelper",
    school: "Lincoln Elementary",
    description: "An AI-powered study assistant that helps students organize assignments and create personalized study plans. It analyzes learning patterns to suggest effective study methods."
  },
  {
    name: "Maya Rodriguez",
    photo: "/fish_tank/ranking/third.jpg",
    productName: "SafeWalk",
    school: "Washington High School",
    description: "A mobile app that connects students walking the same route home for increased safety. Parents receive real-time notifications with emergency features for peace of mind."
  },
  {
    name: "Ethan Chen",
    photo: "/fish_tank/ranking/fourth.jpg",
    productName: "ScienceSpark",
    school: "Edison Academy",
    description: "An affordable kit that turns smartphones into powerful microscopes for science education. The accompanying app guides students through experiments and lets them share discoveries."
  },
  {
    name: "Zoe Williams",
    photo: "/fish_tank/ranking/fifth.jpg",
    productName: "TeenFinance",
    school: "Roosevelt High School",
    description: "A financial literacy app designed specifically for teenagers. It teaches budgeting, saving, and investing through real-world simulations and challenges with virtual currency."
  }
];

// FishTank Component
export default function FishTankPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Enhanced Underwater Theme */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#004080] via-[#0088cc] to-[#00b8e6]">
          {/* Animated Bubbles */}
          <div className="absolute inset-0 opacity-25">
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
            <div className="bubble bubble-4"></div>
            <div className="bubble bubble-5"></div>
            <div className="bubble bubble-6"></div>
            <div className="bubble bubble-7"></div>
            <div className="bubble bubble-8"></div>
            <div className="bubble bubble-9"></div>
            <div className="bubble bubble-10"></div>
      </div>
      
          {/* Animated Water Waves */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            </div>
          
          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-blue-300 mix-blend-soft-light opacity-5 pattern-dots pattern-size-2 pattern-opacity-5"></div>
              </div>
              
        {/* Light Rays */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 left-1/3 w-[40rem] h-[90vh] bg-cyan-300/15 rotate-[-20deg] blur-3xl"></div>
          <div className="absolute -top-20 right-1/3 w-[40rem] h-[90vh] bg-sky-300/15 rotate-[20deg] blur-3xl"></div>
        </div>
        
        {/* Fish School Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="fish-container">
            <div className="fish fish1"></div>
            <div className="fish fish2"></div>
            <div className="fish fish3"></div>
            <div className="fish fish4"></div>
            <div className="fish fish5"></div>
            <div className="fish fish6"></div>
      </div>
        </div>
        
        {/* Seaweed Decorations */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
          <div className="seaweed seaweed1"></div>
          <div className="seaweed seaweed2"></div>
          <div className="seaweed seaweed3"></div>
          <div className="seaweed seaweed4"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Competition Badge */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium bg-white/90 backdrop-blur-sm text-[#004080] mb-10 shadow-xl border border-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>
              <span>Student Entrepreneurship Competition</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <h1 className="text-8xl md:text-9xl font-extrabold mb-8 text-white tracking-tight">
                <span className="inline-block drop-shadow-lg">FISH</span> <span className="inline-block text-[#FFD700] drop-shadow-lg">TANK</span>
                <div className="absolute -top-8 -right-8 w-20 h-20 md:w-24 md:h-24 text-[#FFD700] opacity-70 animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8.5l1.5 1.5 5.5-5.5L12 0 5 4.5l5.5 5.5L12 8.5zm7.5 3l-1.5-1.5L12 16l-6-6-1.5 1.5L12 18l7.5-6.5zm-15 0L6 13l6-6 6 6 1.5-1.5L12 5l-7.5 6.5zm15 3l-1.5-1.5L12 19l-6-6-1.5 1.5L12 21l7.5-6.5z"/>
                  </svg>
              </div>
              </h1>
            </motion.div>
            
            {/* Description */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-xl md:text-2xl text-white/95 mb-14 max-w-3xl mx-auto leading-relaxed font-light backdrop-blur-[2px] bg-[#004080]/30 rounded-xl p-5 shadow-lg border border-white/10">
                Where young entrepreneurs pitch innovative ideas, receive expert feedback, and compete for resources to turn their business concepts into reality
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-wrap gap-6 justify-center">
                <a 
                  href="#what-is-fish-tank" 
                  className="inline-flex items-center px-8 py-4 bg-white text-[#004080] text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                
                <a 
                  href="mailto:info@bizbuzznfp.org" 
                  className="inline-flex items-center px-8 py-4 bg-[#FFD700] text-[#004080] text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:bg-[#FFDE2E] transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  Apply Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-48 opacity-15">
            <div className="absolute left-[5%] bottom-[40%] w-24 h-12 animate-swim">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512">
                <path d="M256 16c-30 0-59.7 6-87.4 15.5C87.7 53.1 22.9 141 16.2 151.8c-3.3 5.3-5.7 11.2-6.2 17.4c-1 13.4 5 27.4 16.2 35.4c10.8 7.7 25 9.7 38.2 7.5c5.4-.9 9.8-4.1 15-5.9c25.7-8.8 52.9-12.4 79.8-12.4c18.1 0 36.3 1.8 54.4 5.4c66.5-30.3 118.7-82.5 149-149c-69.4-32.9-142.1-34.2-206.6-2.1c-6.2 3.1-12.5 8.5-15.1 15.2c-3.8 9.9-.1 20.2 5.8 28.1c6.2 8.2 15.3 13.9 24.9 17.2c41.5 14.3 90.8 8.7 127.8-18.2c5.8-4.2 11.2-9 16.2-13.9l9.4 5.5c-6 5.9-12.5 11.4-19.4 16.3c-42.1 30.3-98.4 36.5-144.8 20.1c-13.3-4.7-26.3-13.2-35.2-24.5c-9.9-12.7-12.9-29.8-6.9-44.3c3.9-9.5 11.9-19.2 21.2-23.8c70.1-34.8 150.5-33.4 226 2.6c24-35.7 43.2-75.5 55.1-117.8C358.8 26.6 307.5 16 256 16zm-75.9 153.7c-17.6 42.6-49.6 78.1-90.3 103.7c-4.7 2.9-10.1 5.8-13.5 10.3c-4.1 5.3-4.3 12.6-2.5 19c3.6 12.3 11.9 23.1 22.8 30.4c10.2 6.8 22.9 10.3 35.3 9.5c11.3-.8 23.2-5.1 31.3-13.2c9.8-9.7 12.6-24.1 11.3-37.6c-1.5-16-6.4-31.5-9.5-46.7c-3.5-18.6-4.4-41.1 9.2-55.3c-2.3-6.3-10-13.3-10-13.3s-6.7-7.4-11.6-10.2c11.9-.7 24.5 3.1 32.1 12.1c4.2 5.1 6.9 11.5 8.2 18c10.4-13.2 25.9-20.9 42.5-22.5c-18.5-7.5-39.3-9.4-58.5-3c.5-.6 .9-1 .9-1c-3.2-1.7-8.6 .8-8.6 .8s10.3-6.8 18-6.8c-7.1-2.8-15.9-1.8-21.9 2.9c-3.2 2.4-5.1 6.1-7.2 9.5c3.9-2.1 8.6-2.8 12.9-1.6c-5.7 1.6-11.2 4.7-14.9 9.6z"/>
              </svg>
            </div>
            <div className="absolute right-[15%] bottom-[20%] w-20 h-10 animate-swim-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512">
                <path d="M256 16c-30 0-59.7 6-87.4 15.5C87.7 53.1 22.9 141 16.2 151.8c-3.3 5.3-5.7 11.2-6.2 17.4c-1 13.4 5 27.4 16.2 35.4c10.8 7.7 25 9.7 38.2 7.5c5.4-.9 9.8-4.1 15-5.9c25.7-8.8 52.9-12.4 79.8-12.4c18.1 0 36.3 1.8 54.4 5.4c66.5-30.3 118.7-82.5 149-149c-69.4-32.9-142.1-34.2-206.6-2.1c-6.2 3.1-12.5 8.5-15.1 15.2c-3.8 9.9-.1 20.2 5.8 28.1c6.2 8.2 15.3 13.9 24.9 17.2c41.5 14.3 90.8 8.7 127.8-18.2c5.8-4.2 11.2-9 16.2-13.9l9.4 5.5c-6 5.9-12.5 11.4-19.4 16.3c-42.1 30.3-98.4 36.5-144.8 20.1c-13.3-4.7-26.3-13.2-35.2-24.5c-9.9-12.7-12.9-29.8-6.9-44.3c3.9-9.5 11.9-19.2 21.2-23.8c70.1-34.8 150.5-33.4 226 2.6c24-35.7 43.2-75.5 55.1-117.8C358.8 26.6 307.5 16 256 16zm-75.9 153.7c-17.6 42.6-49.6 78.1-90.3 103.7c-4.7 2.9-10.1 5.8-13.5 10.3c-4.1 5.3-4.3 12.6-2.5 19c3.6 12.3 11.9 23.1 22.8 30.4c10.2 6.8 22.9 10.3 35.3 9.5c11.3-.8 23.2-5.1 31.3-13.2c9.8-9.7 12.6-24.1 11.3-37.6c-1.5-16-6.4-31.5-9.5-46.7c-3.5-18.6-4.4-41.1 9.2-55.3c-2.3-6.3-10-13.3-10-13.3s-6.7-7.4-11.6-10.2c11.9-.7 24.5 3.1 32.1 12.1c4.2 5.1 6.9 11.5 8.2 18c10.4-13.2 25.9-20.9 42.5-22.5c-18.5-7.5-39.3-9.4-58.5-3c.5-.6 .9-1 .9-1c-3.2-1.7-8.6 .8-8.6 .8s10.3-6.8 18-6.8c-7.1-2.8-15.9-1.8-21.9 2.9c-3.2 2.4-5.1 6.1-7.2 9.5c3.9-2.1 8.6-2.8 12.9-1.6c-5.7 1.6-11.2 4.7-14.9 9.6z"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* CSS for Animations */}
        <style jsx>{`
          .bubble {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            animation-name: bubble-animation;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
          
          .bubble-1 {
            width: 80px;
            height: 80px;
            left: 10%;
            bottom: -100px;
            animation-duration: 18s;
            animation-delay: 0s;
          }
          
          .bubble-2 {
            width: 40px;
            height: 40px;
            left: 20%;
            bottom: -100px;
            animation-duration: 12s;
            animation-delay: 1s;
          }
          
          .bubble-3 {
            width: 60px;
            height: 60px;
            left: 35%;
            bottom: -100px;
            animation-duration: 14s;
            animation-delay: 2s;
          }
          
          .bubble-4 {
            width: 50px;
            height: 50px;
            left: 50%;
            bottom: -100px;
            animation-duration: 16s;
            animation-delay: 3s;
          }
          
          .bubble-5 {
            width: 70px;
            height: 70px;
            left: 65%;
            bottom: -100px;
            animation-duration: 20s;
            animation-delay: 4s;
          }
          
          .bubble-6 {
            width: 30px;
            height: 30px;
            left: 80%;
            bottom: -100px;
            animation-duration: 10s;
            animation-delay: 5s;
          }
          
          .bubble-7 {
            width: 40px;
            height: 40px;
            left: 90%;
            bottom: -100px;
            animation-duration: 22s;
            animation-delay: 6s;
          }
          
          .bubble-8 {
            width: 55px;
            height: 55px;
            left: 5%;
            bottom: -100px;
            animation-duration: 13s;
            animation-delay: 7s;
          }
          
          .bubble-9 {
            width: 45px;
            height: 45px;
            left: 30%;
            bottom: -100px;
            animation-duration: 15s;
            animation-delay: 8s;
          }
          
          .bubble-10 {
            width: 65px;
            height: 65px;
            left: 70%;
            bottom: -100px;
            animation-duration: 19s;
            animation-delay: 9s;
          }
          
          @keyframes bubble-animation {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(-100vh) scale(1.2);
              opacity: 0;
            }
          }
          
          .animate-swim {
            animation: swim 15s ease-in-out infinite;
          }
          
          .animate-swim-reverse {
            animation: swim-reverse 12s ease-in-out infinite;
          }
          
          @keyframes swim {
            0% { transform: translateX(0) rotate(0deg); }
            25% { transform: translateX(20px) rotate(5deg); }
            50% { transform: translateX(40px) rotate(0deg); }
            75% { transform: translateX(20px) rotate(-5deg); }
            100% { transform: translateX(0) rotate(0deg); }
          }
          
          @keyframes swim-reverse {
            0% { transform: translateX(0) scaleX(-1); }
            25% { transform: translateX(-20px) scaleX(-1); }
            50% { transform: translateX(-40px) scaleX(-1); }
            75% { transform: translateX(-20px) scaleX(-1); }
            100% { transform: translateX(0) scaleX(-1); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0% { transform: translateY(0) rotate(12deg); }
            50% { transform: translateY(-10px) rotate(15deg); }
            100% { transform: translateY(0) rotate(12deg); }
          }
          
          .wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" opacity=".25" fill="%23ffffff"/></svg>');
            background-size: 1200px 100px;
          }
          
          .wave1 {
            animation: wave 30s linear infinite;
            z-index: 1;
            opacity: 0.5;
            animation-delay: 0s;
            bottom: 0;
          }
          
          .wave2 {
            animation: wave2 15s linear infinite;
            z-index: 0;
            opacity: 0.3;
            animation-delay: -5s;
            bottom: 10px;
          }
          
          @keyframes wave {
            0% { background-position-x: 0; }
            100% { background-position-x: 1200px; }
          }
          
          @keyframes wave2 {
            0% { background-position-x: 0; }
            100% { background-position-x: -1200px; }
          }
          
          .fish-container {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          
          .fish {
            position: absolute;
            width: 30px;
            height: 15px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
          }
          
          .fish:before {
            content: "";
            position: absolute;
            top: 0;
            right: -10px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 7.5px 0 7.5px 15px;
            border-color: transparent transparent transparent rgba(255, 255, 255, 0.2);
          }
          
          .fish1 {
            top: 20%;
            left: -30px;
            animation: fish-swim 25s linear infinite;
          }
          
          .fish2 {
            top: 35%;
            left: -30px;
            animation: fish-swim 20s linear infinite;
            animation-delay: 5s;
          }
          
          .fish3 {
            top: 55%;
            left: -30px;
            animation: fish-swim 22s linear infinite;
            animation-delay: 7s;
          }
          
          .fish4 {
            top: 70%;
            left: -30px;
            animation: fish-swim 18s linear infinite;
            animation-delay: 10s;
          }
          
          .fish5 {
            top: 45%;
            left: -30px;
            animation: fish-swim 30s linear infinite;
            animation-delay: 15s;
          }
          
          .fish6 {
            top: 85%;
            left: -30px;
            animation: fish-swim 15s linear infinite;
            animation-delay: 2s;
          }
          
          @keyframes fish-swim {
            0% {
              transform: translateX(-30px);
            }
            100% {
              transform: translateX(calc(100vw + 30px));
            }
          }
          
          .seaweed {
            position: absolute;
            bottom: 0;
            width: 10px;
            background: rgba(144, 238, 144, 0.2);
            border-radius: 10px;
            transform-origin: bottom;
          }
          
          .seaweed1 {
            height: 70px;
            left: 10%;
            animation: sway 8s ease-in-out infinite;
          }
          
          .seaweed2 {
            height: 90px;
            left: 25%;
            animation: sway 7s ease-in-out infinite;
            animation-delay: 1s;
          }
          
          .seaweed3 {
            height: 60px;
            right: 30%;
            animation: sway 9s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .seaweed4 {
            height: 80px;
            right: 15%;
            animation: sway 6s ease-in-out infinite;
            animation-delay: 3s;
          }
          
          @keyframes sway {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(5deg); }
            50% { transform: rotate(-5deg); }
            75% { transform: rotate(3deg); }
            100% { transform: rotate(0deg); }
          }
        `}</style>
      </section>

      {/* What is Fish Tank Section */}
      <section id="what-is-fish-tank" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-[#0f172a] mb-5">
              What is <span className="text-[#38b6ff]">Fish Tank</span>?
            </h2>
            <p className="text-xl text-[#334155] max-w-4xl mx-auto leading-relaxed">
              Welcome to the tank! We&apos;re thrilled to have you here. Inspired by the world-renowned series, Shark Tank, the Fish Tank competition invites 3rd-9th grade students in the Chicagoland area to identify a market opportunity and introduce a new business, product, or service. Hosted at the College of DuPage on July 24th & 25th with some of Naperville&apos;s biggest business owners and leaders, participants will take their big innovations to an even bigger stage.
            </p>
            
            <p className="text-xl text-[#334155] max-w-4xl mx-auto leading-relaxed mt-4">
              Join 50+ teams for a chance of winning hundreds in funding, mentorship under a business professional, and business exposure!
            </p>
          </motion.div>

          {/* Photo Gallery */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          >
            {/* Main large image */}
            <motion.div variants={fadeIn} className="md:col-span-2 relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src={fishTankPhotos[0]} 
                alt="Fish Tank competition"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
            
            {/* Smaller images */}
            <div className="grid grid-rows-2 gap-6 h-[420px]">
              <motion.div variants={fadeIn} className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                  src={fishTankPhotos[1]} 
                  alt="Student pitching idea"
                    fill
                    className="object-cover"
                  />
              </motion.div>
              <motion.div variants={fadeIn} className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                  src={fishTankPhotos[2]} 
                  alt="Judges panel"
                    fill
                    className="object-cover"
                  />
              </motion.div>
            </div>
          </motion.div>
                </div>
      </section>

      {/* Winners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-6xl font-bold text-[#0f172a] mb-5">
              Competition <span className="text-[#38b6ff]">Winners</span>
            </h2>
          </motion.div>

          {/* Main Winner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={winner.photo}
                    alt={winner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-3">{winner.name}</h3>
                  <p className="text-xl font-semibold text-[#38b6ff] mb-2">{winner.productName}</p>
                  <p className="text-base text-[#64748b] mb-4">{winner.school}</p>
                  <p className="text-lg text-[#334155]">{winner.description}</p>
                  
                  <div className="mt-6 flex items-center">
                    <div className="w-12 h-12 bg-[#ffbf00]/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#ffbf00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-3H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm13 2h-4v10a2 2 0 0 0 2 2h2v-5h2V5a1 1 0 0 0-1-1z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-[#64748b]">First Place Winner</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Runner-ups Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-[#0f172a]">Runner-Ups</h3>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {runnerUps.map((runnerUp, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-[200px]">
                    <Image
                      src={runnerUp.photo}
                      alt={runnerUp.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#0f172a] mb-2">{runnerUp.name}</h4>
                    <p className="text-lg font-semibold text-[#38b6ff] mb-2">{runnerUp.productName}</p>
                    <p className="text-sm text-[#64748b] mb-3">{runnerUp.school}</p>
                    <p className="text-base text-[#334155]">{runnerUp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-6xl font-bold text-[#0f172a] mb-5">
              Our <span className="text-[#38b6ff]">Judges</span>
            </h2>
          </motion.div>

          {/* Final Judges - More prominent section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-[#0f172a]">
                <span className="text-[#ffbf00]">Final</span> Round Judges
              </h3>
              <p className="text-xl text-[#334155] max-w-4xl mx-auto mt-3">
                Five business leaders, government officials, and innovators passionate about growing the next generation of entrepreneurs and changemakers who will solve issues in their communities and beyond.
              </p>
            </div>

            {/* First row - 3 judges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
            >
              {finalJudges.judges.slice(0, 3).map((judge, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-xl border border-[#ffbf00]/30 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-[280px] overflow-hidden">
                <Image 
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-[#ffbf00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 bg-[#ffbf00] text-white px-3 py-1 text-sm font-bold uppercase rounded-bl-lg">
                      Final Judge
                    </div>
                    <div className="absolute bottom-0 w-full p-4 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-medium text-lg">{judge.company}</p>
                </div>
              </div>
                  <div className="p-6 border-t-4 border-[#ffbf00]">
                    <h4 className="text-xl font-bold text-[#0f172a] mb-2">{judge.name}</h4>
                    <p className="text-lg font-semibold text-[#ffbf00] mb-3">{judge.title}</p>
                    <p className="text-base text-[#334155]">{judge.bio}</p>
              </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Second row - 2 judges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {finalJudges.judges.slice(3, 5).map((judge, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-xl border border-[#ffbf00]/30 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-[280px] overflow-hidden">
                <Image 
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-[#ffbf00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 bg-[#ffbf00] text-white px-3 py-1 text-sm font-bold uppercase rounded-bl-lg">
                      Final Judge
                    </div>
                    <div className="absolute bottom-0 w-full p-4 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-medium text-lg">{judge.company}</p>
                </div>
              </div>
                  <div className="p-6 border-t-4 border-[#ffbf00]">
                    <h4 className="text-xl font-bold text-[#0f172a] mb-2">{judge.name}</h4>
                    <p className="text-lg font-semibold text-[#ffbf00] mb-3">{judge.title}</p>
                    <p className="text-base text-[#334155]">{judge.bio}</p>
              </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Preliminary Judges */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-[#0f172a]">
                <span className="text-[#38b6ff]">Preliminary</span> Round Judges
              </h3>
              <p className="text-xl text-[#334155] max-w-4xl mx-auto mt-3">
                Six high school judges experienced in business competitions and running their own companies excited to help students like themselves grow in both entrepreneurial thinking and public speaking.
              </p>
      </div>
      
            {/* First row - 3 judges */}
          <motion.div
              initial="hidden"
              whileInView="visible"
            viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
            >
              {prelimJudges.judges.slice(0, 3).map((judge, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#38b6ff]/30 hover:shadow-xl transition-all"
                >
                  <div className="relative h-[280px]">
                    <Image
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-0 right-0 bg-[#38b6ff] text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg">
                      Prelim Judge
                    </div>
                  </div>
                  <div className="p-6 border-t-4 border-[#38b6ff]">
                    <h4 className="text-xl font-bold text-[#0f172a] mb-2">{judge.name}</h4>
                    <p className="text-lg font-semibold text-[#38b6ff] mb-3">{judge.title}</p>
                    <p className="text-base text-[#334155]">{judge.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Second row - 3 judges */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {prelimJudges.judges.slice(3, 6).map((judge, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#38b6ff]/30 hover:shadow-xl transition-all"
                >
                  <div className="relative h-[280px]">
                    <Image
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-0 right-0 bg-[#38b6ff] text-white px-3 py-1 text-xs font-bold uppercase rounded-bl-lg">
                      Prelim Judge
                    </div>
                  </div>
                  <div className="p-6 border-t-4 border-[#38b6ff]">
                    <h4 className="text-xl font-bold text-[#0f172a] mb-2">{judge.name}</h4>
                    <p className="text-lg font-semibold text-[#38b6ff] mb-3">{judge.title}</p>
                    <p className="text-base text-[#334155]">{judge.bio}</p>
            </div>
          </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
} 