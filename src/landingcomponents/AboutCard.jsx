import { Image } from "@nextui-org/react";
import React from "react";
import handshake from "../assets/handshake.svg";
export default function AboutCard(props) {
  return (
    <div className="flex flex-col text-center gap-8   items-center pb-10 pt-6 px-8  bg-white  rounded-[66px] ">
      <Image
        src={props.image}
        alt="about us"
        className={` rounded-none object-cover h-28 w-40 ${props.title==='Certificates of Excellence and Our Commitment to Quality'?'pt-4 object-contain':''} `}
     
        
      />
      <div className=" gap-10 flex flex-col max-w-[450px] ">
        <h4 className="text-lg   ">{props.title}</h4>
        <p className="text-center  px-5  text-md font-light ">
       {props.description}
        </p>
      </div>
    </div>
  );
}
