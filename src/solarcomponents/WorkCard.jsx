import { Image } from "@nextui-org/react";
import worksImg from "../assets/worksImg.svg";
export default function WorkCard(props) {
  return (
    <div className={`${props.color?'bg-[#7959D4]':'bg-white '} text-slate-200  flex flex-col justify-center items-center pt-5 pb-[7%]  rounded-[2.1rem] gap-6`}>
      
    <div className=" flex justify-center items-center">
      <Image  src={props.image||worksImg}  width={400} alt="works rounded-[2.1rem]  object-fill   " />
    </div>

      <div className={`flex flex-col max-w-md  ${props.color?'':'text-black '}  px-9 sm:gap-6 gap-3`}>
        <h3 className="  sm:text-3xl font-[200]">{props.title}</h3>
        <p className=" sm:leading-8  sm:text-[16px] text-sm">
          {props.description}
        </p>
      </div>
    </div>
  );
}


