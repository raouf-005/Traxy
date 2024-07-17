import React from "react";
import AboutCard from "./AboutCard";
import handshake from "../assets/handshake.svg";
import star from "../assets/star.svg";
import rankimg from "../assets/rankimg.svg";

const list = [
  {
    title: "Certificates of Excellence and Our Commitment to Quality",
    description:
      "Traxy has earned over 100 certificates of excellence from esteemed public companies. We are dedicated to superior quality, innovation, and efficiency, ensuring customer satisfaction and project success. Our impressive track record allows us to expand our services and meet evolving market needs",
    image: rankimg,
  },
  {
    title: "Qualified Consulting & Project Support",
    description:
      "Traxy supports installers and planners of solar energy, GPS tracking, and security systems through every project phase. We offer high-quality products, specialized expertise, and exceptional service. Our commitment to excellence ensures precision, quality, reliability, and customer satisfaction.",
    image: handshake,
  },
  {
    title: "Exceptional Global Products",
    description:
      "At Traxy, we partner with leading manufacturers to provide clients with the latest technologies and highest quality products. We strive to exceed expectations by offering advanced, reliable solutions that ensure clients achieve their goals efficiently. Choosing Traxy means benefiting from our expertise and high-quality products, ensuring a successful and sustainable partnership based on trust and excellence.",
    image: star,
  },
];

export default function AboutUs() {
  return (
    <div className=" bg-custom rounded-bl-[160px] ">
      <div
        className="flex flex-col gap-8 md:gap-16 text-center py-32   bg-[#7959D4] rounded-tr-[160px] rounded-bl-[160px]"
        id="about-section"
      >
        <h1 className=" text-white  text-5xl md:text-6xl lg:text-8xl font-bold  ">
          ABOUT US
        </h1>
        <p className="md:leading-[48px]  leading-7 text-md  lg:text-xl px-12 font-light text-white">
        Established in 2011, Traxy has become a leader in advanced fleet management solutions, GPS tracking systems, security solutions, and renewable energy technologies in Algeria. With over 13 years of experience, our expert team brings extensive market knowledge and specialized expertise to each project, ensuring high-quality service and support. We believe in delivering top-quality products to ensure customer satisfaction. We partner with the world's leading manufacturers to provide the best devices and technologies. Our branches in Batna, Algiers, and Oran enable us to offer superior technical support and services across the country.
        </p>
        <div className=" flex flex-row justify-center flex-wrap    gap-[3%]">
          {list.map((item) => (
            <AboutCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
