import React from "react";
import { Image, Button } from "@nextui-org/react";
import traxylogo from "../assets/traxylogo.svg";
export default function Navbar() {
  return (
    <nav className="flex flex-row  px-12  py-5 bg-black text-white justify-between">
      <div className="flex flex-row   gap-12  items-center ">
        <Image src={traxylogo} alt="logo" width={60} height={60} />
        <h1 className=" text-4xl">TRAXY</h1>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Button href="/" className="bg-transparent text-white">Camera Securité</Button>
        <Button href="/about" className="bg-transparent text-white">Energy Solaire</Button>
        <Button href="/services" className="bg-transparent text-white">GPS tracking System</Button>
        <Button href="/contact" className="bg-transparent text-white">Produits</Button>
      </div>
      <div className="flex flex-row gap-8  items-center">
        <div className="flex flex-row gap-2">
        <Button radius="full" isIconOnly></Button>
        <Button radius="full" isIconOnly></Button>
        <Button radius="full" isIconOnly></Button>
    
        </div>
        <Button className="bg-transparent text-white">Contact us</Button>
        
      </div>
    </nav>
  );
}
