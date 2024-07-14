import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function CardService(props) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-1 justify-center items-center ">
      <h3 className=" text-white text-2xl   lg:text-[1.7rem] font-semibold  pl-1 rounded-2xl">
        {props.title}
      </h3>
      <Image
        onClick={() => {
          navigate(`/${props.link}`);
        }}
        src={props.image || ""}
        alt="solar panel"
        radius=""
        width={430}
        className={`  p-${props.padding} cursor-pointer lg:h-[400px] h-[350px] object-scale-down `}
        isZoomed
      />

      <Button
        onClick={() => {
          navigate(`/${props.link}`);
        }}
        size="lg"
        className="bg-white   shadow-md  text-md   lg:text-xl  lg:px-10 lg:py-7 rounded-[30px]  font-bold text-black"
      >
        Learn more
      </Button>
    </div>
  );
}