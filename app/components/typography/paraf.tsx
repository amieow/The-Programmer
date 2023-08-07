import { IBM_Plex_Sans } from "next/font/google"
const IBM = IBM_Plex_Sans({weight : "400",subsets : ["latin"]})
export default function Paraf({ className ="", children,...props} : { children : React.ReactNode,className? : string}) {
   return (
      <p {...props} className={`${IBM.className} text-[#FFF] text-lg text-opacity-80 ${className}`}>
         {children}
      </p>
   )
}
