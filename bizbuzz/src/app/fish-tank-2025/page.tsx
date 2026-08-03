import Image from 'next/image';
import Button from '@/components/ui/Button';
import PageMasthead from '@/components/ui/PageMasthead';
import Plate from '@/components/ui/Plate';
import RailSection from '@/components/ui/RailSection';
import SplitBrief from '@/components/ui/SplitBrief';
import Tag from '@/components/ui/Tag';

interface Winner {
  placement: string;
  project: string;
  team: string;
  /** The award for that placement, from the 2025 prize schedule. */
  prize: string;
  description: string;
}

interface Judge {
  name: string;
  title: string;
  bio: string;
  /** Empty when no photograph is on file — the initials tile carries the record instead. */
  image: string;
  objectPosition?: string;
}

interface Photograph {
  src: string;
  caption: string;
}

// The five placed teams, in finishing order. Prizes are the 2025 schedule:
// $250 / $200 / $150 / $100 / $50, as written on the awards themselves.
const winners: Winner[] = [
  {
    placement: "1st place",
    project: "The Better Investor",
    team: "AbduRahman Yuldash",
    prize: "$250",
    description:
      "The Better Investor makes growing your money feel less like guesswork and more like a game you can actually win. It replaces fear and FOMO with clarity, teaching timeless investing wisdom through AI coaching that talks with you, not at you. Through the web app, you can earn XP, unlock titles, and watch your confidence grow as your portfolio does too.",
  },
  {
    placement: "2nd place",
    project: "MagicPillow",
    team: "Arjun Singh & Arjun Malhotra",
    prize: "$200",
    description:
      "Magic Pillow is the world's first pillow that dreams as big as you do. It heats when you're cold, cools when you're sweaty, tracks your sleep, and keeps your neck happy through every nap and flight—all for under $80. Built for travelers, hot sleepers, and anyone tired of restless nights, it makes comfort feel a little more like magic.",
  },
  {
    placement: "3rd place",
    project: "EverFresh",
    team: "Saravan & Shanvitha Palakruthi",
    prize: "$150",
    description:
      "EverFresh is a smart stand that keeps food fresher for longer, tackling spoilage in a $30B market. With built-in preservation tech and refillable pouches, it helps households waste less, save more, and enjoy food the way it's meant to taste—fresh.",
  },
  {
    placement: "4th place",
    project: "Agritech",
    team: "Ohm Patel, Nikhil Naveen, Sai Sirasani & Krish Mittal",
    prize: "$100",
    description:
      "Agritech is where agriculture meets technology. It uses innovation in applications of AI, robotics, biotechnology, and data analytics to make farming more sustainable and resilient. From precision irrigation and soil sensors to autonomous tractors and vertical farms, Agritech is redefining how the world grows food.",
  },
  {
    placement: "5th place",
    project: "SGS",
    team: "Sanvi Das & Ovee Yande",
    prize: "$50",
    description:
      "SGS is a smart gardening system that takes the guesswork out of growing. Using automated sensors, timed watering, and real-time data, it keeps your plants healthy no matter how busy you are. Every plant parent deserves to be a pro!",
  },
];

