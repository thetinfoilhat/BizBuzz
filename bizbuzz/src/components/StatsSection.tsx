"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "build today's ideas for tomorrow's problems.",
  "lead lasting change in their communities.",
  "discover their unique voices, and use them.",
  "create confidence through collaboration.",
  "transform their imagination into innovation."
];

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  imageSrc: string;
  color: string;
}

const StatItem = ({ value, label, prefix = "", suffix = "", imageSrc, color }: StatItemProps) => {
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
    <div ref={ref} className="text-center px-4 transform hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden shadow-xl">
        <Image
          src={imageSrc}
          alt={label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <div className={`text-6xl md:text-7xl font-bold mb-3`} style={{ color }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-black font-medium text-2xl md:text-3xl">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const [index, setIndex] = useState(0);
  const [verbElement, setVerbElement] = useState("");

  useEffect(() => {
    const verbs = ["build", "lead", "discover", "create", "transform"];
    setVerbElement(verbs[index]);
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-24">
          <div className="text-center" style={{ marginLeft: "-22%" }}>
            <div className="inline-block relative">
              <div className="text-[2.5rem] whitespace-nowrap">
                <span className="text-[#003166] font-bold">We help students</span>
                <span className="inline-block ml-2 w-[600px] text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block whitespace-nowrap"
                    >
                      <span className="text-[#38b6ff] font-bold">{verbElement}</span>
                      <span className="text-[#003166] font-normal">{phrases[index].substring(verbElement.length)}</span>
                    </motion.div>
                  </AnimatePresence>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <StatItem 
            value={753} 
            label="Students"
            imageSrc="/stats/students.jpg"
            color="#FFBF00"
          />
          <StatItem 
            value={65} 
            label="Schools"
            imageSrc="/stats/schools.png"
            color="#E69F16"
          />
          <StatItem 
            value={5267} 
            label="Dollars Raised"
            prefix="$"
            imageSrc="/stats/money.jpg"
            color="#CD8F20"
          />
          <StatItem 
            value={507} 
            label="Hours Taught"
            imageSrc="/stats/hours.jpg"
            color="#BD7825"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 