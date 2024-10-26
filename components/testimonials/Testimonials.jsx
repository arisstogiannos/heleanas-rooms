"use client";
import { Nunito, Parisienne } from "next/font/google";
import React, { useEffect, useRef,  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});


const Testimonials = () => {
    gsap.registerPlugin(ScrollTrigger);
    const containerRef =useRef(null);

    useEffect(()=>{
        const containerR = containerRef.current;
        const tl1 = gsap.timeline({
            scrollTrigger: {
              trigger: containerR,
            //   pin: true,
              start:"top bottom",
              end:"bottom top",
              scrub:true,
              markers: false, // Show markers for debugging
              toggleActions: "play reverse play reverse",
            
            },
          });
          tl1.fromTo(
            ".cont1",
            {
              x: -400,
              
            },
            {
              x: 200,
              
            }
          );
          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: containerR,
            //   pin: true,
              start:"top bottom",
              end:"bottom top",
              scrub:true,
              markers: false, // Show markers for debugging
              toggleActions: "play reverse play reverse",
            
            },
          });
          tl2.fromTo(
            ".cont2",
            {
              x: 400,
              
            },
            {
              x: -400,
              
            }
          );
        //   const tltext2 = gsap.timeline({
        //     scrollTrigger: {
        //       trigger: containerR,
        //     //   pin: true,
        //       start:"top+=400px center",
        //       end:"top+=600px center",
        //       markers: false, // Show markers for debugging
        //       toggleActions: "play reverse play reverse"
        //     },
        //   });
        //   tltext2.fromTo(
        //     ".word2",
        //     {
        //       y: 40,
        //       opacity: 0,
        //     },
        //     {
        //       y: 0,
        //       opacity: 1,
        //       duration: 0.3, // Adjust the duration for each word's entrance
        //       ease: "circ.out",
        //       stagger: 0.01, // Adjust the delay between each word's appearance
        //     }
        //   );
           
    },[])
  return (
    <section ref={containerRef} className="w-full overflow-x-hidden  bg-mwhite py-32 flex flex-col">
      <h2  className="capitalize text-4xl xl:text-7xl mx-auto lg:mb-10">
        what do people say
      </h2>
      <div className="flex flex-col gap-0 my-20">
      <div className="w-full flex  gap-20">
      {
        [1,1,1,1,1,1,1].map((i,k)=>{
            return(
      <div key={k} className="flex gap-10  cont1">
        <div className="xl:h-80 xl:w-[440px] border-2 rounded-3xl border-black flex flex-col  py-5 px-7">
          <div className="w-full flex gap-5 font-medium text-lg xl:text-2xl items-center">
            <div className="rounded-full size-10 bg-gray-500"></div>
            <div>
            <p>Angela Sabani</p>
            <p style={nunito.style} className="text-sm text-black/50">Octomber,2024</p>

            </div>
          </div>
          <p style={nunito.style} className="text-base xl:text-xl mt-5 xl:mt-8">
            Lorem ipsum dolor sit amet consectetur. Posuere quisque neque arcu
            semper. Lectus aliquam ullamcorper tempor nulla convallis interdum.{" "}
          </p>
          <div>
            <svg
              width="200"
              height="80"
              viewBox="0 0 456 80"
              fill="none"
              className="scale-75 origin-left xl:scale-100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 0L48.9806 27.6393H78.0423L54.5309 44.7214L63.5114 72.3607L40 55.2786L16.4886 72.3607L25.4691 44.7214L1.95774 27.6393H31.0194L40 0Z"
                fill="#FFAE3C"
              />
              <path
                d="M134 0L142.981 27.6393H172.042L148.531 44.7214L157.511 72.3607L134 55.2786L110.489 72.3607L119.469 44.7214L95.9577 27.6393H125.019L134 0Z"
                fill="#FFAE3C"
              />
              <path
                d="M228 0L236.981 27.6393H266.042L242.531 44.7214L251.511 72.3607L228 55.2786L204.489 72.3607L213.469 44.7214L189.958 27.6393H219.019L228 0Z"
                fill="#FFAE3C"
              />
              <path
                d="M322 0L330.981 27.6393H360.042L336.531 44.7214L345.511 72.3607L322 55.2786L298.489 72.3607L307.469 44.7214L283.958 27.6393H313.019L322 0Z"
                fill="#FFAE3C"
              />
              <path
                d="M416 0L424.981 27.6393H454.042L430.531 44.7214L439.511 72.3607L416 55.2786L392.489 72.3607L401.469 44.7214L377.958 27.6393H407.019L416 0Z"
                fill="#FFAE3C"
              />
            </svg>
          </div>
        </div>
      </div>
         ) })
      }
      </div>
      <div className="w-full flex  gap-20 cont2">
      {
        [1,1,1,1,1,1,1].map((i,k)=>{
            return(
      <div key={k} className="flex gap-10 my-20">
        <div className="xl:h-80 xl:w-[440px] border-2 rounded-3xl border-black flex flex-col  py-5 px-7">
          <div className="w-full flex gap-5 font-medium text-2xl items-center">
            <div className="rounded-full size-10 bg-gray-500"></div>
            <div>
            <p>Angela Sabani</p>
            <p style={nunito.style} className="text-sm text-black/50">Octomber,2024</p>

            </div>
          </div>
          <p style={nunito.style} className="text-base xl:text-xl mt-5 xl:mt-8">
            Lorem ipsum dolor sit amet consectetur. Posuere quisque neque arcu
            semper. Lectus aliquam ullamcorper tempor nulla convallis interdum.{" "}
          </p>
          <div>
            <svg
              width="200"
              height="80"
              viewBox="0 0 456 80"
              fill="none"
              className="scale-75 origin-left xl:scale-100"

              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 0L48.9806 27.6393H78.0423L54.5309 44.7214L63.5114 72.3607L40 55.2786L16.4886 72.3607L25.4691 44.7214L1.95774 27.6393H31.0194L40 0Z"
                fill="#FFAE3C"
              />
              <path
                d="M134 0L142.981 27.6393H172.042L148.531 44.7214L157.511 72.3607L134 55.2786L110.489 72.3607L119.469 44.7214L95.9577 27.6393H125.019L134 0Z"
                fill="#FFAE3C"
              />
              <path
                d="M228 0L236.981 27.6393H266.042L242.531 44.7214L251.511 72.3607L228 55.2786L204.489 72.3607L213.469 44.7214L189.958 27.6393H219.019L228 0Z"
                fill="#FFAE3C"
              />
              <path
                d="M322 0L330.981 27.6393H360.042L336.531 44.7214L345.511 72.3607L322 55.2786L298.489 72.3607L307.469 44.7214L283.958 27.6393H313.019L322 0Z"
                fill="#FFAE3C"
              />
              <path
                d="M416 0L424.981 27.6393H454.042L430.531 44.7214L439.511 72.3607L416 55.2786L392.489 72.3607L401.469 44.7214L377.958 27.6393H407.019L416 0Z"
                fill="#FFAE3C"
              />
            </svg>
          </div>
        </div>
      </div>
         ) })
      }
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
