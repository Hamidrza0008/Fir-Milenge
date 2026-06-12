"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1C0A04] border-t border-[#C89B5A]/10 text-[#FFFDF8]/80 font-sans font-light text-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col items-start">
            <span className="font-serif text-2xl tracking-[0.15em] text-[#FFFDF8] font-light mb-4">
              FIR MILENGE
            </span>
            <p className="text-[#F4E6C8]/50 text-xs leading-relaxed max-w-xs mb-6">
              A premium vegetarian fine-dining concept engineered around sensory memories, architectural symmetry, and uncompromising hospitality benchmarks.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "TripAdvisor"].map((sm) => (
                <a key={sm} href="#" className="text-xs uppercase tracking-widest text-[#C89B5A] hover:text-[#FFFDF8] transition-colors">
                  {sm}
                </a>
              ))}
            </div>
          </div>

          {/* Corrected Address Details block */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C89B5A] font-semibold mb-6">The Estate</h4>
            <p className="text-xs leading-relaxed text-[#F4E6C8]/70 max-w-[260px]">
              Rajanpara Flamingos 102, <br />
              Pice of Mind Center, New Link Rd, <br />
              Jai Janata Nagar, Malad West, <br />
              Mumbai, Maharashtra 400064
            </p>
            <p className="text-xs text-[#C89B5A] mt-4 font-semibold">
              T: +91 95994 24493
            </p>
          </div>

          {/* Opening Hours list block */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C89B5A] font-semibold mb-6">Hours of Operation</h4>
            <ul className="space-y-3 text-xs text-[#F4E6C8]/70">
              <li className="flex justify-between"><span>Lunch Seating:</span> <span>12:00 PM – 04:00 PM</span></li>
              <li className="flex justify-between"><span>Dinner Seating:</span> <span>07:00 PM – 12:00 AM</span></li>
              <li className="text-[#C89B5A] italic pt-1">Open daily including national milestones.</li>
            </ul>
          </div>

          {/* Live Google Map pointing to Malad West Address */}
          <div className="h-44 w-full border border-[#C89B5A]/20 relative overflow-hidden grayscale contrast-[1.1] opacity-70 hover:opacity-100 transition-all duration-500 rounded-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.175153246835!2d72.8336329758456!3d19.208272947141073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7261a8f902b%3A0x67307908b8b0e505!2sJai%20Janata%20Nagar%2C%20Malad%20West%2C%20Mumbai%2C%20Maharashtra%20400064!5e0!3m2!1sen!2sin!4v1718182500000!5m2!1sen!2sin" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Closing Legal Signature block */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] tracking-wider text-[#F4E6C8]/30">
          <p>© 2026 Fir Milenge Hospitality Group India Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#FFFDF8]">Privacy Framework</a>
            <a href="#" className="hover:text-[#FFFDF8]">Milestone Booking Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}