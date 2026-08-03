import Ledger from '@/components/ui/Ledger';
import PageMasthead from '@/components/ui/PageMasthead';
import Plate from '@/components/ui/Plate';
import RailSection from '@/components/ui/RailSection';
import Tag from '@/components/ui/Tag';

interface Speaker {
  name: string;
  role: string;
  topic: string;
  bio: string;
}

interface Session {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  speakers: Speaker[];
  images: string[];
}

// The 2025 season, as it ran. Seven sessions, one venue.
const sessions: Session[] = [
  {
    id: "session1",
    title: "Networking & Ideation",
    date: "June 6th, 2025",
    location: "95th Street Library, Naperville",
    description: "In Session 1, kidpreneurs at our 2025 Summer Entrepreneurship Camp broke the ice with new friends and high school instructors through a high-stakes Networking Bingo game. They then learned to identify and brainstorm real-world problems in an interactive \"Bug-Me List\" and ideation session. The day concluded with a Mini Fish Tank challenge, where students pitched creative product mashups for Jolly Ranchers and $135 in Andy's Ice Cream treat cards.",
    speakers: [],
    images: [
      "/camp_imgs/2025/session1/session1a.jpg",
      "/camp_imgs/2025/session1/session1b.jpg",
      "/camp_imgs/2025/session1/session1c.jpg",
      "/camp_imgs/2025/session1/session1d.jpg",
      "/camp_imgs/2025/session1/session1e.jpg",
    ],
  },
  {
    id: "session2",
    title: "Lean Canvas & Value Proposition",
    date: "June 13th, 2025",
    location: "95th Street Library, Naperville",
    description: "In Session 2, kidpreneurs kicked things off with our Inventor Fusion game, combining random objects to invent new products and test their teamwork. They then completed a Lean Canvas Model to refine their business ideas from the previous session. Building on these ideas, they competed in our Pokémon Card Investor Report challenge, where students pitched 30-second summaries of their ideas, advanced through group voting rounds, and competed for Chicago Wolves and White Sox game tickets.",
    speakers: [],
    images: [
      "/camp_imgs/2025/session2/session2a.jpg",
      "/camp_imgs/2025/session2/session2b.jpg",
      "/camp_imgs/2025/session2/session2c.jpg",
      "/camp_imgs/2025/session2/session2d.jpg",
      "/camp_imgs/2025/session2/session2e.jpg",
    ],
  },
  {
    id: "session3",
    title: "Marketing & Branding",
    date: "June 20th, 2025",
    location: "95th Street Library, Naperville",
    description: "In Session 3, students learned how to market their business ideas by designing logos, slogans, product sketches, and fliers that built a cohesive brand. After an icebreaker where they pitched creative uses for random objects, each room worked on Canva to build a group logo and flier, deciding on colors, fonts, and layouts together. Students then created their own marketing portfolios and competed in a full-class flier design bracket, with top teams winning Illinois State University football and basketball game tickets.",
    speakers: [
      {
        name: "Kandice Henning",
        role: "CEO of the Alive Center",
        topic: "Brand Like a Boss",
        bio: "Sharing how strategic marketing grew the ALIVE Center into three Naperville locations and counting, she showed students that powerful branding goes beyond visuals, using storytelling to build genuine connection.",
      },
    ],
    images: [
      "/camp_imgs/2025/session3/session3a.jpg",
      "/camp_imgs/2025/session3/session3b.jpg",
      "/camp_imgs/2025/session3/session3c.jpg",
      "/camp_imgs/2025/session3/session3d.jpg",
      "/camp_imgs/2025/session3/session3e.jpg",
    ],
  },
  {
    id: "session4",
    title: "Prototyping & Product Creation",
    date: "June 27th, 2025",
    location: "95th Street Library, Naperville",
    description: "In Session 4, students brought their Fish Tank ideas to life through hands-on creation. After the \"Personal Brand Soul Train\" icebreaker, they split into three creative tracks—Tinkercad for 3D modeling, Google Sites for website design, and detailed sketching—to build prototypes, online product pages, and prototype blueprints with high school specialists.",
    speakers: [
      {
        name: "Lindsey Fleischhauer",
        role: "Co-Founder at Totes Babies",
        topic: "Totes Babies, Totally Brilliant",
        bio: "Walking students through the journey of refining her car seat carrier for parents on the go, she shared how Totes Babies grew from a rough prototype to a Shark Tank success story, eventually pitching it in Las Vegas and securing a deal on Season 12, Episode 17.",
      },
    ],
    images: [
      "/camp_imgs/2025/session4/session4a.jpg",
      "/camp_imgs/2025/session4/session4b.jpg",
      "/camp_imgs/2025/session4/session4c.jpg",
      "/camp_imgs/2025/session4/session4d.jpg",
      "/camp_imgs/2025/session4/session4e.jpg",
    ],
  },
  {
    id: "session5",
    title: "Finance & Budgeting",
    date: "July 11th, 2025",
    location: "95th Street Library, Naperville",
    description: "In Session 5, students got \"hired\" by Invisibelle, a startup selling invisible products, pitching their wildest talents to instructors in a hilarious Founder's Got Talent challenge. They then learned how to think like entrepreneurs by budgeting a $3,500 dream vacation, making surprise spending choices and pitching their trips to classmates. The top planners walked away with Kane County Cougar and Chicago Fire game tickets, while everyone else scored sweet Jolly Ranchers for a job well done.",
    speakers: [
      {
        name: "Mary Gibson",
        role: "Naperville Park District President",
        topic: "Campaigning Your Company",
        bio: "As the city's Park District President, she connected big data, emotion, and politics, showing students how running a campaign is just like marketing a business—where authentic, consistent storytelling turns voters and customers into true supporters!",
      },
    ],
    images: [
      "/camp_imgs/2025/session5/session5a.jpg",
      "/camp_imgs/2025/session5/session5b.jpg",
      "/camp_imgs/2025/session5/session5c.jpg",
      "/camp_imgs/2025/session5/session5d.jpg",
      "/camp_imgs/2025/session5/session5e.jpg",
    ],
  },
  {
    id: "session6",
    title: "Business Planning & Leadership",
    date: "July 18th, 2025",
    location: "95th Street Library, Naperville",
    description: "In Session 6, students finalized their Fish Tank ideas, outlining full business plans from problem to profit. After hearing advice from Mayor Scott Wehrli and City Finance Director Raymond Munch, they spent the afternoon polishing slides, scripts, and prototypes—and celebrating their progress with prizes like Keller's Farmstead passes, a DuPage Children's Museum family pass, a DuPage Forest Preserve gift card, and a Gourmet Gift Baskets gift card.",
    speakers: [
      {
        name: "Scott Wehrli",
        role: "Mayor of Naperville",
        topic: "Leading the Local Way",
        bio: "Sharing stories from his journey in public service and business, he inspired students to see leadership as service to their community. He encouraged them to stay curious, take initiative, and use entrepreneurship to make a lasting local impact.",
      },
      {
        name: "Raymond Munch",
        role: "City Director of Finance",
        topic: "Finance Fuels Innovation",
        bio: "He showed students how budgeting, planning, and smart financial strategy power both cities and startups alike. He connected real-world finance to their Fish Tank projects, emphasizing how numbers can tell the story behind every great idea.",
      },
    ],
    images: [
      "/camp_imgs/2025/session6/session6a.jpg",
      "/camp_imgs/2025/session6/session6b.jpg",
      "/camp_imgs/2025/session6/session6c.jpg",
      "/camp_imgs/2025/session6/session6d.jpg",
      "/camp_imgs/2025/session6/session6e.jpg",
    ],
  },
  {
    id: "session7",
    title: "Pitch Rehearsal & Preparation",
    date: "July 25th, 2025",
    location: "95th Street Library, Naperville",
    description: "Biz, Buzz, Build! Students spent the day fully immersed in their Fish Tank projects, perfecting business plans, building prototypes, and running mock pitches with instructors. The session focused entirely on preparation, teamwork, and refining every detail to get ready for the big day.",
    speakers: [],
    images: [
      "/camp_imgs/2025/session7/session7a.jpg",
      "/camp_imgs/2025/session7/session7b.jpg",
      "/camp_imgs/2025/session7/session7c.jpg",
      "/camp_imgs/2025/session7/session7d.jpg",
      "/camp_imgs/2025/session7/session7e.JPG",
    ],
  },
];

