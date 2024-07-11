import FeatureCard from "./FeatureCard";


export default function Features (){
    return(
        <div className="flex flex-row justify-around flex-wrap gap-8  py-20 ">
            <FeatureCard />           
            <FeatureCard />           
            <FeatureCard />           

        </div>
    )
}