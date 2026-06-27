import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Categories from "./Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Stats from "../components/Stats";
import Features from "../components/Features";
import CTA from "../components/CTA";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* CATEGORIES */}
      <Categories />

      {/* FEATURED PRODUCTS */}
      <FeaturedProducts />

      {/* STATS */}
      <Stats />

      {/* FEATURES */}
      <Features />

{/* BRANDS */}
      <Brands />
      
      {/* CALL TO ACTION */}
      <CTA />

      {/* WHATSAPP FLOAT */}
      <FloatingWhatsapp />
    </>
  );
}