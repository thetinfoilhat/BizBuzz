"use client";

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import InvertedBand from '@/components/ui/InvertedBand';
import PageMasthead from '@/components/ui/PageMasthead';
import Plate from '@/components/ui/Plate';
import RailSection from '@/components/ui/RailSection';
import SplitBrief from '@/components/ui/SplitBrief';
import Tag from '@/components/ui/Tag';

interface Speaker {
  name: string;
  role: string;
  topic: string;
  bio: string;
  image: string;
}

interface CampSession {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  speaker: Speaker | null;
  /** Photographs filed under /camp_imgs/2026/. Empty until a session's shoot is filed. */
  images: string[];
}

// ── KidPreneur Camp Sessions ──────────────────────────────────────────────────

const kidpreneurSessions: CampSession[] = [
  {
    id: "kp-session1",
    title: "Ideation",
    date: "June 5th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 1, our kidpreneurs kicked things off by connecting with new friends and high school instructors through a high-energy Networking Bingo game. They then explored real-world problem solving with an interactive \"Bug-Me List\" and ideation session, learning how to spot everyday challenges and turn them into business ideas. Throughout the session, they also began learning the importance of using money wisely by earning BizBucks, which they can redeem for a variety of rewards.",
    speaker: null,
    images: [
      "/camp_imgs/2026/session1kp/session1kpa.JPG",
      "/camp_imgs/2026/session1kp/session1kpb.JPG",
      "/camp_imgs/2026/session1kp/session1kpc.JPG",
      "/camp_imgs/2026/session1kp/session1kpd.JPG",
      "/camp_imgs/2026/session1kp/session1kpe.JPG",
    ],
  },
  {
    id: "kp-session2",
    title: "Finance",
    date: "June 12th, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 2, students took part in an interactive Finance Workshop at Nichols Library, starting with a \"Price is Right\" icebreaker to learn cost, price, and profit. They explored what makes a strong pitch and how to develop ideas, then applied these skills through activities like a Startup Auction, Shark Tank deal decisions, Business Disaster scenarios, and the $100 Challenge. Throughout the session, students practiced teamwork, decision-making, and learned to use money wisely by using opportunities.",
    speaker: {
      name: "Isha Elandassery",
      role: "Entrepreneur & Finance Educator",
      topic: "Money Moves & Smart Decisions",
      bio: "Bringing finance to life through real-world scenarios, she showed students how smart money decisions fuel entrepreneurship — from startup auctions to Shark Tank-style deal analysis, she made every dollar a lesson in strategy.",
      image: "/camp_imgs/speakers/isha_elandassery.jpg"
    },
    images: [
      "/camp_imgs/2026/session2kp/session2kpa.jpg",
      "/camp_imgs/2026/session2kp/session2kpb.jpg",
      "/camp_imgs/2026/session2kp/session2kpc.jpg",
      "/camp_imgs/2026/session2kp/session2kpd.jpg",
      "/camp_imgs/2026/session2kp/session2kpe.jpg",
      "/camp_imgs/2026/session2kp/session2kpf.jpg",
      "/camp_imgs/2026/session2kp/session2kpg.jpg",
    ],
  },
  {
    id: "kp-session3",
    title: "Marketing & Prototyping",
    date: "June 19th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 3, students dove into the fundamentals of marketing and product design. They learned how businesses attract customers, build a brand, and communicate value effectively. Through hands-on activities, students created their own brand identity and began designing simple prototypes of their ideas. By testing and refining their concepts, they understood how strong marketing and thoughtful design work together to bring ideas to life and make products stand out.",
    speaker: null,
    images: [
      "/camp_imgs/2026/session3kp/session3kpa.jpg",
      "/camp_imgs/2026/session3kp/session3kpb.jpg",
      "/camp_imgs/2026/session3kp/session3kpc.jpg",
      "/camp_imgs/2026/session3kp/session3kpd.jpg",
      "/camp_imgs/2026/session3kp/session3kpe.jpg",
      "/camp_imgs/2026/session3kp/session3kpf.jpg",
    ],
  },
  {
    id: "kp-session4",
    title: "Problem Solving & Business Models",
    date: "June 26th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 4, students focused on solving problems and turning ideas into structured business models. They learned how successful companies identify customer needs, create value, and generate revenue. Through interactive exercises, students broke down their ideas into key components such as target audience, pricing, and operations. By the end of the session, they had a clearer understanding of how businesses function and how to build a sustainable and scalable idea.",
    speaker: null,
    images: [
      "/camp_imgs/2026/session4kp/session4kpa.jpg",
      "/camp_imgs/2026/session4kp/session4kpb.jpg",
      "/camp_imgs/2026/session4kp/session4kpc.jpg",
      "/camp_imgs/2026/session4kp/session4kpd.jpg",
      "/camp_imgs/2026/session4kp/session4kpe.jpg",
      "/camp_imgs/2026/session4kp/session4kpf.jpg",
    ],
  },
  {
    id: "kp-session5",
    title: "Presentational & Speaking Skills",
    date: "July 3rd, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 5, students developed strong communication and presentation skills essential for entrepreneurship. They learned how to confidently speak in front of an audience, structure a compelling pitch, and clearly explain their ideas. Through practice activities and feedback, students refined their tone, body language, and storytelling abilities. This session prepared them to present with confidence, helping them effectively share their ideas and persuade others.",
    speaker: {
      name: "Scott Wehrli",
      role: "Mayor of Naperville",
      topic: "Leading the Local Way",
      bio: "Sharing stories from his journey in public service and business, he inspired students to see leadership as service to their community. He encouraged them to stay curious, take initiative, and use entrepreneurship to make a lasting local impact.",
      image: "/camp_imgs/speakers/scottwehrli.jpg"
    },
    images: [
      "/camp_imgs/2026/session5kp/session5kpa.jpg",
      "/camp_imgs/2026/session5kp/session5kpb.jpg",
      "/camp_imgs/2026/session5kp/session5kpc.jpg",
      "/camp_imgs/2026/session5kp/session5kpd.jpg",
      "/camp_imgs/2026/session5kp/session5kpe.jpg",
      "/camp_imgs/2026/session5kp/session5kpf.jpg",
    ],
  },
  {
    id: "kp-session6",
    title: "Mock Pitch",
    date: "July 10th, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 6, students brought everything together in a Mock Pitch experience. They presented their business ideas in a Fish Tank-style setting, applying the skills learned throughout the program. Students received feedback from instructors and peers, allowing them to improve their ideas and presentation style. This session built confidence, reinforced key concepts, and prepared them for the final competition by simulating a real entrepreneurial pitching environment.",
    speaker: null,
    images: [],
  },
];

