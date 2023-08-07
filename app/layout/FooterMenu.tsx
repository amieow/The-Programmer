
import Paraf from '../components/typography/paraf'
import DefaultButton from '../components/button/defaultButton'
export default function FooterMenu({title,menu,...props} : {title : string , menu : string[]}) {
   return (
      <div {...props} className='flex flex-col gap-6'>
         <Paraf className=' text-opacity-100 text-2xl font-bold border-b py-2 lg:py-0 border-white lg:border-0'>
            {title}
         </Paraf>
         <div className='flex flex-col gap-7'>
            {menu.map((itm,index) => (
               <DefaultButton className=' uppercase hover:text-blue-400 hover:text-opacity-100 font-light text-opacity-80' key={index}>
                  {itm}
               </DefaultButton>
            ))}
         </div>
      </div>
   )
}
