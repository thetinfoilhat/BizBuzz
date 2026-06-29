"use client";

import { motion } from "framer-motion";

type Tier = "gold" | "silver" | "bronze";

type Sponsor = {
  name: string;
  logo?: string;
  amount: number;
  year: string;
  date?: string;
  description: string;
};

const SPONSORS: Sponsor[] = [
  // ── 2026 ──
  {
    name: "Hiren Patel",
    logo: "/sponsors/hirenpatel.png",
    amount: 2000,
    year: "2026",
    description:
      "Hiren Patel owns and operates 64 Dunkin' locations and 4 Smoothie King stores. He built his franchise portfolio from the ground up through decades of disciplined operations and reinvestment. Today he leads hundreds of employees across two national brands. Hiren understands what young founders face because he walked the same path: start small, learn fast, grow with care. His contribution, the largest in BizBuzz history, funds camps, Fish Tank prizes, and materials for student entrepreneurs across Chicagoland in 2026.",
  },
  {
    name: "Right Choice Dental Care",
    logo: "/sponsors/rightchoicedentalcare.png",
    amount: 1000,
    year: "2026",
    description:
      "Right Choice Dental Care provides cosmetic, family, and restorative dentistry at three Naperville locations on Aurora Avenue, 95th Street, and Ogden Avenue. Dr. Pinal, a summa cum laude graduate of the University of Illinois at Chicago College of Dentistry, leads the practice. Services include general dentistry, braces, veneers, implants, and dentures for patients of all ages. The practice has backed BizBuzz youth entrepreneurship programs every year since 2025, one of our most loyal supporters.",
  },
  {
    name: "Teen Philanthropy Initiative",
    logo: "/sponsors/teenphilanthropyinstitute.png",
    amount: 750,
    year: "2026",
    description:
      "The Teen Philanthropy Initiative, run by Naperville nonprofit KidsMatter, trains 30 high school juniors at a time in fundraising, budgeting, and grant-making. Each cohort awards $10,000 in grants to youth-serving nonprofits across the greater Chicago area. Their 2026 grant marks a second straight year of support for BizBuzz.",
  },
  {
    name: "Nara Rosie",
    logo: "/sponsors/nararosie.png",
    amount: 200,
    year: "2026",
    description:
      "Nara Rosie supports young entrepreneurs in the Naperville area. Her gift funds camp materials and programming for student founders.",
  },
  {
    name: "Elite Tutoring Place",
    logo: "/sponsors/elitetutoringplace.jpg",
    amount: 100,
    year: "2026",
    description:
      "Elite Tutoring Place has provided K-12 tutoring and SAT/ACT prep in Naperville since 2009. The center has sponsored BizBuzz every year since 2024.",
  },
  {
    name: "Office Furniture Solutions",
    logo: "/sponsors/officefurnituresolutions.png",
    amount: 100,
    year: "2026",
    description:
      "Office Furniture Solutions sells new, pre-owned, and refurbished office furniture from its Naperville showroom. The dealer has served the Chicagoland area for over 20 years.",
  },
  // ── 2025 ──
  {
    name: "Right Choice Dental Care",
    logo: "/sponsors/rightchoicedentalcare.png",
    amount: 1500,
    year: "2025",
    date: "May 18 & June 8, 2025",
    description:
      "Right Choice Dental Care serves Naperville families at three locations with cosmetic, general, and restorative dentistry. Dr. Pinal, a summa cum laude graduate of the University of Illinois at Chicago College of Dentistry, leads the practice. In May and June 2025 the practice family, together with Taksh, gave a combined $1,500 to BizBuzz. The funding expanded programming and helped BizBuzz reach more students than in any prior year.",
  },
  {
    name: "AT&T",
    logo: "/sponsors/at&t.png",
    amount: 1000,
    year: "2025",
    date: "April 1, 2025",
    description:
      "AT&T ranks among the largest telecommunications companies in the world. The company serves more than 100 million U.S. families and businesses through wireless and fiber networks. AT&T invests in education and digital access programs in communities nationwide. Their 2025 sponsorship funded BizBuzz camps and competitions across Chicagoland.",
  },
  {
    name: "Teen Philanthropy Initiative",
    logo: "/sponsors/teenphilanthropyinstitute.png",
    amount: 1000,
    year: "2025",
    date: "April 20, 2025",
    description:
      "The Teen Philanthropy Initiative, a program of Naperville nonprofit KidsMatter, teaches high school students strategic giving over a two-year cohort. Students learn fundraising, budgeting, and grant evaluation, then award $10,000 to youth-serving nonprofits in the greater Chicago area. Cohort members visit applicant organizations, review proposals, and vote on awards. Their 2025 grant recognized BizBuzz's work in youth entrepreneurship education.",
  },
  {
    name: "Kabat American",
    logo: "/sponsors/kabatamerican.jpg",
    amount: 1000,
    year: "2025",
    date: "May 13, 2025",
    description:
      "Kabat American has backed BizBuzz since the first camp in 2024. The company returned in 2025 with a second $1,000 sponsorship. Funding at this level covers venue costs, materials, and prizes for an entire camp session. Repeat support from Kabat American helped BizBuzz grow from one summer program into a year-round organization.",
  },
  {
    name: "Costco",
    logo: "/sponsors/costco.png",
    amount: 100,
    year: "2025",
    date: "May 13, 2025",
    description:
      "Costco Wholesale operates nearly 900 warehouses worldwide. Their repeat sponsorship covers supplies and materials for BizBuzz camp sessions.",
  },
  // ── 2024 ──
  {
    name: "Kabat American",
    logo: "/sponsors/kabatamerican.jpg",
    amount: 1000,
    year: "2024",
    date: "May 28, 2024",
    description:
      "Kabat American signed on before the first BizBuzz camp session in May 2024. Their early funding paid for the supplies, space, and prizes needed to launch. Founding sponsors take a chance on unproven ideas, and Kabat American took ours. BizBuzz exists today because of this early belief.",
  },
  {
    name: "Midwest Badminton",
    logo: "/sponsors/midwestbadminton.png",
    amount: 1000,
    year: "2024",
    date: "July 13, 2024",
    description:
      "Midwest Badminton runs training facilities in Woodridge and Naperville with up to 13 courts, LED lighting, and airflow flooring designed to prevent injuries. Coaches offer team training, private lessons, and open gym for kids and adults. The club has sent students to the state championship every year since 2012. Their 2024 sponsorship funded the inaugural Fish Tank competition and summer camp programming.",
  },
  {
    name: "Conference Planning Resources",
    logo: "/sponsors/conferenceplanningresources.jpg",
    amount: 250,
    year: "2024",
    date: "June 10, 2024",
    description:
      "Conference Planning Resources, based in Naperville, handles hotel procurement, site selection, and contract negotiation for national associations and Fortune 500 companies. The firm plans sales meetings, conferences, and executive retreats. Their sponsorship supported BizBuzz's first summer of in-person sessions.",
  },
  {
    name: "SteamDream Team",
    logo: "/sponsors/steamdreamteam.png",
    amount: 150,
    year: "2024",
    date: "July 25, 2024",
    description:
      "SteamDream Team gives kids hands-on STEM education. Their donation backed a shared goal: more kids building and creating.",
  },
  {
    name: "Samantha Zylstra & Associates, LLC",
    logo: "/sponsors/samanthazylstra.jpeg",
    amount: 100,
    year: "2024",
    date: "June 10, 2024",
    description:
      "Samantha Zylstra & Associates is a Naperville counseling practice offering therapy for couples, families, and adults. The firm helped cover program costs during BizBuzz's first summer.",
  },
  {
    name: "Elite Tutoring Place",
    logo: "/sponsors/elitetutoringplace.jpg",
    amount: 100,
    year: "2024",
    date: "June 10, 2024",
    description:
      "Elite Tutoring Place has tutored K-12 students in Naperville since 2009. It was among the first to sponsor BizBuzz and returns every year.",
  },
  {
    name: "Best Brains",
    logo: "/sponsors/bestbrains.png",
    amount: 100,
    year: "2024",
    date: "June 13, 2024",
    description:
      "Best Brains teaches math, English, abacus, and coding to kids ages 3 to 14 across North America. Their gift brought business education to the same age group.",
  },
  {
    name: "Costco",
    logo: "/sponsors/costco.png",
    amount: 100,
    year: "2024",
    date: "June 18, 2024",
    description:
      "Costco Wholesale ranks among the largest retailers in the world. Their sponsorship supplied BizBuzz's first summer camp.",
  },
  {
    name: "Center for Future Innovators Inc.",
    logo: "/sponsors/centerforfutureinnovators.jpg",
    amount: 100,
    year: "2024",
    date: "June 18, 2024",
    description:
      "Center for Future Innovators is a 501(c)(3) nonprofit teaching robotics, coding, and engineering to kids in Chicago and Blue Island. Their support helped BizBuzz reach more student entrepreneurs.",
  },
  {
    name: "Naper Nuts & Sweets",
    logo: "/sponsors/napernutsandsweets.png",
    amount: 100,
    year: "2024",
    date: "July 10, 2024",
    description:
      "Naper Nuts & Sweets has sold candy in downtown Naperville since 1983, growing to nearly 4,000 products. The shop shows young founders what steady small business growth looks like.",
  },
];

