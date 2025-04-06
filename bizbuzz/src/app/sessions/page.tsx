"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#f8f9ff] -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6366F1]/5 -z-10 rounded-bl-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-7xl md:text-8xl font-bold text-[#0f172a] mb-8 leading-tight">
              1:1 <span className="text-[#6366F1]">Sessions</span>
            </h1>
            <p className="text-2xl text-[#000000] mb-10 max-w-3xl">
              Connect with experienced mentors in personalized 1.5-hour sessions designed to accelerate your entrepreneurial journey and bring your business ideas to life.
            </p>
            
            {/* Locations Section */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
              <p className="text-[#6366F1] font-semibold mr-2">Available at:</p>
              {[
                { name: "95th Library", color: "#10b981" },
                { name: "Nichols Library", color: "#f59e0b" },
                { name: "Naper Blvd Library", color: "#0ea5e9" },
                { name: "Aurora Library", color: "#8b5cf6" },
                { name: "Lisle Library", color: "#ec4899" }
              ].map((location, index) => (
                <div key={index} className="inline-flex items-center px-3 py-1 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: location.color }}></span>
                  <span className="text-sm font-medium text-[#0f172a]">{location.name}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a 
                href="#booking" 
                className="bg-[#6366F1] text-white font-semibold py-5 px-10 rounded-xl text-xl transition-all hover:bg-[#4F46E5] hover:scale-105 active:scale-95 shadow-lg hover:shadow-indigo-200 text-center"
              >
                Book a Session
              </a>
              <a 
                href="#how-it-works" 
                className="bg-white border-2 border-[#6366F1] text-[#6366F1] font-semibold py-5 px-10 rounded-xl text-xl transition-all hover:bg-[#6366F1] hover:text-white hover:scale-105 active:scale-95 shadow-lg text-center"
              >
                How It Works
              </a>
            </div>
          </div>
          
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#6366F1] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6366F1] rounded-full opacity-20"></div>
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/program_cards/mentorship.jpg"
                alt="1:1 session with a mentor"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xl font-semibold mb-2">Next available session:</p>
                <p className="text-3xl font-bold">This Thursday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="how-it-works" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-5xl font-bold text-[#0f172a] mb-5">
              Benefits That Set Us Apart
            </h2>
            <p className="text-xl text-[#000000] max-w-3xl">
              Our 1:1 sessions are designed to provide personalized guidance and support 
              tailored to your unique entrepreneurial journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Financial Guidance Box */}
            <div 
              className="bg-gradient-to-br from-[#10b981] to-[#059669] p-10 rounded-3xl shadow-xl transition-transform hover:scale-105 h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>
              <div className="mb-8 bg-white/20 p-4 rounded-2xl inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-5 text-white">Financial Knowledge</h3>
              <p className="text-white text-lg opacity-90">
                Gain essential financial literacy skills specific to startups. Learn about budgeting, funding options, revenue models, and building sustainable business finances with mentors who specialize in startup economics.
              </p>
            </div>
            
            {/* Innovation & Creativity Box */}
            <div 
              className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] p-10 rounded-3xl shadow-xl transition-transform hover:scale-105 h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>
              <div className="mb-8 bg-white/20 p-4 rounded-2xl inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-5 text-white">Innovation & Creativity</h3>
              <p className="text-white text-lg opacity-90">
                Unlock your innovative potential with techniques that foster creative thinking. Our mentors help you develop unique value propositions, overcome common obstacles, and approach problems from fresh perspectives.
              </p>
            </div>
            
            {/* Personalized Roadmap Box */}
            <div 
              className="bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] p-10 rounded-3xl shadow-xl transition-transform hover:scale-105 h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>
              <div className="mb-8 bg-white/20 p-4 rounded-2xl inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-5 text-white">Personalized Roadmap</h3>
              <p className="text-white text-lg opacity-90">
                Receive a customized action plan designed specifically for your business idea. Our mentors will help you identify your strengths, address challenges, and create a step-by-step path toward achieving your entrepreneurial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types Section */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0f172a] mb-5">
              Session Formats
            </h2>
            <p className="text-xl text-[#000000] max-w-3xl">
              Choose the session format that best aligns with your learning style and entrepreneurial goals
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
            <div className="flex border-b">
              <button 
                className={`flex-1 py-6 px-8 text-center font-semibold text-xl transition-all duration-300 ${
                  activeTab === 'individual' 
                    ? 'bg-[#6366F1] text-white' 
                    : 'bg-white text-[#000000] hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('individual')}
              >
                Individual Sessions
              </button>
              <button 
                className={`flex-1 py-6 px-8 text-center font-semibold text-xl transition-all duration-300 ${
                  activeTab === 'group' 
                    ? 'bg-[#6366F1] text-white' 
                    : 'bg-white text-[#000000] hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('group')}
              >
                Group Sessions
              </button>
            </div>
            
            <div className="p-10">
              {activeTab === 'individual' ? (
                <div className="grid md:grid-cols-2 gap-14 items-center">
                  <div>
                    <div className="inline-block bg-[#6366F1]/10 px-4 py-2 rounded-full mb-4">
                      <span className="text-[#6366F1] font-semibold">One-on-One</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-[#0f172a]">Personalized Mentorship</h3>
                    <p className="text-lg text-[#000000] mb-8">
                      Our one-on-one sessions provide dedicated mentorship tailored specifically to your business ideas and entrepreneurial journey. Get focused guidance to accelerate your growth.
                    </p>
                    <ul className="space-y-4 text-[#000000] text-lg mb-8">
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-5 w-5 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Personalized 1.5-hour sessions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-5 w-5 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Focused on your specific business idea</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-5 w-5 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Tailored feedback and actionable advice</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-5 w-5 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>In-depth discussion on finance and innovation</span>
                      </li>
                    </ul>
                    <div className="inline-block py-3 px-6 bg-[#6366F1]/5 rounded-xl border border-[#6366F1]/20">
                      <div className="flex items-center">
                        <span className="font-semibold text-[#000000] text-lg mr-3">Price:</span> 
                        <span className="text-[#6366F1] font-bold text-2xl">Free</span>
                        <span className="ml-2 bg-[#6366F1]/10 px-2 py-1 rounded text-xs font-medium text-[#6366F1]">Limited Availability</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-lg">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#6366F1] rounded-full opacity-10"></div>
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#6366F1] rounded-full opacity-10"></div>
                    <Image 
                      src="/image_gallery/3.jpg" 
                      alt="One-on-one mentorship session" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                      <p className="font-bold text-[#0f172a]">Next Available</p>
                      <p className="text-[#6366F1]">This Week</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-14 items-center">
                  <div>
                    <div className="inline-block bg-[#6366F1]/10 px-4 py-2 rounded-full mb-4">
                      <span className="text-[#6366F1] font-semibold">Collaborative Learning</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-[#0f172a]">Small Group Sessions</h3>
                    <p className="text-lg text-[#000000] mb-8">
                      Join a small group of like-minded entrepreneurs to share ideas, provide peer feedback, and learn together in a collaborative environment guided by our experienced mentors.
                    </p>
                    <ul className="space-y-4 text-[#000000] text-lg mb-8">
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-5 w-5 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Small groups of 3-5 students</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-5 w-5 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Collaborative learning environment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-5 w-5 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Peer feedback and idea sharing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-5 w-5 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Structured curriculum aligned with workshops</span>
                      </li>
                    </ul>
                    <div className="inline-block py-3 px-6 bg-[#6366F1]/5 rounded-xl border border-[#6366F1]/20">
                      <div className="flex items-center">
                        <span className="font-semibold text-[#000000] text-lg mr-3">Price:</span> 
                        <span className="text-[#6366F1] font-bold text-2xl">Free</span>
                        <span className="ml-2 bg-[#6366F1]/10 px-2 py-1 rounded text-xs font-medium text-[#6366F1]">Weekly Sessions</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-lg">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#6366F1] rounded-full opacity-10"></div>
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#6366F1] rounded-full opacity-10"></div>
                    <Image 
                      src="/image_gallery/5.jpg" 
                      alt="Small group session" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                      <p className="font-bold text-[#0f172a]">Next Group</p>
                      <p className="text-[#6366F1]">Friday, 4PM</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Now placed before booking section */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-40 right-0 w-80 h-80 bg-[#6366F1]/5 rounded-full -z-10"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#6366F1]/5 rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block bg-[#6366F1]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#6366F1] font-semibold">Success Stories</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0f172a] mb-5">
              What Our Students Say
            </h2>
            <p className="text-xl text-[#000000] max-w-3xl">
              Here&apos;s what students who have participated in our 1:1 sessions have to say about their experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
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
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative h-full"
              >
                <div className="absolute top-0 right-0 h-20 w-20 bg-[#6366F1]/5 rounded-bl-3xl -mt-2 -mr-2 z-0"></div>
                <div className="relative z-10">
                  <svg className="h-10 w-10 text-[#6366F1]/20 mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-[#000000] italic text-lg mb-8">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-[#6366F1]/20">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0f172a]">{testimonial.name}</h3>
                      <p className="text-[#6366F1]">{testimonial.grade}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section - Now after testimonials */}
      <section id="booking" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute -left-32 top-40 w-64 h-64 bg-[#6366F1]/10 rounded-full"></div>
        <div className="absolute -right-32 bottom-40 w-64 h-64 bg-[#6366F1]/10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block border-b-2 border-[#0ea5e9] px-4 py-2 mb-4">
              <span className="text-[#0ea5e9] font-semibold">Start Your Journey</span>
            </div>
            <h2 className="text-5xl font-bold text-[#0f172a] mb-5">
              Book Your Session
            </h2>
            <p className="text-xl text-[#000000] max-w-3xl">
              Fill out the form below to request a 1:1 session with one of our mentors. 
              We&apos;ll match you with the perfect mentor for your needs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {!formSubmitted ? (
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first_name" className="block text-[#0f172a] font-medium text-lg">First name</label>
                        <input 
                          type="text" 
                          id="first_name" 
                          className="bg-gray-50 border border-gray-200 text-[#000000] text-lg rounded-xl focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-4 shadow-sm transition-all" 
                          placeholder="John" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last_name" className="block text-[#0f172a] font-medium text-lg">Last name</label>
                        <input 
                          type="text" 
                          id="last_name" 
                          className="bg-gray-50 border border-gray-200 text-[#000000] text-lg rounded-xl focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-4 shadow-sm transition-all" 
                          placeholder="Doe" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[#0f172a] font-medium text-lg">Email address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-200 text-[#000000] text-lg rounded-xl focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-4 shadow-sm transition-all" 
                        placeholder="john.doe@example.com" 
                        required 
                      />
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="school" className="block text-[#0f172a] font-medium text-lg">School</label>
                        <input 
                          type="text" 
                          id="school" 
                          className="bg-gray-50 border border-gray-200 text-[#000000] text-lg rounded-xl focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-4 shadow-sm transition-all" 
                          placeholder="Naperville Central High School" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="grade" className="block text-[#0f172a] font-medium text-lg">Grade</label>
                        <select 
                          id="grade" 
                          className="bg-gray-50 border border-gray-200 text-[#000000] text-lg rounded-xl focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-4 shadow-sm transition-all appearance-none" 
                          required
                        >
                          <option value="">Select your grade</option>
                          <option value="3">3rd Grade</option>
                          <option value="4">4th Grade</option>
                          <option value="5">5th Grade</option>
                          <option value="6">6th Grade</option>
                          <option value="7">7th Grade</option>
                          <option value="8">8th Grade</option>
                          <option value="9">9th Grade</option>
                          <option value="10">10th Grade</option>
                          <option value="11">11th Grade</option>
                          <option value="12">12th Grade</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[#0f172a] font-medium text-lg">Session Type</label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative">
                          <input type="radio" id="individual_session" name="session_type" value="individual" className="peer sr-only" defaultChecked />
                          <label htmlFor="individual_session" className="flex p-5 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 peer-checked:border-[#6366F1] peer-checked:bg-[#6366F1]/5 transition-all">
                            <div>
                              <span className="text-[#0f172a] font-semibold block mb-1">Individual Session</span>
                              <span className="text-gray-600 text-sm">One-on-one mentorship</span>
                            </div>
                          </label>
                          <div className="absolute top-4 right-4 h-5 w-5 border-2 border-gray-300 rounded-full peer-checked:border-4 peer-checked:border-[#6366F1] transition-all"></div>
                        </div>
                        <div className="relative">
                          <input type="radio" id="group_session" name="session_type" value="group" className="peer sr-only" />
                          <label htmlFor="group_session" className="flex p-5 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 peer-checked:border-[#6366F1] peer-checked:bg-[#6366F1]/5 transition-all">
                            <div>
                              <span className="text-[#0f172a] font-semibold block mb-1">Group Session</span>
                              <span className="text-gray-600 text-sm">3-5 students per group</span>
                            </div>
                          </label>
                          <div className="absolute top-4 right-4 h-5 w-5 border-2 border-gray-300 rounded-full peer-checked:border-4 peer-checked:border-[#6366F1] transition-all"></div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="topic" className="block text-[#0f172a] font-medium text-lg">What would you like to discuss?</label>
                      <textarea 
                        id="topic" 
                        rows={5} 
                        className="bg-gray-50 border border-gray-200 text-[#000000] text-lg rounded-xl focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-4 shadow-sm transition-all" 
                        placeholder="Briefly describe your business idea or what you'd like help with..." 
                        required
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className="w-full bg-[#6366F1] text-white font-semibold py-5 px-8 rounded-xl text-xl transition-all hover:bg-[#4F46E5] hover:shadow-lg hover:shadow-[#6366F1]/20 active:scale-98"
                      >
                        Request Your Session
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-[#6366F1]/10 text-[#6366F1] mb-8">
                  <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Request Submitted!</h3>
                <p className="text-xl text-[#000000] mb-8 max-w-2xl mx-auto">
                  Thank you for your interest in our 1:1 sessions. We&apos;ll get back to you within 48 hours to schedule your session.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex items-center justify-center border-2 border-[#6366F1] text-[#6366F1] font-semibold py-3 px-6 rounded-xl text-lg hover:bg-[#6366F1]/5 transition-all"
                  >
                    Submit Another Request
                  </button>
                  <Link 
                    href="/workshops" 
                    className="inline-flex items-center justify-center bg-[#6366F1] text-white font-semibold py-3 px-6 rounded-xl text-lg hover:bg-[#4F46E5] transition-all"
                  >
                    Explore Workshops
                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-[#6366F1] to-[#38b6ff] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-white rounded-full opacity-10"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full opacity-10"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Accelerate Your Journey?
            </h2>
            <p className="text-white text-xl mb-10 max-w-4xl mx-auto opacity-90">
              Our 1:1 sessions provide the personalized guidance you need to turn your ideas into reality. 
              Join the hundreds of students who have transformed their entrepreneurial vision through our mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#booking" 
                className="bg-white text-[#6366F1] font-semibold py-5 px-10 rounded-xl text-xl transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-lg"
              >
                Book Your Session
              </a>
              <Link 
                href="/workshops" 
                className="bg-transparent border-2 border-white text-white font-semibold py-5 px-10 rounded-xl text-xl transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
              >
                Explore Workshops
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OneOnOneSessions; 