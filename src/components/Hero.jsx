import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Truck, BadgeCheck } from "lucide-react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

import Badge from "./ui/Badge";
import Container from "./ui/Container";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-24">

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <Badge>
              🚀 New Collection {new Date().getFullYear()}
            </Badge>

            <motion.h1
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              transition={{duration:.7}}
              className="mt-8 text-6xl lg:text-7xl font-black leading-[1.05]"
            >
              Experience
              <br/>

              Premium
              <br/>

              Technology.
            </motion.h1>

            <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">

              Gadgenix BD brings authentic gadgets from world-class brands with
              official warranty, fast delivery and premium customer support.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

                                            
              <Link to="/shop">
                <Button className="flex items-center">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Button
                variant="secondary"
                className="flex items-center"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Video
              </Button>


            </div>

            <div className="grid grid-cols-3 gap-6 mt-16">

              <div>

                <ShieldCheck className="text-blue-400"/>

                <h4 className="font-semibold mt-3">

                  Warranty

                </h4>

              </div>

              <div>

                <Truck className="text-blue-400"/>

                <h4 className="font-semibold mt-3">

                  Delivery

                </h4>

              </div>

              <div>

                <BadgeCheck className="text-blue-400"/>

                <h4 className="font-semibold mt-3">

                  Authentic

                </h4>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <motion.div

            animate={{
              y:[0,-15,0]
            }}

            transition={{
              repeat:Infinity,
              duration:4
            }}

            className="relative"

          >

            {/* Glow */}

            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"/>

            {/* Product */}

            <img

              src="../../products/turboFan3600mAh.png"
              className="relative rounded-[40px] "

            />

            {/* Floating Card */}

            <motion.div

              animate={{
                y:[0,-10,0]
              }}

              transition={{
                repeat:Infinity,
                duration:3
              }}

              className="
              absolute
              -left-10
              bottom-16
              glass
              rounded-3xl
              p-5
              "

            >

              <p className="text-sm text-gray-800">

                Starting From

              </p>

              <h3 className="text-3xl text-blue-900 font-bold">

                ৳500

              </h3>

            </motion.div>

            <motion.div

              animate={{
                y:[0,10,0]
              }}

              transition={{
                repeat:Infinity,
                duration:5
              }}

              className="
              absolute
              -right-8
              top-20
              glass
              rounded-3xl
              p-5
              text-blue-900
              "

            >

              ⭐ 4.9 Rating

            </motion.div>

          </motion.div>

        </div>

      </Container>

    </section>
  )}