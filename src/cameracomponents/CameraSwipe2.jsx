import React from "react";
import { useState } from "react";
import { Image } from "@nextui-org/react";




export default function CameraSwipe2(props) {

    const [image, setImage] = useState(props.image);

    return (
      <div className="flex flex-col text-center justify-center items-center   ">
        <div className="flex flex-col text-center justify-center items-center  min-w-64 py-6 rounded-[3.5rem] shadow-xl   ">
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

}