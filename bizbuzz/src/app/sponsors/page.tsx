"use client";

import { motion } from "framer-motion";

type Sponsor = {
  name: string;
  logo?: string;
  amount: number;
  date?: string;
  description: string;
};

type YearGroup = {
  year: string;
  sponsors: Sponsor[];
};

const SPONSOR_YEARS: YearGroup[] = [
  {
    year: "2026",
    sponsors: [
      {
        name: "Hiren Patel",
        logo: "/sponsors/hirenpatel.png",
        amount: 2000,
        description:
          "Hiren Patel is a franchise entrepreneur who owns and operates 64 Dunkin' locations and 4 Smoothie King stores. As someone who built a business empire from the ground up, he knows firsthand what it takes to turn ambition into results, and his support helps BizBuzz give young entrepreneurs that same opportunity.",
      },
      {
        name: "Right Choice Dental Care",
        logo: "/sponsors/rightchoicedentalcare.png",
        amount: 1000,
        description:
          "Right Choice Dental Care is a family dental practice committed to serving the local community. Beyond caring for smiles, the practice has been one of BizBuzz's most consistent supporters, backing youth entrepreneurship programs for multiple years running.",
      },
      {
        name: "Teen Philanthropy Institute",
        logo: "/sponsors/teenphilanthropyinstitute.png",
        amount: 750,
        description:
          "The Teen Philanthropy Institute empowers young people to direct charitable giving toward causes they care about. After first supporting BizBuzz in 2025, they returned in 2026 with another grant to keep youth entrepreneurship programs growing.",
      },
      {
        name: "Nara Rosie",
        logo: "/sponsors/nararosie.png",
        amount: 200,
        description:
          "Nara Rosie is a community supporter who believes in giving young people the tools to chase their ideas. Her contribution helps fund camp materials and programming for student entrepreneurs.",
      },
      {
        name: "Elite Tutoring Place",
        logo: "/sponsors/elitetutoringplace.jpg",
        amount: 100,
        description:
          "Elite Tutoring Place is a Naperville learning center providing personalized academic support for K-12 students. A returning sponsor since 2024, they share BizBuzz's belief that investing in education pays the best dividends.",
      },
    ],
  },
  {
    year: "2025",
    sponsors: [
      {
        name: "Right Choice Dental Care",
        logo: "/sponsors/rightchoicedentalcare.png",
        amount: 1500,
        date: "May 18 & June 8, 2025",
        description:
          "Right Choice Dental Care is a family dental practice dedicated to quality care and community involvement. In 2025 the practice's family, together with Taksh, contributed a combined $1,500 to expand BizBuzz programming and reach more students.",
      },
      {
        name: "AT&T",
        logo: "/sponsors/at&t.png",
        amount: 1000,
        date: "April 1, 2025",
        description:
          "AT&T is one of the world's largest telecommunications companies, connecting millions of people every day. Their sponsorship reflects a long-standing commitment to supporting education and opportunity in local communities.",
      },
      {
        name: "Teen Philanthropy Institute",
        logo: "/sponsors/teenphilanthropyinstitute.png",
        amount: 1000,
        date: "April 20, 2025",
        description:
          "The Teen Philanthropy Institute empowers young people to direct charitable giving toward causes they care about. Their grant recognized BizBuzz's impact on youth entrepreneurship education in the Chicagoland area.",
      },
      {
        name: "Kabat American",
        logo: "/sponsors/kabatamerican.jpg",
        amount: 1000,
        date: "May 13, 2025",
        description:
          "Kabat American has supported BizBuzz since the very first camp in 2024. Their continued sponsorship year after year has helped BizBuzz grow from a single summer program into a year-round organization.",
      },
      {
        name: "Costco",
        logo: "/sponsors/costco.png",
        amount: 100,
        date: "May 13, 2025",
        description:
          "Costco Wholesale is known for supporting the communities where its members live and work. Their repeat sponsorship helps cover supplies and materials for BizBuzz camp sessions.",
      },
    ],
  },
  {
    year: "2024",
    sponsors: [
      {
        name: "Kabat American",
        logo: "/sponsors/kabatamerican.jpg",
        amount: 1000,
        date: "May 28, 2024",
        description:
          "Kabat American was one of BizBuzz's founding sponsors, coming on board before the very first camp session. Their early belief in the mission helped get BizBuzz off the ground.",
      },
      {
        name: "Midwest Badminton",
        logo: "/sponsors/midwestbadminton.png",
        amount: 1000,
        date: "July 13, 2024",
        description:
          "Midwest Badminton is a premier badminton training facility serving athletes across the Chicago suburbs. Their sponsorship helped fund the inaugural Fish Tank competition and summer camp programming.",
      },
      {
        name: "Conference Planning Resources",
        logo: "/sponsors/conferenceplanningresources.jpg",
        amount: 250,
        date: "June 10, 2024",
        description:
          "Conference Planning Resources is a professional event planning company with deep experience organizing meetings and conferences. Their sponsorship supported BizBuzz's first summer of in-person sessions.",
      },
      {
        name: "SteamDream Team",
        logo: "/sponsors/steamdreamteam.png",
        amount: 150,
        date: "July 25, 2024",
        description:
          "SteamDream Team is a youth organization focused on hands-on STEM education. Their donation reflected a shared mission of getting kids excited about building and creating.",
      },
      {
        name: "Samantha Zylstra & Associates, LLC",
        logo: "/sponsors/samanthazylstra.jpeg",
        amount: 100,
        date: "June 10, 2024",
        description:
          "Samantha Zylstra & Associates is a professional services firm that stepped up as a sponsor during BizBuzz's first summer, helping cover program costs for students.",
      },
      {
        name: "Elite Tutoring Place",
        logo: "/sponsors/elitetutoringplace.jpg",
        amount: 100,
        date: "June 10, 2024",
        description:
          "Elite Tutoring Place is a Naperville tutoring center offering personalized academic support across all grade levels. They were among the first local businesses to sponsor BizBuzz and have returned every year since.",
      },
      {
        name: "Best Brains",
        logo: "/sponsors/bestbrains.png",
        amount: 100,
        date: "June 13, 2024",
        description:
          "Best Brains is a national after-school enrichment program teaching math, English, abacus, and coding. Their sponsorship supported BizBuzz's mission of bringing business education to the same age group they serve.",
      },
      {
        name: "Costco",
        logo: "/sponsors/costco.png",
        amount: 100,
        date: "June 18, 2024",
        description:
          "Costco Wholesale is one of the world's largest retailers and a longtime supporter of community programs. Their sponsorship helped supply BizBuzz's first summer camp.",
      },
      {
        name: "Center for Future Innovators Inc.",
        logo: "/sponsors/centerforfutureinnovators.jpg",
        amount: 100,
        date: "June 18, 2024",
        description:
          "Center for Future Innovators is a nonprofit dedicated to preparing young people for careers in STEM and innovation. Their support helped BizBuzz reach more aspiring student entrepreneurs.",
      },
      {
        name: "Naper Nuts & Sweets",
        logo: "/sponsors/napernutsandsweets.png",
        amount: 100,
        date: "July 10, 2024",
        description:
          "Naper Nuts & Sweets is a beloved downtown Naperville candy shop that has served the community for decades. As a small business success story themselves, their sponsorship carried special meaning for young founders.",
      },
    ],
  },
];

