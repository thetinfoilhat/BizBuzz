import Image from "next/image";

// The directory name carries a space and square brackets, and one file is
// `erasebg-transformed (23) (1).png`. Both are frozen, which is why the alt text
// is positional rather than derived from the filename.
const logoPath = "/school_logos/[Home] School Logos/";
const logoFiles = [
  "Cass.png",
  "Neuqua Valley.png",
  "Avery Coonley.png",
  "Granger.png",
  "Kennedy.png",
  "Twin Groves.png",
  "Springbrook.png",
  "erasebg-transformed (23) (1).png",
  "Jefferson.png",
  "Homer.png",
  "Waubonsie Valley.png",
  "Margaret Mead.png",
  "Crone.png",
  "Bednarcik.png",
  "Lincoln.png",
  "Still.png",
  "Naperville Central.png",
  "Calvary.png",
  "Scullen.png",
  "Heritage Grove.png",
  "Beebe.png",
  "Gregory.png",
  "Summit Hill.png",
  "Madison.png",
  "Lake Zurich North.png",
  "Naperville North.png",
];

// Twenty-six marks in fixed static cells. This was two 60-second infinite
// marquees with no pause control — a WCAG 2.2.2 Level A failure — and the
// direction has nothing on the site move without user input.
const LogoScroller = () => (
  <ul className="grid grid-cols-[repeat(auto-fill,minmax(var(--space-11),1fr))] gap-s2">
    {logoFiles.map((logo, index) => (
      <li
        key={logo}
        className="flex h-s10 items-center justify-center border border-rule bg-panel p-s3"
      >
        <div className="relative h-full w-full">
          <Image
            src={`${logoPath}${logo}`}
            alt={`School logo ${index + 1}`}
            fill
            sizes="(min-width: 600px) 180px, 45vw"
            className="object-contain"
          />
        </div>
      </li>
    ))}
  </ul>
);

export default LogoScroller;
