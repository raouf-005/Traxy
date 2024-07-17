import React from "react";
import { Image } from "@nextui-org/react";
import Dash from "../assets/DASH.svg";
const ServiceCard = (props) => {
  return (
    <div
      className={`flex-row flex gap-6 rounded-md text-white  p-3 px-6 `}
    >
      <Image
        src={props.image }
        alt="smile"
        width={98}
        height={98}
        className={`object-fill  rounded-full `}
      />
      <div className="flex flex-col gap-3 md:gap-4  md:pr-[9%]">
        <h3 className="md:text-2xl  font-bold  ">
          {props.title || "Free Consultation"}
        </h3>
        <p
          className={`text-md  font-light  max-w-md`}
        >
          {props.description ||
            "Receive expert advice and a customized solar solution tailored to your energy needs."}
        </p>
      </div>
    </div>
  );
};

export default function OurServices(props) {
  return (
    <div className="md:px-[5%] px-9 py-20 ">
    <div className="flex flex-col justify-center items-center gap-8 md:gap-24 p-10 md:py-32 py-8 bg-[#B28EFF] text-white rounded-[4rem]">
      <h1 className=" lg:text-9xl md:text-6xl text-4xl  font-bold">Our Services</h1>
      <div className="flex flex-row  justify-center  md:gap-[6%]  xl:gap-[8%]  items-center">
        <Image
          src={Dash}
          alt="progress"
            className="object-fill px-6 hidden lg:flex"
            width={750}
        />
            <div className="flex-col flex gap-10 " >
            {props.list&&props.list.map((item, index) => {
              return (
                <ServiceCard
                  key={index}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  
                />
              );
            })}
          
          </div>
      </div>
    </div>
    </div>
  );
}
