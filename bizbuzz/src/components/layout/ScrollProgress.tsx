"use client";

import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  color?: string;
}

export default function ScrollProgress({ color = '#38b6ff' }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-1 origin-left z-40"
      style={{ 
        scaleX,
        backgroundColor: color
      }}
    />
  );
}

