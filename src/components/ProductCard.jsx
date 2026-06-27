import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
group
rounded-3xl
overflow-hidden
bg-[#10131f]
border
border-white/10
hover:border-blue-500/40
hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
transition-all
duration-300
"
    >
      {/* IMAGE */}
      <div className="relative bg-white p-8 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-60 w-full object-contain group-hover:scale-110 transition"
        />

        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {product.badge}
        </span>
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-1 shadow-md">
  <Star
    size={14}
    className="fill-yellow-400 text-yellow-400"
  />

  <span className="text-xs font-semibold text-gray-800">
    {product.rating}
  </span>

  <span className="text-xs text-gray-500">
    ({product.reviews})
  </span>
</div>
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <div className="flex flex-row justify-between">
        <div className="text-sm text-blue-400">
          {product.brand}
        </div>

        {/* STOCK */}
        <div className="mt-[-2]">
          {product.stock ? (
            <span className="text-green-400 text-sm">● In Stock</span>
          ) : (
            <span className="text-red-400 text-sm">● Out of Stock</span>
          )}
        </div>
           </div> 
        <h3
  className="mt-2 text-lg font-bold leading-7 line-clamp-2 min-h-[56px]"
  title={product.name}
>
  {product.name}
</h3>

        <p className="text-sm text-zinc-400">
          {product.category}
        </p>

        {/* RATING */}
        {/* <div className="flex items-center gap-2 mt-3">
          <Star className="text-yellow-400 fill-yellow-400" size={18} />
          <span>{product.rating}</span>
          <span className="text-zinc-500">
            ({product.reviews})
          </span>
        </div> */}

        {/* PRICE */}
        <div className="flex gap-3 mt-4">
          <span className="text-2xl font-bold text-blue-400">
            ৳{product.price.toLocaleString()}
          </span>

          <span className="text-zinc-500 line-through">
            ৳{product.oldPrice.toLocaleString()}
          </span>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-row gap-3 mt-6">

          <Link
            to={`/product/${product.slug}`}
            className="w-full h-12 rounded-xl bg-blue-600 flex items-center justify-center font-semibold hover:bg-blue-700 transition"
          >
            View Details
          </Link>

          <a
            href={`https://wa.me/8801XXXXXXXXX?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 rounded-xl bg-green-600 flex items-center justify-center font-semibold hover:bg-green-700 transition"
          >
            Order Now
          </a>

        </div>

      </div>
    </motion.div>
  );
}