import Button from '@/components/ui/Button';
import InvertedBand from '@/components/ui/InvertedBand';
import PageMasthead from '@/components/ui/PageMasthead';
import Plate from '@/components/ui/Plate';
import RailSection from '@/components/ui/RailSection';
import SplitBrief from '@/components/ui/SplitBrief';
import Tag from '@/components/ui/Tag';

interface WorkshopSession {
  name: string;
  date: string;
}

interface Workshop {
  id: string;
  title: string;
  date: string;
  location: string;
  /** Head count, phrased with the noun the description itself uses. */
  attendance: string;
  description: string;
  sessions: WorkshopSession[];
  images: string[];
}

/* Newest first. Attendance is reconciled against /about, which publishes the
   same nine events in `programParticipation`: those nine lines sum to 710, the
   total this page has always shown. That only holds at 145 for Scott Elementary
   and 45 for the 2024 fair workshops — the two figures this file previously
   carried as 135 and 50, and the only two of the six 2024 events that disagreed. */
const workshops: Workshop[] = [
  {
    id: "naperville2025",
    title: "2025 Naperville Children's Business Fair",
    date: "August 9th, 2025",
    location: "Naperville, IL",
    attendance: "150 kidpreneurs",
    description: "BizBuzz staff judged a full-day, farmers-market style event at the new Matrix Club, where kidpreneurs ages 5–14 tested the waters of entrepreneurship by selling handmade goods and pitching their small businesses.",
    sessions: [
      { name: "Naperville Children's Business Fair", date: "August 9th, 2025" }
    ],
    images: [
      "/workshops/ncbf/1.jpeg",
      "/workshops/ncbf/2.jpeg",
      "/workshops/ncbf/3.jpeg",
    ]
  },
  {
    id: "dupage",
    title: "Dupage Children's Business Fair Workshops",
    date: "March 16th, 2025 to April 26th, 2025",
    location: "Dupage County, IL",
    attendance: "30 entrepreneurs",
    description: "Three workshops preparing 30 entrepreneurs for the upcoming Dupage Children's Business Fair, guiding them through ideation, marketing, and finance.",
    sessions: [
      { name: "DCBF Workshop 1", date: "March 16th, 2025" },
      { name: "DCBF Workshop 2", date: "March 23rd, 2025" },
      { name: "DCBF Workshop 3", date: "April 6th, 2025" },
      { name: "Dupage Children's Business Fair", date: "April 26th, 2025" }
    ],
    images: [
      "/workshops/dcbf/1.jpg",
      "/workshops/dcbf/2.jpg",
      "/workshops/dcbf/3.jpg",
    ]
  },
  {
    id: "madison",
    title: "Madison Junior High mxINCedu Mentorship Program",
    date: "August 15th, 2024 to December 20th, 2024",
    location: "Naperville, IL",
    attendance: "90 students",
    description: "A mentorship program enhancing the mxINCedu curriculum with new worksheets, slides, and activities for 90 students.",
    sessions: [
      { name: "Madison Mentorship Program", date: "August 15th, 2024 to December 20th, 2024" }
    ],
    images: [
      "/workshops/mm/1.png",
      "/workshops/mm/2.jpg",
      "/workshops/mm/3.png",
    ]
  },
  {
    id: "brookdale",
    title: "Brookdale Elementary School Workshops",
    date: "October 30th, 2024 to November 20th, 2024",
    location: "Naperville, IL",
    attendance: "20 young entrepreneurs",
    description: "Four workshops teaching 20 young entrepreneurs fundamental business skills, culminating in a school Pitch Night for parents and high school guest judges.",
    sessions: [
      { name: "Brookdale Workshop 1", date: "October 30th, 2024" },
      { name: "Brookdale Workshop 2", date: "November 3rd, 2024" },
      { name: "Brookdale Workshop 3", date: "November 10th, 2024" },
      { name: "Brookdale Workshop 4", date: "November 20th, 2024" }
    ],
    images: [
      "/workshops/be/1.png",
      "/workshops/be/2.png",
      "/workshops/be/3.png",
    ]
  },
  {
    id: "bestbrains",
    title: "Best Brains Learning Center Workshops",
    date: "August 6th, 2024 to August 7th, 2024",
    location: "Naperville, IL",
    attendance: "20 students",
    description: "Two workshops introducing 20 students to entrepreneurship and the process of turning imagination into innovation.",
    sessions: [
      { name: "Best Brains Workshop 1", date: "August 6th, 2024" },
      { name: "Best Brains Workshop 2", date: "August 7th, 2024" }
    ],
    images: [
      "/workshops/bb/1.jpg",
      "/workshops/bb/2.jpg",
      "/workshops/bb/3.png",
    ]
  },
  {
    id: "naperville",
    title: "2024 Naperville Children's Business Fair Workshops",
    date: "July 6th, 2024 to August 3rd, 2024",
    location: "Naperville, IL",
    attendance: "45 students, 150 at the fair",
    description: "Three workshops helping 45 students use creative problem-solving, marketing, and finance to launch products sold alongside 150 young entrepreneurs at the Naperville Children's Business Fair.",
    sessions: [
      { name: "NCBF Workshop 1", date: "July 6th, 2024" },
      { name: "NCBF Workshop 2", date: "July 13th, 2024" },
      { name: "NCBF Workshop 3", date: "July 20th, 2024" },
      { name: "Naperville Children's Business Fair", date: "August 3rd, 2024" }
    ],
    images: [
      "/workshops/ncbf/1.jpeg",
      "/workshops/ncbf/2.jpeg",
      "/workshops/ncbf/3.jpeg",
    ]
  },
  {
    id: "crone",
    title: "Crone Middle School Talk",
    date: "May 31st, 2024",
    location: "Naperville, IL",
    attendance: "60 students",
    description: "A school talk encouraging 60 students to see themselves as problem-solvers and future business creators.",
    sessions: [
      { name: "Crone Middle School Talk", date: "May 31st, 2024" }
    ],
    images: [
      "/workshops/cm/1.jpg",
      "/workshops/cm/2.jpg",
      "/workshops/cm/3.jpg",
    ]
  },
  {
    id: "scott",
    title: "Scott Elementary School Talk",
    date: "May 21st, 2024",
    location: "Naperville, IL",
    attendance: "145 students",
    description: "A school talk inspiring 145 students to explore entrepreneurship by showing how creative ideas can turn into real businesses—even as kids.",
    sessions: [
      { name: "Scott Elementary School Talk", date: "May 21st, 2024" }
    ],
    images: [
      "/workshops/se/1.png",
      "/workshops/se/2.png",
      "/workshops/se/3.png",
    ]
  }
];

