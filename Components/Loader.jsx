"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // रैंडम डॉट्स जेनरेटर
    const generatedDots = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 4,
    }));
    setDots(generatedDots);

    // 🔒 जब लोडर एक्टिव हो, तब स्क्रॉल डिसेबल करो
    document.body.style.overflow = "hidden";

    // 3.5 सेकंड का टाइमर
    const timer = setTimeout(() => {
      setLoading(false);
      // 🔓 लोडिंग खत्म होते ही स्क्रॉल वापस इनेबल करो
      document.body.style.overflow = "unset";
    }, 3500);

    // क्लीनअप फंक्शन: अगर कॉम्पोनेंट अनमाउंट हो तो भी स्क्रॉल लॉक न फंसा रहे
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          className="fixed inset-0 z-[9999] bg-[#2B1208] flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Ambient Golden Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C89B5A] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
          
          {/* Decorative Fine-Dining Particle Background Sim */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {dots.map((dot) => (
              <motion.div
                key={dot.id}
                className="absolute w-1 h-1 bg-[#C89B5A] rounded-full"
                style={{
                  top: dot.top,
                  left: dot.left,
                }}
                animate={{
                  y: [0, -60, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: dot.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-serif text-5xl md:text-7xl tracking-[0.25em] text-[#FFFDF8] font-light relative">
                FIR MILENGE
                <motion.span 
                  className="absolute -inset-1 block bg-gradient-to-r from-transparent via-[#C89B5A]/20 to-transparent blur-sm"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </h1>
              <motion.div 
                className="h-[1px] bg-[#C89B5A] mt-4 mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ delay: 0.6, duration: 1.5, ease: "easeInOut" }}
              />
              <p className="font-serif italic text-[#C89B5A] tracking-[0.4em] text-xs uppercase mt-3 pl-[0.4em]">
                Fine Dining
              </p>
            </motion.div>

            {/* Subtext Loader */}
            <motion.div
              className="mt-16 flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[#F4E6C8]/60 font-light font-sans">
                Preparing Your Table
              </span>
              <div className="w-40 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#C89B5A]"
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: "40%" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}