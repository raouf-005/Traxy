import { Button, Image } from "@nextui-org/react";
import solar1 from "../images/solar1.svg";
import solar4 from "../images/solar4.svg";


export default function About() {
  return (
    <div className=" flex flex-col  p-6 py-12 gap-16">
      <div className="">
        <h4 className=" text-2xl font-bold text-[#7959D4] mb-2">ABOUT</h4>
        <h2 className=" text-4xl  font-bold text-white">Why Choose Us?</h2>
      </div>
      <div className="flex flex-row justify-center gap-10  ">
        <div className=" flex flex-row items-center justify-center  shadow-xl p-8  gap-10 bg-white rounded-3xl">
          <Image src={solar1} width={400} alt="earth" className="rounded-3xl    object-cover " />
          <div className="flex flex-col gap-12 max-w-md items-start">
            <p className=" text-lg font-semibold text-[#7959D4]">solar energy</p>
            <h2 className=" text-3xl text-balance font-bold">Expert Installation</h2>
            <p className=" text-slate-400 leading-9">
              Our certified technicians provide flawless installation for
              maximum energy efficiency and longevity.
            </p>
            <Button className=" bg-[#7959D4] rounded-2xl  max-w-md text-md h-14 px-12  text-white">
              Read More
            </Button>
          </div>
        </div>
        <div className="flex flex-row  shadow-xl  justify-center items-center p-7  bg-white rounded-3xl ">
        <Image src={solar4} width={390}   alt="earth" className="rounded-3xl      object-fill " />
        </div>
      </div>
    </div>
  );
}
