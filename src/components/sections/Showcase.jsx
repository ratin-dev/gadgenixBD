import Button from "../ui/Button";
import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Showcase(){

return(

<section className="py-32">

<Container>

<div className="grid lg:grid-cols-2 gap-20 items-center">

<div>

<p className="uppercase tracking-[8px] text-blue-400">

FEATURED PRODUCT

</p>

<h2 className="text-6xl font-black mt-6">

Sony WH-1000XM5

</h2>

<p className="mt-8 text-gray-400 leading-8">

Industry-leading noise cancellation.

30 hours battery.

Premium comfort.

Crystal-clear sound.

</p>

<div className="flex gap-5 mt-10">

<Button>

Buy Now

</Button>

<Button variant="secondary">

Learn More

</Button>

</div>

</div>

<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
repeat:Infinity,
duration:4
}}

>

<img

src="/headphone.png"

className="w-full"

/>

</motion.div>

</div>

</Container>

</section>

)

}