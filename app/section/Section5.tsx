import React from 'react'
import Title from '../components/typography/title'
import Paraf from '../components/typography/paraf'
import ButtonVideo from '../components/button/ButtonVideo'
import GetDemo from '../components/button/GetDemo'
import Image from 'next/image'

export default function Section5() {
   return (
      <section className='flex flex-col gap-12 px-4 md:px-10 lg:px-36'>
         <Title className='leading-relaxed' truncate variant="secondary">
            Circle provides teams and individuals with customizable <span className=' text-primary'>{`{management tools}`}</span>for your source code.
         </Title>
         <div className='flex gap-8 overflow-visible'>
            <div className='flex flex-col gap-8 w-full'>
               <Paraf>
                  Create issues, sections into tasks, track relationships, add custom spaces, and initiate discussions. Visualize large projects with spreadsheets or codeboards, and use the help of code systems to automate everything.
               </Paraf>
               <div className='flex flex-wrap flex-row gap-6'>
                  <ButtonVideo className=' justify-center' icon/>
                  <GetDemo blur/>
               </div>
            </div>
            <Image className=' hidden min-[1140px]:block' alt='Supporting Graphic' src={"supporting.svg"} width={500} height={`400`}/>
         </div>
      </section>
   )
}