const finalsJudges: Judge[] = [
  {
    name: "Aleck Matambo",
    title: "Senior Director of Global Procurement @ Google",
    image: "/fish_tank/f_judges/aleck.jpg",
    bio: "Aleck Matambo led global procurement at Google, managing $16B in annual spend across EMEA, APAC, and LATAM. He developed the company's first AI-native procurement tool, automated contract analysis, and drove a global savings program that improved efficiency by over 10%. He also established the One Google Negotiation Program and Cloud & AI Strategic Alliances Platform, delivering $1B in annual value across 50+ major deals.",
  },
  {
    name: "Ryan Havlick",
    title: "Venture Partner @ Multimodal Ventures",
    image: "/fish_tank/f_judges/ryan.jpg",
    bio: "Ryan Havlick is a Venture Partner at Multimodal Ventures, a Chicago-based seed-stage fund investing in Y Combinator–backed startups. He helps evaluate potential portfolio investments, enhance Midas (the firm's proprietary data tool), and refine investment strategy and due diligence. He relies on data-driven analysis to assess startups like those BizBuzz kidpreneurs are developing for Fish Tank.",
  },
  {
    name: "Isha Elandassery",
    title: "Founder @ Naperville Rising Women in Business",
    image: "/fish_tank/f_judges/isha.jpg",
    bio: "Isha Elandassery is a junior at the Kelley School of Business, where she studies finance and serves as president of the university's Girl Up United Nations chapter. As a former guest speaker for BizBuzz and 2024 Fish Tank judge, she's excited to return once again to create “biz” and “buzz.”",
  },
  {
    name: "Usha Shedge",
    title: "Founder @ Smart Sakhi",
    image: "/fish_tank/f_judges/usha.jpg",
    bio: "Usha Shedge is a social entrepreneur and technologist passionate about using innovation to drive community impact. After 18 years in IT and Business Intelligence, she founded initiatives empowering thousands of youth and women farmers through sustainability projects and mission-driven enterprise.",
    objectPosition: "center 19%",
  },
  {
    name: "Geetha Pilli",
    title: "Director of Enterprise Architecture @ Core-Mark International",
    image: "/fish_tank/f_judges/geetha.jpg",
    bio: "Geetha Pilli leads technology strategy, system integration, and digital transformation across high-volume retail and supply-chain operations. With an MBA from the University of Chicago Booth School of Business, she drives initiatives that leverage IoT and AI to enhance efficiency and business value.",
  },
  {
    name: "Nara Rosie",
    title: "Consultant @ PwC",
    image: "",
    bio: "Nara Rosie brings strategic advisory experience from PwC, helping organizations embrace the consulting mindset behind building scalable, resilient ventures—and inspiring young founders to think the same way.",
  },
];

const prelimJudges: Judge[] = [
  {
    name: "Andrew Bukowski",
    title: "Co-Founder @ SmartSeat",
    image: "",
    bio: "Andrew is an incoming freshman at Yale University. He raised $30K+ for SmartSeat, a health-tech startup tackling posture and seating-related issues, and was named a Coca-Cola Scholarship Finalist and Conrad Challenge Winner.",
  },
  {
    name: "Anay Apte",
    title: "Vice President @ Illinois DECA",
    image: "",
    bio: "Anay is an incoming freshman at the University of Pennsylvania. He leads 5,400+ DECA members statewide and brings hands-on engineering camp experience to help Fish Tank teams dream big.",
  },
  {
    name: "Paul van der Vorst",
    title: "Co-Director @ Naperville Children's Business Fair",
    image: "",
    bio: "Paul is an incoming freshman at the University of South Carolina. He helped incubate 400+ kid-run businesses selling to 5,000+ visitors and now mentors students through ideation and pitching.",
  },
  {
    name: "Amy Yang",
    title: "Harvard Book Prize Recipient",
    image: "",
    bio: "Amy is a rising senior at Naperville Central High School, passionate about grassroots advocacy and creative problem-solving that brings communities together.",
  },
  {
    name: "Ansh Shah",
    title: "2024 Executive Director @ BizBuzz",
    image: "",
    bio: "Ansh is an incoming freshman at the University of Illinois Urbana-Champaign. A former BizBuzz executive director, he's back as a judge to cheer on the next generation of innovators.",
  },
];

