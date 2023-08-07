import Frame112 from "../components/HeroComponent/Frame112";
import HeroIlustrastion from "../components/HeroComponent/HeroIlustrastion";
import Supporting from "../components/HeroComponent/Supporting";

export default function HeroSection() {
   return (
      <section className="flex flex-col pt-72 gap-26 text-white">
         <Frame112/>
         <HeroIlustrastion/>
         <Supporting/>
      </section>
   )
}
