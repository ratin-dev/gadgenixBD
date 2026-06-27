export default function Button({

children,

className="",

...props

}){

return(

<button

className={`
relative
overflow-hidden
rounded-full
px-8
py-4
font-semibold
bg-blue-600
hover:bg-blue-500
transition-all
duration-300
hover:scale-105
shadow-lg
shadow-blue-500/20
${className}
`}

{...props}

>

{children}

</button>

)

}