// Every value is countable from the eight records above.
const record = [
  { label: "Programs", value: "8" },
  { label: "Sessions", value: "18" },
  { label: "Students taught", value: "710" },
  { label: "First workshop", value: "May 21, 2024" },
  { label: "Most recent", value: "August 9, 2025" },
];

// Three plates across the 10-column content band from 900px up.
const PLATE_SIZES = '(min-width: 900px) 300px, (min-width: 640px) 46vw, calc(100vw - 48px)';

function indexLabel(position: number) {
  return String(position + 1).padStart(2, '0');
}

export default function WorkshopsPage() {
  return (
    <>
      <PageMasthead
        kicker="Year-round programs"
        title="BizBuzz Workshops"
        standfirst="A condensed BizBuzz curriculum taken into local schools, learning centers and children's business fairs — eight programs, eighteen sessions and 710 students between May 2024 and August 2025."
        tags={
          <>
            <Tag variant="program">Workshop</Tag>
            <Tag variant="year" year={2024}>
              2024
            </Tag>
            <Tag variant="year" year={2025}>
              2025
            </Tag>
          </>
        }
      />

      <RailSection index="01" label="The eight programs">
        <p className="max-w-measure font-prose text-18 text-ink-2">
          Listed newest first. Each program ran for a named host on named dates, and the head
          counts below sum to the 710 students in the record.
        </p>
        <ol className="mt-s7 border-t border-rule">
          {workshops.map((workshop, workshopIndex) => (
            <li
              key={workshop.id}
              id={workshop.id}
              className="grid scroll-mt-s9 grid-cols-1 gap-s4 border-b border-rule py-s6 min-[900px]:grid-cols-12"
            >
              <p className="font-mono text-12 font-medium tracking-[0.08em] text-ink-muted min-[900px]:col-span-1">
                {indexLabel(workshopIndex)}
              </p>
              <div className="min-[900px]:col-span-11">
                <h2 className="text-26" style={{ fontVariationSettings: "'wdth' 105, 'wght' 600" }}>
                  {workshop.title}
                </h2>
                <p className="mt-s2 flex flex-wrap gap-x-s4 gap-y-s1 font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                  <span>{workshop.date}</span>
                  <span>{workshop.location}</span>
                  <span>
                    {workshop.sessions.length}{' '}
                    {workshop.sessions.length === 1 ? 'session' : 'sessions'}
                  </span>
                  <span>{workshop.attendance}</span>
                </p>
                <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
                  {workshop.description}
                </p>

                {/* A single-session program has already stated its name and date
                    in the heading above, so only a real series gets a list. */}
                {workshop.sessions.length > 1 && (
                  <div className="mt-s7">
                    <p className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                      Sessions
                    </p>
                    <ol className="mt-s3 border-t border-rule">
                      {workshop.sessions.map((session, sessionIndex) => (
                        <li
                          key={session.name}
                          className="flex flex-wrap items-baseline gap-x-s4 gap-y-s1 border-b border-rule py-s3"
                        >
                          <span className="font-mono text-12 font-medium tracking-[0.08em] text-ink-muted">
                            {indexLabel(sessionIndex)}
                          </span>
                          <span className="min-w-0 flex-1 font-display text-16 font-medium text-ink">
                            {session.name}
                          </span>
                          <span className="font-mono text-12 font-medium tracking-[0.08em] text-ink-muted">
                            {session.date}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="mt-s7 grid grid-cols-1 gap-s5 sm:grid-cols-2 min-[900px]:grid-cols-3">
                  {workshop.images.map((src, imageIndex) => (
                    <Plate
                      key={src}
                      src={src}
                      alt={`${workshop.title}, photo ${imageIndex + 1}`}
                      ratio="3:2"
                      index={`${indexLabel(imageIndex)} / ${workshop.images.length}`}
                      caption={`${workshop.title} · ${workshop.location}`}
                      sizes={PLATE_SIZES}
                    />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </RailSection>

      <RailSection index="02" label="Bring this to your school">
        <SplitBrief
          facts={
            <dl>
              {record.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-baseline justify-between gap-s2 border-b border-rule py-s3 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <dt className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                    {row.label}
                  </dt>
                  <dd className="font-display text-16 font-medium text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          }
        >
          <p>
            Every program above ran for a host who asked for it, and the format followed the
            host rather than the other way round. Brookdale Elementary took four afternoons and
            finished with a Pitch Night in front of parents. Crone Middle School was one talk.
            Madison Junior High ran from August to December alongside an existing curriculum.
            The 2024 Naperville and 2025 DuPage Children&rsquo;s Business Fairs each took three
            preparation workshops before the students sold what they had built.
          </p>
          <p className="mt-s4">
            The material is a condensed version of the BizBuzz summer camp curriculum &mdash; idea
            generation, marketing, finance and pitching &mdash; delivered by the same high school
            instructors who run the camps.
          </p>
          <p className="mt-s4">
            If you teach in or near Naperville and want one of these for your students, write to
            us. Tell us the grade, roughly how many students, and how much time you have.
          </p>
        </SplitBrief>
      </RailSection>

      <InvertedBand
        title="Ask for a workshop"
        standfirst="Workshops have run at elementary schools, middle schools, a learning center and children's business fairs across Naperville and DuPage County."
      >
        <Button href="mailto:bizbuzznfp@gmail.com">Email bizbuzznfp@gmail.com</Button>
      </InvertedBand>
    </>
  );
}
