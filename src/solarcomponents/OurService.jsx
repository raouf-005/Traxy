import { Image } from "@nextui-org/react";
import React from "react";
import serviceImg from "../assets/serviceImg.svg";
import smileface from "../assets/smileface.svg";
const ServiceCard = (props) => {
  return (
    <div className={`flex-row flex gap-6 rounded-md ${props.className?'text-white':'text-black'}  p-3 px-6 `}>
      <Image
        src={props.image || smileface}
        alt="smile"
        width={98}
        height={98}
        className={`object-scale-down  ${props.className?'bg-[#816DAB]/70':'bg-[#B28EFF]/50'} rounded-full `}
      />
      <div className="flex flex-col gap-3 md:gap-4  pr-[9%]">
        <h3 className="md:text-2xl  font-bold  ">
          {props.title || "Free Consultation"}
        </h3>
        <p className={`text-md  font-light  ${props.className?'text-white':'text-slate-700'} max-w-md`}>
          {props.description ||
            "Receive expert advice and a customized solar solution tailored to your energy needs."}
        </p>
      </div>
    </div>
  );
};



export default function OurService(props) {
  return (
    <div className={`flex p-10 md:py-20 py-8  justify-center   items-center`} >
      <div className={`flex flex-row    py-14   shadow-xl rounded-[4rem]   ${props.className}`}>
        <Image
          src={props.image || serviceImg}
          alt="service"
          width={900}
          className="object-fill hidden md:flex"
        />
        <div className="flex flex-col md:gap-14 gap-8 sm:pt-20 pl-10 sm:pl-0" id="service-section">
          <p className=" font-bold text-lg text-[#7959D4]">Features</p>
          <h2 className="text-3xl font-semibold ">Our Services</h2>
          <div className="flex-col flex gap-10 mt-[3%]" >
            {props.list&&props.list.map((item, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  className={props.className==='bg-[#B28EFF] text-white'?true:false}
                />
              );
            })}
          
          </div>
        </div>
      </div>
    </div>
  );
}
