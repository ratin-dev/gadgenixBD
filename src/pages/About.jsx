import { motion } from "framer-motion";
import { Truck, ShieldCheck, Sparkles, Headphones } from "lucide-react";

export default function About() {
  return (
    <div className="px-6 py-24 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black">About Gadgenix BD</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Your trusted destination for premium gadgets, accessories and smart devices in Bangladesh.
        </p>
      </div>

      {/* STORY */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>

          <p className="text-gray-400 leading-7">
            Gadgenix BD started with a simple mission — to bring high-quality
            gadgets at affordable prices for everyone in Bangladesh.
            We focus on fast delivery, authentic products, and customer satisfaction.
          </p>

          <p className="text-gray-400 mt-4 leading-7">
            From smart watches to earbuds and accessories, we carefully select
            every product to ensure premium quality and performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#10131f] p-10 rounded-3xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>

          <ul className="space-y-4 text-gray-300">

            <li className="flex items-center gap-3">
              <Truck className="text-blue-400" />
              Fast Delivery Across Bangladesh
            </li>

            <li className="flex items-center gap-3">
              <ShieldCheck className="text-blue-400" />
              100% Authentic Products
            </li>

            <li className="flex items-center gap-3">
              <Sparkles className="text-blue-400" />
              Premium Quality Assurance
            </li>

            <li className="flex items-center gap-3">
              <Headphones className="text-blue-400" />
              24/7 Customer Support
            </li>

          </ul>
        </motion.div>

      </div>

      {/* STATS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 text-center">

        <div className="bg-[#10131f] p-8 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-black text-blue-400">10K+</h2>
          <p className="text-gray-400 mt-2">Happy Customers</p>
        </div>

        <div className="bg-[#10131f] p-8 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-black text-blue-400">500+</h2>
          <p className="text-gray-400 mt-2">Products</p>
        </div>

        <div className="bg-[#10131f] p-8 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-black text-blue-400">24/7</h2>
          <p className="text-gray-400 mt-2">Support</p>
        </div>

        <div className="bg-[#10131f] p-8 rounded-2xl border border-white/10">
          <h2 className="text-4xl font-black text-blue-400">99%</h2>
          <p className="text-gray-400 mt-2">Positive Reviews</p>
        </div>

      </div>

    </div>
  );
}