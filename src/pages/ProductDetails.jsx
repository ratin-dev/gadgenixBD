import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Star } from "lucide-react";

export default function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-40 text-gray-400">
        Product not found 😢
      </div>
    );
  }

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">

      {/* PRODUCT MAIN */}
      <div className="grid lg:grid-cols-2 gap-12">

        {/* IMAGE */}
        <div className="bg-white rounded-3xl p-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-contain"
          />
        </div>

        {/* DETAILS */}
        <div>

          <p className="text-blue-400">{product.category}</p>

          <h1 className="text-4xl font-black mt-2">
            {product.name}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-4">
            <Star className="text-yellow-400 fill-yellow-400" size={18} />
            <span>{product.rating}</span>
            <span className="text-gray-400">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* PRICE */}
          <div className="mt-6 flex items-center gap-4">
            <h2 className="text-3xl font-bold text-blue-400">
              ৳{product.price.toLocaleString()}
            </h2>

            <span className="line-through text-gray-500">
              ৳{product.oldPrice.toLocaleString()}
            </span>
          </div>

          {/* STOCK */}
          <div className="mt-3">
            {product.stock ? (
              <span className="text-green-400">● In Stock</span>
            ) : (
              <span className="text-red-400">● Out of Stock</span>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mt-6 leading-7">
            This is a premium quality {product.name} from {product.brand}.
            Perfect for daily use with high performance and durability.
          </p>

          {/* ORDER BUTTON */}
          <a
            href={`https://wa.me/+8801797398145?text=I want to order ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold transition"
          >
            Order on WhatsApp
          </a>

        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-20">

        <h2 className="text-2xl font-bold mb-8">
          Related Products
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

      </div>

    </div>
  );
}