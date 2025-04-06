"use client";

import { useState } from 'react';
import Image from 'next/image';

const images = [
  "/image_gallery/1.jpg",
  "/image_gallery/2.jpg",
  "/image_gallery/3.jpg",
  "/image_gallery/4.jpg",
  "/image_gallery/5.jpg"
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Gallery */}
          <div className="w-full md:w-[70%] relative">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={images[currentImageIndex]}
                alt={`BizBuzz gallery image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
              
              {/* Navigation arrows */}
              <button 
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <button 
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-[30%] mt-8 md:mt-0">
            <h2 className="text-3xl md:text-3xl font-bold text-[#0f172a] mb-6">
              Build Biz. Bring Buzz.
            </h2>
            <div className="text-base md:text-lg text-gray-600 space-y-4">
              <p>
                BizBuzz NFP is a 501(c)(3) nonprofit organization based in Naperville, Illinois. Built on the belief that every student deserves access to entrepreneurial education that helps them find their ideas—and the confidence to share them—we offer a completely free platform designed by students, for students. In a city where 90% of K-8 schools offer no business education, we set out in April 2024 to change that.

              </p>
      
              <p>
              Let’s turn imagination into innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery; 