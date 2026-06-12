"use client";
import { motion } from "framer-motion";

export default function SignatureDishes() {
  const dishes = [
    {
      title: "Paneer Dori Kebab",
      image: "https://media.istockphoto.com/id/1290444593/photo/paneer-tikka-masala-flame-frilled-on-skewer.jpg?s=612x612&w=0&k=20&c=j9fSo8FaXsHAPaYOnQh1lQ6Gc3SPOBlNu5Fxg0KNsAg=",
      desc: "Silken cotton-wrapped cottage cheese threads infused with smoked royal cumin and fresh artisanal white truffles.",
      tag: "Chef Recommendation",
      ingredients: ["Artisanal Paneer", "White Truffle Oil", "Smoked Shahi Cumin"]
    },
    {
      title: "Thetcha Three Cheese Naan Bombs",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800",
      desc: "Bespoke tandoor-baked dynamic crusts filled with aging cheddar, mozzarella, and a robust Maharashtrian green chili char glaze.",
      tag: "House Special",
      ingredients: ["Kolhapuri Thecha", "Aged English Cheddar", "Liquid Golden Butter"]
    },
    {
      title: "Blue Pea Rice & Coconut Curry",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
      desc: "Organic butterfly pea blossom steeped jasmine grains presented alongside a velvety premium botanical Singapore lemongrass broth.",
      tag: "Trending",
      ingredients: ["Butterfly Pea Flower", "Thai Coconut Milk", "Wild Lemongrass Extract"]
    },
    {
      title: "Pav Bhaji Fondue",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800",
      desc: "A rich emulsion of heirloom Mumbai root masalas served in custom earthenware with toasted miniature brioche croutons.",
      tag: "Signature",
      ingredients: ["Heirloom Spices", "Cultured Butter Brioche", "Emmental Gratin"]
    },
    {
      title: "Karare Chole Biryani",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=800",
      desc: "Flash-fried spiced chickpeas embedded into hyper-aged basmati layers fragrant with high-altitude vetiver and mint.",
      tag: "Imperial Craft",
      ingredients: ["Crispy Chickpeas", "2-Year Aged Basmati", "Natural Vetiver Oil"]
    },
    {
      title: "Lotus Biscoff Tres Leches",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800",
      desc: "Light sponge cake soaked comprehensively in a luxurious three-milk matrix reduction, heavily topped with Biscoff crumbs.",
      tag: "Grand Finale",
      ingredients: ["Lotus Cookie Butter", "Evaporated Organic Milk", "Chantilly Cream"]
    }
  ];

  return (
    <section id="dishes" className="py-24 bg-[#33160B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#C89B5A] block mb-3">Epicurean Showpieces</span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#FFFDF8] font-light tracking-wide">
              The Signature Flight
            </h2>
          </div>
          <p className="text-[#F4E6C8]/60 max-w-md text-sm leading-relaxed font-light">
            Every dish is an exclusive sensory concept narrative synthesized by our kitchen culinary designers, breaking traditional borders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dishes.map((dish, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
              key={idx}
              className="bg-[#2B1208]/60 border border-[#C89B5A]/10 group overflow-hidden flex flex-col h-full hover:border-[#C89B5A]/30 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1208] via-transparent to-transparent z-10 opacity-60" />
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-[#2B1208] text-[#C89B5A] border border-[#C89B5A]/20 text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 z-20">
                  {dish.tag}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between bg-gradient-to-b from-transparent to-[#2B1208]/40">
                <div>
                  <h3 className="font-serif text-2xl text-[#FFFDF8] font-light tracking-wide mb-3 group-hover:text-[#C89B5A] transition-colors duration-300">
                    {dish.title}
                  </h3>
                  <p className="text-[#F4E6C8]/70 text-xs leading-relaxed font-light mb-6">
                    {dish.desc}
                  </p>
                </div>

                <div>
                  <div className="w-full h-[1px] bg-[#C89B5A]/10 my-4" />
                  <div className="flex flex-wrap gap-1.5">
                    {dish.ingredients.map((ing, i) => (
                      <span key={i} className="text-[10px] bg-black/30 border border-white/5 text-[#FFFDF8]/60 px-2 py-1 rounded-sm font-sans font-light">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}