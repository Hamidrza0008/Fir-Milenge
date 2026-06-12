"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPreview() {
  const categories = ["Indian", "Oriental", "Global", "Traditional Specialities", "Desserts"];

  const menuData = {
    Indian: [
      { name: "Avadh Paneer Khurchan", price: "₹725", desc: "Shredded artisanal tandoori cottage cheese hand-tossed with fresh tricolor bell peppers and vintage whole spices." },
      { name: "Dal Fir Milenge", price: "₹695", desc: "Slow-simmered black lentils trace cooked overnight for 24 hours over charcoal with churned white butter." },
      { name: "Subz Dum Pukht Biryani", price: "₹795", desc: "Seasonal high-altitude flora cooked sealed under dough with basmati rice grains infused with natural rosewater." }
    ],
    Oriental: [
      { name: "Water Chestnut Dumpling", price: "₹625", desc: "Translucent crystal skin pouches filled with crunchy sweet chestnut dice and micro-dosed purple chive gems." },
      { name: "Truffle Mushroom Fried Rice", price: "₹745", desc: "Wok-tossed premium short grains embedded with wild shiitake shards and finished with white truffle mist." },
      { name: "Exotic Greens in Umami Broth", price: "₹695", desc: "Flash-stepped baby bok choy and asparagus florets dressed in a proprietary dark soy master stock glaze." }
    ],
    Global: [
      { name: "Burrata & Heirloom Tart", price: "₹825", desc: "Creamy artisanal burrata ball balanced over marinated colorful heritage plum tomatoes on a puff base." },
      { name: "Wild Mushroom Risotto", price: "₹895", desc: "Creamy Acquerello rice prepared slowly with porcini dynamic extractions and freshly grated aged Parmigiano." },
      { name: "Avocado Sourdough Royale", price: "₹750", desc: "Whipped Haas avocado cream layered thoughtfully over house-baked signature sourdough charcoal slices." }
    ],
    "Traditional Specialities": [
      { name: "Shahi Tukda Mille-Feuille", price: "₹575", desc: "Crisp clarified butter crouton sheets layered horizontally with rich condensed milk rabri saffron elements." },
      { name: "Undhiyu Fusion Papdi", price: "₹650", desc: "Slow roasted premium winter root vegetables presented beautifully inside an open flat crisp pastry disk shell." },
      { name: "Dal Baati Ghee Confit", price: "₹725", desc: "Bespoke hard wheat dough spheres submerged fully inside warm hand-churned yellow organic A2 ghee pools." }
    ],
    Desserts: [
      { name: "Saffron Pistachio Caviar", price: "₹625", desc: "Modern spherical deconstruction of premium Kashmiri saffron cream accompanied by Iranian green pistachio paste." },
      { name: "Deconstructed Hazelnut Tart", price: "₹650", desc: "70% single origin dark chocolate ganache fluid combined beautifully with toasted Piedmont praline flakes." },
      { name: "Rose Petal Sorbet Ball", price: "₹495", desc: "Palate cleanser prepared carefully from organic wild Kannauj pink roses distilled freshly in house." }
    ]
  };

  const [activeTab, setActiveTab] = useState("Indian");

  return (
    <section id="menu" className="py-24 bg-[#2B1208] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C89B5A] block mb-3">Curated Gastronomy</span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#FFFDF8] font-light tracking-wide">
            The Menu Concept
          </h2>
          <div className="w-12 h-[1px] bg-[#C89B5A] mx-auto mt-4" />
        </div>

        {/* Premium Category Tab Links Layout */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 border-b border-white/5 pb-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-xs uppercase tracking-[0.2em] px-4 py-2 relative transition-colors duration-300 ${
                activeTab === cat ? "text-[#C89B5A]" : "text-[#FFFDF8]/60 hover:text-[#FFFDF8]"
              }`}
            >
              {cat}
              {activeTab === cat && (
                <motion.div 
                  layoutId="activeMenuTab" 
                  className="absolute bottom-[-25px] left-0 w-full h-[1px] bg-[#C89B5A]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Items Menu Panels Grid with Smooth Micro-animations */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
            >
              {menuData[activeTab].map((item, idx) => (
                <div key={idx} className="group flex flex-col justify-between pb-6 border-b border-[#C89B5A]/5">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-xl text-[#FFFDF8] group-hover:text-[#C89B5A] transition-colors duration-300 font-light tracking-wide">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg text-[#C89B5A] font-light pl-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[#F4E6C8]/60 text-xs font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Complete Catalog Action Button block */}
        <div className="text-center mt-16">
          <button className="relative inline-flex items-center justify-center px-10 py-4 border border-[#C89B5A] text-xs uppercase tracking-[0.25em] font-sans text-[#C89B5A] group overflow-hidden bg-transparent transition-all duration-300">
            <span className="absolute inset-0 bg-[#C89B5A] scale-y-0 origin-bottom transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:scale-y-100" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2B1208]">
              View Complete Menu
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}