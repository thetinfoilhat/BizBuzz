import Ledger from '@/components/ui/Ledger';
import PageMasthead from '@/components/ui/PageMasthead';
import Plate from '@/components/ui/Plate';
import RailSection from '@/components/ui/RailSection';
import Tag from '@/components/ui/Tag';

// Entry ran through this form and closed with the event. It is kept because it
// is part of the record, not because anything can still be entered.
const ENTRY_FORM_URL = "https://forms.gle/eK8CgNGCyvuQXwNq7";

interface Judge {
  name: string;
  photo: string;
  title: string;
  /** Only the final panel carries an organisation separate from the title. */
  company?: string;
  bio: string;
}

// The final round, July 25. Photographs restored from git — commit 308f66c had
// deleted four of the five while the page still pointed at them.
const finalJudges: Judge[] = [
  {
    name: "Phil Ramos",
    photo: "/fish_tank/f_judges/phil.png",
    title: "Owner & President",
    company: "Office Furniture Solutions",
    bio: "Phil Ramos is the owner and president of Office Furniture Solutions in Naperville, where he has built a respected business providing new and refurbished office furniture. Known for his commitment to community involvement and mentorship, he actively supports local initiatives and youth programs."
  },
  {
    name: "Raymond Munch",
    photo: "/fish_tank/f_judges/ray.png",
    title: "Director of Finance",
    company: "City of Naperville",
    bio: "Raymond Munch serves as the Director of Finance for the City of Naperville, overseeing financial operations and managing the city's substantial budget. His career includes over a decade in law enforcement with the Village of Glen Ellyn, followed by leadership roles in city management in DeKalb, Illinois."
  },
  {
    name: "Janet Yang Rohr",
    photo: "/fish_tank/f_judges/janet.png",
    title: "State Representative",
    company: "Illinois' 41st District",
    bio: "Janet Yang Rohr is a state representative for Illinois' 41st District, serving since 2021 and focusing on education, healthcare, and economic issues. Before entering politics, she held leadership roles in finance and served on the Naperville District 203 school board."
  },
  {
    name: "Brad Wilson",
    photo: "/fish_tank/f_judges/brad.png",
    title: "Executive Director",
    company: "Naperville Park District",
    bio: "Brad Wilson has been the Executive Director of the Naperville Park District since February 2022, after a distinguished 23-year tenure with the organization. He has been with the district for over two decades, beginning as an intern and working his way up through various leadership positions."
  },
  {
    name: "Isha Elandassery",
    photo: "/fish_tank/f_judges/isha-elandassery.jpg",
    title: "Founder",
    company: "Naperville Rising Women in Business",
    bio: "Isha Elandassery is the founder of Naperville Rising Women in Business (NRWIB), an organization dedicated to empowering young girls to become future leaders. She also created Salus Security, a startup focused on developing discreet emergency wristbands for students."
  }
];

// The preliminary round, July 24. Their titles already name the organisation.
const prelimJudges: Judge[] = [
  {
    name: "Athena Chen",
    photo: "/fish_tank/p_judges/athena.png",
    title: "Founder @ Naperville Children's Business Fair",
    bio: "Athena is an incoming freshman at the Haas School of Business at the University of California-Berkeley. In 2020, she founded the Naperville Children's Business Fair, an entrepreneurship event incubating 200+ businesses run by over 350 kidpreneurs (ages 5-14) selling to 3,500 visitors over the past three years. She is so excited that the Fair is partnering with BizBuzz this year!"
  },
  {
    name: "Olivia Fisz",
    photo: "/fish_tank/p_judges/olivia.png",
    title: "State President @ Illinois DECA",
    bio: "Olivia is an incoming freshman at the Wharton School of the University of Pennsylvania, where she will study finance. She currently serves as the Illinois DECA State President, leading over 5,000 members in the world's largest high school business organization. She hopes to show young students how they can use their voices, ideas, and courage to create meaningful change."
  },
  {
    name: "Soohyun Cho",
    photo: "/fish_tank/p_judges/soohyun.jpg",
    title: "Student Representative @ City of Naperville",
    bio: "Soohyun is an incoming freshman at Rice University majoring in Finance. From working at a sales company to being involved in business organizations at school, he has taken his talents far and wide. This past year, he placed nationally in personal finance and investing competitions, eventually becoming a state champion in DECA."
  },
  {
    name: "Isabel Yu",
    photo: "/fish_tank/p_judges/isabel.png",
    title: "Founder @ Suki Jewels",
    bio: "Isabel is a rising freshman at UIUC's Gies College of Business, studying marketing and finance. As an upcoming D203 Business Incubator mentor, she is excited to help students further their passion for entrepreneurship. She is also the co-owner of Suki Jewels, a handmade jewelry business that has generated $3,000+ in revenue and 8,000+ supporters to date."
  },
  {
    name: "Ria Pande",
    photo: "/fish_tank/p_judges/ria.png",
    title: "DECA International Finalist",
    bio: "Ria is a freshman at the University of California, Santa Barbara, studying business and entrepreneurship. As a finalist at DECA's International Career Development Conference, she has developed strong experience in turning ideas into impact. Ria is passionate about helping students find their voices and couldn't be more excited to support this year's Fish Tank participants as they prepare to pitch and pursue their own entrepreneurial visions!"
  },
  {
    name: "Nathan Mendoza",
    photo: "/fish_tank/p_judges/nathan.png",
    title: "Founder @ Stall Secure LLC",
    bio: "Nathan is a rising senior at Naperville North, aspiring to become an entrepreneur while uplifting others. He is the current CEO and Co-Founder of Stall-Secure, which has won first place in three major pitch competitions. To date, he has secured over $9,000 in funding for his company and is looking forward to seeing BizBuzz participants' creativity!"
  }
];

