"use client"
import React, { useState } from 'react'
import Logo from '../components/typography/Logo'
import { NavbarMenu } from '../asset/menu'
import DefaultButton from '../components/button/defaultButton'

export default function Navbar() {
   const [open,setOpen] = useState(false)
   return (
      <div className=' max-w-[1280px] px-2 sm:px-10 pt-6 fixed top-3 sm:left-1/2 sm:-translate-x-1/2 z-50 flex mx-auto w-full'>
         <div className=' bg-NavbarBg relative backdrop-blur-xl w-full flex justify-between gap-4 py-4 px-8 text-white'>
            <Logo/>
            <div className={`flex-col right-0 min-[850px]:flex-row min-[850px]:flex ${open ? "flex absolute top-20 bg-NavbarBg backdrop-blur-xl " : "hidden"}`}>
               {NavbarMenu.map((itm,index) => (
                  <DefaultButton className={`text-opacity-80 ${open ? "w-full px-5 py-5" : "px-5"} rounded-none hover:text-blue-400 hover:text-opacity-100`} key={index}>
                     {itm}
                  </DefaultButton>
               ))}
            </div>
            <div onClick={() => setOpen((prv) => !prv)} className='w-9 cursor-pointer flex flex-col justify-between min-[850px]:hidden h-full'>
               <span className=' bg-white rounded-xl w-full h-1'></span>
               <span className=' bg-white rounded-xl w-full h-1'></span>
               <span className=' bg-white rounded-xl w-full h-1'></span>
            </div>
            <DefaultButton  className=' hover:text-blue-400 hidden lg:flex' icon>
               SIGN UP
            </DefaultButton>
         </div>
      </div>
   )
}
