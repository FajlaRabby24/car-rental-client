import React from "react";
import Banner from "../sections/Home/Banner";
import WhyChooseUs from "../sections/Home/WhyChooseUs";
import RecentListing from "../sections/Home/RecentListing";
import SpacialOffers from "../sections/Home/SpacialOffers";
import Feedbacks from "../sections/Home/Feedbacks";

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
