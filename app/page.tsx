import Image from 'next/image'
import HeroSection from './section/Hero'
import Section2 from './section/Section2'
import Section3 from './section/Section3'
import Section4 from './section/Section4'
import Section5 from './section/Section5'
import Section6 from './section/Section6'
import Section7 from './section/Section7'
import Navbar from './section/Navbar'
import Footer from './section/Footer'


export default function Home() {
  return (
    <>
    <Navbar/>
      <div className=' flex flex-col w-full max-w-[1480px] gap-26 mx-auto'>
        <HeroSection/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
      </div>
      <Footer/>
    </>
  )
}
