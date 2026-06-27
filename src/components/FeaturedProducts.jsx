import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FeaturedProducts() {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll
    ? products
    : products.slice(0, 12);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest">
            Best Sellers
          </p>

          <h2 className="text-5xl font-black mt-3">
            Featured Products
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore our premium gadgets collection.
          </p>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Button */}
        {products.length > 12 && (
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
                  See All Products
                </>
              )}
            </button>

          </div>
        )}

      </div>
    </section>
  );
}