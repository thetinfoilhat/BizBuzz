"use client";

import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatItem = ({ value, label, prefix = "", suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    
    const animateCount = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const progress = Math.min(runtime / duration, 1);
      
      // Ease out cubic formula for smoother animation at the end
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(easedProgress * value);
      setCount(currentCount);
      
      if (runtime < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animateCount);
    
    return () => {
      // Cleanup
    };
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium text-lg md:text-xl">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full bg-gray-50 py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Impact
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem 
            value={634} 
            label="Students" 
          />
          <StatItem 
            value={63} 
            label="Schools" 
          />
          <StatItem 
            value={6267} 
            label="Dollars Raised"
            prefix="$" 
          />
          <StatItem 
            value={504} 
            label="Hours of Instruction" 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 