// ── VentureLab Sessions ───────────────────────────────────────────────────────

const ventureLabSessions: CampSession[] = [
  {
    id: "vl-session1",
    title: "Ideation",
    date: "June 5th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 1, students were introduced to entrepreneurship through a hands-on Startup Ideation Lab. They learned how to identify real-world problems using a \"Bug Me List\" and turn those challenges into creative business ideas. Through brainstorming, poster creation, and a mini tradeshow, students explored different concepts, collaborated with peers, and began forming teams. By the end of the session, they delivered short pitches and took their first steps toward building a strong, innovative startup idea.",
    speaker: null,
    images: [],
  },
  {
    id: "vl-session2",
    title: "Feasibility & Market Research",
    date: "June 12th, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 2, students continued building on their ideas from the Startup Ideation Lab. They refined their problem-solution concepts, strengthened their understanding of their target audience, and further developed their startup vision. Through continued collaboration, feedback, and pitching practice, students improved their ideas and communication skills. This session reinforced creativity, critical thinking, and iteration, helping students gain confidence in their ideas while preparing for more advanced development in future sessions.",
    speaker: null,
    images: [
      "/camp_imgs/2026/session2vl/session2vla.jpg",
      "/camp_imgs/2026/session2vl/session2vlb.jpg",
      "/camp_imgs/2026/session2vl/session2vlc.jpg",
      "/camp_imgs/2026/session2vl/session2vld.jpg",
      "/camp_imgs/2026/session2vl/session2vle.jpg",
      "/camp_imgs/2026/session2vl/session2vlf.jpg",
      "/camp_imgs/2026/session2vl/session2vlg.jpg",
    ],
  },
  {
    id: "vl-session3",
    title: "Prototyping",
    date: "June 19th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 3, students learned how to bring their ideas to life through prototyping. They explored how successful startups test and refine their concepts using simple models, sketches, or mockups. Through hands-on activities, students created early versions of their product or service and gathered feedback from peers. This process helped them understand the importance of iteration, user experience, and continuous improvement as they began transforming their ideas into something tangible.",
    speaker: null,
    images: [
      "/camp_imgs/2026/session3vl/session3vla.jpg",
      "/camp_imgs/2026/session3vl/session3vlb.jpg",
      "/camp_imgs/2026/session3vl/session3vlc.jpg",
      "/camp_imgs/2026/session3vl/session3vld.jpg",
      "/camp_imgs/2026/session3vl/session3vle.jpg",
      "/camp_imgs/2026/session3vl/session3vlf.jpg",
    ],
  },
  {
    id: "vl-session4",
    title: "Project Management & Linking",
    date: "June 26th, 2026",
    location: "95th Street Library, Naperville",
    description: "In Session 4, students focused on organizing their ideas and managing their projects effectively. They learned how to break down their startup into key tasks, set goals, and assign roles within their teams. Additionally, they explored how different parts of a business connect, including product development, marketing, and operations. Through structured planning activities, students strengthened their teamwork and leadership skills while ensuring their ideas were clear, cohesive, and ready for presentation.",
    speaker: null,
    images: [
      "/camp_imgs/2026/session4vl/session4vla.jpg",
      "/camp_imgs/2026/session4vl/session4vlb.jpg",
      "/camp_imgs/2026/session4vl/session4vlc.jpg",
      "/camp_imgs/2026/session4vl/session4vld.jpg",
      "/camp_imgs/2026/session4vl/session4vle.jpg",
      "/camp_imgs/2026/session4vl/session4vlf.jpg",
    ],
  },
  {
    id: "vl-session5",
    title: "Presentational & Speaking Skills",
    date: "July 3rd, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 5, students developed the communication skills needed to present their ideas confidently. They learned how to structure a clear and compelling pitch, improve their public speaking, and use storytelling to engage an audience. Through guided practice and feedback, students refined their delivery, body language, and clarity. This session helped them feel more confident presenting their ideas and prepared them to effectively communicate their startup vision.",
    speaker: null,
    images: [
      "/camp_imgs/2026/session5vl/session5vla.jpg",
      "/camp_imgs/2026/session5vl/session5vlb.jpg",
      "/camp_imgs/2026/session5vl/session5vlc.jpg",
      "/camp_imgs/2026/session5vl/session5vld.jpg",
      "/camp_imgs/2026/session5vl/session5vle.jpg",
      "/camp_imgs/2026/session5vl/session5vlf.jpg",
    ],
  },
  {
    id: "vl-session6",
    title: "Demo Day Practice",
    date: "July 10th, 2026",
    location: "Nichols Library, Naperville",
    description: "In Session 6, students focused on practicing for Demo Day in a low-pressure, supportive environment. They ran through their full pitches, received feedback from instructors and peers, and made final improvements to both their ideas and presentation style. The goal of this session was repetition and refinement, helping students build confidence, fix weak points, and feel fully prepared. By the end, students had a polished pitch and a clear understanding of how to present effectively.",
    speaker: null,
    images: [],
  },
];

