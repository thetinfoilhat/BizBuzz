"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const OneOnOneSessions = () => {
  const [activeTab, setActiveTab] = useState<'individual' | 'group'>('individual');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real app, you would send the form data to the server here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with blue overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/program_cards/mentorship.jpg" 
            alt="Mentorship background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040037]/95 via-[#003166]/90 to-[#003166]/80"></div>
        </div>
        
        {/* Large transparent bubble decorations */}
        <div className="absolute top-60 right-40 w-80 h-80 rounded-full bg-[#0066cc]/10 blur-2xl"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 rounded-full bg-[#0066cc]/10 blur-2xl"></div>
        <div className="absolute top-40 left-1/4 w-64 h-64 rounded-full bg-[#0074cc]/10 blur-2xl"></div>
        
        {/* Wave at the bottom */}
        <div className="absolute -bottom-1 left-0 right-0 z-10">
          <svg className="w-full fill-white" viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"></path>
          </svg>
        </div>
        
        {/* Main content container */}
        <div className="container mx-auto px-4 relative z-20 pt-24 pb-32">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Title and description */}
            <div className="flex flex-col justify-center">
              <h1 className="text-left mb-8">
                <span className="block text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-none">1:1</span>
                <span className="block text-7xl md:text-8xl font-extrabold tracking-tight text-[#FFD700] leading-none">SESSIONS</span>
              </h1>
              
              <div className="bg-[#003166]/40 backdrop-blur-sm rounded-xl p-7 border border-white/10 shadow-lg mb-12">
                <p className="text-xl leading-relaxed text-white">
                  Connect with experienced mentors in personalized 1.5-hour sessions designed to accelerate your entrepreneurial journey and bring your business ideas to life.
                </p>
              </div>
              
              {/* Locations Section - Redesigned */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-6 bg-[#FFD700] mr-3 rounded-full"></div>
                  <h3 className="text-xl font-bold text-white">Available Locations</h3>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    { name: "95th Library", color: "#10b981" },
                    { name: "Nichols Library", color: "#f59e0b" },
                    { name: "Naper Blvd Library", color: "#0ea5e9" },
                    { name: "Aurora Library", color: "#8b5cf6" },
                    { name: "Lisle Library", color: "#ec4899" }
                  ].map((location, index) => (
                    <div key={index} className="inline-flex items-center px-3 py-1.5 bg-[#003166]/60 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-[#003166]/80 transition-all">
                      <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: location.color }}></span>
                      <span className="text-sm font-medium text-white">{location.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#booking" 
                  className="inline-flex items-center px-8 py-4 bg-[#FFD700] text-[#004080] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  Book a Session
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                
                <a 
                  href="#session-types" 
                  className="inline-flex items-center px-8 py-4 bg-white text-[#004080] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right column - Featured image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 h-[500px]">
              <div className="absolute inset-0 bg-[#003166]/20 z-10"></div>
              <Image
                src="/image_gallery/3.jpg"
                alt="1:1 session with a mentor"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000]/60 to-transparent z-10"></div>
              
              {/* Stats overlapping the image */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#003166]/60 backdrop-blur-sm rounded-xl py-4 px-3 text-center border border-white/10">
                    <div className="text-3xl font-bold text-[#FFD700]">150+</div>
                    <div className="text-sm text-white">Students</div>
                  </div>
                  
                  <div className="bg-[#003166]/60 backdrop-blur-sm rounded-xl py-4 px-3 text-center border border-white/10">
                    <div className="text-3xl font-bold text-[#FFD700]">15</div>
                    <div className="text-sm text-white">Mentors</div>
                  </div>
                  
                  <div className="bg-[#003166]/60 backdrop-blur-sm rounded-xl py-4 px-3 text-center border border-white/10">
                    <div className="text-3xl font-bold text-[#FFD700]">4.9</div>
                    <div className="text-sm text-white">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types Section */}
      <section id="session-types" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#f0f7ff]/50 to-transparent -z-10"></div>
        <div className="absolute left-20 top-20 w-64 h-64 rounded-full bg-[#003166]/5 -z-10"></div>
        <div className="absolute right-20 bottom-20 w-80 h-80 rounded-full bg-[#003166]/5 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#003166]/5 mb-3">
              <span className="text-[#003166] font-semibold">Choose Your Format</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Session Formats
            </h2>
            <p className="text-lg text-[#000000] max-w-3xl">
              Select the session format that aligns with your learning style and entrepreneurial goals
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-[#003166]/10">
            <div className="flex border-b">
              <button 
                className={`flex-1 py-4 px-6 text-center font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'individual' 
                    ? 'bg-[#003166] text-white' 
                    : 'bg-white text-[#000000] hover:bg-slate-50'
                }`}
                onClick={() => setActiveTab('individual')}
              >
                Individual Sessions
              </button>
              <button 
                className={`flex-1 py-4 px-6 text-center font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'group' 
                    ? 'bg-[#003166] text-white' 
                    : 'bg-white text-[#000000] hover:bg-slate-50'
                }`}
                onClick={() => setActiveTab('group')}
              >
                Group Sessions
              </button>
            </div>
            
            <div className="p-8">
              {activeTab === 'individual' ? (
                <div className="grid md:grid-cols-12 gap-10 items-center">
                  <div className="md:col-span-7">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#003166]/10 mb-4">
                      <span className="text-[#003166] font-semibold">One-on-One</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-5 text-[#0f172a]">Personalized Mentorship</h3>
                    <p className="text-lg text-[#334155] mb-6">
                      Our one-on-one sessions provide dedicated mentorship tailored specifically to your business ideas and entrepreneurial journey. Get focused guidance to accelerate your growth.
                    </p>
                    
                    <div className="border border-[#003166]/10 rounded-2xl p-6 mb-8 bg-gradient-to-br from-white to-[#f0f7ff]">
                      <ul className="space-y-5">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003166] flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#334155]">Personalized 1.5-hour sessions</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003166] flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#334155]">Focused on your specific business idea</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003166] flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#334155]">Tailored feedback and actionable advice</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003166] flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#334155]">In-depth discussion on finance and innovation</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="inline-flex items-center py-3 px-5 bg-gradient-to-r from-[#003166]/5 to-[#003166]/10 rounded-xl border border-[#003166]/20">
                      <span className="font-semibold text-[#334155] mr-4">Price:</span> 
                      <span className="text-[#003166] font-bold text-2xl">Free</span>
                      <span className="ml-3 bg-[#003166]/10 px-3 py-1 rounded-lg text-xs font-semibold text-[#003166]">Limited Availability</span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#003166]/10 h-[350px] mb-6">
                      <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#003166]/10 rounded-full z-0"></div>
                      <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#003166]/10 rounded-full z-0"></div>
                      
                      <div className="absolute inset-0 z-10">
                        <Image 
                          src="/image_gallery/3.jpg" 
                          alt="One-on-one mentorship session" 
                          fill 
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent"></div>
                      </div>
                      
                      {/* Gold accent bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#FFD700] z-20"></div>
                    </div>
                    
                    <a href="#booking" className="block w-full bg-[#003166] text-white text-center font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:bg-[#004080]">
                      Book Individual Session
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-12 gap-10 items-center">
                  <div className="md:col-span-7">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#003166]/10 mb-4">
                      <span className="text-[#003166] font-semibold">Collaborative Learning</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-5 text-[#0f172a]">Small Group Sessions</h3>
                    <p className="text-lg text-[#334155] mb-6">
                      Join a small group of like-minded entrepreneurs to share ideas, provide peer feedback, and learn together in a collaborative environment guided by our experienced mentors.
                    </p>
                    
                    <div className="border border-[#003166]/10 rounded-2xl p-6 mb-8 bg-gradient-to-br from-white to-[#f0f7ff]">
                      <ul className="space-y-5">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003166] flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#334155]">Small groups of 3-5 students</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003166] flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#334155]">Collaborative learning environment</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003166] flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#334155]">Peer feedback and idea sharing</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#003166] flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#334155]">Structured curriculum aligned with workshops</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="inline-flex items-center py-3 px-5 bg-gradient-to-r from-[#003166]/5 to-[#003166]/10 rounded-xl border border-[#003166]/20">
                      <span className="font-semibold text-[#334155] mr-4">Price:</span> 
                      <span className="text-[#003166] font-bold text-2xl">Free</span>
                      <span className="ml-3 bg-[#003166]/10 px-3 py-1 rounded-lg text-xs font-semibold text-[#003166]">Weekly Sessions</span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#003166]/10 h-[350px] mb-6">
                      <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#003166]/10 rounded-full z-0"></div>
                      <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#003166]/10 rounded-full z-0"></div>
                      
                      <div className="absolute inset-0 z-10">
                        <Image 
                          src="/image_gallery/5.jpg" 
                          alt="Small group session" 
                          fill 
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent"></div>
                      </div>
                      
                      {/* Gold accent bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#FFD700] z-20"></div>
                    </div>
                    
                    <a href="#booking" className="block w-full bg-[#003166] text-white text-center font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:bg-[#004080]">
                      Join Group Session
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#f0f7ff] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#003166]/5 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#003166]/5 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#003166]/10 mb-3">
              <span className="text-[#003166] font-semibold">Success Stories</span>
            </div>
            
            <div className="flex items-center mb-3">
              <div className="w-1 h-8 bg-[#FFD700] mr-4 rounded-full hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a]">
                What Our Students Say
              </h2>
            </div>
            
            <p className="text-lg text-[#334155] max-w-3xl">
              Hear from students who have participated in our 1:1 sessions about their entrepreneurial journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophia Chen",
                grade: "8th Grade",
                quote: "The 1:1 sessions helped me refine my app idea and create a solid business plan. My mentor's guidance was invaluable in helping me prepare for the Fish Tank competition!",
                avatar: "/hero_imgs/11.jpg"
              },
              {
                name: "Jayden Williams",
                grade: "6th Grade",
                quote: "I missed a few bootcamp sessions and was falling behind. The catch-up sessions helped me understand the material and gave me confidence to continue with my business project.",
                avatar: "/hero_imgs/13.jpg"
              },
              {
                name: "Maya Patel",
                grade: "7th Grade",
                quote: "Working one-on-one with my mentor helped me understand financial concepts in a way that made sense for my specific business idea. I'm now much more confident about my startup!",
                avatar: "/hero_imgs/14.jpg"
              }
            ].map((testimonial, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl shadow-xl border border-[#003166]/5 overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
              >
                {/* Gold accent bar */}
                <div className="h-1.5 bg-[#FFD700]"></div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-[#003166]/30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  <p className="text-[#334155] leading-relaxed mb-8 text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-[#003166]/10 group-hover:border-[#003166]/30 transition-all">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0f172a]">{testimonial.name}</h3>
                      <p className="text-[#003166] font-medium">{testimonial.grade}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#f0f7ff]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#003166]/10 transform -translate-y-6">
            <div className="grid md:grid-cols-12 h-full">
              {/* Left side: Image */}
              <div className="md:col-span-5 relative overflow-hidden hidden md:block">
                <div className="absolute inset-0">
                  <Image 
                    src="/program_cards/mentorship.jpg" 
                    alt="Mentorship session" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003166]/90 to-[#003166]/70"></div>
                </div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                      <span className="text-sm font-medium text-white">Contact Us</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">Book Your Session</h3>
                    <p className="text-lg text-white/90 mb-8">
                      Fill out this form to request a 1:1 session with one of our expert mentors. We&apos;ll match you with the perfect mentor for your entrepreneurial journey.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center mr-4">
                        <svg className="h-5 w-5 text-[#FFD700]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Need Assistance?</h4>
                        <p className="text-white/80 text-sm">Email us at info@bizbuzznfp.org</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side: Form */}
              <div className="md:col-span-7 p-8 md:p-10">
                <div className="mb-8 md:hidden">
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-3">Book Your Session</h3>
                  <p className="text-[#334155]">
                    Fill out this form to request a 1:1 session with one of our expert mentors.
                  </p>
                </div>
                
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first_name" className="block text-[#0f172a] font-medium text-sm">First name</label>
                        <input 
                          type="text" 
                          id="first_name" 
                          className="bg-[#f8fafc] border border-[#e2e8f0] text-[#0f172a] rounded-lg focus:ring-[#003166] focus:border-[#003166] block w-full p-3 shadow-sm transition-all" 
                          placeholder="John" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last_name" className="block text-[#0f172a] font-medium text-sm">Last name</label>
                        <input 
                          type="text" 
                          id="last_name" 
                          className="bg-[#f8fafc] border border-[#e2e8f0] text-[#0f172a] rounded-lg focus:ring-[#003166] focus:border-[#003166] block w-full p-3 shadow-sm transition-all" 
                          placeholder="Doe" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[#0f172a] font-medium text-sm">Email address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="bg-[#f8fafc] border border-[#e2e8f0] text-[#0f172a] rounded-lg focus:ring-[#003166] focus:border-[#003166] block w-full p-3 shadow-sm transition-all" 
                        placeholder="john.doe@example.com" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="school" className="block text-[#0f172a] font-medium text-sm">School</label>
                      <input 
                        type="text" 
                        id="school" 
                        className="bg-[#f8fafc] border border-[#e2e8f0] text-[#0f172a] rounded-lg focus:ring-[#003166] focus:border-[#003166] block w-full p-3 shadow-sm transition-all" 
                        placeholder="Naperville Central High School" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="concerns" className="block text-[#0f172a] font-medium text-sm">Questions or concerns</label>
                      <textarea 
                        id="concerns" 
                        rows={3}
                        className="bg-[#f8fafc] border border-[#e2e8f0] text-[#0f172a] rounded-lg focus:ring-[#003166] focus:border-[#003166] block w-full p-3 shadow-sm transition-all" 
                        placeholder="Any questions or concerns you'd like us to address" 
                      ></textarea>
                    </div>

                    <div>
                      <button 
                        type="submit" 
                        className="w-full bg-[#003166] text-white font-semibold py-3 px-4 rounded-lg transition-all hover:bg-[#004080] hover:shadow-lg hover:shadow-[#003166]/20 active:scale-98 flex items-center justify-center"
                      >
                        <span>Request Your Session</span>
                        <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                      
                      <p className="text-sm text-[#64748b] text-center mt-4">
                        We&apos;ll get back to you within 48 hours to schedule your session
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-10">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#003166]/10 text-[#003166] mb-6">
                      <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Request Submitted!</h3>
                    <p className="text-[#334155] mb-8 max-w-lg mx-auto">
                      Thank you for your interest in our 1:1 sessions. We&apos;ll get back to you within 48 hours to schedule your session.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center justify-center border-2 border-[#003166] text-[#003166] font-semibold py-3 px-6 rounded-lg hover:bg-[#003166]/5 transition-all"
                    >
                      <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Submit Another Request
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OneOnOneSessions; 