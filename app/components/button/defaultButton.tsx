import React from 'react'
import { ButtonVariant } from './ButtonVariant'
import IconBack from '../icon/Back'

export default function DefaultButton({className,icon, children,...props} : {className? : string,icon? : boolean,children : React.ReactNode}) {
   return (
      <button {...props} className={`${ButtonVariant.default} ${className} `}>
         {children}
         {icon && <IconBack/>}
      </button>
   )
}
