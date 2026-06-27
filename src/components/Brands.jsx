import { motion } from "framer-motion";

const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "JBL",
  "Anker",
  "Baseus",
  "UGREEN",
  "Xiaomi",
];

export default function Brands() {
  return (
    <section className="py-20 overflow-hidden">

      <div className="text-center mb-10">

        <p className="uppercase tracking-[8px] text-blue-400">
          Trusted Brands
        </p>

        <h2 className="text-5xl font-black mt-3">
          Top Global Brands
        </h2>

      </div>

      <div className="relative">

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="glass rounded-full px-12 py-5 text-2xl font-bold text-white/80 hover:text-white transition"
            >
              {brand}
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}