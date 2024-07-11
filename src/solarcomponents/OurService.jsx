import { Image } from "@nextui-org/react";
import React from "react";
import serviceImg from "../assets/serviceImg.svg";
import smileface from "../assets/smileface.svg";
const ServiceCard = (props) => {
  return (
    <div className="flex-row flex gap-6 rounded-md   p-6">
      <Image
        src={props.image || smileface}
        alt="smile"
        className="object-fill "
      />
      <div className="flex flex-col gap-6 text-black pr-[9%]">
        <h3 className="text-xl font-bold  ">
          {props.title || "Free Consultation"}
        </h3>
        <p className="  font-light text-slate-700 max-w-md">
          {props.description ||
            "Receive expert advice and a customized solar solution tailored to your energy needs."}
        </p>
      </div>
    </div>
  );
};

export default function OurService(props) {
  return (
    <div className="flex p-10 py-20  justify-center   items-center">
      <div className="flex flex-row bg-white  py-14   shadow-xl rounded-[4rem]">
        <Image
          src={props.image || serviceImg}
          alt="service"
          width={900}
          className="object-fill"
        />
        <div className="flex flex-col gap-14 pt-20">
          <p className=" font-bold text-xl text-[#7959D4]">Features</p>
          <h2 className="text-3xl font-bold text-black">Our Services</h2>
          <div className="flex-col flex gap-4 mt-[3%]">
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
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </div>
  );
}
