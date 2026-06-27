import { Truck, ShieldCheck, BadgeCheck, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Same day in Dhaka & nationwide shipping.",
  },
  {
    icon: ShieldCheck,
    title: "Official Warranty",
    desc: "Every product comes with brand warranty.",
  },
  {
    icon: BadgeCheck,
    title: "100% Authentic",
    desc: "No copy products. Only genuine gadgets.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated customer support whenever you need.",
  },
];

export default function Features() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-blue-400">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-black mt-4">
            Experience Premium Service
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We don't just sell gadgets—we deliver quality, trust and an
            exceptional shopping experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="glass rounded-3xl p-8 text-center group transition"
              >

                <div className="w-20 h-20 mx-auto rounded-2xl gradient flex items-center justify-center mb-6 shadowBlue">

                  <Icon size={40} />

                </div>

                <h3 className="text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-7">

                  {item.desc}

                </p>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}