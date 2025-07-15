import React, { useState, useEffect } from 'react';
import { banner, banner2 } from '../assets';

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = [banner, banner2];

  // Minimum swipe distance required
  const minSwipeDistance = 50;

  // Debug: Check if images are loaded
  useEffect(() => {
    console.log('Banner images:', images);
    if (images.length > 0 && images[0]) {
      setImagesLoaded(true);
    }
  }, [images]);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [images.length, imagesLoaded]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white mt-14 sm:mt-24 md:mt-20">
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
        <div
          className="relative w-full h-full mt-[49px] cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images && images.length > 0 && images[0] ? (
            images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Barcode Solutions Banner ${index + 1}`}
                  className="w-full h-full object-contain sm:object-cover object-center"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  onLoad={() => console.log(`Banner image ${index + 1} loaded successfully`)}
                  onError={(e) => {
                    console.error(`Failed to load banner image ${index + 1}:`, image);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
              <div className="text-center text-white p-4 sm:p-6 md:p-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                  S.R.S.B. Barcode Solutions
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 mb-4 sm:mb-6">
                  Professional Barcode Solutions for Your Business
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                  <button className="bg-white text-indigo-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
                    Get Started
                  </button>
                  <button className="border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              aria-label="Previous slide"
              tabIndex={0}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              aria-label="Next slide"
              tabIndex={0}
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm ${
                  index === currentSlide
                    ? 'bg-white shadow-lg scale-110'
                    : 'bg-white/60 hover:bg-white/80 hover:scale-105'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                tabIndex={0}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeBanner;