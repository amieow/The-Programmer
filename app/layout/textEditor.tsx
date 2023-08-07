import Image from "next/image";
import React from "react";
import { IBM_Plex_Mono } from "next/font/google";
const IBM = IBM_Plex_Mono({subsets : ["latin"] ,weight : "400"})
export const TextEditor = ({ code,withBlur }: { code: string,withBlur? : boolean }) => {
   const lines = code.split('\n');

   return (
      <div className="flex flex-col md:flex-row relative">
         <Image className=' h-fit z-30 translate-x-40 translate-y-1/4 md:translate-x-1/4 md:translate-y-10' alt='' width={100} height={100} src={"html.svg"} />
         <div className=" relative">
            <div className="flex relative whitespace-pre-wrap border-4 w-full md:w-[345px] bg-editors h-[403px] px-6 py-3 overflow-y-scroll">
               <div className="flex flex-col gap-1 z-20 max-w-[345px] md:max-w-[345px]">
                  {lines.map((item,index) => {
                     const color = item.includes("<label") || item.includes("<input") ? "text-primary" : ""
                     return(
                        <div key={index} className={`flex text-sm text-white gap-7 ${IBM.className}`}>
                           <span className="select-none">{index + 1}</span>
                           <span className={color + " "} >{item}</span>
                        </div>
                     );
                  })}
               </div>
            </div>
            <div className="bg-to-transparant absolute w-full h-full z-10 top-0 left-0"></div>
            {withBlur && <div className=" bg-primary top-0 -z-10 absolute h-[425px] w-full md:w-[339px] blur-[339px] bg-opacity-60 rounded-[425px]"></div>}
         </div>
         <Image className=' absolute md:relative top-7 translate-x-4 h-fit z-30 md:-translate-x-1/3 md:translate-y-32' alt='' width={100} height={100} src={"cpp.svg"} />
      </div>
   );
};

