import React from "react";
import AboutCard from "./AboutCard";
import handshake from "../assets/handshake.svg";
import star from "../assets/star.svg";
import rankimg from "../assets/rankimg.svg";

const list = [
  {
    title: "Certificates of Excellence and Our Commitment to Quality",
    description:
      "Traxy proudly boasts more than 100 certificates of excellence from esteemed public companies, a testament to our dedication in providing the best solutions and services to our clients. We are constantly striving to offer superior quality, innovation, and efficiency to ensure customer satisfaction and the success of their projects. With this impressive track record, we continue to expand our services and deliver advanced solutions that meet the evolving needs of the market.",
    image: star,
  },
  {
    title: "Qualified Consulting & Project Support",
    description:
      "Traxy supports installers and planners of solar energy systems, GPS tracking systems, and security systems of all sizes through every phase of the project. We provide high-quality products, specialized expertise, and exceptional service. Our commitment to excellence ensures that every project is executed with precision, adhering to the highest standards of quality and reliability, achieving customer satisfaction and operational smoothness.",
    image: handshake,
  },
  {
    title: "Exceptional Global Products",
    description:
      "At Traxy, we are committed to providing our clients with the best global products by partnering with leading manufacturers to ensure access to the latest technologies and highest quality. We believe that the best deserves the best, and we strive to meet and exceed our clients' expectations. By offering advanced and reliable solutions, we guarantee that our clients achieve their goals efficiently and smoothly. Choosing Traxy means benefiting from our specialized expertise and high-quality products, ensuring a successful and sustainable partnership based on trust and excellence.",
    image: rankimg,
  },
];

export default function AboutUs() {
  return (
    <div className=" bg-custom rounded-bl-[160px] ">
      <div className="flex flex-col gap-8 md:gap-16 text-center py-32   bg-[#7959D4] rounded-tr-[160px] rounded-bl-[160px]" id='about-section'>
        <h1 className=" text-white  text-5xl md:text-6xl lg:text-8xl font-bold  ">
          ABOUT US
        </h1>
        <p className="md:leading-[48px]  leading-7 text-md  lg:text-xl px-12 font-light text-white">
          Established in 2011, Traxy has emerged as a leader in providing
          advanced fleet management solutions, GPS tracking systems, security
          solutions, and renewable energy technologies in Algeria. With over 13
          years of experience, our expert team brings extensive market knowledge
          and specialized expertise to each project, ensuring high-quality
          service and support. We believe that delivering top-quality products
          is the key to customer satisfaction. Therefore, we partner with the
          world's leading manufacturers to ensure our clients receive the best
          devices and technologies available. Our strategically located branches
          in Batna, Algiers, and Oran enable us to offer superior technical
          support and services across the country.
        </p>
        <div className=" flex flex-row justify-center flex-wrap  gap-8">
          {list.map((item) => (
            <AboutCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