// ── Tracks ────────────────────────────────────────────────────────────────────

type TrackId = "kidpreneur" | "venturelab";

interface CampTrack {
  label: string;
  sessions: CampSession[];
}

const tracks: Record<TrackId, CampTrack> = {
  kidpreneur: { label: "KidPreneur Camp", sessions: kidpreneurSessions },
  venturelab: { label: "VentureLab", sessions: ventureLabSessions },
};

const trackOrder: TrackId[] = ["kidpreneur", "venturelab"];

function padIndex(value: number): string {
  return String(value).padStart(2, "0");
}

// ── Guest speaker ─────────────────────────────────────────────────────────────

interface SessionSpeakerProps {
  speaker: Speaker;
}

const SessionSpeaker = ({ speaker }: SessionSpeakerProps) => (
  <div className="mt-s5 border border-rule bg-panel p-s5">
    <p className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
      Guest speaker
    </p>
    <div className="mt-s4 grid grid-cols-1 gap-s4 min-[900px]:grid-cols-12 min-[900px]:gap-s5">
      <div className="max-w-[168px] min-[900px]:col-span-3 min-[900px]:max-w-none">
        <Plate
          src={speaker.image}
          alt={speaker.name}
          ratio="4:5"
          caption={`${speaker.name}, ${speaker.role}`}
          sizes="(min-width: 900px) 18vw, 168px"
        />
      </div>
      <div className="min-[900px]:col-span-9">
        <p className="max-w-measure font-prose text-21 italic text-ink-2">
          &ldquo;{speaker.topic}&rdquo;
        </p>
        <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">{speaker.bio}</p>
      </div>
    </div>
  </div>
);

