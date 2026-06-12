"use client";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// 100% Pure Premium Family & Couple Fine Dining Images
const HERO_IMAGES = [
  // Image 1: Classy candle-lit luxury dinner setup (Perfect for families & couples)
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000", 
  // Image 2: Sophisticated, cozy warm ambient restaurant interior
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2000", 
  // Image 3: Elegant fine dining table arrangement with glowing warm lights
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2000"
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Slide state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Parallax properties
  const yBg = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1, 1.1]);

  // Slideshow interval (4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#2B1208]">
      
      {/* Animated Slideshow Container */}
      <motion.div 
        style={{ y: yBg, scale: scaleBg }} 
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
      >
        {/* Deep Warm & Dark Overlays for ultimate luxury contrast and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1208] via-[#2B1208]/40 to-[#2B1208]/70 z-10" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        {/* Crossfade Image Slider */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Premium Vegetarian Fine Dining Experience"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      {/* Floating Light Ray Particle FX */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#C89B5A]/20 to-transparent blur-[160px] animate-pulse duration-10000" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#7A3E1D]/40 to-transparent blur-[140px]" />
      </div>

      {/* Content Area */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="relative z-30 text-center max-w-4xl px-6 flex flex-col items-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-xs uppercase tracking-[0.5em] text-[#C89B5A] mb-6 font-sans block pl-[0.5em]"
        >
          Where Food Meets Memories
        </motion.span>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl text-[#FFFDF8] font-light tracking-[0.18em] leading-none mb-8 select-none">
          FIR MILENGE
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#F4E6C8]/80 max-w-2xl font-light leading-relaxed mb-12"
        >
          Experience unforgettable vegetarian fine dining crafted for celebrations, conversations, and moments that deserve to be remembered.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full sm:w-auto"
        >
          <a
            href="#reserve"
            className="w-full sm:w-64 bg-[#C89B5A] text-[#2B1208] text-xs font-semibold uppercase tracking-[0.25em] px-8 py-5 transition-all duration-300 shadow-2xl hover:bg-[#FFFDF8] text-center"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="w-full sm:w-64 border border-[#FFFDF8]/20 bg-black/20 text-[#FFFDF8] text-xs font-semibold uppercase tracking-[0.25em] px-8 py-5 backdrop-blur-md transition-all duration-300 hover:border-[#C89B5A] hover:bg-black/40 text-center"
          >
            Explore Menu
          </a>
        </motion.div>
      </motion.div>

      {/* Luxury Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 select-none"
      >
        <span className="text-[9px] tracking-[0.4em] text-[#FFFDF8]/40 uppercase pl-[0.4em]">Scroll Down</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#C89B5A] to-transparent" />
      </motion.div>
    </section>
  );
}