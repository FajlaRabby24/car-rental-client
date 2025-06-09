import Banner from "../sections/Home/Banner";
import Feedbacks from "../sections/Home/Feedbacks";
import RecentListing from "../sections/Home/RecentListing";
import SpacialOffers from "../sections/Home/SpacialOffers";
import WhyChooseUs from "../sections/Home/WhyChooseUs";

const HomePage = () => {
  return (
    <div className="space-y-40">
      <Banner />
      <WhyChooseUs />
      <RecentListing />
      <Feedbacks />
      <SpacialOffers />
    </div>
  );
};

export default HomePage;
