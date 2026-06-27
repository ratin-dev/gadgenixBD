import { motion } from "framer-motion";

const stats = [
  {
    number: "10K+",
    title: "Happy Customers",
  },
  {
    number: "500+",
    title: "Premium Products",
  },
  {
    number: "99%",
    title: "Positive Reviews",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-3xl p-10 text-center"
            >
              <h2 className="text-5xl font-black text-blue-500">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-400">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}