"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Gallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Custom horizontal scroll simulation logic mapping track
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const galleryItems = [
    { title: "Bespoke Grand Chandeliers", subtitle: "Ambient Precision", img: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&q=80&w=1000" },
    { title: "The Imperial Main Dining Lounge", subtitle: "Grand Hospitality", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000" },
    { title: "Plush Velvet Premium Banquettes", subtitle: "Spatial Solitude", img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1000" },
    { title: "Warm Subterranean Earth Tones", subtitle: "Sensory Comfort", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000" },
    { title: "Bespoke Sculptural Decor Spaces", subtitle: "Visual Narrative", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000" }
  ];

  return (
    <section id="gallery" ref={targetRef} className="relative h-[300vh] bg-[#33160B]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Gallery Title Heading Area */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12 relative z-20">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C89B5A] block mb-2">Architectural Grandeur</span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#FFFDF8] font-light tracking-wide">
            The Interactive Ambience
          </h2>
        </div>

        {/* Horizontal Moving Window Container */}
        <div className="relative w-full flex items-center">
          <motion.div style={{ x: xTranslate }} className="flex gap-8 pl-6 md:pl-12 pr-24 w-max">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative w-[320px] sm:w-[450px] md:w-[600px] aspect-[16/10] overflow-hidden group border border-white/5 bg-[#2B1208]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89B5A] mb-1 font-sans">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#FFFDF8] font-light tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Static Progression Indicator Line */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-12 flex justify-end">
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              style={{ scaleX: scrollYProgress }} 
              className="absolute top-0 left-0 w-full h-full bg-[#C89B5A] origin-left"
            />
          </div>
        </div>

      </div>
    </section>
  );
}