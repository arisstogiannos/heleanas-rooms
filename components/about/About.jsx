'use client'
import React, { useEffect, useState } from "react";
import { Parisienne } from "next/font/google";
import Image from "next/image";


const paris = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  const [isMobile,setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateScreenSize = () => {
        setIsMobile(window.innerWidth<1280);
       
      };

      updateScreenSize(); // Set initial value
      window.addEventListener('resize', updateScreenSize); // Update value on window resize

      return () => window.removeEventListener('resize', updateScreenSize); // Cleanup on component unmount
    }
  }, []);
  
    // const im1 = useRef(null)
    // const inview = useInView(im1,{amount:0.9})
  return (
    <section id="about" className=" myContainer flex flex-col  mt-40 mb-20 xl:mb-0 ">
      <h2 data-scroll
          data-scroll-speed={isMobile?"0":"0.1"} style={paris.style} className="text-6xl 2xl:text-8xl capitalize mx-auto">
        about us
      </h2>
      <div className="w-full relative flex flex-col gap-16 h-[128px] 3xl:h-[459px] mt-10  xl:mt-20">
        <p
          data-scroll
          data-scroll-speed={isMobile?"0":"0.15"}
          className="xsm:text-lg  2xl:text-5xl font-light capitalize text-nowrap xl:absolute xl:right-0 xl:top-0 mix-blend-difference text-mwhite z-10"
        >
          <span className="inline-block w-0 2xl:w-48 "></span>My name is Eleanna and I
          have graduated <br /> in Μathematics from the University of Athens.
          <br />
          I've been involved with tourism my whole life.
        </p>
        <div
          data-scroll
          data-scroll-speed={isMobile?"0":"0.6"}
          
          className="w-[342px] h-[211px] self-end  2xl:w-[770px] 2xl:h-[459px] relative xl:absolute xl:top-0 3xl:-top-6 xl:left-0  "
          
        >
          <Image
            src={"/about/balcony.jpg"}
            alt="balcony showing view of the apartments"
            width={1024}
            height={768}
            className="w-[342px] h-[211px]  2xl:w-[770px] 2xl:h-[459px] object-cover absolute top-0 left-0 "
          />
          <div className="w-[342px] h-[211px]  2xl:w-[770px] 2xl:h-[459px] absolute top-0 left-0 bg-black/40"></div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-16 relative  mt-80 xl:mt-32 2xl:h-[459px] 2xl:mt-80  3xl:mt-12">
        <p
          data-scroll
          data-scroll-speed={isMobile?"0":"0.4"}
          className="text-lg 2xl:text-5xl font-normal lg:font-light capitalize md:text-nowrap xl:absolute xl:left-0 xl:top-0 mix-blend-difference text-mwhite"
        >
          The business was running under my grandmother Helena<br className="max-md:hidden"/>
          since 1975, with personal work and a lot
          of her love. <br className="max-md:hidden"/>
          That is exactly the spirit we,the new generation of
          owners,<br className="max-md:hidden"/> are willing to keep after the renovation we did in 2017.
        </p>
        <div
          data-scroll
          data-scroll-speed={isMobile?"0":"1.5"}
          className="w-[276px] h-[368px]  2xl:w-[576px] 2xl:h-[768px] relative xl:absolute 2xl:-top-20 3xl:-top-20 md:-top-1/3 xl:right-0"
        >
          <Image
          alt="img"
            src={"/about/sky.jpg"}
            width={576}
            height={768}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-black/40"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
