import React from 'react'
import HeroIlustrastionSvg from '../svg/heroIlustrastion'

export default function HeroIlustrastion() {
   return (
      <div className='relative px-4 md:px-10 lg:px-36'>
         <div className=' relative w-fit mx-auto'>
            <div className='hidden min-[1310px]:block'>
               <HeroIlustrastionSvg/>
            </div>
            <div className='hidden min-[810px]:block min-[1310px]:hidden'>
               <HeroIlustrastionSvg width={773} height={408}/>
            </div>
            <div className='block min-[810px]:hidden'>
               <HeroIlustrastionSvg width={"94vw"} height={"100%"}/>
            </div>
            <div className='w-full translate-y-12 h-full bg-to-transparant absolute top-0 left-0'></div>
         </div>
      </div>
   )
}
