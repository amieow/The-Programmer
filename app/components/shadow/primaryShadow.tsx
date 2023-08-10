
export default function PrimaryShadow({blur,className = ""} : {blur? : boolean , className? : string}) {
   return (
      <>
      {blur ? <div className={` bg-primary absolute top-0 -z-10 bg-opacity-80 w-full h-full rounded-2xl blur-3xl ${className}`}></div> 
         :<div className={`bg-primary transition-all duration-300 opacity-0 group-hover:opacity-100 absolute top-0 -z-10 bg-opacity-80 w-full h-full rounded-2xl blur-3xl ${className}`}></div> }
      </>
   )
}
