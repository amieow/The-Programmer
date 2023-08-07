import React from 'react'
import { MenuNavbar } from '../asset/menu'
import FooterMenu from '../layout/FooterMenu'

export default function Footer() {
   return (
      <div className='flex  bg-footerBg text-white'>
         <div className='flex flex-col w-full max-w-[1480px] px-4 md:px-10 lg:px-36 gap-9 py-12 mx-auto'>
            <div className=' flex flex-col flex-wrap lg:flex-row gap-10 py-8 lg:justify-between lg:gap-4'>
               {MenuNavbar.map((itm,index) => (
                  <FooterMenu  key={index} title={itm.title} menu={itm.menu} />
               ))}
            </div>
            <p className='text-center'>
               2022 All Rights Reserved © Circle
            </p>
         </div>
      </div>
   )
}
