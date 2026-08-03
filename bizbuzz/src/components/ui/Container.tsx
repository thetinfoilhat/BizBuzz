import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// 1240px max, 24px of padding on mobile and 40px from 900px up. Every surface
// on every route sits inside one of these.
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-container px-s5 min-[900px]:px-s7 ${className}`}>
      {children}
    </div>
  );
}
