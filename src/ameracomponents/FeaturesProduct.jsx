import React from "react";
import Camera1 from "../assets/camera.svg";
import phone from "../assets/phone.svg";
import { Image } from "@nextui-org/react";
import { useState } from "react";
import camera1 from "../assets/cameras/camera1.svg"
import camera2 from "../assets/cameras/camera2.svg"
import camera3 from "../assets/cameras/camera3.svg"
import camera4 from "../assets/cameras/camera4.svg"
import camera5 from "../assets/cameras/camera5.svg"
import camera6 from "../assets/cameras/camera6.svg"

import camera1h from "../assets/cameras/camera1h.svg"
import camera1hh from "../assets/cameras/camera1hh.svg"
import camera3h from "../assets/cameras/camera3h.svg"
import camera4h from "../assets/cameras/camera4h.svg"
import camera6h from "../assets/cameras/camera6h.svg"



const layout1 =[
  {
    title:'Cooper Series',
    image:camera1hh,
    image2:camera1
  },{
    title:'Panorama series',
    image:camera2,
    image2:camera2
  },{
    title:'PoC Series',
    image:camera3,
    image2:camera3h
  },
]

const layout2 =[
  {
    title:'Pro Series',
    image:camera4,
    image2:camera4h
  },{
    title:'Lite Series',
    image:camera5,
    image2:camera1h
  },{
    title:'Active Deterrence Series',
    image:camera6,
    image2:camera6h
  },
]




















const CameraCard = (props) => {
  const [image, setImage] = useState(props.image);

  return (
    <div className="flex flex-col text-center justify-center items-center   ">
      <div className="flex flex-col text-center justify-center items-center max-w-md  py-6 rounded-[3.5rem] shadow-xl   ">
        <div className="flex flex-col  justify-center items-center">
          <Image
            src={image||props.image}
            alt="camera"
            width={280}
            className=" object-scale-down object-center  py-3 transition duration-300 transform  hover:scale-105"
            onMouseEnter={() => {
              setImage(props.image2);
            }}
            onMouseLeave={() => {
              setImage(props.image);
            }}
          />
          <h3 className="text-2xl  text-thin max-w-[280px]   ">{props.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default function FeaturesProduct() {
  return (
    <div className="text-black justify-center items-center">
      <h1 className="md:text-7xl text-4xl  text-center py-12">
        Featured Products
      </h1>
      <div className="flex flex-row  justify-evenly gap-[2%] items-center flex-wrap">
        {layout1.map((item) => (
          <CameraCard title={item.title} image={item.image} image2={item.image2} />
        ))}
      </div>
      <h1 className="col-span-3 lg:text-5xl text-2xl md:text-4xl text-center mt-7 py-12">
        Discover Our Top-Selling CCTV Cameras and <br /> Security Systems
      </h1>
      <div className="flex flex-row  justify-evenly  gap-[2%]    items-center flex-wrap">
      {layout2.map((item) => (
          <CameraCard title={item.title} image={item.image} image2={item.image2} />
        ))}
      </div>
    </div>
  );
}
