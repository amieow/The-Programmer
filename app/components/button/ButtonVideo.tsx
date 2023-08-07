import React from 'react'
import { ButtonVariant } from './ButtonVariant'
import Play from '../icon/play'
import PrimaryShadow from '../shadow/primaryShadow'

export default function ButtonVideo({icon,className,children} : {icon? : boolean,className? : string,children? : React.ReactNode}) {
   return (
      <button className={`${ButtonVariant.primary} relative group ${className || ""}`}>
         {icon && <Play/>} { children ||`Watch a Video`}
         <PrimaryShadow className=' left-0' blur={false} />
      </button>
   )
}
