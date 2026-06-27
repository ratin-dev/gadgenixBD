import {
  Truck,
  ShieldCheck,
  BadgeCheck,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Same day delivery in Dhaka and nationwide shipping across Bangladesh.",
  },
  {
    icon: ShieldCheck,
    title: "Official Warranty",
    desc: "All products include official brand warranty for complete peace of mind.",
  },
  {
    icon: BadgeCheck,
    title: "100% Authentic",
    desc: "Only genuine gadgets sourced from trusted distributors.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Friendly customer support whenever you need assistance.",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-400 uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Experience Premium Service
          </h2>

          <p className="mt-5 text-gray-400 text-sm sm:text-base lg:text-lg leading-7">
            We don't just sell gadgets—we deliver quality, trust and an
            exceptional shopping experience.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  glass
                  rounded-3xl
                  p-6
                  sm:p-7
                  lg:p-8
                  text-center
                  flex
                  flex-col
                  h-full
                  border
                  border-white/10
                  hover:border-blue-500/40
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-16 h-16
                    sm:w-20 sm:h-20
                    mx-auto
                    rounded-2xl
                    gradient
                    flex
                    items-center
                    justify-center
                    shadowBlue
                  "
                >
                  <Icon
                    size={32}
                    className="sm:w-10 sm:h-10 text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl sm:text-2xl font-bold">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-400 text-sm sm:text-base leading-7 flex-grow">
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