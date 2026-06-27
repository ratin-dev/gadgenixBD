import { useState } from "react";
import { products } from "../data/products";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Categories() {
  const [showAll, setShowAll] = useState(false);

  const categoryMap = {};

  products.forEach((p) => {
    categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
  });

  const categories = Object.keys(categoryMap);

  // প্রথম ৮টা, না হলে সব
  const visibleCategories = showAll
    ? categories
    : categories.slice(0, 8);

  return (
    <div className="px-6 py-24 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-black">
          Categories
        </h1>

        <p className="text-gray-400 mt-3">
          Browse products by category
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {visibleCategories.map((cat, i) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{
              scale: 1.04,
              y: -5,
            }}
            className="group cursor-pointer rounded-2xl p-8 bg-[#10131f] border border-white/10 hover:border-blue-500/40"
          >
            <h2 className="text-2xl font-bold group-hover:text-blue-400 transition">
              {cat}
            </h2>

            <p className="text-gray-400 mt-2">
              {categoryMap[cat]} Products
            </p>

            <div className="mt-6 h-1 w-16 bg-blue-500 rounded-full group-hover:w-28 transition-all duration-300"></div>
          </motion.div>
        ))}

      </div>

      {/* BUTTON */}
      {categories.length > 8 && (
        <div className="flex justify-center mt-14">

          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            {showAll ? (
              <>
                <ChevronUp size={20} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={20} />
                See All Categories
              </>
            )}
          </button>

        </div>
      )}

    </div>
  );
}