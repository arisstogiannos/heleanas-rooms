import React from "react";
import { Parisienne } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import { useInView } from "framer-motion";

const paris = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
    // const im1 = useRef(null)
    // const inview = useInView(im1,{amount:0.9})
  return (
    <section id="about" className=" myContainer flex flex-col mt-40 ">
      <h2 data-scroll
          data-scroll-speed="0.1" style={paris.style} className="text-6xl 3xl:text-8xl capitalize mx-auto">
        about us
      </h2>
      <div className="w-full relative h-[128px] 3xl:h-[459px] mt-10  3xl:mt-20">
        <div
          data-scroll
          data-scroll-speed="0.6"
          
          className="w-[214px] h-[128px]  3xl:w-[770px] 3xl:h-[459px] absolute top-20 3xl:-top-6 left-0  "
          
        >
          <Image
            src={"/about/balcony.jpg"}
            alt="iamge"
            width={1024}
            height={768}
            className="w-[214px] h-[128px]  3xl:w-[770px] 3xl:h-[459px] object-cover absolute top-0 left-0 "
          />
          <div className="w-[214px] h-[128px]  3xl:w-[770px] 3xl:h-[459px] absolute top-0 left-0 bg-black/40"></div>
        </div>
        <p
          data-scroll
          data-scroll-speed="0.15"
          className="text-base  3xl:text-5xl font-light capitalize text-nowrap absolute right-0 top-0 mix-blend-difference text-mwhite"
        >
          <span className="inline-block w-10 3xl:w-48 "></span>My name is Eleanna and I
          have graduated <br /> in Μathematics from the University of Athens.
          <br />
          I've been involved with tourism my whole life.
        </p>
      </div>

      <div className="w-full relative h-[459px] mt-32  3xl:mt-12">
        <div
          data-scroll
          data-scroll-speed="1.5"
          className="w-[138px] h-[184px]  3xl:w-[576px] 3xl:h-[768px] absolute -top-1/3 right-0 -z-10"
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
        <p
          data-scroll
          data-scroll-speed="0.4"
          className="text-sm 3xl:text-5xl font-light capitalize text-nowrap absolute left-0 top-0 mix-blend-difference text-mwhite"
        >
          The business was running under my grandmother Helena<br/>
          since 1975, with personal work and a lot
          of her love. <br/>
          That is exactly the spirit we,the new generation of
          owners,<br/> are willing to keep after the renovation we did in 2017.
        </p>
      </div>
    </section>
  );
};

export default About;
