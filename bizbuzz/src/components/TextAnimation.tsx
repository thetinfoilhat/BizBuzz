"use client";

import { useState, useEffect } from 'react';

const TextAnimation = () => {
  const phrases = [
    "empower authentic, creative learning via entrepreneurship.",
    "find their voices, and use them.",
    "innovate tomorrow's solutions for today's problems."
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const phraseChangeInterval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => 
          prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
        );
        
        setTimeout(() => {
          setIsVisible(true);
        }, 500);
      }, 500);
    }, 4000);
    
    return () => clearInterval(phraseChangeInterval);
  }, [phrases.length]);
  
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold text-[#0f172a] mb-12">
            We help students
          </h2>
          
          <div className="mb-6">
            <span className="text-xl md:text-2xl font-medium text-[#64748b]">
              helping 3rd-8th graders:
            </span>
          </div>
          
          <div className="h-24 flex items-start">
            <div 
              className={`text-2xl md:text-4xl font-bold text-[#6366F1] transition-opacity duration-500 leading-tight ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {phrases[currentPhraseIndex]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAnimation; 