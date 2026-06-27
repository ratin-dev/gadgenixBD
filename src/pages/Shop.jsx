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
      {/* FEATURED PRODUCTS */}
      <FeaturedProducts />

      {/* STATS */}
      <Stats />

      {/* FEATURES */}
      <Features />

      {/* WHATSAPP FLOAT */}
      <FloatingWhatsapp />
    </>
  );
}