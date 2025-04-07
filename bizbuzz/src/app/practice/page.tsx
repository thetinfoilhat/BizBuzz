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
      photo: "/hero_imgs/11.jpg",
      title: "Founder @ Naperville Children's Business Fair",
      company: "",
      bio: "Athena is an incoming freshman at the Haas School of Business at the University of California-Berkeley. In 2020, she founded the Naperville Children's Business Fair, an entrepreneurship event incubating 200+ businesses run by over 350 kidpreneurs (ages 5-14) selling to 3,500 visitors over the past three years. She is so excited that the Fair is partnering with BizBuzz this year!"
    },
    {
      name: "Olivia Fisz",
      photo: "/hero_imgs/13.jpg",
      title: "State President @ Illinois DECA",
      company: "",
      bio: "Olivia is an incoming freshman at the Wharton School of the University of Pennsylvania, where she will study finance. She currently serves as the Illinois DECA State President, leading over 5,000 members in the world's largest high school business organization. She hopes to show young students how they can use their voices, ideas, and courage to create meaningful change."
    },
    {
      name: "Soohyun Cho",
      photo: "/hero_imgs/14.jpg",
      title: "Student Representative @ City of Naperville",
      company: "",
      bio: "Soohyun is an incoming freshman at Rice University majoring in Finance. From working at a sales company to being involved in business organizations at school, he has taken his talents far and wide. This past year, he placed nationally in personal finance and investing competitions, eventually becoming a state champion in DECA."
    },
    {
      name: "Isabel Yu",
      photo: "/hero_imgs/11.jpg",
      title: "Founder @ Suki Jewels",
      company: "",
      bio: "Isabel is a rising freshman at UIUC's Gies College of Business, studying marketing and finance. As an upcoming D203 Business Incubator mentor, she is excited to help students further their passion for entrepreneurship. She is also the co-owner of Suki Jewels, a handmade jewelry business that has generated $3,000+ in revenue and 8,000+ supporters to date."
    },
    {
      name: "Ria Pande",
      photo: "/hero_imgs/13.jpg",
      title: "DECA Inc. International Finalist",
      company: "",
      bio: "Ria is passionate about helping young entrepreneurs develop their business skills and innovative thinking. With experience in competitive business environments, she brings valuable insights to help participants refine their pitches and business concepts."
    },
    {
      name: "Nathan Mendoza",
      photo: "/hero_imgs/14.jpg",
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
      name: "Michael Torres",
      photo: "/hero_imgs/11.jpg",
      title: "Venture Capitalist",
      company: "Elevation Partners",
      bio: "Investor who has funded over 20 successful startups and specializes in identifying promising innovations with high growth potential."
    },
    {
      name: "Dr. Angela Williams",
      photo: "/hero_imgs/13.jpg",
      title: "Innovation Director",
      company: "National Science Foundation",
      bio: "Leads initiatives to accelerate science innovation in educational settings with a focus on technological advancement and accessibility."
    },
    {
      name: "Robert Chang",
      photo: "/hero_imgs/14.jpg",
      title: "CEO",
      company: "Global Innovations Inc.",
      bio: "Tech industry leader who built a billion-dollar company from the ground up and actively mentors young entrepreneurs in the digital space."
    },
    {
      name: "Sophia Washington",
      photo: "/hero_imgs/11.jpg",
      title: "Community Leader",
      company: "Business Futures Alliance",
      bio: "Directs a nonprofit focused on economic development through entrepreneurship in underserved communities across the Midwest."
    },
    {
      name: "Thomas Rivera",
      photo: "/hero_imgs/13.jpg",
      title: "Retail Expert",
      company: "Consumer Trends Group",
      bio: "Former executive at major retail corporations who now consults on consumer product development and go-to-market strategies."
    },
    {
      name: "Dr. Emily Chen",
      photo: "/hero_imgs/14.jpg",
      title: "Technology Pioneer",
      company: "FutureTech Institute",
      bio: "Award-winning researcher and entrepreneur who specializes in emerging technologies and their commercial applications for social impact ventures."
    }
  ]
};

