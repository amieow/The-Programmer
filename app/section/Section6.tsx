import React from 'react'
import Title from '../components/typography/title'
import CardCompany from '../layout/cardCompany'
import Image from 'next/image'
import { CompanySlider } from '../layout/companySlider'
import ButtonVideo from '../components/button/ButtonVideo'

export default function Section6() {
   const CompanyLength = 8
   return (
      <section className='flex flex-col gap-12 justify-center py-14 w-fit overflow-x-hidden'>
         <div className='flex flex-col relative gap-12 w-fit'>
            <Title className=' text-center w-8/12 mx-auto' variant="secondary">
               Useful <span className=' text-primary'>{`{software}`}</span> that can assist.
            </Title>
            <div className='flex flex-col relative w-screen max-w-[1440px] overflow-x-hidden'>
               <div className=' absolute top-0 -right-1 h-full w-1/4 bg-cardSuport -rotate-180 z-10'></div>
               <CompanySlider length={CompanyLength} direction="right"/>
               <CompanySlider length={CompanyLength} direction='left'/>
               <div className=' absolute top-0 left-0 h-full w-1/4 bg-cardSuport '>CC</div>
            </div>
            <div className='flex justify-center'>
               <ButtonVideo icon>
                  See full software
               </ButtonVideo>
            </div>
         </div>
      </section>
   )
}
