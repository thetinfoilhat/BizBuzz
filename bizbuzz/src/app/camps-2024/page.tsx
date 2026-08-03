import Button from '@/components/ui/Button';
import Ledger from '@/components/ui/Ledger';
import PageMasthead from '@/components/ui/PageMasthead';
import Plate from '@/components/ui/Plate';
import RailSection from '@/components/ui/RailSection';
import Tag from '@/components/ui/Tag';

// Session data
const sessions = [
  {
    id: "session1",
    title: "Ideation & Innovation",
    date: "June 12th, 2024",
    location: "95th Street Library, Naperville",
    description: "In Session 1, students kicked off our free 2024 Summer Entrepreneurship Camp by exploring the basics of business-minded thinking, learning how to identify and solve real-world problems. After being introduced to concepts like value creation and market fit with 10 instructors, students dove into our Mini Fish Tank activity with $200+ in prizes.",
    speakers: [
      {
        billing: "Featured speaker",
        name: "Kandice Henning",
        role: "CEO of the Alive Center",
        topic: "How to Become a Fearless Entrepreneur",
        bio: "Sharing her journey of creating one of Naperville's largest nonprofit organizations, she inspired students to embrace risk, pursue their passions, and lead through social innovation.",
        image: "/camp_imgs/speakers/kandice_henning.png"
      }
    ],
    images: [
      "/camp_imgs/cards/session1/1.png",
      "/camp_imgs/cards/session1/2.png",
      "/camp_imgs/cards/session1/3.png",
      "/camp_imgs/cards/session1/4.png",
      "/camp_imgs/cards/session1/5.png",
    ]
  },
  {
    id: "session2",
    title: "Unique Value Proposition & Networking",
    date: "June 19th, 2024",
    location: "95th Street Library, Naperville",
    description: "In Session 2, students learned how to craft a unique value proposition for their businesses and practiced their networking skills with 9 instructors. They put their skills to the test in a coffee shop simulation contest, responding to situations & prompts (and some surprises too!) to maximize profits and win $100 in awards.",
    speakers: [
      {
        billing: "Featured speaker",
        name: "Isha Elandassery",
        role: "Founder of Naperville Rising Women in Business",
        topic: "Finding Your Competitive Advantage",
        bio: "Inspired by an activity she did at Indiana University, she taught students to discover their identity through a self-portrait exercise and apply their newfound skills to networking.",
        image: "/camp_imgs/speakers/isha_elandassery.jpg"
      }
    ],
    images: [
      "/camp_imgs/cards/session2/1.png",
      "/camp_imgs/cards/session2/2.jpg",
      "/camp_imgs/cards/session2/3.jpg",
      "/camp_imgs/cards/session2/4.png",
      "/camp_imgs/cards/session2/5.jpg",
    ]
  },
  {
    id: "session3",
    title: "Marketing",
    date: "June 26th, 2024",
    location: "95th Street Library, Naperville",
    description: "In Session 3, students explored marketing, branding, and advertising through activities like the 'Guess the Brand' game and a flyer design challenge with $140 in prizes. With the Fish Tank competition just weeks away, students refined their business identities with 11 instructors and prepared to share them with the world.",
    speakers: [
      {
        billing: "Featured speaker",
        name: "Mary Gibson",
        role: "Naperville Park District President",
        topic: "Pitch, Polish, Promote: Branding Lessons from the Ballot",
        bio: "After building a personal brand during her Park District election campaign, she taught students how to apply those strategies to their own businesses and innovations.",
        image: "/camp_imgs/speakers/mary_gibson.jpg"
      }
    ],
    images: [
      "/camp_imgs/cards/session3/1.jpg",
      "/camp_imgs/cards/session3/2.jpg",
      "/camp_imgs/cards/session3/3.jpg",
      "/camp_imgs/cards/session3/4.jpg",
      "/camp_imgs/cards/session3/5.jpg",
    ]
  },
  {
    id: "session4",
    title: "Public Speaking",
    date: "July 3rd, 2024",
    location: "95th Street Library, Naperville",
    description: "In Session 4, students explored the art of sales and pitching. Guided by 14 instructors, they practiced their public speaking skills and competed in an interactive, hands-on pitch contest with over $170 in prizes. With this new knowledge, students began developing their presentations and pitches in preparation for Fish Tank.",
    speakers: [
      {
        billing: "Featured speaker",
        name: "Athena Chen",
        role: "Founder of the Naperville Children's Business Fair",
        topic: "Confident Kidpreneurs: Believe, Build, and Be Bold",
        bio: "As someone who ran an Etsy shop with over $11K in revenue and helped hundreds of local students pitch their own businesses, she spoke to students about taking risks despite doubt and embracing the confidence of a kidpreneur who knows they can do it all.",
        image: "/camp_imgs/speakers/athena_chen.png"
      }
    ],
    images: [
      "/camp_imgs/cards/session4/1.jpg",
      "/camp_imgs/cards/session4/2.jpg",
      "/camp_imgs/cards/session4/3.png",
      "/camp_imgs/cards/session4/4.jpg",
      "/camp_imgs/cards/session4/5.jpg",
    ]
  },
  {
    id: "session5",
    title: "Finance",
    date: "July 10th, 2024",
    location: "Nichols Library, Naperville",
    description: "In Session 5, students learned the basics of personal and business finance from 16 instructors. They then put their skills to the test in a dream vacation budgeting game, planning their ideal trip and pitching it for a chance to win over $330 in prizes. Students also continued refining their Fish Tank pitches, now incorporating key financial details into their business plans.",
    speakers: [
      {
        billing: "Featured speaker",
        name: "Scott Wehrli",
        role: "Mayor of Naperville",
        topic: "From Ideas to Impact: How Innovation Builds Better Communities",
        bio: "Mayor Wehrli shared how local entrepreneurs are innovating to solve real community problems in Naperville and beyond, encouraging students to use business as a tool for civic impact and leadership development.",
        image: "/camp_imgs/speakers/scott_wehrli.png"
      },
      {
        billing: "Guest speaker",
        name: "Eddie Yoon",
        role: "Co-Creator of Category Pirates",
        topic: "Finance is Freedom",
        bio: "He challenged students to rethink their relationship with money, describing it as powerful dynamite that must be used wisely. He urged them to create rather than compete, emphasizing that entrepreneurship—not just education—is the path to true freedom.",
        image: "/camp_imgs/speakers/eddie_yoon.jpg"
      }
    ],
    images: [
      "/camp_imgs/cards/session5/1.jpg",
      "/camp_imgs/cards/session5/2.jpg",
      "/camp_imgs/cards/session5/3.jpg",
      "/camp_imgs/cards/session5/4.jpg",
      "/camp_imgs/cards/session5/5.jpg",
      "/camp_imgs/cards/session5/6.jpg",
      "/camp_imgs/cards/session5/7.jpg",
    ]
  },
  {
    id: "session6",
    title: "Pitching",
    date: "July 17th, 2024",
    location: "95th Street Library, Naperville",
    description: "In Session 6, the final session before Fish Tank, students participated in a business building workshop to finalize their pitch decks and practice rehearsing their scripts. Joining them for a special surprise were our preliminary judges—Athena Chen, Soohyun Cho, Isabel Yu, Nathan Mendoza, and Olivia Fisz—who offered exciting feedback.",
    speakers: [
      {
        billing: "Featured speaker",
        name: "Sean Riley",
        role: "CEO of Dude Wipes",
        topic: "Dude, Start Now: Why Entrepreneurship Can't Wait",
        bio: "Sean spoke about the power of starting early in entrepreneurship and embracing the journey. He reminded students that by taking the leap now, they are already on the right path in one of the world's most fun and rewarding career choices.",
        image: "/camp_imgs/speakers/sean_riley.png"
      }
    ],
    images: [
      "/camp_imgs/cards/session6/1.jpg",
      "/camp_imgs/cards/session6/2.png",
      "/camp_imgs/cards/session6/3.png",
      "/camp_imgs/cards/session6/4.png",
      "/camp_imgs/cards/session6/5.png",
    ]
  }
];