const TIER_META: Record<
  Tier,
  {
    label: string;
    range: string;
    accent: string;
    badge: string;
    ring: string;
    cols: string;
    pad: string;
    logoSize: string;
    nameSize: string;
    showDescription: boolean;
    descClamp: string;
    perk: string;
  }
> = {
  gold: {
    label: "Gold",
    range: "$1,000+",
    accent: "from-[#FFD700] to-[#e0a800]",
    badge: "bg-[#FFD700]/15 text-[#a07a00] border-[#FFD700]/40",
    ring: "hover:from-[#FFD700]/50 hover:to-[#e0a800]/40",
    cols: "grid-cols-1 md:grid-cols-2",
    pad: "p-8",
    logoSize: "w-16 h-16",
    nameSize: "text-xl",
    showDescription: true,
    descClamp: "",
    perk: "Everything in Silver, plus a booth at the Fish Tank competition and t-shirt recognition on the following year's BizBuzz shirt.",
  },
  silver: {
    label: "Silver",
    range: "$250 – $999",
    accent: "from-[#9ca7b5] to-[#6b7686]",
    badge: "bg-[#9ca7b5]/15 text-[#5b6675] border-[#9ca7b5]/40",
    ring: "hover:from-[#9ca7b5]/50 hover:to-[#6b7686]/40",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    pad: "p-6",
    logoSize: "w-14 h-14",
    nameSize: "text-lg",
    showDescription: true,
    descClamp: "line-clamp-5",
    perk: "Everything in Bronze, plus a speaking opportunity at Fish Tank and an invitation to our picnic.",
  },
  bronze: {
    label: "Bronze",
    range: "Up to $250",
    accent: "from-[#c98b5e] to-[#a06636]",
    badge: "bg-[#c98b5e]/15 text-[#8a5226] border-[#c98b5e]/40",
    ring: "hover:from-[#c98b5e]/50 hover:to-[#a06636]/40",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    pad: "p-5",
    logoSize: "w-12 h-12",
    nameSize: "text-base",
    showDescription: true,
    descClamp: "text-sm",
    perk: "Distribution of your promotional materials at our events and a feature on the BizBuzz website.",
  },
};