// One flat contact sheet for both days, roughly in the order the event ran.
// gallery-trophy.jpg and gallery-celebrate.jpg are byte-identical to the first-
// and third-place files, so they are filed once, under the placement.
const photographs: Photograph[] = [
  {
    src: "/fish_tank/2025/images/goodpic.jpg",
    caption: "BizBuzz students with the Fish Tank poster, Goodwin Hall lobby",
  },
  {
    src: "/fish_tank/2025/images/gallery-team.jpg",
    caption: "Competitors waiting in the Goodwin Hall lobby",
  },
  {
    src: "/fish_tank/2025/images/gallery-pitching.jpg",
    caption: "A competitor at the Jenga table between rounds",
  },
  {
    src: "/fish_tank/2025/images/gallery-friends.jpg",
    caption: "The preliminary judging table, day one",
  },
  {
    src: "/fish_tank/2025/images/hero-judges.jpg",
    caption: "Preliminary judges between pitches",
  },
  {
    src: "/fish_tank/2025/images/gallery-workshop.jpg",
    caption: "The room applauds at the end of a pitch",
  },
  {
    src: "/fish_tank/2025/images/gallery-prototype.jpg",
    caption: "Two competitors pitching from their notes",
  },
  {
    src: "/fish_tank/2025/images/gallery-present.jpg",
    caption: "Taking questions at the end of a pitch",
  },
  {
    src: "/fish_tank/2025/images/gallery-speaker.jpg",
    caption: "Presenting a team poster — goal, market and target audience",
  },
  {
    src: "/fish_tank/2025/images/gallery-market.jpg",
    caption: "A finalist walking the room through his revenue model",
  },
  {
    src: "/fish_tank/2025/images/hero-stage.jpg",
    caption: "A competitor pitching, trophies on the table behind",
  },
  {
    src: "/fish_tank/2025/images/gallery-stage.jpg",
    caption: "Trophies, plaques and the first-place award on the awards table",
  },
  {
    src: "/fish_tank/2025/images/prelim-judge.jpg",
    caption:
      "Preliminary judges Ansh Shah, Amy Yang and Paul van der Vorst with their certificates",
  },
  {
    src: "/fish_tank/2025/images/gallery-awards.jpg",
    caption:
      "Finals judges Isha Elandassery, Ryan Havlick, Aleck Matambo and Geetha Pilli with their certificates",
  },
  {
    src: "/fish_tank/2025/winners/first-place.JPG",
    caption: "First place — The Better Investor, with the $250 award",
  },
  {
    src: "/fish_tank/2025/winners/second-place.JPG",
    caption: "Second place — MagicPillow, with the $200 award",
  },
  {
    src: "/fish_tank/2025/winners/third-place.JPG",
    caption: "Third place — EverFresh, with the $150 award",
  },
  {
    src: "/fish_tank/2025/winners/fourth-place.JPG",
    caption: "Fourth place — Agritech, with the $100 award",
  },
  {
    src: "/fish_tank/2025/winners/fifth-place.JPG",
    caption: "Fifth place — SGS, with the $50 award",
  },
  {
    src: "/fish_tank/2025/images/gallery-group.jpg",
    caption: "The placed teams with their trophies, plaques and awards",
  },
  {
    src: "/fish_tank/2025/images/hero-celebration.jpg",
    caption: "Competitors, families, mentors and judges in the Goodwin Hall lobby",
  },
  {
    src: "/fish_tank/2025/images/IMG_5116.jpeg",
    caption: "BizBuzz students at the Naperville Children's Business Fair",
  },
];

// The 2025 entry form, kept at its original address.
const ENTRY_FORM = "https://forms.gle/5k1pAFnvRbDRGvc5A";

// Three plates across the 10-column content band from 900px up.
const PLATE_SIZES = "(min-width: 900px) 32vw, (min-width: 600px) 47vw, 100vw";

function indexLabel(position: number): string {
  return String(position + 1).padStart(2, "0");
}

