import Ledger from '@/components/ui/Ledger';
import PageMasthead from '@/components/ui/PageMasthead';
import Plate from '@/components/ui/Plate';
import RailSection from '@/components/ui/RailSection';
import Roster from '@/components/ui/Roster';
import SplitBrief from '@/components/ui/SplitBrief';

interface Person {
  name: string;
  role: string;
  /** Everyone whose role is the group label "Leadership Team" shares one line.
   *  That is a role descriptor, not placeholder copy. */
  description: string;
  /** Only part of the roster has a portrait on file; Roster tiles the initials
   *  for the rest. */
  image?: string;
}

interface TeamGroup {
  label: string;
  members: Person[];
}

interface PressLink {
  text: string;
  url: string;
}

interface PressItem {
  id: string;
  title: string;
  description: string;
  links: PressLink[];
  images: string[];
  videoEmbedUrl?: string;
}

// ── People ────────────────────────────────────────────────────────────────────

const PEOPLE = {
  coFounders2026: [
    {
      image: "/team/Allen.png",
      name: "Allen Xu",
      role: "Co-Founder",
      description: "Allen is a junior at Naperville North HS interested in social innovation and finance. A three-time international finalist in entrepreneurship competitions like the Conrad Challenge & Blue Ocean Competition, and grand winner of the 2025 Harvard International Economics Essay Competition, he hopes to use what he has learned to help younger students turn imagination into innovation. As a kid, Allen spent winters watching Shark Tank and summers running lemonade stands in his cul-de-sac. After discovering that 90% of K–8 schools in Naperville do not offer business classes, he co-founded BizBuzz with Aarav—alongside other EdTech platforms—to help students like him find their ideas and the courage to share them."
    },
    {
      image: "/team/Aarav.png",
      name: "Aarav Khullar",
      role: "Co-Founder",
      description: "Aarav is a junior at Naperville North HS with a passion for business and fostering youth entrepreneurship. Growing up watching Shark Tank with his dad, he always dreamed of starting a high-quality business but never had any opportunities or support to do so. Seeing this same disparity affect hundreds of other young students in his community, he co-founded BizBuzz with one of his best friends, Allen, to give elementary & middle schoolers the kind of opportunity he never had. Now, as a startup founder himself, internationally awarded by the Walt Disney Company for his leadership, and named a Top 100 Emerging Innovator of 2025, Aarav hopes to translate the skills he's learned to empower the youth."
    },
    {
      image: "/team/Taksh.png",
      name: "Taksh Taware",
      role: "President",
      description: "Taksh was an Executive Director of BizBuzz, where he has helped grow the program and raise thousands of dollars to expand opportunities for young entrepreneurs. He is the founder of Venture Lab and Demo Day, two of BizBuzz's most impactful programs that give students real hands-on experience building and pitching their ideas. A passionate leader, he was a key driver behind BizBuzz in 2025, focusing on building a strong, impactful community. Taksh is also an Illinois DECA State Champion and a Physics State Champion, showcasing both business and analytical excellence. Outside the classroom, he plays soccer and values teamwork and discipline. He is currently conducting research at UIC, continuing to explore innovation and problem-solving at a higher level."
    },
  ],

  leadershipTeam2026: [
    {
      image: "/team/Lakhi.jpeg",
      name: "Lakhi Thotakura",
      role: "Chief Operating Officer",
      description: "Lakhi keeps BizBuzz running behind the scenes. As COO, she coordinates logistics across camps, sessions, and events, making sure everything from scheduling to execution actually comes together. She brings a sharp eye for organization and a genuine passion for making youth entrepreneurship programs as impactful as possible."
    },
    {
      image: "/team/Elena_clean.png",
      name: "Elena Kang Chou",
      role: "Chief Marketing Officer",
      description: "Elena leads BizBuzz's brand and outreach efforts, shaping how the program is seen and heard by students, families, and the broader community. She has a knack for turning big ideas into compelling stories, and her work across social media and marketing has helped BizBuzz reach more young entrepreneurs every year."
    },
    {
      image: "/team/Abby.jpeg",
      name: "Abby May",
      role: "Chief Financial Officer",
      description: "Abby manages the financial side of BizBuzz, overseeing budgeting and resource allocation to keep programs sustainable and growing. She is passionate about financial literacy and believes that understanding money is one of the most important skills a young entrepreneur can have."
    },
    {
      image: "/team/Amar_clean.png",
      name: "Amar Goyal",
      role: "Chief Technology Officer",
      description: "Amar is a student developer with strong skills in software engineering and development. On his FRC robotics team's software subteam, he helped engineer the software powering the robot's shooter mechanism, work that contributed to the team earning a spot at the 2026 FRC Championship. At BizBuzz, he leads the technical vision, architecting and maintaining the platforms that power every camp, session, and demo day experience. Amar believes great technology should be invisible and the ideas it enables should speak for themselves."
    },
    {
      image: "/team/Elizabeth.jpeg",
      name: "Elizabeth Gao",
      role: "Executive Director",
      description: "Elizabeth helps drive the overall direction of BizBuzz as Executive Director, working across teams to make sure programs are well-coordinated and student-focused. She is deeply committed to expanding access to entrepreneurship education and plays a key role in keeping BizBuzz growing year over year."
    },
  ],

  leadershipTeam: [
    {
      image: "/team/Eddy.png",
      name: "Eddy Wang",
      role: "Vice President",
      description: "Eddy is a dedicated leader with a passion for entrepreneurship and youth education. With exceptional organizational skills, he coordinates BizBuzz initiatives to reach students across Naperville, creating meaningful learning opportunities and inspiring future business leaders."
    },
    {
      name: "Steven He",
      role: "Vice President",
      description: "Steven combines his engineering background with entrepreneurial vision to mentor young innovators. His creative approach to problem-solving and project-based learning helps students develop practical skills while exploring their own business ideas and building confidence through hands-on experience."
    },
    {
      image: "/team/Taksh.png",
      name: "Taksh Taware",
      role: "2025 Executive Director",
      description: "Taksh brings fresh perspectives and leadership experience to the BizBuzz team. Having successfully raised funding for his own ventures, he mentors students through the entrepreneurial process from ideation to execution, helping them transform creative concepts into viable business opportunities with real-world impact."
    },
    {
      name: "Arnav Sharma",
      role: "Executive Director & CTO",
      description: "Arnav leverages his expertise in technology and data science to create innovative educational platforms for young entrepreneurs. His technical knowledge and creative problem-solving abilities help streamline BizBuzz operations and develop digital resources that enhance the learning experience for students exploring business concepts."
    },
    {
      name: "Ethan Brock",
      role: "Chief Technology Officer",
      description: "Ethan specializes in developing technical solutions that make entrepreneurship education accessible and engaging. His innovative approach to educational technology helps BizBuzz create interactive learning experiences for students."
    },
    {
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
      image: "/team/Lakhi.jpeg",
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
      image: "/team/Elizabeth.jpeg",
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

// Instructors and the youth leadership team each carry one title for the whole
// group, so it sits here rather than repeated across sixteen entries.
const teamGroups: TeamGroup[] = [
  { label: "Co-founders & president", members: PEOPLE.coFounders2026 },
  { label: "Leadership team, 2026", members: PEOPLE.leadershipTeam2026 },
  { label: "Leadership team, 2025", members: PEOPLE.leadershipTeam },
  {
    label: "Instructors",
    members: PEOPLE.instructors.map((person) => ({ ...person, role: "Instructor" })),
  },
  {
    label: "Youth leadership team",
    members: PEOPLE.youthLeadership.map((person) => ({ ...person, role: "Youth Leadership" })),
  },
];

// ── Mission ───────────────────────────────────────────────────────────────────

const missionOpening = "BizBuzz is founded on the belief that every student deserves to have access to entrepreneurial education that brings their ideas—and their ingenuity—to life. Across the nation, especially in the city of Naperville, youth entrepreneurship programs are inaccessible and inadequate. Business education is rarely prioritized in elementary & middle schools, yet it equips students with much-needed critical thinking and problem-solving skills that last a lifetime. The next generation of innovators and leaders has the capability of sparking monumental change, but far too few of them have a platform to actually do so.";

const missionTurn = "In April 2024, we set out to fix that.";

const missionToday = "From free camps to professional pitch competitions to webinars to workshops, we organize programs that bring together business professionals, government leaders, student entrepreneurs, and families in Naperville & beyond. As a 100% student-run and student-led organization, we offer more than just a talented ensemble of high school instructors. We offer a program that has been tirelessly crafted to optimize student outcomes and promoted to create communal change—entirely for students, by students. And we're just getting started.";

const orgFacts = [
  { label: "Founded", value: "April 2024" },
  { label: "Based", value: "Naperville, Illinois" },
  { label: "Run by", value: "High school students" },
  { label: "Cost to students", value: "Free" },
  { label: "Programs", value: "Camps · Fish Tank · Workshops" },
];

// ── Impact ────────────────────────────────────────────────────────────────────

const impactStats = [
  { label: "Students taught", figure: "1,172", note: "Across camps, competitions, and workshops since 2024" },
  { label: "Schools engaged", figure: "79", note: "Elementary, middle, and high schools across Illinois" },
  { label: "Funding raised", figure: "$15,000+", note: "From 50+ community partners, organizations, and sponsors" },
  { label: "Student staff", figure: "112", note: "High school volunteer staff and instructors" },
];

// Attendance at individual events. These are whole-event headcounts, not a
// decomposition of the figure above, and nothing here is summed.
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

// ── Press ─────────────────────────────────────────────────────────────────────

const press: PressItem[] = [
  {
    id: "nctv17-camp",
    title: "Naperville Channel Television 17 Interview",
    description: "At Camp Session 5 and during the Fish Tank competition, BizBuzz had the honor of welcoming Jesus Cortez and the Naperville Channel Television 17 team to join us. They conducted interviews and helped share our story with the broader community, capturing the passion, creativity, and entrepreneurial spirit that defined this year's camp and competition.",
    links: [
      {
        text: "Naperville North Juniors Hold Youth Entrepreneurship Camp for Students",
        url: "https://www.nctv17.org/news/naperville-north-juniors-hold-youth-entrepreneurship-camp-for-students/"
      }
    ],
    images: [],
    videoEmbedUrl: "https://www.youtube.com/embed/TmrK8-sFFkA?si=me3a8za4ccfFF4Yq",
  },
  {
    id: "daily-herald",
    title: "Daily Herald Interview",
    description: "During the Madison Junior High mxINCedu mentorship program, we had the opportunity to be interviewed by the Daily Herald. We discussed the importance of youth entrepreneurship—especially in Naperville, where over 90% of K–8 students lack access to business education in school.",
    links: [],
    images: ["/about/daily.jpg", "/about/madi.png"],
  },
  {
    id: "nctv17-spotlight-2025",
    title: "Naperville Channel Television 17 Interview",
    description: "Over the summer, BizBuzz joined Jane Wernette with Naperville Community Television 17 and their Spotlight show to talk about our 2025 Summer Entrepreneurship Camp and the second annual Fish Tank contest at Benedictine University. This year, we came back bigger than ever, with more students, more mentors, and an incredible lineup of guest speakers like Shark Tank alum Lindsey Fleischhauer and Mayor Scott Wehrli. What started as a small idea has now grown into one of the largest youth entrepreneurship programs across the country!",
    links: [
      {
        text: "BizBuzz Turns Imagination into Innovation",
        url: "https://www.nctv17.org/spotlight/bizbuzz-turns-imagination-into-innovation/"
      }
    ],
    images: ["/news/nctv-spotlight-2025.jpg"],
  },
  {
    id: "nctv17-students-2024",
    title: "Naperville Channel Television 17 Interview",
    description: "In fall 2024, BizBuzz was invited to interview with Naperville Community Television 17 to share how local news has helped the organization grow. Coverage from NCTV17 has connected BizBuzz with parents looking for opportunities for their students and sponsors looking to support youth entrepreneurship. Through these connections, BizBuzz can better turn imagination into innovation!",
    links: [
      {
        text: "The Students of BizBuzz Were Inspired by NCTV17 to Share Their Story",
        url: "https://www.youtube.com/watch?v=CETzJ9aPp7w"
      }
    ],
    images: ["/news/nctv-students-2024.jpg"],
  },
  {
    id: "welovenaperville-2024",
    title: "We Love Naperville Interview",
    description: "Shortly after the first-ever Fish Tank contest, BizBuzz celebrated the success of its inaugural summer camp in the Chicagoland area and the success of all the young kidpreneurs who participated, including Fish Tank champion Garrett Hauk.",
    links: [
      {
        text: "Inaugural BizBuzz Camp for Kid Entrepreneurs",
        url: "https://welovenaperville.co/article/inaugural-bizbuzz-camp-for-kid-entrepreneurs"
      }
    ],
    images: ["/news/welovenaperville-2024.jpg"],
  },
  {
    id: "kidsmatter-tpi-2025",
    title: "2025 KidsMatter Teen Philanthropy Initiative Grant Winner",
    description: "The Teen Philanthropy Initiative is a national 501(c)(3) nonprofit philanthropy service organization who partners with communities and local tax-exempt organizations to expand existing programs or initiate new projects. In the 2024–2025 application cycle, following an intensive review process and one-hour interview, BizBuzz was awarded a $1,000 grant—the largest amount of funding given to any organization in Naperville.",
    links: [
      {
        text: "Learn More About the Teen Philanthropy Initiative",
        url: "https://www.kidsmatter2us.org/teen-philanthropy-initiative/"
      }
    ],
    images: ["/news/tpi-2025.jpg", "/news/tpi-2025-b.jpg"],
  },
];

// ── Funding ───────────────────────────────────────────────────────────────────

const fundingSummary = [
  { label: "Total Raised", value: "$15,000+", helper: "50+ organizations" },
  { label: "Monetary Funding", value: "$12,062" },
  { label: "In-kind Donations", value: "$3,038" }
];

const supporters = [
  "Andy's Ice Cream", "AT&T", "Alive Center", "Annex Naperville Running Company", "Benedictine University",
  "Best Brains", "Business for Kids", "Category Pirates", "Centennial Beach", "Center for Future Innovators",
  "Chicago Wolves", "College of DuPage", "Conference Planning Resources", "Costco", "D203", "D204",
  "DuPage Children's Business Fair", "DuPage Children's Museum", "Elite Tutoring Place", "Fort Hill",
  "Fresh Thyme", "Gia Mia", "Gourmet Gift Baskets", "Hiren Patel", "Kabat American", "Kendra Scott",
  "Illinois State University", "Kane County Cougars", "Kids Matter", "La Sorella di Francesca", "MOD Pizza",
  "Midwest Badminton", "Nandos", "Naper Nuts & Sweets", "Naperville Children's Business Fair",
  "Naperville Park District", "Naperville Public Libraries", "Nara Rosie", "NCTV17", "Nothing Bundt Cakes", "Potbelly",
  "Potters Place", "Right Choice Dental Care", "River Run Raptors Swim Team", "Samantha Zylstra & Associates", "SteamDream Team",
  "Steeple Run Stingrays Swim Team", "Stillwater Starz Swim Team", "Teen Philanthropy Initiative",
  "White Sox", "Wise Youth"
];

// ── Shared classes ────────────────────────────────────────────────────────────

const H2_STYLE = { fontVariationSettings: "'wdth' 112, 'wght' 650" };
const H3_STYLE = { fontVariationSettings: "'wdth' 105, 'wght' 600" };

const RULED_NAME_LIST_CLASS =
  'grid grid-cols-1 border-t border-rule sm:grid-cols-2 min-[900px]:grid-cols-3';

const RULED_NAME_ITEM_CLASS =
  'border-b border-rule py-s3 pr-s4 font-display text-16 font-medium text-ink';

const MONO_LABEL_CLASS =
  'font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted';

// One press record fills half the 10-column content band; a record holding two
// photographs splits that half again.
const PRESS_PLATE_SIZES = '(min-width: 900px) 480px, calc(100vw - 48px)';
const PRESS_PLATE_PAIR_SIZES = '(min-width: 900px) 232px, calc(50vw - 32px)';

const PRESS_PHOTO_TOTAL = press.reduce((total, item) => total + item.images.length, 0);

function indexLabel(position: number) {
  return String(position).padStart(2, '0');
}

// A running index across every press photograph, so each plate carries its
// position in the section rather than in its own record.
const pressRecords = press.map((item, itemIndex) => {
  const preceding = press
    .slice(0, itemIndex)
    .reduce((total, previous) => total + previous.images.length, 0);

  return {
    ...item,
    plates: item.images.map((src, imageIndex) => ({
      src,
      index: `${indexLabel(preceding + imageIndex + 1)} / ${indexLabel(PRESS_PHOTO_TOTAL)}`,
      alt:
        item.images.length > 1
          ? `${item.title}, photograph ${imageIndex + 1} of ${item.images.length}`
          : item.title,
    })),
  };
});

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        kicker="About"
        title="Who runs BizBuzz"
        standfirst="A student-run nonprofit in Naperville, Illinois. Since April 2024 its high school volunteers have taught 1,172 students from 79 schools through free summer camps, workshops and the Fish Tank pitch competition."
      />

      <RailSection index="01" label="Mission">
        <SplitBrief
          split="7/5"
          facts={
            <dl>
              {orgFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-wrap items-baseline justify-between gap-s2 border-b border-rule py-s3 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <dt className={MONO_LABEL_CLASS}>{fact.label}</dt>
                  <dd className="font-display text-16 font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          }
        >
          <h2 className="text-26 min-[900px]:text-34" style={H2_STYLE}>
            Our mission
          </h2>
          <p className="mt-s5">{missionOpening}</p>
          <p className="mt-s5 text-21 text-ink">{missionTurn}</p>
          <p className="mt-s5">{missionToday}</p>
        </SplitBrief>
      </RailSection>

      <RailSection index="02" label="Impact">
        <h2 className="text-26 min-[900px]:text-34" style={H2_STYLE}>
          Impact at a glance
        </h2>
        <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
          BizBuzz connects students, schools, and sponsors to build a thriving youth
          entrepreneurship community across Chicagoland.
        </p>
        <div className="mt-s5">
          <Ledger items={impactStats} />
        </div>

        <h3 className="mt-s7 text-21 min-[900px]:text-26" style={H3_STYLE}>
          Student participation
        </h3>
        <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
          Breakdown of students who have joined BizBuzz programs.
        </p>
        <ul className="mt-s5 border-t border-rule">
          {programParticipation.map((program) => (
            <li
              key={program.label}
              className="flex flex-wrap items-baseline justify-between gap-x-s5 gap-y-s1 border-b border-rule py-s3"
            >
              <span className="font-display text-16 font-medium text-ink">{program.label}</span>
              <span data-figure="" className="shrink-0 text-16 font-medium text-ink-2">
                {program.total}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="mt-s7 text-21 min-[900px]:text-26" style={H3_STYLE}>
          Schools we serve
        </h3>
        <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
          Representation from elementary, middle, and high schools across the region.
        </p>
        {schoolDirectory.map((group) => (
          <div key={group.title} className="mt-s6">
            <h4 className="text-18 min-[900px]:text-21" style={H3_STYLE}>
              {group.title}
            </h4>
            <ul className={`mt-s3 ${RULED_NAME_LIST_CLASS}`}>
              {group.items.map((school) => (
                <li key={school} className={RULED_NAME_ITEM_CLASS}>
                  {school}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </RailSection>

      <RailSection index="03" label="Team">
        <h2 className="text-26 min-[900px]:text-34" style={H2_STYLE}>
          The team
        </h2>
        <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
          BizBuzz is powered by a dedicated team of student leaders, entrepreneurs, and educators
          committed to fostering the next generation of business innovators.
        </p>
        {teamGroups.map((group) => (
          <section key={group.label} className="mt-s7">
            <h3 className="text-21 min-[900px]:text-26" style={H3_STYLE}>
              {group.label}
            </h3>
            <div className="mt-s4">
              <Roster members={group.members} />
            </div>
            <dl className="mt-s6 border-t border-rule">
              {group.members.map((member) => (
                <div
                  key={member.name}
                  className="grid grid-cols-1 gap-s2 border-b border-rule py-s4 min-[900px]:grid-cols-12 min-[900px]:gap-s5"
                >
                  <dt className="font-display text-16 font-medium text-ink min-[900px]:col-span-3">
                    {member.name}
                  </dt>
                  <dd className="max-w-measure font-prose text-18 text-ink-2 min-[900px]:col-span-9">
                    {member.description}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </RailSection>

      <RailSection index="04" label="Press">
        <h2 className="text-26 min-[900px]:text-34" style={H2_STYLE}>
          In the news
        </h2>
        <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
          Our journey has been featured by local media, highlighting our commitment to fostering
          entrepreneurship in students throughout Naperville and beyond.
        </p>
        <ul className="mt-s6 grid grid-cols-1 gap-s9 min-[900px]:grid-cols-2">
          {pressRecords.map((record) => (
            <li key={record.id}>
              <h3 className="text-21" style={H3_STYLE}>
                {record.title}
              </h3>
              <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
                {record.description}
              </p>
              {record.links.length > 0 && (
                <ul className="mt-s4 flex flex-col gap-s3">
                  {record.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-16 font-medium text-ink underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-120 ease-out hover:decoration-accent focus-visible:decoration-accent"
                      >
                        {link.text}
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {record.plates.length > 0 && (
                <div
                  className={`mt-s5 grid gap-s4 ${
                    record.plates.length > 1 ? 'grid-cols-2' : 'grid-cols-1'
                  }`}
                >
                  {record.plates.map((plate) => (
                    <Plate
                      key={plate.src}
                      src={plate.src}
                      alt={plate.alt}
                      ratio="3:2"
                      index={plate.index}
                      caption={record.title}
                      sizes={
                        record.plates.length > 1 ? PRESS_PLATE_PAIR_SIZES : PRESS_PLATE_SIZES
                      }
                    />
                  ))}
                </div>
              )}
              {/* The one NCTV17 record with no still on file carries the broadcast
                  itself. A video panel is not a photo plate, so it keeps 16:9. */}
              {record.videoEmbedUrl && (
                <figure className="mt-s5">
                  <div className="rounded-none border border-rule bg-paper p-s2">
                    <div className="relative aspect-[16/9] bg-fill-soft">
                      <iframe
                        src={record.videoEmbedUrl}
                        title={record.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-s2 font-mono text-12 font-medium tracking-[0.08em] text-ink-muted">
                    {record.title}
                  </figcaption>
                </figure>
              )}
            </li>
          ))}
        </ul>
      </RailSection>

      <RailSection index="05" label="Support">
        <h2 className="text-26 min-[900px]:text-34" style={H2_STYLE}>
          Community support
        </h2>
        <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
          Financial contributions and in-kind resources empower BizBuzz to stay student-led and
          cost-free.
        </p>
        <dl className="mt-s5 border-t border-rule">
          {fundingSummary.map((item) => (
            <div
              key={item.label}
              className="flex flex-wrap items-baseline justify-between gap-s4 border-b border-rule py-s4"
            >
              <dt className="font-display text-16 font-medium text-ink">
                {item.label}
                {item.helper && <span className={`mt-s1 block ${MONO_LABEL_CLASS}`}>{item.helper}</span>}
              </dt>
              <dd
                data-figure=""
                className="text-26 text-ink"
                style={{ fontVariationSettings: "'wdth' 112, 'wght' 600" }}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-s7 text-21 min-[900px]:text-26" style={H3_STYLE}>
          Partners &amp; sponsors
        </h3>
        <ul className={`mt-s4 ${RULED_NAME_LIST_CLASS}`}>
          {supporters.map((supporter) => (
            <li key={supporter} className={RULED_NAME_ITEM_CLASS}>
              {supporter}
            </li>
          ))}
        </ul>
      </RailSection>
    </>
  );
}
