import React from 'react'
import DefaultButton from '../components/button/defaultButton'

export default function CardCompany({children,key} : {children : React.ReactNode,key : string | number}) {
   return (
      <div key={key} className=' relative flex flex-shrink-0 bg-editors'>
         <DefaultButton className=' border-4 p-4 lg:p-10  w-60 border-white'>
            {children}
         </DefaultButton>
         <div className=' z-10 w-full h-full absolute bg-to-transparant top-0 left-0'></div>
      </div>
   )
}
