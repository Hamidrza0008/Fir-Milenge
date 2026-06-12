"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Reservation() {
  const [formData, setFormData] = useState({ name: "", phone: "", guests: "2", date: "", time: "19:00" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // तुम्हारा WhatsApp नंबर यहाँ सेट है
  const MY_PHONE_NUMBER = "919599424493"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // कस्टमर की डिटेल्स का WhatsApp मैसेज फॉर्मेट बनाना
    const message = `*New Reservation Request - Fir Milenge*%0A%0A` +
                    `*Name:* ${formData.name}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*Guests:* ${formData.guests} Guests%0A` +
                    `*Date:* ${formData.date}%0A` +
                    `*Time:* ${formData.time} PM`;

    // WhatsApp API URL खोलना (यह तुरंत चैट विंडो पर ले जाएगा)
    const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${message}`;
    
    // थोड़ा रुककर WhatsApp पर रीडायरेक्ट करना ताकि फॉर्म का सक्सेस एनीमेशन दिखे
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1200);

    // 4 सेकंड बाद फॉर्म रीसेट
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", guests: "2", date: "", time: "19:00" });
    }, 4000);
  };

  return (
    <section id="reserve" className="py-28 bg-[#2B1208] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(200,155,90,0.02)_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.5em] text-[#C89B5A] block mb-3 pl-[0.5em]">Secure Your Table</span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#FFFDF8] font-light tracking-wide">
            Book An Experience
          </h2>
          <p className="text-[#F4E6C8]/60 text-xs font-sans max-w-sm mx-auto mt-4 font-light">
            Please fill out the precise allocation details below. Our maître d’ will confirm your table arrangement via WhatsApp shortly.
          </p>
        </div>

        <div className="bg-[#33160B]/60 border border-[#C89B5A]/10 p-8 md:p-12 relative backdrop-blur-md">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="bookingForm"
                onSubmit={handleSubmit} 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative group flex flex-col">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-[#FFFDF8] placeholder-white/30 focus:outline-none focus:border-[#C89B5A] transition-colors duration-300 font-sans font-light"
                  />
                </div>

                <div className="relative group flex flex-col">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-sm text-[#FFFDF8] placeholder-white/30 focus:outline-none focus:border-[#C89B5A] transition-colors duration-300 font-sans font-light"
                  />
                </div>

                <div className="relative group flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#C89B5A] mb-1 font-sans">Number of Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-[#FFFDF8] focus:outline-none focus:border-[#C89B5A] transition-colors duration-300 font-sans font-light"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n} className="bg-[#2B1208] text-[#FFFDF8]">{n} Guests</option>
                    ))}
                  </select>
                </div>

                <div className="relative group flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#C89B5A] mb-1 font-sans">Reservation Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 py-1.5 text-sm text-[#FFFDF8] focus:outline-none focus:border-[#C89B5A] transition-colors duration-300 font-sans font-light"
                  />
                </div>

                <div className="relative group flex flex-col md:col-span-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#C89B5A] mb-1 font-sans">Preferred Seating Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-[#FFFDF8] focus:outline-none focus:border-[#C89B5A] transition-colors duration-300 font-sans font-light"
                  >
                    {["12:00", "13:30", "15:00", "19:00", "20:30", "22:00"].map(t => (
                      <option key={t} value={t} className="bg-[#2B1208] text-[#FFFDF8]">{t} PM Seating</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#C89B5A] text-[#2B1208] uppercase text-xs font-semibold tracking-[0.3em] py-5 transition-all duration-300 hover:bg-[#FFFDF8]"
                  >
                    Request Reservation Slot
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="successMessage"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-[1px] bg-[#C89B5A] mb-6" />
                <h3 className="font-serif text-3xl text-[#C89B5A] mb-4 font-light tracking-wide">Transmission Initiated</h3>
                <p className="text-[#FFFDF8]/80 text-sm font-sans max-w-md leading-relaxed font-light">
                  Thank you, <span className="text-[#C89B5A] font-semibold">{formData.name}</span>. Connecting to our hosting concierge via WhatsApp to confirm your table...
                </p>
                <div className="w-16 h-[1px] bg-[#C89B5A] mt-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Luxury WhatsApp Floating Icon */}
      <a
        href={`https://wa.me/${MY_PHONE_NUMBER}?text=Hello%20Fir%20Milenge%2C%20I%20want%20to%20know%20more%20about%20table%20bookings.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[999] bg-[#C89B5A] text-[#2B1208] p-4 rounded-full shadow-2xl hover:bg-[#FFFDF8] hover:scale-110 transition-all duration-300 group"
        title="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 transition-transform group-hover:rotate-12"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.755.002-2.609-1.012-5.062-2.859-6.91C16.63 2.093 14.177 1.08 11.57 1.081 6.132 1.081 1.71 5.451 1.707 10.836c-.001 1.674.452 3.301 1.312 4.715l-.991 3.619 3.71-.973zm11.367-7.352c-.312-.156-1.847-.91-2.128-1.012-.282-.102-.487-.156-.692.156-.204.311-.79.156-.968 1.16-.178.102-.356.156-.668.001-.312-.156-1.316-.486-2.507-1.547-.927-.827-1.553-1.849-1.735-2.16-.182-.312-.019-.481.137-.636.141-.14.312-.364.468-.547.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.547-.078-.156-.692-1.666-.949-2.287-.25-.601-.504-.52-.692-.53-.178-.008-.383-.01-.588-.01-.205 0-.538.078-.82.383-.282.312-1.077 1.053-1.077 2.566 0 1.513 1.102 2.977 1.256 3.185.154.208 2.17 3.313 5.257 4.646.734.317 1.307.507 1.753.649.738.234 1.41.2 1.942.121.593-.088 1.847-.755 2.109-1.449.262-.693.262-1.288.184-1.411-.078-.123-.282-.195-.594-.351z"/>
        </svg>
      </a>
    </section>
  );
}