interface PlacedTeam {
  place: string;
  prize: string;
  team: string;
  product: string;
  photo: string;
  description: string;
}

const placedTeams: PlacedTeam[] = [
  {
    place: "First",
    prize: "$250",
    team: "Garrett Hauk",
    product: "Garrett's Gourmet Dog Treats",
    photo: "/fish_tank/ranking/first.jpg",
    description: "Garrett's Gourmet Dog Treats offers organic, natural, and delicious snacks made with fewer than five ingredients. As a healthier, modern alternative to conventional options, they ensure man's best friend enjoys treats that are both simple and satisfying."
  },
  {
    place: "Second",
    prize: "$200",
    team: "Taksh Taware & Rohan Patwardhan",
    product: "ChitChat Lingo",
    photo: "/fish_tank/ranking/second.jpg",
    description: "ChitChat Lingo empowers immigrants, tourists, and global professionals to speak confidently and fluently in new languages. By focusing on real-life, emotion-filled scenarios, it makes meaningful conversations more natural and accessible than ever."
  },
  {
    place: "Third",
    prize: "$150",
    team: "Sara Jayaseelan",
    product: "Cuisinify",
    photo: "/fish_tank/ranking/third.jpg",
    description: "Cuisinify makes cooking accessible for everyone by tackling ingredient substitutions, leftover use, and nutritious meal prep. With AR technology that identifies recipe substitutes in real time, it empowers anyone to cook anytime with what they have on hand."
  },
  {
    place: "Fourth",
    prize: "$100",
    team: "Mirav Patel & Mishi Patel",
    product: "ECOVision",
    photo: "/fish_tank/ranking/fourth.jpg",
    description: "ECOVision sees something different with corn waste. Instead of leaving it to rot, burn, or decompose, it uses a complex process that extracts leftover compounds in the waste to create yarn, foam, and paper, revolutionizing food waste management."
  },
  {
    place: "Fifth",
    prize: "$50",
    team: "Claire Shen & Catherine Shen",
    product: "Pathway",
    photo: "/fish_tank/ranking/fifth.jpg",
    description: "Pathway streamlines the process of finding communities, activities, and interests for high schoolers, removing the need for expensive college counselors and wasted time on web searches. Pathway creates a pathway for those finding their journey."
  }
];

const eventPhotographs = [
  "/fish_tank/background.jpg",
  "/fish_tank/1.jpg",
  "/fish_tank/2.jpg",
  "/fish_tank/3.jpg",
  "/fish_tank/4.jpg",
  "/fish_tank/5.jpg",
  "/fish_tank/6.jpg",
  "/fish_tank/7.jpg",
  "/fish_tank/8.jpg",
  "/fish_tank/9.jpg",
  "/fish_tank/10.jpg",
  "/fish_tank/11.jpg",
  "/fish_tank/12.jpg",
];

// One indexed contact sheet: the two days first, the awards last.
const photographs = [
  ...eventPhotographs.map((src) => ({
    src,
    alt: "Fish Tank 2024 at College of DuPage, Glen Ellyn",
    caption: "Fish Tank 2024 · College of DuPage, Glen Ellyn",
  })),
  ...placedTeams.map((team) => ({
    src: team.photo,
    alt: `${team.team}, ${team.place.toLowerCase()} place at Fish Tank 2024`,
    caption: `${team.place} place · ${team.team}`,
  })),
];

// ── Judge plate ────────────────────────────────────────────────

interface JudgePlateProps {
  judge: Judge;
}

const JudgePlate = ({ judge }: JudgePlateProps) => (
  <li>
    <Plate
      src={judge.photo}
      alt={judge.name}
      ratio="4:5"
      caption={judge.company ? `${judge.title} · ${judge.company}` : judge.title}
      sizes="(min-width: 900px) 32vw, (min-width: 600px) 47vw, 100vw"
    />
    <p className="mt-s3 font-display text-21 font-medium text-ink">{judge.name}</p>
    <p className="mt-s3 max-w-measure font-prose text-18 text-ink-2">{judge.bio}</p>
  </li>
);

