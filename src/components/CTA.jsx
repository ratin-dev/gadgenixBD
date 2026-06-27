import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            lg:rounded-[40px]
            gradient
            px-6
            py-14
            sm:px-10
            sm:py-16
            lg:px-20
            lg:py-20
            text-center
          "
        >

          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-24 -right-24 w-64 h-64 sm:w-80 sm:h-80 bg-black/20 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10">

            <h2
              className="
                font-black
                leading-tight
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Upgrade Your
              <br />
              Tech Lifestyle
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                mx-auto
                text-sm
                sm:text-base
                lg:text-xl
                text-white/80
                leading-7
              "
            >
              Discover premium gadgets with authentic warranty,
              lightning-fast delivery and unbeatable prices.
            </p>

            <Link
              to="/shop"
              className="
                mt-10
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                text-black
                font-bold
                px-6
                py-3
                sm:px-8
                sm:py-4
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Shop Now
              <ArrowRight size={20} />
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}