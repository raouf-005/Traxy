import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./styles/pack.css";
import { Image, Input } from "@nextui-org/react";
import packcamera from "../assets/cameras/packcamera.svg";
import dvr from "../assets/cameras/dvr.svg";
import { Slider } from "@nextui-org/react";
import Order from "./Order";

const packsInfo = [
  {
    name: "Pack2MP2",
    price: "28000",
    caractesristics: [
      "Camera Dahua 2MP",
      "XVR 4P Dahua",
      "HDD 500GB",
      "BLOC ALIM 4P",
      "Fihe BNC/ELEC , CABLE 20M",
    ],
  },
  {
    name: "Pack2MP4",
    price: "39100",
    caractesristics: [
      "Camera Dahua 2MP",
      "XVR 4P Dahua",
      "HDD 500GB",
      "BLOC ALIM 4P",
      "Fihe BNC/ELEC , CABLE 40M",
    ],
  },
  {
    name: "Pack2MP6",
    price: "54100",
    caractesristics: [
      "Camera Dahua 2MP",
      "XVR 8P Dahua",
      "HDD 500GB",
      "BLOC ALIM 8P",
      "Fihe BNC/ELEC , CABLE 60M",
    ],
  },
  {
    name: "Pack2MP8",
    price: "63700",
    caractesristics: [
      "Camera Dahua 2MP",
      "XVR 8P Dahua",
      "HDD 500GB",
      "BLOC ALIM 8P",
      "Fihe BNC/ELEC  CABLE 80M",
    ],
  },
  {
    name: "Pack5MP2",
    price: "31000",
    caractesristics: [
      "Camera Dahua 5MP",
      "XVR 4P Dahua",
      "HDD 500GB",
      "BLOC ALIM 4P",
      "Fihe BNC/ELEC  CABLE 20M",
    ],
  },
  {
    name: "Pack5MP4",
    price: "45100",
    caractesristics: [
      "Camera Dahua 5MP",
      "XVR 4P Dahua",
      "HDD 500GB",
      "BLOC ALIM 4P",
      "Fihe BNC/ELEC  CABLE 40M",
    ],
  },
  {
    name: "Pack5MP6",
    price: "63100",
    caractesristics: [
      "Camera Dahua 5MP",
      "XVR 8P Dahua",
      "HDD 500GB",
      "BLOC ALIM 8P",
      "Fihe BNC/ELEC  CABLE 60M",
    ],
  },
  {
    name: "Pack5MP8",
    price: "73200",
    caractesristics: [
      "Camera Dahua 5MP",
      "XVR 8P Dahua",
      "HDD 500GB",
      "BLOC ALIM 8P",
      "Fihe BNC/ELEC  CABLE 80M",
    ],
  },
];

export default function Pack() {
  const [packPx, setPackPx] = useState();
  const [cameraNumber, setCameraNumber] = useState(2);
  const [value, setValue] = useState(0);
  const [packInfo, setPackInfo] = useState();

  useEffect(() => {
    const btnSlide = document.getElementById("btnSlider");
    const mp5Btn = document.getElementById("mp5");
    const mp2Btn = document.getElementById("mp2");
    btnSlide.style.left = "4px";
    mp2Btn.style.color = "#A493D4";
    mp5Btn.style.color = "white";
    setPackPx(true);
  }, []);

  const handleFormChange = (e) => {
    const btnSlide = document.getElementById("btnSlider");
    const mp5Btn = document.getElementById("mp5");
    const mp2Btn = document.getElementById("mp2");
    if (e.target.innerText === "5MP") {
      btnSlide.style.left = "4px";
      mp2Btn.style.color = "#A493D4";
      e.target.style.transition = "color 0.1s linear 0.09s";
      e.target.style.color = "white";
      setPackPx(true);
    } else {
      btnSlide.style.left = "50.7%";
      mp5Btn.style.color = "#A493D4";
      e.target.style.transition = "color 0.1s linear 0.09s";
      e.target.style.color = "white";

      setPackPx(false);
    }
  };

  useEffect(() => {
    if (value < 25) {
      setCameraNumber(2);
    } else if (value < 50) {
      setCameraNumber(4);
    } else if (value < 75) {
      setCameraNumber(6);
    } else {
      setCameraNumber(8);
    }
  }, [value]);

  useEffect(() => {
    const packInfo = packsInfo.find(
      (pack) => pack.name === (packPx ? "Pack5MP" : "Pack2MP") + cameraNumber
    );
    console.log(packInfo);
    setPackInfo(packInfo);
  }, [packPx, cameraNumber]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" sm:text-5xl text-gray-700 font-bold  text-center  text-4xl">
        CHOOSE YOUR PACK
      </h1>

      <div className="flex flex-col justify-center items-center mb-6 sm:mb-12">
        <div
          className="mt-6 mb-4 buttonsHolder border-1 border-[#A493D4] rounded-full"
          onClick={(e) => handleFormChange(e)}
        >
          <div id="btnSlider" className=" rounded-full"></div>
          <button
            className={`p-3 px-10  toggle-btn ${packPx ? "text-white" : ""}`}
            id="mp5"
          >
            5MP
          </button>
          <button className="p-3  pl-[54px] pr-[45px] toggle-btn" id="mp2">
            2MP
          </button>
        </div>

        <div className="flex flex-row justify-center gap-[10%] mb-1 items-center">
          <Image
            src={packcamera}
            width={195}
            height={190}
            className=" object-contain object-center"
            alt="packcamera"
          />
          <div className="  text-black items-center gap-[2px] w-[60px]  flex justify-center ">
            <span className="font-medium   text-[3.2rem]">x</span>
            <span className="text-7xl font-normal">{cameraNumber}</span>
          </div>
        </div>
        <Image src={dvr} width={350} alt="dvr" />
      </div>
      <div className="flex flex-col sm:gap-8 gap-4 items-center justify-center">
        <Slider
          size="md"
          value={value}
          onChange={setValue}
          alt="slider"
          classNames={{
            base: "md:max-w-md max-w-sm gap-3",
            track: "border-s-[[#D9D9D9] bg-[#D9D9D9]  h-6",
            filler: "bg-[#D9D9D9]",
          }}
          renderThumb={(props) => (
            <div
              {...props}
              className="group  z-40 top-1/2 bg-background border-none   shadow-md rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
            >
              <span className="transition-transform bg-black rounded-full w-9 z-40 h-9 block group-data-[dragging=true]:scale-80" />
            </div>
          )}
        />
        <Order packInfo={packInfo} />
      </div>
    </div>
  );
}
