import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function CardService(props) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center ">
      <h3 className=" text-white text-[1.7rem] font-semibold  pl-1 rounded-2xl">
        {props.title}
      </h3>
        <Image
          src={props.image || ""}
          alt="solar panel"
          radius=""
          width={430}
          className={`  p-${props.padding} cursor-pointer h-[400px] object-contain `}
          isZoomed
        />
   

      <Button
        size="lg"
        className="bg-white   shadow-md    text-xl  px-10 py-7 rounded-[30px]  font-bold text-black"
      >
        Learn more
      </Button>
    </div>
  );
}
