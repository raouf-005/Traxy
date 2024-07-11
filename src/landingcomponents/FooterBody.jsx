import { Input } from "@nextui-org/react";
import React from "react";
import { Button, Image } from "@nextui-org/react";
import FacebookIcon from "../assets/socialmedia/facebook.svg";
import TwitterIcon from "../assets/socialmedia/twitter.svg";
import InstagramIcon from "../assets/socialmedia/instagram.svg";
export default function   FooterBody() {
  return (
    <div className="grid md:grid-cols-[37%,36%,16%] grid-cols-[60%,35%] md:pt-32 md:pb-20 pt-10  pb-8   items-top   gap-4">
      <div className="   text-white   flex-col items-center hidden md:flex   gap-10 ">
        <p className="text-6xl font-semibold">Traxy</p>
        <p className="text-md font-slate-200 font-normal ">
          TRACKING FROM <span className="text-[#B28EFF] ">X</span> TO
          <span className="text-[#F0A64F]"> Y</span>
        </p>
      </div>
      <div className=" flex flex-col  gap-2 py-2    md:pl-0 pl-[13%] ">
        <h2 className="text-white font-bold text-2xl">Contact us</h2>

        <div className="max-w-[450px] text-slate-200 flex flex-col gap-2  ">
          <p className="text-lg font-light">Feel Free to ask</p>
          <div className="flex flex-col flex-wrap gap-2 text-slate-100   ">
            <p>support@traxy.dz</p>
            <p>+213 555 555 555</p>
            <p>1234 Street Name, City Name, United States</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  items-center gap-[27%]  py-2">
        <h4 className=" text-white  font-normal text-2xl">Social</h4>
        <div className="flex flex-row gap-2  ">
          <Button
              onClick={() => {
                window.open('https://www.facebook.com/');
              }}
            radius="full"
            size="lg"
            isIconOnly
            className=" bg-gray-500  md:w-[58px] md:h-[58px] "
          >
            <Image src={FacebookIcon} alt="facebook" width={20} height={20} />
          </Button>
          <Button
            onClick={() => {
              window.open('https://www.twitter.com/');
            }}
            radius="full"
            size="lg"
            isIconOnly
            className=" bg-gray-500  md:w-[58px] md:h-[58px]"
          >
            <Image src={TwitterIcon} alt="twitter" width={22} height={22} />
          </Button>
          <Button
            radius="full"
            size="lg"
            isIconOnly
            className=" bg-gray-500  md:w-[58px] md:h-[58px]"
            onClick={() => {
              window.open('https://www.instagram.com/');
            }}
          >
            <Image src={InstagramIcon} alt="instagram" width={22} height={22} />
          </Button>
        </div>
      </div>
    </div>
  );
}
