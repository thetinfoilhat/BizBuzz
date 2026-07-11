"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

const OFFICE_HOURS_URL =
  "https://docs.google.com/spreadsheets/d/1Yb8OgMehdX1jjKmVifRFxkD-spdUaXXHREKcxjvPWLQ/edit?usp=sharing";
const OFFICE_HOURS_EMBED =
  "https://docs.google.com/spreadsheets/d/1Yb8OgMehdX1jjKmVifRFxkD-spdUaXXHREKcxjvPWLQ/preview";

const faqs = [
  {
    q: "What is BizBuzz?",
    a: "BizBuzz is a hands-on, completely free entrepreneurship program for students in grades 3–8. We help students turn their ideas into real business concepts through interactive sessions, mentorship, and creative challenges.",
  },
  {
    q: "What is Fish Tank?",
    a: "Fish Tank is our exciting final pitch competition—think Shark Tank, but for students! Participants present their business ideas to judges, build confidence, and showcase everything they’ve learned.",
  },
  {
    q: "Does my child need business experience?",
    a: "Not at all! Whether your child is brand new or already entrepreneurial, BizBuzz is designed for all experience levels.",
  },
  {
    q: "What should my child bring?",
    a: "Just the essentials: a folder, pencils, a water bottle, and (optionally) a laptop or tablet for building and researching their ideas.",
  },
  {
    q: "Is it really free?",
    a: "Yes—100% free. Our mission is to make entrepreneurship accessible to every student, thanks to the support of our community partners.",
  },
  {
    q: "How do we sign up for Fish Tank?",
    a: "You can register through the link shared in our emails or slide decks. It only takes a few minutes!",
  },
  {
    q: "Can my child join Fish Tank without attending camp?",
    a: "Absolutely! Fish Tank is open to all eligible students, even if they’re not enrolled in our camp.",
  },
  {
    q: "Do I have to be a part of the BizBuzz summer program to compete in Fish Tank?",
    a: "No, you do not need to be a part of the BizBuzz summer program to compete in Fish Tank. Students are encouraged to work with friends that are also not a part of BizBuzz this year.",
  },
  {
    q: "What are the divisions for Fish Tank?",
    a: "Students who are enrolled in VentureLab or between the grades of 6th to 9th will participate in the VentureLab division. Students who are enrolled in KidPreneur or between the grades of 3rd to 6th grade will participate in the KidPreneur division.",
  },
  {
    q: "What are office hours?",
    a: "Office hours are personalized 1-on-1 sessions where students can get feedback, ask questions, and improve their ideas. Spots are limited and first-come, first-served!",
  },
  {
    q: "Is there a virtual option?",
    a: "Yes! If your child can’t attend in person, they can participate via Google Meet—just coordinate with our team and we’ll make it work.",
  },
  {
    q: "Where are sessions held?",
    a: "We host sessions at local libraries like 95th Street Library and Nichols Library. You’ll always receive location details ahead of time.",
  },
  {
    q: "How will I stay updated?",
    a: "We send regular email updates after each session with key highlights, reminders, and important links so you’re always in the loop.",
  },
  {
    q: "Still have questions?",
    a: "We’re here to help! Reach out to our team anytime at bizbuzznfp@gmail.com—we’d love to support you and your child on their BizBuzz journey.",
  },
];

const officeHoursPolicies = [
  {
    title: "Pre-Submission Requirement",
    points: [
      <>
        All students must email{" "}
        <a href="mailto:bizbuzznfp@gmail.com" className="text-[#003166] font-semibold hover:underline">
          bizbuzznfp@gmail.com
        </a>{" "}
        at least <strong>24 hours</strong> before their scheduled session with:
      </>,
      "At least 3 specific and detailed questions",
      "Any ideas, updates, or materials they want feedback on",
      "This ensures sessions are productive and tailored to your progress.",
    ],
  },
  {
    title: "Reminder Requirement",
    points: [
      <>
        Students must send a confirmation/reminder email to{" "}
        <a href="mailto:bizbuzznfp@gmail.com" className="text-[#003166] font-semibold hover:underline">
          bizbuzznfp@gmail.com
        </a>{" "}
        at least <strong>12 hours</strong> before their scheduled office hours.
      </>,
      "Failure to send a reminder may result in cancellation of your slot.",
    ],
  },
  {
    title: "Office Hours Format",
    points: [
      <>
        <strong>Weekdays:</strong> Online (via Google Meet)
      </>,
      <>
        <strong>Weekends:</strong> In-person sessions available
      </>,
      "Details and links/locations will be provided upon sign-up.",
    ],
  },
  {
    title: "Fish Tank Requirement",
    points: [
      <>
        All Fish Tank participants are required to attend at least <strong>1 hour</strong> of office
        hours per week leading up to the competition.
      </>,
      "This is mandatory to ensure consistent progress and readiness.",
    ],
  },
];

