import { Image } from "@nextui-org/react";
import worksImg from "../assets/worksImg.svg";
export default function WorkCard() {
  return (
    <div className="bg-[#7959D4] text-slate-200  flex flex-col justify-center items-center pt-5 pb-[7%]  rounded-2xl gap-6">
      
    <div className=" flex justify-center items-center">
      <Image  src={worksImg}  width={400} alt="works rounded-3xl object-fill   " />
    </div>

      <div className="flex flex-col max-w-md   px-9 gap-6">
        <h3 className="  text-2xl">Consultation</h3>
        <p className=" leading-8 font-light">
          We assess your energy requirements and property specifics to design an
          optimal solar solution.
        </p>
      </div>
    </div>
  );
}
