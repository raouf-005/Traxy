import WorkCard from "./WorkCard";
import cameraworks from "../assets/cameraworks.svg";
import solarworks from "../assets/solarworks.svg";
import worksImg from "../assets/worksImg.svg";

const works = [
  {
    title: "Consultation",
    description:
      "We assess your energy requirements and property specifics to design an optimal solar solution.",
    image: worksImg,
    color: false,
  },
  {
    title: "Support",
    description:
      "Benefit from our continuous support and maintenance services to keep your system running smoothly.",
    image: solarworks,
    color: true,
  },
  {
    title: "Activation",
    description:
      " Start generating clean, renewable energy today and effortlessly begin saving on your energy bills immediately.",
    image: cameraworks,
    color: false,
  },
];

export default function HowWorks() {
  return (
    <div className="flex flex-col justify-center items-center py-14 sm:gap-10">
      <h1 className="sm:text-7xl text-4xl font-bold text-white">
        How It Works?
      </h1>
      <div className="flex flex-row gap-12 py-12 px-3 sm:px-0 justify-center items-center flex-wrap">
        {works.map((work, index) => (
          <WorkCard key={index} color={work.color} {...work} />
        ))}
      </div>
    </div>
  );
}
