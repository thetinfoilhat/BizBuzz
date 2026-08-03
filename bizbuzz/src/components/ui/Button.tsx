import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  /** Renders an `<a>` instead of a `<button>`. */
  href?: string;
  /** Opens in a new tab with `rel="noopener noreferrer"`. Every enrollment
   *  Google Form on this site is external and should set it. */
  external?: boolean;
  /** Set when the button sits inside `InvertedBand`. Swaps to the on-ink
   *  palette — without it, `secondary` renders text-ink on ink. */
  onInk?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

const BASE_CLASS =
  'inline-flex items-center justify-center rounded-control border px-s5 py-s3 font-display text-16 font-medium transition-transform duration-80 ease-out active:translate-y-px disabled:cursor-not-allowed disabled:bg-fill-soft disabled:text-ink-muted disabled:active:translate-y-0';

const VARIANT_CLASS: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'border-transparent bg-accent text-ink',
  secondary: 'border border-rule text-ink',
};

// On the inverted band the paper-surface variants disappear: `secondary` is
// text-ink on ink. These are the on-ink equivalents. Amber stays the primary
// fill — it is one of its five permitted roles and reads at 9.8:1 on ink.
const ON_INK_VARIANT_CLASS: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'border-transparent bg-accent text-ink',
  secondary: 'border border-on-ink-muted text-on-ink',
};

// No hover scale and no shadow change. The press is a 1px drop, and the focus
// ring comes from the base layer.
export default function Button({
  children,
  variant = 'primary',
  href,
  external = false,
  onInk = false,
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) {
  const palette = onInk ? ON_INK_VARIANT_CLASS : VARIANT_CLASS;
  const className = `${BASE_CLASS} ${palette[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
}