// ── Page ───────────────────────────────────────────────────────

export default function FishTankPage() {
  return (
    <>
      <PageMasthead
        kicker="Fish Tank — 2024"
        title="Fish Tank 2024"
        standfirst="The first edition ran on July 24 and 25, 2024 at College of DuPage in Glen Ellyn, where 3rd–9th grade students from across Chicagoland pitched businesses of their own to eleven judges."
        year={2024}
        tags={
          <>
            <Tag variant="status-archive">Archive</Tag>
            <Tag variant="year" year={2024}>
              2024
            </Tag>
          </>
        }
      />

      {/* The anchor the hero's "Learn More" control used to target. */}
      <div id="what-is-fish-tank">
        <RailSection index="01" label="The record">
          <Ledger
            items={[
              { label: "Competitors", figure: "80+", note: "3rd–9th grade, Chicagoland" },
              { label: "Mentors", figure: "30+" },
              { label: "Judges", figure: "11", note: "6 preliminary · 5 final" },
              { label: "Finalist teams", figure: "12", note: "Roughly 25% of the field" },
              { label: "Prize pool", figure: "$750", note: "$250 / $200 / $150 / $100 / $50" },
            ]}
          />
          <p className="mt-s7 max-w-measure font-prose text-18 text-ink-2">
            Inspired by Shark Tank, Fish Tank invited 3rd–9th grade students in the Chicagoland
            area to identify a market opportunity and introduce a new business, product or
            service. Teams of one to three students registered, researched their market, built a
            marketing and financial plan, and prepared a five-minute presentation.
          </p>
          <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
            The preliminary round ran on July 24, judged by six high school business leaders
            including DECA state officers and international finalists. The top twelve teams —
            roughly a quarter of the field — advanced to the final round on July 25 and pitched to
            a panel of Naperville business owners and government leaders. The inaugural champion
            received an interview from NCTV17.
          </p>
          <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
            Every participant left with detailed feedback from the high school judges and their
            contact details; the finalists also heard from the professional panel. BizBuzz Camp
            resources stayed open to everyone who competed. Teams entered through{' '}
            <a
              href={ENTRY_FORM_URL}
              className="text-ink underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-120 ease-out hover:decoration-accent focus-visible:decoration-accent"
            >
              the 2024 entry form
            </a>
            , kept here as part of the record.
          </p>
        </RailSection>
      </div>

      <RailSection index="02" label="Photographs">
        <h2 className="text-26" style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}>
          Final round judges
        </h2>
        <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
          Five business leaders, government officials, and innovators passionate about growing the
          next generation of entrepreneurs and changemakers who will solve issues in their
          communities and beyond.
        </p>
        <ul className="mt-s5 grid grid-cols-1 gap-s5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
          {finalJudges.map((judge) => (
            <JudgePlate key={judge.name} judge={judge} />
          ))}
        </ul>

        <h2 className="mt-s7 text-26" style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}>
          Preliminary round judges
        </h2>
        <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
          Six high school judges experienced in business competitions and running their own
          companies excited to help students like themselves grow in both entrepreneurial thinking
          and public speaking.
        </p>
        <ul className="mt-s5 grid grid-cols-1 gap-s5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
          {prelimJudges.map((judge) => (
            <JudgePlate key={judge.name} judge={judge} />
          ))}
        </ul>

        <h2 className="mt-s7 text-26" style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}>
          The two days
        </h2>
        <div className="mt-s5 grid grid-cols-1 gap-s5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
          {photographs.map((photo, index) => (
            <Plate
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              ratio="3:2"
              caption={photo.caption}
              index={`${String(index + 1).padStart(2, "0")} / ${photographs.length}`}
              sizes="(min-width: 900px) 32vw, (min-width: 600px) 47vw, 100vw"
            />
          ))}
        </div>
      </RailSection>

      <RailSection index="03" label="Placed teams">
        <ol className="border-t border-rule">
          {placedTeams.map((team, index) => (
            <li key={team.product} className="border-b border-rule py-s5">
              <div className="flex flex-col gap-s3 min-[900px]:flex-row min-[900px]:gap-s5">
                <p className="shrink-0 font-mono text-12 font-medium tracking-[0.08em] text-ink-muted min-[900px]:w-s9">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="min-w-0 flex-1">
                  <h2 className="text-26" style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}>
                    {team.product}
                  </h2>
                  <p className="mt-s3 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                    {team.place} place · {team.prize} · {team.team}
                  </p>
                  <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
                    {team.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </RailSection>
    </>
  );
}
