"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const squareData = [
  { id: 1, src: "/hero_imgs/1.jpg" },
  { id: 2, src: "/hero_imgs/2.jpg" },
  { id: 3, src: "/hero_imgs/3.jpg" },
  { id: 4, src: "/hero_imgs/4.jpg" },
  { id: 5, src: "/hero_imgs/5.jpg" },
  { id: 6, src: "/hero_imgs/6.jpg" },
  { id: 7, src: "/hero_imgs/7.jpg" },
  { id: 8, src: "/hero_imgs/8.jpg" },
  { id: 9, src: "/hero_imgs/9.jpg" },
  { id: 10, src: "/hero_imgs/10.jpg" },
  { id: 11, src: "/hero_imgs/11.jpg" },
  { id: 12, src: "/hero_imgs/12.jpg" },
  { id: 13, src: "/hero_imgs/13.jpg" },
  { id: 14, src: "/hero_imgs/14.jpg" },
  { id: 15, src: "/hero_imgs/15.jpg" },
  { id: 16, src: "/hero_imgs/16.jpg" },
];

const shuffle = (array: typeof squareData) => {
  const newArray = [...array];
  let currentIndex = newArray.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(squareData);

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(shuffle(squareData));
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full relative overflow-hidden"
        >
          <Image
            src={sq.src}
            alt={`Grid image ${sq.id}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 25vw, 20vw"
            priority={sq.id <= 4}
          />
        </motion.div>
      ))}
    </div>
  );
};

const ShuffleHero = () => {
  return (
    <section className="w-full px-4 md:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
      <div>
        <span className="inline-block mb-6 px-4 py-2 bg-indigo-100 text-[#040037] font-medium rounded-full text-sm md:text-base">
          501(c)(3) Non-Profit Organization
        </span>
        <h1 className="text-6xl md:text-8xl font-bold text-[#040037] tracking-tight leading-[1] mb-6">
          BizBuzz <span className="text-[#38b6ff]">NFP</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#4B5563] font-light mb-8 leading-relaxed">
          Turning <span className="text-[#38b6ff] font-bold">imagination</span> into{" "}
          <span className="text-[#ffbf00] font-bold">innovation</span>{" "}
          via social entrepreneurship
        </p>
        <div className="flex gap-4 items-center">
          <Link href="/camps" className="bg-[#003166] text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all hover:bg-[#00254d] hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-200">
            Learn More
          </Link>
          <a href="#programs" className="text-[#4B5563] hover:text-[#38b6ff] font-medium text-lg transition-colors">
            View Programs →
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#003166]/20 to-[#38b6ff]/20 rounded-3xl blur-2xl" />
        <div className="relative">
          <ShuffleGrid />
        </div>
      </div>
    </section>
  );
};

export default ShuffleHero; 