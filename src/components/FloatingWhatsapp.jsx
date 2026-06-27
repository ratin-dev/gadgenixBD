import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp(){

return(

<a

href="https://wa.me/+8801797398145"

target="_blank"

className="
fixed
bottom-6
right-6
w-16
h-16
rounded-full
bg-green-500
flex
items-center
justify-center
text-4xl
shadow-2xl
hover:scale-110
transition
z-50
"

>

<FaWhatsapp/>

</a>

)

}
