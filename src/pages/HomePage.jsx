import { useGLTF } from "@react-three/drei";
import useScrollToTop from "../hooks/useScrollToTop";
import useTitle from "../hooks/useTitle";
import Banner from "../sections/Home/Banner";
import Feedbacks from "../sections/Home/Feedbacks";
import RecentListing from "../sections/Home/RecentListing";
import SpacialOffers from "../sections/Home/SpacialOffers";
import WhyChooseUs from "../sections/Home/WhyChooseUs";

const HomePage = () => {
  useScrollToTop();
  useTitle("Car Rental");

  const { scene } = useGLTF("/model/car.glb", true);
  return (
    <div className="space-y-40">
      <Banner scene={scene} />
      <WhyChooseUs />
      <RecentListing />
      <Feedbacks />
      <SpacialOffers />
    </div>
  );
};

export default HomePage;
