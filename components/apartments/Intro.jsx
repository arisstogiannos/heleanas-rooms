"use client";
import React, { useEffect,  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parisienne } from "next/font/google";

const paris = Parisienne({
    subsets: ["latin"],
    weight: ["400"],
  });

const Intro = ({containerRef}) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        const containerR = containerRef.current;
        const tltext = gsap.timeline({
            scrollTrigger: {
              trigger: containerR,
            //   pin: true,
              start:"top+=200px center",
              end:"top+=600px center",
              markers: false, // Show markers for debugging
              toggleActions: "play reverse play reverse"
            },
          });
          tltext.fromTo(
            ".word",
            {
              y: 40,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3, // Adjust the duration for each word's entrance
              ease: "circ.out",
              stagger: 0.01, // Adjust the delay between each word's appearance
            }
          );
          const tltext2 = gsap.timeline({
            scrollTrigger: {
              trigger: containerR,
            //   pin: true,
              start:"top+=400px center",
              end:"top+=600px center",
              markers: false, // Show markers for debugging
              toggleActions: "play reverse play reverse"
            },
          });
          tltext2.fromTo(
            ".word2",
            {
              y: 40,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3, // Adjust the duration for each word's entrance
              ease: "circ.out",
              stagger: 0.01, // Adjust the delay between each word's appearance
            }
          );
           
    },[])
const text1 ="Our business is operating since 1975, but it's recently renovated (2017), with personal work from my family .The rooms are decorated with wood art made by local artists. It consists of one apartment and three studios, all in the same floor with a beautiful terrace in common. The tarrace is equipped with an umbrella and chairs, if you want to enjoy the sun or a BBQ if you are in the mood to organise your own meal."
const text2 ="The apartment is located in the heart of the village,right opposite of the church and right adove our shop. In radius of 100 meter you can find supermarkets, bars, restaurants, shops, the harbour, the buzantine castle of Kassiopi and the bus station in case you want to visit other villages of Corfu."
  return (
    <div className="myContainer">
      <h1 style={paris.style} className="capitalize text-5xl 3xl:text-8xl my-10 2xl:my-32 mx-auto word">the apartments</h1>
        <div className="w-full mx-auto flex flex-col text-base 2xl:text-2xl">
        <p
            className="     leading-normal   h-fit relative   "
          >
            {text1.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className={
                    " mr-1  relative overflow-hidden inline-flex"
                  }
                >
                  <span
                    className="word "
                    key={index}
                  >
                    {word}
                  </span>
                </span>
              );
            })}
          </p>
        <p
            className=" mt-16 2xl:mt-64   leading-normal   h-fit relative   "
          >
            {text2.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className={
                    " mr-1  relative overflow-hidden inline-flex"
                  }
                >
                  <span
                    className="word2 "
                    key={index}
                  >
                    {word}
                  </span>
                </span>
              );
            })}
          </p>
        {/* <p className=" ">Our business is operating since 1975, but it's recently renovated (2017), with personal work from my family .The rooms are decorated with wood art made by local artists. It consists of one apartment and three studios, all in the same floor with a beautiful terrace in common. The tarrace is equipped with an umbrella and chairs, if you want to enjoy the sun or a BBQ if you are in the mood to organise your own meal.</p> */}

        </div>
        </div>
  )
}

export default Intro