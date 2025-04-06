"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "build tomorrow's businesses",
  "solve real-world problems",
  "develop entrepreneurial skills",
  "create social impact",
  "innovate for the future"
];

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  imageSrc: string;
  color?: "blue" | "yellow";
}

const StatItem = ({ value, label, prefix = "", suffix = "", imageSrc, color = "blue" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const colorClass = color === "blue" 
    ? "text-[#38b6ff]" 
    : "text-[#ffbf00]";

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

    const duration = 2000;
    const startTime = performance.now();
    
    const animateCount = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const progress = Math.min(runtime / duration, 1);
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
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="relative w-full h-52 mb-6 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className={`text-5xl md:text-6xl font-bold ${colorClass} mb-2`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium text-xl md:text-2xl">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-50 py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-24">
          <div className="max-w-5xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold flex items-center">
              <span className="text-[#1e293b]">We help students</span>
              <div className="relative ml-3 flex items-baseline" style={{ minWidth: "300px", height: "1.2em" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 bg-gradient-to-r from-[#6366F1] to-[#38b6ff] text-transparent bg-clip-text whitespace-nowrap"
                    style={{ bottom: '0.05em' }}
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem 
            value={634} 
            label="Students"
            imageSrc="/stats/students.jpg"
            color="blue"
          />
          <StatItem 
            value={63} 
            label="Schools"
            imageSrc="/stats/schools.png"
            color="yellow"
          />
          <StatItem 
            value={6267} 
            label="Dollars Raised"
            prefix="$"
            imageSrc="/stats/money.jpg"
            color="blue"
          />
          <StatItem 
            value={504} 
            label="Hours Taught"
            imageSrc="/stats/hours.jpg"
            color="yellow"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 