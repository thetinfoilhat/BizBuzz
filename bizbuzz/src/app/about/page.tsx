"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type Person = {
  image?: string;
  name: string;
  role: string;
  description: string;
  customPosition?: string;
};

// ============================================================================
// PEOPLE DATA - Easy to edit in one place
// ============================================================================

const PEOPLE = {
  coFounders: [
    {
      image: "/team/Allen.png",
      name: "Allen Xu",
      role: "President & Co-Founder",
      description: "Allen is a junior at Naperville North HS interested in social innovation and finance. A three-time international finalist in entrepreneurship competitions like the Conrad Challenge & Blue Ocean Competition, and grand winner of the 2025 Harvard International Economics Essay Competition, he hopes to use what he has learned to help younger students turn imagination into innovation. As a kid, Allen spent winters watching Shark Tank and summers running lemonade stands in his cul-de-sac. After discovering that 90% of K–8 schools in Naperville do not offer business classes, he co-founded BizBuzz with Aarav—alongside other EdTech platforms—to help students like him find their ideas and the courage to share them."
    },
    {
      image: "/team/Aarav.png",
      name: "Aarav Khullar",
      role: "Vice President & Co-Founder",
      description: "Aarav is a junior at Naperville North HS with a passion for business and fostering youth entrepreneurship. Growing up watching Shark Tank with his dad, he always dreamed of starting a high-quality business but never had any opportunities or support to do so. Seeing this same disparity affect hundreds of other young students in his community, he co-founded BizBuzz with one of his best friends, Allen, to give elementary & middle schoolers the kind of opportunity he never had. Now, as a startup founder himself, internationally awarded by the Walt Disney Company for his leadership, and named a Top 100 Emerging Innovator of 2025, Aarav hopes to translate the skills he's learned to empower the youth.",
      customPosition: "40% center"
    }
  ],

  leadershipTeam: [
    {
      image: "/team/Eddy.png",
      name: "Eddy Wang",
      role: "Vice President",
      customPosition: "center 0%",
      description: "Eddy is a dedicated leader with a passion for entrepreneurship and youth education. With exceptional organizational skills, he coordinates BizBuzz initiatives to reach students across Naperville, creating meaningful learning opportunities and inspiring future business leaders."
    },
    {
      image: "/team/Steven.png",
      name: "Steven He",
      role: "Vice President",
      description: "Steven combines his engineering background with entrepreneurial vision to mentor young innovators. His creative approach to problem-solving and project-based learning helps students develop practical skills while exploring their own business ideas and building confidence through hands-on experience."
    },
    {
      image: "/team/Taksh.png",
      name: "Taksh Taware",
      role: "2025 Executive Director",
      customPosition: "60% 15%",
      description: "Taksh brings fresh perspectives and leadership experience to the BizBuzz team. Having successfully raised funding for his own ventures, he mentors students through the entrepreneurial process from ideation to execution, helping them transform creative concepts into viable business opportunities with real-world impact."
    },
    {
      image: "/team/Arnav.png",
      name: "Arnav Sharma",
      role: "Executive Director & CTO",
      description: "Arnav leverages his expertise in technology and data science to create innovative educational platforms for young entrepreneurs. His technical knowledge and creative problem-solving abilities help streamline BizBuzz operations and develop digital resources that enhance the learning experience for students exploring business concepts.",
      customPosition: "40% center"
    },
    {
      image: "/team/Ethan.png",
      name: "Ethan Brock",
      role: "Chief Technology Officer",
      description: "Ethan specializes in developing technical solutions that make entrepreneurship education accessible and engaging. His innovative approach to educational technology helps BizBuzz create interactive learning experiences for students."
    },
    {
      image: "/team/Aiden.png",
      name: "Aiden Xie",
      role: "Chief Technology Officer",
      description: "Aiden builds the infrastructure that powers BizBuzz's digital presence. His software development skills support scalable programs and user-friendly tools for students and families."
    },
    {
      name: "Max Nadtochiy",
      role: "Leadership Team",
      description: "Max contributes his passion for business education and leadership to help expand BizBuzz's impact within the community."
    },
    {
      name: "Ca Van",
      role: "Leadership Team",
      description: "Leading initiatives that help BizBuzz reach more students every year."
    },
    {
      name: "Elena Kang Chou",
      role: "Leadership Team",
      description: "Leading initiatives that help BizBuzz reach more students every year."
    },
    {
      name: "Lakhi Thotakura",
      role: "Leadership Team",
      description: "Leading initiatives that help BizBuzz reach more students every year."
    },
    {
      name: "Abby May",
      role: "Leadership Team",
      description: "Leading initiatives that help BizBuzz reach more students every year."
    },
    {
      name: "Annabelle Cheng",
      role: "Leadership Team",
      description: "Leading initiatives that help BizBuzz reach more students every year."
    },
    {
      name: "Elizabeth Gao",
      role: "Leadership Team",
      description: "Leading initiatives that help BizBuzz reach more students every year."
    },
    {
      name: "Melody Hu",
      role: "Leadership Team",
      description: "Leading initiatives that help BizBuzz reach more students every year."
    },
    {
      name: "Zoha Ahmad",
      role: "Leadership Team",
      description: "Leading initiatives that help BizBuzz reach more students every year."
    },
    {
      name: "Colin Singer",
      role: "Leadership Team",
      description: "Leading initiatives that help BizBuzz reach more students every year."
    }
  ],

  coFounders2026: [
    {
      image: "/team/Allen.png",
      name: "Allen Xu",
      role: "Co-Founder",
      customPosition: "center 10%",
      description: "Allen is a junior at Naperville North HS interested in social innovation and finance. A three-time international finalist in entrepreneurship competitions like the Conrad Challenge & Blue Ocean Competition, and grand winner of the 2025 Harvard International Economics Essay Competition, he hopes to use what he has learned to help younger students turn imagination into innovation. As a kid, Allen spent winters watching Shark Tank and summers running lemonade stands in his cul-de-sac. After discovering that 90% of K–8 schools in Naperville do not offer business classes, he co-founded BizBuzz with Aarav—alongside other EdTech platforms—to help students like him find their ideas and the courage to share them."
    },
    {
      image: "/team/Aarav.png",
      name: "Aarav Khullar",
      role: "Co-Founder",
      description: "Aarav is a junior at Naperville North HS with a passion for business and fostering youth entrepreneurship. Growing up watching Shark Tank with his dad, he always dreamed of starting a high-quality business but never had any opportunities or support to do so. Seeing this same disparity affect hundreds of other young students in his community, he co-founded BizBuzz with one of his best friends, Allen, to give elementary & middle schoolers the kind of opportunity he never had. Now, as a startup founder himself, internationally awarded by the Walt Disney Company for his leadership, and named a Top 100 Emerging Innovator of 2025, Aarav hopes to translate the skills he's learned to empower the youth.",
      customPosition: "40% 10%"
    },
    {
      image: "/team/Taksh.png",
      name: "Taksh Taware",
      role: "President",
      description: "Taksh was an Executive Director of BizBuzz, where he has helped grow the program and raise thousands of dollars to expand opportunities for young entrepreneurs. A passionate leader, he was a key driver behind BizBuzz in 2025, focusing on building a strong, impactful community. Taksh is also an Illinois DECA State Champion and a Physics State Champion, showcasing both business and analytical excellence. Outside the classroom, he plays soccer and values teamwork and discipline. He is currently conducting research at UIC, continuing to explore innovation and problem-solving at a higher level. He is excited to inspire the next generation of entrepreneurs through BizBuzz.",
      customPosition: "center 15%"
    },
  ],

  leadershipTeam2026: [
    {
      name: "Lakhi Thotakura",
      role: "Chief Operating Officer",
      description: "Details coming soon."
    },
    {
      image: "/team/Elena.png",
      name: "Elena Kang Chou",
      role: "Chief Marketing Officer",
      description: "Details coming soon."
    },
    {
      image: "team/Abby.png",
      name: "Abby May",
      role: "Chief Financial Officer",
      description: "Details coming soon."
    },
    {
      image: "/team/Amar.png",
      name: "Amar Goyal",
      role: "Chief Technology Officer",
      customPosition: "center 30%",
      description: "Amar is a student developer with strong skills in software engineering and development. On his FRC robotics team's software subteam, he helped engineer the software powering the robot's shooter mechanism — work that contributed to the team earning a spot at the 2026 FRC Championship. At BizBuzz, he leads the technical vision, architecting and maintaining the platforms that power every camp, session, and demo day experience. Amar believes great technology should be invisible and the ideas it enables should speak for themselves."
    },
    {
      name: "Elizabeth Gao",
      role: "Executive Director",
      description: "Details coming soon."
    },
  ],

  instructors: [
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
      name: "Ansh Shah",
      description: "Ansh is passionate about STEM and entrepreneurship. He focuses on helping students build practical skills for their future ventures."
    },
    {
      name: "Ben Gula",
      description: "Ben brings his passion for aviation and business to BizBuzz. He enjoys helping students explore unique perspectives in entrepreneurship."
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
    },
    {
      name: "Rehaan John",
      description: "Rehaan brings enthusiasm and innovative teaching approaches to BizBuzz. He's committed to helping young students develop their entrepreneurial skills and turn their ideas into reality."
    }
  ],

  youthLeadership: [
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
  ]
};

