import Image from 'next/image';

interface PlateProps {
  src: string;
  alt: string;
  ratio: '3:2' | '4:5';
  /** Required. An uncaptioned photograph reads as filler; a captioned one reads as archive. */
  caption: string;
  /** Optional archive index, e.g. `04 / 18`. */
  index?: string;
  priority?: boolean;
  sizes?: string;
}

// Two ratios site-wide. There is no third.
const RATIO_CLASS: Record<PlateProps['ratio'], string> = {
  '3:2': 'aspect-[3/2]',
  '4:5': 'aspect-[4/5]',
};

// Plates cap at 8 of 12 columns, so two-thirds of the viewport is the sensible default.
const DEFAULT_SIZES = '(min-width: 900px) 66vw, 100vw';

export default function Plate({
  src,
  alt,
  ratio,
  caption,
  index,
  priority = false,
  sizes = DEFAULT_SIZES,
}: PlateProps) {
  return (
    <figure>
      <div className="rounded-none border border-rule bg-paper p-s2">
        <div className={`relative ${RATIO_CLASS[ratio]} bg-fill-soft`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        </div>
      </div>
      <figcaption className="mt-s2 font-mono text-12 font-medium tracking-[0.08em] text-ink-muted">
        {index ? `${index} · ${caption}` : caption}
      </figcaption>
    </figure>
  );
}
