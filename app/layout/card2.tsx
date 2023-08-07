import React from 'react'
import Title from '../components/typography/title'
import Paraf from '../components/typography/paraf'
import DefaultButton from '../components/button/defaultButton'
import { TextEditor } from './textEditor'
import { Code } from '../section/Section2'

export default function Card2({
   title,
   code,
   description,
   buttonText
} : {
   title : string
   code? : boolean
   description : string
   buttonText? : string
}) {
   return (
      <div className={`flex flex-col gap-8 py-10 px-8 bg-cards max-h-[568px] ${code ? "max-sm:min-h-[800px] max-[1420px]:max-h-[600px] " : ""} overflow-hidden`}> 
         <div className='flex flex-col gap-4'>
            <Title truncate variant="thirdy">
               {title}
            </Title>
            <Paraf>
               {description}
            </Paraf>
         </div>
         <DefaultButton className='py-4 px-1' icon>
            {buttonText || "Read More"}
         </DefaultButton>
         <div className='flex justify-center'>
            {code ? <TextEditor code={Code}/> : 
            <div className='relative'>
               <div className=' w-[323px] h-[309px] border-4 border-white'>
               </div>
               <div className="bg-to-transparant absolute w-full h-full z-10 top-0 left-0"></div>
            </div>
            }
         </div>
      </div>
   )
}
