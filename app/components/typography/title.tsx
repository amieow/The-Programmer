import React from 'react'
import { DM_Mono } from 'next/font/google'

const inter = DM_Mono({weight : "500",subsets : ["latin"]})
const TitleVariant = {
   primary : "text-white text-5xl md:text-7xl font-medium   ",
   secondary : "text-white text-3xl md:text-5xl font-medium  tracking-wide ",
   thirdy : "text-white text-xl md:text-[32px] font-medium "
}
export default function Title({children,className,variant,truncate} : {children : React.ReactNode , variant : keyof typeof TitleVariant,className? : string,truncate? : boolean}) {
   
   return (
      <h1 className={`${TitleVariant[variant]} ${truncate ? "hyphens-none" : "hyphens-auto"} ${inter.className} ${className}`}>
         {children}
      </h1>
   )
}
