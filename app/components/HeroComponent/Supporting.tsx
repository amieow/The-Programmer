import Image from "next/image"
import DefaultButton from "../button/defaultButton"
export default function Supporting() {
   const lengthCompany = 5
   return (
      <div className="px-4 md:px-10 lg:px-36 gap-12 flex flex-col">
         <p className=" text-center uppercase text-sm md:text-base text-white text-opacity-50">{`Providing power to the world's best product teams.`}</p>
         <div className="flex justify-around sm:justify-center lg:justify-between flex-wrap gap-4 md:gap-10">
            {Array.from({ length: lengthCompany }, (_, index) => (
               <DefaultButton className=" py-4 px-6" key={index + 1}>
                  <Image
                  className="hidden sm:block"
                  width={144}
                  height={40}
                  alt={`Company ${index + 1}`}
                  src={`/company/${index + 1}.svg`} // Perhatikan path URL diubah menjadi path relatif dari root proyek
                  />
                  <Image
                  className="block sm:hidden"
                  width={100}
                  height={40}
                  alt={`Company ${index + 1}`}
                  src={`/company/${index + 1}.svg`} // Perhatikan path URL diubah menjadi path relatif dari root proyek
                  />
               </DefaultButton>
            ))}
         </div>
      </div>
   )
}
