import Link from 'next/link';
import Container from '@/components/ui/Container';

// The footer is a paper surface, not an inverted one — the single inverted band
// per route belongs to the page, not to the chrome.

const siteLinks = [
  { href: '/', label: 'Home' },
  { href: '/camps-2024', label: 'Camps' },
  { href: '/fish-tank-2024', label: 'Fish Tank' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/years', label: 'Archive' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/company/bizbuzznfp', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/bizbuzznfp', label: 'Instagram' },
  { href: 'https://github.com/thetinfoilhat/BizBuzz', label: 'GitHub' },
];

// A link's underline sits in --rule and goes amber on hover and on focus. The
// text colour itself never shifts.
const LINK_CLASS =
  'font-display text-16 font-medium text-ink underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-120 ease-out hover:decoration-accent focus-visible:decoration-accent';

const LABEL_CLASS =
  'font-mono text-12 font-medium uppercase tracking-[0.08em] text-ink-muted';

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper">
      <Container>
        <div className="grid grid-cols-1 gap-s7 py-s9 min-[900px]:grid-cols-12 min-[900px]:py-s10">
          <div className="min-[900px]:col-span-5">
            <p className="flex items-baseline gap-s2">
              <span
                className="font-display text-26 text-ink"
                style={{ fontVariationSettings: "'wdth' 112, 'wght' 650" }}
              >
                BizBuzz
              </span>
              <span className={LABEL_CLASS}>NFP</span>
            </p>
            <p className="mt-s4 max-w-measure font-prose text-18 text-ink-2">
              Making entrepreneurship education accessible to students everywhere.
            </p>
          </div>

          <nav aria-labelledby="footer-site" className="min-[900px]:col-span-4">
            <h2 id="footer-site" className={LABEL_CLASS}>
              Site
            </h2>
            <ul className="mt-s4 flex flex-col gap-s3">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-connect" className="min-[900px]:col-span-3">
            <h2 id="footer-connect" className={LABEL_CLASS}>
              Connect
            </h2>
            <ul className="mt-s4 flex flex-col gap-s3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_CLASS}
                  >
                    {link.label}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-s2 border-t border-rule py-s5 min-[900px]:flex-row min-[900px]:justify-between">
          <p className={LABEL_CLASS}>© {new Date().getFullYear()} BizBuzz NFP</p>
          <p className={LABEL_CLASS}>501(c)(3) status pending</p>
        </div>
      </Container>
    </footer>
  );
}
