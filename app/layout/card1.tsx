import React from 'react'
import Title from '../components/typography/title'
import Paraf from '../components/typography/paraf'
import DefaultButton from '../components/button/defaultButton'
import { IBM_Plex_Sans } from 'next/font/google'
const IBM = IBM_Plex_Sans({subsets : ["latin"] , weight : "400"})
export default function Card1({
   children,
   description,
   buttonText,
   className,
   full
}: {
   children: React.ReactNode;
   description: string;
   buttonText: string;
   className?: string;
   full? : boolean
}) {
   return (
      <div className={`flex group relative flex-col py-10 px-8 transition-all duration-300 ${IBM.className} gap-8 hover:bg-cardBackground ${full && "bg-cardBackground"} ${className || ""}`}>
         <div className={`flex  gap-2 ${full ? "flex-col lg:flex-row gap-2" : "flex-wrap"}`}>
            <Title truncate={full ? false : true} variant={full ? "secondary" : "thirdy"}> 
               {children}
            </Title>
            <Paraf className='flex'>
               {description}
            </Paraf>
         </div>
         <DefaultButton className=' py-4' icon>
            {buttonText}
         </DefaultButton>
         <span className={`absolute bottom-0 left-0 w-full transition-all duration-300 group-hover:h-[2px] h-0 bg-primary ${full && "h-[2px]"}`}> </span>
      </div>
   )
}