// Camp-wide photographs that belong to no single session.
const campWidePhotos = [
  { src: "/camp_imgs/landing/left.jpg", alt: "Students collaborating at BizBuzz Camp 2024", caption: "BizBuzz Camp 2024 · Naperville" },
  { src: "/camp_imgs/landing/center.jpg", alt: "Student presentation at BizBuzz Camp 2024", caption: "BizBuzz Camp 2024 · Naperville" },
  { src: "/camp_imgs/landing/right.jpg", alt: "Workshop session at BizBuzz Camp 2024", caption: "BizBuzz Camp 2024 · Naperville" },
];

// One flat, indexed sequence — a contact sheet of the founding season.
const photographs = [
  ...campWidePhotos,
  ...sessions.flatMap((session, index) =>
    session.images.map((src) => ({
      src,
      alt: `${session.title} session at ${session.location}`,
      caption: `Session ${index + 1}, ${session.title} · ${session.location}`,
    }))
  ),
];

// ── Session record ─────────────────────────────────────────────

interface SessionRowProps {
  session: typeof sessions[0];
  index: number;
}

const SessionRow = ({ session, index }: SessionRowProps) => (
  <li id={session.id} className="border-b border-rule py-s7">
    <div className="flex flex-col gap-s3 min-[900px]:flex-row min-[900px]:gap-s5">
      <p className="shrink-0 font-mono text-12 font-medium tracking-[0.08em] text-ink-muted min-[900px]:w-s9">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div className="min-w-0 flex-1">
        <h2 className="text-26" style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}>
          {session.title}
        </h2>
        <p className="mt-s3 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
          {session.date} · {session.location}
        </p>
        <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">{session.description}</p>
        <ul className="mt-s7 flex flex-col gap-s5">
          {session.speakers.map((speaker) => (
            <li key={speaker.name} className="border border-rule bg-panel p-s5">
              <div className="grid grid-cols-1 gap-s5 min-[600px]:grid-cols-4">
                <Plate
                  src={speaker.image}
                  alt={speaker.name}
                  ratio="4:5"
                  caption={`${speaker.billing} · ${speaker.role}`}
                  sizes="(min-width: 600px) 25vw, 100vw"
                />
                <div className="min-[600px]:col-span-3">
                  <p className="font-display text-21 font-medium text-ink">{speaker.name}</p>
                  <p className="mt-s3 max-w-measure font-prose text-18 italic text-ink">
                    &ldquo;{speaker.topic}&rdquo;
                  </p>
                  <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">{speaker.bio}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </li>
);

// ── Page ───────────────────────────────────────────────────────

export default function CampPage() {
  return (
    <div>
      <PageMasthead
        kicker="Founding season"
        title="Summer Camp 2024"
        standfirst="Six free weekly sessions took 3rd–8th grade students from idea generation to a pitch at the Fish Tank contest, across two Naperville libraries."
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

      <RailSection index="01" label="The six sessions">
        <p className="max-w-measure font-prose text-18 text-ink-2">
          Each camp session built on the one before it, creating a comprehensive entrepreneurial
          journey that took students from idea generation to pitching at the Fish Tank contest.
        </p>
        <ol className="mt-s7 border-t border-rule">
          {sessions.map((session, index) => (
            <SessionRow key={session.id} session={session} index={index} />
          ))}
        </ol>
      </RailSection>

      <RailSection index="02" label="The record">
        <Ledger
          items={[
            { label: "Camp weeks", figure: "6", note: "June 12 – July 17, 2024" },
            { label: "Guest speakers", figure: "7" },
            { label: "Students taught", figure: "110" },
          ]}
        />
        <div className="mt-s7">
          <Button variant="secondary" href="https://tinyurl.com/bizbuzz2025">
            Register Now →
          </Button>
        </div>
      </RailSection>

      <RailSection index="03" label="Photographs">
        <div className="grid grid-cols-1 gap-s5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
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
    </div>
  );
}
