"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      text: "The Paneer Dori Kebab left us speechless. The atmospheric design cues replicate elite global Michelin standard spaces cleanly. Easily Mumbai’s top vegetarian luxury destination.",
      author: "Aishwarya R.",
      status: "Verified Patron"
    },
    {
      text: "Hosting my father's 60th birthday inside their private lounge segment was an absolute masterclass in luxury hospitality. Every single request was predicted beforehand flawlessly.",
      author: "Vikram Malhotra",
      status: "Premium Member"
    },
    {
      text: "The structural balance between contemporary global preparation processes and deep-rooted Indian comfort flavors is sheer culinary art. The Thetcha Naan Bombs are unmatched.",
      author: "Dr. Ananya Mehta",
      status: "Culinary Enthusiast"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#33160B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Metric Trust Cards Layout Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 border-l-2 border-[#C89B5A] pl-6 md:pl-8">
            <span className="text-xs uppercase tracking-[0.4em] text-[#C89B5A] block mb-2">Verified Acclaim</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#FFFDF8] font-light tracking-wide">
              The Standard <br />Of Excellence
            </h2>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            <div className="bg-[#2B1208]/40 border border-white/5 p-6 text-center backdrop-blur-sm">
              <span className="font-serif text-4xl md:text-5xl text-[#C89B5A] block mb-1 font-light">4.1 / 5</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#FFFDF8]/60">Google Verified Rating</span>
            </div>
            <div className="bg-[#2B1208]/40 border border-white/5 p-6 text-center backdrop-blur-sm">
              <span className="font-serif text-4xl md:text-5xl text-[#C89B5A] block mb-1 font-light">590+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#FFFDF8]/60">Elite Local Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Review Slider Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              key={idx}
              className="bg-[#2B1208]/80 border border-[#C89B5A]/10 p-8 flex flex-col justify-between relative"
            >
              <span className="font-serif text-5xl text-[#C89B5A]/10 absolute top-4 left-4 pointer-events-none select-none">“</span>
              <p className="text-[#F4E6C8]/80 text-sm font-sans font-light leading-relaxed italic mb-8 relative z-10">
                {rev.text}
              </p>
              <div>
                <div className="w-8 h-[1px] bg-[#C89B5A] mb-3" />
                <h4 className="font-serif text-lg text-[#FFFDF8] font-light tracking-wide">{rev.author}</h4>
                <span className="text-[10px] tracking-[0.15em] text-[#C89B5A] uppercase block mt-0.5">{rev.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}