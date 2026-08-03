"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { YEARS } from "@/lib/years";
import type { Year } from "@/lib/years";

interface NavChild {
  href: string;
  label: string;
  year: Year;
}

interface NavLink {
  href: string;
  label: string;
  items?: NavChild[];
}

// Labels and grouping are carried over unchanged; only the presentation moved.
const navLinks: NavLink[] = [
  {
    href: "/camps-2024",
    label: "Camps",
    items: [
      { href: "/camps-2024", label: "2024 Camps", year: 2024 },
      { href: "/camps-2025", label: "2025 Camps", year: 2025 },
      { href: "/camps-2026", label: "2026 Camps", year: 2026 },
      { href: "/camps-2027", label: "2027 Camps", year: 2027 },
    ],
  },
  { href: "/workshops", label: "Workshops" },
  {
    href: "/fish-tank-2024",
    label: "Fish Tank",
    items: [
      { href: "/fish-tank-2024", label: "2024 Fish Tank", year: 2024 },
      { href: "/fish-tank-2025", label: "2025 Fish Tank", year: 2025 },
      { href: "/fish-tank-2026", label: "2026 Fish Tank", year: 2026 },
    ],
  },
  { href: "/sessions", label: "Office Hours & FAQs" },
  { href: "/about", label: "About Us" },
  { href: "/sponsors", label: "Sponsors" },
];

// A nav item fills the bar so its underline lands on the bar's bottom edge.
const NAV_ITEM_CLASS =
  "group relative flex h-16 items-center gap-s2 whitespace-nowrap font-display text-16 font-medium text-ink";

// Idle nothing, hover a 1px amber rule, active a 3px one. The text colour itself
// never shifts.
const navUnderlineClass = (active: boolean) =>
  active
    ? "pointer-events-none absolute inset-x-0 bottom-0 h-[var(--rule-accent-w)] bg-accent"
    : "pointer-events-none absolute inset-x-0 bottom-0 h-[var(--rule-w)] bg-transparent transition-colors duration-120 ease-out group-hover:bg-accent group-focus-visible:bg-accent";

const isActive = (pathname: string, link: NavLink) =>
  pathname === link.href || (link.items?.some((item) => pathname === item.href) ?? false);

// ── Year chip ────────────────────────────────────────────────────────────────

// The 8×8 hard square marker. It is the whole of the year identity in the nav.
function YearChip({ year }: { year: Year }) {
  return (
    <span
      aria-hidden="true"
      className="h-s2 w-s2 shrink-0 rounded-none"
      style={{ backgroundColor: `var(${YEARS[year].cssVar})` }}
    />
  );
}

// ── Desktop dropdown ─────────────────────────────────────────────────────────

interface NavDropdownProps {
  link: NavLink;
  items: NavChild[];
  pathname: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Opens on click and on hover, closes on Escape with focus handed back to the
// trigger, and on tabbing out. The panel is unmounted when closed, so its links
// are in the tab order only while they are visible.
function NavDropdown({ link, items, pathname, open, onOpenChange }: NavDropdownProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          onOpenChange(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !open) return;
        onOpenChange(false);
        triggerRef.current?.focus();
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => onOpenChange(!open)}
        className={NAV_ITEM_CLASS}
      >
        {link.label}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={`h-s4 w-s4 transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <span aria-hidden="true" className={navUnderlineClass(isActive(pathname, link))} />
      </button>

      {open && (
        <ul className="absolute left-0 top-full z-50 w-64 border border-rule bg-panel shadow-float">
          {items.map((item) => {
            const current = pathname === item.href;
            return (
              <li key={item.href} className="border-t border-rule first:border-t-0">
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`group relative flex items-center gap-s3 py-s3 pl-s4 pr-s3 font-display text-16 font-medium text-ink transition-colors duration-120 ease-out hover:bg-paper focus-visible:bg-paper ${
                    current ? "bg-paper" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-0 left-0 w-[var(--rule-accent-w)] transition-colors duration-120 ease-out group-hover:bg-accent group-focus-visible:bg-accent ${
                      current ? "bg-accent" : ""
                    }`}
                  />
                  <YearChip year={item.year} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// ── Header ───────────────────────────────────────────────────────────────────

export default function Header() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // A pointer press anywhere outside the bar dismisses whatever is open.
  useEffect(() => {
    if (!openDropdown && !isMenuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (headerRef.current?.contains(event.target as Node)) return;
      setOpenDropdown(null);
      setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [openDropdown, isMenuOpen]);

  // Close everything when the route changes.
  useEffect(() => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !isMenuOpen) return;
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }}
      className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper"
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-s5">
          <Link href="/" className="flex items-center gap-s2">
            <span className="relative block h-s5 w-s5">
              <Image
                src="/logo.png"
                alt=""
                fill
                sizes="24px"
                className="bg-transparent object-contain"
              />
            </span>
            <span
              className="font-display text-21 text-ink"
              style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
            >
              BizBuzz
            </span>
            <span className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-2">
              NFP
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-s5 lg:flex">
            {navLinks.map((link) =>
              link.items ? (
                <NavDropdown
                  key={link.href}
                  link={link}
                  items={link.items}
                  pathname={pathname}
                  open={openDropdown === link.href}
                  onOpenChange={(open) => setOpenDropdown(open ? link.href : null)}
                />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={NAV_ITEM_CLASS}
                >
                  {link.label}
                  <span aria-hidden="true" className={navUnderlineClass(isActive(pathname, link))} />
                </Link>
              )
            )}
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-16 items-center text-ink lg:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-s5 w-s5"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="absolute inset-x-0 top-16 max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-rule bg-paper shadow-float lg:hidden"
        >
          <Container>
            <ul className="py-s2">
              {navLinks.map((link) => (
                <li key={link.href} className="border-t border-rule first:border-t-0">
                  {link.items ? (
                    <div className="py-s3">
                      <p className="font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted">
                        {link.label}
                      </p>
                      <ul className="mt-s2">
                        {link.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={pathname === item.href ? "page" : undefined}
                              className="-mx-s3 flex items-center gap-s3 px-s3 py-s3 font-display text-16 font-medium text-ink transition-colors duration-120 ease-out hover:bg-panel focus-visible:bg-panel"
                            >
                              <YearChip year={item.year} />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className="-mx-s3 flex items-center px-s3 py-s4 font-display text-16 font-medium text-ink transition-colors duration-120 ease-out hover:bg-panel focus-visible:bg-panel"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
