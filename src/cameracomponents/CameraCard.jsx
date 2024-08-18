
import React from "react";


export default function CameraCard(props) {

    return(
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
        disableSkeleton
      />


    </div>
    )
}