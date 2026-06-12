"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Signature Dishes", href: "#dishes" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-[#2B1208]/90 backdrop-blur-xl border-b border-[#C89B5A]/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="flex flex-col items-start group">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-[#FFFDF8] font-light transition-colors group-hover:text-[#C89B5A]">
              FIR MILENGE
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#C89B5A] uppercase -mt-0.5 pl-0.5">
              MUMBAI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] text-[#FFFDF8]/80 hover:text-[#C89B5A] transition-colors relative py-2 group font-sans"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C89B5A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#reserve"
              className="relative inline-flex items-center justify-center px-6 py-3 border border-[#C89B5A]/40 overflow-hidden text-xs uppercase tracking-[0.2em] font-sans text-[#FFFDF8] group bg-transparent transition-all duration-300 hover:border-[#C89B5A]"
            >
              <span className="absolute inset-0 bg-[#C89B5A] scale-x-0 origin-left transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2B1208]">
                Reserve Table
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-[1px] bg-[#FFFDF8] transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`w-6 h-[1px] bg-[#FFFDF8] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[1px] bg-[#FFFDF8] transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#2B1208] flex flex-col justify-between p-8 pt-32"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B5A_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  key={item.name}
                >
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    href={item.href}
                    className="font-serif text-3xl text-[#FFFDF8] hover:text-[#C89B5A] block transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-8"
            >
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="#reserve"
                className="w-full text-center py-4 bg-[#C89B5A] text-[#2B1208] uppercase text-xs font-semibold tracking-[0.2em]"
              >
                Book An Experience
              </a>
              <div className="text-center text-xs tracking-[0.1em] text-[#F4E6C8]/40">
                Tulsi Pipe Rd, Lower Parel, Mumbai, Maharashtra 400013
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}