// Winner
const winner = {
  name: "Aanya Patel",
  photo: "/hero_imgs/11.jpg",
  productName: "EcoLearn",
  school: "Jefferson Middle School",
  description: "A gamified learning platform that teaches environmental sustainability through interactive challenges. Students earn points by completing real-world eco-friendly actions and competing with friends."
};

// Runner-ups
const runnerUps = [
  {
    name: "Tyler Johnson",
    photo: "/hero_imgs/13.jpg", 
    productName: "HomeworkHelper",
    school: "Lincoln Elementary",
    description: "An AI-powered study assistant that helps students organize assignments and create personalized study plans. It analyzes learning patterns to suggest effective study methods."
  },
  {
    name: "Maya Rodriguez",
    photo: "/hero_imgs/14.jpg",
    productName: "SafeWalk",
    school: "Washington High School",
    description: "A mobile app that connects students walking the same route home for increased safety. Parents receive real-time notifications with emergency features for peace of mind."
  },
  {
    name: "Ethan Chen",
    photo: "/hero_imgs/11.jpg",
    productName: "ScienceSpark",
    school: "Edison Academy",
    description: "An affordable kit that turns smartphones into powerful microscopes for science education. The accompanying app guides students through experiments and lets them share discoveries."
  },
  {
    name: "Zoe Williams",
    photo: "/hero_imgs/13.jpg",
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
      {/* Hero Section with Trophy/Whiteboard Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/program_cards/fishtank.jpg"
            alt="Fish Tank trophies on whiteboard"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#38b6ff]/80 to-[#6366F1]/80 mix-blend-multiply"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 w-[40rem] h-[40rem] bg-[#38b6ff]/30 rounded-full blur-3xl opacity-40 -mr-20 -mt-20"></div>
          <div className="absolute left-0 bottom-0 w-[40rem] h-[40rem] bg-[#6366F1]/30 rounded-full blur-3xl opacity-40 -ml-20 -mb-20"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-base font-medium bg-white/90 text-[#38b6ff] mb-8 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
              Student Entrepreneurship Competition
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-6 text-white">
              FISH <span className="text-[#ffbf00]">TANK</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Where young entrepreneurs pitch innovative ideas, receive expert feedback, and compete for resources to turn their business concepts into reality
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center mt-8">
              <a 
                href="#what-is-fish-tank" 
                className="inline-flex items-center px-8 py-4 bg-white text-[#38b6ff] text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:bg-gray-50 transition duration-300 transform hover:-translate-y-1"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              <a 
                href="mailto:info@bizbuzznfp.org" 
                className="inline-flex items-center px-8 py-4 bg-[#ffbf00] text-white text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:bg-[#f0b500] transition duration-300 transform hover:-translate-y-1"
              >
                Apply Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          {/* Trophy icons decorative elements */}
          <div className="absolute bottom-10 left-10 w-24 h-24 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path d="M5 3h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-3H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm13 2h-4v10a2 2 0 0 0 2 2h2v-5h2V5a1 1 0 0 0-1-1z"/>
            </svg>
          </div>
          
          <div className="absolute top-20 right-10 w-20 h-20 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path d="M5 3h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-3H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm13 2h-4v10a2 2 0 0 0 2 2h2v-5h2V5a1 1 0 0 0-1-1z"/>
            </svg>
          </div>
        </div>
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
                  <div className="relative h-[280px]">
                    <Image
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ffbf00] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
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
                  <div className="relative h-[280px]">
                    <Image
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ffbf00] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
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
                  <div className="relative h-[220px]">
                    <Image
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover"
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
                  <div className="relative h-[220px]">
                    <Image
                      src={judge.photo}
                      alt={judge.name}
                      fill
                      className="object-cover"
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

      {/* CTA Section */}
      <section className="py-16 bg-[#38b6ff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">Ready to Make a Splash?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our next Fish Tank competition and transform your ideas into reality with expert guidance and hands-on experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@bizbuzznfp.org" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#38b6ff] font-semibold rounded-xl shadow-lg hover:bg-gray-50 transition-colors"
              >
                Apply Now
              </a>
              <a 
                href="#what-is-fish-tank" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 