const TIER_ORDER: Tier[] = ["gold", "silver", "bronze"];

function tierOf(amount: number): Tier {
  if (amount >= 1000) return "gold";
  if (amount >= 250) return "silver";
  return "bronze";
}

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

function groupByTier(sponsors: Sponsor[]): Record<Tier, Sponsor[]> {
  const groups: Record<Tier, Sponsor[]> = { gold: [], silver: [], bronze: [] };
  for (const s of sponsors) groups[tierOf(s.amount)].push(s);
  for (const t of TIER_ORDER) {
    groups[t].sort((a, b) => b.amount - a.amount || b.year.localeCompare(a.year));
  }
  return groups;
}

export default function SponsorsPage() {
  const grouped = groupByTier(SPONSORS);

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

            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light mb-10">
              BizBuzz exists because businesses and individuals choose to invest in young
              entrepreneurs. Every contribution goes directly toward camps, competitions, and
              programs for students.
            </p>

            {/* Perks CTA */}
            <a
              href="#perks"
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFD700] to-[#e0a800] text-[#0a1733] font-semibold text-base shadow-2xl hover:shadow-[0_18px_50px_rgba(255,215,0,0.3)] hover:scale-[1.03] transition-all duration-300"
            >
              See perks of becoming a sponsor
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Bottom fade into page */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[#fafbfd]"></div>
      </section>

      {/* ── Sponsors by tier ── */}
      <section className="pb-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {TIER_ORDER.map((t) => {
            const meta = TIER_META[t];
            const list = grouped[t];
            if (list.length === 0) return null;
            return (
              <div key={t} className="relative mb-24 last:mb-0">
                {/* Tier header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative flex items-center gap-5 mb-10"
                >
                  <span
                    className={`px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-[0.18em] ${meta.badge}`}
                  >
                    {meta.label}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0c1d3d] tracking-tight">
                    {meta.range}
                  </h2>
                  <span className="text-sm uppercase tracking-[0.2em] text-[#3AB6FF] font-semibold">
                    {list.length} sponsor{list.length === 1 ? "" : "s"}
                  </span>
                  <div className="flex-grow h-px bg-gradient-to-r from-[#3AB6FF]/30 via-[#FFD700]/20 to-transparent"></div>
                </motion.div>

                <div className={`relative grid ${meta.cols} gap-7`}>
                  {list.map((sponsor, i) => (
                    <motion.div
                      key={`${t}-${sponsor.name}-${sponsor.year}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                      whileHover={{ y: -6 }}
                      className={`group relative bg-white rounded-3xl p-[1px] bg-gradient-to-br from-slate-100 via-slate-100 to-slate-100 ${meta.ring} transition-all duration-500 shadow-[0_2px_20px_rgba(12,29,61,0.05)] hover:shadow-[0_16px_44px_rgba(12,29,61,0.12)]`}
                    >
                      <div
                        className={`relative bg-white rounded-[calc(1.5rem-1px)] ${meta.pad} h-full flex flex-col`}
                      >
                        {/* Logo + name row */}
                        <div className="flex items-center gap-4 mb-4">
                          {sponsor.logo ? (
                            <div
                              className={`flex-shrink-0 ${meta.logoSize} rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center p-1.5 overflow-hidden`}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={sponsor.logo}
                                alt={`${sponsor.name} logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div
                              className={`flex-shrink-0 ${meta.logoSize} rounded-2xl bg-gradient-to-br from-[#0c1d3d] to-[#1e3a6e] flex items-center justify-center shadow-md`}
                            >
                              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#7cd4ff]">
                                {initialsOf(sponsor.name)}
                              </span>
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3
                              className={`${meta.nameSize} font-bold text-[#0c1d3d] leading-snug`}
                            >
                              {sponsor.name}
                            </h3>
                            <div className="mt-1 flex items-center gap-2">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${meta.badge}`}
                              >
                                {sponsor.year}
                              </span>
                              {sponsor.date && (
                                <span className="text-xs text-slate-400 tracking-wide truncate">
                                  {sponsor.date}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {meta.showDescription && (
                          <p
                            className={`text-[15px] text-slate-600 leading-relaxed flex-grow ${meta.descClamp}`}
                          >
                            {sponsor.description}
                          </p>
                        )}

                        <div
                          className={`mt-auto ${
                            meta.showDescription ? "pt-5 mt-6 border-t border-slate-100" : "pt-3"
                          } flex items-center justify-between`}
                        >
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
            );
          })}
        </div>
      </section>

      {/* ── Perks / tiers explainer ── */}
      <section id="perks" className="scroll-mt-24 pb-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c1d3d] tracking-tight mb-4">
              Sponsorship tiers
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
              The more you give, the more visibility you receive. Here is what each tier unlocks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
            {TIER_ORDER.map((t, i) => {
              const meta = TIER_META[t];
              return (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-3xl bg-white p-8 border border-slate-100 shadow-[0_2px_20px_rgba(12,29,61,0.05)] ${
                    t === "gold" ? "md:-mt-2 md:mb-2 ring-2 ring-[#FFD700]/40" : ""
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-[0.18em] mb-5 ${meta.badge}`}
                  >
                    {meta.label}
                  </div>
                  <p
                    className={`text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${meta.accent}`}
                  >
                    {meta.range}
                  </p>
                  <p className="text-[15px] text-slate-600 leading-relaxed">{meta.perk}</p>
                </motion.div>
              );
            })}
          </div>
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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
