import React from 'react'
import Card1 from '../layout/card1'

export default function Section7() {
   return (
      <section className='flex flex-col px-4 md:px-10 lg:px-36 w-fit h-fit'>
            <Card1
         full
         description='A custom environment designed especially for developing and facilitating React, Vue, Angular, and other.'
         buttonText='Join Community'
         >
            Join the <span className=' text-primary'>{`{community}`}</span> around the world
         </Card1>
      </section>
   )
}
