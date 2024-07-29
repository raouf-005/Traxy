import React from "react";
import { Image, Button } from "@nextui-org/react";
import traxylogo from "../assets/traxylogo.svg";
import FacebookIcon from "../assets/socialmedia/facebook.svg";
import TwitterIcon from "../assets/socialmedia/twitter.svg";
import InstagramIcon from "../assets/socialmedia/instagram.svg";
import TiktokIcon from "../assets/socialmedia/tiktok.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "../assets/menu.svg";





const menuItems = [
  "Main",
  "Security Camera",
  "Solar Energy",
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
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isScrollDisabled) {
      document.body.classList.add('overflow-hidden');
      document.body.classList.add('h-screen');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('h-screen');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('h-screen');
    };
  }, [isScrollDisabled]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = prevScrollPos > currentScrollPos;

    setVisible(isVisible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navigatemenu = (item) => {
    if (item === "Main") {
      navigate("/");
    }
    if (item === "Security Camera") {
      navigate("/camera");
    }
    if (item === "Solar Energy") {
      navigate("/solar");
    }
    if (item === "GPS tracking System") {
      navigate("/gps");
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`flex flex-row  lg:px-12 px-6  sm:fixed rela     w-full  z-50 py-3 bg-black text-white justify-between  items-center ${
          visible ? "sm:top-0" : "sm:-top-24"
        }`}
      >
        <div className="flex flex-row gap-2  lg:gap-12  items-center ">
          <Image src={traxylogo} alt="logo"  width={60} height={60} className=" max-w-[3.2rem] mb-3  md:max-w-80"/>
          <h1 className=" sm:text-4xl   text-3xl">TRAXY</h1>
        </div>
        <div className="lg:flex flex-row gap-[3.7%]  px-2  items-center hidden flex-1 justify-center">
          <Button
            onClick={() => navigate("/")}
            className="bg-transparent text-white"
          >
            Main
          </Button>
          <Button
            onClick={() => {
              navigate("/camera");
            }}
            className="bg-transparent text-white"
          >
            Security Camera
          </Button>
          <Button
            onClick={() => {
              navigate("/solar");
            }}
            className="bg-transparent text-white"
          >
            Solar Energy
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
            setIsScrollDisabled(!isScrollDisabled);
          }}
          className="flex md:hidden bg-transparent w-14 h-14  rounded-full   "
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
