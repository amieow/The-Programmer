"use client"
import { motion,  } from "framer-motion";
import CardCompany from "./cardCompany";
import Image from "next/image";

export const CompanySlider = ({ length, direction } : {length : number,direction : "right" | "left"}) => {
   const companyList = Array.from({ length }, (_, index) => (
      <CardCompany key={index} index={String(index)}>
         <Image width={144} height={40} src={`/company/${index + 1}.svg`} alt={`Company Example ${index + 1}`} />
      </CardCompany>
   ));

   const SliderAnimation = {
      slideRight : {
         x: ["-10%","40%"],
         transition:{
            x : {
               repeat: Infinity,
               repeatType: "loop",
               duration: 20,
               ease: "linear",
            },
         }
      },
      slideLeft : {
         x: ["40%","-10%"],
         transition:{
            x : {
               repeat: Infinity,
               repeatType: "loop",
               duration: 20,
               ease: "linear",
            },
         }
      }
   }
   return (
      <div className="flex gap-6 justify-end overflow-x-hidden">
         <motion.div
         className="flex gap-6"
         variants={SliderAnimation}
         animate={direction == "right" ? "slideRight" : "slideLeft"}
         >
         {companyList}
         {companyList}
         {companyList}
         {companyList}
         </motion.div>
      </div>
   );
};