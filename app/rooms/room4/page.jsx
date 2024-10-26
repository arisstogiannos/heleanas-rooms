
import RoomPage from "@/components/apartments/RoomPage";

import { React } from "react";


const Room4 = () => {
    const rooms = [
        {
          src: "/apartments/room4/room4-2.webp",
          w: 720 *0.6,
          h: 960 *0.6,
          m: "230m",
        },
        {
          src: "/apartments/room4/room4-4.webp",
          w: 720 * 0.4,
          h: 1280 * 0.4,
          m: "230m",
        },
        {
            src: "/apartments/room4/room4-8.jpg",
            w: 720 * 0.3,
            h: 1280 * 0.3,
            m: "230m",
          },
        {
          src: "/apartments/room4/room4-3.jpg",
          w: 1200  * 0.5,
          h: 675 * 0.5,
          m: "230m",
        },
        {
          src: "/apartments/room4/room4-1.webp",
          w: 1200* 0.6 ,
          h: 900* 0.6,
          m: "230m",
        },
        {
          src: "/apartments/room4/room4-5.webp",
          w: 720 * 0.7,
          h: 540 * 0.7,
          m: "230m",
        },
        {
          src: "/apartments/room4/room4-6.webp",
          w: 720 * 0.4,
          h: 1280 * 0.4,
          m: "230m",
        },
        {
          src: "/apartments/room4/room4-7.webp",
          w: 720 * 0.5,
          h: 960 * 0.5,
          m: "230m",
        },
        {
          src: "/apartments/room4/room4-11.webp",
          w: 720 * 0.5,
          h: 1280 * 0.5,
          m: "230m",
        },
        {
          src: "/apartments/room4/room4-12.webp",
          w: 720 * 0.5,
          h: 960 * 0.5,
          m: "230m",
        },
      
        {
          src: "/apartments/room4/room4-9.jpg",
          w: 720 * 0.7,
          h: 960 * 0.7,
          m: "230m",
        },
        {
          src: "/apartments/room4/room4-10.jpg",
          w: 720 * 0.6,
          h: 960 * 0.6,
          m: "230m",
        },
      ];
      const text1 ="The studio is located in the centre of Kassiopi, on the first floor, right adove our shop (Utopia boutique). It has a shared patio if you want to enjoy the sun or have breakfast. You can use the BBQ if you are in the mood to organise your own meal. The location of the studio is perfect if you want to live your travel experience like a local! "
  const text2 ="The studio has a private bathroom and its own front door. In the studio you will find 2 single beds that they are designed to fit perfectly together, so you have the option to use them as double bed. The fridge and the kitchen equipment allows you to prepare breakfast or cold dishes during the day. "
  
  return (
   <RoomPage title={'room 4'} text1={text1} text2={text2} photos={rooms} num={[1,2,1]} color={"#886e58"}/>
  )
}

export default Room4