export default function SectionTitle({

subtitle,

title,

description

}){

return(

<div className="text-center mb-20">

<p className="uppercase tracking-[8px] text-blue-400">

{subtitle}

</p>

<h2 className="text-5xl font-black mt-5">

{title}

</h2>

<p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">

{description}

</p>

</div>

)

}