import React from 'react'
import Title from '../components/typography/title'
import Paraf from '../components/typography/paraf'
import Card2 from '../layout/card2'

export default function Section4() {
   return (
      <div className='flex flex-col px-4 md:px-10 lg:px-36 gap-12'>
         <div className='flex flex-col gap-6'>
            <Title className=' text-center' variant="secondary">
               Concentrate on <span className=' text-primary'>{`{larger}`}</span> issues.
            </Title>
            <div className='flex justify-center'>
               <Paraf className=' text-center max-w-[664px]'>
                  Spend less time on repetitive code patterns and more time on what really matters building great software.
               </Paraf>
            </div>
         </div>
         <div className='flex flex-col min-[1420px]:flex-row gap-10'>
            <Card2
            title='Get customized AI-based recommendations.'
            description='Get customized AI-based recommendations. A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks.'
            />
            <Card2
            code
            title='Help of plugins and source code templates.'
            description='Get customized AI-based recommendations. A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks.'
            />
         </div>
      </div>
   )
}
