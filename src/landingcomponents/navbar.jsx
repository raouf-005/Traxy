import React from "react";
import { Image, Button } from "@nextui-org/react";
import traxylogo from "../assets/traxylogo.svg";
import FacebookIcon from "../assets/socialmedia/facebook.svg";
import TwitterIcon from "../assets/socialmedia/twitter.svg";
import InstagramIcon from "../assets/socialmedia/instagram.svg";
import { useNavigate } from "react-router-dom";

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

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-row  lg:px-12 flex-wrap  py-4 bg-black text-white lg:justify-between justify-center items-center">
      <div className="flex flex-row   lg:gap-12  items-center ">
        <Image src={traxylogo} alt="logo" width={60} height={60} />
        <h1 className=" text-4xl">TRAXY</h1>
      </div>
      <div className="flex flex-row lg:gap-12   items-center">
        <Button
          onClick={() => navigate("/")}
          className="bg-transparent text-white"
        >
          Home
        </Button>
        <Button className="bg-transparent text-white">Camera Securité</Button>
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
      <div className="flex flex-row gap-8  items-center">
        <div className="flex flex-row gap-2">
          <Button
            onClick={() => {
              window.open("https://www.facebook.com/");
            }}
            radius="full"
            isIconOnly
          >
            <Image src={FacebookIcon} alt="facebook" width={14} height={14} />
          </Button>
          <Button
            onClick={() => {
              window.open("https://www.twitter.com/");
            }}
            radius="full"
            isIconOnly
          >
            <Image src={TwitterIcon} alt="twitter" width={16} height={16} />
          </Button>
          <Button
            onClick={() => {
              window.open("https://www.instagram.com/");
            }}
            radius="full"
            isIconOnly
          >
            <Image src={InstagramIcon} alt="instagram" width={16} height={16} />
          </Button>
        </div>
        <Button className="bg-transparent text-white">Contact us</Button>
      </div>
    </nav>
  );
}