function initialsOf(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

// ── Judges ─────────────────────────────────────────────────────

interface JudgeListProps {
  judges: Judge[];
}

// 4:5 portrait, matted and ruled like every other photograph. Most judges have
// no photograph on file; the initials tile is the normal case, not an error.
const JudgeList = ({ judges }: JudgeListProps) => (
  <ul className="mt-s5 border-t border-rule">
    {judges.map((judge) => (
      <li key={judge.name} className="border-b border-rule py-s6">
        <div className="grid grid-cols-1 gap-s4 min-[600px]:grid-cols-12 min-[600px]:gap-s5">
          <div className="max-w-[168px] min-[600px]:col-span-3 min-[600px]:max-w-none">
            <div className="rounded-none border border-rule bg-paper p-s2">
              <div className="relative aspect-[4/5] bg-fill-soft">
                {judge.image ? (
                  <Image
                    src={judge.image}
                    alt={judge.name}
                    fill
                    sizes="(min-width: 600px) 22vw, 168px"
                    className="object-cover"
                    style={judge.objectPosition ? { objectPosition: judge.objectPosition } : undefined}
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center font-display text-26 text-ink-2"
                  >
                    {initialsOf(judge.name)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="min-[600px]:col-span-9">
            <p className="font-display text-21 font-medium text-ink">{judge.name}</p>
            <p className="mt-s1 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
              {judge.title}
            </p>
            <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">{judge.bio}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

// ── Page ───────────────────────────────────────────────────────

export default function FishTank2025Page() {
  return (
    <div>
      <PageMasthead
        kicker="Fish Tank pitch competition"
        title="Fish Tank 2025"
        standfirst="The second annual Fish Tank ran over two days at Benedictine University Goodwin Hall of Business in Lisle: 70+ competitors, 12 finalists, 11 judges and five placed teams."
        year={2025}
        tags={
          <>
            <Tag variant="status-archive">Archive</Tag>
            <Tag variant="year" year={2025}>
              2025
            </Tag>
          </>
        }
      />

      <RailSection index="01" label="The competition">
        <SplitBrief
          split="7/5"
          facts={
            <dl className="border-t border-rule">
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Dates
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">
                  August 2–3, 2025
                </dd>
              </div>
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Venue
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">
                  Benedictine University Goodwin Hall of Business, Lisle
                </dd>
              </div>
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Competitors
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">70+</dd>
              </div>
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Finalists
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">12</dd>
              </div>
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Mentors
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">25+</dd>
              </div>
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Judges
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">
                  11 — six finals, five preliminary
                </dd>
              </div>
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Prizes
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">
                  $750 across five places
                </dd>
              </div>
            </dl>
          }
        >
          <h2
            id="what-is-fish-tank"
            className="scroll-mt-s9 text-26 min-[900px]:text-34"
            style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
          >
            What is Fish Tank?
          </h2>
          <p className="mt-s5">
            Inspired by the world-renowned series Shark Tank, the Fish Tank competition invites
            3rd–9th grade students in the Chicagoland area to identify a market opportunity and
            introduce a new business, product, or service. Young entrepreneurs pitch their ideas,
            take expert feedback, and compete for the resources to turn a business concept into
            something real.
          </p>
          <p className="mt-s4">
            The 2025 edition was hosted at Benedictine University Goodwin Hall of Business in Lisle
            on August 2nd and 3rd, with some of Naperville&rsquo;s biggest business owners and
            leaders on the panels.
          </p>
          <p className="mt-s4">
            On day one, every participant pitched to high school business students — five-minute
            pitches followed by five-minute Q&amp;A. Twelve finalists were selected to advance, and
            spent the evening in mentorship sessions and workshops.
          </p>
          <p className="mt-s4">
            On day two, those twelve pitched to a panel of industry leaders: five-minute
            presentations with demos, then ten-minute Q&amp;A, closing with the awards ceremony.
            Five teams placed, sharing $750 in prize funding.
          </p>
          <div className="mt-s7">
            <Button variant="secondary" href={ENTRY_FORM} external>
              2025 entry form
            </Button>
            <p className="mt-s3 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
              The 2025 competition has concluded — the form is kept for the record
            </p>
          </div>
        </SplitBrief>
      </RailSection>

      <RailSection index="02" label="Placed winners">
        <ol className="border-t border-rule">
          {winners.map((winner, index) => (
            <li
              key={winner.project}
              className="grid grid-cols-1 gap-s3 border-b border-rule py-s5 min-[900px]:grid-cols-12 min-[900px]:gap-s5"
            >
              <p className="font-mono text-12 font-medium tracking-[0.08em] text-ink-muted min-[900px]:col-span-1">
                {indexLabel(index)}
              </p>
              <div className="min-[900px]:col-span-11">
                <h2
                  className="text-21 min-[900px]:text-26"
                  style={{ fontVariationSettings: "'wdth' 105, 'wght' 600" }}
                >
                  {winner.project}
                </h2>
                <p className="mt-s2 flex flex-wrap gap-x-s4 gap-y-s1 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  <span>{winner.placement}</span>
                  <span>{winner.team}</span>
                  <span>{winner.prize}</span>
                </p>
                <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
                  {winner.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </RailSection>

      <RailSection index="03" label="Judges">
        <h2 className="text-26 min-[900px]:text-34" style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}>
          Finals judges
        </h2>
        <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
          Industry leaders who evaluated the top 12 finalists and selected the 2025 champions.
        </p>
        <JudgeList judges={finalsJudges} />

        <h2
          className="mt-s9 text-26 min-[900px]:text-34"
          style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
        >
          Preliminary judges
        </h2>
        <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
          Emerging leaders and alumni who guided every team through the opening round of pitches.
        </p>
        <JudgeList judges={prelimJudges} />
      </RailSection>

      <RailSection index="04" label="Photographs">
        <div className="grid grid-cols-1 gap-s5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
          {photographs.map((photograph, index) => (
            <Plate
              key={photograph.src}
              src={photograph.src}
              alt={photograph.caption}
              ratio="3:2"
              caption={photograph.caption}
              index={`${indexLabel(index)} / ${photographs.length}`}
              sizes={PLATE_SIZES}
            />
          ))}
        </div>
      </RailSection>
    </div>
  );
}
