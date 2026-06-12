"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-40 flex items-center justify-center bg-[#2B1208] overflow-hidden text-center">
      
      {/* Background Image Panel */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1208] via-[#2B1208]/70 to-[#2B1208] z-10" />
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1600"
          alt="Luxury Table Arrangement Close up"
          className="w-full h-full object-cover fixed-attachment opacity-30 scale-105"
        />
      </div>

      <div className="relative z-20 max-w-4xl px-6 flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.4em] text-[#C89B5A] block mb-6 font-sans">An Invitation</span>
        
        <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#FFFDF8] font-light tracking-wide leading-tight mb-12 max-w-3xl">
          “Some Places Serve Food. <br />We Create <span className="italic text-[#C89B5A]">Memories</span>.”
        </h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href="#reserve"
            className="inline-block bg-[#C89B5A] text-[#2B1208] text-xs font-semibold uppercase tracking-[0.3em] px-12 py-5 shadow-2xl hover:bg-[#FFFDF8] transition-colors duration-300"
          >
            Reserve Your Experience
          </a>
        </motion.div>
      </div>

    </section>
  );
}