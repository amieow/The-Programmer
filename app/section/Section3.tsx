import React from 'react'
import Card1 from '../layout/card1'
import DefaultButton from '../components/button/defaultButton'

export default function Section3() {
   return (
      <section className='flex flex-col gap-12 px-4 md:px-10 lg:px-36'>
         <div className='flex gap-10 flex-col md:flex-row'>
            <Card1 
            description='A custom environment designed especially for developing and facilitating React, Vue, Angular, and other.'
            buttonText='Read More'
            >
               Optimized Frameworks
            </Card1>
            <Card1
            description='Import and run GitHub repositories directly. Alternatively, you can commit your source code to a repository.'
            buttonText='Read More'
            >
               Integrated with GitHub
            </Card1>
         </div>
         <DefaultButton className=' py-4 px-6' icon>
            Explore More Services
         </DefaultButton>
      </section>
   )
}