// ── Session rows ──────────────────────────────────────────────────────────────

interface SessionRowsProps {
  sessions: CampSession[];
}

// Hairline-ruled rows carrying the mono index. The anchor ids are the ones the
// rest of the site links to, so they stay exactly as they are.
const SessionRows = ({ sessions }: SessionRowsProps) => (
  <ol className="mt-s5 border-t border-rule">
    {sessions.map((session, index) => (
      <li key={session.id} id={session.id} className="border-b border-rule py-s6">
        <div className="grid grid-cols-1 gap-s3 min-[900px]:grid-cols-12 min-[900px]:gap-s5">
          <p className="font-mono text-12 font-medium tracking-[0.08em] text-ink-muted min-[900px]:col-span-1">
            {padIndex(index + 1)}
          </p>
          <div className="min-[900px]:col-span-11">
            <h3 className="text-21 min-[900px]:text-26" style={{ fontVariationSettings: "'wdth' 105, 'wght' 600" }}>
              {session.title}
            </h3>
            <p className="mt-s3 flex flex-wrap gap-x-s4 gap-y-s1 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
              <span>{session.date}</span>
              <span>{session.location}</span>
            </p>
            <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">{session.description}</p>
            {session.speaker && <SessionSpeaker speaker={session.speaker} />}
          </div>
        </div>
      </li>
    ))}
  </ol>
);

// ── Session photography ───────────────────────────────────────────────────────

interface SessionPlateGridProps {
  sessions: CampSession[];
  trackLabel: string;
}

