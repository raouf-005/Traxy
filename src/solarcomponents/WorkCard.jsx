import { Image } from "@nextui-org/react";
import worksImg from "../assets/worksImg.svg";
export default function WorkCard() {
  return (
    <div className="bg-[#7959D4]  flex flex-col justify-center items-center py-8 px-8 pb-40  rounded-2xl gap-6">
      

      <Image  src={worksImg} alt="works rounded-3xl object-fill px-6  " />

      <div className="flex flex-col  px-6 gap-6">
        <h3 className="  text-2xl">Consultation</h3>
        <p className=" leading-8 font-light">
          We assess your energy requirements and property specifics to design an
          optimal solar solution.
        </p>
      </div>
    </div>
  );
}