function formatAmount(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

function initialsOf(name: string): string {
  return name
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      {/* ── Hero ── */}
      <section className="relative bg-[#0a1733] pt-36 pb-28 overflow-hidden">
        {/* Ambient orbs */}
        <motion.div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-[#3AB6FF]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 left-1/4 w-[420px] h-[420px] bg-[#FFD700]/10 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.4, 0.6] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.6, 0.35, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
              </span>
              <span className="text-sm font-medium text-white/80 tracking-wide">
                Powered by our community
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              The people behind
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#7cd4ff] to-[#3AB6FF]">
                every big idea
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              BizBuzz exists because businesses and individuals choose to invest in young
              entrepreneurs. Every contribution goes directly toward camps, competitions, and
              programs for students.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade into page */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[#fafbfd]"></div>
      </section>

      {/* ── Sponsors by year ── */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {SPONSOR_YEARS.map((group) => (
            <div key={group.year} className="relative mb-28 last:mb-0">
              {/* Ghost year numeral */}
              <div
                aria-hidden
                className="pointer-events-none select-none absolute -top-16 -left-2 text-[11rem] md:text-[15rem] font-extrabold leading-none text-[#0c1d3d]/[0.04] tracking-tighter"
              >
                {group.year}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative flex items-baseline gap-5 mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0c1d3d] tracking-tight">
                  {group.year}
                </h2>
                <span className="text-sm uppercase tracking-[0.2em] text-[#3AB6FF] font-semibold">
                  {group.sponsors.length} sponsor{group.sponsors.length === 1 ? "" : "s"}
                </span>
                <div className="flex-grow h-px bg-gradient-to-r from-[#3AB6FF]/30 via-[#FFD700]/20 to-transparent"></div>
              </motion.div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-7">
                {group.sponsors.map((sponsor, i) => (
                  <motion.div
                    key={`${group.year}-${sponsor.name}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group relative bg-white rounded-3xl p-[1px] bg-gradient-to-br from-slate-100 via-slate-100 to-slate-100 hover:from-[#3AB6FF]/40 hover:via-slate-100 hover:to-[#FFD700]/40 transition-all duration-500 shadow-[0_2px_20px_rgba(12,29,61,0.05)] hover:shadow-[0_16px_44px_rgba(12,29,61,0.12)]"
                  >
                    <div className="relative bg-white rounded-[calc(1.5rem-1px)] p-8 h-full flex flex-col">
                      {/* Monogram + name row */}
                      <div className="flex items-center gap-4 mb-5">
                        {sponsor.logo ? (
                          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center p-1.5 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={sponsor.logo}
                              alt={`${sponsor.name} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0c1d3d] to-[#1e3a6e] flex items-center justify-center shadow-md">
                            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#7cd4ff]">
                              {initialsOf(sponsor.name)}
                            </span>
                          </div>
                        )}
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold text-[#0c1d3d] leading-snug">
                            {sponsor.name}
                          </h3>
                          {sponsor.date && (
                            <p className="text-xs text-slate-400 mt-0.5 tracking-wide">
                              {sponsor.date}
                            </p>
                          )}
                        </div>
                      </div>

                      <p className="text-[15px] text-slate-600 leading-relaxed flex-grow">
                        {sponsor.description}
                      </p>

                      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.18em] text-slate-400 font-medium">
                          Contribution
                        </span>
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0c1d3d] to-[#3AB6FF]">
                          {formatAmount(sponsor.amount)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Become a sponsor CTA ── */}
      <section className="relative bg-[#0a1733] py-24 overflow-hidden">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#3AB6FF]/15 rounded-full blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Join them.
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed font-light">
              Your sponsorship directly funds entrepreneurship education for elementary and middle
              school students across Chicagoland. Reach out to learn about partnership
              opportunities.
            </p>
            <a
              href="mailto:bizbuzznfp@gmail.com?subject=Sponsorship Inquiry"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-[#0a1733] font-semibold rounded-full text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,215,0,0.25)] hover:scale-[1.03] transition-all duration-300"
            >
              Become a Sponsor
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
