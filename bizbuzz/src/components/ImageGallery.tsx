"use client";

import { useState } from 'react';
import Image from 'next/image';

const images = [
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1200&auto=format&fit=crop",
];

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src={images[currentImageIndex]}
                alt={`BizBuzz gallery image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
              
              {/* Navigation arrows */}
              <button 
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <button 
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
              Say Hi To Biz Buzz
            </h2>
            <div className="text-base md:text-lg text-gray-600 space-y-4">
              <p>
                BizBuzz is a nonprofit organization dedicated to teaching entrepreneurship and business skills to 3rd-8th grade students. Our interactive programs foster creativity, critical thinking, and financial literacy.
              </p>
              <p>
                Through hands-on projects and real-world business challenges, students learn to identify problems, create solutions, and build confidence in their abilities. We believe that entrepreneurial thinking is a valuable skill that prepares children for success in any future path.
              </p>
              <p>
                Our team of educators and business professionals is passionate about inspiring the next generation of innovators and leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery; 