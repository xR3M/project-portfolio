import React, { useState, useEffect, useCallback } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function PortfolioSlider() {
  // Define slides with a `type` property (either 'image' or 'video')
  const slides = [
    { type: 'image', url: '/Images/Ontario Rivers.png' },
    { type: 'video', url: '/Videos/Project Mexico City.mp4' },
    { type: 'image', url: '/Images/unwrapped_interferogram.png' },
    // You can add more slides as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Advance to the next slide.
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  // Go to the previous slide.
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  // Auto-advance the slider every 6 seconds.
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Jump to a specific slide when clicking the dot.
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative max-w-[1000px] mx-auto group">
      {/* Conditionally render an image or video */}
      {slides[currentIndex].type === 'video' ? (
        <video
          className="w-full h-auto max-h-[400px] object-contain rounded-2xl"
          autoPlay
          muted
          loop
          playsInline
          // Uncomment controls if you want them for debugging:
          // controls
        >
          <source src={slides[currentIndex].url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto max-h-[400px] object-contain rounded-2xl"
        />
      )}

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-1/2 left-5 -translate-y-1/2 text-2xl p-2 bg-black/20 text-white cursor-pointer rounded-full"
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-1/2 right-5 -translate-y-1/2 text-2xl p-2 bg-black/20 text-white cursor-pointer rounded-full"
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`text-2xl cursor-pointer ${index === currentIndex ? 'text-white' : 'text-gray-400'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
