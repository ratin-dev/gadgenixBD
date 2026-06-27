import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          className="relative overflow-hidden rounded-[40px] gradient p-20 text-center"
        >

          <div className="absolute w-80 h-80 bg-white/10 rounded-full blur-3xl -top-24 -left-24"></div>

          <div className="absolute w-80 h-80 bg-black/20 rounded-full blur-3xl bottom-0 right-0"></div>

          <h2 className="text-6xl font-black">

            Upgrade Your
            <br />
            Tech Lifestyle

          </h2>

          <p className="mt-8 text-xl text-white/80 max-w-2xl mx-auto">

            Discover premium gadgets with authentic warranty,
            lightning-fast delivery and unbeatable prices.

          </p>

          <button className="mt-12 bg-white text-black rounded-full px-10 py-5 font-bold flex items-center gap-3 mx-auto hover:scale-105 transition">

            <Link to="/shop">Shop Now</Link>

            <ArrowRight />

          </button>

        </motion.div>

      </div>

    </section>
  );
}