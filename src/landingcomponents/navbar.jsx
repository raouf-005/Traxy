import React from "react";
import { Image, Button } from "@nextui-org/react";
import traxylogo from "../assets/traxylogo.svg";
import FacebookIcon from "../assets/socialmedia/facebook.svg";
import TwitterIcon from "../assets/socialmedia/twitter.svg";
import InstagramIcon from "../assets/socialmedia/instagram.svg";
import TiktokIcon from "../assets/socialmedia/tiktok.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Menu from "../assets/menu.svg";

const menuItems = [
  "Home",
  "Camera Securité",
  "Energy Solaire",
  "GPS tracking System",
];

export const handleClick = (anchor) => () => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Navbar3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigatemenu = (item) => {
    if (item === "Home") {
      navigate("/");
    }
    if (item === "Camera Securité") {
      navigate("/camera");
    }
    if (item === "Energy Solaire") {
      navigate("/solar");
    }
    if (item === "GPS tracking System") {
      navigate("/gps");
    }
  };

  return (
    <>
      <nav className="flex flex-row  lg:px-12 px-6  py-3 bg-black text-white justify-between  items-center">
        <div className="flex flex-row   lg:gap-12  items-center ">
          <Image src={traxylogo} alt="logo" width={60} height={60} />
          <h1 className=" text-4xl">TRAXY</h1>
        </div>
        <div className="lg:flex flex-row gap-[3.7%]  px-2  items-center hidden flex-1 justify-center">
          <Button
            onClick={() => navigate("/")}
            className="bg-transparent text-white"
          >
            Home
          </Button>
          <Button
            onClick={() => {
              navigate("/camera");
            }}
            className="bg-transparent text-white"
          >
            Camera Securité
          </Button>
          <Button
            onClick={() => {
              navigate("/solar");
            }}
            className="bg-transparent text-white"
          >
            Energy Solaire
          </Button>
          <Button
            onClick={() => {
              navigate("/gps");
            }}
            className="bg-transparent text-white"
          >
            GPS tracking System
          </Button>
        </div>
        <div className=" flex-row gap-[3%]  items-center hidden md:flex">
          <div className="flex flex-row gap-2">
            <Button
              onClick={() => {
                window.open("https://www.facebook.com/WWW.S3.DZ");
              }}
              radius="full"
              isIconOnly
            >
              <Image src={FacebookIcon} alt="facebook" width={14} height={14} />
            </Button>
            <Button
              onClick={() => {
                window.open("https://www.tiktok.com/@traxy.dz");
              }}
              radius="full"
              isIconOnly
            >
              <Image src={TiktokIcon} alt="tiktok" width={16} height={16} />
            </Button>
            <Button
              onClick={() => {
                window.open("https://www.instagram.com/traxy.dz/");
              }}
              radius="full"
              isIconOnly
            >
              <Image
                src={InstagramIcon}
                alt="instagram"
                width={16}
                height={16}
              />
            </Button>
          </div>
          <Button className="bg-transparent text-white">
          <a href="mailto:support@traxy.dz?">Contact us</a>
          </Button>
        </div>
        <Button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="flex md:hidden bg-transparent w-14 h-14  rounded-full "
          isIconOnly
        >
          <Image src={Menu} alt="logo" />
        </Button>
      </nav>
      {isMenuOpen && (
        <div className="flex flex-col pt-20 pb-6  justify-around px-10  bg-black h-screen md:hidden">
          <div className="flex flex-col  items-start  gap-2">
            {menuItems.map((item) => (
              <Button
                key={item}
                onClick={() => {
                  navigatemenu(item);
                }}
                className="bg-transparent text-lg text-white"
              >
                {item}
              </Button>
            ))}
          </div>
          <div className=" flex flex-col gap-12">
            <div className="flex flex-row gap-3 justify-center items-center ">
              <Button
                onClick={() => {
                  window.open("https://www.facebook.com/");
                }}
                radius="full"
                isIconOnly
                className=" w-14 h-14"
              >
                <Image
                  src={FacebookIcon}
                  alt="facebook"
                  width={22}
                  height={22}
                />
              </Button>
              <Button
                onClick={() => {
                  window.open("https://www.twitter.com/");
                }}
                radius="full"
                isIconOnly
                className=" w-14 h-14"
              >
                <Image src={TwitterIcon} alt="twitter" width={28} height={28} />
              </Button>
              <Button
                onClick={() => {
                  window.open("https://www.instagram.com/");
                }}
                radius="full"
                isIconOnly
                className=" w-14 h-14"
              >
                <Image
                  src={InstagramIcon}
                  alt="instagram"
                  width={28}
                  height={28}
                />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <div className=" flex flex-row justify-center items-center gap-8 text-slate-200/80 ">
                <p>Terms of Conditions</p>
                <p>Privacy Policy</p>
              </div>
              <p className=" text-sm text-slate-200/60 flex justify-center items-center">
                Copyright © 2024 TRAXY. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
