
import RoomPage from "@/components/apartments/RoomPage";

import { React } from "react";



const Room3 = () => {
    const rooms = [
        {
          src: "/apartments/room3/room3-2.webp",
          w: 720 *0.5,
          h: 960 *0.5,
          m: "230m",
        },
        {
          src: "/apartments/room3/room3-4.webp",
          w: 720 * 0.4,
          h: 960 * 0.4,
          m: "230m",
        },
        {
            src: "/apartments/room3/room3-8.webp",
            w: 720 * 0.6,
            h: 960 * 0.6,
            m: "230m",
          },
        {
          src: "/apartments/room3/room3-3.webp",
          w: 720  * 0.5,
          h: 960 * 0.5,
          m: "230m",
        },
        {
          src: "/apartments/room3/room3-1.webp",
          w: 720 ,
          h: 540,
          m: "230m",
        },
        {
          src: "/apartments/room3/room3-5.webp",
          w: 720 * 0.5,
          h: 960 * 0.5,
          m: "230m",
        },
        {
          src: "/apartments/room3/room3-6.webp",
          w: 720 * 0.6,
          h: 960 * 0.6,
          m: "230m",
        },
        {
          src: "/apartments/room3/room3-7.webp",
          w: 720 * 0.5,
          h: 960 * 0.5,
          m: "230m",
        },
      
        {
          src: "/apartments/room3/room3-9.webp",
          w: 720 * 0.5,
          h: 960 * 0.5,
          m: "230m",
        },
        {
          src: "/apartments/room3/room3-10.webp",
          w: 720 * 0.6,
          h: 960 * 0.6,
          m: "230m",
        },
      ];
      const text1 ="The studio is located in the centre of Kassiopi, on the first floor, right adove our shop (Utopia boutique). It has a shared patio if you want to enjoy the sun or have breakfast. You can use the BBQ if you are in the mood to organise your own meal. The location of the studio is perfect if you want to live your travel experience like a local! "
  const text2 ="The studio has a private bathroom and its own front door. In the studio you will find 2 single beds that they are designed to fit perfectly together, so you have the option to use them as double bed. The fridge and the kitchen equipment allows you to prepare breakfast or cold dishes during the day. "
  
  return (
    <RoomPage title={'room 3'} text1={text1} text2={text2} photos={rooms} num={[1,2,1]} color={"#526749"} />
  )
}

export default Room3