import React, { useState, useEffect } from 'react';

interface HeroCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
  images, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full aspect-square lg:aspect-[4/4.5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-text/50 to-transparent"></div>

      {/* Info Box */}
      {/* <div className="absolute bottom-2 left-6 right-6 p-6 bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl flex items-center justify-between">
        <div>
          <p className="text-dark-text/60 text-[10px] font-bold uppercase tracking-widest">Stok Ready</p>
          <h3 className="text-dark-text text-lg font-bold">Bahan Baku & Snack</h3>
        </div>
        <span className="bg-secondary text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm">Grosir</span>
      </div> */}

      {/* Dots Indicator - Progress Bars */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-6 right-6 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-0.5 flex-1 HeroCarousel transition-all ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