// ============================================================================
// OTHER DATA CONSTANTS
// ============================================================================

const impactStats = [
  { label: "Students Taught", value: "1,172", description: "across camps, competitions, and workshops since 2024" },
  { label: "Schools Engaged", value: "79", description: "elementary, middle, and high schools represented across Illinois" },
  { label: "Funding Raised", value: "$10,421", description: "from 48 community partners, organizations, and sponsors" },
  { label: "Student Staff", value: "82", description: "high school volunteer staff and instructors" }
];

const programParticipation = [
  { total: 145, label: "2024 Scott Elementary School talk" },
  { total: 60, label: "2024 Crone Middle School talk" },
  { total: 110, label: "2024 Entrepreneurship Camp" },
  { total: 80, label: "2024 Fish Tank competition" },
  { total: 45, label: "2024 Naperville Children's Business Fair workshops" },
  { total: 150, label: "2024 Naperville Children's Business Fair" },
  { total: 90, label: "2024 Madison Junior High mxINCedu mentorship program" },
  { total: 20, label: "2024 Brookdale Business Bootcamp" },
  { total: 20, label: "2024 BestBrains workshops" },
  { total: 30, label: "2025 DuPage Children's Business Fair workshops" },
  { total: 120, label: "2025 Entrepreneurship Camp" },
  { total: 70, label: "2025 Fish Tank competition" },
  { total: 150, label: "2025 Naperville Children's Business Fair" }
];

