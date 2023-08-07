import { IBM_Plex_Mono } from "next/font/google"
const IBM = IBM_Plex_Mono({weight : "500",subsets : ["latin"]})
export default function Logo() {
   return (
      <h1 className={`${IBM.className} font-semibold cursor-pointer text-lg`}>
         <span className=" text-primary">The</span>Programmer
      </h1>
   )
}
