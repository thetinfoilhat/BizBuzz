import Image from 'next/image';

interface RosterMember {
  name: string;
  role: string;
  /** Most of the roster has no photograph. That is the normal case, not an error. */
  image?: string;
}

interface RosterProps {
  members: RosterMember[];
}

function initialsOf(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();
}

// 4:5 portrait plates, matted and ruled like every other photograph on the site.
export default function Roster({ members }: RosterProps) {
  return (
    <ul className="grid grid-cols-2 gap-s5 min-[900px]:grid-cols-4">
      {members.map((member) => (
        <li key={member.name}>
          <div className="rounded-none border border-rule bg-paper p-s2">
            <div className="relative aspect-[4/5] bg-fill-soft">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 900px) 25vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-display text-26 text-ink-2"
                >
                  {initialsOf(member.name)}
                </span>
              )}
            </div>
          </div>
          <p className="mt-s2 font-display text-16 font-medium text-ink">{member.name}</p>
          <p className="font-mono text-12 font-medium tracking-[0.08em] text-ink-muted">
            {member.role}
          </p>
        </li>
      ))}
    </ul>
  );
}