const schoolDirectory = [
  {
    title: "High Schools (6)",
    items: [
      "Naperville North", "Naperville Central", "Neuqua Valley", "Waubonsie Valley", "Benet", "Metea"
    ]
  },
  {
    title: "Middle Schools (23)",
    items: [
      "Avery Coonley", "Bednarcik", "Calvary", "Cass", "Crone", "Gregory", "Granger", "Heritage Grove",
      "Hinsdale", "Homer", "Ira Jones", "Jefferson", "John F. Kennedy (Plainfield)", "Kennedy",
      "Lake Zurich North", "Lincoln", "Madison", "Margaret Mead", "Scullen", "Still", "Summit Hill",
      "Twin Groves", "Virgil I. Grissom"
    ]
  },
  {
    title: "Elementary Schools (50)",
    items: [
      "Adlai Stevenson", "Beebe", "Brooks", "Builta", "Clow", "Concord", "Cowlishaw", "DuPage Montessori",
      "Eagle Point", "Elmwood", "Erickson", "Fairview", "Frank C. Whiteley", "Freedom", "Fry", "Graham",
      "Georgetown", "Hillcrest", "Highlands", "Holmes", "Kendall", "Kindi", "Kingsley", "Longfellow",
      "Maercker", "May Watts", "McDole", "Meadow Glens", "Mill Street", "Nancy Young",
      "National Christian Academy", "Nerge", "Owen", "Patterson", "Peterson", "Prairie", "Ranchview",
      "River Woods", "Scott", "Southbury", "Springbrook", "Steeple Run", "Sts. Peter and Paul Catholic School",
      "Swift", "Wallin Oaks", "Walkers Grove", "Welch", "Wheatlands", "Wolf's Crossing", "Western Trails"
    ]
  }
];

const fundingSummary = [
  { label: "Total Raised", value: "$10,421", helper: "48 organizations" },
  { label: "Monetary Funding", value: "$7,912" },
  { label: "In-kind Donations", value: "$2,509" }
];