const OfficeHoursAndFaqs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium text-white">Office Hours &amp; FAQs</span>
            </div>
            <h1 className="text-left mb-8">
              <span className="block text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">OFFICE</span>
              <span className="block text-6xl md:text-7xl font-extrabold tracking-tight text-[#FFD700] leading-none">HOURS</span>
            </h1>

            <div className="bg-[#003166]/40 backdrop-blur-sm rounded-xl p-7 border border-white/10 shadow-lg mb-10">
              <p className="text-xl leading-relaxed text-white">
                Drop in during office hours for personalized 1-on-1 feedback on your business idea.
                Check the live schedule below, then come find us at a local library—or join us virtually
                over Google Meet.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#office-hours"
                className="inline-flex items-center px-8 py-4 bg-[#FFD700] text-[#004080] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                View Schedule
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#faqs"
                className="inline-flex items-center px-8 py-4 bg-white text-[#004080] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                Read FAQs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section id="office-hours" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute left-20 top-20 w-64 h-64 rounded-full bg-[#003166]/5 -z-10"></div>
        <div className="absolute right-20 bottom-20 w-80 h-80 rounded-full bg-[#003166]/5 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#003166]/5 mb-3">
              <span className="text-[#003166] font-semibold">Live Schedule</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">Office Hours Schedule</h2>
            <p className="text-lg text-[#334155] max-w-3xl">
              The preview below updates automatically whenever we change the schedule. Spots are limited
              and first-come, first-served.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#003166]/10">
            {/* Header bar with locations */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-[#003166]/10 bg-gradient-to-r from-white to-[#f0f7ff]">
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "95th Street Library", color: "#10b981" },
                  { name: "Nichols Library", color: "#f59e0b" },
                ].map((location, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 bg-white rounded-lg border border-[#003166]/10"
                  >
                    <span
                      className="inline-block w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: location.color }}
                    ></span>
                    <span className="text-sm font-medium text-[#0f172a]">{location.name}</span>
                  </div>
                ))}
              </div>
              <a
                href={OFFICE_HOURS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-[#003166] text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#004080] transition duration-300"
              >
                Open Full Schedule
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Live embedded preview */}
            <div className="relative w-full h-[600px] bg-[#f8fafc]">
              <iframe
                title="BizBuzz Office Hours Schedule"
                src={OFFICE_HOURS_EMBED}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <p className="text-center text-sm text-[#64748b] mt-4">
            Can&apos;t see the preview?{" "}
            <a
              href={OFFICE_HOURS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003166] font-semibold hover:underline"
            >
              View the office hours schedule here
            </a>
            .
          </p>
        </div>
      </section>

      {/* Office Hours Policy Section */}
      <section id="office-hours-policy" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -top-10 left-10 w-72 h-72 rounded-full bg-[#003166]/5 -z-10"></div>
        <div className="absolute right-10 bottom-10 w-80 h-80 rounded-full bg-[#003166]/5 -z-10"></div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#003166]/5 mb-3">
              <span className="text-[#003166] font-semibold">Before You Attend</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Office Hours Policy
            </h2>
            <p className="text-lg text-[#334155] max-w-3xl">
              To ensure that all students get the most value out of office hours and come prepared,
              please follow the guidelines below.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {officeHoursPolicies.map((policy, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md border border-[#003166]/10 p-6"
              >
                <div className="flex items-center mb-4">
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#003166] text-white font-bold mr-3">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-[#0f172a]">{policy.title}</h3>
                </div>
                <ul className="space-y-2">
                  {policy.points.map((point, j) => (
                    <li key={j} className="flex items-start text-[#334155] leading-relaxed">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-[#FFD700] mt-0.5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[#334155] font-medium">
            If any of these policies are not followed, we reserve the right to cancel your
            request.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 bg-gradient-to-b from-white to-[#f0f7ff] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#003166]/5 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#003166]/5 rounded-full"></div>

        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#003166]/10 mb-3">
              <span className="text-[#003166] font-semibold">Got Questions?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#334155] max-w-2xl">
              Everything you need to know about BizBuzz, Fish Tank, and our office hours.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md border border-[#003166]/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-[#0f172a] pr-4">{faq.q}</span>
                    <svg
                      className={`flex-shrink-0 w-5 h-5 text-[#003166] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[#334155] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 bg-[#003166] rounded-3xl p-8 md:p-10 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              We&apos;re here to help! Reach out anytime—we&apos;d love to support you and your child on
              their BizBuzz journey.
            </p>
            <a
              href="mailto:bizbuzznfp@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-[#FFD700] text-[#004080] text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              Email Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficeHoursAndFaqs;
