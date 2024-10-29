import RoomPage from "@/components/apartments/RoomPage";
import { React } from "react";



const Room1 = () => {
  const num =[1,2,1]
  const rooms = [
    {
      src: "/apartments/room1/room1-2.webp",
      w: 360* 1.2,
      h: 480* 1.2,
      m: "230m",
    },
    {
      src: "/apartments/room1/room1-3.webp",
      w: 360 * 1.5,
      h: 270 * 1.5,
      m: "230m",
    },
    {
      src: "/apartments/room1/room1-4.jpg",
      w: 288 * 1.5,
      h: 384 * 1.5,
      m: "230m",
    },
    {
      src: "/apartments/room1/room1-1.webp",
      w: 400* 1.4,
      h: 300* 1.4,
      m: "230m",
    },
    {
      src: "/apartments/room1/room1-5.webp",
      w: 360,
      h: 480,
      m: "230m",
    },
    {
      src: "/apartments/room1/room1-6.webp",
      w: 360* 1.3,
      h: 480* 1.3,
      m: "230m",
    },
  ];

  const text1 ="The studio is located in the centre of Kassiopi, on the first floor, right adove our shop (Utopia boutique). It has a shared patio if you want to enjoy the sun or have breakfast. You can use the BBQ if you are in the mood to organise your own meal. The location of the studio is perfect if you want to live your travel experience like a local! "
  const text2 ="The studio has a private bathroom and its own front door. In the studio you will find 2 single beds that they are designed to fit perfectly together, so you have the option to use them as double bed. The fridge and the kitchen equipment allows you to prepare breakfast or cold dishes during the day. "
  return (
    <RoomPage title={'room 1'} num={num} photos={rooms} text1={text1} text2={text2} color={"#2d4739"}/>
  );
};

export default Room1;
