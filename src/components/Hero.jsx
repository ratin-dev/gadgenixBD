import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import Button from "./ui/Button";
import Badge from "./ui/Badge";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="relative pt-10 lg:pt-16 pb-16 lg:pb-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <Badge>
              🚀 New Collection {new Date().getFullYear()}
            </Badge>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight"
            >
              Experience
              <br />
              Premium
              <br />
              Technology.
            </motion.h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-7 max-w-xl mx-auto lg:mx-0">
              Gadgenix BD brings authentic gadgets from world-class brands with
              official warranty, fast delivery and premium customer support.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Link to="/shop" className="w-full sm:w-auto">
                <Button className="w-full flex items-center justify-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Button
                variant="secondary"
                className="w-full sm:w-auto flex items-center justify-center"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Video
              </Button>

            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mt-12 text-center">

              <div>
                <ShieldCheck className="mx-auto text-blue-400 w-8 h-8" />
                <h4 className="mt-2 text-sm sm:text-base font-semibold">
                  Warranty
                </h4>
              </div>

              <div>
                <Truck className="mx-auto text-blue-400 w-8 h-8" />
                <h4 className="mt-2 text-sm sm:text-base font-semibold">
                  Delivery
                </h4>
              </div>

              <div>
                <BadgeCheck className="mx-auto text-blue-400 w-8 h-8" />
                <h4 className="mt-2 text-sm sm:text-base font-semibold">
                  Authentic
                </h4>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full" />

            {/* Image */}
            <img
              src="../../products/turboFan3600mAh.png"
              alt="Turbo Fan"
              className="relative w-72 sm:w-96 lg:w-[520px] object-contain rounded-4xl"
            />

            {/* Price Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
                absolute
                left-0
                bottom-6
                sm:left-10
                lg:-left-10
                glass
                rounded-2xl
                px-4
                py-3
              "
            >
              <p className="text-xs text-gray-200">
                Starting From
              </p>

              <h3 className="text-xl lg:text-3xl text-white-900 font-bold">
                ৳500
              </h3>
            </motion.div>

            {/* Rating */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
                absolute
                right-0
                top-6
                sm:right-10
                lg:-right-8
                glass
                rounded-2xl
                px-4
                py-3
                text-white-900
                text-sm
                font-semibold
              "
            >
              ⭐ 4.9 Rating
            </motion.div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}