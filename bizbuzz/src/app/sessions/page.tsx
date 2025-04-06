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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#f8f9ff] -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6366F1]/5 -z-10 rounded-bl-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold text-[#0f172a] mb-6 leading-tight">
              1:1 <span className="text-[#6366F1]">Sessions</span>
            </h1>
            <p className="text-xl text-[#000000] mb-8 max-w-3xl">
              Connect with experienced mentors in personalized 1.5-hour sessions designed to accelerate your entrepreneurial journey and bring your business ideas to life.
            </p>
            
            {/* Locations Section */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#booking" 
                className="bg-[#6366F1] text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all hover:bg-[#4F46E5] hover:scale-105 active:scale-95 shadow-lg hover:shadow-indigo-200 text-center"
              >
                Book a Session
              </a>
              <a 
                href="#session-types" 
                className="bg-white border-2 border-[#6366F1] text-[#6366F1] font-semibold py-4 px-8 rounded-xl text-lg transition-all hover:bg-[#6366F1] hover:text-white hover:scale-105 active:scale-95 shadow-lg text-center"
              >
                How It Works
              </a>
            </div>
          </div>
          
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#6366F1] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6366F1] rounded-full opacity-20"></div>
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/program_cards/mentorship.jpg"
                alt="1:1 session with a mentor"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types Section */}
      <section id="session-types" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Session Formats
            </h2>
            <p className="text-lg text-[#000000] max-w-3xl">
              Choose the session format that best aligns with your learning style and entrepreneurial goals
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
            <div className="flex border-b">
              <button 
                className={`flex-1 py-4 px-6 text-center font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'individual' 
                    ? 'bg-[#6366F1] text-white' 
                    : 'bg-white text-[#000000] hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('individual')}
              >
                Individual Sessions
              </button>
              <button 
                className={`flex-1 py-4 px-6 text-center font-semibold text-lg transition-all duration-300 ${
                  activeTab === 'group' 
                    ? 'bg-[#6366F1] text-white' 
                    : 'bg-white text-[#000000] hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('group')}
              >
                Group Sessions
              </button>
            </div>
            
            <div className="p-8">
              {activeTab === 'individual' ? (
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="inline-block bg-[#6366F1]/10 px-4 py-2 rounded-full mb-3">
                      <span className="text-[#6366F1] font-semibold">One-on-One</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">Personalized Mentorship</h3>
                    <p className="text-base text-[#000000] mb-6">
                      Our one-on-one sessions provide dedicated mentorship tailored specifically to your business ideas and entrepreneurial journey. Get focused guidance to accelerate your growth.
                    </p>
                    <ul className="space-y-3 text-[#000000] text-base mb-6">
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Personalized 1.5-hour sessions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Focused on your specific business idea</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Tailored feedback and actionable advice</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>In-depth discussion on finance and innovation</span>
                      </li>
                    </ul>
                    <div className="inline-block py-2 px-4 bg-[#6366F1]/5 rounded-xl border border-[#6366F1]/20">
                      <div className="flex items-center">
                        <span className="font-semibold text-[#000000] mr-3">Price:</span> 
                        <span className="text-[#6366F1] font-bold text-xl">Free</span>
                        <span className="ml-2 bg-[#6366F1]/10 px-2 py-1 rounded text-xs font-medium text-[#6366F1]">Limited Availability</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-[300px] shadow-lg">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#6366F1] rounded-full opacity-10"></div>
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#6366F1] rounded-full opacity-10"></div>
                    <Image 
                      src="/image_gallery/3.jpg" 
                      alt="One-on-one mentorship session" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="inline-block bg-[#6366F1]/10 px-4 py-2 rounded-full mb-3">
                      <span className="text-[#6366F1] font-semibold">Collaborative Learning</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">Small Group Sessions</h3>
                    <p className="text-base text-[#000000] mb-6">
                      Join a small group of like-minded entrepreneurs to share ideas, provide peer feedback, and learn together in a collaborative environment guided by our experienced mentors.
                    </p>
                    <ul className="space-y-3 text-[#000000] text-base mb-6">
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Small groups of 3-5 students</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Collaborative learning environment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Peer feedback and idea sharing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#6366F1]/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4 text-[#6366F1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Structured curriculum aligned with workshops</span>
                      </li>
                    </ul>
                    <div className="inline-block py-2 px-4 bg-[#6366F1]/5 rounded-xl border border-[#6366F1]/20">
                      <div className="flex items-center">
                        <span className="font-semibold text-[#000000] mr-3">Price:</span> 
                        <span className="text-[#6366F1] font-bold text-xl">Free</span>
                        <span className="ml-2 bg-[#6366F1]/10 px-2 py-1 rounded text-xs font-medium text-[#6366F1]">Weekly Sessions</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-[300px] shadow-lg">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#6366F1] rounded-full opacity-10"></div>
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#6366F1] rounded-full opacity-10"></div>
                    <Image 
                      src="/image_gallery/5.jpg" 
                      alt="Small group session" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-40 right-0 w-80 h-80 bg-[#6366F1]/5 rounded-full -z-10"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#6366F1]/5 rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-block bg-[#6366F1]/10 px-4 py-2 rounded-full mb-3">
              <span className="text-[#6366F1] font-semibold">Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-3">
              What Our Students Say
            </h2>
            <p className="text-lg text-[#000000] max-w-3xl">
              Here&apos;s what students who have participated in our 1:1 sessions have to say about their experience
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
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative h-full"
              >
                <div className="absolute top-0 right-0 h-20 w-20 bg-[#6366F1]/5 rounded-bl-3xl -mt-2 -mr-2 z-0"></div>
                <div className="relative z-10">
                  <svg className="h-8 w-8 text-[#6366F1]/20 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-[#000000] italic text-base mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3 border-2 border-[#6366F1]/20">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0f172a]">{testimonial.name}</h3>
                      <p className="text-[#6366F1] text-sm">{testimonial.grade}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute -left-32 top-40 w-64 h-64 bg-[#6366F1]/10 rounded-full"></div>
        <div className="absolute -right-32 bottom-40 w-64 h-64 bg-[#6366F1]/10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center mb-6">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-3">
              Book Your Session
            </h2>
            <p className="text-base text-[#000000] max-w-2xl">
              Fill out the form below to request a 1:1 session with one of our mentors. 
              We&apos;ll match you with the perfect mentor for your needs.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {!formSubmitted ? (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-1">
                        <label htmlFor="first_name" className="block text-[#0f172a] font-medium text-sm">First name</label>
                        <input 
                          type="text" 
                          id="first_name" 
                          className="bg-gray-50 border border-gray-200 text-[#000000] rounded-lg focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-2 shadow-sm transition-all" 
                          placeholder="John" 
                          required 
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="last_name" className="block text-[#0f172a] font-medium text-sm">Last name</label>
                        <input 
                          type="text" 
                          id="last_name" 
                          className="bg-gray-50 border border-gray-200 text-[#000000] rounded-lg focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-2 shadow-sm transition-all" 
                          placeholder="Doe" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-[#0f172a] font-medium text-sm">Email address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-200 text-[#000000] rounded-lg focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-2 shadow-sm transition-all" 
                        placeholder="john.doe@example.com" 
                        required 
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="school" className="block text-[#0f172a] font-medium text-sm">School</label>
                      <input 
                        type="text" 
                        id="school" 
                        className="bg-gray-50 border border-gray-200 text-[#000000] rounded-lg focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-2 shadow-sm transition-all" 
                        placeholder="Naperville Central High School" 
                        required 
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="concerns" className="block text-[#0f172a] font-medium text-sm">Questions or concerns</label>
                      <input 
                        type="text" 
                        id="concerns" 
                        className="bg-gray-50 border border-gray-200 text-[#000000] rounded-lg focus:ring-[#6366F1] focus:border-[#6366F1] block w-full p-2 shadow-sm transition-all" 
                        placeholder="Any questions or concerns you'd like us to address" 
                      />
                    </div>

                    <div>
                      <button 
                        type="submit" 
                        className="w-full bg-[#6366F1] text-white font-semibold py-2 px-4 rounded-lg transition-all hover:bg-[#4F46E5] hover:shadow-lg hover:shadow-[#6366F1]/20 active:scale-98"
                      >
                        Request Your Session
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#6366F1]/10 text-[#6366F1] mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">Request Submitted!</h3>
                <p className="text-base text-[#000000] mb-4 max-w-xl mx-auto">
                  Thank you for your interest in our 1:1 sessions. We&apos;ll get back to you within 48 hours to schedule your session.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="inline-flex items-center justify-center border-2 border-[#6366F1] text-[#6366F1] font-semibold py-2 px-4 rounded-lg hover:bg-[#6366F1]/5 transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OneOnOneSessions; 