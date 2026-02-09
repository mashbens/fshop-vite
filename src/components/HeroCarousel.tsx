
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images, autoPlayInterval = 6000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  return (
    <div className="relative w-full aspect-[3/5] lg:aspect-square overflow-hidden rounded-[1rem] lg:rounded-[4rem] shadow-1xl bg-dark-text/5 border-[6px] border-white ring-1 ring-black/5">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-text/30 via-transparent to-transparent z-10" />
          <motion.img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2, rotate: 1 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 7, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating Info Tag */}
      {/* <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 right-8 z-20 bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl shadow-xl border border-primary/10 hidden md:block"
      >
        <div className="flex flex-col items-center">
          <span className="text-primary font-black text-3xl leading-none">#1</span>
          <span className="text-[10px] font-bold text-dark-text/60 uppercase tracking-widest mt-1">Jabodetabek</span>
        </div>
      </motion.div> */}

      {/* Modern Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3 px-6 py-3 bg-black/10 backdrop-blur-md rounded-full border border-white/20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative h-1.5 focus:outline-none"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className={`h-full transition-all duration-700 rounded-full ${
              i === index ? 'w-10 bg-white' : 'w-2 bg-white/40 group-hover:bg-white/60'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
