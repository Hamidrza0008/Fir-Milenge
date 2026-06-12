"use client";
import { motion } from "framer-motion";

export default function WhyUs() {
  const pillars = [
    {
      title: "100% Vegetarian Experience",
      desc: "An avant-garde exploration of pure vegetarian gastronomy, mapping heritage profiles into progressive epicurean masterpieces.",
      num: "01"
    },
    {
      title: "200+ Curated Dishes",
      desc: "An extensive catalog of culinary innovation, balancing complex authentic flavor matrices with breathtaking modernist artistry.",
      num: "02"
    },
    {
      title: "Celebration Destination",
      desc: "Meticulously designed environments synchronized perfectly for multi-generational milestones, private galas, and dynamic birthday fetes.",
      num: "03"
    },
    {
      title: "Family Friendly Dining",
      desc: "Ultra-premium hospitality layout prioritizing spatial comfort, creating an inclusive sanctuary for multi-generational lingering.",
      num: "04"
    },
    {
      title: "Premium Ambience",
      desc: "A rich interplay of cascading crystals, hand-finished walnut textures, architectural bespoke lighting, and premium Italian marble accents.",
      num: "05"
    },
    {
      title: "Highly Rated Experience",
      desc: "Validated daily by world travelers and local visionaries, cultivating consistent elite benchmarks for fine hospitality across Mumbai.",
      num: "06"
    }
  ];

  return (
    <section className="py-24 bg-[#2B1208] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(200,155,90,0.03)_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C89B5A] block mb-3">Uncompromising Standards</span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#FFFDF8] font-light tracking-wide">
            The Pillars of Fir Milenge
          </h2>
          <div className="w-16 h-[1px] bg-[#C89B5A] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -8 }}
              key={i}
              className="group border border-[#C89B5A]/10 bg-[#38190D]/40 p-10 relative flex flex-col justify-between transition-all duration-500 hover:border-[#C89B5A]/30 backdrop-blur-sm"
            >
              <div>
                <span className="font-serif text-sm tracking-widest text-[#C89B5A] block mb-6 transition-transform duration-500 group-hover:translate-x-1">
                  {item.num} //
                </span>
                <h3 className="font-serif text-2xl text-[#FFFDF8] mb-4 font-light tracking-wide transition-colors duration-300 group-hover:text-[#C89B5A]">
                  {item.title}
                </h3>
                <p className="text-[#F4E6C8]/70 text-sm leading-relaxed font-light font-sans">
                  {item.desc}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C89B5A]/20 transition-all duration-500 group-hover:w-full group-hover:to-[#C89B5A]/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}