const supporters = [
  "Andy's Ice Cream", "AT&T", "Alive Center", "Annex Naperville Running Company", "Benedictine University",
  "Best Brains", "Business for Kids", "Category Pirates", "Centennial Beach", "Center for Future Innovators",
  "Chicago Wolves", "College of DuPage", "Conference Planning Resources", "Costco", "D203", "D204",
  "DuPage Children's Business Fair", "DuPage Children's Museum", "Elite Tutoring Place", "Fort Hill",
  "Fresh Thyme", "Gia Mia", "Gourmet Gift Baskets", "Kabat American", "Kendra Scott",
  "Illinois State University", "Kane County Cougars", "Kids Matter", "La Sorella di Francesca", "MOD Pizza",
  "Midwest Badminton", "Nandos", "Naper Nuts & Sweets", "Naperville Children's Business Fair",
  "Naperville Park District", "Naperville Public Libraries", "NCTV17", "Nothing Bundt Cakes", "Potbelly",
  "Potters Place", "River Run Raptors Swim Team", "Samantha Zylstra & Associates", "SteamDream Team",
  "Steeple Run Stingrays Swim Team", "Stillwater Starz Swim Team", "Teen Philanthropy Initiative",
  "White Sox", "Wise Youth"
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [leadershipYear, setLeadershipYear] = useState<"2025" | "2026">("2025");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about/background.jpg" 
            alt="BizBuzz Hero" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1d3d]/90 to-[#0c1d3d]/65" />
          
          <div className="absolute bottom-0 left-0 right-0 translate-y-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
              <path fill="#ffffff" fillOpacity="0.95" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
            </svg>
          </div>
          
          {mounted && [...Array(15)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ x: Math.random() * 100 - 50 + "%", y: Math.random() * 100 - 50 + "%", opacity: Math.random() * 0.5 + 0.1 }}
              animate={{ 
                x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"]
              }}
              transition={{ duration: Math.random() * 15 + 15, repeat: Infinity, repeatType: "reverse" }}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                background: i % 3 === 0 ? "radial-gradient(circle, #3AB6FF 0%, rgba(58, 182, 255, 0) 70%)" 
                  : i % 3 === 1 ? "radial-gradient(circle, #FFD700 0%, rgba(255, 215, 0, 0) 70%)" 
                    : "radial-gradient(circle, #ffffff 0%, rgba(255, 255, 255, 0) 70%)",
              }}
            />
          ))}
        </div>
        
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

      {/* Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1d3d]/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-64 opacity-20">
          {mounted && [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#3AB6FF]"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, Math.random() * -30 - 10], opacity: [0.2, 0.8, 0] }}
              transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, repeatType: "loop" }}
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black relative inline-block">Our Mission</h2>
                <motion.div 
                  className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#3AB6FF] via-[#FFD700] to-[#3AB6FF]"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: '200% 200%' }}
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
                From free camps to professional pitch competitions to webinars to workshops, we organize programs that bring together business professionals, government leaders, student entrepreneurs, and families in Naperville & beyond. As a 100% student-run and student-led organization, we offer more than just a talented ensemble of high school instructors. We offer a program that has been tirelessly crafted to optimize student outcomes and promoted to create communal change—entirely for students, by students. And we&apos;re just getting started.
              </MissionParagraph>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact at a Glance Section */}
      <section className="py-20 bg-[#f9fafb] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Impact at a Glance</h2>
            <p className="text-lg text-black/70">
              BizBuzz connects students, schools, and sponsors to build a thriving youth entrepreneurship community across Chicagoland.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, idx) => (
              <ImpactCard key={idx} {...stat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Impact & Reach Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">A deeper look at the students, schools, and community partners that make BizBuzz possible.</h2>
          </motion.div>
            
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-black">Student Participation</h3>
                  <p className="text-black/60">Breakdown of students who have joined BizBuzz programs</p>
                </div>
                <span className="text-sm font-semibold text-[#3AB6FF] uppercase tracking-[0.3em]">Programs</span>
              </div>
              <div className="max-h-[320px] overflow-y-auto px-8 py-6 space-y-4 custom-scroll">
                {programParticipation.map((program, idx) => (
                  <ProgramStat key={idx} {...program} />
                ))}
              </div>
            </motion.div>
          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-slate-100 flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-black">Schools We Serve</h3>
                <p className="text-black/60">Representation from elementary, middle, and high schools across the region</p>
              </div>
              <SchoolGallery schoolDirectory={schoolDirectory} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
          >
            <div className="px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-black">Community Support</h3>
                <p className="text-black/60">Financial contributions and in-kind resources empower BizBuzz to stay student-led and cost-free.</p>
              </div>
            </div>
            <div className="px-8 py-6 grid md:grid-cols-3 gap-6">
              {fundingSummary.map((item, idx) => (
                <FundingCard key={idx} {...item} />
              ))}
            </div>
            <div className="px-8 pb-8">
              <h4 className="text-sm font-semibold text-black/70 uppercase tracking-[0.3em] mb-4">Partners &amp; Sponsors</h4>
              <div className="flex flex-wrap gap-3">
                {supporters.map((supporter, idx) => (
                  <EnhancedSupporterPill key={idx} name={supporter} index={idx} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {mounted && [...Array(30)].map((_, i) => (
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
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, repeatType: "reverse" }}
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
              <h2 className="text-4xl md:text-5xl font-bold text-black relative inline-block">In The News</h2>
            </div>
            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-lg text-black">Our journey has been featured by local media, highlighting our commitment to fostering entrepreneurship in students throughout Naperville and beyond.</p>
            </div>
          </motion.div>
          
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

          <InterviewFeature 
            title="Daily Herald Interview"
            description="During the Madison Junior High mxINCedu mentorship program, we had the opportunity to be interviewed by the Daily Herald. We discussed the importance of youth entrepreneurship—especially in Naperville, where over 90% of K–8 students lack access to business education in school."
            images={["/about/daily.jpg", "/about/madi.png"]}
            imagePosition="left"
            index={1}
          />

          <InterviewFeature 
            title="Naperville Channel Television 17 Interview"
            description="Over the summer, BizBuzz joined Jane Wernette with Naperville Community Television 17 and their Spotlight show to talk about our 2025 Summer Entrepreneurship Camp and the second annual Fish Tank contest at Benedictine University. This year, we came back bigger than ever, with more students, more mentors, and an incredible lineup of guest speakers like Shark Tank alum Lindsey Fleischhauer and Mayor Scott Wehrli. What started as a small idea has now grown into one of the largest youth entrepreneurship programs across the country!"
            links={[
              {
                text: "BizBuzz Turns Imagination into Innovation",
                url: "https://www.nctv17.org/spotlight/bizbuzz-turns-imagination-into-innovation/"
              }
            ]}
            singleImage="/news/nctv-spotlight-2025.jpg"
            imagePosition="right"
            index={2}
          />

          <InterviewFeature 
            title="Naperville Channel Television 17 Interview"
            description="In fall 2024, BizBuzz was invited to interview with Naperville Community Television 17 to share how local news has helped the organization grow. Coverage from NCTV17 has connected BizBuzz with parents looking for opportunities for their students and sponsors looking to support youth entrepreneurship. Through these connections, BizBuzz can better turn imagination into innovation!"
            links={[
              {
                text: "The Students of BizBuzz Were Inspired by NCTV17 to Share Their Story",
                url: "https://www.youtube.com/watch?v=CETzJ9aPp7w"
              }
            ]}
            singleImage="/news/nctv-students-2024.jpg"
            imagePosition="left"
            index={3}
          />

          <InterviewFeature 
            title="We Love Naperville Interview"
            description="Shortly after the first-ever Fish Tank contest, BizBuzz celebrated the success of its inaugural summer camp in the Chicagoland area and the success of all the young kidpreneurs who participated, including Fish Tank champion Garrett Hauk."
            links={[
              {
                text: "Inaugural BizBuzz Camp for Kid Entrepreneurs",
                url: "https://welovenaperville.co/article/inaugural-bizbuzz-camp-for-kid-entrepreneurs"
              }
            ]}
            singleImage="/news/welovenaperville-2024.jpg"
            imagePosition="right"
            index={4}
          />

          <InterviewFeature 
            title="2025 KidsMatter Teen Philanthropy Initiative Grant Winner"
            description="The Teen Philanthropy Initiative is a national 501(c)(3) nonprofit philanthropy service organization who partners with communities and local tax-exempt organizations to expand existing programs or initiate new projects. In the 2024–2025 application cycle, following an intensive review process and one-hour interview, BizBuzz was awarded a $1,000 grant—the largest amount of funding given to any organization in Naperville."
            links={[
              {
                text: "Learn More About the Teen Philanthropy Initiative",
                url: "https://www.kidsmatter2us.org/teen-philanthropy-initiative/"
              }
            ]}
            images={["/news/tpi-2025.jpg", "/news/tpi-2025-b.jpg"]}
            imagePosition="left"
            index={5}
          />
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-[#f9fafb] to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-[#3AB6FF]/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#FFD700]/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Team</h2>
            <p className="text-lg md:text-xl text-black max-w-4xl mx-auto mb-8">
              BizBuzz is powered by a dedicated team of student leaders, entrepreneurs, and educators committed to fostering the next generation of business innovators.
            </p>
          </motion.div>

          {/* Presidents & Co-Founders — static, always shown */}
          <TeamSection
            title="Presidents & Co-Founders"
            people={PEOPLE.coFounders2026}
            color="#FFD700"
            gridClass="grid md:grid-cols-3 gap-6"
            large={false}
            smallerSecondary={true}
          />

          {/* Leadership Team year toggle */}
          <div className="flex items-center justify-center gap-3 mt-10 mb-4">
            <span className="text-sm font-semibold text-[#0c1d3d]/60 uppercase tracking-widest">Leadership Team</span>
            <div className="inline-flex rounded-full border border-[#3AB6FF]/30 overflow-hidden shadow-sm">
              {(["2025", "2026"] as const).map((year) => (
                <button
                  key={year}
                  onClick={() => setLeadershipYear(year)}
                  className={`px-6 py-2 text-sm font-semibold transition-all duration-200 ${
                    leadershipYear === year
                      ? "bg-[#3AB6FF] text-white"
                      : "bg-white text-[#0c1d3d] hover:bg-[#f0f9ff]"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <TeamSection
            title="Leadership Team"
            people={leadershipYear === "2025" ? PEOPLE.leadershipTeam : PEOPLE.leadershipTeam2026}
            color="#3AB6FF"
            gridClass={leadershipYear === "2026" ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"}
            larger={false}
            smallerSecondary={true}
          />
          
          {/* Instructors */}
          <SimpleTeamSection 
            title="Instructors" 
            people={PEOPLE.instructors} 
            role="Instructor"
            color="#3AB6FF"
          />

          {/* Youth Leadership Team */}
          <SimpleTeamSection 
            title="Youth Leadership Team" 
            people={PEOPLE.youthLeadership} 
            role="Youth Leadership"
            color="#FFD700"
              />
            </div>
      </section>

    </div>
  );
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <motion.div 
          animate={{ y: [0, 12, 0], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-1.5 h-1.5 bg-white rounded-full mt-2"
        ></motion.div>
      </div>
    </div>
  );
}

function ImpactCard({ value, label, description, index }: { value: string; label: string; description?: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });
  const countable = /\d/.test(value);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!countable || !isInView) return;
    const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
    if (Number.isNaN(numeric)) return;
    const prefix = value.trim().startsWith("$") ? "$" : "";
    const suffix = value.trim().endsWith("+") ? "+" : "";
    const duration = 1200;
    const startTime = performance.now();
    let frame: number;

    const animateValue = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.round(progress * numeric);
      const formatted = `${prefix}${current.toLocaleString()}${suffix}`;
      setDisplayValue(formatted);
      if (progress < 1) {
        frame = requestAnimationFrame(animateValue);
      } else {
        setDisplayValue(value);
      }
    };

    frame = requestAnimationFrame(animateValue);
    return () => cancelAnimationFrame(frame);
  }, [value, countable, isInView]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-white rounded-3xl shadow-lg border border-slate-100 p-8 text-left"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#3AB6FF]/5 via-transparent to-[#FFD700]/5 opacity-60" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3AB6FF]/50"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#3AB6FF]"></span>
            </span>
          </div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#3AB6FF]">Impact</p>
        </div>
        <div className="text-4xl font-bold text-[#0c1d3d] mb-1">
          {countable ? displayValue : value}
        </div>
        <div className="text-lg font-semibold text-[#3AB6FF] mb-2">{label}</div>
        {description && <p className="text-sm text-black/60 leading-relaxed">{description}</p>}
      </div>
    </motion.div>
  );
}

function ProgramStat({ total, label }: { total: number; label: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-[#3AB6FF]/10 text-[#3AB6FF] font-bold text-lg flex items-center justify-center">{total}</div>
      <p className="text-black/70 leading-relaxed flex-1">{label}</p>
    </div>
  );
}

function SchoolGallery({ schoolDirectory }: { schoolDirectory: Array<{ title: string; items: string[] }> }) {
  const [activeGroup, setActiveGroup] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const active = schoolDirectory[activeGroup];

  return (
    <div className="px-8 py-6 space-y-6">
      <div className="flex gap-3 flex-wrap">
        {schoolDirectory.map((group, idx) => (
          <motion.button
            key={group.title}
            type="button"
            onClick={() => setActiveGroup(idx)}
            whileHover={{ scale: 1.03 }}
            className="px-4 py-2 rounded-full border text-sm font-semibold transition-all"
            animate={{
              backgroundColor: activeGroup === idx ? '#3AB6FF' : 'transparent',
              color: activeGroup === idx ? '#fff' : '#0c1d3d',
              borderColor: activeGroup === idx ? '#3AB6FF' : 'rgba(12,29,61,0.2)',
              boxShadow: activeGroup === idx ? '0 15px 25px rgba(58,182,255,0.25)' : '0 0 0 rgba(0,0,0,0)'
            }}
          >
            {group.title}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={active.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-h-[320px] overflow-y-auto custom-scroll pr-3"
      >
        <div className="grid sm:grid-cols-2 gap-3">
          {active.items.map((school, idx) => (
            <motion.div
              key={school}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                borderColor: hoveredIndex === idx ? '#3AB6FF' : 'rgba(12,29,61,0.1)',
                backgroundColor: hoveredIndex === idx ? 'rgba(58,182,255,0.08)' : '#ffffff'
              }}
              className="p-3 rounded-2xl border flex items-center gap-3 transition-colors duration-200"
            >
              <motion.div
                animate={{
                  backgroundColor: hoveredIndex === idx ? '#3AB6FF' : '#E8F6FF',
                  color: hoveredIndex === idx ? '#fff' : '#3AB6FF'
                }}
                className="w-10 h-10 rounded-xl flex items-center justify-center font-semibold text-sm"
              >
                {school.slice(0, 2).toUpperCase()}
              </motion.div>
              <div className="flex-1">
                <p className="font-semibold text-[#0c1d3d] leading-tight">{school}</p>
                <p className="text-xs text-black/50">{active.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function FundingCard({ label, value, helper }: { label: string; value: string; helper?: string }) {
  return (
    <div className="bg-[#f9fafb] rounded-2xl border border-slate-100 p-6">
      <div className="text-sm font-semibold text-[#3AB6FF] uppercase tracking-[0.25em] mb-2">{label}</div>
      <div className="text-3xl font-bold text-[#0c1d3d]">{value}</div>
      {helper && <div className="text-sm text-black/60 mt-2">{helper}</div>}
    </div>
  );
}

function EnhancedSupporterPill({ name, index }: { name: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-block cursor-pointer"
    >
      <motion.span
        animate={{
          backgroundColor: isHovered ? '#3AB6FF' : 'rgba(58, 182, 255, 0.05)',
          color: isHovered ? 'white' : '#0c1d3d',
          borderColor: isHovered ? '#3AB6FF' : 'rgba(58, 182, 255, 0.1)',
          boxShadow: isHovered ? '0 4px 12px rgba(58, 182, 255, 0.3)' : '0 0 0 rgba(58, 182, 255, 0)'
        }}
        transition={{ duration: 0.2 }}
        className="px-4 py-2 text-sm font-medium rounded-full border inline-block"
      >
        {name}
      </motion.span>
    </motion.span>
  );
}

function MissionParagraph({ children, animationDelay = 0, highlight = false }: { children: React.ReactNode, animationDelay?: number, highlight?: boolean }) {
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
                boxShadow: ['0 0 5px #FFD700', '0 0 15px #FFD700', '0 0 5px #FFD700']
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

      {highlight && <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#FFD700]/10 rounded-full -z-10"></div>}
      {!highlight && <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#3AB6FF]/10 rounded-full -z-10"></div>}
    </motion.div>
  );
}

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
  singleImage?: string;
  imagePosition: 'left' | 'right';
  index: number;
}

function InterviewFeature({ title, description, links, videoEmbedUrl, images, singleImage, imagePosition, index }: InterviewFeatureProps) {
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
                whileHover={{ scale: 1.03, backgroundColor: "#f0f9ff", color: "#3AB6FF" }}
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
                src={videoEmbedUrl}
                title={title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="h-1 bg-[#3AB6FF] w-full"></div>
          </div>
        ) : singleImage ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: contentDelay + 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md border-4 border-white"
          >
            <Image src={singleImage} alt={title} fill className="object-cover" />
          </motion.div>
        ) : images && images.length === 2 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: contentDelay + 0.1 }}
            viewport={{ once: true }}
            className="relative w-full h-full"
          >
            <div className="relative w-full aspect-[4/3]">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 right-0 w-[65%] aspect-[4/3] rounded-lg overflow-hidden shadow-xl border-4 border-white z-10"
              >
                <Image src={images[1]} alt={`${title} image 2`} fill className="object-cover" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 w-[70%] aspect-[4/3] rounded-lg overflow-hidden shadow-xl border-4 border-white"
              >
                <Image src={images[0]} alt={`${title} image 1`} fill className="object-cover" />
              </motion.div>
            </div>
          </motion.div>
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
                <Image src={image} alt={`${title} image ${i + 1}`} fill className="object-cover" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function TeamSection({ title, people, color, gridClass, large = false, larger = false, smallerSecondary = false }: { title: string; people: Person[]; color: string; gridClass: string; large?: boolean; larger?: boolean; smallerSecondary?: boolean }) {
  return (
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
            {title}
            <div className="absolute -bottom-2 left-0 w-full h-1" style={{ backgroundColor: color }}></div>
          </span>
        </h3>
      </motion.div>
      
      <div className={gridClass}>
        {people.map((person, index) => (
          <TeamMember
            key={index}
            image={person.image}
            name={person.name}
            role={person.role}
            description={person.description}
            large={large}
            index={index}
            customPosition={person.customPosition}
            centerText={!large}
            larger={larger}
            smallerSecondary={smallerSecondary && index >= 4}
          />
        ))}
      </div>
    </div>
  );
}

function SimpleTeamSection({ title, people, role, color }: { title: string; people: Array<{name: string; description: string}>; role: string; color: string }) {
  return (
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
            {title}
            <div className="absolute -bottom-2 left-0 w-full h-1" style={{ backgroundColor: color }}></div>
          </span>
        </h3>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((member, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-[#003166]/10 hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-semibold text-black mb-2">{member.name}</h4>
            <p className="text-[#3AB6FF] text-sm mb-3">{role}</p>
            <p className="text-black/80 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
  larger = false,
  smallerSecondary = false
}: { 
  image?: string, 
  name: string, 
  role: string, 
  description: string, 
  large?: boolean, 
  index: number,
  imagePosition?: 'center' | 'right' | 'left',
  customPosition?: string,
  centerText?: boolean,
  larger?: boolean,
  smallerSecondary?: boolean
}) {
  const generatePlaceholderColor = () => {
    const colors = ['#3AB6FF', '#FFD700', '#0c1d3d'];
    return colors[Math.floor(name.length % colors.length)];
  };
  
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const hasImage = Boolean(image);

  function getObjectPositionValue() {
    if (customPosition) return customPosition;
    if (imagePosition === 'right') return 'right center';
    if (imagePosition === 'left') return 'left center';
    return 'center';
  }

  const objectPositionValue = getObjectPositionValue();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 group hover:shadow-xl transition-all duration-300 h-full ${larger ? 'shadow-xl lg:min-h-[520px]' : smallerSecondary ? 'lg:min-h-[440px]' : ''}`}
    >
      <div className={large ? 'flex flex-col md:flex-row md:gap-8 h-full' : 'flex flex-col h-full'}>
        <div
          className={
            large
              ? 'md:w-1/2 relative overflow-hidden bg-slate-50 aspect-[4/3] md:aspect-auto md:min-h-[380px]'
              : `w-full relative overflow-hidden bg-slate-50 aspect-[4/3]`
          }
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3AB6FF]/20 to-[#FFD700]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
            
          {!hasImage && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: generatePlaceholderColor() }}>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className={`font-bold text-white opacity-70 ${larger ? 'text-6xl' : smallerSecondary ? 'text-4xl' : 'text-5xl'}`}>{initials}</div>
                <div className="text-sm text-white mt-2 opacity-60">{role}</div>
              </div>
            </div>
          )}
            
          {hasImage && (
            <Image
              src={image as string}
              alt={name}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
              sizes={large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"}
              priority={Boolean(image && image === '/team/Eddy.png' && index === 0)}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              style={{ objectPosition: objectPositionValue as unknown as string }}
            />
          )}
          </div>
          
        <div className={`flex-grow flex flex-col ${large ? 'md:w-1/2' : ''} ${centerText ? 'items-center text-center' : ''} ${larger ? 'p-7 md:p-9' : smallerSecondary ? 'p-5 md:p-6' : large ? 'p-6 md:p-8' : 'p-4'}`}>
          <h4 className={`font-bold text-black mb-1 ${larger ? 'text-xl md:text-2xl' : smallerSecondary ? 'text-base md:text-lg' : large ? 'text-lg' : 'text-base'}`}>{name}</h4>
            {role && <p className="text-[#3AB6FF] text-xs font-medium mb-2">{role}</p>}
          <p className={`text-black ${larger ? 'text-sm md:text-base leading-relaxed' : smallerSecondary ? 'text-xs leading-relaxed' : large ? 'text-xs md:text-sm leading-relaxed' : 'text-xs leading-relaxed'}`}>
            {description || "Coming soon"}
          </p>
          </div>
        </div>
    </motion.div>
  );
}
