"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Fish Tank photos - 12 images for the gallery
const fishTankPhotos = [
  "/program_cards/fishtank.jpg",
  "/hero_imgs/11.jpg",
  "/hero_imgs/13.jpg",
  "/hero_imgs/14.jpg",
  "/hero_imgs/1.jpg",
  "/hero_imgs/2.jpg",
  "/hero_imgs/3.jpg",
  "/hero_imgs/4.jpg",
  "/hero_imgs/5.jpg",
  "/hero_imgs/6.jpg",
  "/hero_imgs/7.jpg",
  "/hero_imgs/8.jpg",
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

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  // For image slideshow effects
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] bg-gradient-to-b from-[#004080] to-[#0088cc] overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Water Surface Effect */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#003166]/20 to-transparent"></div>
          
          {/* Water Wave Patterns */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-32 text-white/5 transform translate-y-1/2" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="currentColor" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,197.3C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          {/* Dynamic Bubbles */}
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="bubble"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 15 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col items-center">
            {/* Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#004080" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                <span className="text-[#004080] font-medium">Student Entrepreneurship Competition</span>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left Side Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white space-y-6 order-2 lg:order-1"
              >
                {/* Heading */}
                <h1 className="text-left">
                  <span className="block text-8xl font-extrabold tracking-tight drop-shadow-md mb-4">FISH</span>
                  <span className="block text-8xl font-extrabold tracking-tight text-[#FFD700] drop-shadow-md">TANK</span>
                </h1>
                
                {/* Description */}
                <div className="bg-[#003166]/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-white/95 shadow-lg max-w-2xl">
                  <p className="text-xl leading-relaxed">
                    Where young entrepreneurs pitch innovative ideas, receive expert feedback, and compete for resources to turn their business concepts into reality
                  </p>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
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
              
              {/* Right Side - Featured Images Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2 w-full overflow-hidden"
              >
                <div className="grid grid-cols-6 grid-rows-4 gap-2 h-[500px]">
                  {/* First 3 featured images - larger sizes */}
                  <div className="col-span-3 row-span-2 relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.02] group">
                    <Image 
                      src={fishTankPhotos[0]} 
                      alt="Fish Tank trophies"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="col-span-3 row-span-2 relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.02] group">
                    <Image 
                      src={fishTankPhotos[1]} 
                      alt="Fish Tank participants"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Grid of smaller images - 9 remaining images */}
                  {fishTankPhotos.slice(2, 11).map((photo, index) => (
                    <div 
                      key={index} 
                      className="col-span-2 row-span-1 relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-[1.02] group"
                    >
                      <Image 
                        src={photo} 
                        alt={`Fish Tank event photo ${index + 3}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                  
                  {/* Last image - slightly larger */}
                  <div className="col-span-2 row-span-1 relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-[1.02] group">
                    <Image 
                      src={fishTankPhotos[11]} 
                      alt="Fish Tank event photo 12"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* CSS for animations */}
        <style jsx>{`
          .bubble {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.15);
            animation: bubble-rise linear infinite;
          }
          
          @keyframes bubble-rise {
            0% {
              bottom: -100px;
              opacity: 0;
            }
            25% {
              opacity: 0.8;
            }
            100% {
              bottom: 100vh;
              opacity: 0;
            }
          }
        `}</style>
      </section>

      {/* What is Fish Tank Section - Redesigned */}
      <section id="what-is-fish-tank" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-blue-100 text-[#004080] rounded-full text-sm font-medium mb-4">
              The Competition
            </span>
            <h2 className="text-6xl font-bold text-[#0f172a]">
              What is <span className="text-[#38b6ff]">Fish Tank</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            {/* Content Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              <p className="text-xl text-[#334155] leading-relaxed">
                Welcome to the tank! We&apos;re thrilled to have you here. Inspired by the world-renowned series, Shark Tank, the Fish Tank competition invites 3rd-9th grade students in the Chicagoland area to identify a market opportunity and introduce a new business, product, or service.
              </p>
              
              <p className="text-xl text-[#334155] leading-relaxed">
                Hosted at the College of DuPage on July 24th & 25th with some of Naperville&apos;s biggest business owners and leaders, participants will take their big innovations to an even bigger stage.
              </p>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-gradient-to-br from-[#004080] to-[#0074cc] rounded-xl p-6 text-white text-center transform transition-transform hover:scale-105 duration-300 shadow-lg">
                  <div className="text-4xl font-bold text-[#FFD700] mb-2">50+</div>
                  <div className="text-sm font-medium">Teams</div>
                </div>
                
                <div className="bg-gradient-to-br from-[#004080] to-[#0074cc] rounded-xl p-6 text-white text-center transform transition-transform hover:scale-105 duration-300 shadow-lg">
                  <div className="text-4xl font-bold text-[#FFD700] mb-2">2</div>
                  <div className="text-sm font-medium">Competition Days</div>
                </div>
                
                <div className="bg-gradient-to-br from-[#004080] to-[#0074cc] rounded-xl p-6 text-white text-center transform transition-transform hover:scale-105 duration-300 shadow-lg">
                  <div className="text-4xl font-bold text-[#FFD700] mb-2">11</div>
                  <div className="text-sm font-medium">Expert Judges</div>
                </div>
              </div>
              
              {/* Call to Action Box */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-8 relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-36 h-36 bg-blue-100 rounded-full opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#004080] mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-[#FFD700]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                    </svg>
                    Join 50+ teams for a chance at success!
                  </h3>
                  <p className="text-lg text-[#334155]">
                    Compete for hundreds in funding, mentorship under a business professional, and valuable business exposure for your innovative ideas.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Image Side - Slideshow */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 flex transition-transform ease-in-out duration-1000" 
                   style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                <div className="min-w-full h-full relative">
                  <Image 
                    src={fishTankPhotos[0]} 
                    alt="Fish Tank trophies"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Gold Trophy Awaits</h3>
                    <p className="text-lg">Top innovations receive recognition and resources</p>
                  </div>
                </div>
                <div className="min-w-full h-full relative">
                  <Image 
                    src={fishTankPhotos[1]} 
                    alt="Fish Tank participants"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Passionate Participants</h3>
                    <p className="text-lg">Students present their business ideas with confidence</p>
                  </div>
                </div>
                <div className="min-w-full h-full relative">
                  <Image 
                    src={fishTankPhotos[2]} 
                    alt="Fish Tank judges panel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Expert Feedback</h3>
                    <p className="text-lg">Seasoned business leaders provide valuable guidance</p>
                  </div>
                </div>
              </div>
              
              {/* Slideshow Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      activeIndex === index ? 'bg-white' : 'bg-white/40'
                    }`}
                  ></button>
                ))}
              </div>
            </motion.div>
          </div>
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