const SessionPlateGrid = ({ sessions, trackLabel }: SessionPlateGridProps) => {
  const plates = sessions.flatMap((session, index) =>
    session.images.map((src) => ({
      src,
      caption: `Session ${index + 1}, ${session.title} · ${session.location}`,
    }))
  );
  const unfiled = sessions
    .map((session, index) => ({ session, number: index + 1 }))
    .filter((entry) => entry.session.images.length === 0);

  // Nothing on file: return before anything iterates over the image list.
  if (plates.length === 0) {
    return (
      <p className="mt-s5 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
        No {trackLabel} photographs are on file yet.
      </p>
    );
  }

  return (
    <>
      <ul className="mt-s5 grid grid-cols-2 gap-s5 min-[900px]:grid-cols-3">
        {plates.map((plate, index) => (
          <li key={plate.src}>
            <Plate
              src={plate.src}
              alt={plate.caption}
              ratio="3:2"
              caption={plate.caption}
              index={`${padIndex(index + 1)} / ${padIndex(plates.length)}`}
              sizes="(min-width: 900px) 30vw, 45vw"
            />
          </li>
        ))}
      </ul>
      {unfiled.length > 0 && (
        <p className="mt-s6 border-t border-rule pt-s4 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
          Awaiting photography — {unfiled.map((entry) => `Session ${entry.number}, ${entry.session.title}`).join(" · ")}
        </p>
      )}
    </>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────

function Camps2026Inner() {
  const searchParams = useSearchParams();
  const [activeCamp, setActiveCamp] = useState<TrackId>("kidpreneur");

  useEffect(() => {
    if (searchParams.get("tab") === "venturelab") {
      setActiveCamp("venturelab");
    }
  }, [searchParams]);

  const activeTrack = tracks[activeCamp];

  return (
    <div>
      <PageMasthead
        kicker="Camps — Summer 2026"
        title="BizBuzz Camp 2026"
        standfirst="Two free tracks running side by side: twelve sessions across six consecutive Fridays, June 5 to July 10, 2026, at two Naperville libraries."
        year={2026}
        tags={
          <>
            <Tag variant="year" year={2026}>
              2026
            </Tag>
            <Tag variant="status-open">Free</Tag>
            <Tag variant="status-archive">Season complete</Tag>
          </>
        }
      />

      <RailSection index="01" label="The two tracks">
        <SplitBrief
          split="7/5"
          facts={
            <dl className="border-t border-rule">
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Dates
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">
                  June 5 – July 10, 2026
                </dd>
              </div>
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Schedule
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">
                  Six weeks of Friday sessions
                </dd>
              </div>
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Sessions
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">
                  12 in total, six per track
                </dd>
              </div>
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Venues
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">
                  95th Street Library · Nichols Library, Naperville
                </dd>
              </div>
              <div className="border-b border-rule py-s3">
                <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  Cost
                </dt>
                <dd className="mt-s1 font-display text-16 font-medium text-ink">Free</dd>
              </div>
            </dl>
          }
        >
          <h2 className="text-26 min-[900px]:text-34" style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}>
            Two tracks, six Fridays
          </h2>
          <p className="mt-s5">
            BizBuzz Camp 2026 ran as two tracks side by side. KidPreneur Camp and VentureLab met on
            the same six consecutive Fridays, at the same two Naperville libraries, and each worked
            through its own six-session curriculum — twelve sessions in all.
          </p>
          <p className="mt-s4">
            KidPreneur Camp opened with networking and ideation, then moved through finance,
            marketing and prototyping, problem solving and business models, and speaking skills,
            finishing with a mock pitch.
          </p>
          <p className="mt-s4">
            VentureLab ran the venture track: ideation, feasibility and market research,
            prototyping, project management, speaking skills, and Demo Day practice.
          </p>
          <p className="mt-s4">Both tracks were free, and both are set out session by session below.</p>
        </SplitBrief>
      </RailSection>

      <RailSection index="02" label="Sessions">
        <h2 className="text-26 min-[900px]:text-34" style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}>
          Twelve sessions, six per track
        </h2>
        <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
          Both tracks ran the same dates at the same venues. Choose a track to read its six
          sessions.
        </p>
        <div role="group" aria-label="Camp track" className="mt-s5 flex flex-wrap gap-s2">
          {trackOrder.map((trackId) => (
            <button
              key={trackId}
              type="button"
              aria-pressed={activeCamp === trackId}
              onClick={() => setActiveCamp(trackId)}
              className={`rounded-control border border-rule px-s5 py-s3 font-display text-16 font-medium transition-colors duration-120 ease-out ${
                activeCamp === trackId ? "bg-ink text-on-ink" : "bg-paper text-ink hover:bg-panel"
              }`}
            >
              {tracks[trackId].label}
            </button>
          ))}
        </div>
        <SessionRows sessions={activeTrack.sessions} />
      </RailSection>

      <RailSection index="03" label="Photographs">
        <h2 className="text-26 min-[900px]:text-34" style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}>
          Photographs from {activeTrack.label}
        </h2>
        <SessionPlateGrid sessions={activeTrack.sessions} trackLabel={activeTrack.label} />
      </RailSection>

      <InvertedBand
        title="Next: BizBuzz Camp 2027"
        standfirst="The 2026 season closed on July 10. Sign-up for the 2027 camp is on the 2027 page."
      >
        <Button href="/camps-2027">Camp 2027</Button>
        <Link
          href="/fish-tank-2026"
          className="group inline-flex flex-col items-start self-center font-display text-16 font-medium text-on-ink"
        >
          <span>2026 Fish Tank →</span>
          <span
            aria-hidden="true"
            className="mt-s1 h-px w-full bg-rule transition-colors duration-120 ease-out group-hover:bg-accent group-focus-visible:bg-accent"
          />
        </Link>
      </InvertedBand>
    </div>
  );
}

export default function Camps2026Page() {
  return (
    <Suspense>
      <Camps2026Inner />
    </Suspense>
  );
}
