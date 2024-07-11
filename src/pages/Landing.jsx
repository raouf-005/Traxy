import Navbar from "../landingcomponents/navbar";
import Video from "../landingcomponents/Video";
import ServiceContainer from "../landingcomponents/ServiceContainer";
import EarthContainer from "../landingcomponents/EarthContainer";
import AboutUs from "../landingcomponents/AboutUs";
import Footer from "../landingcomponents/Footer";

export default function Landing() {
  return (
    <div className="flex flex-col  bg-black/80  bg-opacity-45 " >
      <Navbar />
      <Video />
      <ServiceContainer />
      <EarthContainer />
      <AboutUs />
      <Footer />
    </div>
  );
}
