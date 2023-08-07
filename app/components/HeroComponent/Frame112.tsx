import React from 'react'
import GetDemo from '../button/GetDemo'
import ButtonVideo from '../button/ButtonVideo'
import Title from '../typography/title'
import Paraf from '../typography/paraf'
export default function Frame112() {
   return (
      <div className='flex flex-col px-4 md:px-10 lg:px-36 gap-14'>
         <div className='flex flex-col gap-4 lg:gap-16 lg:flex-row'>
            <Title variant="primary">
               Expert Developers for a Connected <span className=' text-primary'>{`{World}`}</span>
            </Title>
            <GetDemo icon/>
         </div>
         <div className='flex flex-col-reverse gap-4 text-lg lg:gap-16 lg:flex-row'>
            <ButtonVideo icon/>
            <Paraf>Circle is a code development platform that gives innovators the speed and reliability they need to create at the speed of inspiration.</Paraf>
         </div>
      </div>
   )
}
