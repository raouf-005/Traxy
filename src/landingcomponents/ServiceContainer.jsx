import React from "react"
import CardService from "./CardService"
import TaxyCard from "../assets/taxiCard.svg"
import CameraCard from "../assets/camera.svg"
import SolarPanel from "../assets/solarpanel2.svg";
export default function ServiceContainer() {
    return(
        <div className=" flex  flex-row py-24 justify-center gap-10 bg-[#7959D4]   rounded-bl-[190px]" >
            <CardService image={SolarPanel} title={"SOLAR ENERGY"}  padding={'10'}/>
            <CardService image={TaxyCard} title={"GPS TRACKING SYSTEM"} padding={'4'}/>
            <CardService image={CameraCard}  title={"CAMERA  SECURITY"} padding={'20'}/>
        </div>
    )

}