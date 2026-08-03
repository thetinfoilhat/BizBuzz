"use client";

import { useEffect, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import PageMasthead from '@/components/ui/PageMasthead';
import RailSection from '@/components/ui/RailSection';
import SplitBrief from '@/components/ui/SplitBrief';
import Tag from '@/components/ui/Tag';

const CAL_LINKS = {
  online: "bizbuzz-nfp/office-hours-online",
  inPerson: "bizbuzz-nfp/office-hours-in-person",
} as const;

const bookingOptions = [
  { key: "online", label: "Online (Google Meet)" },
  { key: "inPerson", label: "In-Person (Library)" },
] as const;

// The published office hours requirements as values. The sentences that explain
// them live in the brief; this panel is the version you check at a glance.
const officeHoursFacts = [
  { label: "Format", value: "Weekdays online · Weekends in person" },
  { label: "Questions email", value: "24 hours before" },
  { label: "Reminder email", value: "12 hours before" },
  { label: "Fish Tank entrants", value: "1 hour per week" },
  { label: "Cost", value: "Free" },
];

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
    // The divisions follow the camp track, which is how /camps-2026 and
    // /fish-tank-2026 describe them. No grade boundary is stated here because
    // no camp page publishes one, and the previous grade ranges overlapped at
    // 6th grade — which put those students in both divisions at once.
    q: "What are the divisions for Fish Tank?",
    a: "Fish Tank runs two divisions and every student competes in exactly one. Students enrolled in VentureLab compete in the VentureLab division, and students enrolled in KidPreneur compete in the KidPreneur division. The competition is open to 3rd–9th grade students across the Chicagoland area, so if your child is competing without attending camp, email bizbuzznfp@gmail.com before you register and we will confirm their division.",
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

const LINK_CLASS =
  'font-display text-16 font-medium text-ink underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-120 ease-out hover:decoration-accent focus-visible:decoration-accent';

function padIndex(value: number): string {
  return String(value).padStart(2, "0");
}

// ── FAQ disclosure ────────────────────────────────────────────────────────────

interface FaqDisclosureProps {
  /** Id of the answer panel. The toggle derives its own id from it. */
  id: string;
  index: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

// A real button, so the row is operable from the keyboard and announces its own
// state. The panel height and the chevron both move over 200ms, and the base
// layer reduces both to nothing under prefers-reduced-motion.
const FaqDisclosure = ({ id, index, question, answer, open, onToggle }: FaqDisclosureProps) => (
  <li className="border-b border-rule">
    <h3>
      <button
        type="button"
        id={`${id}-toggle`}
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className="group relative flex w-full items-baseline gap-s4 bg-paper py-s4 pl-s4 pr-s2 text-left transition-colors duration-120 ease-out hover:bg-panel focus-visible:bg-panel"
      >
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[var(--rule-accent-w)] transition-colors duration-120 ease-out group-hover:bg-accent group-focus-visible:bg-accent"
        />
        <span className="font-mono text-12 font-medium tracking-[0.08em] text-ink-muted">
          {index}
        </span>
        <span className="min-w-0 flex-1 font-display text-16 font-medium text-ink">{question}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={`h-s4 w-s4 shrink-0 self-center text-ink-2 transition-transform duration-200 ease-out ${
            open ? "rotate-180" : ""
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </h3>
    <div
      id={id}
      role="region"
      aria-labelledby={`${id}-toggle`}
      className={`grid transition-[grid-template-rows] duration-200 ease-out ${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <p className="max-w-measure pb-s5 pl-s4 pr-s2 font-prose text-18 text-ink-2">{answer}</p>
      </div>
    </div>
  </li>
);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SessionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [bookingType, setBookingType] = useState<keyof typeof CAL_LINKS>("online");

  // The Cal.com config is left exactly as booked: inside the widget, platform
  // expectation outranks expression, so nothing here restyles its internals.
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#003166" },
          dark: { "cal-brand": "#FFD700" },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <>
      <PageMasthead
        kicker="1:1 office hours"
        title="Office Hours & FAQs"
        standfirst="A one-on-one slot for feedback on a business idea: online over Google Meet on weekdays, in person at a Naperville library on weekends."
        tags={
          <>
            <Tag variant="program">Weekdays online</Tag>
            <Tag variant="program">Weekends in person</Tag>
          </>
        }
      />

      <div id="office-hours-policy" className="scroll-mt-16">
        <RailSection index="01" label="How it works">
          <SplitBrief
            facts={
              <dl>
                {officeHoursFacts.map((row) => (
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
            <h2
              className="text-26 min-[900px]:text-34"
              style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
            >
              What a session is, and how to prepare
            </h2>
            <p className="mt-s5">
              Office hours are personalized 1-on-1 sessions where a student gets feedback on their
              idea, asks the questions they have been sitting on, and leaves with something specific
              to work on. Spots are limited and first-come, first-served.
            </p>
            <p className="mt-s4">
              Book a slot below, then email{' '}
              <a href="mailto:bizbuzznfp@gmail.com" className={LINK_CLASS}>
                bizbuzznfp@gmail.com
              </a>{' '}
              at least 24 hours beforehand with at least three specific, detailed questions and any
              ideas, updates or materials you want feedback on. Send a short confirmation to the
              same address at least 12 hours before the session. Those two emails are what keep the
              session tailored to your progress rather than introductory, and if they do not arrive
              we reserve the right to cancel the slot.
            </p>
            <p className="mt-s4">
              Weekday sessions run online over Google Meet and weekend sessions run in person. The
              link or the library location is sent when you book.
            </p>
            <p className="mt-s4">
              Fish Tank participants are required to attend at least one hour of office hours per
              week leading up to the competition.
            </p>
          </SplitBrief>
        </RailSection>
      </div>

      <div id="book-a-session" className="scroll-mt-16">
        <RailSection index="02" label="Book a session">
          <h2
            className="text-26 min-[900px]:text-34"
            style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
          >
            Pick a time
          </h2>
          <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
            Choose the format, pick a time that works for your family, and fill in your details. A
            confirmation email follows with the Google Meet link or the library location.
          </p>
          <div
            role="group"
            aria-label="Session format"
            className="mt-s5 flex flex-wrap gap-s2"
          >
            {bookingOptions.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                aria-pressed={bookingType === key}
                onClick={() => setBookingType(key)}
                className={`rounded-control border px-s5 py-s3 font-display text-16 font-medium transition-colors duration-120 ease-out ${
                  bookingType === key
                    ? "border-ink bg-ink text-on-ink"
                    : "border-rule bg-paper text-ink hover:bg-panel"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-s5 border border-rule bg-panel p-s2">
            <Cal
              key={bookingType}
              calLink={CAL_LINKS[bookingType]}
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
              config={{ layout: "month_view" }}
            />
          </div>
          <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
            Having trouble booking?{' '}
            <a href="mailto:bizbuzznfp@gmail.com" className={LINK_CLASS}>
              Email us
            </a>{' '}
            and we will find a time for you.
          </p>
        </RailSection>
      </div>

      <div id="faqs" className="scroll-mt-16">
        <RailSection index="03" label="FAQs">
          <h2
            className="text-26 min-[900px]:text-34"
            style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
          >
            Frequently asked questions
          </h2>
          <p className="mt-s5 max-w-measure font-prose text-18 text-ink-2">
            Everything we are usually asked about BizBuzz, Fish Tank and office hours.
          </p>
          <ul className="mt-s5 border-t border-rule">
            {faqs.map((faq, index) => (
              <FaqDisclosure
                key={faq.q}
                id={`faq-${index + 1}`}
                index={padIndex(index + 1)}
                question={faq.q}
                answer={faq.a}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </ul>
        </RailSection>
      </div>
    </>
  );
}
