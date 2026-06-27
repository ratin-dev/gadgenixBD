import { useEffect, useState } from "react";

export default function Cursor(){

const[pos,setPos]=useState({
x:0,
y:0
});

useEffect(()=>{

window.addEventListener("mousemove",(e)=>{

setPos({
x:e.clientX,
y:e.clientY
})

})

},[])

return(

<div

className="
hidden
lg:block
fixed
w-6
h-6
rounded-full
border
border-blue-500
pointer-events-none
z-[9999]
"

style={{
left:pos.x-12,
top:pos.y-12
}}

>

</div>

)

}