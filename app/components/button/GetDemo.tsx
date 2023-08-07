import React from 'react'
import IconBack from '../icon/Back'
import { ButtonVariant } from './ButtonVariant'
import PrimaryShadow from '../shadow/primaryShadow'

export default function GetDemo({icon,blur} : {icon? : boolean,blur? : boolean}) {
   return (
      <div className='group relative flex flex-shrink-0 h-fit w-fit'>
         <button className={`${ButtonVariant.secondary}`}>
            GET A DEMO {icon && <IconBack/>}
         </button>
         <PrimaryShadow blur={blur ? true : false}/>
      </div>
   )
}
