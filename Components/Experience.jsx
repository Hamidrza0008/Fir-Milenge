"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    { 
      tag: "Milestones", 
      title: "Family Gatherings", 
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000" // Luxury grand restaurant table dining
    },
    { 
      tag: "Celebration", 
      title: "Birthday Soirées", 
      img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=1000" // Elegant fine dining table celebration setup
    },
    { 
      tag: "Reunions", 
      title: "Friends Meetups", 
      img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000" // Sophisticated restaurant lounge & seating
    },
    { 
      tag: "Romance", 
      title: "Intimate Date Nights", 
      img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1000" // Candle-lit romantic couple table setting
    }
  ];

  return (
    <section id="experience" className="py-32 bg-[#2B1208] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.4em] text-[#C89B5A] block mb-4">Emotional Hospitality</span>
            <h2 className="font-serif text-5xl md:text-7xl text-[#FFFDF8] font-light tracking-wide leading-[1.1]">
              More Than <br /><span className="italic text-[#C89B5A]">A Masterful Meal</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#F4E6C8]/80 text-base leading-relaxed font-light">
              We construct exquisite architectural, emotional landscapes. Fir Milenge operates as a living canvas where multi-layered flavors align flawlessly with laughter, milestone announcements, and shared structural human connections.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.25, 1, 0.5, 1] }}
              key={idx}
              className="group relative h-[450px] overflow-hidden flex flex-col justify-end p-8 border border-white/5 bg-black/10"
            >
              {/* Dark Gradient Overlay for flawless text contrast */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#2B1208] via-[#2B1208]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Premium Image */}
              <img
                src={exp.img}
                alt={exp.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Content Card Details */}
              <div className="relative z-20 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C89B5A] block mb-2 font-sans">
                  {exp.tag}
                </span>
                <h3 className="font-serif text-2xl text-[#FFFDF8] font-light tracking-wide">
                  {exp.title}
                </h3>
                <div className="h-[1px] bg-[#C89B5A] w-0 group-hover:w-16 transition-all duration-500 mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}