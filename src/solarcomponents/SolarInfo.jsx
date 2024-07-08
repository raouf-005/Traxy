import { Image } from "@nextui-org/react";

export default function SolarInfo() {
    return(
        <div className="">
            <div className="">
                <Image src="/assets/solar1.jpg" alt="solar" width={500} height={500} className="object-fill" />
            </div>
            <div className="flex flex-row gap-10">
                <div className="flex flex-col gap-40">
                    <h2>
                Serie 7
                </h2>
                <p>
                A High-Quality Thin Film CdTe Module Made in America, for America
                </p>  
                </div>
                <Image src="/assets/solar2.jpg" alt="solar" width={500} height={500} className="object-fill" />
            </div>

        </div>
    )

}