// Verified against this page and /about: 7 sessions, 5 guest speakers, 120 students.
const ledgerItems = [
  { label: "Sessions", figure: "7", note: "June 6 – July 25, 2025" },
  { label: "Guest speakers", figure: "5", note: "Sessions 3 – 6" },
  { label: "Students", figure: "120" },
];

// One flat contact sheet for the whole season, so every plate carries a running
// index against the same total.
const photos = sessions.flatMap((session, sessionIndex) =>
  session.images.map((src, imageIndex) => ({
    src,
    alt: `${session.title}, photo ${imageIndex + 1}`,
    caption: `Session ${sessionIndex + 1}, ${session.title} · ${session.date}`,
  }))
);

// Three plates across the 10-column content band from 900px up.
const PLATE_SIZES = '(min-width: 900px) 300px, (min-width: 640px) 46vw, calc(100vw - 48px)';

function indexLabel(position: number) {
  return String(position + 1).padStart(2, '0');
}

export default function Camps2025Page() {
  return (
    <>
      <PageMasthead
        kicker="Summer Entrepreneurship Camp"
        title="BizBuzz Camp 2025"
        standfirst="Seven sessions at the 95th Street Library in Naperville, from June 6 to July 25, 2025 — ideation through pitch rehearsal, with five guest speakers along the way."
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

      <RailSection index="01" label="The season">
        <Ledger items={ledgerItems} />
      </RailSection>

      <RailSection index="02" label="Sessions">
        <ol className="border-t border-rule">
          {sessions.map((session, sessionIndex) => (
            <li
              key={session.id}
              id={session.id}
              className="grid scroll-mt-s9 grid-cols-1 gap-s4 border-b border-rule py-s6 min-[900px]:grid-cols-12"
            >
              <p className="font-mono text-12 font-medium tracking-[0.08em] text-ink-muted min-[900px]:col-span-1">
                {indexLabel(sessionIndex)}
              </p>
              <div className="min-[900px]:col-span-11">
                <h2 className="text-26" style={{ fontVariationSettings: "'wdth' 105, 'wght' 600" }}>
                  {session.title}
                </h2>
                <p className="mt-s2 flex flex-wrap gap-x-s4 gap-y-s1 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  <span>{session.date}</span>
                  <span>{session.location}</span>
                </p>
                <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
                  {session.description}
                </p>
                {session.speakers.length > 0 && (
                  <div className="mt-s7">
                    <p className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                      {session.speakers.length > 1 ? 'Guest speakers' : 'Guest speaker'}
                    </p>
                    <ul className="mt-s3 border-t border-rule">
                      {session.speakers.map((speaker) => (
                        <li key={speaker.name} className="border-b border-rule py-s4">
                          <p className="font-display text-16 font-medium text-ink">{speaker.name}</p>
                          <p className="mt-s1 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                            {speaker.role}
                          </p>
                          <p className="mt-s3 max-w-measure font-prose text-21 italic text-ink">
                            “{speaker.topic}”
                          </p>
                          <p className="mt-s3 max-w-measure font-prose text-18 text-ink-2">
                            {speaker.bio}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </RailSection>

      <RailSection index="03" label="Photographs">
        <div className="grid grid-cols-1 gap-s5 sm:grid-cols-2 min-[900px]:grid-cols-3">
          {photos.map((photo, photoIndex) => (
            <Plate
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              ratio="3:2"
              index={`${indexLabel(photoIndex)} / ${photos.length}`}
              caption={photo.caption}
              sizes={PLATE_SIZES}
            />
          ))}
        </div>
      </RailSection>
    </>
  );
}
