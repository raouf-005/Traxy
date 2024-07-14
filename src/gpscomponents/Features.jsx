import { image } from "@nextui-org/react";
import FeatureCard from "./FeatureCard";
import Shape from "../assets/Shape.svg";
import price from "../assets/price.svg";
import percent from "../assets/percent.svg";

const features = [
  {
    title: "Better Deals",
    description: "Apparently we had reached a great height in the atmosphere.",
    image: Shape,
  },
  {
    title: "Best Price",
    description:
      "By the same illusion which lifts the horizon of the sea to the level.",
    image: price,
  },
  {
    title: "Top Discounts",
    description:
      "Discover unparalleled savings that shine in the vast expanse of unbeatable deals.",
    image: percent,
  },
];

export default function Features() {
return (
    <div className="flex flex-row justify-around flex-wrap gap-8  py-20 ">
        {features.map((feature, index) => (
            <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
            />
        ))}
    </div>
);
}
