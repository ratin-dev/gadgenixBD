import { motion } from "framer-motion";

export default function Loader(){

return(

<div
className="
fixed
inset-0
bg-[#050816]
flex
items-center
justify-center
z-[99999]
"
>

<motion.h1

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
repeat:Infinity,
repeatType:"reverse",
duration:1
}}

className="text-5xl font-black"

>

Gadgenix

<span className="text-blue-500">

BD

</span>

</motion.h1>

</div>

)

}