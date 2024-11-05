"use client";
import { Nunito, Parisienne } from "next/font/google";
import React, { useEffect, useRef,  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});


const Testimonials = () => {

    const testimonials1 =[
      {name:'eri sir', photo:'/testimonials/eri-sir.png',date:'5 years ago' ,text:'I love this apartment! In the heart of Cassiopi Village! With a veaw of harbour next to the historic church! Comfortable point to go everywhere by foot Nice and clean rooms to feel like your home !'},
      {name:'Richard', photo:'/testimonials/richard.webp',date:'September 2024' ,text:'The apartment is ideal. It is right on the main street, a few steps from the old harbour but is still quiet, peaceful and private. Spiros is always available and very helpful.'},
      {name:'Marisol', photo:'/testimonials/marisol.webp',date:'july 2024' ,text:'This place is perfect if you want a relax vacation where everything is reachable in a matter of a few minutes. As a solo female traveler I really appreciate how safe it was. The host was very helpful with recommendations regarding the bus and nearby beaches. The room, kitchenette and bathroom were very clean. I would recommend to everyone who plans to visit Kassiopi !!'},
      {name:'Bossard', photo:'/testimonials/bossard.webp',date:'july 2024' ,text:'Thank you again Spiros for your warm welcome as well as your wife. We loved our stay in Kassiopi and in your beautiful home'},
      {name:'Jess', photo:'/testimonials/jess.webp',date:'july 2024' ,text:'I had a lovely stay at Eleanna’s apartment. It was a fantastic location, apartment was very well presented & very kind and helpful hosts.'},
    ]
    const testimonials2 =[
      {name:'Katarzyna', photo:'/testimonials/katarzyna.jpg',date:'August 2021' ,text:'A great host who has helped more than once! The room is as in the photos. Clean and atmospheric. Great location. Were so happy !'},
      {name:'Patrick and Lee', photo:'/testimonials/patrickandlee.webp',date:'June 2019' ,text:'Spiros and Anna are lovely hosts. Their apartment is comfortable and spotlessly clean . It is well located in the centre of town, and an easy walk to some lovely beaches. Yolo the bunny is very cute.'},
      {name:'Artur', photo:'/testimonials/artur.jpg',date:'August 2018' ,text:'This was one of the nicest place that I slept. There were lot of beautiful accents. It is on the main street. 1 minute to harbor, 10 minutes to the best local beaches. Owners have also very nice rabbit :)'},
      {name:'Ngoc Anh', photo:'/testimonials/ngocanh.webp',date:'August 2024' ,text:'A great place to stay! Near the harbor, shopping street and restaurants. Beaches are also close by. Eleanna‘s father was very friendly and very helpful. Only at the weekends the church bells would ring loudly in the morning otherwise we enjoyed our stay very much.'},
      {name:'Brooke', photo:'/testimonials/brooke.webp',date:'june 2024' ,text:'We loved our stay in this beautiful accommodation. The room is very well designed and decorated and situated right in town and 2 minutes to the harbour. Highly recommend staying in this beautiful place and very friendly owner that is very helpful during our stay. Thanks for the great stay.'},
    ]

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
       
           
    },[])
  return (
    <section ref={containerRef} className="w-full overflow-x-hidden  bg-mwhite py-32 flex flex-col">
      <h2  className="capitalize text-4xl lg:text-7xl  mx-auto lg:mb-10">
        what people say
      </h2>
      <div className="flex flex-col gap-0 my-20">
      <div className="w-full flex  gap-20">
      {
        testimonials1.map((t,k)=>{
            return(
      <div key={k} className="flex gap-10 -translate-x-1/2 cont1">
        <div className=" lg:w-[440px] border-2 rounded-3xl border-black flex flex-col  py-5 px-7">
          <div className="w-full flex gap-5 font-medium text-lg xl:text-2xl items-center">
            <div className="rounded-full size-10 bg-gray-500 overflow-hidden items-center justify-center flex"> <Image src={t.photo} width={40} height={40} alt="testimonial photo profile" /></div>
            <div>
            <p>{t.name}</p>
            <p style={nunito.style} className="text-sm text-black/50">{t.date}</p>

            </div>
          </div>
          <p style={nunito.style} className="text-base lg:text-lg mt-5 xl:mt-8">
           {t.text}
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
        testimonials2.map((t,k)=>{
            return(
      <div key={k} className="flex gap-10 my-20">
        <div className=" lg:w-[440px] border-2 rounded-3xl border-black flex flex-col  py-5 px-7">
          <div className="w-full flex gap-5 font-medium text-lg items-center">
          <div className="rounded-full size-10 bg-gray-500 overflow-hidden items-center justify-center flex"> <Image src={t.photo} width={40} height={40} alt="testimonial photo profile" /></div>
          <div>
          <p>{t.name}</p>
            <p style={nunito.style} className="text-sm text-black/50">{t.date}</p>

            </div>
          </div>
          <p style={nunito.style} className="text-base lg:text-lg mt-5 xl:mt-8">
           {t.text}
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
