import Loader from "@/Components/Loader";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import WhyUs from "@/Components/WhyUs"; // 
import SignatureDishes from "@/Components/SignatureDishes";
import Experience from "@/Components/Experience";
import Gallery from "@/Components/Gallery";
import MenuPreview from "@/Components/MenuPreview";
import Testimonials from "@/Components/Testimonials";
import Reservation from "@/Components/Reservation";
import CTA from "@/Components/CTA"; // 
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Fir Milenge | Luxury Vegetarian Fine Dining Restaurant Mumbai",
  description: "Experience the pinnacle of premium vegetarian fine dining at Fir Milenge, Lower Parel, Mumbai. Crafted beautifully for families, celebrations, and unforgettable culinary moments.",
  keywords: ["Fir Milenge", "Luxury restaurant Mumbai", "Vegetarian fine dining Mumbai", "Premium restaurants Lower Parel", "Best family restaurant Mumbai"],
  openGraph: {
    title: "Fir Milenge | Luxury Vegetarian Fine Dining Mumbai",
    description: "Immersive avant-garde vegetarian gastronomy at Mumbai's premier fine dining destination.",
    type: "website",
    url: "https://firmilenge.com",
    images: [{ url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200" }],
  },
};

export default function Page() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant", // यहाँ 'website' से बदलकर 'Restaurant' किया ताकि गूगल सर्च को पता चले ये ढाबा/रेस्टोरेंट है
    "name": "Fir Milenge",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, Kamala Mills Compound, Tulsi Pipe Rd, Lower Parel",
      "addressLocality": "Mumbai",
      "addressRegion": "MH",
      "postalCode": "400013",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.9953",
      "longitude": "72.8271"
    },
    "telephone": "+912287654321",
    "servesCuisine": ["Vegetarian", "Fine Dining", "Indian", "Global Fusion"],
    "priceRange": "$$$$",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <Loader />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <WhyUs />
        <Experience />
        <SignatureDishes />
        <Gallery />
        <MenuPreview />
        <Testimonials />
        <Reservation />
        <CTA/>
      </main>
      <Footer />
    </>
  );
}